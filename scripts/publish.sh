#!/usr/bin/env bash
# Build the static site and publish it as a new commit on the `deploy` branch.
# The IONOS server (git, but no Node.js build possible) then just runs:
#   cd ~/chaconlab && git pull
#
# The commit is made from out/ with a temporary index, so the working tree and
# the current branch are untouched. Files identical to ones already on GitHub
# (PDFs, movies) are not uploaded again.
set -euo pipefail
cd "$(dirname "$0")/.."

rm -rf out
npm run build

git fetch -q origin deploy 2>/dev/null || true
PARENT=()
if git rev-parse -q --verify origin/deploy >/dev/null; then
  PARENT=(-p origin/deploy)
fi

INDEX=$(mktemp -u)
trap 'rm -f "$INDEX"' EXIT
export GIT_INDEX_FILE="$INDEX"
git --work-tree=out add -A -- . ':!**/.DS_Store' ':!.DS_Store'
TREE=$(git write-tree)
unset GIT_INDEX_FILE

if [[ ${#PARENT[@]} -gt 0 && "$TREE" == "$(git rev-parse origin/deploy^{tree})" ]]; then
  echo "Nothing changed since the last publish."
  exit 0
fi

COMMIT=$(git commit-tree "$TREE" ${PARENT[@]+"${PARENT[@]}"} -m "Build of $(git rev-parse --short HEAD)")
git push origin "$COMMIT:refs/heads/deploy"
echo "Published $COMMIT to the deploy branch. On the server: cd ~/chaconlab && git pull"
