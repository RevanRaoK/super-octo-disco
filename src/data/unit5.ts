import { LessonTopic } from '@/types/course';

export const UNIT5_TOPICS: LessonTopic[] = [
  {
    id: 'u5-intro-text-search',
    shortTitle: 'Text Streaming Architecture & Limits',
    unit: 'unit5',
    order: 1,
    title: 'Introduction to Text Search Techniques (Streaming Architecture)',
    subtopicsCovered: [
      'Sequential Text Streaming Concept, Speed Bounds & FSA 5-Tuple',
      'Four Major Architectural Modules (Database, Term Detector [3 Types], Query Resolver, UI)',
      'Two Data-Stream Modes (Full DB vs Hybrid Index + Streamer)',
      'Four Index Search Limitations Overcome by Text Streaming',
    ],
    summaryLine:
      '**Text Streaming Search** scans raw stored document text sequentially without inverted indexes using **Database, Term Detector, Query Resolver, and UI**, overcoming **four fundamental index search limits**.',
    bullets: [
      '**Text Scanning (Streaming)** evaluates search queries by passing raw document bytes sequentially against a term matcher rather than resolving prebuilt inverted posting lists, assuming both share the same **Alphabet**.',
      'Locating a pattern of length $m$ across a text string of length $n$ requires at least $n - m + 1$ ($O(n)$) comparisons, with naive brute-force methods taking $O(n \\cdot m)$ and modern algorithms achieving **$O(n + m)$**.',
      'Streaming systems deliver **zero additional storage overhead**, return **hits immediately as discovered**, provide accurate **remaining search time estimates**, and allow multiple hardware/software detectors to operate concurrently.',
    ],
    subSections: [
      {
        heading: 'Four Major Architectural Modules (IRS_UNIT_5 p.1 / R17 p.67–68)',
        bullets: [
          'Every hardware or software text streaming engine coordinates four tightly coupled subsystems.',
        ],
        subGroups: [
          {
            sideHeading: '1. Database & 2. Term Detector (with Finite State Automaton)',
            bullets: [
              '**Database Module** stores full unindexed document text and streams characters cleanly into detectors.',
              '**Term Detector** implements parallel pattern matching in hardware or software via **parallel comparators (associative memory)**, **cellular structures**, or a **universal Finite State Automaton (`5-tuple: Input alphabet I, States S, Transitions P, Initial State S0, Final States SF`)**.',
            ],
          },
          {
            sideHeading: '3. Query Resolver & 4. User Interface (UI)',
            bullets: [
              '**Query Resolver** accepts user search statements, extracts Boolean logic/search words for the detector, evaluates which queries pass from detector signals, and computes hit weights.',
              '**User Interface** presents live continuous search progress updates to the user and retrieves satisfied documents directly on demand.',
            ],
          },
        ],
        diagramId: 'text-streaming-arch',
        diagramCaption: 'Text Streaming Search System Architecture (IRS_UNIT_5 p.1)',
      },
      {
        heading: 'Two Data-Stream Modes & Four Limits of Index Searches',
        bullets: [
          'Streaming engines run either across the **complete database directly** (`pure full-text streaming`) or in **hybrid mode** where a fast index query feeds random candidate hits into a streamer to resolve queries impossible for standard indexes.',
        ],
        subGroups: [
          {
            sideHeading: 'Four Specific Index Search Limitations Handled by Text Streaming',
            bullets: [
              '**Limit 1 — Stop Words:** Searching directly for common stop words normally discarded during indexing.',
              '**Limit 2 — Exact Unstemmed Terms:** Locating exact morphological spellings after stemming merged index roots.',
              '**Limit 3 — Dual-Sided Wildcards:** Evaluating leading and trailing don’t-cares simultaneously (`*term*`).',
              '**Limit 4 — Inter-Word Symbols:** Searching punctuation characters stripped as non-searchable delimiters (`,`, `;`, `:`).',
            ],
          },
        ],
      },
    ],
    keyTakeaway:
      'Draw the **Database -> Term Detector <-> Query Resolver <-> UI** diagram, include the **5-tuple FSA ($I,S,P,S_0,S_F$)**, and list all **4 index limits solved by hybrid streaming**.',
  },
  {
    id: 'u5-software-text-search',
    shortTitle: 'Software Text Search (BF, BM, KMP)',
    unit: 'unit5',
    order: 2,
    title: 'Software Text Search Algorithms (Brute Force, Boyer–Moore, KMP)',
    subtopicsCovered: [
      'Brute-Force String Matching, Example (aaa...ah) & Expected Comparisons Formula',
      'Boyer–Moore Algorithm (Looking-Glass, Character-Jump, TEAMMAST Table & Multi-Pattern)',
      'Knuth–Morris–Pratt (KMP) Prefix/Suffix Jump Table & Zero Text Rewind Trace',
      'Shift-Or & Rabin–Karp Mention',
    ],
    summaryLine:
      '**Software Text Search Algorithms** load text into RAM across four main techniques—**Brute Force**, **Boyer–Moore** (fastest natural average via right-to-left jumps), **KMP** (strict $O(n+m)$ zero-rewind scan), plus **Shift-Or / Rabin–Karp**.',
    bullets: [
      'In software streaming, each document is loaded into memory and scanned via one of four flagship algorithms (`Brute Force, KMP, Boyer–Moore / Shift-OR, and Rabin–Karp`), with **Boyer–Moore** achieving highest practical throughput and requiring only $O(n)$ pattern preprocessing alongside **KMP**.',
    ],
    subSections: [
      {
        heading: 'Detailed Algorithmic Mechanics & Worked Traces',
        bullets: [
          'Comparing pointer movement rules explains how Boyer–Moore and KMP eliminate redundant brute-force re-comparisons.',
        ],
        subGroups: [
          {
            sideHeading: '1. Brute-Force Approach',
            bullets: [
              '**Brute-Force** compares pattern $P$ left-to-right from index `0` and slides strictly **one shift forward** whenever any character mismatches.',
              'Worst-case inputs (`T = "aaaa...ah"` matching `P = "aaah"`) force $O(n \\cdot m)$ comparisons, while random text expectations follow formula $N_c$.',
            ],
            formulas: [
              {
                label: 'Brute-Force Expected Character Comparisons & Worst-Case Complexity',
                tex: 'N_c = \\frac{c}{c - 1}\\left(1 - \\frac{1}{c^m}\\right)(n - m + 1) + O(1) \\qquad T_{\\text{BF}} = O(n \\cdot m)',
                note: '$c$ = alphabet size, $n$ = text length, $m$ = pattern length.',
              },
            ],
          },
          {
            sideHeading: '2. Boyer–Moore (BM) Algorithm',
            bullets: [
              '**Looking-Glass Heuristic:** Starts character comparison from the **rightmost end of pattern $P$ moving backward (Right-to-Left)** rather than left-to-right.',
              '**Character-Jump Heuristic (Bad-Match Table):** On mismatch at $T[i]=c$, if $c$ occurs in $P$, align the rightmost occurrence of $c$ in $P$ with $T[i]$; otherwise leap completely past $T[i]$ (`P[0]` onto `T[i+1]`), shifting up to $m=8$ spaces (`TEAMMAST`).',
              '**Extensions:** Originally built for single patterns, **Boyer–Moore** was later extended by researchers (**Mollier-Nielson 1984**, **Iyengar 1980**) to search **multiple query strings in one pass**.',
            ],
            formulas: [
              {
                label: 'Boyer–Moore Bad-Match Shift Formula & Complexity',
                tex: '\\text{shift}(x) = \\max\\bigl(1, \\; m - \\text{index}(x) - 1\\bigr) \\qquad T_{\\text{BM, avg}} = \\text{sublinear}, \\; O(n + m)',
                note: 'On `TEAMMAST` ($m=8$), repeating letters overwrite earlier shifts (`A`, `M`), while final/absent letters take full shift $m = 8$.',
              },
            ],
          },
          {
            sideHeading: '3. Knuth–Morris–Pratt (KMP) Algorithm (Worked Pointer Rule)',
            bullets: [
              '**Core Insight:** Whenever a mismatch occurs (`e.g. matching "a b d a d e f g" failing at position 4`), previously matched prefix characters determine exactly how many steps can skip safely (`at least 3 positions on recognized "abd"`).',
              '**Strict Forward Scan Rule:** Using pointers $i$ (text) and $j$ (pattern) over an LPS table (`e.g. abcdabc -> [0,0,0,0,1,2,0]`), **only pattern pointer $j$ jumps backward on mismatch while text pointer $i$ never moves backward**, guaranteeing worst-case $O(n + m)$ time.',
            ],
          },
          {
            sideHeading: '4. Multi-Pattern & Bit-Parallel Automata (Aho–Corasick, Shift-Or, Rabin–Karp)',
            bullets: [
              '**Aho–Corasick** links KMP failure transitions across a shared **trie finite-state machine** to detect thousands of query terms simultaneously, while **Shift-Or** and **Rabin–Karp** match via bitwise bitmasks and rolling hashes.',
            ],
          },
        ],
        diagramId: 'software-text-search',
        diagramCaption: 'Algorithmic Comparison: Brute Force vs Boyer–Moore vs Knuth–Morris–Pratt',
      },
    ],
    walkthroughLinkId: 'boyer-moore',
    keyTakeaway:
      'Present all four sub-cards cleanly (`Brute Force formula N_c`, `Boyer–Moore Looking-Glass + Character-Jump + TEAMMAST`, `KMP only j rewinds`, and `Shift-Or / Aho-Corasick`).',
  },
  {
    id: 'u5-hardware-text-search',
    shortTitle: 'Hardware Search (GESCAN/FDF) & TREC Eval',
    unit: 'unit5',
    order: 3,
    title: 'Hardware Text Search Systems (GESCAN & Fast Data Finder) + Evaluation',
    subtopicsCovered: [
      'Why Hardware Search + Four Major Advantages (~70% Index Savings, Instant Search, Deterministic, Scalable)',
      'Early Systems (Rapid Search, AFP, HSTS, CASSM, RAP) & GESCAN TAP (4–128 Query Processors)',
      'Fast Data Finder (FDF) 24-Cell VLSI Pipeline (3,600 Cells, 8-Bit/20-Bit Control, 7 Functions)',
      'IRS Evaluation (Fig 11.1, Fallout, URR TNRR/TURR Fig 11.2b, Novelty/Coverage/Sought Recall, Cranfield & TREC 1–5)',
    ],
    summaryLine:
      '**Hardware Text Search Systems** (**GESCAN TAP** and **Fast Data Finder FDF**) offload pattern matching onto parallel VLSI silicon beside disk drives to save **~70% index overhead**, complemented in R17 curricula by **TREC System Evaluation**.',
    bullets: [
      'Software searchers bog down on multi-query concurrency and disk I/O bottlenecks, whereas placing **one hardware search engine per disk drive** searches databases of any size in **single-disk scan time**.',
    ],
    subSections: [
      {
        heading: 'Four Major Advantages & Evolution of Hardware Search Systems',
        bullets: [
          'Specialized silicon matchers transform indexing constraints while preserving linear scaling across storage drives.',
        ],
        subGroups: [
          {
            sideHeading: 'Four Advantages Over Index-Only Software Engines',
            bullets: [
              '**Advantage 1 — Eliminates Index Overhead:** Removes inverted indexes that typically consume **~70% of raw document collection size**.',
              '**Advantage 2 — Instant Searchability:** Newly ingested documents become searchable immediately without batch index rebuilding.',
              '**Advantage 3 — Deterministic Speed:** Provides exact, predictable scan duration directly bounded by disk transfer speed.',
              '**Advantage 4 — Hardware Scalability:** Scales linearly against multi-terabyte collections simply by adding more disk-coupled search units.',
            ],
          },
          {
            sideHeading: 'Early Hardware Milestones & Disk-Head Searchers (CASSM & RAP)',
            bullets: [
              '**Rapid Search Machine (GE):** Earliest special-purpose magnetic-tape single-query searcher.',
              '**Associative File Processor (AFP, Operating Systems Inc.):** Upgraded search capability to test multiple user queries concurrently.',
              '**High Speed Text Search (HSTS):** Ran **three parallel Aho–Corasick finite-state machines** dedicated simultaneously to contiguous phrases, embedded matches, and exact word matching.',
              '**Disk-Head Associative Units:** **CASSM** (`Content Addressable Segment Sequential Memory, Univ. of Florida`) and **RAP** (`Relational Associative Processor, Univ. of Toronto`) embedded parallel comparator cells directly between disk read/write heads.',
            ],
          },
          {
            sideHeading: 'GESCAN Text Array Processor (TAP)',
            bullets: [
              '**GESCAN TAP** buffers text from disk into a high-speed cache fed directly to an array matrix of **4 to 128 independent Query Processors**.',
              'Each matrix row dedicates cascading VLSI character-matcher LSI chips paired with a first-chip **Query Resolver** handling Boolean logic and word proximity concurrently.',
            ],
          },
          {
            sideHeading: 'Fast Data Finder (FDF) Pipelined VLSI Architecture & 7 Capabilities',
            bullets: [
              '**FDF Pipeline Layout:** Cascades VLSI chips (`24 programmable cells per chip; 3,600 cells total in TREC benchmarks`), each containing a character **Register ($R_s$)** and **Comparator ($C_s$)** linked along an **8-bit data bus** and **20-bit control path**.',
              '**Seven FDF Supported Functions:** Boolean logic with negation, arbitrary pattern proximity, variable-length don’t-cares, term counting & thresholds, **fuzzy error tolerance**, numeric ranges, and term weights.',
            ],
          },
        ],
        diagramId: 'hardware-fdf-gescan',
        diagramCaption: 'Hardware Text Search: GESCAN Text Array Processor (TAP) & Fast Data Finder (FDF) Pipeline',
      },
      {
        heading: 'Information System Evaluation Metrics & TREC Benchmarks (R17 Notes p.79–84)',
        bullets: [
          'IR evaluations measure retrieval quality from **user and system perspectives** using **objective counts** (`response time, memory cycles, Precision, Recall, Fallout`) and **subjective relevance judgments**.',
        ],
        subGroups: [
          {
            sideHeading: 'Five Core Evaluation Objectives & Identifying Relevant Hits (Fig 11.1)',
            bullets: [
              'Systems are evaluated to **(1) select systems for procurement**, **(2) monitor ongoing effectiveness**, **(3) improve user query generation**, **(4) justify cost-benefit analysis**, and **(5) measure the effect of architecture modifications**.',
            ],
            diagramId: 'eval-relevant-loop',
            diagramCaption: 'Figure 11.1: Identifying Relevant Items Feedback Loop in System Evaluation (R17 Notes p.80)',
          },
          {
            sideHeading: 'Fallout, Unique Relevance Recall (URR), Novelty, Coverage & Sought Recall',
            bullets: [
              '**Unique Relevance Recall (URR)** benchmarks unique relevant items recovered by one system that rival engines miss—computed over **TNRR** (`Total Number Retrieved Relevant = 985`) or **TURR** (`Total Unique Relevant Retrieved = 61`, **Figure 11.2b**).',
              '**Novelty Ratio:** Fraction of retrieved relevant items previously **unknown to the user**.',
              '**Coverage Ratio & Sought Recall:** **Coverage Ratio** measures known relevant items successfully found, while **Sought Recall** tracks reviewed relevant items relative to all desired relevant items.',
            ],
            formulas: [
              {
                label: 'Fallout & Unique Relevance Recall (URR)',
                tex: '\\text{Fallout} = \\frac{\\text{Number\\_Retrieved\\_Nonrelevant}}{\\text{Number\\_Total\\_Nonrelevant}} \\qquad \\text{URR} = \\frac{\\text{Number\\_unique\\_relevant}}{\\text{Number\\_relevant}}',
                note: 'Fallout acts as inverse recall (`avoids 0/0 unless all docs are relevant`); $\\text{URR}$ benchmarks distinct discoveries (**TNRR** vs **TURR**).',
              },
            ],
          },
          {
            sideHeading: 'Cranfield Tests & TREC-1 through TREC-5 Benchmarks',
            bullets: [
              'Early benchmarks used **Cranfield I & II** (`1,400 documents, 225 queries`) until **DARPA** and **NIST** launched **TREC** in 1992 providing $>1\\text{ GB}$ training/test sets with top-**200** ranked judging.',
              '**TREC Evolution (`1–5`):** Progressed from large complex statements (`119 terms` in **TREC-3**) to focused queries (`16 terms` in **TREC-4**), introducing specialized evaluation tracks including Spanish `El Norte` (`200 MB`) multilingual retrieval.',
            ],
          },
        ],
        diagramId: 'eval-overlap-venn',
        diagramCaption: 'Figure 11.2b: Four Algorithms Overlap for Unique Relevance Recall (TNRR = 985, TURR = 61)',
      },
    ],
    table: {
      caption: 'Software Inverted Index Search vs Hardware Text Streaming Systems',
      headers: ['Dimension', 'Software Inverted Index', 'Hardware Search (GESCAN / FDF)'],
      rows: [
        ['Index Storage Overhead', 'High (~50–70% of raw corpus size)', 'Zero index overhead (~0%)'],
        ['Ingestion-to-Search Delay', 'Needs batch tokenization & list merging', 'Immediately searchable upon ingest'],
        ['Search Speed Scaling', 'Depends on term frequency & query length', 'Deterministic linear disk streaming rate'],
        ['Error / Typo Tolerance', 'Needs N-grams or expansive fuzzy wildcards', 'FDF cells match fuzzy edit errors natively'],
      ],
      highlightRows: [0, 1],
    },
    keyTakeaway:
      'Give clean sub-blocks to **4 Hardware Advantages (~70% savings)**, **GESCAN TAP (`4–128 query processors`)**, **FDF (`24 cells/chip, 3600 cells, 8-bit/20-bit path, 7 functions`)**, and **TREC + URR/Fallout/Novelty/Coverage/Sought Recall**.',
  },
  {
    id: 'u5-spoken-language-audio',
    shortTitle: 'Spoken Language Audio Retrieval',
    unit: 'unit5',
    order: 4,
    title: 'Spoken Language Audio Retrieval',
    subtopicsCovered: [
      'Spoken Document Retrieval (SDR) vs Spoken Utterance Retrieval (SUR)',
      'Voice/Text Query Ranking & Usage Signals',
      'ASR Word Lattices, Word Error Rate (WER) & Out-Of-Vocabulary (OOV) Handling',
    ],
    summaryLine:
      '**Spoken Language Audio Retrieval** processes human speech recordings using **Automatic Speech Recognition (ASR)** word lattices to retrieve ranked whole recordings (**SDR**) or exact time-stamped spoken clips (**SUR**).',
    bullets: [
      '**Speech Retrieval** searches large collections of recorded human spoken audio pertinent to an incoming text or voice query.',
    ],
    subSections: [
      {
        heading: 'Two Core Spoken Speech Retrieval Tasks (IRS_UNIT_5 p.6)',
        bullets: [
          'Evaluation metrics and architectures differ sharply between retrieving whole recordings and jumping to exact spoken moments.',
        ],
        subGroups: [
          {
            sideHeading: '1. Spoken Document Retrieval (SDR — Whole Recording Ranking)',
            bullets: [
              '**SDR** assumes a user enters a **text string or spoken query** and receives a **rank-ordered list of entire audio recordings** scored by ASR transcript similarity and historical query popularity/site-visit signals.',
            ],
          },
          {
            sideHeading: '2. Spoken Utterance Retrieval (SUR — Sub-Clip Localization)',
            bullets: [
              '**SUR** pinpoints and retrieves every specific **relevant spoken utterance timestamp** embedded inside longer continuous recordings—essential for browsing **broadcast news, voicemail, teleconferences, and recorded lectures**.',
            ],
          },
        ],
      },
      {
        heading: 'Recognition Errors (WER), OOV Terms & Phonetic Word Lattices',
        bullets: [
          'Unlike clean text indexing, spoken transcripts suffer acoustic **Word Error Rates (WER)** caused by background noise, speaker accents, homophones (`"recognize speech" vs "wreck a nice beach"`), and channel distortion.',
          '**Out-Of-Vocabulary (OOV)** domain names, acronyms, and rare terms fail fixed-vocabulary ASR dictionaries unless indexed using **Sub-word Phonetic N-Gram Lattices**.',
          'Indexing **N-Best Recognition Lattices** alongside (`start_ms, end_ms`) frame timestamps prevents misses whenever top-1 speech decoding slips.',
        ],
      },
    ],
    diagramId: 'multimedia-retrieval-hub',
    diagramCaption: 'Unified Unit V Multimedia Information Retrieval Modalities Overview',
    keyTakeaway:
      'Separate **SDR (ranked document list)** cleanly from **SUR (timestamped utterance retrieval across news, voicemail, lectures)** and detail **WER, OOV, and Phonetic Lattices**.',
  },
  {
    id: 'u5-non-speech-audio',
    shortTitle: 'Non-Speech Audio Retrieval',
    unit: 'unit5',
    order: 5,
    title: 'Non-Speech Audio Retrieval (Audio Cues & Query by Humming)',
    subtopicsCovered: [
      'Event-Driven Audio Cues (Fire Alarms, Aircraft & UI Alerts)',
      'Non-Speech Audio Input (Humming & Hissing Interface Controls)',
      'Instrumental Music & Melodic Contour (Parsons Code U/D/R, MFCCs & MPEG-7)',
    ],
    summaryLine:
      '**Non-Speech Audio Retrieval** organizes non-verbal sound across three IRS domains: informative **Event Audio Cues**, non-verbal **Humming/Hissing UI Control**, and content-based **Music & Acoustic Retrieval**.',
    bullets: [
      '**Non-Speech Audio** provides vital acoustic communication and query channels beyond spoken human language across safety-critical environments, interactive UIs, and music archives.',
    ],
    subSections: [
      {
        heading: 'Three Pillars of Non-Speech Audio in IRS (IRS_UNIT_5 p.6–7)',
        bullets: [
          'Non-speech acoustic engineering spans notification output cues, non-verbal user input, and music pattern indexing.',
        ],
        subGroups: [
          {
            sideHeading: '1. Event-Driven Audio Cues (Acoustic Status Feedback)',
            bullets: [
              '**Audio Cues** convey immediate object-action and event state hands-free—historically critical in **fire alarms** and **aircraft cockpit alerts**.',
              'In modern software interfaces, non-speech chimes immediately signal **incoming notifications, arriving email, background system updates**, and guided sound instructions.',
            ],
          },
          {
            sideHeading: '2. Non-Speech Audio Input (Humming & Hissing UI Control)',
            bullets: [
              '**Non-Speech Audio Input** captures intentional non-verbal sounds—such as **humming or hissing**—directly from microphones to enter search commands or manipulate interactive UI controls.',
            ],
          },
          {
            sideHeading: '3. Instrumental Music Search & Query-by-Humming (QBH)',
            bullets: [
              '**Query by Humming (QBH)** translates vocal hums into relative melodic pitch-interval contours (**Parsons Code**: `U = Up, D = Down, R = Repeat, * = Initial Note`) invariant to user singing key or tempo.',
              'Content-based acoustic search extracts spectral features (**MFCCs**, spectral centroid, zero-crossing rate, beat histograms) aligned with **MPEG-7 Audio** metadata (`artist, tempo, genre`).',
            ],
          },
        ],
      },
    ],
    keyTakeaway:
      'Highlight all **3 non-speech audio domains**: **Audio Cues (`aircraft, fire alarm, mail alerts`)**, **Non-Speech Input (`humming/hissing`)**, and **Music QBH (`Parsons Code U/D/R + MFCCs`)**.',
  },
  {
    id: 'u5-graph-retrieval',
    shortTitle: 'Graph Retrieval & Pictorial Analytics',
    unit: 'unit5',
    order: 6,
    title: 'Graph Retrieval',
    subtopicsCovered: [
      'Graph-Based Query & Document Topic/Relationship Modeling',
      'Structural Ranking, Speed, Scalability & Flexibility',
      'Pictorial Chart & Result Analysis Retrieval (Sales/Refunds, Pass/Fail Charts)',
      'Exact Subgraph Isomorphism vs Approximate Graph Edit Distance',
    ],
    summaryLine:
      '**Graph Retrieval** expresses both queries and stored corpora as structural **Topic–Document Relationship Graphs** (`scalable and fast in retrieval`) alongside intuitive pictorial **Bar/Pie Charts** driving clear **Result Analysis**.',
    bullets: [
      'In a **Graph-Based IRS**, queries and documents form structured graphs capturing **document-to-document**, **topic-to-subtopic**, and **query-term-to-document** linkages explicitly.',
    ],
    subSections: [
      {
        heading: 'Structural Graph Modeling vs Pictorial Chart Result Analysis (IRS_UNIT_5 p.7)',
        bullets: [
          'Unit notes unify algorithmic graph ranking over linked text collections with intuitive pictorial business/academic result-analysis charts.',
        ],
        subGroups: [
          {
            sideHeading: '1. Graph-Based Structural Ranking & Performance',
            bullets: [
              'Graph-ranking algorithms propagate relevance scores along topic/citation edges—delivering **fast, scalable computation** and a **flexible architecture** adaptable to diverse performance enhancements.',
              'Benchmarked against standard text engines across standard test collections, graph-relationship ranking consistently improves retrieval accuracy.',
            ],
          },
          {
            sideHeading: '2. Pictorial Chart Representation & Real Result Analysis',
            bullets: [
              'Visual **Bar charts** and **Pie charts** represent inter-object comparisons transparently so non-technical users grasp trends at a glance.',
              '**Concrete Result Analysis Examples:** Plotting **number of products sold vs number of products refunded**, or **student pass percentage vs fail percentage** cleanly.',
            ],
          },
          {
            sideHeading: '3. Graph Matching Metrics (Isomorphism vs Edit Distance)',
            bullets: [
              '**Exact Subgraph Isomorphism** locates identical topological query subgraphs inside databases (`molecules, knowledge graphs`), while **Approximate Graph Edit Distance** tolerance scores partial structural similarity.',
            ],
          },
        ],
      },
    ],
    keyTakeaway:
      'Include BOTH **Topic/Document Relationship Graph Ranking** AND **Pictorial Bar/Pie Result Analysis examples (`Product Sales vs Refunds`, `Student Pass/Fail %`)** plus **Isomorphism vs Edit Distance**.',
  },
  {
    id: 'u5-imagery-retrieval',
    shortTitle: 'Imagery Retrieval (Annotation & CBIR)',
    unit: 'unit5',
    order: 7,
    title: 'Imagery Retrieval (Text Annotation vs Content-Based CBIR)',
    subtopicsCovered: [
      'Text Metadata Annotation (Manual vs Automatic & Social Web Tools)',
      'Content-Based Image Retrieval (CBIR — Color, Texture, Shape)',
      'Diverse User Groups & Need Modes (Primitive vs Abstract/Symbolic Imagery)',
      'Commercial Adoption Status of CBIR Technology',
    ],
    summaryLine:
      '**Imagery Retrieval** browses and locates images either via human/automatic text metadata (**Annotation-Based Retrieval**) or mathematical **Content-Based Image Retrieval (CBIR)** descriptors matching **Color, Texture, and Shape**.',
    bullets: [
      'An **Image Retrieval System** enables diverse groups—including **journalists, engineers, designers, artists, and advertising agencies**—to search and browse vast digital image libraries.',
      '**User Retrieval Needs Vary:** Users request images either by **Primitive Visual Features (`Color, Texture, Shape`)** or by **Abstract Concepts and Symbolic Imagery (`mood, events`)**.',
    ],
    subSections: [
      {
        heading: 'Two Fundamental Paradigms of Image Retrieval (IRS_UNIT_5 p.8)',
        bullets: [
          'Systems rely either on linguistic captions attached around pixels or automated numerical extraction directly from image bitmaps.',
        ],
        subGroups: [
          {
            sideHeading: '1. Annotation-Based Retrieval (Manual vs Automatic Social Web Tools)',
            bullets: [
              'Traditional retrieval attaches textual metadata (**captions, keywords, titles, descriptions**) directly to images so standard text queries match stored visual files.',
              'Because **manual image annotation is laborious, time-consuming, and expensive**, modern **Automatic Image Annotation** and **Social/Semantic Web tagging tools** automate captioning cleanly.',
            ],
          },
          {
            sideHeading: '2. Content-Based Image Retrieval (CBIR) Primitive Features',
            bullets: [
              '**Color Descriptors** compute **Color Histograms** and statistical `RGB / HSV` moments invariant to rotation.',
              '**Texture Descriptors** quantify surface coarseness, contrast, and directional periodicity using **GLCM (Gray-Level Co-occurrence Matrix)** and **Gabor/Wavelet transforms**.',
              '**Shape Descriptors** capture geometric boundary contours, edge histograms, Fourier descriptors, and moment invariants independent of surface color.',
              'Though **CBIR** is actively transitioning from academic laboratories toward marketplace adoption, fully general large-scale semantic CBIR remains limited by the pixel-to-meaning **Semantic Gap**.',
            ],
          },
        ],
      },
    ],
    table: {
      caption: 'Annotation-Based Image Search vs Content-Based Image Retrieval (CBIR)',
      headers: ['Dimension', 'Annotation-Based Retrieval', 'Content-Based Retrieval (CBIR)'],
      rows: [
        ['Index Source', 'Human captions, titles, Social Web tags', 'Raw pixel-derived feature vectors'],
        ['Key Features', 'Keywords, ontologies, folksonomy tags', 'Primitive Color, Texture & Shape descriptors'],
        ['Query Input', 'Text search statement ("red sports car")', 'Sample query image or hand-drawn sketch'],
        ['Main Challenge', 'Manual tagging cost & subjective bias', 'Semantic gap & immature large-scale marketplace deployment'],
      ],
      highlightRows: [1, 3],
    },
    keyTakeaway:
      'List all **5 user professions (`journalists, engineers, designers, artists, advertisers`)**, distinguish **Manual vs Automatic/Social Annotation**, detail **CBIR Color/Texture/Shape**, and note **Primitive vs Abstract needs**.',
  },
  {
    id: 'u5-video-retrieval',
    shortTitle: 'Video Retrieval (Frames, Motion & Spatio-Temporal)',
    unit: 'unit5',
    order: 8,
    title: 'Video Retrieval (Shots, Keyframes, Motion & Spatio-Temporal Features)',
    subtopicsCovered: [
      'Electronic Video Media Evolution (Mechanical TV -> CRT -> Flat Panel)',
      'Video Data Components (Still Video Frames, Audio, Motion Video) & Interactive Frame Query',
      'Shot Boundary Detection & Keyframe Extraction',
      'Five Similarity Features (Color, Texture, Shape, Motion, Spatial-Temporal Composition) & Social Platforms',
    ],
    summaryLine:
      '**Video Retrieval** decomposes moving visual media (`Mechanical TV -> CRT -> Flat Panel -> Interactive Web`) into **Shots & Keyframes**, indexing **Frames, Audio, Color, Texture, Shape, Motion, and Spatial-Temporal Composition**.',
    bullets: [
      '**Video** is an electronic medium for recording, copying, playback, broadcasting, and displaying moving visual scenes—evolving historically from **Mechanical Television Systems** to **Cathode-Ray Tubes (CRT)** and modern **Flat Panel displays**.',
      '**Interactive Web Video Applications** allow users to submit sample **video frames** or text queries against repositories combining **still video frames, synchronized audio tracks, closed captions, and continuous video streams**.',
    ],
    subSections: [
      {
        heading: 'Video Segmentation & Five Core Similarity Matching Features (IRS_UNIT_5 p.9)',
        bullets: [
          'Structured video indexing pairs temporal scene segmentation with five low-level static and dynamic similarity cues.',
        ],
        subGroups: [
          {
            sideHeading: '1. Shot Boundary Detection & Keyframe Extraction',
            bullets: [
              '**Shot Boundary Detection** segments raw video sequences at abrupt **Hard Cuts** or gradual **Fades, Dissolves, and Wipes**.',
              '**Keyframe Extraction** chooses representative still frames per camera shot so spatial visual indexes run accurately without decoding `30–60` redundant frames per second.',
            ],
          },
          {
            sideHeading: '2. Five Visual Features Used in Video Similarity Matching',
            bullets: [
              '**Feature 1 — Color, Feature 2 — Texture & Feature 3 — Shape:** Extracted statically across representative shot keyframes just as in image CBIR.',
              '**Feature 4 — Motion:** Tracks dynamic object trajectories, optical flow, and camera pan/zoom movement across sequential frames.',
              '**Feature 5 — Spatial–Temporal Composition:** Encodes the relative spatial arrangement and changing co-occurrence geometry of interacting objects over time.',
            ],
          },
          {
            sideHeading: '3. Social Media & Semantic Web Video Retrieval',
            bullets: [
              'Rapid growth of **Social Media (`YouTube`)** and **Semantic Web** video sharing enables designers, educators, and communities to combine visual keyframes with collaborative tags and **ASR** speech captions.',
            ],
          },
        ],
      },
    ],
    keyTakeaway:
      'Trace display evolution (**Mechanical TV -> CRT -> Flat Panel -> Web Frame Search**), explain **Shots & Keyframes**, and isolate all **5 matching features (`Color, Texture, Shape, Motion, Spatial-Temporal Composition`)** cleanly.',
  },
];
