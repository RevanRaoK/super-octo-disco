import { LessonTopic } from '@/types/course';

export const UNIT2_TOPICS: LessonTopic[] = [
  {
    id: 'u2-cataloging-history-objectives',
    shortTitle: 'Cataloging, History & Objectives',
    unit: 'unit2',
    order: 1,
    title: 'Cataloging & Indexing: History and Objectives',
    subtopicsCovered: [
      'Cataloging Definition & Four Catalogue Types (Author, Title, Author/Title, Subject)',
      'Library OPAC Replacement of Card Catalogues',
      'History of Indexing (Manual Cataloging -> Luhn -> Computerized IR)',
      'Objectives of Indexing & Public/Private File Scope',
    ],
    summaryLine:
      '**Cataloging** describes library items through **Author, Title, Author/Title, and Subject Catalogues** (modern **OPAC**), while **Indexing** builds informative term representations to maximize retrieval accuracy and speed.',
    bullets: [
      '**Cataloging** is the systematic arrangement of items in alphabetical or logical order alongside brief bibliographic descriptions so users locate holdings without browsing physical shelves.',
      'Traditional paper card catalogs have largely been replaced by computerized **OPAC (Online Public Access Catalog)** search terminals inside modern libraries.',
      '**Indexing** forms the core first operational stage in IR by reducing raw documents to informative terms or conceptual representations for direct document search or indirect index-file search.',
    ],
    subSections: [
      {
        heading: 'Four Types of Library Catalogues',
        bullets: [
          '**Catalogue Type 1 — Author Catalogues:** Sort entries using personal writers, translators, illustrators, performers, or corporate body names such as `Vikas Publishing Pvt Ltd` and `SIA Publications` as main headings.',
          '**Catalogue Type 2 — Title Catalogues:** Organize entries alphabetically by work title, indexed either comprehensively across every library holding or selectively for major works.',
          '**Catalogue Type 3 — Author/Title Catalogues:** Merge both creator names and titles into one single alphabetical sequence for unified filing and lookup.',
          '**Catalogue Type 4 — Subject Catalogues:** File document entries systematically under standardized topical headings such as `Car` or `Lawyers`.',
        ],
      },
      {
        heading: 'History & Objectives of Indexing (Public vs Private Files)',
        bullets: [
          'Historically rooted in manual **cataloging**, indexing evolved from librarian-assigned **LCSH / Dewey** subject cards into 1950s–1960s statistical frequency indexing (**Hans Peter Luhn**) and modern automatic full-text engines.',
          'The primary **Objective of Indexing** is to represent key item concepts accurately so users discover relevant documents with high **Recall** and **Precision**.',
          'Organizations balance overlapping scopes across the **Document File**, **Public Index File**, and **Private Index File** (`Figure below`).',
          'Users search shared **Public Index Files** to broaden coverage and increase **Recall**, whereas they restrict queries using **Private Index Files** to refine relevance.',
          'Every indexing policy explicitly decides **(a) the scope and level of detail** matching user usage scenarios and **(b) how related index terms link together** inside one unified concept index.',
        ],
        diagramId: 'index-scope-venn',
        diagramCaption:
          'Overlap Between Document File, Public Index File, and Private Index File + Text Processing Context (UNIT-II NOTES p.4)',
      },
    ],
    keyTakeaway:
      'List all **4 Catalogue Types (+ OPAC)** cleanly on separate lines and explain **Public Index (Recall) vs Private Index** scope decisions.',
  },
  {
    id: 'u2-indexing-process',
    shortTitle: 'Indexing Process (6 Phases) & Scope',
    unit: 'unit2',
    order: 2,
    title: 'The Indexing Process: Text Processing Phases, Scope & Linkages',
    subtopicsCovered: [
      'Indexing Process Definition & Interdisciplinary Roots',
      'Six Text Processing Phases (Document Parsing, Lexical Analysis, Stop-Word Removal, Phrase Detection, Stemming & Lemmatization, Weighting)',
      'Scope of Indexing (Two Factors: Exhaustivity & Specificity + Conceptual Zone)',
      'Preordination (Precoordination) & Post-Coordination Linkages',
    ],
    summaryLine:
      'The **Indexing Process** collects, parses, and stores data through **six Text Processing Phases** while determining concept coverage (**Exhaustivity**), term exactness (**Specificity**), and multi-term **Preordination / Linkages**.',
    bullets: [
      'The **Indexing Process** encompasses collecting, parsing, converting, and storing received item data to facilitate fast, accurate retrieval across an IRS.',
      '**Index Design** integrates interdisciplinary principles drawn from **Linguistics**, **Cognitive Psychology**, **Mathematics**, **Informatics**, and **Computer Science**.',
    ],
    subSections: [
      {
        heading: 'Indexing Process: Six Text Processing Phases (Fig. 2.3)',
        bullets: [
          'Every incoming full-text document passes sequentially through **six text preprocessing phases** before final searchable index entries are stored.',
        ],
        subGroups: [
          {
            sideHeading: '1. Document Parsing',
            bullets: [
              'Incoming documents arrive in diverse character encodings, languages, and formats—for example, a **French email carrying Portuguese PDF attachments**.',
              '**Document Parsing** recognizes structural boundaries and breaks compound files into clean individual unit documents (splitting one email plus one separate document per attachment).',
            ],
          },
          {
            sideHeading: '2. Lexical Analysis',
            bullets: [
              'After parsing, **Lexical Analysis** tokenizes continuous document streams into candidate words while resolving **accents, abbreviations, dates, and uppercase/lowercase variants**.',
              'Tokenization complexity depends directly on language morphology: English generally lacks diacritics here, French contains diacritics without grammatical noun cases, and German involves **both diacritics and complex cases**.',
            ],
          },
          {
            sideHeading: '3. Stop-Word Removal',
            bullets: [
              '**Stop-Word Removal** optionally deletes ultra-frequent structural words carrying low topic discrimination power.',
              'Using a standard **Snowball stemmer stop-list**, the sentence `"search engines are the most visible information retrieval applications"` compacts to `"search engine most visible information retrieval applications"`.',
            ],
          },
          {
            sideHeading: '4. Phrase Detection',
            bullets: [
              '**Phrase Detection** captures compound semantic meaning beyond isolated bag-of-words tokens by identifying noun groups and multi-word expressions.',
              'Systems detect phrases via **punctuation boundary rules**, **morphological patterns**, or **syntactic parsing**—extracting `"search engines"` and `"information retrieval"` from the sample sentence.',
            ],
          },
          {
            sideHeading: '5. Stemming and Lemmatization',
            bullets: [
              '**Stemming** is a fast heuristic rule process (such as the **Porter Stemmer**) that chops off trailing word suffixes (`"Search engine are the most visible inform retrieval application"`).',
              '**Lemmatization** consults morphological dictionaries (such as a **WordNet-based lemmatizer**) to map inflected forms cleanly back to valid base dictionary words (`"... visible information retrieval application"`).',
            ],
          },
          {
            sideHeading: '6. Weighting',
            bullets: [
              '**Weighting** assigns numerical scores reflecting the relative descriptive power of each extracted token inside a document and across the collection.',
              'The simplest model uses **binary weights** (`0` for term absence, `1` for presence), while ranked IRS engines store continuous frequency or `TF-IDF` weights.',
            ],
          },
        ],
        diagramId: 'indexing-process-flow',
        diagramCaption: 'End-to-End Indexing Process & Six Sequential Text Processing Phases (Document -> Indexing)',
      },
      {
        heading: 'Scope of Indexing (Exhaustivity & Specificity)',
        bullets: [
          'When human indexers index items manually, quality varies because **author and indexer vocabulary domains often differ**, forcing the indexer to decide where to stop.',
          'The indexing depth decision rests strictly on **two governing factors**: **Exhaustivity** and **Specificity**.',
        ],
        subGroups: [
          {
            sideHeading: 'Factor 1: Exhaustivity',
            bullets: [
              '**Exhaustivity** measures the extent to which minor or secondary concepts inside an item are captured in the index (**high exhaustivity boosts Recall**).',
              'For example, an indexer must judge whether **two sentences discussing on-board caches** inside a 10-page microprocessor paper warrant a dedicated index entry.',
            ],
          },
          {
            sideHeading: 'Factor 2: Specificity',
            bullets: [
              '**Specificity** measures the preciseness and narrowness of the chosen index descriptor (**high specificity boosts Precision**).',
              'For instance, deciding among broad `"processor"`, mid-level `"microcomputer"`, or exact `"Pentium"` determines query specificity.',
              'Indexing only an item primary concept with broad terms creates **low exhaustivity and low specificity**, harming both **Precision** and **Recall**.',
            ],
          },
          {
            sideHeading: 'Portion of Item Indexed (Conceptual Zone)',
            bullets: [
              'Another indexing scope choice selects which document portions receive index entries, most simply restricting indexing to **Title and Abstract (Conceptual Zone)**.',
            ],
          },
        ],
      },
      {
        heading: 'Preordination (Precoordination) and Linkages',
        bullets: [
          '**Linkages** determine how many related index concepts are explicitly coupled together inside one item so queries do not cross-match unrelated events (**False Drops**).',
          '**Preordination (Precoordination)** binds correlated multi-term attributes directly **at index build time**—such as linking `"drilling of oil wells in Mexico by CITGO"` separately from `"oil refineries in Peru by the U.S."`.',
          '**Post-coordination** omits index-time coordination and connects separate single terms dynamically **at search time** via Boolean `AND` intersections.',
        ],
      },
    ],
    keyTakeaway:
      'Present **all 6 Indexing Process phases** (`Parsing -> Lexical -> Stop-Word -> Phrase -> Stemming/Lemma -> Weighting`), clearly state that Scope of Indexing depends on **only 2 factors (`Exhaustivity` & `Specificity`)**, and explain **Preordination vs Post-coordination**.',
  },
  {
    id: 'u2-automatic-indexing-ie',
    shortTitle: 'Automatic Indexing Classes & IE',
    unit: 'unit2',
    order: 3,
    title: 'Automatic Indexing & Information Extraction (IE)',
    subtopicsCovered: [
      'Automatic Indexing Definition & Weighted vs Unweighted Classes',
      'Classification: Indexing by Term (Statistical [Vector, Probabilistic, Bayesian] & NLP DR-LINK)',
      'Classification: Indexing by Concept (LSI & Two Neural Networks)',
      'Classification: Multimedia Indexing (Raw Data Level)',
      'Information Extraction (IE), 4 Metrics & Document Summarization',
    ],
    summaryLine:
      '**Automatic Indexing** scans large repositories algorithmically across **Weighted vs Unweighted** schemes classified into **Indexing by Term (Statistical / NLP)**, **Indexing by Concept (LSI / Neural Networks)**, and **Multimedia Indexing**, while **Information Extraction (IE)** fills structured database facts.',
    bullets: [
      '**Automatic Indexing** is the computerized process of scanning vast document repositories against a **controlled vocabulary, taxonomy, or ontology** (or performing **Total Document Indexing**) to build searchable indexes in seconds.',
      'Resulting automatic indexes fall fundamentally into **two weighting classes**: **Unweighted Indexing Systems** and **Weighted Indexing Systems**.',
    ],
    subSections: [
      {
        heading: 'Classification of Automatic Indexing Approaches',
        bullets: [
          'Depending on representation strategy, automated indexing organizes into **Output Weighting Classes**, **Indexing by Term**, **Indexing by Concept**, and **Multimedia Indexing**.',
        ],
        subGroups: [
          {
            sideHeading: '1. Weighted vs Unweighted Indexing Systems',
            bullets: [
              'An **Unweighted Indexing System** stores strictly boolean term occurrence alongside optional word positions inside the searchable index.',
              'A **Weighted Indexing System** computes real-valued term importance weights normalized between $0$ and $1$ from term frequency and ranks results from highest score to lowest.',
            ],
          },
          {
            sideHeading: '2. Indexing by Term (Statistical Approaches & NLP)',
            bullets: [
              '**Indexing by Term** builds the index directly from processing tokens extracted out of original document vocabulary using **Statistical** or **Natural Language Processing (NLP)** methods.',
              '**Vectorised Information Systems (SMART Model)** represent every document as a numeric vector where each slot matches a unique word token (`0` = absent) and compute query-document distance scores.',
              '**Bayesian Statistical Models** apply evidential reasoning via a **Two-Level Bayesian Network** where node $c$ models **query concepts**, leaf nodes $f$ model **item concepts**, and dependency arcs score query-item relevance.',
              '**Natural Language Approaches (such as DR-LINK — Document Retrieval through Linguistic Knowledge)** add deep syntactic and semantic parsing atop word statistics to refine final concept descriptors.',
            ],
            diagramId: 'bayesian-two-level',
            diagramCaption:
              'Two-Level Bayesian Inference Network Modeling Query Concept (c1) & Item Features (f11, f12, f1j) (UNIT-II p.9)',
          },
          {
            sideHeading: '3. Indexing by Concept (Latent Semantic Indexing & Neural Networks)',
            bullets: [
              '**Indexing by Concept (Latent Semantic Indexing / LSI)** derives a canonical concept basis from test terms so synonyms map onto shared latent topics.',
              'Concept weighting uses **two Neural Networks** capturing word-synonym association strengths: one neural network builds **stem context vectors** and a second executes **query scoring**.',
            ],
          },
          {
            sideHeading: '4. Multimedia Indexing',
            bullets: [
              '**Multimedia Indexing** handles non-textual media (**images, video, and audio streams**) by extracting searchable visual or acoustic patterns directly at the **raw data level**.',
            ],
          },
        ],
      },
      {
        heading: 'Information Extraction (IE), Evaluation Metrics & Document Summarization',
        bullets: [
          '**Information Extraction (IE)** performs two primary automated tasks: **(1) extracting structured facts** to populate relational database slots (**Automatic File Build / AFB**) and **(2) extracting concise representative text** for document summarization.',
        ],
        subGroups: [
          {
            sideHeading: 'Four Metrics Evaluating Information Extraction',
            bullets: [
              '**Recall** measures the proportion of correct relevant facts extracted relative to all relevant facts present in the item.',
              '**Precision** measures the proportion of extracted facts that are actually accurate out of total items extracted.',
              '**Over-generation** measures irrelevant or redundant information extracted from misapplied templates or non-relevant slot fills.',
              '**Fallout** tracks how frequently the extraction engine assigns incorrect values to database template slots.',
            ],
          },
          {
            sideHeading: 'Document Summarization',
            bullets: [
              '**Document Summarization** preserves an item essential ideas while shrinking size dramatically through generated **titles, tables of contents, and abstracts** so users judge item utility without reading full text.',
            ],
          },
        ],
      },
    ],
    table: {
      caption: 'Information Retrieval (IR) vs Information Extraction (IE)',
      headers: ['Dimension', 'Information Retrieval (IR)', 'Information Extraction (IE)'],
      rows: [
        ['Input Source', 'Large collection of free-text documents', 'Target text passages or pre-filtered articles'],
        ['Output Form', 'Ranked list of whole document pointers', 'Structured entity-attribute database templates (AFB)'],
        ['Granularity', 'Document or passage level relevance', 'Token, phrase, named-entity & relation level'],
        ['Typical Task', 'Find news articles about corporate mergers', 'Extract Acquirer, Target, Amount & Date per article'],
      ],
      highlightRows: [1, 3],
    },
    keyTakeaway:
      'Clearly structure the four **Automatic Indexing classifications (`Unweighted/Weighted`, `Indexing by Term [Vector, Bayesian, DR-LINK]`, `Indexing by Concept [LSI & 2 NNs]`, and `Multimedia Indexing`)** alongside the **4 IE Metrics & Summarization**.',
  },
  {
    id: 'u2-data-structures-stemming',
    shortTitle: 'Data Structures Intro & Stemming',
    unit: 'unit2',
    order: 4,
    title: 'Introduction to Data Structures & Stemming Algorithms',
    subtopicsCovered: [
      'Definition & Core Capabilities of a Data Structure',
      'Two Major IRS Data Structures (Document Manager vs Search Manager)',
      'Processing Tokens (3 Input Symbol Classes)',
      'Stemming Objectives & Trade-offs (Over- vs Under-stemming)',
      'Table Lookup, Porter, K-Stemming (6 Data Files), Successor Variety & N-Gram Stemmers',
    ],
    summaryLine:
      'A **Data Structure** is a specialized format for organizing, processing, retrieving, and storing data—split in IRS between the **Document Manager** and **Document Search Manager**—paired with **Stemming Algorithms** to conflate inflections.',
    bullets: [
      'A **Data Structure** is a **specialized format for organizing, processing, retrieving, and storing data** cleanly so retrieval algorithms know exactly which search capabilities are supported.',
      'Every IRS search data structure supports **two essential capabilities**: **(1) representing underlying document concepts** and **(2) locating matching concepts efficiently**.',
    ],
    subSections: [
      {
        heading: 'Introduction to Data Structures in an IRS',
        bullets: [
          'Understanding an IRS data structure hierarchy reveals how incoming normalized items split across retrieval components.',
        ],
        subGroups: [
          {
            sideHeading: 'Two Major Data Structures & System Managers',
            bullets: [
              '**Data Structure 1 — Document Manager (`Original Document File`):** Receives, tracks versions, manages, and stores incoming digital items in their standardized **Item Normalization** form.',
              '**Data Structure 2 — Document Search Manager (`Searchable Data Structure`):** Stores **Processing Tokens**, locations, and metadata structures to execute text, image, and sound searches rapidly and pass matching pointers back to the Document Manager.',
              '**Item Normalization** converts heterogeneous user input or arriving documents into a unified internal format regardless of raw keyword variance.',
              '**Document File Creation** defines the binary or text storage format persisting normalized documents cleanly on storage media.',
            ],
          },
          {
            sideHeading: 'Processing Tokens: Three Input Symbol Classes',
            bullets: [
              '**Valid Word Symbols** contain searchable alphabets, numerals, and permitted special word characters.',
              '**Inter-word Symbols** contain non-searchable delimiter characters such as whitespace blanks and semicolons (`;`).',
              '**Special Processing Symbols** handle context-dependent punctuation characters such as the **hyphen (`-`)** inside compound terms.',
            ],
          },
        ],
        diagramId: 'major-data-structures',
        diagramCaption: 'IRS Major Data Structure Split (Document Manager vs Search Manager) + Successor Variety Tree',
      },
      {
        heading: 'Stemming Algorithms & Variations',
        bullets: [
          'Introduced in the **1960s**, **Stemming** trims prefixes and suffixes to conflate morphological word forms (`reducing vocabulary diversity`, `improving search efficiency`, and `increasing Recall` at a slight risk of `Over-stemming` Precision drops).',
        ],
        subGroups: [
          {
            sideHeading: '1. Table Lookup Stemming',
            bullets: [
              '**Table Lookup Stemming** (used in commercial engines like **RetrievalWare**) stores every inflected word form paired directly with its base root inside large static lookup tables.',
            ],
          },
          {
            sideHeading: '2. Porter Stemming Algorithm (Condition-Action Affix Rules)',
            bullets: [
              'The **Porter Algorithm** evaluates sequential suffix conditions governed by the vowel-consonant stem measure $M$ in $C(VC)^M V$ (initial $C$ and final $V$ optional).',
              'Rules test explicit suffix flags including `*<X>` (stem ends with letter $X$), `*V*` (stem contains a vowel), and `*d` (stem ends with a double consonant) alongside wildcard checks.',
            ],
          },
          {
            sideHeading: '3. Dictionary Stemming (K-Stemming in INQUERY — 6 Major Data Files)',
            bullets: [
              '**Dictionary Stemming (`K-Stemming`)** used in **INQUERY** combines iterative suffix/prefix stripping rules with **NLP morphological dictionaries** (`"British" -> "Britain"`) so unrelated meanings never collapse together.',
              '**File 1 — Dictionary of Words**: Holds the core canonical English root vocabulary verified before accepting any stem.',
              '**File 2 — Supplement of Words**: Adds domain-specific technical terms missing from the core dictionary.',
              '**File 3 — Exceptions List**: Specifies words that selectively preserve trailing silent `-e` (for instance mapping `"Suites"` -> `"suite"` while mapping `"suited"` -> `"suit"`).',
              '**File 4 — Direct-Conflation List**: Lists explicit irregular word pairs overriding normal stemming rules directly.',
              '**File 5 — Country-Nationality List**: Maps demonyms and nationalities to country stems (such as `"British"` -> `"Britain"`).',
              '**File 6 — Proper Nouns List**: Records proper names protected from aggressive algorithmic suffix stripping.',
            ],
          },
          {
            sideHeading: '4. Successor Variety & 5. N-Gram Stemmers',
            bullets: [
              '**Successor Variety Stemming** builds a prefix-suffix **symbol tree** (e.g., for `{bag, barn, bring, box, bottle}`) and identifies morpheme stems via **Cutoff**, **Peak & Plateau**, and **Complete Word** methods.',
              '**N-Gram Stemmers** decompose tokens into overlapping fixed-length character windows and conflate matching words cleanly via **Dice Similarity** without language-specific rules.',
            ],
          },
        ],
      },
    ],
    formulas: [
      {
        label: 'Porter Word Measure $m$ & Dice $N$-Gram Similarity',
        tex: '[C](VC)^m[V] \\qquad S = \\frac{2C}{A + B}',
        note: 'For Porter rules, $m$ counts `VC` vowel-consonant transitions; for **N-Gram Stemming**, $A$ and $B$ are unique $n$-gram counts in each word and $C$ is shared $n$-grams.',
      },
    ],
    table: {
      caption: 'Comparison of the Five Stemming Classes',
      headers: ['Stemming Method', 'Mechanism', 'Key Strength', 'Weakness'],
      rows: [
        ['Table Lookup', 'Direct Word → Stem hash table (RetrievalWare)', 'Fast, zero invalid stems', 'Large storage; misses unseen words'],
        ['Porter Algorithm', '5-step suffix-stripping rule cascade', 'Compact, fast, no large dictionary', 'Produces non-word stems (comput)'],
        ['Dictionary (K-Stemming)', 'Checks 6 NLP dictionary data files (INQUERY)', 'Always outputs valid English words', 'Slower dictionary lookups'],
        ['Successor Variety', 'Letter branching counts in symbol tree', 'Language-independent statistical cuts', 'Needs large corpus; sensitive to noise'],
        ['N-Gram Stemmer', 'Bigram Dice similarity clustering', 'Handles OCR/spelling noise well', 'Higher computational overhead'],
      ],
      highlightRows: [1, 2],
    },
    walkthroughLinkId: 'inverted-stemming',
    keyTakeaway:
      'Start with the exact **definition of a Data Structure** + **2 IRS Managers**, split the **3 Processing Token classes**, and write all **6 K-Stemming data files on separate lines**!',
  },
  {
    id: 'u2-inverted-file-structure',
    shortTitle: 'Inverted File Structure',
    unit: 'unit2',
    order: 5,
    title: 'Inverted File Structure',
    subtopicsCovered: [
      'Three Core Components (Document File, Dictionary, Inversion Lists)',
      'Features (Zoning, Ranking, Concepts, NLP)',
      'Creation, Sorting & Dynamic Updates',
    ],
    summaryLine:
      'An **Inverted File Structure** maps every unique vocabulary term inside a **Dictionary** directly to its sorted list of containing **Document IDs** inside **Inversion (Posting) Lists** for sub-second lookup.',
    bullets: [
      'The **Inverted File Structure** is the most common indexing architecture across both DBMS and commercial IRS platforms because it resolves term queries without scanning raw text.',
      'It comprises three core components: the **Document File** (full text + document metadata), the **Dictionary** (sorted unique processing tokens + document frequencies), and the **Inversion Lists** (posting lists of matching Document IDs and weights).',
      'At query time, the IRS looks up query words in the **Dictionary** (often held in RAM as a **B-tree**, **Sorted Array**, or **Hash Table**), retrieves their **Inversion Lists**, and intersects or unions Doc IDs.',
      'Modern inverted files also encode **Zone Identifiers** (`Title`, `Abstract`), **Term Frequency ($TF$)** for statistical ranking, **Word Offsets** for proximity/phrase queries, and **Concept/NLP relations** (such as sentiment polarity like `Happy` / `Sad`).',
      'Core features highlighted in Unit II notes for Inverted File Structures include **increased Precision** on top-ranked results, **Logical Subsetting (Zoning)**, **Ranked Output**, **storing concept relationships**, and **NLP integration**.',
      'While query latency is $O(\\log |V| + |postings|)$, building and updating an inverted file is storage-heavy (typically **50%–70% extra index overhead**) and requires costly list merging on new document arrivals.',
    ],
    diagramId: 'inverted-file-structure',
    diagramCaption: 'Inverted File Structure Mapping Documents → Dictionary Terms → Inversion (Posting) Lists',
    walkthroughLinkId: 'inverted-stemming',
    keyTakeaway:
      'Draw the 3-column **Document File → Dictionary → Inversion Lists** diagram and mention **Zoning, Ranking, Concepts & NLP**.',
  },
  {
    id: 'u2-ngram-data-structures',
    shortTitle: 'N-Gram Data Structures',
    unit: 'unit2',
    order: 6,
    title: 'N-Gram Data Structures',
    subtopicsCovered: [
      'Fixed-Length Overlapping Character Windows (Bigrams, Trigrams)',
      'Continuous Input & Ignore Characters (No Inter-Word vs Inter-Word)',
      'Worked Examples (Seacoal/Colony, Retail Trigrams)',
      'Origins (WWII Cryptography), Spelling Correction, Language ID & Limits',
    ],
    summaryLine:
      '**N-Gram Data Structures** slice input words or continuous character streams into overlapping fixed-length substrings of length $n$, giving strong resilience against **misspellings, OCR errors, and morphology differences**.',
    bullets: [
      'An **$n$-gram** is a contiguous fixed-length sequence of $n$ characters extracted by sliding a window across normalized processing tokens or continuous data streams.',
      'In common configurations, **Bi-grams** (`n=2`, no inter-word symbols, e.g., `Se ea` and `Col ol lo on ny`) split words pairwise, whereas **Tri-grams** (`n=3`, accepting inter-word boundary `#`, e.g., `#sea`, `colo`, `olon`, `on y` or `Retail -> ret, eta, tai, ail`) retain boundary context.',
      'For an alphabet of length $\\lambda$, the theoretical upper limit is $\\text{MAX Seg}_n = \\lambda^n$ (`27^2 = 729` bigrams or `27^3 = 19,683` trigrams), stored compactly in bit-vectors, inverted lists, or hash tables.',
      'Historically introduced by **World War II cryptographers**, major modern uses of $n$-grams (especially trigrams) include **spelling error detection & correction**, **automatic language identification**, and **mobile keyboard next-word prediction**.',
      'Because $n$-gram tokens are bounded in size, query mapping runs with high algorithmic regularity even across noisy OCR streams.',
      'A critical limitation is that **individual $n$-grams carry no inherent semantic meaning** (long $n$-grams yield sparse noisy vectors), making $n$-grams a **poor representation of conceptual relationships**.',
    ],
    diagramId: 'ngram-sliding-window',
    diagramCaption: 'Bi-gram (N=2) and Tri-gram (N=3) Sliding Window Decomposition',
    formulas: [
      {
        label: 'Possible $n$-Gram Alphabet Space & Overlap Dice Similarity',
        tex: '\\text{MAX Seg}_n = \\lambda^n \\qquad \\text{Sim}_{n\\text{-gram}}(W_1, W_2) = \\frac{2 \\times |G_n(W_1) \\cap G_n(W_2)|}{|G_n(W_1)| + |G_n(W_2)|}',
        note: '$\\lambda$ is alphabet size including separator `#`; $G_n(W)$ is the multiset of $n$-grams extracted from word $W$.',
      },
    ],
    keyTakeaway:
      'Show the explicit **`Se ea / #sea / retail -> ret, eta, tai`** breakdown, quote $\\text{MAX Seg}_n = \\lambda^n$, and note **WWII cryptography, spelling correction & lack of concept semantics**.',
  },
  {
    id: 'u2-pat-data-structure',
    shortTitle: 'PAT Data Structure (Sistrings)',
    unit: 'unit2',
    order: 7,
    title: 'PAT (Patricia Tree) Data Structure',
    subtopicsCovered: [
      'Semi-Infinite Strings (Sistrings)',
      'Worked Sistring Example ("Economics for Warsaw is Complex")',
      'PAT Binary Radix Tree Structure ($n$ Leaves, $n-1$ Internal Nodes)',
      'PAT Array & Supported Queries (Prefix, Range, Longest Match)',
    ],
    summaryLine:
      'The **PAT Data Structure** (Practical Algorithm to Retrieve Information Coded in Alphanumeric) builds a compact **Patricia Binary Tree** over bit representations of **semi-infinite strings (Sistrings)** starting at any searchable offset.',
    bullets: [
      'A **Sistring (Semi-Infinite String)** is a unique substring starting at any specified character anchor position inside the continuous input stream and extending to the end of the text.',
      'In the classic notes example `"Economics for Warsaw is Complex"`, position anchors yield `Sistring 1 = "Economics for..."`, `Sistring 2 = "conomics for..."`, `Sistring 4 = "onomics for..."`, `Sistring 9 = "for Warsaw..."`, down to `Sistring 25 = "ex"`.',
      'A **PAT Tree** organizes all unique sistrings into an **unbalanced binary digital tree** where every internal node records the **bit position** to inspect (`0` branches left, `1` branches right), and external leaf nodes hold raw text pointers.',
      'Because single-child nodes are compressed, indexing $n$ sistrings produces strictly **$n$ external leaf nodes** and at most **$n - 1$ internal branching nodes**.',
      'Since all sistrings remain logically sorted lexicographically, PAT trees outperform basic inverted files on **range searches**, **prefix queries** (`comp*`), **longest-match queries**, and **contiguous phrase detection**.',
      'A **PAT Array** stores sorted sistring pointers contiguously in a flat sorted array, saving pointer overhead while supporting $O(\\log n)$ binary search.',
    ],
    diagramId: 'pat-binary-tree',
    diagramCaption: 'PAT Binary Tree Branching Across Sistring Bit Prefixes (UNIT-II NOTES p.24)',
    keyTakeaway:
      'Cite `"Economics for Warsaw is Complex"` sistrings (`1, 2, 4, 9, 25`), state **$n$ leaves & at most $n-1$ internal nodes**, and contrast **PAT Tree** vs **PAT Array**.',
  },
  {
    id: 'u2-signature-file-structure',
    shortTitle: 'Signature File Structure',
    unit: 'unit2',
    order: 8,
    title: 'Signature File Structure (Superimposed Coding)',
    subtopicsCovered: [
      'Superimposed Coding & Word Signatures',
      'Block Signatures & Logical Deletion Marking',
      'False Drops & Linear Scan Response Time',
      'SSF vs BSSF & Applications (WORM, Parallel, Distributed)',
    ],
    summaryLine:
      'A **Signature File** uses **superimposed coding** to OR fixed-length hashed **word signatures** into compact **block bit-masks**, rapidly filtering out non-matching items in linear time.',
    bullets: [
      'The primary goal of a **Signature File Structure** is to provide a fast first-pass test that eliminates the majority of non-matching database items using compact **compressed unordered signatures**.',
      'In **Superimposed Coding**, each word in a text block hashes into an **$m$-bit Word Signature** with $k$ `1`-bits, and all word signatures are **bitwise ORed** into one **Block Signature ($B$)**; queries match when `(B AND Q) = Q`.',
      'When new items arrive they append directly at the end (**concatenation**), whereas deleted items remain in place and are flagged as **logically deleted** without rebuilding the whole file.',
      'Because signature checking performs a sequential linear scan over compressed signatures, search latency grows **linearly with database file size** while yielding **zero false negatives** and occasional **False Drops** verified in the Document File.',
      'A **Sequential Signature File (SSF)** stores signatures row-by-row, whereas a **Bit-Sliced Signature File (BSSF)** stores each bit position vertically so queries scan only the $k$ slices where query `1` bits fall.',
      'Signature files require only **10%–20% space overhead** and excel across **medium-sized databases**, **databases with low term frequency**, **WORM (Write-Once-Read-Many) devices**, **parallel processing machines**, and **distributed environments**.',
    ],
    diagramId: 'signature-file-coding',
    diagramCaption: 'Superimposed Coding: Word Signatures Bitwise ORed into Block Signature',
    formulas: [
      {
        label: 'Signature Match Condition & False-Drop Density',
        tex: '(B \\land Q) = Q \\qquad P_{\\text{false drop}} \\approx \\left(1 - e^{-\\frac{k \\cdot D}{m}}\\right)^{k}',
        note: 'Optimal bit density occurs at $50\\%$ `1`-bits ($\\ln 2$), where $m$ = signature bit length, $k$ = bits set per word, and $D$ = distinct words per block.',
      },
    ],
    keyTakeaway:
      'Highlight **Superimposed Coding (`OR`)**, **linear scan & logical deletion**, **`10–20%` space overhead**, **SSF vs BSSF**, and **WORM / parallel / distributed applications**.',
  },
  {
    id: 'u2-hypertext-xml-hmm',
    shortTitle: 'Hypertext, XML, HMM & Real-Time Examples',
    unit: 'unit2',
    order: 9,
    title: 'Hypertext, XML Data Structures & Hidden Markov Models',
    subtopicsCovered: [
      'Hypertext Nodes, Links, Anchors & Viewers',
      'HTML & XML (DTD, DOM, XSL) Structural Zoning',
      'Hidden Markov Models (HMM) Noisy Channel & Bayes Rule',
      'EM Estimation Disadvantage + Complete Unit II Real-Time Examples',
    ],
    summaryLine:
      '**Hypertext** connects multimedia **nodes** via embedded **links**, **XML** models semantic hierarchy via **DTD, DOM, and XSL**, and **Hidden Markov Models (HMMs)** compute query-document relevance probabilities across a **noisy channel**.',
    bullets: [
      '**Hypertext Data Structures** organize non-linear electronic information into discrete **Nodes** referenced by embedded pointers called **Links** and displayed by media-appropriate viewers.',
      'On the Internet, **HTML** mixes plain text with structural formatting tags between angle brackets (e.g., `<title>`, `<strong>`) to govern presentation and web hyperlinks.',
      '**XML (eXtensible Markup Language)** describes detailed semantic text subsets (similar to fine-grained **zoning**) governed formally by **DTD (Document Type Definition)**, **DOM (Document Object Model)**, and **XSL (Extensible Stylesheet Language)**.',
    ],
    subSections: [
      {
        heading: 'Hidden Markov Models (HMMs) in Information Retrieval',
        bullets: [
          'An **HMM** models textual retrieval as a Markov chain process where the output of one query transition acts as input for the next ($Q_1 \\to Q_2 \\to \\dots \\to Q_n$).',
          'Under the **Noisy Channel paradigm**, the relevant document acts as an unknown hidden key passing via state transitions through a noisy channel (the vocabulary mismatch between author writing style and user query specification) to emit observed query terms.',
          'Retrieval applies **Bayes Conditional Probability Rule** $P(A \\mid B) = \\frac{P(B \\mid A)P(A)}{P(B)}$ alongside formal tuple parameters $\\lambda = (S, O, A, B, \\pi)$ and algorithms **Forward-Backward**, **Viterbi decoding**, and **Baum-Welch**.',
          'The biggest practical **disadvantage of HMMs** is accurately estimating the **Transition Probability Matrix** and **Output Emission Distributions** for every document—requiring a large query-relevance training corpus solved iteratively via **Estimation-Maximization (EM) algorithms**.',
        ],
        diagramId: 'hmm-noisy-channel',
        diagramCaption: 'Hidden Markov Model (Noisy Channel State Transitions $S_i \\to Q_i$) (UNIT-II NOTES p.27)',
      },
    ],
    table: {
      caption: 'Unit II Real-Time Industry Mapping Across Every Data Structure (UNIT-II NOTES p.28)',
      headers: ['Unit II Topic', 'Real-Time System Example'],
      rows: [
        ['Cataloging & Indexing', 'Library **OPAC** & **Google Search** crawling billions of pages for millisecond lookup'],
        ['Automatic Indexing & IE', '**Amazon Seller** auto-indexing `Samsung Galaxy S24 Ultra` & **HR Resume Screening**'],
        ['Inverted File Structure', '**Google / Elasticsearch** mapping terms directly to matching Web URL posting lists'],
        ['N-Gram & PAT Data Structures', '**Gboard** predictive typing (N-grams) & **Dictionary Auto-Suggest (`Comp...`)** (PAT prefix tree)'],
        ['Signature File Structure', '**Antivirus Quick Scan** checking compact file signatures first to skip benign files fast'],
        ['Hypertext & XML Structures', '**Wikipedia** linked knowledge graph (Hypertext) & **Online Banking** fund transfers (XML)'],
        ['Hidden Markov Models (HMM)', '**Google Voice Typing** predicting probable word sequences from noisy audio channels'],
      ],
      highlightRows: [0, 2, 6],
    },
    diagramId: 'xml-dom-hypertext',
    diagramCaption: 'Hypertext Node-Link Graph & XML Structural DOM Hierarchy',
    formulas: [
      {
        label: 'HMM Parameter Tuple & Bayes Channel Conditional Rule',
        tex: '\\lambda = (S, O, A, B, \\pi) \\qquad P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}',
        note: '$A_{ij} = P(S_{t+1}=j \\mid S_t=i)$ transition matrix; $B_j(o) = P(O_t=o \\mid S_t=j)$ emission matrix; estimated via **Estimation-Maximization (EM)**.',
      },
    ],
    keyTakeaway:
      'Cover **XML (`DTD, DOM, XSL`)**, the **HMM noisy-channel Bayes formulation + EM estimation disadvantage**, and cite the **Real-Time Industry Examples (`Google Voice, Antivirus, Wikipedia, Banking XML, Gboard`)**.',
  },
];
