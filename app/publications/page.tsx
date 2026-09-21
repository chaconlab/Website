import CoversCarousel from './CoversCarousel';

export default function Publications() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      <div className="mb-12 flex flex-col md:flex-row gap-8 items-start md:justify-between w-full">
        <div className="flex flex-col gap-4 text-sm text-slate-600 bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-sm w-fit">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-slate-800">Jump to:</span>
            <a href="#2022-2024" className="hover:text-primary transition-colors">2022-2024</a> <span className="text-slate-300">|</span>
            <a href="#2020-2016" className="hover:text-primary transition-colors">2020-2016</a> <span className="text-slate-300">|</span>
            <a href="#2015-2011" className="hover:text-primary transition-colors">2015-2011</a> <span className="text-slate-300">|</span>
            <a href="#2010-2006" className="hover:text-primary transition-colors">2010-2006</a> <span className="text-slate-300">|</span>
            <a href="#2005-2001" className="hover:text-primary transition-colors">2005-2001</a> <span className="text-slate-300">|</span>
            <a href="#2000" className="hover:text-primary transition-colors">Last Century</a>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-slate-800">Google Scholar Profiles:</span>
            <a href="http://goo.gl/fwovi" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all">P. Chacón</a>, 
            <a href="http://scholar.google.es/citations?user=0E71qs8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all">J.R. López-Blanco</a>
          </div>
        </div>
        <CoversCarousel />
      </div>

      <div className="space-y-12">
        <section>
          <h2 id="2022-2024" className="scroll-mt-24 text-2xl font-bold mb-6 text-text-main border-b border-border-main pb-2">2022-2024</h2>
          <ul className="space-y-4">
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                M Alcorlo, JR Luque-Ortega, F Gago, A Ortega, M Castellanos, P Chacón..et. al. (2024) Flexible structural arrangement and DNA-binding properties of protein p6 from Bacillus subtillis phage φ29.  Nucleic Acids Research 52 (4), 2045-2065
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="https://academic.oup.com/nar/article/52/4/2045/7590920" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="https://academic.oup.com/nar/article/52/4/2045/7590920" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                IM Hernández, Y Dehouck, U Bastolla, JR López-Blanco, P Chacón (2023) Predicting protein stability changes upon mutation using a simple orientational potential Bioinformatics 39 (1), 1-7
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="https://academic.oup.com/bioinformatics/article/39/1/btad011/6984713" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="https://academic.oup.com/bioinformatics/article/39/1/btad011/6984713" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Z Gao, C Tan, P Chacon, SZ Li (2023) Toward effective and efficient protein inverse folding. arXiv preprint arXiv:2209.12643
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="https://arxiv.org/abs/2209.12643" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="https://arxiv.org/abs/2209.12643" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                JR López-Blanco, Y Dehouck, U Bastolla, P Chacón (2023) Normal Mode Analysis for Fast Loop Conformational Sampling. Journal of Chemical Information and Modeling 62 (18), 4561–4568
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="https://pubs.acs.org/doi/full/10.1021/acs.jcim.2c00870" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="https://pubs.acs.org/doi/full/10.1021/acs.jcim.2c00870" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                A Pepe, J Lasenby, P Chacón (2022) Learning Rotations Mathematical Methods in the Applied Sciences 47 (3), 1-14
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/2022_nat.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/mma.8698" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/2022_nat.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/mma.8698" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                M.T. Bueno-Carrasco, J. Cuéllar, M.I. Flydal, C. Santiago, T. Kråkenes, R Kleppe, J.R. López-Blanco, J.M. Marcilla, M. Teigen, K. Alvira, S. Chacón, P. Martinez, A. Valpuesta (2022) Structural mechanism for tyrosine hydroxylase inhibition by dopamine and reactivation by Ser40 phosphorylation. Nature Comm. 13 (74)
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/2022_nat.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="https://doi.org/10.1038/s41467-021-27657-y" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/2022_nat.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="https://doi.org/10.1038/s41467-021-27657-y" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                C Quignot, P Granger, P Chacón, R Guerois, J Andrean (2021) Atomic-level evolutionary information improves protein-protein interface scoring. Bioinformatics 37 (19), 3175-3181
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/2021_bioinfoa.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="https://doi.org/10.1093/bioinformatics/btab254" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/2021_bioinfoa.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="https://doi.org/10.1093/bioinformatics/btab254" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                C. Quignot, G. Postic, H. Bret, J. Rey, P. Granger, S. Murail, P. Chacón, J. Andreani, P. Tufféry, R. Guerois (2021) InterEvDock3: A combined template-based and free docking server with increased performance through explicit modeling of complex homologs and integration of covariation-based contact maps. Nucleic Acids Research, W277–W28
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/2021_nars.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="https://academic.oup.com/nar/article/49/W1/W277/6274528" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/2021_nars.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="https://academic.oup.com/nar/article/49/W1/W277/6274528" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Barozet, A., Chacón, P., Cortés, J. (2021) Current approaches to flexible loop modeling. Current Research in Structural Biology (3), 187–191
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/2021_CRSB.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="https://www.sciencedirect.com/science/article/pii/S2665928X21000143" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/2021_CRSB.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="https://www.sciencedirect.com/science/article/pii/S2665928X21000143" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                M. Kadukova, K. dos Santos Machado, P. Chacón, S. Grudinin (2021) KORP-PL: a coarse-grained knowledge-based scoring function for protein-ligand interactions, Bioinformatics, 37(7), 943–950
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/2021_bioinfob.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="https://doi.org/10.1093/bioinformatics/btaa748" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/2021_bioinfob.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="https://doi.org/10.1093/bioinformatics/btaa748" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
          </ul>
        </section>
        <section>
          <h2 id="2020-2016" className="scroll-mt-24 text-2xl font-bold mb-6 text-text-main border-b border-border-main pb-2">2020-2016</h2>
          <ul className="space-y-4">
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Melero, R., Sorzano, C., Foster, B., Vilas, J. L., Martínez, M., Marabini, R., Ramírez-Aportela, E., Sanchez-Garcia, R., Herreros, D., Del Caño, L., Losana, P., Fonseca-Reyna, Y. C., Conesa, P., Wrapp, D., Chacon, P., McLellan, J. S., Tagare, H. D., & Carazo, J. M. (2020). Continuous flexibility analysis of SARS-CoV-2 Spike prefusion structures. IUCrJ 7, 1059–1069
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/2021_actD.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="https://journals.iucr.org/m/issues/2020/06/00/fq5016/index.html" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/2021_actD.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="https://journals.iucr.org/m/issues/2020/06/00/fq5016/index.html" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                López-Blanco J.R. and Chacón P. (2019) KORP: Knowledge-based 6D potential for fast protein and loop modeling. Bioinformatics 35 (17) 3013–3019.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/2019_bioinfo.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="https://academic.oup.com/bioinformatics/article/35/17/3013/5289323" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/2019_bioinfo.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="https://academic.oup.com/bioinformatics/article/35/17/3013/5289323" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                JL Tenthorey, N Haloupek, JR López-Blanco, P Grob, E Adamson, E Hartenian, NA Lind, P Chacón, E Nogales, RE Vance (2017). Structural basis of flagellin detection by NAIP5: a strategy to limit pathogen immune evasion. Science 358 (6365), 888-93.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/2017_science.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://science.sciencemag.org/content/358/6365/888.full" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/2017_science.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://science.sciencemag.org/content/358/6365/888.full" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Pablo Solar Rodríguez (2017). Autonomous University of Barcelona, Open University of Catalonia. MSc Thesis. Development, optimization, and integration of molecular fitting tools and models in UCSF Chimera.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/PSolar2017.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/PSolar2017.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                M Artola, LB Ruíz-Avila, E Ramírez-Aportela, RF Martínez, MA. Oliva, J Martín-Galiano, P Chacón, ML. López-Rodríguez, JM. Andreu and S Huecas (2017). The structural assembly switch of cell division protein FtsZ probed with fluorescent allosteric inhibitors Chem. Sci., 2017,8, 1525-1534
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/ACS2017.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://pubs.rsc.org/is/content/articlehtml/2017/sc/c6sc03792e" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/ACS2017.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://pubs.rsc.org/is/content/articlehtml/2017/sc/c6sc03792e" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Erney Ramírez-Aportela (2016) Universidad Autónoma de Madrid. Thesis. Dinámica de los Filamentos de FtsZ y Búsqueda Racional de Inhibidores Sintéticos con Actividad Antibacteriana(Spanish).
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/erney2016.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/erney2016.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                EH Kellogg, S Howes, SC Ti, E Ramírez-Aportela, TM Kapoor, P Chacón, E Nogales (2016). Near-atomic cryo-EM structure of PRC1 bound to the microtubule. PNAS 113 (34), 9430-9439
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/PNAS2016.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.pnas.org/content/113/34/9430.abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/PNAS2016.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.pnas.org/content/113/34/9430.abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                J.R. López-Blanco; A.J. Canosa-Valls; Y. Li; P. Chacon (2016). RCD+: Fast loop modeling server. Nucleic Acids Research 44 (W1), W395-400
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/NARS2016.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="https://academic.oup.com/nar/article/44/W1/W395/2499369" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/NARS2016.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="https://academic.oup.com/nar/article/44/W1/W395/2499369" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                RK Louder, Y He, JR López-Blanco, J Fang, P Chacón, E Nogales (2016). Structure of promoter-bound TFIID and model of human pre-initiation complex assembly. Nature 531:604–609
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/nature2016.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.nature.com/nature/journal/v531/n7596/full/nature17394.html" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/nature2016.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.nature.com/nature/journal/v531/n7596/full/nature17394.html" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                E. Ramirez-Aportela, J.R. López-Blanco, P. Chacon (2016). FRODOCK 2.0: Fast Protein-Protein docking server. Bioinformatics 2016 32 (15), 2386-8
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/bioinf2016.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="https://doi.org/10.1093/bioinformatics/btw141" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/bioinf2016.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="https://doi.org/10.1093/bioinformatics/btw141" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                J.I. Aliaga, P. Alonso, J.M. Badía, P. Chacón, D. Davidović, J.R López-Blanco, E.S. Quintana-Ortí (2016). A fast band–Krylov eigensolver for macromolecular functional motion simulation on multicore architectures and graphics processors. Journal of Computational Physics 309:314-323
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/JCP2016.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.sciencedirect.com/science/article/pii/S0021999116000085" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/JCP2016.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.sciencedirect.com/science/article/pii/S0021999116000085" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                López-Blanco J.R. and Chacón P. (2016). New generation of elastic network models. Curr. Opin. Struct. Biol. 37:46–53.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/COSB2015.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.sciencedirect.com/science/article/pii/S0959440X15001785" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/COSB2015.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.sciencedirect.com/science/article/pii/S0959440X15001785" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
          </ul>
        </section>
        <section>
          <h2 id="2015-2011" className="scroll-mt-24 text-2xl font-bold mb-6 text-text-main border-b border-border-main pb-2">2015-2011</h2>
          <ul className="space-y-4">
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Santiago García Sánchez (2015) Universidad Juan Carlos I. Thesis. Optimización de procesos de ajuste en microscopía electrónica y cribado virtual de proteínas mediante arquitecturas gráficas(Spanish).
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/santi2015.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/santi2015.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                M.Artola, L.B.Ruiz-Avila, A.Vergoñós, S.Huecas, L. Araujo-Bazán, M. Martín-Fontecha, H. Vázquez-Villa, C. Turrado, E. Ramírez-Aportela, A. Hoegl, M. Bruce Nodwell, I. Barasoain, P. Chacon, S. Axel Sieber, J.M. Andreu and M.L. López-Rodríguez. (2015) Effective GTP-Replacing FtsZ Inhibitors and Antibacterial Mechanism of Action. ACS Chem. Biol. 10(3):834–843.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/ACS2015.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://pubs.acs.org/doi/abs/10.1021/cb500974d" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/ACS2015.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://pubs.acs.org/doi/abs/10.1021/cb500974d" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                López-Blanco J.R. and Chacón P. (2015) Structural modeling from electron microscopy data. WIREs Comput Mol Sci, 5: 62–81.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/wire2014.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://onlinelibrary.wiley.com/doi/10.1002/wcms.1199/abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/wire2014.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://onlinelibrary.wiley.com/doi/10.1002/wcms.1199/abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Ramírez-Aportela E., López-Blanco J.R., Andreu J.M., and Chacón P. (2014). Understanding Nucleotide-Regulated FtsZ Filament Dynamics and the Monomer Assembly Switch with Large-Scale Atomistic Simulations. Biophys J. 107 (9):2164–2176.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="http://www.sciencedirect.com/science/article/pii/S0006349514010078" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="http://www.sciencedirect.com/science/article/pii/S0006349514010078" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Silva-Martín N., Bartual S.G., Ramírez-Aportela E., Chacón P., Park C.G., and Hermoso J.A. (2014). Structural Basis for Selective Recognition of Endogenous and Microbial Polysaccharides by Macrophage Receptor SIGN-R1. Structure 22 (11):1595–1606.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/str2014.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.sciencedirect.com/science/article/pii/S0969212614002871" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/str2014.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.sciencedirect.com/science/article/pii/S0969212614002871" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                López-Blanco J.R., Miyashita O., Tama F. and Chacón P. (2014) Normal mode analysis in structural biology (version 2.0). In: eLS. John Wiley and Sons, Ltd: Chichester.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/els2014.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.els.net/WileyCDA/ElsArticle/refId-a0020204.html" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/els2014.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.els.net/WileyCDA/ElsArticle/refId-a0020204.html" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                López-Blanco J.R., Aliaga J., Quintana-Ortí E. and Chacón P. (2014) iMODS: Internal Coordinates Normal Mode Analysis Server. Nucleic acids research. 42:W271-6
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/24771341" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/24771341" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                García-Sanchez S., Ramírez-Aportela E., Garzon J.I., Cabido R., Sanz-Montemayor A. and Chacón P. (2014). FRODRUG: a virtual screening GPU accelerated approach for drug discovery. 22th Euromicro International Conference on. Parallel, Distributed and Network- Based Processing (PDP):261–270
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/pdp2014.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://dx.doi.org/10.1109/PDP.2014.64" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/pdp2014.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://dx.doi.org/10.1109/PDP.2014.64" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Krüger D.M., Garzón J.I., P. Chacon and H. Gohlke (2014) DrugScorePPI Knowledge-Based Potentials Used as Scoring and Objective Function in Protein-Protein Docking. Plos One, 9(2):e89466
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/plosone2014.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0089466;jsessionid=AC610CA320638DE7FC4B6BB2C28A7D6D" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/plosone2014.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0089466;jsessionid=AC610CA320638DE7FC4B6BB2C28A7D6D" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                López-Blanco J.R. and Chacón P. (2013). iMODFIT: efficient and robust flexible fitting based on vibrational analysis in internal coordinates. JSB 184(2):261–270
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/jsb2013.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.sciencedirect.com/science/article/pii/S1047847713002165" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/jsb2013.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.sciencedirect.com/science/article/pii/S1047847713002165" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Ruiz-Avila L., Huecas S., Artola M., Vergoñós A., Ramírez-Aportela E., Cercenado E., Barasoain I., Vazquez-Villa H., Martin-Fontecha M., Chacon P., Lopez-Rodriguez M.L. and Andreu JM (2013). Synthetic inhibitors of bacterial cell division targeting the GTP binding site of FtsZ. ACS Chem. Biol. 8:2072-2083
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/acschembiol2013.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://pubs.acs.org/doi/full/10.1021/cb400208z" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/acschembiol2013.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://pubs.acs.org/doi/full/10.1021/cb400208z" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Estrin E., J.R. López-Blanco, P. Chacón, A. Martin. (2013). Formation of an intricate helical bundle dictates the assembly of the 26S proteasome lid. Structure, 21: 1624–35
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/structure2013.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.sciencedirect.com/science/article/pii/S0969212613002475" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/structure2013.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.sciencedirect.com/science/article/pii/S0969212613002475" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                López-Blanco J.R., R. Reyes, J.I. Aliaga, R.M Badia, P. Chacón, E.S. Quintana-Ortí (2013) Exploring Large Macromolecular Functional Motions on Clusters of Multicore Processors. JCOMP. 246: 275–288.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/jcomp2013.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.sciencedirect.com/science/article/pii/S0021999113002106" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/jcomp2013.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.sciencedirect.com/science/article/pii/S0021999113002106" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Chys P. and P. Chacón (2013). Random coordinate descent with spinor-matrices and geometric filters for efficient loop closure. J. Chem. Theory Comput. 9:1821–1829
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/jctc2013.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://pubs.acs.org/doi/abs/10.1021/ct300977f" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/jctc2013.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://pubs.acs.org/doi/abs/10.1021/ct300977f" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Henriksson K.O.E., J. Pesonen, and P. Chacón (2012) Curvilinear dynamics of protein complexes. Journal of Theoretical and Computational Chemistry. 11(3):675-696
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/curv2012.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.worldscientific.com/doi/ref/10.1142/S0219633612500459" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/curv2012.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.worldscientific.com/doi/ref/10.1142/S0219633612500459" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Chys P. and P. Chacón (2012). Spinor product computations for protein conformations. Journal of Computational Chemistry 33(21):1717-29
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/jcc2012.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/22565650" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/jcc2012.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/22565650" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Pesonen J., Henriksson K.O.E., López-Blanco J.R. and Chacón, P. (2012). Normal mode analysis of molecular motions in curvilinear coordinates on a non-Eckart body-frame: an application to protein torsion dynamics. Journal of Mathematical Chemistry. 6:1-29
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/jmathchem2012.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.springerlink.com/content/d3283v6150p67687/" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/jmathchem2012.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.springerlink.com/content/d3283v6150p67687/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                López-Blanco JR (2012) UCM. Thesis. Nuevos métodos para el ajuste flexible de estructuras macromoleculares a distintas resoluciones empleando modos normales de vibración en coordenadas internas.(Spanish).
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/Tesis_JoseRamonLopezBlanco_2012_public.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/Tesis_JoseRamonLopezBlanco_2012_public.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                García-Sanchez S., Kovacs J. and Chacón P. (2012). Ultra-fast registration of 2d electron microscopy images. 11th International Conference on Modeling and Applied Simulation 2012, September 19-21 2012, Vienna (Austria), ISBN: 978-88-97999-02-7:212–217
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/FBM2012.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.scopus.com/record/display.url?eid=2-s2.0-84898848084&origin=inward&txGid=DE11F9511A0D6D11CC5DDF57EB3D8CE2.aqHV0EoE4xlIF3hgVWgA%3a20" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/FBM2012.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.scopus.com/record/display.url?eid=2-s2.0-84898848084&origin=inward&txGid=DE11F9511A0D6D11CC5DDF57EB3D8CE2.aqHV0EoE4xlIF3hgVWgA%3a20" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Schaffner-Barbero C, Martín-Fontecha M, Chacón P, Andreu JM. (2011). Targeting the Assembly of Bacterial Cell Division Protein FtsZ with Small Molecules. ACS Chem Biol. 7(2):269-77
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/Ftsz2011.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/22047077" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/Ftsz2011.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/22047077" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                López-Blanco JR, Garzón JI, Chacón P. (2011). iMod: multipurpose normal mode analysis in internal coordinates. Bioinformatics. 27 (20): 2843-2850.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/Bioinformatics2011.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/21873636" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/Bioinformatics2011.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/21873636" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
          </ul>
        </section>
        <section>
          <h2 id="2010-2006" className="scroll-mt-24 text-2xl font-bold mb-6 text-text-main border-b border-border-main pb-2">2010-2006</h2>
          <ul className="space-y-4">
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Orellana L., M. Rueda, C. Ferrer-Costa, J.R. López-Blanco, P. Chacón, and M. Orozco (2010). Approaching Elastic Network Models to Molecular Dynamics Flexibility. J. Chem. Theory Comput. 6 (9):2910–2923
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/JCTC2010.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://pubs.acs.org/doi/abs/10.1021/ct100208e" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/JCTC2010.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://pubs.acs.org/doi/abs/10.1021/ct100208e" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Garzón J.I.. (2010) UCM. Thesis. Desarrollo de nuevas metodologías para el ajuste de estructuras tridimensionales en biomoléculas sobre infratestructuras Grid.(Spanish).
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/Tesis_Garzon.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/Tesis_Garzon.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Garzón J.I., E. Huedo, R. S. Montero, I. M. Llorente, and P. Chacón. (2010) End-to-End Cache System for Grid Computing: Design and Efficiency Analysis of a High-Throughput Bioinformatic Docking Application IJHPCA. 24 (3):243-264
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/IJHPCA2009.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://hpc.sagepub.com/content/24/3/243" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/IJHPCA2009.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://hpc.sagepub.com/content/24/3/243" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Boer D.R., J. A. Ruiz-Masó, J.R. López-Blanco, A. Gómez-Blanco, M. Vives-Llàcer, P. Chacón, I. Usón, X. Gomis-Rüth, M. Espinosa, O. Llorca, G. del Solar, and M. Coll (2009) Plasmid replication initiator RepB forms a hexamer reminiscent of ring helicases and has mobile nuclease domains. EMBO. 28:1666-1678
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/embo2009.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/19440202?itool=EntrezSystem2.PEntrez.Pubmed.Pubmed_ResultsPanel.Pubmed_RVDocSum&ordinalpos=1" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/embo2009.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/19440202?itool=EntrezSystem2.PEntrez.Pubmed.Pubmed_ResultsPanel.Pubmed_RVDocSum&ordinalpos=1" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Garzon JI, J.R. López-Blanco, C. Pons, J. Kovacs, R. Abagyan, J. Fernandez-Recio, P. Chacón (2009) FRODOCK: a new approach for fast rotational protein-protein docking. Bioinformatics. 25:2544-2551
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/bioinf2009.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/19620099?itool=EntrezSystem2.PEntrez.Pubmed.Pubmed_ResultsPanel.Pubmed_RVDocSum&ordinalpos=1" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/bioinf2009.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/19620099?itool=EntrezSystem2.PEntrez.Pubmed.Pubmed_ResultsPanel.Pubmed_RVDocSum&ordinalpos=1" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Buey RM, P. Chacon, J.M. Andreu and J. F. Diaz (2009). Protein shape and assembly studied with X ray solution scattering: Fundaments and practice in Applications of Synchrotron Light to Scattering and Diffraction in Materials and Life Sciences. Lecture Notes in Physics 776. Ezquerra, T.A. Garcia-Gutierrez, M. Nogales, A. Gomez, M. (Eds.)
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/2008_buey.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.springer.com/physics/book/978-3-540-95967-0" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/2008_buey.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.springer.com/physics/book/978-3-540-95967-0" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Torreira E, Jha S, López-Blanco JR, Arias-Palomo E, Chacón P, Cañas C, Ayora S, Dutta A, Llorca O. (2008)Architecture of the pontin/reptin complex, essential in the assembly of several macromolecular complexes. Structure. 16(10):1511-20.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/2008_structure.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/18940606" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/2008_structure.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/18940606" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Garzón JI, J. Kovacs, R. Abagyan, and P. Chacón (2007) ADP_EM: Fast exhaustive multi-resolution docking for high-throughput coverage. Bioinformatics. 23(4):427-33
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/2007_adp_em.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/17150992" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/2007_adp_em.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/17150992" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Garzón JI, E. Huedo, R.S. Montero, I. Martín-Llorente, P. Chacón (2007) Adaptation of a Multi-Resolution Docking Bioinformatics Application to the Grid. . Journal of Software. 2:1-10.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/2007_JSWgrid.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/2007_JSWgrid.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Rueda M., P. Chacón, and M. Orozco. Thorough Validation of Protein Normal Mode Analysis: A Comparative Study with Essential Dynamics. (2007). Structure. 15(5):565-575 .
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/2007_structure.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/17502102?ordinalpos=4&itool=EntrezSystem2.PEntrez.Pubmed.Pubmed_ResultsPanel.Pubmed_DefaultReportPanel.Pubmed_RVDocSum" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/2007_structure.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/17502102?ordinalpos=4&itool=EntrezSystem2.PEntrez.Pubmed.Pubmed_ResultsPanel.Pubmed_DefaultReportPanel.Pubmed_RVDocSum" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Garzón JI, J. A. Kovacs, R. Abagyan, and P. Chacón. Dfprot:A webtool for predicting local chain deformability Bioinformatics. (2007) Apr 1;23(7):901-2.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/2007_defprot.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/17277334?ordinalpos=1&itool=EntrezSystem2.PEntrez.Pubmed.Pubmed_ResultsPanel.Pubmed_DefaultReportPanel.Pubmed_RVDocSum" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/2007_defprot.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/17277334?ordinalpos=1&itool=EntrezSystem2.PEntrez.Pubmed.Pubmed_ResultsPanel.Pubmed_DefaultReportPanel.Pubmed_RVDocSum" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                R.M. Buey, B. Monterroso, M. Menéndez, G. Diakun, P. Chacón, J.A. Hermoso and Díaz, J.F. (2007). Insights into molecular plasticity of choline binding proteins (pneumococcal surface proteins) by SAXS J Mol Biol. 365:411-24.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/jmb2007.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=pubmed&cmd=Retrieve&dopt=AbstractPlus&list_uids=17064729&query_hl=2&itool=pubmed_docsum" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/jmb2007.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=pubmed&cmd=Retrieve&dopt=AbstractPlus&list_uids=17064729&query_hl=2&itool=pubmed_docsum" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Martín-Benito J., J. Gómez-Reino, P.C. Stirling, V.F. Lundin, P. Gómez-Puertas, J. Boskovic, P. Chacón, J.J. Fernández, J. Berenguer, M.R. Leroux and J.M. Valpuesta. (2007) Divergent substrate-binding mechanisms reveal an evolutionary specialization of eukaryotic prefoldin compared to its archaeal counterpar. Structure. 15:101-10.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/structure2007.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=pubmed&cmd=Retrieve&dopt=AbstractPlus&list_uids=17223536&query_hl=1&itool=pubmed_docsum" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/structure2007.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=pubmed&cmd=Retrieve&dopt=AbstractPlus&list_uids=17223536&query_hl=1&itool=pubmed_docsum" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
          </ul>
        </section>
        <section>
          <h2 id="2005-2001" className="scroll-mt-24 text-2xl font-bold mb-6 text-text-main border-b border-border-main pb-2">2005-2001</h2>
          <ul className="space-y-4">
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Kovacs J., P. Chacón & R. Abagyan. (2004) Predictions of Protein Flexibility: First Order Measures. PROTEINS: Structure, Function, and Bioinformatics. Proteins. 56(4):661-8
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/prot2004.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=pubmed&dopt=Abstract&list_uids=15281119&query_hl=3&itool=pubmed_docsum" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/prot2004.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=pubmed&dopt=Abstract&list_uids=15281119&query_hl=3&itool=pubmed_docsum" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Wriggers W, P. Chacón, J. Kovacs, F. Tama and S. Birmanns. (2004) Topology Representing Neural Networks Reconcile Biomolecular Shape, Structure, and Dynamics. Neurocomputing. 56:365-379.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/neuro04.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.sciencedirect.com/science?_ob=ArticleURL&_udi=B6V10-4B3JTHK-1&_user=956552&_handle=W-WA-A-A-BD-MsSAYWW-UUA-AUDDEVZDZD-WZDZCUZCD-BD-U&_fmt=summary&_coverDate=01%2F31%2F2004&_rdoc=17&_orig=browse&_srch=%23toc%235660%232004%23999439999%23476310!&_cdi=5660&view=c&_acct=C000048559&_version=1&_urlVersion=0&_userid=956552&md5=60dd8e6998d4368da885c8642dd24d5a" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/neuro04.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.sciencedirect.com/science?_ob=ArticleURL&_udi=B6V10-4B3JTHK-1&_user=956552&_handle=W-WA-A-A-BD-MsSAYWW-UUA-AUDDEVZDZD-WZDZCUZCD-BD-U&_fmt=summary&_coverDate=01%2F31%2F2004&_rdoc=17&_orig=browse&_srch=%23toc%235660%232004%23999439999%23476310!&_cdi=5660&view=c&_acct=C000048559&_version=1&_urlVersion=0&_userid=956552&md5=60dd8e6998d4368da885c8642dd24d5a" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Boskovic J., Rivera-Calzada A., Maman J.D., Chacón P., Willison KR, Pearl L.H. and Llorca 0. (2003) Visualisation of DNA-induced conformational changes in the DNA repair kinase DNA-PKcs. EMBO J. 22:5875-5882.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/embo2003.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=14592984&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/embo2003.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=14592984&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Opalka N., M. Chlenov, P. Chacón, W.J. Rice, W. Wriggers, and S. Darst. (2003) Structure and Function of the Transcription Elongation Factor GreB Bound to Bacterial RNA Polymerase. Cell 114:335-45.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/cell2003.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=12914698&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/cell2003.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=12914698&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Kovacs J., P. Chacón, Y. Cong, E. Metwally, and W. Wriggers (2003) Fast Rotational Matching of Rigid Bodies by Fast Fourier Transform Acceleration of Five Degrees of Freedom. Acta Cryst. D. 59:1371-1376.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/acta2003.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=12876338&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/acta2003.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=12876338&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Chacón P., F. Tama and W. Wriggers. (2003) Mega-Dalton Biomolecular Motion Captured from Electron Microscopy Reconstructions. J. Mol. Biol. 326:485-492.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/jmb2003.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=12559916&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/jmb2003.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=12559916&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Chacón P. and W. Wriggers (2002) Multi-resolution Contour based Fitting of Macromolecular Structures. J. Mol. Biol. 317:375-384.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/jmb2002.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=11922671&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/jmb2002.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=11922671&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Darst S.A., N. Opalka, P. Chacón, A. Polyakov, C. Richter, G. Zhang, and W. Wriggers. (2002) Conformational Flexibility of Bacterial RNA Polymerase. PNAS, 99:4296-4301.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/pnas2002.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=11904365&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/pnas2002.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=11904365&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Wriggers W. and P. Chacón (2001) Using Situs for the registration of protein structures with low-resolution bead models from X-ray scattering . J. Appl. Cryst., 34:773-776.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/jac2001.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://journals.iucr.org/j/issues/2001/06/00/wt0006/index.html" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/jac2001.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://journals.iucr.org/j/issues/2001/06/00/wt0006/index.html" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Wriggers W. and P. Chacón (2001) Modeling tricks and fitting techniques for multiresolution structures. Structure. 9:779-88.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/struct2001.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=11566128&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/struct2001.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=11566128&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Unneberg P.B.D., J.J. Merelo, F. Morán and P. Chacón Proteins. (2001) SOMCD: method for evaluating protein secondary structure from UV circular dichroism spectra 42:460-70.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/prot2001.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=11170201&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/prot2001.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=11170201&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
          </ul>
        </section>
        <section>
          <h2 id="2000" className="scroll-mt-24 text-2xl font-bold mb-6 text-text-main border-b border-border-main pb-2">Last Century</h2>
          <ul className="space-y-4">
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Chacón P., J. Fernando Díaz, Federico Morán and José M. Andreu (2000) Reconstruction of Protein Form with X-ray Solution Scattering and a Genetic Algorithm, J.Mol.Biol. 299: 1289-1302.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/jmb2000.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=10873453&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/jmb2000.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=10873453&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Chacón P. (1999) PhD Thesis: &quot;Determinación de forma y tamaño de proteínas en disolución mediante dispersión de rayos-x y algoritmos genéticos&quot;. [Shape and size determination of proteins in solution from x-ray scattering and genetic algorithms]. Chemistry Faculty. University Complutense of Madrid.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Chacón P., F. Morán, J. F. Díaz, E. Pantos, and J. M. Andreu (1998) Low- Resolution Structures of Proteins in Solution Retrieved from X-Ray Scattering with a Genetic Algorithm, Biophys. J. 74: 2760-2775.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/bj98.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=9635731&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/bj98.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=9635731&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Díaz J.F., R. Strobbe, Y. Engelborghs, P. Chacón, and J. M. Andreu. (1998) Fast mixing device for time-resolved synchrotron x-ray scattering studies of radiation sensitive proteins. Rev. Sci. Instrum. 69(1) 286-289.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="http://ojps.aip.org/getabs/servlet/GetabsServlet?prog=normal&id=RSINAK000069000001000286000001&idtype=cvips&gifs=Yes&jsessionid=3407571075115381898" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="http://ojps.aip.org/getabs/servlet/GetabsServlet?prog=normal&id=RSINAK000069000001000286000001&idtype=cvips&gifs=Yes&jsessionid=3407571075115381898" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Díaz J.F., J.M. Valpuesta, P. Chacón, G. Diakun y J.M. Andreu. (1998). Changes inmicrotubule protofilament number induced by taxol binding to an easily accessible site: internal microtubule dynamics? J. Biol. Chem 273(50):33803-10.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/jbc98.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=9837970&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/jbc98.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=9837970&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Lambeir A.M., Diaz Pereira J.F., Chacón P., Vermeulen G., Heremans K., Devreese B., Van Beeumen J., De Meester I. & Scharpe S. (1997) A prediction of DPP IV/CD26 domain structure from a physico-chemical investigation of dipeptidyl peptidase IV (CD26) from human seminal plasma. Biochim Biophys Acta 1340(2), 215-226.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/bba97.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=9252108&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/bba97.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=9252108&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                de Pereda J.M., Daniel Leynaider, Juan A. Evangelio, Pablo Chacón and José M. Andreu (1996) Tubulin Secondary Structure Analysis, Limited Proteolysis Sites, and Homology to Ftsz. Biochem. 35(45):14203-14215.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/biochem96.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=8916905&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/biochem96.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=8916905&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Morán F., A. Moreno, J.J. Merelo & P.Chacón Eds.(1995) Lecture Notes in Artificial Intelligence 929. Advances in Artificial Life. Springer-Verlag.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="http://www.amazon.com/exec/obidos/tg/detail/-/3540594965/qid=1075114926/br=1-20/ref=br_lf_b_20//104-1097145-6645550?v=glance&s=books&n=3889" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="http://www.amazon.com/exec/obidos/tg/detail/-/3540594965/qid=1075114926/br=1-20/ref=br_lf_b_20//104-1097145-6645550?v=glance&s=books&n=3889" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Chacón P. (1995). Algoritmos Evolutivos: algoritmos genéticos y de cuasiespecie. En Vida Artificial I. Colección Ciencia y Técnica Ramos Salavert, M. A. Fernández Graciani, P. González López, Ginés Moreno Valverde y T. Rojo Guillén (Eds). Ediciones de la Universidad de Castilla-La Mancha. pp. 85-111.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Morán F. P. Chacón y J.C. Nuño. (1995) Evolución y selección en el marco de la vida artificial (1995) En Vida Artificial I. Colección Ciencia y Técnica Ramos Salavert, M. A. Fernández Graciani, P. González López, Ginés Moreno Valverde y T. Rojo Guillén (Eds). Ediciones de la Universidad de Castilla-La Mancha. pp. 36-61.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Morán F., P. Chacón y J.C. Nuño. (1995) Evolución Precelular. En Orígenes de la vida; En el centenario de Aleksander Oparin Coordinadores F. Morán, J. Peretó y A. Moreno Editorial Complutense. pp. 101-121
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Hofer T., P.K. Maini, J.A. Sherratt, M.A.J. Chaplain, P.Chauvet, D. Metivier, P.C. Montes and J.D. Murray. (1994). A Resolution of the Chemotactic Wave Paradox. App. Math. Lett. 7(2):1-5
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/para94.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/para94.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Chacón P. and J.C. Nuño. (1995). Spatial dynamics of a model for prebiotic evolution.Physica D. 81:398-410
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/pd94.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/pd94.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Chacón P., J.C. Nuño y F. Morán. (1993). Estructuras espaciales en un sistema cerrado formado por especies auto-replicativas. Anales de Química . 6:379-385.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
              </div>
            </li>
            <li className="p-5 rounded-2xl bg-panel border border-border-main shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <p className="text-[15px] leading-relaxed text-slate-700 flex-1">
                Andrade, M.A., P. Chacón, J.J. Merelo and F. Morán. (1993). Evaluation of secondary structure of proteins from UV circular dichroism using an unsupervised learning neural network. Prot. Eng. 6:383-390.
              </p>
              <div className="hidden md:flex gap-2 shrink-0">
                <a href="/pdf/K2d1994.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  PDF
                </a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=8332596&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue/10 text-blue hover:bg-blue/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors">
                  Link
                </a>
              </div>
              <div className="flex md:hidden gap-2 shrink-0">
                <a href="/pdf/K2d1994.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">PDF</a>
                <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=8332596&dopt=Abstract" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue/10 text-blue rounded-lg text-xs font-semibold">Link</a>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
