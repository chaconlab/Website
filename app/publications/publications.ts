// Publications by period, newest first. Each entry: citation text, optional PDF and link.

export type Publication = { text: string; pdf?: string; link?: string };
export type PublicationPeriod = { id: string; title: string; items: Publication[] };

export const publicationPeriods: PublicationPeriod[] = [
  {
    "id": "2022-2026",
    "title": "2022-2026",
    "items": [
      {
        "text": "Asensio-López J, Rapún-Araiz B, Euba B, Domínguez-San Pedro A, Sanmartín Á, Gil-Campillo C, San León D, Chacón P, Almagro G, Ardá A, Burgui S, Lasa I, Toledo-Arana A, Garmendia J. (2026) Haemophilus influenzae tryptophan biosynthesis is required for lung infection. Frontiers in Cellular and Infection Microbiology 16, 1787089",
        "pdf": "/pdf/2026_Frontiers.pdf",
        "link": "https://pubmed.ncbi.nlm.nih.gov/42499541/"
      },
      {
        "text": "Martín Hernández, I. (2025). Desarrollo y aplicación de herramientas bioinformáticas para la predicción de estructura de bucles de proteínas [Doctoral dissertation, Universidad Complutense de Madrid].",
        "pdf": "/pdf/Ivan.pdf",
        "link": "https://hdl.handle.net/20.500.14352/136566"
      },
      {
        "text": "M Alcorlo, JR Luque-Ortega, F Gago, A Ortega, M Castellanos, P Chacón..et. al. (2024) Flexible structural arrangement and DNA-binding properties of protein p6 from Bacillus subtillis phage φ29. Nucleic Acids Research 52 (4), 2045-2065",
        "pdf": "/pdf/2024_NARS.pdf",
        "link": "https://academic.oup.com/nar/article/52/4/2045/7590920"
      },
      {
        "text": "IM Hernández, Y Dehouck, U Bastolla, JR López-Blanco, P Chacón (2023) Predicting protein stability changes upon mutation using a simple orientational potential Bioinformatics 39 (1), 1-7",
        "pdf": "/pdf/2023_bioinf.pdf",
        "link": "https://academic.oup.com/bioinformatics/article/39/1/btad011/6984713"
      },
      {
        "text": "Z Gao, C Tan, P Chacon, SZ Li (2023) Toward effective and efficient protein inverse folding. arXiv preprint arXiv:2209.12643",
        "pdf": "/pdf/2023_Pi.pdf",
        "link": "https://arxiv.org/abs/2209.12643"
      },
      {
        "text": "JR López-Blanco, Y Dehouck, U Bastolla, P Chacón (2023) Normal Mode Analysis for Fast Loop Conformational Sampling. Journal of Chemical Information and Modeling 62 (18), 4561–4568",
        "pdf": "/pdf/2022_JCIM.pdf",
        "link": "https://pubs.acs.org/doi/full/10.1021/acs.jcim.2c00870"
      },
      {
        "text": "A Pepe, J Lasenby, P Chacón (2022) Learning Rotations Mathematical Methods in the Applied Sciences 47 (3), 1-14",
        "pdf": "/pdf/2022_nat.pdf",
        "link": "https://onlinelibrary.wiley.com/doi/full/10.1002/mma.8698"
      },
      {
        "text": "M.T. Bueno-Carrasco, J. Cuéllar, M.I. Flydal, C. Santiago, T. Kråkenes, R Kleppe, J.R. López-Blanco, J.M. Marcilla, M. Teigen, K. Alvira, S. Chacón, P. Martinez, A. Valpuesta (2022) Structural mechanism for tyrosine hydroxylase inhibition by dopamine and reactivation by Ser40 phosphorylation. Nature Comm. 13 (74)",
        "pdf": "/pdf/2022_nat.pdf",
        "link": "https://doi.org/10.1038/s41467-021-27657-y"
      },
      {
        "text": "C Quignot, P Granger, P Chacón, R Guerois, J Andrean (2021) Atomic-level evolutionary information improves protein-protein interface scoring. Bioinformatics 37 (19), 3175-3181",
        "pdf": "/pdf/2021_bioinfoa.pdf",
        "link": "https://doi.org/10.1093/bioinformatics/btab254"
      },
      {
        "text": "C. Quignot, G. Postic, H. Bret, J. Rey, P. Granger, S. Murail, P. Chacón, J. Andreani, P. Tufféry, R. Guerois (2021) InterEvDock3: A combined template-based and free docking server with increased performance through explicit modeling of complex homologs and integration of covariation-based contact maps. Nucleic Acids Research, W277–W28",
        "pdf": "/pdf/2021_nars.pdf",
        "link": "https://academic.oup.com/nar/article/49/W1/W277/6274528"
      },
      {
        "text": "Barozet, A., Chacón, P., Cortés, J. (2021) Current approaches to flexible loop modeling. Current Research in Structural Biology (3), 187–191",
        "pdf": "/pdf/2021_CRSB.pdf",
        "link": "https://www.sciencedirect.com/science/article/pii/S2665928X21000143"
      },
      {
        "text": "M. Kadukova, K. dos Santos Machado, P. Chacón, S. Grudinin (2021) KORP-PL: a coarse-grained knowledge-based scoring function for protein-ligand interactions, Bioinformatics, 37(7), 943–950",
        "pdf": "/pdf/2021_bioinfob.pdf",
        "link": "https://doi.org/10.1093/bioinformatics/btaa748"
      }
    ]
  },
  {
    "id": "2020-2016",
    "title": "2020-2016",
    "items": [
      {
        "text": "Melero, R., Sorzano, C., Foster, B., Vilas, J. L., Martínez, M., Marabini, R., Ramírez-Aportela, E., Sanchez-Garcia, R., Herreros, D., Del Caño, L., Losana, P., Fonseca-Reyna, Y. C., Conesa, P., Wrapp, D., Chacon, P., McLellan, J. S., Tagare, H. D., & Carazo, J. M. (2020). Continuous flexibility analysis of SARS-CoV-2 Spike prefusion structures. IUCrJ 7, 1059–1069",
        "pdf": "/pdf/2021_actD.pdf",
        "link": "https://journals.iucr.org/m/issues/2020/06/00/fq5016/index.html"
      },
      {
        "text": "López-Blanco J.R. and Chacón P. (2019) KORP: Knowledge-based 6D potential for fast protein and loop modeling. Bioinformatics 35 (17) 3013–3019.",
        "pdf": "/pdf/2019_bioinfo.pdf",
        "link": "https://academic.oup.com/bioinformatics/article/35/17/3013/5289323"
      },
      {
        "text": "JL Tenthorey, N Haloupek, JR López-Blanco, P Grob, E Adamson, E Hartenian, NA Lind, P Chacón, E Nogales, RE Vance (2017). Structural basis of flagellin detection by NAIP5: a strategy to limit pathogen immune evasion. Science 358 (6365), 888-93.",
        "pdf": "/pdf/2017_science.pdf",
        "link": "http://science.sciencemag.org/content/358/6365/888.full"
      },
      {
        "text": "Solar Rodríguez, P. (2017). Development, optimization, and integration of molecular fitting tools and models in UCSF Chimera [Master's thesis, Autonomous University of Barcelona, Open University of Catalonia].",
        "pdf": "/pdf/PSolar2017.pdf"
      },
      {
        "text": "M Artola, LB Ruíz-Avila, E Ramírez-Aportela, RF Martínez, MA. Oliva, J Martín-Galiano, P Chacón, ML. López-Rodríguez, JM. Andreu and S Huecas (2017). The structural assembly switch of cell division protein FtsZ probed with fluorescent allosteric inhibitors Chem. Sci., 2017,8, 1525-1534",
        "pdf": "/pdf/ACS2017.pdf",
        "link": "http://pubs.rsc.org/is/content/articlehtml/2017/sc/c6sc03792e"
      },
      {
        "text": "Ramírez-Aportela, E. (2016). Dinámica de los Filamentos de FtsZ y Búsqueda Racional de Inhibidores Sintéticos con Actividad Antibacteriana [Doctoral dissertation, Universidad Autónoma de Madrid].",
        "pdf": "/pdf/erney2016.pdf",
        "link": "https://repositorio.uam.es/entities/publication/e00b8e19-5e70-4c48-810a-084e164901eb"
      },
      {
        "text": "EH Kellogg, S Howes, SC Ti, E Ramírez-Aportela, TM Kapoor, P Chacón, E Nogales (2016). Near-atomic cryo-EM structure of PRC1 bound to the microtubule. PNAS 113 (34), 9430-9439",
        "pdf": "/pdf/PNAS2016.pdf",
        "link": "http://www.pnas.org/content/113/34/9430.abstract"
      },
      {
        "text": "J.R. López-Blanco; A.J. Canosa-Valls; Y. Li; P. Chacon (2016). RCD+: Fast loop modeling server. Nucleic Acids Research 44 (W1), W395-400",
        "pdf": "/pdf/NARS2016.pdf",
        "link": "https://academic.oup.com/nar/article/44/W1/W395/2499369"
      },
      {
        "text": "RK Louder, Y He, JR López-Blanco, J Fang, P Chacón, E Nogales (2016). Structure of promoter-bound TFIID and model of human pre-initiation complex assembly. Nature 531:604–609",
        "pdf": "/pdf/nature2016.pdf",
        "link": "http://www.nature.com/nature/journal/v531/n7596/full/nature17394.html"
      },
      {
        "text": "E. Ramirez-Aportela, J.R. López-Blanco, P. Chacon (2016). FRODOCK 2.0: Fast Protein-Protein docking server. Bioinformatics 2016 32 (15), 2386-8",
        "pdf": "/pdf/bioinf2016.pdf",
        "link": "https://doi.org/10.1093/bioinformatics/btw141"
      },
      {
        "text": "J.I. Aliaga, P. Alonso, J.M. Badía, P. Chacón, D. Davidović, J.R López-Blanco, E.S. Quintana-Ortí (2016). A fast band–Krylov eigensolver for macromolecular functional motion simulation on multicore architectures and graphics processors. Journal of Computational Physics 309:314-323",
        "pdf": "/pdf/JCP2016.pdf",
        "link": "http://www.sciencedirect.com/science/article/pii/S0021999116000085"
      },
      {
        "text": "López-Blanco J.R. and Chacón P. (2016). New generation of elastic network models. Curr. Opin. Struct. Biol. 37:46–53.",
        "pdf": "/pdf/COSB2015.pdf",
        "link": "http://www.sciencedirect.com/science/article/pii/S0959440X15001785"
      }
    ]
  },
  {
    "id": "2015-2011",
    "title": "2015-2011",
    "items": [
      {
        "text": "García Sánchez, S. (2015). Optimización de procesos de ajuste en microscopía electrónica y cribado virtual de proteínas mediante arquitecturas gráficas [Doctoral dissertation, Universidad Rey Juan Carlos].",
        "pdf": "/pdf/santi2015.pdf"
      },
      {
        "text": "M.Artola, L.B.Ruiz-Avila, A.Vergoñós, S.Huecas, L. Araujo-Bazán, M. Martín-Fontecha, H. Vázquez-Villa, C. Turrado, E. Ramírez-Aportela, A. Hoegl, M. Bruce Nodwell, I. Barasoain, P. Chacon, S. Axel Sieber, J.M. Andreu and M.L. López-Rodríguez. (2015) Effective GTP-Replacing FtsZ Inhibitors and Antibacterial Mechanism of Action. ACS Chem. Biol. 10(3):834–843.",
        "pdf": "/pdf/ACS2015.pdf",
        "link": "http://pubs.acs.org/doi/abs/10.1021/cb500974d"
      },
      {
        "text": "López-Blanco J.R. and Chacón P. (2015) Structural modeling from electron microscopy data. WIREs Comput Mol Sci, 5: 62–81.",
        "pdf": "/pdf/wire2014.pdf",
        "link": "http://onlinelibrary.wiley.com/doi/10.1002/wcms.1199/abstract"
      },
      {
        "text": "Ramírez-Aportela E., López-Blanco J.R., Andreu J.M., and Chacón P. (2014). Understanding Nucleotide-Regulated FtsZ Filament Dynamics and the Monomer Assembly Switch with Large-Scale Atomistic Simulations. Biophys J. 107 (9):2164–2176.",
        "pdf": "/pdf/2014_bio.pdf",
        "link": "http://www.sciencedirect.com/science/article/pii/S0006349514010078"
      },
      {
        "text": "Silva-Martín N., Bartual S.G., Ramírez-Aportela E., Chacón P., Park C.G., and Hermoso J.A. (2014). Structural Basis for Selective Recognition of Endogenous and Microbial Polysaccharides by Macrophage Receptor SIGN-R1. Structure 22 (11):1595–1606.",
        "pdf": "/pdf/str2014.pdf",
        "link": "http://www.sciencedirect.com/science/article/pii/S0969212614002871"
      },
      {
        "text": "López-Blanco J.R., Miyashita O., Tama F. and Chacón P. (2014) Normal mode analysis in structural biology (version 2.0). In: eLS. John Wiley and Sons, Ltd: Chichester.",
        "pdf": "/pdf/els2014.pdf",
        "link": "http://www.els.net/WileyCDA/ElsArticle/refId-a0020204.html"
      },
      {
        "text": "López-Blanco J.R., Aliaga J., Quintana-Ortí E. and Chacón P. (2014) iMODS: Internal Coordinates Normal Mode Analysis Server. Nucleic acids research. 42:W271-6",
        "pdf": "/pdf/2014_Imods.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/pubmed/24771341"
      },
      {
        "text": "García-Sanchez S., Ramírez-Aportela E., Garzon J.I., Cabido R., Sanz-Montemayor A. and Chacón P. (2014). FRODRUG: a virtual screening GPU accelerated approach for drug discovery. 22th Euromicro International Conference on. Parallel, Distributed and Network- Based Processing (PDP):261–270",
        "pdf": "/pdf/pdp2014.pdf",
        "link": "http://dx.doi.org/10.1109/PDP.2014.64"
      },
      {
        "text": "Krüger D.M., Garzón J.I., P. Chacon and H. Gohlke (2014) DrugScorePPI Knowledge-Based Potentials Used as Scoring and Objective Function in Protein-Protein Docking. Plos One, 9(2):e89466",
        "pdf": "/pdf/plosone2014.pdf",
        "link": "http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0089466;jsessionid=AC610CA320638DE7FC4B6BB2C28A7D6D"
      },
      {
        "text": "López-Blanco J.R. and Chacón P. (2013). iMODFIT: efficient and robust flexible fitting based on vibrational analysis in internal coordinates. JSB 184(2):261–270",
        "pdf": "/pdf/jsb2013.pdf",
        "link": "http://www.sciencedirect.com/science/article/pii/S1047847713002165"
      },
      {
        "text": "Ruiz-Avila L., Huecas S., Artola M., Vergoñós A., Ramírez-Aportela E., Cercenado E., Barasoain I., Vazquez-Villa H., Martin-Fontecha M., Chacon P., Lopez-Rodriguez M.L. and Andreu JM (2013). Synthetic inhibitors of bacterial cell division targeting the GTP binding site of FtsZ. ACS Chem. Biol. 8:2072-2083",
        "pdf": "/pdf/acschembiol2013.pdf",
        "link": "http://pubs.acs.org/doi/full/10.1021/cb400208z"
      },
      {
        "text": "Estrin E., J.R. López-Blanco, P. Chacón, A. Martin. (2013). Formation of an intricate helical bundle dictates the assembly of the 26S proteasome lid. Structure, 21: 1624–35",
        "pdf": "/pdf/structure2013.pdf",
        "link": "http://www.sciencedirect.com/science/article/pii/S0969212613002475"
      },
      {
        "text": "López-Blanco J.R., R. Reyes, J.I. Aliaga, R.M Badia, P. Chacón, E.S. Quintana-Ortí (2013) Exploring Large Macromolecular Functional Motions on Clusters of Multicore Processors. JCOMP. 246: 275–288.",
        "pdf": "/pdf/jcomp2013.pdf",
        "link": "http://www.sciencedirect.com/science/article/pii/S0021999113002106"
      },
      {
        "text": "Chys P. and P. Chacón (2013). Random coordinate descent with spinor-matrices and geometric filters for efficient loop closure. J. Chem. Theory Comput. 9:1821–1829",
        "pdf": "/pdf/jctc2013.pdf",
        "link": "http://pubs.acs.org/doi/abs/10.1021/ct300977f"
      },
      {
        "text": "Henriksson K.O.E., J. Pesonen, and P. Chacón (2012) Curvilinear dynamics of protein complexes. Journal of Theoretical and Computational Chemistry. 11(3):675-696",
        "pdf": "/pdf/curv2012.pdf",
        "link": "http://www.worldscientific.com/doi/ref/10.1142/S0219633612500459"
      },
      {
        "text": "Chys P. and P. Chacón (2012). Spinor product computations for protein conformations. Journal of Computational Chemistry 33(21):1717-29",
        "pdf": "/pdf/jcc2012.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/pubmed/22565650"
      },
      {
        "text": "Pesonen J., Henriksson K.O.E., López-Blanco J.R. and Chacón, P. (2012). Normal mode analysis of molecular motions in curvilinear coordinates on a non-Eckart body-frame: an application to protein torsion dynamics. Journal of Mathematical Chemistry. 6:1-29",
        "pdf": "/pdf/jmathchem2012.pdf",
        "link": "http://www.springerlink.com/content/d3283v6150p67687/"
      },
      {
        "text": "López-Blanco, J.R. (2012). Nuevos métodos para el ajuste flexible de estructuras macromoleculares a distintas resoluciones empleando modos normales de vibración en coordenadas internas [Doctoral dissertation, Universidad Complutense de Madrid].",
        "pdf": "/pdf/Tesis_JoseRamonLopezBlanco_2012_public.pdf",
        "link": "https://hdl.handle.net/20.500.14352/48141"
      },
      {
        "text": "García-Sanchez S., Kovacs J. and Chacón P. (2012). Ultra-fast registration of 2d electron microscopy images. 11th International Conference on Modeling and Applied Simulation 2012, September 19-21 2012, Vienna (Austria), ISBN: 978-88-97999-02-7:212–217",
        "pdf": "/pdf/FBM2012.pdf",
        "link": "http://www.scopus.com/record/display.url?eid=2-s2.0-84898848084&origin=inward&txGid=DE11F9511A0D6D11CC5DDF57EB3D8CE2.aqHV0EoE4xlIF3hgVWgA%3a20"
      },
      {
        "text": "Schaffner-Barbero C, Martín-Fontecha M, Chacón P, Andreu JM. (2011). Targeting the Assembly of Bacterial Cell Division Protein FtsZ with Small Molecules. ACS Chem Biol. 7(2):269-77",
        "pdf": "/pdf/Ftsz2011.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/pubmed/22047077"
      },
      {
        "text": "López-Blanco JR, Garzón JI, Chacón P. (2011). iMod: multipurpose normal mode analysis in internal coordinates. Bioinformatics. 27 (20): 2843-2850.",
        "pdf": "/pdf/Bioinformatics2011.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/pubmed/21873636"
      }
    ]
  },
  {
    "id": "2010-2006",
    "title": "2010-2006",
    "items": [
      {
        "text": "Orellana L., M. Rueda, C. Ferrer-Costa, J.R. López-Blanco, P. Chacón, and M. Orozco (2010). Approaching Elastic Network Models to Molecular Dynamics Flexibility. J. Chem. Theory Comput. 6 (9):2910–2923",
        "pdf": "/pdf/JCTC2010.pdf",
        "link": "http://pubs.acs.org/doi/abs/10.1021/ct100208e"
      },
      {
        "text": "Garzón, J.I. (2010). Desarrollo de nuevas metodologías para el ajuste de estructuras tridimensionales en biomoléculas sobre infratestructuras Grid [Doctoral dissertation, Universidad Complutense de Madrid].",
        "pdf": "/pdf/Tesis_Garzon.pdf",
        "link": "https://hdl.handle.net/20.500.14352/47396"
      },
      {
        "text": "Garzón J.I., E. Huedo, R. S. Montero, I. M. Llorente, and P. Chacón. (2010) End-to-End Cache System for Grid Computing: Design and Efficiency Analysis of a High-Throughput Bioinformatic Docking Application IJHPCA. 24 (3):243-264",
        "pdf": "/pdf/IJHPCA2009.pdf",
        "link": "http://hpc.sagepub.com/content/24/3/243"
      },
      {
        "text": "Boer D.R., J. A. Ruiz-Masó, J.R. López-Blanco, A. Gómez-Blanco, M. Vives-Llàcer, P. Chacón, I. Usón, X. Gomis-Rüth, M. Espinosa, O. Llorca, G. del Solar, and M. Coll (2009) Plasmid replication initiator RepB forms a hexamer reminiscent of ring helicases and has mobile nuclease domains. EMBO. 28:1666-1678",
        "pdf": "/pdf/embo2009.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/pubmed/19440202?itool=EntrezSystem2.PEntrez.Pubmed.Pubmed_ResultsPanel.Pubmed_RVDocSum&ordinalpos=1"
      },
      {
        "text": "Garzon JI, J.R. López-Blanco, C. Pons, J. Kovacs, R. Abagyan, J. Fernandez-Recio, P. Chacón (2009) FRODOCK: a new approach for fast rotational protein-protein docking. Bioinformatics. 25:2544-2551",
        "pdf": "/pdf/bioinf2009.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/pubmed/19620099?itool=EntrezSystem2.PEntrez.Pubmed.Pubmed_ResultsPanel.Pubmed_RVDocSum&ordinalpos=1"
      },
      {
        "text": "Buey RM, P. Chacon, J.M. Andreu and J. F. Diaz (2009). Protein shape and assembly studied with X ray solution scattering: Fundaments and practice in Applications of Synchrotron Light to Scattering and Diffraction in Materials and Life Sciences. Lecture Notes in Physics 776. Ezquerra, T.A. Garcia-Gutierrez, M. Nogales, A. Gomez, M. (Eds.)",
        "pdf": "/pdf/2008_buey.pdf",
        "link": "http://www.springer.com/physics/book/978-3-540-95967-0"
      },
      {
        "text": "Torreira E, Jha S, López-Blanco JR, Arias-Palomo E, Chacón P, Cañas C, Ayora S, Dutta A, Llorca O. (2008)Architecture of the pontin/reptin complex, essential in the assembly of several macromolecular complexes. Structure. 16(10):1511-20.",
        "pdf": "/pdf/2008_structure.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/pubmed/18940606"
      },
      {
        "text": "Garzón JI, J. Kovacs, R. Abagyan, and P. Chacón (2007) ADP_EM: Fast exhaustive multi-resolution docking for high-throughput coverage. Bioinformatics. 23(4):427-33",
        "pdf": "/pdf/2007_adp_em.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/pubmed/17150992"
      },
      {
        "text": "Garzón JI, E. Huedo, R.S. Montero, I. Martín-Llorente, P. Chacón (2007) Adaptation of a Multi-Resolution Docking Bioinformatics Application to the Grid. . Journal of Software. 2:1-10.",
        "pdf": "/pdf/2007_JSWgrid.pdf"
      },
      {
        "text": "Rueda M., P. Chacón, and M. Orozco. Thorough Validation of Protein Normal Mode Analysis: A Comparative Study with Essential Dynamics. (2007). Structure. 15(5):565-575 .",
        "pdf": "/pdf/2007_structure.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/pubmed/17502102?ordinalpos=4&itool=EntrezSystem2.PEntrez.Pubmed.Pubmed_ResultsPanel.Pubmed_DefaultReportPanel.Pubmed_RVDocSum"
      },
      {
        "text": "Garzón JI, J. A. Kovacs, R. Abagyan, and P. Chacón. Dfprot:A webtool for predicting local chain deformability Bioinformatics. (2007) Apr 1;23(7):901-2.",
        "pdf": "/pdf/2007_defprot.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/pubmed/17277334?ordinalpos=1&itool=EntrezSystem2.PEntrez.Pubmed.Pubmed_ResultsPanel.Pubmed_DefaultReportPanel.Pubmed_RVDocSum"
      },
      {
        "text": "R.M. Buey, B. Monterroso, M. Menéndez, G. Diakun, P. Chacón, J.A. Hermoso and Díaz, J.F. (2007). Insights into molecular plasticity of choline binding proteins (pneumococcal surface proteins) by SAXS J Mol Biol. 365:411-24.",
        "pdf": "/pdf/jmb2007.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=pubmed&cmd=Retrieve&dopt=AbstractPlus&list_uids=17064729&query_hl=2&itool=pubmed_docsum"
      },
      {
        "text": "Martín-Benito J., J. Gómez-Reino, P.C. Stirling, V.F. Lundin, P. Gómez-Puertas, J. Boskovic, P. Chacón, J.J. Fernández, J. Berenguer, M.R. Leroux and J.M. Valpuesta. (2007) Divergent substrate-binding mechanisms reveal an evolutionary specialization of eukaryotic prefoldin compared to its archaeal counterpar. Structure. 15:101-10.",
        "pdf": "/pdf/structure2007.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=pubmed&cmd=Retrieve&dopt=AbstractPlus&list_uids=17223536&query_hl=1&itool=pubmed_docsum"
      }
    ]
  },
  {
    "id": "2005-2001",
    "title": "2005-2001",
    "items": [
      {
        "text": "Kovacs J., P. Chacón & R. Abagyan. (2004) Predictions of Protein Flexibility: First Order Measures. PROTEINS: Structure, Function, and Bioinformatics. Proteins. 56(4):661-8",
        "pdf": "/pdf/prot2004.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=pubmed&dopt=Abstract&list_uids=15281119&query_hl=3&itool=pubmed_docsum"
      },
      {
        "text": "Wriggers W, P. Chacón, J. Kovacs, F. Tama and S. Birmanns. (2004) Topology Representing Neural Networks Reconcile Biomolecular Shape, Structure, and Dynamics. Neurocomputing. 56:365-379.",
        "pdf": "/pdf/neuro04.pdf",
        "link": "http://www.sciencedirect.com/science?_ob=ArticleURL&_udi=B6V10-4B3JTHK-1&_user=956552&_handle=W-WA-A-A-BD-MsSAYWW-UUA-AUDDEVZDZD-WZDZCUZCD-BD-U&_fmt=summary&_coverDate=01%2F31%2F2004&_rdoc=17&_orig=browse&_srch=%23toc%235660%232004%23999439999%23476310!&_cdi=5660&view=c&_acct=C000048559&_version=1&_urlVersion=0&_userid=956552&md5=60dd8e6998d4368da885c8642dd24d5a"
      },
      {
        "text": "Boskovic J., Rivera-Calzada A., Maman J.D., Chacón P., Willison KR, Pearl L.H. and Llorca 0. (2003) Visualisation of DNA-induced conformational changes in the DNA repair kinase DNA-PKcs. EMBO J. 22:5875-5882.",
        "pdf": "/pdf/embo2003.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=14592984&dopt=Abstract"
      },
      {
        "text": "Opalka N., M. Chlenov, P. Chacón, W.J. Rice, W. Wriggers, and S. Darst. (2003) Structure and Function of the Transcription Elongation Factor GreB Bound to Bacterial RNA Polymerase. Cell 114:335-45.",
        "pdf": "/pdf/cell2003.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=12914698&dopt=Abstract"
      },
      {
        "text": "Kovacs J., P. Chacón, Y. Cong, E. Metwally, and W. Wriggers (2003) Fast Rotational Matching of Rigid Bodies by Fast Fourier Transform Acceleration of Five Degrees of Freedom. Acta Cryst. D. 59:1371-1376.",
        "pdf": "/pdf/acta2003.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=12876338&dopt=Abstract"
      },
      {
        "text": "Chacón P., F. Tama and W. Wriggers. (2003) Mega-Dalton Biomolecular Motion Captured from Electron Microscopy Reconstructions. J. Mol. Biol. 326:485-492.",
        "pdf": "/pdf/jmb2003.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=12559916&dopt=Abstract"
      },
      {
        "text": "Chacón P. and W. Wriggers (2002) Multi-resolution Contour based Fitting of Macromolecular Structures. J. Mol. Biol. 317:375-384.",
        "pdf": "/pdf/jmb2002.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=11922671&dopt=Abstract"
      },
      {
        "text": "Darst S.A., N. Opalka, P. Chacón, A. Polyakov, C. Richter, G. Zhang, and W. Wriggers. (2002) Conformational Flexibility of Bacterial RNA Polymerase. PNAS, 99:4296-4301.",
        "pdf": "/pdf/pnas2002.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=11904365&dopt=Abstract"
      },
      {
        "text": "Wriggers W. and P. Chacón (2001) Using Situs for the registration of protein structures with low-resolution bead models from X-ray scattering . J. Appl. Cryst., 34:773-776.",
        "pdf": "/pdf/jac2001.pdf",
        "link": "http://journals.iucr.org/j/issues/2001/06/00/wt0006/index.html"
      },
      {
        "text": "Wriggers W. and P. Chacón (2001) Modeling tricks and fitting techniques for multiresolution structures. Structure. 9:779-88.",
        "pdf": "/pdf/struct2001.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=11566128&dopt=Abstract"
      },
      {
        "text": "Unneberg P.B.D., J.J. Merelo, F. Morán and P. Chacón Proteins. (2001) SOMCD: method for evaluating protein secondary structure from UV circular dichroism spectra 42:460-70.",
        "pdf": "/pdf/prot2001.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=11170201&dopt=Abstract"
      }
    ]
  },
  {
    "id": "2000",
    "title": "Last Century",
    "items": [
      {
        "text": "Chacón P., J. Fernando Díaz, Federico Morán and José M. Andreu (2000) Reconstruction of Protein Form with X-ray Solution Scattering and a Genetic Algorithm, J.Mol.Biol. 299: 1289-1302.",
        "pdf": "/pdf/jmb2000.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=10873453&dopt=Abstract"
      },
      {
        "text": "Chacón, P. (1999). Determinación de forma y tamaño de proteínas en disolución mediante dispersión de rayos-x y algoritmos genéticos [Doctoral dissertation, Universidad Complutense de Madrid]."
      },
      {
        "text": "Chacón P., F. Morán, J. F. Díaz, E. Pantos, and J. M. Andreu (1998) Low- Resolution Structures of Proteins in Solution Retrieved from X-Ray Scattering with a Genetic Algorithm, Biophys. J. 74: 2760-2775.",
        "pdf": "/pdf/bj98.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=9635731&dopt=Abstract"
      },
      {
        "text": "Díaz J.F., R. Strobbe, Y. Engelborghs, P. Chacón, and J. M. Andreu. (1998) Fast mixing device for time-resolved synchrotron x-ray scattering studies of radiation sensitive proteins. Rev. Sci. Instrum. 69(1) 286-289.",
        "link": "http://ojps.aip.org/getabs/servlet/GetabsServlet?prog=normal&id=RSINAK000069000001000286000001&idtype=cvips&gifs=Yes&jsessionid=3407571075115381898"
      },
      {
        "text": "Díaz J.F., J.M. Valpuesta, P. Chacón, G. Diakun y J.M. Andreu. (1998). Changes inmicrotubule protofilament number induced by taxol binding to an easily accessible site: internal microtubule dynamics? J. Biol. Chem 273(50):33803-10.",
        "pdf": "/pdf/jbc98.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=9837970&dopt=Abstract"
      },
      {
        "text": "Lambeir A.M., Diaz Pereira J.F., Chacón P., Vermeulen G., Heremans K., Devreese B., Van Beeumen J., De Meester I. & Scharpe S. (1997) A prediction of DPP IV/CD26 domain structure from a physico-chemical investigation of dipeptidyl peptidase IV (CD26) from human seminal plasma. Biochim Biophys Acta 1340(2), 215-226.",
        "pdf": "/pdf/bba97.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=9252108&dopt=Abstract"
      },
      {
        "text": "de Pereda J.M., Daniel Leynaider, Juan A. Evangelio, Pablo Chacón and José M. Andreu (1996) Tubulin Secondary Structure Analysis, Limited Proteolysis Sites, and Homology to Ftsz. Biochem. 35(45):14203-14215.",
        "pdf": "/pdf/biochem96.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=8916905&dopt=Abstract"
      },
      {
        "text": "Morán F., A. Moreno, J.J. Merelo & P.Chacón Eds.(1995) Lecture Notes in Artificial Intelligence 929. Advances in Artificial Life. Springer-Verlag.",
        "link": "http://www.amazon.com/exec/obidos/tg/detail/-/3540594965/qid=1075114926/br=1-20/ref=br_lf_b_20//104-1097145-6645550?v=glance&s=books&n=3889"
      },
      {
        "text": "Chacón P. (1995). Algoritmos Evolutivos: algoritmos genéticos y de cuasiespecie. En Vida Artificial I. Colección Ciencia y Técnica Ramos Salavert, M. A. Fernández Graciani, P. González López, Ginés Moreno Valverde y T. Rojo Guillén (Eds). Ediciones de la Universidad de Castilla-La Mancha. pp. 85-111."
      },
      {
        "text": "Morán F. P. Chacón y J.C. Nuño. (1995) Evolución y selección en el marco de la vida artificial (1995) En Vida Artificial I. Colección Ciencia y Técnica Ramos Salavert, M. A. Fernández Graciani, P. González López, Ginés Moreno Valverde y T. Rojo Guillén (Eds). Ediciones de la Universidad de Castilla-La Mancha. pp. 36-61."
      },
      {
        "text": "Morán F., P. Chacón y J.C. Nuño. (1995) Evolución Precelular. En Orígenes de la vida; En el centenario de Aleksander Oparin Coordinadores F. Morán, J. Peretó y A. Moreno Editorial Complutense. pp. 101-121"
      },
      {
        "text": "Hofer T., P.K. Maini, J.A. Sherratt, M.A.J. Chaplain, P.Chauvet, D. Metivier, P.C. Montes and J.D. Murray. (1994). A Resolution of the Chemotactic Wave Paradox. App. Math. Lett. 7(2):1-5",
        "pdf": "/pdf/para94.pdf"
      },
      {
        "text": "Chacón P. and J.C. Nuño. (1995). Spatial dynamics of a model for prebiotic evolution.Physica D. 81:398-410",
        "pdf": "/pdf/pd94.pdf"
      },
      {
        "text": "Chacón P., J.C. Nuño y F. Morán. (1993). Estructuras espaciales en un sistema cerrado formado por especies auto-replicativas. Anales de Química . 6:379-385."
      },
      {
        "text": "Andrade, M.A., P. Chacón, J.J. Merelo and F. Morán. (1993). Evaluation of secondary structure of proteins from UV circular dichroism using an unsupervised learning neural network. Prot. Eng. 6:383-390.",
        "pdf": "/pdf/K2d1994.pdf",
        "link": "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=8332596&dopt=Abstract"
      }
    ]
  }
];
