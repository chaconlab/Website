#!/usr/bin/env bash
# Build the static site and upload it to IONOS Web Hosting over SFTP.
#
#   ./scripts/deploy.sh            build + upload
#   ./scripts/deploy.sh --dry-run  build + show what would change, upload nothing
#
# Connection settings live in .env.deploy (not committed); see .env.deploy.example.
# The SFTP password is asked for when connecting.
set -euo pipefail
cd "$(dirname "$0")/.."

if [[ ! -f .env.deploy ]]; then
  echo "Missing .env.deploy — copy .env.deploy.example and fill in your IONOS SFTP details." >&2
  exit 1
fi
# shellcheck disable=SC1091
source .env.deploy
: "${IONOS_HOST:?set IONOS_HOST in .env.deploy}"
: "${IONOS_USER:?set IONOS_USER in .env.deploy}"
: "${IONOS_DIR:?set IONOS_DIR in .env.deploy}"

if ! command -v lftp >/dev/null; then
  echo "lftp is not installed. Install it with:  brew install lftp" >&2
  exit 1
fi

DRY=""
[[ "${1:-}" == "--dry-run" ]] && DRY="--dry-run"

rm -rf out
npm run build

# Large media rarely change: upload them only when new or a different size.
# Everything else (pages, scripts, data) is small and always re-sent.
BIG_DIRS=(pdf movies people covers)
EXCLUDES=(--exclude-glob .DS_Store)
for d in "${BIG_DIRS[@]}"; do EXCLUDES+=(--exclude "^$d/"); done

COMMANDS="set sftp:auto-confirm yes; set net:max-retries 3; set net:timeout 30;
mirror --reverse --delete --verbose --parallel=4 $DRY ${EXCLUDES[*]} out/ $IONOS_DIR/;"
for d in "${BIG_DIRS[@]}"; do
  [[ -d "out/$d" ]] && COMMANDS+="
mirror --reverse --delete --ignore-time --verbose --parallel=4 $DRY --exclude-glob .DS_Store out/$d/ $IONOS_DIR/$d/;"
done
COMMANDS+=" bye"

echo "Uploading to sftp://$IONOS_USER@$IONOS_HOST$IONOS_DIR ${DRY:+(dry run)}"
lftp -u "$IONOS_USER" "sftp://$IONOS_HOST" -e "$COMMANDS"
echo "Done."
