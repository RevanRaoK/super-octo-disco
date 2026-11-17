import { LessonTopic } from '@/types/course';

export const UNIT1_TOPICS: LessonTopic[] = [
  {
    id: 'u1-definition',
    shortTitle: 'Definition, Needs, Working & Searches',
    unit: 'unit1',
    order: 1,
    title: 'Definition of Information Retrieval System',
    subtopicsCovered: [
      'Definition of Information Retrieval System',
      'Need for IRS (8 Reasons)',
      'Core Entities (Item, Query, Overhead)',
      'Types of Searches (Web, Desktop, Library, Known-Item, Subject)',
      '9-Step Basic Working Cycle & Lifecycle',
      'Characteristics, Real-Life Examples, Applications, Advantages & Limitations',
    ],
    summaryLine:
      'An **Information Retrieval System (IRS)** stores, processes, and retrieves unstructured textual or multimedia **items** from large collections to satisfy a user information need stated as a **query**.',
    bullets: [
      'An **Information Retrieval System (IRS)** accepts a user **query** expressing an information need, searches stored **items** (books, articles, web pages, emails, or multimedia files), and returns the most relevant subset.',
      'In IRS terminology, an **Item** is the complete informational unit managed by the system—ranging from an ASCII article or PDF textbook to HTML pages, audio streams, or video clips.',
      'A **Query (Search Statement)** is the user formal specification combining keywords, Boolean logic, phrases, or natural language to locate needed items.',
      'System **Overhead** encompasses the extra storage consumed by index files (often 50–70% of raw text size), computational search cost, and non-relevant false hits returned alongside relevant results.',
      'Unlike structured lookups that require exact attribute matching, an IRS handles **unstructured and semi-structured data** where meaning depends on vocabulary, context, and relevance scoring.',
    ],
    subSections: [
      {
        heading: 'Why We Need an IRS (8 Core Needs)',
        bullets: [
          'Modern digital ecosystems generate a **huge volume of data** every second across books, research papers, emails, and websites that cannot be read manually.',
          'An IRS delivers **fast searching** across billions of indexed tokens in fractions of a second rather than forcing sequential document reading.',
          'Instead of dumping every raw file containing one matching keyword, **relevant extraction** identifies only items closely aligned with the user intent.',
          'Automated lookup achieves massive **time saving** for students, clinicians, engineers, and legal analysts conducting literature reviews.',
          'Zoning and metadata indexes bring **structured organization** to naturally chaotic text collections without altering original documents.',
          'Unlike relational databases restricted to tables, an IRS natively **handles unstructured text**, free-form prose, PDFs, and multimedia.',
          'Timely retrieval of past reports, patents, and clinical studies provides direct **decision-making support** in enterprise and research environments.',
          'Automated token processing and ranking eliminate tedious **manual catalog scanning**, dramatically reducing human fatigue and missed references.',
        ],
      },
      {
        heading: 'Types of Searches & User Query Lifecycle',
        bullets: [
          'A **Web Search** discovers online web pages across the World Wide Web using search engines like Google or Bing.',
          'A **Desktop Search** locates local emails, PDFs, presentations, and files stored directly inside a user personal computer.',
          'A **Library Catalog Search** retrieves academic books, theses, journals, and physical holdings inside institutional or digital libraries.',
          'A **Known-Item Search** locates a specific document whose identifying title, author, or ID is already known to the user.',
          'A **Subject / Concept Search** explores an unfamiliar domain using topic keywords to uncover all documents covering that subject.',
          'A **Fact / Reference Lookup** extracts a targeted entity or numerical fact directly rather than returning full multi-page manuals.',
          'The interactive **User Query Lifecycle** progresses cleanly through four stages: **Query Generation** (mental need to words), **Search Composition** (adding operators), **Search Execution** (index matching), and **Scanning Results** (inspecting ranked titles and snippets).',
        ],
      },
      {
        heading: 'Basic Working Cycle (9 Sequential Steps)',
        bullets: [
          '**Step 1 (Information Collection)** ingests heterogeneous source materials including books, web pages, articles, and reports into the IRS repository.',
          '**Step 2 (Document Processing)** cleans raw text by normalizing encodings, splitting zones, removing punctuation/stop words, and stemming inflectional suffixes.',
          '**Step 3 (Index Creation)** maps every extracted keyword or concept stem to the document IDs and word positions where it occurs.',
          '**Step 4 (Database Storage)** stores normalized full documents in the archival document database alongside searchable indexes.',
          '**Step 5 (User Query Input)** captures the user search request typed into the search bar (e.g., `"information retrieval notes"`).',
          '**Step 6 (Query Processing)** applies identical cleaning, stop-word removal, stemming, and query expansion to the user search string.',
          '**Step 7 (Matching)** compares processed query tokens against stored index entries to locate candidate matching documents.',
          '**Step 8 (Ranking)** computes similarity or probability scores for candidate hits and sorts the most relevant documents to the top.',
          '**Step 9 (Retrieved Documents)** formats titles, abstracts, highlighted snippets, and links for user inspection on the results screen.',
        ],
        diagramId: 'irs-working-steps',
        diagramCaption:
          'Complete 9-Step Information Retrieval System Working Cycle (Ingestion to Ranked Retrieval)',
      },
      {
        heading: 'Characteristics, Real-Life Applications, Advantages & Limitations',
        bullets: [
          'Core **Characteristics of an IRS** include unstructured data handling, billion-scale collection support, keyword and semantic query matching, ranked output, millisecond response speed, multimedia support, and intuitive user interfaces.',
          'Everyday **Real-Life Examples** span Google Search, Amazon product search, YouTube video discovery, Wikipedia topic lookup, Netflix recommendations, Spotify song search, digital library portals, legal case search, hospital EHR retrieval, and internal corporate search.',
          'Major **Application Sectors** include web search engines, university digital libraries, E-Commerce storefronts, medical diagnostics archives, legal discovery platforms, academic citation engines, and financial compliance systems.',
          'Key **Advantages of an IRS** are rapid search speed, accurate relevance ranking, handling massive datasets, automated indexing, continuous availability, user-friendly keyword syntax, decision support, and reduced manual overhead.',
          'Principal **Limitations of an IRS** include irrelevant results caused by ambiguous words (`bank`, `apple`), heavy dependence on query wording quality, large index storage overhead, frequent index update cost, inability to capture deep human nuance fully, and multimedia indexing complexity.',
        ],
      },
    ],
    table: {
      caption: 'Core IRS Terminologies & Real-World Mapping',
      headers: ['Term / Stage', 'Technical Definition', 'Concrete Example'],
      rows: [
        ['Item (Document)', 'Any standalone textual or multimedia unit indexed by IRS', 'PDF lecture note, HTML article, WAV lecture'],
        ['Query (Search Statement)', 'Formal or natural expression of user information need', 'stemming AND "inverted file" NOT pat'],
        ['Overhead', 'Non-relevant hits returned plus extra index storage cost', 'Inverted index taking 50–70% of text size'],
        ['Known-Item vs Subject', 'Finding one exact known work vs exploring a broad topic', 'Kowalski 1997 vs "stemming algorithms"'],
        ['Query Lifecycle (4 Steps)', 'Generation -> Composition -> Execution -> Scanning Results', 'Think -> Type Boolean -> Execute -> Inspect Snippets'],
      ],
      highlightRows: [0, 1],
    },
    keyTakeaway:
      'Include the **8 reasons why IRS is needed**, the **9 working steps**, **Web/Desktop/Library/Known-Item/Subject searches**, and **Advantages vs Limitations** for a complete Unit 1 answer.',
    selfCheck: {
      question: 'What are the 9 sequential steps in the basic working of an Information Retrieval System?',
      answer:
        'Collection -> Document Processing -> Index Creation -> Database Storage -> User Query -> Query Processing -> Matching -> Ranking -> Retrieved Documents.',
    },
  },
  {
    id: 'u1-objectives',
    shortTitle: '12 Objectives, Doc Space & Metrics',
    unit: 'unit1',
    order: 2,
    title: 'Objectives of Information Retrieval Systems',
    subtopicsCovered: [
      '12 Specific Objectives of an IRS',
      'Maximizing Relevance vs Minimizing Overhead',
      'Total Document Space Quadrant (Figure 1.1)',
      'Precision, Recall, Fallout & F1 Formulas',
      'Supporting User Search Generation & Vocab Domains (Figure 1.3)',
      'Presentation of Results (Ranking & Clustering/Link Analysis)',
    ],
    summaryLine:
      'The overarching objective of an IRS is to deliver **fast, accurate retrieval of relevant textual and multimedia information** (**high Recall and Precision**) while minimizing **non-relevant overhead** and helping users refine search statements.',
    bullets: [
      'Every retrieval architecture balances **effectiveness** (finding truly relevant items without noise) against **efficiency** (low response latency, compact index storage, and minimal user effort).',
      'Evaluating system success distinguishes four states across the **Total Document Space** (**Figure 1.1**): **Retrieved Relevant** (true hits), **Retrieved Non-Relevant** (false-hit overhead), **Not Retrieved Relevant** (missed items), and **Not Retrieved Non-Relevant** (correctly excluded).',
    ],
    subSections: [
      {
        heading: 'All 12 Core Objectives of an Information Retrieval System',
        bullets: [
          '**Objective 1 — Fast Retrieval of Information**: The system must locate and display matching items rapidly—within seconds—even when searching millions of stored records (for example, returning instant web results).',
          '**Objective 2 — Retrieve Relevant Information**: Retrieval algorithms must prioritize documents whose actual subject meaning answers the user intent rather than matching isolated words by accident.',
          '**Objective 3 — Improve Search Accuracy**: Accurate indexing, phrase detection, and weighting must reduce ambiguous or off-topic matches so returned top hits remain reliable.',
          '**Objective 4 — Reduce Search Time**: Automated index scanning eliminates slow page-by-page manual browsing across massive physical or digital repositories.',
          '**Objective 5 — Efficient Storage of Information**: Compressed inverted lists, signatures, and stop-word removal allow systems to organize massive archives without wasting disk space.',
          '**Objective 6 — Support Large Databases**: Architecture and data structures must scale gracefully to gigabyte- and terabyte-sized enterprise libraries without degrading query latency.',
          '**Objective 7 — User Satisfaction**: Clean interfaces, understandable relevance scores, highlighted snippets, and readable results ensure users locate needed answers effortlessly.',
          '**Objective 8 — Ranking of Results**: Instead of returning unsorted sets, the IRS must score and rank items from most relevant to least relevant at the top of the result list.',
          '**Objective 9 — Handle Multimedia Information**: Modern IRS platforms index and search beyond plain text to retrieve **Text documents, Images, Audio files, Video files, PDFs & Presentations, and full Multimedia collections** (such as Google Images and YouTube).',
          '**Objective 10 — Minimize Irrelevant Information (Overhead)**: Filtering and precise ranking suppress noisy off-topic hits that waste user reading time (**Retrieval Overhead**).',
          '**Objective 11 — Provide Easy Access to Information**: Users can discover knowledge across local desktops, institutional catalogs, or remote networks via simple search statements anytime.',
          '**Objective 12 — Support Decision Making**: Rapid access to verified past research, market trends, clinical records, and legal precedents empowers timely informed decisions.',
        ],
      },
      {
        heading: 'Minimizing Overhead & Quantitative Trade-offs (Figure 1.1)',
        bullets: [
          'In Kowalski framework, minimizing **Overhead** means jointly reducing **non-relevant items retrieved**, **storage/computation overhead**, and the **human time required to evaluate results**.',
          'Tightening queries (adding specific `AND` terms) reduces false hits and raises **Precision ($P$)**, but typically drops **Recall ($R$)** because valid relevant documents lacking one exact keyword are skipped.',
          'Relaxing queries (adding `OR` synonyms or stemming) increases **Recall ($R$)**, yet pulls more non-relevant documents into the hit set (**Precision-Recall Inverse Trade-off**).',
        ],
        formulas: [
          {
            label: 'Precision ($P$)',
            tex: '\\text{Precision} = \\frac{\\text{Number\\_Retrieved\\_Relevant}}{\\text{Number\\_Total\\_Retrieved}}',
            note: 'Measures **exactness**: fraction of retrieved items that are genuinely relevant to the user need.',
          },
          {
            label: 'Recall ($R$)',
            tex: '\\text{Recall} = \\frac{\\text{Number\\_Retrieved\\_Relevant}}{\\text{Number\\_Possible\\_Relevant}}',
            note: 'Measures **completeness**: fraction of all relevant items in the entire collection actually retrieved.',
          },
          {
            label: 'Fallout ($F$) & $F_1$-Measure',
            tex: '\\begin{aligned} \\text{Fallout} &= \\frac{\\text{Number\\_Retrieved\\_Nonrelevant}}{\\text{Number\\_Total\\_Nonrelevant}} \\\\[6pt] F_1 &= \\frac{2 \\cdot P \\cdot R}{P + R} \\end{aligned}',
            note: '**Fallout** tracks the false-alarm fraction of non-relevant documents retrieved; **$F_1$** computes the harmonic mean of $P$ and $R$.',
          },
        ],
        diagramId: 'irs-doc-space',
        diagramCaption:
          'Figure 1.1: Effects of Search on Total Document Space — 4 Quadrants Defining Precision, Recall, and Fallout',
      },
      {
        heading: 'Supporting User Search Generation & Presentation of Results (Figure 1.3)',
        bullets: [
          'Users and item authors come from distinct **Vocabulary Domains** (**Figure 1.3**) containing **linguistic ambiguities** (e.g., the single word `"field"` meaning an agricultural meadow, a physics force field, or a database column).',
          'Because a user may write a different vocabulary from the document author, an IRS must interactively assist **query generation** through **Vocabulary Browse**, **thesauri**, and **relevance feedback**.',
          'To aid rapid human relevance judgment during result inspection, the IRS presents results via **(A) Ranking in order of potential relevance** and **(B) Item clustering & link analysis** showing conceptual relationships across hits.',
        ],
        diagramId: 'irs-vocab-domains',
        diagramCaption:
          'Figure 1.3: Vocabulary Domains Overlap Between User Query Language and Author/Index Vocabulary',
      },
    ],
    table: {
      caption: 'Retrieval Evaluation Contingency Matrix (2 x 2 Truth Table)',
      headers: ['System Decision \\ True Relevance', 'Relevant ($Rel$)', 'Non-Relevant ($NonRel$)'],
      rows: [
        ['Retrieved ($Ret$)', 'True Positive ($TP$ = Retrieved & Relevant)', 'False Positive ($FP$ = Overhead / Noise)'],
        ['Not Retrieved ($NotRet$)', 'False Negative ($FN$ = Missed Relevant)', 'True Negative ($TN$ = Correctly Excluded)'],
      ],
      highlightRows: [0],
    },
    keyTakeaway:
      'State all **12 Objectives** (including **6 Multimedia types**), draw **Figure 1.1 Document Space** + **Figure 1.3 Vocabulary Domains**, and write the **Precision / Recall / Fallout / $F_1$** equations clearly.',
    selfCheck: {
      question: 'If 40 documents are retrieved, 30 are relevant, and 50 relevant documents exist in total, compute Precision and Recall.',
      answer: 'Precision = 30 / 40 = 0.75 (75%), and Recall = 30 / 50 = 0.60 (60%).',
    },
  },
  {
    id: 'u1-functional-overview',
    shortTitle: 'Functional Overview (All 4 Processes & AFB)',
    unit: 'unit1',
    order: 3,
    title: 'Functional Overview of Information Retrieval Systems',
    subtopicsCovered: [
      'Process 1: Item Normalization (7 Steps, Symbol Classes, Stop-List, Zipf, Stemming, Example)',
      'Process 2: Selective Dissemination of Information (SDI / Mail — 3 Components)',
      'Process 3: Archival Document Database Search (Immutable Archive & Time Partitions)',
      'Process 4: Index Database Search (Public/Private) & Automatic File Build (AFB)',
    ],
    summaryLine:
      'A complete Information Storage and Retrieval System consists of **four major functional processes**: **Item Normalization**, **Selective Dissemination of Information (SDI / Mail)**, **Archival Document Database Search**, and **Index Database Search with Automatic File Build (AFB)**.',
    bullets: [
      'Whenever an item arrives at the IRS, **Item Normalization** transforms heterogeneous external formats into standardized internal tokens and structural zones.',
      'From normalization, incoming items split immediately across three parallel operational paths (**Figure 1.4**): real-time push alerts via **SDI (Mail)**, permanent storage via **Document File Creation**, and automated metadata extraction via **Automatic File Build (AFB)**.',
    ],
    subSections: [
      {
        heading: '1. Item Normalization (Formats, Zoning, Symbols, Stop-List, Zipf, Stemming & Example)',
        bullets: [
          '**Item Normalization** transforms heterogeneous external formats and encodings into standardized searchable processing tokens and zones before downstream distribution.',
        ],
        subGroups: [
          {
            sideHeading: 'Step 1 — Standardize Input Formats & Step 2 — Logical Subsetting (Zoning)',
            bullets: [
              '**Standardize Input** converts heterogeneous character sets (`Unicode, ISO-Latin`) and multimedia streams (`MPEG-1/2, AVI, WAV, JPEG, BMP`) into one canonical internal format.',
              '**Logical Subsetting (Zoning)** splits each item into structural regions (`Title, Author, Abstract, Main Text, Conclusion, References`), enabling targeted searches like `"Einstein"` in `Author`/`Title` rather than incidental `References`.',
            ],
          },
          {
            sideHeading: 'Step 3 — Identify Processing Tokens (Three Symbol Classes)',
            bullets: [
              '**Valid Word Symbols** include searchable letters, numerals, and allowed intra-word tokens.',
              '**Inter-Word Symbols** identify non-searchable boundary separators such as spaces, periods, and semicolons.',
              '**Special Processing Symbols** govern context-sensitive punctuation such as the **hyphen (`-`)** inside compound terms.',
            ],
          },
          {
            sideHeading: 'Step 4 — Stop Algorithm, Step 5 — Characterize, Step 6 — Stem & Step 7 — Store',
            bullets: [
              '**Stop Algorithm & Zipf Law** removes ultra-frequent non-discriminating words (`the, is`), large numbers (`> 999999`), and mixed tokens (`6A1`) following **Zipf Law** ($f \\cdot r = C$), cutting index bloat by 30–50%.',
              '**Characterize Tokens** tags remaining words with **Part-of-Speech (POS)**, **Word Sense Disambiguation (WSD)**, uppercase proper names/acronyms, numbers, and dates.',
              '**Stemming Algorithm** conflates variants (`Computer, Compute, Computers, Computing -> Comput`), saving **32% on small DBs**, **20% on 1.6 MB DBs**, and **13.5% on 50 MB DBs** while trading slight **Precision** for higher **Recall**.',
              '**Create Searchable Data Structure** persists final stems, weights, and zone offsets into the **Inverted File**, **PAT Tree**, or **Signature File**.',
            ],
          },
          {
            sideHeading: 'Worked Normalization Trace & Key Benefits',
            bullets: [
              '**Worked Input:** `"Information Retrieval Systems are very useful."` normalizes to lowercase and strips trailing punctuation.',
              '**Worked Output:** Dropping stop words (`are, very`) and stemming inflections emits four final searchable index tokens: `[information, retrieval, system, useful]`.',
              '**Key Advantages:** Guarantees case-independent matching, saves substantial disk space by merging word variants, improves **Recall**, and simplifies search scoring.',
            ],
          },
        ],
        formulas: [
          {
            label: 'Zipf Frequency-Rank Law (Stop-Word Cutoff)',
            tex: '\\text{Frequency} \\times \\text{Rank} \\approx \\text{Constant} \\quad (f \\cdot r = C)',
            note: 'The highest-frequency, lowest-rank tokens carry the lowest discrimination power and belong in the **Stop-List**.',
          },
        ],
        diagramId: 'irs-functional-flow',
        diagramCaption:
          'Figure 1.5 / Pipeline: Sequential 7 Stages of Item Normalization from Raw Input to Searchable Index',
      },
      {
        heading: '2. Selective Dissemination of Information (SDI / "Mail")',
        bullets: [
          '**SDI (Push Retrieval)** dynamically compares newly normalized items against standing user interest statements and routes hits directly into **User Mail Files**.',
          '**Component 1 — Search Process:** Evaluates each newly ingested document against stored profiles in real time.',
          '**Component 2 — User Profile:** Holds broad standing interest statements (`broader and term-richer than ad-hoc queries`) plus recipient routing targets.',
          '**Component 3 — User Mail File:** Collects matched items automatically (` historically text-only streams`), exemplified by an AI/ML researcher receiving weekly **Google Scholar Alerts** for `"Deep Learning" OR "Medical Imaging"`.',
        ],
      },
      {
        heading: '3. Archival Document Database Search',
        bullets: [
          '**Archival Document Database Search** retrieves retrospective historical items matching interactive user requests across permanent collections managed by the **Document Manager**.',
          '**Component 1 — Search Process** executes interactive lookups across retrospective index pointers.',
          '**Component 2 — Ad-hoc Queries** represent short, sharply focused searches submitted by users for an immediate one-time need.',
          '**Component 3 — Immutable Document Database** acts as a **write-once / append-only repository** organized via **time-based partitioning** so historical searches stay fast without scanning decade-old shards.',
        ],
      },
      {
        heading: '4. Index Database Search & Automatic File Build (AFB)',
        bullets: [
          '**Filing / Indexing** stores structured item references (`like a physical Library Card Catalog for Title, Author, and Subject`) so indirect index lookup avoids scanning raw documents.',
          '**Public vs Private Index Files:** Shared **Public Index Files** (often backed by an **RDBMS**) remain accessible across the whole organization, while **Private Index Files** restrict sensitive indexes to specific teams—both joinable under **Combined File Search**.',
          '**Automatic File Build (AFB):** Executes **AFB Profiles** on arriving items to extract structured fields (`Authors, Title, Publication Date, Source, References`) into **Candidate Index Records**.',
          '**AFB Human Review:** Analysts optionally review and refine generated **Candidate Index Records** before committing them permanently to index files.',
        ],
        table: {
          caption: 'Comparison of the Four Major Functional Processes in an IRS',
          headers: ['Functional Process', 'Direction & Data Source', 'Core Components', 'Primary Role'],
          rows: [
            ['1. Item Normalization', 'Input stream -> internal tokens', 'Converter, Zoner, Tokenizer, Stop-list, Stemmer', 'Creates uniform searchable items & index tokens'],
            ['2. SDI ("Mail")', 'Push incoming items -> user', 'Search Process, User Profiles, User Mail Files', 'Real-time alert delivery for standing interests'],
            ['3. Archival Document DB Search', 'Pull retrospective items on demand', 'Search Process, Ad-hoc Queries, Immutable Document DB', 'Interactive full-text historical lookup (time-partitioned)'],
            ['4. Index DB Search & AFB', 'Indirect structured index lookup & auto-build', 'Public/Private Index Files, AFB Profiles, Candidate Records', 'Fast catalog search + automatic metadata extraction'],
          ],
          highlightRows: [0, 3],
        },
      },
    ],
    diagramId: 'irs-total-system',
    diagramCaption:
      'Figure 1.4: Total Information Storage & Retrieval System Architecture Linking Normalization, SDI, Document File, Index Files & AFB',
    keyTakeaway:
      'Never stop at only Normalization and SDI—explain **all four processes** (`Normalization`, `SDI`, `Archival Doc DB Search`, and `Index DB Search + AFB`) with **Symbol Classes**, **Zipf Law**, **Public/Private Index**, and the **worked example**.',
    selfCheck: {
      question: 'What happens to a document like "Information Retrieval Systems are very useful." during Item Normalization, and where does it go next?',
      answer:
        'After lowercasing, punctuation removal, dropping stop words ("are", "very"), and stemming, tokens [information, retrieval, system, useful] route simultaneously to SDI Profiles (Mail), Document File storage, and AFB Candidate Index Records.',
    },
  },
  {
    id: 'u1-relationship-dbms',
    shortTitle: 'Relationship to DBMS & Integrations',
    unit: 'unit1',
    order: 4,
    title: 'Relationship to Database Management Systems (DBMS)',
    subtopicsCovered: [
      'IRS vs DBMS Definitions & Core Focus',
      'Four Similarities Between IRS & DBMS',
      'Head-to-Head Differences Table',
      'Commercial Integrations (INQUIRE, ORACLE CONVECTIS, INFORMIX RetrievalWare)',
    ],
    summaryLine:
      'While a **DBMS** performs exact deterministic **SQL** retrieval over structured relational tables, an **IRS** performs probabilistic ranked search over **unstructured text**, yet commercial platforms integrate both.',
    bullets: [
      'A **Database Management System (DBMS)** stores, updates, and retrieves structured tabular records (**Roll No, Name, Marks**) organized under rigid relational schemas and keys.',
      'An **Information Retrieval System (IRS)** stores large collections of unstructured prose, PDFs, and multimedia documents and returns ranked relevance lists matching imperfect keyword queries.',
      'From a practical engineering standpoint, combining **DBMS** structured metadata management with **IRS** semantic full-text ranking yields faster, richer enterprise discovery.',
    ],
    subSections: [
      {
        heading: 'Similarities, Differences & Commercial System Integrations',
        bullets: [
          '**Similarity 1:** Both **IRS** and **DBMS** store and retrieve large volumes of organizational data.',
          '**Similarity 2:** Both enable end users to execute interactive search requests.',
          '**Similarity 3:** Both organize underlying items systematically for reliable access.',
          '**Similarity 4:** Both rely heavily on indexing structures to accelerate query lookup performance.',
          'Because document authors express identical ideas using diverse **abstract vocabulary**, an IRS relies on **iterative query refinement**, **fuzziness**, and **thesaurus expansion**, whereas a **DBMS** fails completely if an exact field constraint misses by one character.',
          'One of the earliest integrated commercial database + IR platforms was **INQUIRE DBMS**, combining relational structured querying and free-text retrieval in one unified system.',
          '**ORACLE DBMS** integrates embedded Information Retrieval capability called **CONVECTIS**, which applies a **comprehensive thesaurus** to discover related terms and extract document **themes** automatically.',
          '**INFORMIX DBMS** pairs relational data management with **RetrievalWare** (Excalibur), adding fuzzy, pattern-based, and semantic concept indexing directly inside database workflows.',
        ],
      },
    ],
    table: {
      caption: 'Head-to-Head Comparison: Information Retrieval System (IRS) vs DBMS',
      headers: ['Dimension', 'Information Retrieval System (IRS)', 'Database Management System (DBMS)'],
      rows: [
        ['Data Type', 'Mainly unstructured (documents, PDFs, emails, web pages)', 'Structured relational tables (rows, fixed columns, keys)'],
        ['Search Method', 'Keyword-based, statistical/semantic relevance ranking', 'Exact formal SQL queries with deterministic predicates'],
        ['Query Completeness', 'Handles incomplete, ambiguous, natural-language queries', 'Requires exact attribute names, operators & exact types'],
        ['Output', 'Ranked list ordered by potential relevance score', 'Exact unordered matching set (100% relevant or empty)'],
        ['Update Frequency', 'Append-heavy, write-once collections with rare deletions', 'Frequent transactional INSERT, UPDATE, DELETE (ACID)'],
        ['Evaluation & Goal', 'Find most relevant info (**Precision, Recall, Fallout**)', 'Retrieve exact records (**Throughput, ACID consistency**)'],
        ['Concrete Example', 'Google Search returning pages on "Machine Learning"', 'Student database storing `Roll_No, Name, Marks`'],
      ],
      highlightRows: [0, 1, 3],
    },
    diagramId: 'irs-vs-dbms',
    diagramCaption: 'Architectural Contrast Across IRS, DBMS, Digital Libraries, and Data Warehouses',
    keyTakeaway:
      'Cite the **4 similarities**, **6 comparison dimensions**, and the **3 commercial integrations** (**INQUIRE DBMS**, **ORACLE + CONVECTIS**, **INFORMIX + RetrievalWare**) in your exam answer.',
  },
  {
    id: 'u1-digital-libraries-dw',
    shortTitle: 'Digital Libraries & Data Warehouses',
    unit: 'unit1',
    order: 5,
    title: 'Digital Libraries and Data Warehouses',
    subtopicsCovered: [
      'Digital Library Concept, Examples & Software (KOHA, BIBLIOTEQ, PMP, DSpace, Greenstone)',
      'Data Warehouse Architecture (Inmon Properties, ETL, OLAP)',
      'Data Warehouse Platforms (Redshift, Azure, BigQuery, Snowflake)',
      '3-Way Comparison: DBMS vs Digital Library vs Data Warehouse',
    ],
    summaryLine:
      '**Digital Libraries** curate, tag with metadata, and preserve multimedia scholarly collections for global IR search, whereas **Data Warehouses** integrate historical enterprise records via **ETL** for **OLAP** analytical decision support.',
    bullets: [
      'A **Digital Library (DL)** combines persistent digital archives, **structured cataloging metadata** (**Dublin Core**, **MARC**), **intellectual rights governance**, and **IRS search capabilities** so scholars can search and cite full collections globally.',
      'Unlike ephemeral web search indexes, a **Digital Library** guarantees **curated quality**, **authoritative versioning**, and **long-term preservation** of e-books, theses, journals, images, and audio recordings.',
      'Representative **Digital Library systems** include the **National Digital Library of India (NDLI)**, **IEEE Xplore**, **ACM Digital Library**, and institutional **University Digital Libraries**.',
      'Leading **Digital Library & Library Management software** platforms include **KOHA**, **BIBLIOTEQ**, **PMP (Personal Media Platform)**, **DSpace**, **Greenstone**, and **Fedora Commons**.',
      'A **Data Warehouse (DW)** is a centralized **subject-oriented, integrated, time-variant, and non-volatile** repository consolidating historical operational data from disparate databases for executive decision-making.',
      'Raw operational data enters a **Data Warehouse** via **ETL (Extract, Transform, Load)** pipelines and is analyzed through multidimensional **OLAP** operations (**Roll-up, Drill-down, Slice, Dice**) to answer analytical searches like `"Sales of laptops in Hyderabad during 2024"`.',
      'Major commercial **Data Warehouse platforms** include **Amazon Redshift**, **Microsoft Azure Synapse**, **Google BigQuery**, **Snowflake**, and **Teradata**.',
      'An **IRS** complements both architectures by indexing descriptive abstracts inside a **Data Warehouse** and powering full-text + faceted metadata retrieval inside every **Digital Library**.',
    ],
    table: {
      caption: 'Three-Way Comparison: DBMS vs Digital Library vs Data Warehouse',
      headers: ['Feature', 'DBMS', 'Digital Library (DL)', 'Data Warehouse (DW)'],
      rows: [
        ['What It Stores', 'Operational structured records', 'Digital books, papers, images, audio/video', 'Historical integrated analytical data'],
        ['Data Type', 'Strictly structured tables', 'Mostly unstructured + Dublin Core metadata', 'Structured & summarized multidimensional facts'],
        ['Primary Purpose', 'Real-time OLTP transaction processing', 'Knowledge sharing, preservation & search', 'Business intelligence & OLAP trend analysis'],
        ['Role of IRS', 'Retrieves exact metadata/catalog records', 'Searches books, abstracts & research papers', 'Retrieves historical analytical insights & reports'],
        ['Software / Examples', 'Oracle, MySQL, PostgreSQL', 'KOHA, BIBLIOTEQ, PMP, DSpace, NDLI, IEEE Xplore', 'Amazon Redshift, Azure, Google BigQuery, Snowflake'],
      ],
      highlightRows: [1, 3, 4],
    },
    keyTakeaway:
      'Include the named **DL software (`KOHA, BIBLIOTEQ, PMP, DSpace, Greenstone`)**, real systems (**NDLI, IEEE Xplore, ACM DL**), and **DW platforms (`Redshift, Azure, BigQuery, Snowflake`)** alongside Inmon 4 DW traits.',
  },
  {
    id: 'u1-search-capabilities',
    shortTitle: 'Search Capabilities (All 8 + Precedence)',
    unit: 'unit1',
    order: 6,
    title: 'IRS Capabilities: Search Capabilities',
    subtopicsCovered: [
      'Query Term Sets & Weighted Query Terms',
      'Boolean Logic & Worked Precedence Examples (Fig 2.1)',
      'Proximity Searches & Contiguous Word Phrases',
      'Fuzzy Searches & Term Masking (Fig 2.3 Wildcards)',
      'Numeric/Date Ranges, Concept/Thesaurus Expansion (Fig 2.4–2.5) & NLQ',
    ],
    summaryLine:
      '**Search Capabilities** provide the complete query grammar of an IRS—spanning **Query Term Sets**, **Boolean logic**, **proximity**, **contiguous word phrases**, **fuzzy matching**, **term masking**, **numeric/date ranges**, **concept/thesaurus expansion**, and **natural language queries**.',
    bullets: [
      '**Search Capabilities** allow users to translate conceptual needs cleanly into machine-executable expressions linking query terms with **logical operators**, **weights**, **distance bounds**, or **wildcards**.',
      '**Query Term Sets** group keywords inside a search statement so items matching more distinct query terms generally rank higher than items matching only one repeated term (**Term Weighting** refines priority between $0.0$ and $1.0$).',
    ],
    subSections: [
      {
        heading: 'Boolean Logic, Operator Precedence & Worked Examples',
        bullets: [
          '**Boolean Queries** combine terms using `AND` (set intersection), `OR` (set union), and `NOT` / `AND NOT` (set difference), occasionally supplemented by `XOR`.',
          'Standard Boolean evaluation precedence applies `NOT` highest, `AND` middle, and `OR` lowest from left to right unless overridden by **parentheses**.',
          '**Worked Example 1 (`COMPUTER OR SERVER AND NOT MAINFRAME`)**: Without parentheses, higher-precedence `AND NOT` binds tighter than `OR`, selecting documents discussing computers OR servers without mainframes (`COMPUTER OR (SERVER AND NOT MAINFRAME)`).',
          '**Worked Example 2 (`(COMPUTER OR SERVER) AND NOT MAINFRAME`)**: Parentheses force the union first, selecting documents discussing either computers or servers while rejecting every document mentioning mainframes.',
          '**Worked Example 3 (`COMPUTER AND NOT (SERVER OR MAINFRAME)`)**: Parentheses expand exclusion across both hardware types, returning documents covering computers that mention neither servers nor mainframes.',
          '**Weighted Terms** let searchers multiply each query keyword by an explicit numerical weight (such as `0.8 computer OR 0.2 mainframe`) so critical terms govern ranking.',
        ],
      },
      {
        heading: 'Proximity Searches & Contiguous Word Phrases (CWP)',
        bullets: [
          '**Proximity Searches** constrain two search terms to co-occur within a maximum token window using `WITHIN m`, unordered `NEAR/k`, or strictly ordered `ADJ/k` (e.g., `"information"` `NEAR/3` `"retrieval"`).',
          '**Contiguous Word Phrases (CWP)** delimited by quotation marks (`"United States of America"`) require exact word order and strict immediate adjacency.',
          'Restricting proximity to single sentences, paragraphs, or zones raises **Precision** sharply without sacrificing concept coverage.',
        ],
      },
      {
        heading: 'Fuzzy Searches & Term Masking (Wildcards — Fig 2.3)',
        bullets: [
          '**Fuzzy Searches** locate spelling variations, typos, and OCR scanning errors (matching `"retreival"` or `"recieve"`) within a bounded character **edit distance** threshold, boosting **Recall** while slightly lowering **Precision**.',
          '**Term Masking (Wildcarding)** matches arbitrary variable-length (`*`) or fixed single-character (`?` / `$`) substrings anywhere inside a term.',
          'Three masking modes cover every word part (**Figure 2.3**): **Prefix masking** (`*comput*` / `*graph`), **Suffix masking** (`comput*`), and **Embedded / Infix masking** (`multi$national`, `wom?n`).',
          'Notice a critical **Numeric Trap**: applying term masking like `125*` does NOT find numbers `> 125`—it only matches strings literally starting with digits `"125"` (`1250`, `1259`).',
        ],
      },
      {
        heading: 'Numeric/Date Ranges, Concept/Thesaurus Expansion & Natural Language Queries',
        bullets: [
          '**Numeric and Date Range Queries** evaluate true mathematical comparisons (`>=`, `<=`, `BETWEEN 2020 AND 2026`) on zoned date, price, or measurement fields where wildcard string matching fails.',
          '**Concept and Thesaurus Expansion** automatically enriches queries via one-level **Thesauri** (expanding `"computer"` -> `PC, mainframe, CPU, minicomputer` in **Figure 2.4**) or hierarchical/network **Concept Classes** (**TOPIC tree** in **Figure 2.5** or **RetrievalWare semantic network**).',
          '**Natural Language Queries (NLQ)** allow unconstrained conversational questions (`How does term weighting work?`), which the IRS automatically stops, stems, extracts nouns/weights from, and ranks statistically.',
        ],
      },
    ],
    diagramId: 'irs-search-capabilities',
    diagramCaption:
      'Complete IRS Search Capabilities Matrix Covering Boolean, Proximity, CWP, Fuzzy, Wildcards, Ranges, Concept Classes & NLQ',
    keyTakeaway:
      'Always write the **3 Boolean precedence examples (`COMPUTER / SERVER / MAINFRAME`)**, **Prefix/Suffix/Embedded Term Masking**, and why `125*` fails numeric range search.',
  },
  {
    id: 'u1-browse-capabilities',
    shortTitle: 'Browse Capabilities (Ranking, Zoning, Nav & Viz)',
    unit: 'unit1',
    order: 7,
    title: 'IRS Capabilities: Browse Capabilities',
    subtopicsCovered: [
      'Ranking & Relevance Threshold Cutoffs',
      'Zoning (Logical Field Filtering & Selective Display)',
      'Hit-Term Highlighting & KWIC Context Snippets',
      'Browse by Category, Subject Hierarchy & Hyperlinks',
      'Line Item Status & Result Data Visualization',
    ],
    summaryLine:
      '**Browse Capabilities** empower users to evaluate hit files rapidly after retrieval via **Ranking**, **Zoning**, **Highlighting**, **Category/Attribute Browsing**, **Hierarchical Hyperlink Navigation**, **Line Item Status**, and **Visualizations**.',
    bullets: [
      'Once **Search Execution** generates dozens or thousands of matching items, **Browse Capabilities** eliminate the need to open every document sequentially from start to finish.',
    ],
    subSections: [
      {
        heading: '1. Ranking, Zoning & Highlighting (Core Hit Triage)',
        bullets: [
          '**Ranking** orders retrieved items from highest to lowest computed similarity score so the strongest matches occupy top slots, supported by user-selectable score thresholds.',
          '**Zoning (Logical Subsetting in Display)** displays only compact named fields (`Title`, `Author`, `Date`, `Abstract`) in the initial result list so analysts judge dozens of documents in seconds.',
          '**Highlighting** spotlights exact matched query keywords and stem hits inside excerpts (**KWIC snippets**), often letting users jump straight from match to match across long documents.',
        ],
      },
      {
        heading: '2. Category Browsing, Hyperlinks, Line Item Status & Visualization',
        bullets: [
          '**Browsing by Attribute / Category** lets users explore indexed collections systematically by **Subject**, **Author**, **Title**, **Category**, or **Publication Year** without typing complex Boolean syntax.',
          '**Hyperlink Topic Navigation** enables one-click hierarchical drill-down across linked concept trees such as `Computer Science -> Artificial Intelligence -> Machine Learning`.',
          '**Line Item Status** displays concise per-item metadata badges (read/unread status, file size, document format, access level, and score tier) right inside compact tabular hit lists.',
          '**Result Data Visualization** renders graphical summaries including **Cluster Maps**, **Bar Graphs** of term contributions, and **Concept Clouds** alongside standard ranked lists.',
        ],
      },
    ],
    table: {
      caption: 'Complete Checklist of IRS Browse Capabilities',
      headers: ['Browse Capability', 'How It Operates', 'Practical User Gain'],
      rows: [
        ['Ranking', 'Sorts results descending by relevance/similarity score', 'Puts highest-probability hits first on page one'],
        ['Zoning', 'Displays selected document zones (Title, Abstract, Year)', 'Fast relevance triage without loading full text'],
        ['Highlighting', 'Marks matched keywords inline + KWIC excerpts', 'Instant proof of why the item matched the query'],
        ['Category & Hyperlinks', 'Filter/click hierarchy (`CS -> AI -> ML`)', 'Discover unknown items via topic exploration'],
        ['Line Item Status & Viz', 'Shows read flags, format, bar graphs & cluster maps', 'Big-picture insight across large hit sets'],
      ],
      highlightRows: [0, 1, 2],
    },
    diagramId: 'irs-capabilities-tree',
    diagramCaption:
      'Unit I Taxonomy: Complete Three-Branch Breakdown of IRS Search, Browse, and Miscellaneous Capabilities',
    keyTakeaway:
      'List all **Browse Capabilities**: **Ranking**, **Zoning**, **Highlighting**, **Category/Subject/Year Browse**, **Hyperlinks (`CS -> AI -> ML`)**, **Line Item Status**, and **Data Visualization**.',
  },
  {
    id: 'u1-miscellaneous-capabilities',
    shortTitle: 'Miscellaneous Capabilities & Standards',
    unit: 'unit1',
    order: 8,
    title: 'IRS Capabilities: Miscellaneous Capabilities & Standards',
    subtopicsCovered: [
      'Vocabulary Browse (DF & Typo Diagnosis)',
      'Spell Check ("Did you mean..."), Auto-Complete & Query Expansion',
      'Relevance Feedback & Automatic Summarization',
      'Iterative Search History Logs & Canned Queries',
      'ANSI/NISO Z39.50 & WAIS Interoperability Standards',
    ],
    summaryLine:
      '**Miscellaneous Capabilities** elevate retrieval intelligence with **Vocabulary Browse**, **Spell Check**, **Auto-complete**, **Query Expansion**, **Relevance Feedback**, **Summarization**, **Iterative Search History**, **Canned Queries**, and **Z39.50 / WAIS** standards.',
    bullets: [
      'Beyond basic keyword execution and hit inspection, full-featured IRS platforms provide interactive vocabulary tools, smart query assistance, workflow automation, and federated retrieval protocols.',
    ],
    subSections: [
      {
        heading: 'Vocabulary Browse, Spell Check, Auto-Complete & Query Expansion',
        bullets: [
          '**Vocabulary Browse** opens the alphabetical dictionary index with each term **document frequency ($DF$)** so users diagnose typos—for example spotting zero hits on `"computen"` right next to `3,420` hits on `"computer"`.',
          '**Spell Check & Typo Suggestion** (`"Did you mean: information retrieval?"`) catches misspellings automatically before returning an empty result page.',
          '**Auto-Complete & Query Suggestions** predict popular completions in real time while the user types initial query characters (`"info..."` -> `"information retrieval"`).',
          '**Automatic Query Expansion** adds morphological stems and conceptual synonyms from thesauri to elevate **Recall** on short under-specified queries.',
        ],
      },
      {
        heading: 'Relevance Feedback, Summarization, Iterative History, Canned Queries & Standards',
        bullets: [
          '**Relevance Feedback** allows users to mark returned documents as **Relevant** or **Non-Relevant** so the system re-weights terms and runs an improved next query automatically.',
          '**Automatic Summarization** extracts key sentences, headings, or concise **abstracts** so users grasp core arguments without reading entire books or reports.',
          '**Iterative Search & History Logs** assign trackable set IDs (`S1`, `S2`, `S3`) to past searches with item counts so users combine sets incrementally (`S1 AND NOT S2`).',
          '**Canned (Stored) Queries** preserve vetted complex search statements permanently for one-click re-execution or automated **SDI** subscription alerts.',
          '**ANSI/NISO Z39.50** (and its internet sibling **WAIS — Wide Area Information Servers**) defines an open client-server protocol enabling one interface to query remote heterogeneous library catalogs uniformly.',
        ],
      },
    ],
    table: {
      caption: 'Miscellaneous IRS Capabilities & Protocol Standards',
      headers: ['Capability', 'Core Mechanism', 'Real Exam Example'],
      rows: [
        ['Vocabulary Browse', 'Inspect alphabetical index terms & DF counts', 'Spotting typo `"computen"` (`DF=0`) vs `"computer"` (`DF=3420`)'],
        ['Spell Check & Auto-Complete', 'Live prefix prediction & `"Did you mean..."` correction', 'Correcting `"retreival"` -> `"retrieval"` automatically'],
        ['Query Expansion & Feedback', 'Synonym addition + Relevant/Non-Relevant re-weighting', 'User ticks Doc 1 Relevant -> next query boosts its terms'],
        ['Iterative Log & Canned Query', 'Labeled history sets (`S1, S2`) & saved reusable profiles', 'Filtering `S1 AND deep_learning` or scheduled patent alerts'],
        ['Z39.50 / WAIS Protocol', 'Standard cross-institutional client-server retrieval protocol', 'Querying remote university OPACs from one search client'],
      ],
      highlightRows: [0, 2, 4],
    },
    keyTakeaway:
      'Mention the concrete **`"computen"` -> `"computer"` Vocabulary Browse**, **Spell Check / Auto-Complete**, **Relevance Feedback**, **Summarization**, **Canned Queries**, **Iterative History**, and **Z39.50 / WAIS**.',
  },
];
