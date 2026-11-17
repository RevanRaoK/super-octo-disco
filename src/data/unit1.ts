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
      'Types of Searches & 4-Stage Query Lifecycle',
      '9-Step Basic Working Cycle',
      'Characteristics, Real-Life Examples, Applications, Advantages & Limitations',
    ],
    summaryLine:
      'An **Information Retrieval System (IRS)** stores, organizes, indexes, and retrieves unstructured textual or multimedia **items** from large collections to satisfy a user information need stated as a **query**.',
    bullets: [
      {
        label: 'Information Retrieval System (IRS)',
        text: 'A computer-based software system that collects, organizes, stores, indexes, searches, and retrieves the most relevant items from a large document collection in response to a user query.',
      },
      {
        label: 'Item (Document)',
        text: 'The smallest complete informational unit processed and manipulated by the system—such as a book, research article, PDF textbook, HTML page, email, audio clip, or video program.',
      },
      {
        label: 'Query (Search Statement)',
        text: 'The formal specification combining keywords, Boolean operators, phrases, or natural language entered by the user to express an information need.',
      },
      {
        label: 'System Overhead',
        text: 'The extra storage consumed by index files (typically 50–70% of raw text size), computational search cost, and time spent reading non-relevant false hits returned alongside relevant results.',
      },
      {
        label: 'Unstructured vs Structured Handling',
        text: 'Unlike relational databases restricted to exact attribute matching in tables, an IRS handles unstructured and semi-structured data where meaning depends on vocabulary, context, and relevance scoring.',
      },
    ],
    subSections: [
      {
        heading: 'Need for Information Retrieval Systems (8 Core Reasons)',
        description:
          'As digital information grows exponentially, specialized retrieval techniques are essential to locate useful knowledge rapidly and accurately.',
        bullets: [
          {
            label: 'Huge Growth of Digital Data',
            text: 'Modern digital ecosystems generate a huge volume of data every second across books, research papers, emails, and websites that cannot be read manually.',
          },
          {
            label: 'Fast Searching',
            text: 'An IRS delivers fast searching across billions of indexed tokens in fractions of a second rather than forcing sequential document reading.',
          },
          {
            label: 'Relevant Information Extraction',
            text: 'Instead of dumping every raw file containing one matching keyword, relevant extraction identifies only items closely aligned with the user intent.',
          },
          {
            label: 'Time Saving',
            text: 'Automated lookup reduces manual searching time massively for students, clinicians, engineers, and legal analysts conducting literature reviews.',
          },
          {
            label: 'Efficient Organization of Documents',
            text: 'Zoning and metadata indexes bring structured organization to large chaotic text collections without altering original documents.',
          },
          {
            label: 'Handles Unstructured & Multimedia Data',
            text: 'Unlike relational databases restricted to rigid tables, an IRS natively handles free-form prose, PDFs, images, audio, and video.',
          },
          {
            label: 'Better Decision-Making Support',
            text: 'Timely retrieval of past reports, patents, and clinical studies provides accurate information for executive and research decisions.',
          },
          {
            label: 'Eliminates Manual Catalog Scanning',
            text: 'Automated token processing and ranking remove tedious manual scanning and dramatically improve user satisfaction.',
          },
        ],
      },
      {
        heading: 'Types of Searches & User Query Lifecycle',
        subGroups: [
          {
            sideHeading: '1. Types of Searches in an IRS',
            bullets: [
              {
                label: 'Web Search',
                text: 'Discovers online web pages across the World Wide Web using search engines such as Google or Bing.',
              },
              {
                label: 'Desktop Search',
                text: 'Locates local emails, PDFs, presentations, and files stored directly inside a user personal computer.',
              },
              {
                label: 'Library Catalog Search',
                text: 'Retrieves academic books, theses, journals, and physical holdings inside institutional or digital libraries.',
              },
              {
                label: 'Known-Item Search',
                text: 'Locates a specific document whose identifying title, author, or ID is already known to the user.',
              },
              {
                label: 'Subject / Concept Search',
                text: 'Explores an unfamiliar domain using topic keywords to uncover all documents covering that subject.',
              },
              {
                label: 'Fact / Reference Lookup',
                text: 'Extracts a targeted entity or numerical fact directly rather than returning full multi-page manuals.',
              },
            ],
          },
          {
            sideHeading: '2. User Query Lifecycle (4 Sequential Stages)',
            bullets: [
              {
                label: 'Stage 1 — Query Generation',
                text: 'User translates an internal mental information need into search keywords.',
                example: 'Typing "Sachin Tendulkar" or "Best Restaurants".',
              },
              {
                label: 'Stage 2 — Search Composition',
                text: 'User refines the query by adding Boolean operators, phrases, or zone constraints.',
              },
              {
                label: 'Stage 3 — Search Execution',
                text: 'The IRS matches processed query tokens against searchable indexes automatically.',
              },
              {
                label: 'Stage 4 — Scanning Results',
                text: 'User inspects ranked titles, abstracts, and snippets on screen to select items to read.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Basic Working of an IRS (9 Sequential Steps)',
        bullets: [
          {
            label: 'Step 1 — Collection of Documents',
            text: 'Ingests heterogeneous source materials including books, web pages, articles, and reports into the IRS repository.',
          },
          {
            label: 'Step 2 — Document Processing',
            text: 'Cleans raw text by normalizing encodings, splitting zones, removing punctuation/stop words, and stemming inflectional suffixes.',
          },
          {
            label: 'Step 3 — Index Creation',
            text: 'Maps every extracted keyword or concept stem to the document IDs and word positions where it occurs.',
          },
          {
            label: 'Step 4 — Database Storage',
            text: 'Stores normalized full documents in the archival document database alongside searchable indexes.',
          },
          {
            label: 'Step 5 — User Enters Query',
            text: 'Captures the user search request typed into the search bar.',
            example: '"information retrieval notes"',
          },
          {
            label: 'Step 6 — Query Processing',
            text: 'Applies identical cleaning, stop-word removal, stemming, and query expansion to the user search string.',
          },
          {
            label: 'Step 7 — Search & Matching',
            text: 'Compares processed query tokens against stored index entries to locate candidate matching documents.',
          },
          {
            label: 'Step 8 — Ranking of Results',
            text: 'Computes similarity or probability scores for candidate hits and sorts the most relevant documents to the top.',
          },
          {
            label: 'Step 9 — Relevant Documents Retrieved',
            text: 'Formats titles, abstracts, highlighted snippets, and links for user inspection on the results screen.',
          },
        ],
        diagramId: 'irs-working-steps',
        diagramCaption:
          'Complete 9-Step Information Retrieval System Working Cycle (Ingestion to Ranked Retrieval)',
      },
      {
        heading: 'Characteristics, Real-Life Examples, Applications, Advantages & Limitations',
        subGroups: [
          {
            sideHeading: '1. Characteristics of Information Retrieval Systems',
            bullets: [
              {
                label: 'Fast Relevant Retrieval',
                text: 'Retrieves relevant information quickly with millisecond response speed.',
              },
              {
                label: 'Efficient Indexing',
                text: 'Supports automated index structures for rapid token lookup.',
              },
              {
                label: 'Large-Scale Data Support',
                text: 'Handles massive billion-document collections and scales cleanly as databases grow.',
              },
              {
                label: 'Keyword & Natural Language Search',
                text: 'Supports structured Boolean expressions as well as conversational queries.',
              },
              {
                label: 'Ranked Search Results',
                text: 'Orders matching documents by computed relevance score rather than unsorted sets.',
              },
              {
                label: 'Multimedia Retrieval',
                text: 'Retrieves text, images, audio, video, and compound multimedia files.',
              },
              {
                label: 'Maintainability & Usability',
                text: 'Easy to update and maintain while offering a clean user-friendly interface.',
              },
            ],
          },
          {
            sideHeading: '2. Real-Life Examples of Information Retrieval',
            bullets: [
              'Google Search Engine, Bing Search, and Yahoo Search',
              'YouTube Video Search & Spotify Song Search',
              'Gmail Search & Desktop File Search',
              'Amazon Product Search & Netflix Recommendations',
              'Wikipedia Topic Lookup & Online Research Databases',
              'Hospital Information Systems (EHR) & University Library Catalogues',
            ],
          },
          {
            sideHeading: '3. Applications of Information Retrieval Systems',
            description:
              'Information Retrieval Systems power domain-specific search across seven major sectors:',
            subGroups: [
              {
                sideHeading: 'Education',
                bullets: ['Digital libraries', 'Online learning platforms', 'Research databases'],
              },
              {
                sideHeading: 'Business',
                bullets: [
                  'Customer relationship management (CRM)',
                  'Enterprise document management',
                  'Knowledge management systems',
                ],
              },
              {
                sideHeading: 'Healthcare',
                bullets: [
                  'Medical record retrieval (EHR)',
                  'Clinical decision support',
                  'Medical literature search',
                ],
              },
              {
                sideHeading: 'Banking',
                bullets: [
                  'Customer information retrieval',
                  'Fraud detection',
                  'Document management',
                ],
              },
              {
                sideHeading: 'E-Commerce',
                bullets: [
                  'Product searching',
                  'Recommendation systems',
                  'Customer review retrieval',
                ],
              },
              {
                sideHeading: 'Government',
                bullets: [
                  'Census databases',
                  'Public record management',
                  'E-governance portals',
                ],
              },
              {
                sideHeading: 'Social Media',
                bullets: ['Content searching', 'Hashtag retrieval', 'User recommendation'],
              },
            ],
          },
          {
            sideHeading: '4. Advantages of IRS',
            bullets: [
              {
                label: 'Saves Time & Quick Access',
                text: 'Delivers fast access to needed items while drastically reducing manual effort.',
              },
              {
                label: 'Relevance & Organization',
                text: 'Retrieves only relevant documents and organizes large archives systematically.',
              },
              {
                label: 'Large Database & Multimedia Support',
                text: 'Scales across huge repositories and handles text, audio, image, and video items.',
              },
              {
                label: 'Productivity & Decision Making',
                text: 'Improves user satisfaction, research productivity, and informed decision making.',
              },
            ],
          },
          {
            sideHeading: '5. Limitations of IRS',
            bullets: [
              {
                label: 'Irrelevant Results (False Hits)',
                text: 'May still retrieve non-relevant documents alongside useful hits.',
              },
              {
                label: 'Query Dependence',
                text: 'Retrieval quality depends heavily on how well the user frames the search query.',
              },
              {
                label: 'Large Storage Overhead',
                text: 'Inverted index structures require substantial extra disk space.',
              },
              {
                label: 'Complex Indexing & Maintenance',
                text: 'Requires sophisticated indexing algorithms and continuous updates as databases grow.',
              },
              {
                label: 'Ambiguity & Synonyms',
                text: 'Polysemous words (`bank`, `apple`) and synonyms can lower retrieval accuracy.',
              },
            ],
          },
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
      'Include the **8 reasons why IRS is needed**, the **9 working steps**, **Web/Desktop/Library/Known-Item/Subject searches**, **7 Application sectors**, and **Advantages vs Limitations** for a complete Unit 1 answer.',
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
      {
        label: 'Effectiveness vs Efficiency Balance',
        text: 'Every retrieval architecture balances effectiveness (finding truly relevant items without noise) against efficiency (low response latency, compact index storage, and minimal user effort).',
      },
      {
        label: 'Total Document Space (Figure 1.1)',
        text: 'Evaluating system success divides the database into four quadrants: Retrieved Relevant (true hits), Retrieved Non-Relevant (false-hit overhead), Not Retrieved Relevant (missed items), and Not Retrieved Non-Relevant (correctly excluded).',
      },
    ],
    subSections: [
      {
        heading: 'Objectives of IRS (All 12 Specific Objectives)',
        description:
          'The main objective of an Information Retrieval System is to provide the right information to the right user at the right time by retrieving the most relevant documents efficiently.',
        subGroups: [
          {
            sideHeading: '1. Fast Information Retrieval',
            description:
              'Retrieve the required information in the shortest possible time—even across millions of stored records.',
            example: 'Google displays search results within seconds.',
          },
          {
            sideHeading: '2. Retrieve Relevant Information',
            description:
              'Provide only the documents that match the user information need rather than accidental keyword matches.',
            example:
              'Searching "Computer Networks" should return networking-related documents instead of unrelated topics.',
          },
          {
            sideHeading: '3. Improve Search Accuracy',
            description:
              'Increase the accuracy of retrieved results through precise indexing and weighting while reducing irrelevant documents.',
          },
          {
            sideHeading: '4. Reduce Search Time',
            description:
              'Help users locate information quickly without manually searching thousands of documents.',
          },
          {
            sideHeading: '5. Efficient Storage of Documents',
            description:
              'Store and organize large collections of documents systematically using compact index structures for easy retrieval.',
          },
          {
            sideHeading: '6. Support Large Databases',
            description:
              'Efficiently manage millions of documents without degrading search performance.',
          },
          {
            sideHeading: '7. User Satisfaction',
            description:
              "Provide accurate, useful, and meaningful results with readable snippets to satisfy users' information needs.",
          },
          {
            sideHeading: '8. Ranking of Results',
            description:
              'Display the most relevant documents first rather than returning an unsorted hit set.',
            example: 'Search engines rank the best results at the top of the page.',
          },
          {
            sideHeading: '9. Multimedia Information Retrieval',
            description: 'Retrieve different types of information, including:',
            bullets: [
              'Text',
              'Images',
              'Audio',
              'Video',
              'PDF files',
              'Multimedia documents',
            ],
            example: 'Google Images for images and YouTube for videos.',
          },
          {
            sideHeading: '10. Minimize Irrelevant Information (Overhead)',
            description:
              'Reduce the retrieval of unrelated or unnecessary documents so users waste less time evaluating false hits.',
          },
          {
            sideHeading: '11. Easy Access to Information',
            description:
              'Allow users to retrieve information anytime and from anywhere through digital systems.',
          },
          {
            sideHeading: '12. Support Decision Making',
            description:
              'Help users make better decisions by providing relevant and reliable information.',
          },
        ],
      },
      {
        heading: 'Minimizing Overhead & Quantitative Trade-offs (Figure 1.1)',
        bullets: [
          {
            label: 'Retrieval Overhead (Kowalski)',
            text: 'Time spent in all steps leading up to reading needed data: query generation, search composition, search execution, scanning results, and reading non-relevant false hits.',
          },
          {
            label: 'Tightening Queries (`AND`)',
            text: 'Adding specific `AND` terms reduces false hits and raises Precision ($P$), but typically drops Recall ($R$) when valid relevant documents lack one exact keyword.',
          },
          {
            label: 'Relaxing Queries (`OR` / Stemming)',
            text: 'Adding `OR` synonyms or stemming increases Recall ($R$), yet pulls more non-relevant documents into the hit set (Precision–Recall Inverse Trade-off).',
          },
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
        subGroups: [
          {
            sideHeading: '1. Vocabulary Domains & Linguistic Ambiguities',
            description:
              'Users and item authors come from distinct Vocabulary Domains containing linguistic variation and ambiguities.',
            example:
              'The word `"field"` can mean an agricultural meadow, a physics force field, or a database column.',
          },
          {
            sideHeading: '2. Interactive Query Generation Support',
            description:
              'Because users write different vocabulary from document authors, an IRS assists query generation through:',
            bullets: [
              {
                label: 'Vocabulary Browse',
                text: 'Displays alphabetical index words and counts to diagnose spelling and coverage.',
              },
              {
                label: 'Thesauri',
                text: 'Expands query terms automatically with related synonyms and concept hierarchies.',
              },
              {
                label: 'Relevance Feedback',
                text: 'Uses user judgments on initial hits to refine weights for a better follow-up query.',
              },
            ],
          },
          {
            sideHeading: '3. Presentation of Search Results',
            description:
              'To help users judge relevance quickly, the IRS formats results using two key mechanisms:',
            bullets: [
              {
                label: '(A) Ranking in Order of Potential Relevance',
                text: 'Orders hit items descending by computed similarity or probability score.',
              },
              {
                label: '(B) Item Clustering & Link Analysis',
                text: 'Groups related hits visually and reveals conceptual links across retrieved items.',
              },
            ],
          },
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
      {
        label: 'Unified Entry Point',
        text: 'Whenever an item arrives at the IRS, Item Normalization transforms heterogeneous external formats into standardized internal tokens and structural zones.',
      },
      {
        label: 'Three Parallel Operational Paths (Figure 1.4)',
        text: 'From normalization, incoming items route simultaneously to real-time push alerts via SDI (Mail), permanent archival storage via Document File Creation, and automated metadata extraction via Automatic File Build (AFB).',
      },
    ],
    subSections: [
      {
        heading: '1. Item Normalization (7 Sequential Stages)',
        description:
          'Item Normalization transforms heterogeneous external document formats and encodings into standardized searchable processing tokens and logical zones.',
        subGroups: [
          {
            sideHeading: 'Step 1 — Standardize Input Formats',
            description:
              'Translates diverse incoming character sets and multimedia streams into one canonical internal format acceptable to the system:',
            bullets: [
              {
                label: 'Foreign Language Text',
                text: 'Converted into `Unicode` (`ISO-Latin`) so English, French, and Spanish display and search uniformly.',
              },
              {
                label: 'Video Standards',
                text: '`MPEG-1`, `MPEG-2`, `AVI`, or `Real Media`.',
              },
              {
                label: 'Audio Standards',
                text: '`WAV` or `Real Audio`.',
              },
              {
                label: 'Image Standards',
                text: '`JPEG` or `BMP`.',
              },
            ],
          },
          {
            sideHeading: 'Step 2 — Logical Subsetting (Zoning)',
            description:
              'Divides each item into hierarchical structural zones visible to users to boost precision and optimize hit display:',
            bullets: ['`Title`', '`Author`', '`Abstract`', '`Main Text`', '`Conclusion`', '`References`'],
            example:
              'Searching `"Einstein"` only in `Main Text` avoids false hits where `"Einstein"` appears merely as a citation in `References`.',
          },
          {
            sideHeading: 'Step 3 — Identify Processing Tokens (Three Symbol Classes)',
            description:
              'Systems identify searchable words (`contiguous sets of word symbols bounded by inter-word symbols`) using three symbol classes:',
            bullets: [
              {
                label: 'Valid Word Symbols',
                text: 'Searchable alphabetic characters, numbers, and allowed intra-word symbols.',
              },
              {
                label: 'Inter-Word Symbols',
                text: 'Non-searchable delimiter characters such as whitespace blanks, periods, and semicolons.',
              },
              {
                label: 'Special Processing Symbols',
                text: 'Context-sensitive punctuation handled per language/application, such as the hyphen (`-`) or apostrophe.',
              },
            ],
          },
          {
            sideHeading: 'Step 4 — Stop Algorithm & Zipf Law',
            description:
              'Removes low-value high-frequency tokens to save memory, disk storage, and processing time:',
            bullets: [
              {
                label: 'High-Frequency Stop Words',
                text: 'Eliminates common words appearing in nearly every document (`the`, `is`, `are`, `very`), cutting index size by 30–50%.',
              },
              {
                label: 'Numeric & Mixed Token Rules',
                text: 'Ignores numbers `> 999999` (preserving dates) and mixed alphanumeric strings (`6A1`).',
              },
              {
                label: 'Zipf Cutoff Principle',
                text: 'Follows Zipf Law ($f \\cdot r = C$), targeting the lowest-rank highest-frequency terms.',
              },
            ],
          },
          {
            sideHeading: 'Step 5 — Characterize Tokens',
            description:
              'Tags surviving processing tokens with specialized lexical and grammatical attributes:',
            bullets: [
              {
                label: 'Part-of-Speech (POS) & WSD',
                text: 'Determines grammatical role and performs Word Sense Disambiguation.',
              },
              {
                label: 'Entities & Format Tags',
                text: 'Identifies uppercase proper names, acronyms, organizations, numbers, and dates.',
              },
            ],
          },
          {
            sideHeading: 'Step 6 — Stemming Algorithm',
            description:
              'Strips morphological suffixes to conflate word variants onto one canonical root stem:',
            bullets: [
              {
                label: 'Storage Savings',
                text: 'Saves **32%** on small databases, **20%** on 1.6 MB databases, and **13.5%** on 50 MB databases.',
              },
              {
                label: 'Retrieval Trade-off',
                text: 'Improves system efficiency and increases Recall while slightly declining Precision.',
              },
            ],
            example: '`Computer, Compute, Computers, Computing -> Comput`',
          },
          {
            sideHeading: 'Step 7 — Create Searchable Data Structure',
            description:
              'Persists final stems, zone offsets, and term weights into internal searchable structures (`Inverted File`, `PAT Tree`, or `Signature File`).',
          },
          {
            sideHeading: 'Worked Normalization Example & Advantages',
            bullets: [
              {
                label: 'Original Document',
                text: '`"Information Retrieval Systems are very useful."`',
              },
              {
                label: 'After Normalization',
                text: '`[information, retrieval, system, useful]` (lowercased, punctuation removed, stop words `"are"` and `"very"` dropped, and stemmed).',
              },
              {
                label: 'Four Advantages',
                text: 'Delivers faster indexing, better searching, reduced storage, and improved accuracy.',
              },
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
        description:
          'SDI is a personalized push retrieval service that dynamically compares newly arriving items against standing user profiles and delivers matches automatically.',
        subGroups: [
          {
            sideHeading: 'Three Core Components of SDI',
            bullets: [
              {
                label: '1. Search Process',
                text: 'Evaluates every newly ingested item against all stored user profiles in real time.',
              },
              {
                label: '2. User Profile (Statement of Interest)',
                text: 'Stores standing broad search statements (`broader and richer in terms than ad-hoc queries`) plus recipient routing destinations.',
              },
              {
                label: '3. User Mail File',
                text: 'Receives and stores matched documents automatically for user reading (`historically focused on textual documents, not multimedia`).',
              },
            ],
          },
          {
            sideHeading: 'Two-Step Working & Example',
            bullets: [
              {
                label: 'Step 1 — Profile Registration',
                text: 'User registers standing keywords or topics of interest.',
              },
              {
                label: 'Step 2 — Automatic Match & Delivery',
                text: 'Whenever a new document matches the profile, the IRS dispatches it straight to the user mail file.',
              },
            ],
            example:
              'An AI/ML researcher receiving automatic Google Scholar Alerts whenever new `"Artificial Intelligence"` or `"Machine Learning"` papers are added.',
          },
        ],
      },
      {
        heading: '3. Archival Document Database Search',
        description:
          'Provides interactive retrospective searching across all items permanently stored in the document repository.',
        subGroups: [
          {
            sideHeading: 'Three Components & Key Storage Properties',
            bullets: [
              {
                label: '1. Search Process',
                text: 'Executes interactive searches against retrospective index pointers and archival records.',
              },
              {
                label: '2. Ad-Hoc Queries',
                text: 'Short, focused one-time queries created by users for an immediate need (not saved permanently like SDI profiles).',
              },
              {
                label: '3. Immutable Document Database',
                text: 'Write-once / non-editable repository partitioned by time (`Time Partitions`) so historical retrieval stays fast and preserves original consistency.',
              },
            ],
          },
        ],
      },
      {
        heading: '4. Index Database Search & Automatic File Build (AFB)',
        description:
          'Supports creating, maintaining, and searching structured index records referencing items in the Document Database.',
        subGroups: [
          {
            sideHeading: 'Filing / Indexing & Combined File Search',
            bullets: [
              {
                label: 'Filing (Index Creation)',
                text: 'Stores structured item references and descriptive text (`like a physical Library Card Catalog`) so indirect lookup avoids scanning raw documents.',
              },
              {
                label: 'Combined File Search',
                text: 'Searches index records first and then searches the referenced documents that satisfied the index portion of the query.',
              },
            ],
          },
          {
            sideHeading: 'Two Classes of Index Files',
            bullets: [
              {
                label: '1. Public Index Files',
                text: 'Small number of shared files maintained by professional library personnel indexing every item in the Document Database (`broad access lists`).',
              },
              {
                label: '2. Private Index Files',
                text: 'Large number of user-specific files (`very restricted access lists`) referencing only small subsets of items; both public and private files are often implemented via an RDBMS.',
              },
            ],
          },
          {
            sideHeading: 'Automatic File Build (AFB) Process',
            bullets: [
              {
                label: 'AFB Profiles',
                text: 'Define rules determining which arriving documents undergo automated metadata and index extraction.',
              },
              {
                label: 'Extracted Fields',
                text: 'Automatically extracts `Authors`, `Title`, `Date of Publication`, `Source`, and `References`.',
              },
              {
                label: 'Candidate Index Records',
                text: 'Outputs candidate records for optional human analyst review and editing before updating index files permanently.',
              },
            ],
          },
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
      'Practical Relationship & Iterative Search',
      'Commercial Integrations (INQUIRE, ORACLE CONVECTIS, INFORMIX RetrievalWare)',
    ],
    summaryLine:
      'While a **DBMS** performs exact deterministic **SQL** retrieval over structured relational tables, an **IRS** performs probabilistic ranked search over **unstructured text**, yet commercial platforms integrate both.',
    bullets: [
      {
        label: 'Database Management System (DBMS)',
        text: 'Software optimized to store, organize, update, and retrieve structured tabular records (such as `Roll_No, Name, Marks`) under rigid schemas and keys.',
      },
      {
        label: 'Information Retrieval System (IRS)',
        text: 'Software designed to store large collections of unstructured prose, PDFs, and multimedia documents and return ranked relevance lists matching imperfect keyword queries.',
      },
      {
        label: 'Synergy of Integration',
        text: 'An IRS can use a DBMS to store structured document metadata and indexes, while modern enterprise engines integrate both technologies into one unified retrieval workflow.',
      },
    ],
    subSections: [
      {
        heading: 'Similarities Between IRS and DBMS',
        bullets: [
          {
            label: '1. Large-Scale Storage & Retrieval',
            text: 'Both IRS and DBMS store and retrieve large volumes of organizational data.',
          },
          {
            label: '2. Interactive User Search',
            text: 'Both allow users to submit queries to locate needed information.',
          },
          {
            label: '3. Systematic Organization',
            text: 'Both organize underlying items systematically for reliable access.',
          },
          {
            label: '4. Indexing for Speed',
            text: 'Both rely heavily on indexing structures to accelerate search performance.',
          },
        ],
      },
      {
        heading: 'Practical Relationship & Iterative Search',
        bullets: [
          {
            label: 'Exact Tables vs Ambiguous Prose',
            text: 'In structured tables, attribute meanings (`employee name`, `salary`) are unambiguous and SQL returns exact tabulated reports; in text items, two authors write completely different abstracts using diverse vocabulary.',
          },
          {
            label: 'Iterative Search Refinement',
            text: 'Because a single IRS query rarely recovers every relevant document on the first attempt, users rely on iterative search, fuzziness, and thesauri, whereas DBMS queries fail if an exact predicate misses by one character.',
          },
        ],
      },
      {
        heading: 'Commercial DBMS + IRS Integrations',
        subGroups: [
          {
            sideHeading: '1. INQUIRE DBMS',
            description:
              'One of the earliest commercial database systems to combine structured relational database management and free-text information retrieval inside a single unified view.',
          },
          {
            sideHeading: '2. ORACLE DBMS with CONVECTIS',
            description:
              'Integrates an embedded Information Retrieval capability (`CONVECTIS`) that uses a comprehensive thesaurus to identify related terms and generate thematic concepts for each item.',
          },
          {
            sideHeading: '3. INFORMIX DBMS with RetrievalWare',
            description:
              'Links INFORMIX relational data management with Excalibur `RetrievalWare`, adding fuzzy, pattern-based, and semantic concept indexing directly inside database applications.',
          },
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
      'Digital Library Concept, Role of IRS, Examples & Software (KOHA, BIBLIOTEQ, PMP, DSpace, Greenstone)',
      'Data Warehouse Architecture (Inmon Properties, ETL, OLAP)',
      'Data Warehouse Platforms (Redshift, Azure, BigQuery, Snowflake)',
      '3-Way Comparison: DBMS vs Digital Library vs Data Warehouse',
    ],
    summaryLine:
      '**Digital Libraries** curate, tag with metadata, and preserve multimedia scholarly collections for global IR search, whereas **Data Warehouses** integrate historical enterprise records via **ETL** for **OLAP** analytical decision support.',
    bullets: [
      {
        label: 'Common Primary Goal',
        text: 'Digital Libraries, Data Warehouses, and IRS platforms are all information repositories whose overarching objective is to satisfy user information needs.',
      },
    ],
    subSections: [
      {
        heading: '1. Relationship Between IRS and Digital Libraries (DL)',
        subGroups: [
          {
            sideHeading: 'Definition & Curated Standards',
            description:
              'A Digital Library is a networked collection of digital resources (e-books, journals, research papers, images, audio, and video) governed by cataloging metadata (`Dublin Core`, `MARC`), intellectual rights, curated quality, and long-term preservation.',
          },
          {
            sideHeading: 'Role of IRS in a Digital Library',
            description:
              'An Information Retrieval System serves as the search engine inside a Digital Library, enabling users to:',
            bullets: [
              'Search documents across full collections',
              'Retrieve relevant books and papers',
              'Filter results by metadata facets',
              'Rank search results by relevance',
              'Browse curated subject collections',
            ],
            example:
              'A student searches `"Artificial Intelligence"` in a university digital library; the IRS searches indexed documents, ranks matching books and papers, and displays results.',
          },
          {
            sideHeading: 'Real-World Digital Library Applications',
            bullets: [
              'National Digital Library of India (NDLI)',
              'IEEE Xplore',
              'ACM Digital Library',
              'University Digital Libraries',
            ],
          },
          {
            sideHeading: 'Digital Library Software Platforms',
            bullets: [
              {
                label: 'KOHA',
                text: 'Open-source integrated library management system.',
              },
              {
                label: 'BIBLIOTEQ',
                text: 'Cataloging and library inventory management suite.',
              },
              {
                label: 'PMP',
                text: 'Personal Media Platform for digital media collections.',
              },
              {
                label: 'DSpace, Greenstone & Fedora Commons',
                text: 'Institutional digital repository platforms for research archives.',
              },
            ],
          },
        ],
      },
      {
        heading: '2. Relationship Between IRS and Data Warehouses (DW)',
        subGroups: [
          {
            sideHeading: 'Definition & Four Inmon Properties',
            description:
              'A Data Warehouse is a centralized analytical repository consolidating historical data from multiple operational sources for business intelligence and executive decision-making:',
            bullets: [
              {
                label: 'Subject-Oriented',
                text: 'Organized around major enterprise subjects (sales, customers, products) rather than daily transactions.',
              },
              {
                label: 'Integrated',
                text: 'Consolidates heterogeneous schemas and naming conventions from disparate source databases.',
              },
              {
                label: 'Time-Variant',
                text: 'Retains multi-year historical snapshots indexed by time dimensions.',
              },
              {
                label: 'Non-Volatile',
                text: 'Read-only analytical data loaded via batch updates rather than frequent live row edits.',
              },
            ],
          },
          {
            sideHeading: 'ETL Pipeline, OLAP & Data Mining',
            bullets: [
              {
                label: 'ETL (Extract, Transform, Load)',
                text: 'Cleans, transforms, and loads operational data into the centralized warehouse.',
              },
              {
                label: 'OLAP Analytical Operations',
                text: 'Supports multidimensional `Roll-up`, `Drill-down`, `Slice`, and `Dice` queries alongside Data Mining (KDD).',
              },
            ],
          },
          {
            sideHeading: 'Role of IRS in a Data Warehouse',
            description:
              'An IRS complements a Data Warehouse by indexing descriptive text reports and enabling natural/keyword retrieval over historical analytical summaries.',
            example:
              'A company stores ten years of sales records; a manager searches `"Sales of laptops in Hyderabad during 2024"` and retrieves the required analytical insights.',
          },
          {
            sideHeading: 'Commercial Data Warehouse Software Platforms',
            bullets: [
              'Amazon Redshift',
              'Microsoft Azure Synapse',
              'Google BigQuery',
              'Snowflake (and Teradata)',
            ],
          },
        ],
      },
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
      'Boolean Logic, M-of-N & Worked Precedence Examples (Fig 2.1)',
      'Proximity Searches & Contiguous Word Phrases (CWP)',
      'Fuzzy Searches & Term Masking (Fig 2.3 Wildcards)',
      'Numeric/Date Ranges, Concept/Thesaurus Expansion (Fig 2.4–2.5) & NLQ',
    ],
    summaryLine:
      '**Search Capabilities** provide the complete query grammar of an IRS—spanning **Query Term Sets**, **Boolean logic**, **proximity**, **contiguous word phrases**, **fuzzy matching**, **term masking**, **numeric/date ranges**, **concept/thesaurus expansion**, and **natural language queries**.',
    bullets: [
      {
        label: 'Objective of Search Capabilities',
        text: 'Maps a user specified information need to items in the database via Boolean logic, natural language composition, term weights, distance bounds, wildcards, and concept expansion.',
      },
      {
        label: 'Zone Scoping',
        text: 'Search statements may inspect the complete document or restrict matching to a named structural zone (`Title`, `Author`, `Abstract`).',
      },
    ],
    subSections: [
      {
        heading: '1. Query Term Sets & Weighted Query Terms',
        subGroups: [
          {
            sideHeading: 'Query Term Sets',
            description:
              'Specifies a set of keywords where the IRS retrieves items containing at least one query term and ranks results by count of distinct terms matched:',
            bullets: [
              'Documents containing all query terms appear first.',
              'Documents missing one query term appear second.',
              'Documents containing only one query term appear last.',
            ],
          },
          {
            sideHeading: 'Weighted Query Terms',
            description:
              'Allows users to attach numerical importance weights between `0.0` (`lowest`) and `1.0` (`highest`) to individual terms in Boolean or natural language queries (e.g., `RetrievalWare`).',
            example: '`0.8 computer OR 0.2 mainframe` ensures documents about computers outrank mainframe matches.',
          },
        ],
      },
      {
        heading: '2. Boolean Logic, M-of-N & Operator Precedence',
        subGroups: [
          {
            sideHeading: 'Boolean Operators & Set Semantics',
            bullets: [
              {
                label: 'AND (Intersection)',
                text: 'Returns items containing both connected terms.',
              },
              {
                label: 'OR (Union)',
                text: 'Returns items containing either or both connected terms.',
              },
              {
                label: 'NOT / AND NOT (Difference)',
                text: 'Excludes items containing the negated term (`XOR` appears rarely as users find it unintuitive).',
              },
              {
                label: 'M of N Logic',
                text: 'Retrieves any item containing at least $M$ of $N$ listed terms—for example "any 2 of AA, BB, CC" expands to `(AA AND BB) OR (AA AND CC) OR (BB AND CC)`.',
              },
            ],
          },
          {
            sideHeading: 'Standard Operator Precedence Rule',
            description:
              'Operators evaluate in order: **`NOT`** (highest) $\\to$ **`AND`** (middle) $\\to$ **`OR`** (lowest), processed left-to-right among equal precedence unless overridden by parentheses.',
          },
          {
            sideHeading: 'Three Worked Precedence Examples (COMPUTER / SERVER / MAINFRAME)',
            subGroups: [
              {
                sideHeading: 'Example 1: `COMPUTER OR SERVER AND NOT MAINFRAME`',
                description:
                  'Higher-precedence `AND NOT` binds tighter than `OR`, equivalent to `COMPUTER OR (SERVER AND NOT MAINFRAME)`.',
                bullets: [
                  'Selects all documents discussing computers, OR documents discussing servers that do not mention mainframes.',
                ],
              },
              {
                sideHeading: 'Example 2: `(COMPUTER OR SERVER) AND NOT MAINFRAME`',
                description: 'Parentheses force the `OR` union before exclusion.',
                bullets: [
                  'Selects documents discussing computers or servers while rejecting every document mentioning mainframes.',
                ],
              },
              {
                sideHeading: 'Example 3: `COMPUTER AND NOT (SERVER OR MAINFRAME)`',
                description: 'Parentheses expand exclusion across both hardware terms.',
                bullets: [
                  'Selects documents discussing computers that mention neither servers nor mainframes.',
                ],
              },
            ],
          },
        ],
      },
      {
        heading: '3. Proximity Searches & Contiguous Word Phrases (CWP)',
        subGroups: [
          {
            sideHeading: 'Proximity Operators (`WITHIN`, `NEAR`, `ADJ`)',
            description:
              'Restricts the maximum allowed distance between two terms (`TERM1 within "m" "units" of TERM2`) in Characters, Words, Sentences, or Paragraphs to boost Precision.',
            bullets: [
              {
                label: 'NEAR/k (Unordered Window)',
                text: 'Matches terms appearing within $k$ words in either order.',
              },
              {
                label: 'ADJ (Adjacent — WAIS)',
                text: 'Special forward-only case with distance `1`; setting distance `0` means within the same semantic unit.',
              },
            ],
          },
          {
            sideHeading: 'Contiguous Word Phrases (CWP)',
            description:
              'An N-ary operator treating two or more ordered adjacent words inside quotes as one exact semantic unit (`Literal Strings` in WAIS, `Exact Phrases` in RetrievalWare).',
            example:
              '`"manufacturing" AND "United States of America"` (equivalent in WAIS to `"United" ADJ "States" ADJ "of" ADJ "America"`).',
          },
        ],
      },
      {
        heading: '4. Fuzzy Searches & Term Masking (Wildcards — Fig 2.3)',
        subGroups: [
          {
            sideHeading: 'Fuzzy Searches (Edit-Distance Spelling Tolerance)',
            description:
              'Locates words spelled similarly to the entered query term to handle typos and OCR errors—increasing Recall at the expense of slightly lower Precision.',
            example:
              'Fuzzy search on `"computer"` also matches `"compiter"`, `"conputer"`, `"computter"`, and `"compute"`.',
          },
          {
            sideHeading: 'Term Masking (Fixed & Variable-Length "Don\'t-Care" Wildcards)',
            description:
              'Expands query terms by masking portions of a token—especially valuable in systems without strong stemming:',
            subGroups: [
              {
                sideHeading: 'Fixed-Length Masking (`?` / `$`)',
                description:
                  'Masks exactly one single character position (or absence of one character) inside a word (e.g., `wom?n`, `multi$national`).',
              },
              {
                sideHeading: 'Variable-Length Masking (`*` — Figure 2.3)',
                description: 'Matches zero or more characters in three positions:',
                bullets: [
                  {
                    label: 'Prefix Search (`COMPUTER*`)',
                    text: 'Trailing wildcard matches words starting with `"computer"` (`computers`, `computerized`).',
                  },
                  {
                    label: 'Suffix Search (`*COMPUTER`)',
                    text: 'Leading wildcard matches words ending in `"computer"` (`microcomputer`, `supercomputer`).',
                  },
                  {
                    label: 'Embedded / Infix Search (`*COMPUTER*`)',
                    text: 'Both leading and trailing wildcards match `"computer"` anywhere inside a token (seldom used due to cost).',
                  },
                ],
              },
              {
                sideHeading: 'Critical Numeric Range Trap',
                description:
                  'Wildcard masking applies only to text strings—searching `125*` does NOT match numbers `> 125`; it matches only strings literally starting with `"125"` (`1250`, `1259`).',
              },
            ],
          },
        ],
      },
      {
        heading: '5. Numeric/Date Ranges, Concept/Thesaurus Expansion & Natural Language Queries',
        subGroups: [
          {
            sideHeading: 'Numeric and Date Range Queries',
            description:
              'Evaluates mathematical comparisons (`>=`, `<=`, `BETWEEN 2020 AND 2026`) on zoned date, price, or numerical fields where wildcard masking fails.',
          },
          {
            sideHeading: 'Concept & Thesaurus Expansion (Figures 2.4 & 2.5)',
            bullets: [
              {
                label: 'Semantic vs Statistical Thesaurus',
                text: 'A semantic thesaurus provides generic 1–2 level synonym expansions (`"computer"` -> `PC, mainframe, CPU`), whereas a statistical thesaurus links terms co-occurring frequently inside the specific local database.',
              },
              {
                label: 'Concept Trees & Semantic Networks',
                text: 'Concept Classes organize word senses into hierarchical trees (`TOPIC` system, Fig 2.5) or semantic stem networks (`RetrievalWare`).',
              },
            ],
          },
          {
            sideHeading: 'Natural Language Queries (NLQ)',
            description:
              'Accepts conversational queries (`TOPIC`, `RetrievalWare`, `INQUERY`) that the IRS stops, stems, weights, and ranks statistically—improving Recall while struggling with explicit negation (`NOT`) precision due to linguistic variation and ambiguity.',
          },
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
      'Ranking & Collaborative Filtering Thresholds',
      'Zoning (Logical Field Filtering & Locality/Passage Retrieval)',
      'Highlighting (Jump-to-Match & DCARS Weight Color Intensity)',
      'Browse by Subject, Author, Title, Category & Publication Year',
      'Hierarchical Hyperlinks, Line Item Status & Data Visualization',
    ],
    summaryLine:
      '**Browse Capabilities** let users explore collections and judge hit files rapidly after search via **Ranking**, **Zoning**, **Highlighting**, **Category/Attribute Browsing**, **Hyperlinks**, **Line Item Status**, and **Visualizations**.',
    bullets: [
      {
        label: 'Role of Browse Capabilities',
        text: 'Allows users to explore information without typing an exact query and quickly filter large retrieved hit sets—especially crucial when query Precision is low.',
      },
    ],
    subSections: [
      {
        heading: 'Core Browse Capabilities',
        subGroups: [
          {
            sideHeading: '1. Ranking & Collaborative Filtering',
            description:
              'Normalizes relevance scores between `0.0` and `1.0` (`1.0` = highest certainty) to display top matches first, optionally enhanced by user-selected cutoffs and collaborative filtering (e.g., Amazon product recommendations).',
          },
          {
            sideHeading: '2. Zoning (Selective Field & Passage Display)',
            description:
              'Displays compact selected zones (`Title`, `Author`, `Date`, `Abstract`) or relevant passages so analysts judge dozens of hit documents rapidly without reading entire texts.',
          },
          {
            sideHeading: '3. Hit-Term Highlighting',
            description:
              'Spotlights matched query terms in excerpts (`KWIC snippets`) with jump-to-next-highlight controls; systems like `DCARS` color-code words and paragraphs by importance intensity.',
          },
          {
            sideHeading: '4. Browse by Attribute / Category',
            description: 'Enables systematic exploration across indexed catalog dimensions:',
            bullets: [
              'Browse by Subject',
              'Browse by Author',
              'Browse by Title',
              'Browse by Category',
              'Browse by Publication Year',
            ],
          },
          {
            sideHeading: '5. Browse Through Hyperlinks',
            description:
              'Supports interactive one-click hierarchical drill-down across linked subject taxonomies without entering keywords.',
            example:
              'A student opens a digital library and clicks: `Computer Science -> Artificial Intelligence -> Machine Learning`.',
          },
          {
            sideHeading: '6. Summary Displays (Line Item Status & Result Visualization)',
            bullets: [
              {
                label: 'Line Item Status',
                text: 'Shows concise tabular per-item metadata (read/unread flags, size, file format, score tier).',
              },
              {
                label: 'Data Visualization',
                text: 'Renders 2D/3D cluster maps, bar graphs of term contributions, and color-coded topical clusters.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Advantages of Browse Capabilities',
        bullets: [
          {
            label: 'Easy Exploration',
            text: 'Lets users navigate curated directories and hierarchies effortlessly.',
          },
          {
            label: 'No Exact Keywords Required',
            text: 'Highly useful when users are unfamiliar with exact technical terminology.',
          },
          {
            label: 'Serendipitous Discovery',
            text: 'Helps users uncover related topics and documents adjacent to their initial interest.',
          },
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
      'Relevance Feedback, Summarization & Personalized Recommendations',
      'Iterative Search History Logs & Canned Queries',
      'ANSI/NISO Z39.50, WAIS & CNRI Handle/RAP Standards',
    ],
    summaryLine:
      '**Miscellaneous Capabilities** enhance retrieval intelligence and usability with **Vocabulary Browse**, **Spell Check**, **Auto-complete**, **Query Expansion**, **Relevance Feedback**, **Summarization**, **Iterative Search History**, **Canned Queries**, and **Z39.50 / WAIS** standards.',
    bullets: [
      {
        label: 'Purpose of Miscellaneous Capabilities',
        text: 'Additional intelligence, usability, workflow, and protocol features that improve search accuracy, reduce search time, and enhance overall user experience.',
      },
    ],
    subSections: [
      {
        heading: 'Interactive Query, Workflow & Personalization Features',
        subGroups: [
          {
            sideHeading: '1. Vocabulary Browse',
            description:
              'Displays all unique database processing tokens in alphabetical sorted order alongside the count of unique documents (`DF`) containing each term.',
            bullets: [
              {
                label: 'Wildcard Preview',
                text: 'Shows that entering `compul*` actually matches `"compulsion"`, `"compulsive"`, and `"compulsory"`.',
              },
              {
                label: 'Typo Diagnosis',
                text: 'Helps users catch typing errors immediately when `"computen"` (`DF = 0`) sits right next to `"computer"` (`DF = 3,420`).',
              },
            ],
          },
          {
            sideHeading: '2. Spell Check & Auto-Complete Suggestions',
            bullets: [
              {
                label: 'Spell Checking',
                text: 'Automatically detects typos before returning empty hit pages.',
                example: 'Google suggests: `Did you mean "Information Retrieval"?`',
              },
              {
                label: 'Auto-Complete Suggestions',
                text: 'Predicts common query completions live as the user types initial characters (`"info..." -> "information retrieval"`).',
              },
            ],
          },
          {
            sideHeading: '3. Query Expansion & Relevance Feedback',
            bullets: [
              {
                label: 'Query Expansion',
                text: 'Suggests or adds morphological variants and related synonyms from thesauri to increase Recall.',
              },
              {
                label: 'Relevance Feedback',
                text: 'Users mark returned documents as Relevant or Non-Relevant so the IRS automatically re-weights terms and runs an improved next query.',
              },
            ],
          },
          {
            sideHeading: '4. Iterative Search & Search History Log',
            bullets: [
              {
                label: 'Iterative Search (Query Refinement)',
                text: 'Uses the hit list of a previous search (`S1`) as a constraining list for a follow-up query (`S1 AND new_term`), narrowing overly broad results.',
              },
              {
                label: 'Search History Log',
                text: 'Records all queries executed during the current session with item counts so users review and combine past steps.',
              },
            ],
          },
          {
            sideHeading: '5. Canned (Stored) Queries',
            description:
              'Allows users to name, permanently store, and re-execute vetted complex search statements in later sessions—optionally inserting runtime variables (`parameterized queries`).',
          },
          {
            sideHeading: '6. Summarization, Filtering, Multilingual & Recommendations',
            bullets: [
              {
                label: 'Document Summarization',
                text: 'Extracts concise abstracts and key sentences so users evaluate documents without reading full texts.',
              },
              {
                label: 'Filtering, Sorting & Multilingual Search',
                text: 'Sorts/filters hits and translates queries across languages.',
              },
              {
                label: 'Personalized Recommendations & Multimedia Retrieval',
                text: 'Tailors suggestions to user history across text, images, audio, and video.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Interoperability & Retrieval Standards (Z39.50 & WAIS)',
        subGroups: [
          {
            sideHeading: '1. ANSI/NISO Z39.50 Protocol',
            description:
              'Client-server computer-to-computer retrieval standard (`Z39.50-1995`, replacing ISO `SR`) enabling one uniform search client to query incompatible remote library databases transparently.',
            bullets: [
              {
                label: 'Client ("Origin") & Server ("Target")',
                text: 'The `Origin` translates user queries into standardized Z39.50 format and requests records; the remote `Target` searches its local DB and returns standardized results.',
              },
              {
                label: 'Eight Standard Operations',
                text: '`Init`, `Search`, `Present`, `Delete`, `Scan`, `Sort`, `Resource-report`, and `Extended Services` (supporting query Types `0, 1, 2, 100, 101, 102`).',
              },
            ],
          },
          {
            sideHeading: '2. WAIS (Wide Area Information Servers)',
            description:
              'De facto Internet client-server standard (1989: Apple, Thinking Machines, Dow Jones; open `FreeWAIS` by CNIDR) built atop Z39.50.',
            bullets: [
              {
                label: 'Distributed Subject Databases',
                text: 'Maintains a central Directory of Servers so WAIS clients discover distributed databases, execute ranked full-text/NL/feedback searches, and retrieve full documents.',
              },
            ],
          },
          {
            sideHeading: '3. CNRI Handle System & RAP',
            description:
              'Defines persistent Uniform Resource Names (`RFC-1737` Handles) and the `Repository Archive Protocol (RAP)` for retrieving copyrighted electronic items with privilege validation.',
          },
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
