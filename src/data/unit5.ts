import { LessonTopic } from '@/types/course';

export const UNIT5_TOPICS: LessonTopic[] = [
  {
    id: 'u5-intro-text-search',
    shortTitle: 'Text Streaming Architecture & Limits',
    unit: 'unit5',
    order: 1,
    title: 'Introduction to Text Search Techniques (Streaming Architecture)',
    subtopicsCovered: [
      'Three Classical Text Retrieval Techniques & Streaming Complexity Bounds',
      'Four Major Architectural Modules (Database, Term Detector [3 Types & FSA 5-Tuple], Query Resolver, UI)',
      'Two Data-Stream Modes (Complete DB vs Hybrid Index + Streamer)',
      'Four Index Search Limitations Overcome by Text Streaming',
    ],
    summaryLine:
      '**Text Streaming Search** scans raw stored document text sequentially without inverted indexes using **Database, Term Detector, Query Resolver, and UI**, overcoming **four fundamental index search limits**.',
    bullets: [
      {
        label: 'Three Classical Text Retrieval Techniques',
        text: 'Foundational strategies for organizing and rapidly searching textual items:',
        children: [
          '1. Full text scanning (streaming)',
          '2. Word inversion',
          '3. Multiattribute retrieval',
        ],
      },
      {
        label: 'Text Scanning (Streaming) Concept & Alphabet Assumption',
        text: 'Evaluates queries by passing raw document bytes sequentially against a term detector rather than resolving inverted lists, assuming both search terms and streamed text share the same Alphabet.',
      },
      {
        label: 'Complexity Bounds',
        text: 'Searching an $m$-character pattern inside an $n$-character text requires at least $n - m + 1$ ($O(n)$) comparisons; naive brute-force methods take $O(n \\cdot m)$ whereas modern streaming algorithms achieve **$O(n + m)$**.',
      },
      {
        label: 'Streaming Advantages',
        text: 'Requires zero additional index storage overhead, returns hits immediately as found, estimates remaining query completion time accurately, and supports multiple parallel detectors.',
      },
    ],
    subSections: [
      {
        heading: 'Four Major Architectural Modules (IRS_UNIT_5 p.1 / R17 p.67–68)',
        subGroups: [
          {
            sideHeading: '1. Database Module',
            description:
              'Stores the complete full text of unindexed items and streams document text cleanly into term detectors.',
          },
          {
            sideHeading: '2. Term Detector (with Finite State Automaton)',
            description:
              'Special hardware or software holding all search terms (`and in some systems inter-term logic`) that detects matches as text streams past and outputs detected terms to the Query Resolver.',
            subGroups: [
              {
                sideHeading: 'Three Hardware/Software Implementation Approaches',
                bullets: [
                  '1. Parallel comparators (associative memory)',
                  '2. Cellular structures',
                  '3. Universal Finite State Automaton (FSA)',
                ],
              },
              {
                sideHeading: 'Five-Tuple Finite State Automaton (FSA)',
                bullets: [
                  {
                    label: 'I',
                    text: 'Set of input symbols from the supported alphabet.',
                  },
                  {
                    label: 'S',
                    text: 'Set of possible internal states.',
                  },
                  {
                    label: 'P',
                    text: 'Set of state transitions (`productions`) mapping `(current state, input symbol) -> next state`.',
                  },
                  {
                    label: 'S₀',
                    text: 'Initial start state.',
                  },
                  {
                    label: 'S_F',
                    text: 'Set of one or more accepting final states from $S$.',
                  },
                ],
              },
            ],
          },
          {
            sideHeading: '3. Query Resolver',
            description: 'Performs two primary bidirectional tasks:',
            bullets: [
              '1. Accepts search statements from users and extracts search terms and logic for the Term Detector.',
              '2. Accepts match signals from the detector, determines which queries are satisfied, and computes hit relevance weights.',
            ],
          },
          {
            sideHeading: '4. User Interface (UI)',
            description:
              'Receives live updates from the Query Resolver, continually displays search status and remaining time to the user, and retrieves satisfied items on request.',
          },
        ],
        diagramId: 'text-streaming-arch',
        diagramCaption: 'Text Streaming Search System Architecture (IRS_UNIT_5 p.1)',
      },
      {
        heading: 'Two Data-Stream Modes & Four Limits of Index Searches',
        subGroups: [
          {
            sideHeading: 'Two Approaches to the Data Stream',
            bullets: [
              {
                label: 'Mode 1 — Complete Database Streaming',
                text: 'Streams the entire raw document database sequentially through the term detector(s).',
              },
              {
                label: 'Mode 2 — Hybrid Index + Text Streamer',
                text: 'Runs a fast inverted index search first and feeds only candidate retrieved items into the text streamer to resolve complex criteria impossible for standard indexes.',
              },
            ],
          },
          {
            sideHeading: 'Four Specific Index Search Limitations Handled by Text Streaming',
            bullets: [
              {
                label: '1. Stop Words',
                text: 'Searching directly for common stop words normally removed during indexing.',
              },
              {
                label: '2. Exact Unstemmed Terms',
                text: 'Finding exact morphological matches after stemming collapsed index variants.',
              },
              {
                label: '3. Leading & Trailing "Don\'t-Cares"',
                text: 'Evaluating dual-sided wildcards simultaneously (`*term*`).',
              },
              {
                label: '4. Inter-Word Punctuation Symbols',
                text: 'Searching delimiter characters ignored on the inter-word symbol list (`,`, `;`, `:`).',
              },
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
      'Aho–Corasick, Shift-Or & Rabin–Karp Mention',
    ],
    summaryLine:
      '**Software Text Search Algorithms** load text into RAM across four main techniques—**Brute Force**, **Boyer–Moore** (fastest natural average via right-to-left jumps), **KMP** (strict $O(n+m)$ zero-rewind scan), plus **Shift-Or / Rabin–Karp**.',
    bullets: [
      {
        label: 'Software Streaming Workflow',
        text: 'Reads the target document into main memory and scans via one of four major techniques (`Brute Force`, `Knuth–Morris–Pratt`, `Boyer–Moore / Shift-OR`, and `Rabin–Karp`).',
      },
      {
        label: 'Preprocessing & Runtime Leaders',
        text: 'Both **KMP** and **Boyer–Moore** require $O(m)$ pattern preprocessing, with **Boyer–Moore** delivering the fastest practical sublinear average performance and $O(n+m)$ bounds.',
      },
    ],
    subSections: [
      {
        heading: 'Detailed Algorithmic Mechanics & Worked Traces',
        subGroups: [
          {
            sideHeading: '1. Brute-Force Approach',
            description:
              'Simplest string-matching algorithm: aligns pattern $P$ left-to-right against text $T$ and shifts strictly one position right whenever a character mismatches.',
            example:
              'Worst case: searching `P = "aaah"` inside `T = "aaaa...ah"` forces $O(n \\cdot m)$ character comparisons.',
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
            description:
              'Significantly accelerates search by comparing characters from the rightmost end of the search pattern moving backwards (`Right-to-Left`), enabling large skips on frequent mismatched characters.',
            subGroups: [
              {
                sideHeading: 'Two Core Heuristics',
                bullets: [
                  {
                    label: 'Looking-Glass Heuristic',
                    text: 'Tests pattern $P$ against substring of $T$ moving backwards (`right-to-left`).',
                  },
                  {
                    label: 'Character-Jump Heuristic (Bad-Match Table)',
                    text: 'When mismatch occurs at $T[i] = c$: if $P$ contains $c$, shift $P$ right to align the last occurrence of $c$ in $P$ with $T[i]$; otherwise leap $P[0]$ directly onto $T[i+1]$.',
                  },
                ],
              },
              {
                sideHeading: 'Single-Pattern -> Multi-Pattern Extensions',
                description:
                  'Originally built for single patterns, later enhanced by researchers (`Mollier-Nielson 1984`, `Iyengar 1980`) to scan multiple search strings in one pass.',
              },
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
            sideHeading: '3. Knuth–Morris–Pratt (KMP) Algorithm',
            description:
              'Guarantees worst-case $O(n+m)$ time independent of input text content by precomputing how far to skip safely whenever a mismatch follows a matched prefix.',
            subGroups: [
              {
                sideHeading: 'Prefix–Suffix Jump Rule & Worked Trace',
                bullets: [
                  {
                    label: 'Safe Prefix Skipping (`"abdadefg"`)',
                    text: 'When matching fails at position 4 (`F` in pattern vs `b` in text), the already matched `"abd"` guarantees skipping at least 3 positions safely without missing a valid start at position 4.',
                  },
                  {
                    label: 'LPS Table & Pointer Movement Rule',
                    text: 'Preprocesses pattern (`e.g., abcdabc -> [0,0,0,0,1,2,0]`) using pointers $i$ (text) and $j$ (pattern): **only pattern pointer $j$ moves backward on mismatch while text pointer $i$ moves strictly forward (`never rewinds`)**.',
                  },
                ],
              },
            ],
          },
          {
            sideHeading: '4. Aho–Corasick, Shift-Or & Rabin–Karp',
            bullets: [
              {
                label: 'Aho–Corasick',
                text: 'Extends KMP failure links across a shared trie finite-state machine to match multiple query patterns in one linear scan.',
              },
              {
                label: 'Shift-Or & Rabin–Karp',
                text: 'Match patterns using bitwise parallel state masks (`Shift-Or`) and rolling hash fingerprints (`Rabin–Karp`).',
              },
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
      {
        label: 'Why Specialized Hardware?',
        text: 'Software searchers hit bottlenecks on simultaneous multi-query loads and disk I/O bandwidth, whereas placing one hardware searcher per disk drive bounds search time across any database size to single-disk streaming time.',
      },
    ],
    subSections: [
      {
        heading: 'Hardware Text Search Advantages & Evolution',
        subGroups: [
          {
            sideHeading: '1. Four Advantages Over Index-Only Software Systems',
            bullets: [
              {
                label: 'Advantage 1 — Eliminates Index Overhead',
                text: 'Removes inverted indexes that typically occupy **~70% of actual raw document size**.',
              },
              {
                label: 'Advantage 2 — Instant Searchability',
                text: 'Newly ingested items become searchable immediately without waiting for batch index creation.',
              },
              {
                label: 'Advantage 3 — Deterministic Speed & Immediate Hits',
                text: 'Provides predictable exact search completion times bounded by disk I/O and returns hits immediately as found.',
              },
              {
                label: 'Advantage 4 — Hardware Scalability',
                text: 'Scales linearly across massive collections simply by adding additional disk-coupled hardware search units.',
              },
            ],
          },
          {
            sideHeading: '2. Early Hardware Searchers & Disk-Head Processors',
            bullets: [
              {
                label: 'Rapid Search Machine (General Electric)',
                text: 'Earliest special-purpose hardware searcher scanning magnetic tapes against a single query.',
              },
              {
                label: 'Associative File Processor (AFP — Operating Systems Inc.)',
                text: 'Upgraded hardware search to evaluate multiple user queries concurrently.',
              },
              {
                label: 'High Speed Text Search (HSTS)',
                text: 'Ran **three parallel Aho–Corasick finite-state machines** dedicated simultaneously to contiguous phrases, embedded matches, and exact word matching.',
              },
              {
                label: 'Disk-Head Associative Units (`CASSM` & `RAP`)',
                text: 'CASSM (`Univ. of Florida`) and RAP (`Univ. of Toronto`) placed generalized parallel comparator cells directly between disk read/write heads.',
              },
            ],
          },
          {
            sideHeading: '3. GESCAN Text Array Processor (TAP)',
            description:
              'Buffers text directly from disk into a high-speed cache fed across an array matrix of **4 to 128 independent Query Processors**.',
            bullets: [
              {
                label: 'Matrix Row Layout',
                text: 'Each matrix row (`one independent query processor`) places a Query Resolver LSI chip first to resolve Boolean logic and proximity, followed by cascading character-matcher chips (`row length bounds query length; row count bounds simultaneous queries`).',
              },
            ],
          },
          {
            sideHeading: '4. Fast Data Finder (FDF) Pipelined VLSI Processor',
            description:
              'Specialized hardware text pipeline searching English and foreign languages at disk streaming speed.',
            subGroups: [
              {
                sideHeading: 'VLSI Pipeline Architecture',
                bullets: [
                  {
                    label: 'Chip & Cell Capacity',
                    text: 'Uses VLSI chips (`24 programmable cells per chip; 3,600 total cells in TREC systems`) arranged in a linear hardware pipeline.',
                  },
                  {
                    label: 'Cell Internals & Buses',
                    text: 'Each cell houses a character **Register ($R_s$)** and **Comparator ($C_s$)** interconnected via an **8-bit data path** and **20-bit control path**.',
                  },
                ],
              },
              {
                sideHeading: 'Seven Functions Supported by Fast Data Finder',
                bullets: [
                  '1. Boolean logic including negation',
                  '2. Proximity on arbitrary patterns',
                  '3. Variable-length "don\'t-cares"',
                  '4. Term counting and thresholds',
                  '5. Fuzzy matching (typo tolerance)',
                  '6. Term weights',
                  '7. Numeric ranges',
                ],
              },
            ],
          },
        ],
        diagramId: 'hardware-fdf-gescan',
        diagramCaption: 'Hardware Text Search: GESCAN Text Array Processor (TAP) & Fast Data Finder (FDF) Pipeline',
      },
      {
        heading: 'Information System Evaluation Metrics & TREC Benchmarks (R17 Notes p.79–84)',
        subGroups: [
          {
            sideHeading: '1. Five Reasons to Evaluate IRS & Measurement Perspectives',
            bullets: [
              {
                label: 'Five Evaluation Objectives',
                text: 'Evaluate to:',
                children: [
                  '1. Aid in selecting a system for procurement',
                  '2. Monitor and evaluate ongoing system effectiveness',
                  '3. Improve the user query generation process',
                  '4. Provide inputs to cost–benefit analysis',
                  '5. Measure the effects of changes made to an existing system',
                ],
              },
              {
                label: 'Perspectives & Techniques',
                text: 'Evaluated from **User vs System perspectives** using **Objective counts** (`response time, memory/CPU cycles, Precision, Recall, Fallout`) and **Subjective user relevance judgments** (`Fig 11.1`).',
              },
            ],
            diagramId: 'eval-relevant-loop',
            diagramCaption: 'Figure 11.1: Identifying Relevant Items Feedback Loop in System Evaluation (R17 Notes p.80)',
          },
          {
            sideHeading: '2. Advanced Evaluation Metrics (Fallout, URR, Novelty, Coverage, Sought Recall)',
            bullets: [
              {
                label: 'Fallout',
                text: 'Fraction of total non-relevant documents mistakenly retrieved (`inverse recall; avoids 0/0 unless every item is relevant`).',
              },
              {
                label: 'Unique Relevance Recall (URR)',
                text: 'Benchmarks unique relevant items found by one algorithm that competing algorithms miss—measured over **TNRR** (`985` total retrieved relevant) or **TURR** (`61` unique retrieved relevant, **Fig 11.2b**).',
              },
              {
                label: 'Novelty Ratio',
                text: 'Ratio of retrieved relevant items **previously unknown to the user** to total relevant retrieved.',
              },
              {
                label: 'Coverage Ratio',
                text: 'Ratio of relevant items retrieved to total relevant items already known by the user before search.',
              },
              {
                label: 'Sought Recall',
                text: 'Ratio of total relevant items reviewed after search to total relevant items the user wished to examine.',
              },
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
            sideHeading: '3. Cranfield Benchmarks -> TREC-1 through TREC-5',
            bullets: [
              {
                label: 'Cranfield I & II (Cleverdon 1962/1966)',
                text: 'Classic early test collection (`1,400 documents, 225 queries`) before large-scale benchmarks.',
              },
              {
                label: 'TREC Framework (DARPA & NIST, 1992+)',
                text: 'Provides $>1\\text{ GB}$ training and test collections with top-**200** ranked manual judging over structured search Topics (`Number, Domain, Title, Description, Narrative, Concepts`).',
              },
              {
                label: 'TREC Evolution (`1 -> 5`)',
                text: 'Progressed from scaling giant DBs (**TREC-1/2**) and passage search + `119`-term topics (**TREC-3**) to focused `16`-term queries and 5 specialized evaluation tracks including Spanish `El Norte` (`200 MB`) in **TREC-4**, through **TREC-5** (1996).',
              },
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
      {
        label: 'Speech Retrieval Definition',
        text: 'Task of locating and retrieving relevant segments or complete recordings of human spoken audio from large collections in response to a text or voice query.',
      },
    ],
    subSections: [
      {
        heading: 'Two Core Spoken Speech Retrieval Tasks (IRS_UNIT_5 p.6)',
        subGroups: [
          {
            sideHeading: '1. Spoken Document Retrieval (SDR — Whole Recording Ranking)',
            description:
              'User enters a text string or spoken voice query and receives a rank-ordered list of entire audio recordings scored by ASR transcript relevance plus query demand and popularity/site-visit signals.',
          },
          {
            sideHeading: '2. Spoken Utterance Retrieval (SUR — Timestamped Sub-Clip Retrieval)',
            description:
              'Pinpoints and retrieves specific spoken utterance clips matching the query even when multiple relevant utterances appear inside one long recording.',
            example:
              'Browsing broadcast news archives, voicemails, teleconferences, and recorded university lectures.',
          },
        ],
      },
      {
        heading: 'ASR Challenges: WER, OOV Terms & Phonetic Word Lattices',
        bullets: [
          {
            label: 'Word Error Rate (WER)',
            text: 'Spoken transcripts suffer acoustic decoding errors from background noise, accents, homophones (`"recognize speech"` vs `"wreck a nice beach"`), and channel distortion.',
          },
          {
            label: 'Out-Of-Vocabulary (OOV) Terms',
            text: 'Proper nouns, acronyms, and rare terms missing from fixed ASR dictionaries fail word-only indexing unless indexed using Sub-word Phonetic N-Gram Lattices.',
          },
          {
            label: 'N-Best Lattices & Time Offsets',
            text: 'Indexing N-Best recognition lattices alongside `(start_ms, end_ms)` timestamps prevents retrieval misses whenever top-1 ASR decoding makes an error.',
          },
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
      {
        label: 'Scope of Non-Speech Audio',
        text: 'Provides non-verbal acoustic alerts, interface controls, and music retrieval channels beyond spoken human words.',
      },
    ],
    subSections: [
      {
        heading: 'Three Domains of Non-Speech Audio in IRS (IRS_UNIT_5 p.6–7)',
        subGroups: [
          {
            sideHeading: '1. Event-Driven Audio Cues (Acoustic Feedback)',
            description:
              'Non-speech audio cues accompany specific object actions and events to alert users immediately without visual scanning.',
            bullets: [
              {
                label: 'Safety & Historical Examples',
                text: 'Fire alarms and aircraft cockpit audio cues communicating critical object states.',
              },
              {
                label: 'Software UI Alerts',
                text: 'Notification chimes signaling incoming mail, system updates, and guided action instructions.',
              },
            ],
          },
          {
            sideHeading: '2. Non-Speech Audio Input (Humming & Hissing Controls)',
            description:
              'Uses intentional non-speech vocalizations—such as **humming or hissing**—to enter data or control user interfaces hands-free.',
          },
          {
            sideHeading: '3. Instrumental Music Search & Query-by-Humming (QBH)',
            bullets: [
              {
                label: 'Parsons Code Melodic Contour',
                text: 'Query by Humming translates sung/hummed melodies into relative pitch directions (`U = Up, D = Down, R = Repeat, * = First Note`) invariant to singing key or tempo.',
              },
              {
                label: 'Spectral Features & MPEG-7 Metadata',
                text: 'Acoustic indexing extracts MFCCs, spectral centroid, zero-crossing rate, and beat histograms aligned with MPEG-7 Audio tags (`artist, tempo, genre`).',
              },
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
      {
        label: 'Graph-Based IRS Definition',
        text: 'Expresses queries as graphs of topics/subtopics and ranks documents using three relationship layers: relationships among documents, relationships among topics/subtopics, and relationships between query terms and documents.',
      },
    ],
    subSections: [
      {
        heading: 'Structural Graph Modeling, Pictorial Charts & Matching Metrics (IRS_UNIT_5 p.7)',
        subGroups: [
          {
            sideHeading: '1. Graph-Based Structural Ranking & Performance',
            bullets: [
              {
                label: 'Fast, Scalable & Flexible',
                text: 'Graph computation executes rapidly, scales across large collections, and easily incorporates diverse performance enhancements.',
              },
              {
                label: 'Higher Retrieval Accuracy',
                text: 'Benchmarked against standard text engines on standard collections, relationship-aware graph ranking outperforms baseline systems.',
              },
            ],
          },
          {
            sideHeading: '2. Pictorial Chart Representation & Result Analysis',
            description:
              'Represents object-to-object relationships visually via **Bar charts** and **Pie charts** so users grasp quantitative result analysis effortlessly.',
            example:
              'Comparing **number of products sold vs number of products refunded**, or **student pass percentage vs fail percentage**.',
          },
          {
            sideHeading: '3. Structural Graph Matching Metrics',
            bullets: [
              {
                label: 'Exact Subgraph Isomorphism',
                text: 'Locates identical topological query subgraphs inside graph databases (`molecules, knowledge graphs`).',
              },
              {
                label: 'Approximate Graph Edit Distance',
                text: 'Scores partial structural similarity allowing node/edge insertions, deletions, or relabeling.',
              },
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
      'User Professions & Need Modes (Primitive vs Abstract/Symbolic Imagery)',
      'Text Metadata Annotation (Manual vs Automatic & Social Web Tools)',
      'Content-Based Image Retrieval (CBIR — Color, Texture, Shape)',
      'Commercial Adoption Status & Semantic Gap',
    ],
    summaryLine:
      '**Imagery Retrieval** browses and locates images either via human/automatic text metadata (**Annotation-Based Retrieval**) or mathematical **Content-Based Image Retrieval (CBIR)** descriptors matching **Color, Texture, and Shape**.',
    bullets: [
      {
        label: 'Image Retrieval System Definition',
        text: 'A computer system used for browsing, searching, and retrieving images from a large digital image database.',
      },
      {
        label: 'Five Target User Groups',
        text: 'Widely relied upon by journalists, engineers, designers, artists, and advertising agencies.',
      },
      {
        label: 'Two User Need Modes',
        text: 'Users query images either by **Primitive Visual Features** (`Color, Texture, Shape`) or by **Abstract Concepts and Symbolic Imagery** (`mood, events, themes`).',
      },
    ],
    subSections: [
      {
        heading: 'Two Fundamental Paradigms of Image Retrieval (IRS_UNIT_5 p.8)',
        subGroups: [
          {
            sideHeading: '1. Annotation-Based Image Retrieval',
            subGroups: [
              {
                sideHeading: 'Manual Metadata Annotation & Cost Limit',
                description:
                  'Traditional systems attach text metadata (**captions, keywords, titles, descriptions**) so search runs over annotation words—however manual tagging is **time-consuming, laborious, and expensive**.',
              },
              {
                sideHeading: 'Automatic & Social/Semantic Web Annotation',
                description:
                  'Growth of social web applications and the Semantic Web has driven automated image annotation algorithms and collaborative web tagging tools.',
              },
            ],
          },
          {
            sideHeading: '2. Content-Based Image Retrieval (CBIR)',
            description:
              'Extracts numerical visual descriptors directly from image pixels to match query images or sketches without relying solely on manual captions:',
            subGroups: [
              {
                sideHeading: 'Color Descriptors',
                description:
                  'Computes Color Histograms and statistical `RGB / HSV` color moments invariant to image rotation.',
              },
              {
                sideHeading: 'Texture Descriptors',
                description:
                  'Quantifies surface coarseness, contrast, and directional periodicity using **GLCM (Gray-Level Co-occurrence Matrix)** and **Gabor / Wavelet transforms**.',
              },
              {
                sideHeading: 'Shape Descriptors',
                description:
                  'Captures geometric boundary contours, edge histograms, Fourier descriptors, and moment invariants independent of color.',
              },
              {
                sideHeading: 'Marketplace Status & Semantic Gap',
                description:
                  'Although CBIR is actively transitioning from academic laboratories into the marketplace, it still lacks maturity for large-scale general use due to the pixel-to-meaning Semantic Gap.',
              },
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
      'Video Database Components & Interactive Frame Queries',
      'Shot Boundary Detection & Keyframe Extraction',
      'Five Visual Similarity Features (Color, Texture, Shape, Motion, Spatial-Temporal Composition) & Social Platforms',
    ],
    summaryLine:
      '**Video Retrieval** decomposes moving visual media (`Mechanical TV -> CRT -> Flat Panel -> Interactive Web`) into **Shots & Keyframes**, indexing **Frames, Audio, Color, Texture, Shape, Motion, and Spatial-Temporal Composition**.',
    bullets: [
      {
        label: 'Video Medium & Display Evolution',
        text: 'Electronic medium for recording, copying, playback, broadcasting, and displaying moving visual media—evolving from Mechanical Television systems to CRT (`Cathode-Ray Tube`) displays and Flat Panel displays.',
      },
      {
        label: 'Interactive Web Video Applications & Database Components',
        text: 'Interactive web-based video retrieval accepts sample video frames or text queries against repositories combining still video frames, audio tracks, closed captions, and motion video.',
      },
    ],
    subSections: [
      {
        heading: 'Video Segmentation & Five Core Similarity Features (IRS_UNIT_5 p.9)',
        subGroups: [
          {
            sideHeading: '1. Shot Boundary Detection & Keyframe Extraction',
            bullets: [
              {
                label: 'Shot Boundary Detection',
                text: 'Segments raw video sequences at abrupt Hard Cuts or gradual Fades, Dissolves, and Wipes.',
              },
              {
                label: 'Keyframe Extraction',
                text: 'Selects representative still frames per camera shot so spatial visual indexes run cleanly without processing `30–60` redundant frames every second.',
              },
            ],
          },
          {
            sideHeading: '2. Five Visual Features Used in Video Similarity Matching',
            subGroups: [
              {
                sideHeading: '1. Color',
                description: 'Extracted statically across representative shot keyframes via color histograms/moments.',
              },
              {
                sideHeading: '2. Texture',
                description: 'Captures surface coarseness and directional patterns on shot keyframes.',
              },
              {
                sideHeading: '3. Shape',
                description: 'Captures geometric object outlines and edge descriptors inside keyframes.',
              },
              {
                sideHeading: '4. Motion',
                description: 'Tracks dynamic object trajectories, optical flow, and camera pan/zoom movement across sequential frames.',
              },
              {
                sideHeading: '5. Spatial–Temporal Composition',
                description: 'Encodes the relative spatial layout and changing co-occurrence geometry of interacting objects over time.',
              },
            ],
          },
          {
            sideHeading: '3. Social Media & Semantic Web Video Retrieval',
            description:
              'Rapid growth of Social Media platforms (`YouTube`) and the Semantic Web enables designers, educators, and communities to share and retrieve video combining visual keyframes, collaborative tags, and ASR speech captions.',
          },
        ],
      },
    ],
    keyTakeaway:
      'Trace display evolution (**Mechanical TV -> CRT -> Flat Panel -> Web Frame Search**), explain **Shots & Keyframes**, and isolate all **5 matching features (`Color, Texture, Shape, Motion, Spatial-Temporal Composition`)** cleanly.',
  },
];
