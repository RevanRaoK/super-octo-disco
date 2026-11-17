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
      {
        label: 'Cataloging',
        text: 'Systematic arrangement of items in alphabetical or other logical order including brief bibliographic descriptions so users locate holdings without browsing shelves.',
      },
      {
        label: 'Library Catalogue & OPAC Transition',
        text: 'A library catalogue lists all books and reading material in a library; traditional paper card catalogues have largely been replaced by the computerized Online Public Access Catalog (OPAC).',
      },
      {
        label: 'Indexing (Core First Step in IR)',
        text: 'Transforms each received item into informative terms or searchable data structures:',
        children: [
          {
            label: 'Manual or Automatic',
            text: 'Can be performed by human catalogers or computerized indexing algorithms.',
          },
          {
            label: 'Direct vs Indirect Search',
            text: 'Supports searching directly in the document database or indirectly through index files.',
          },
          {
            label: 'Concept-Based Representation',
            text: 'Some systems transform input into abstract concept representations rather than raw words.',
          },
        ],
      },
    ],
    subSections: [
      {
        heading: 'Four Types of Library Catalogues',
        subGroups: [
          {
            sideHeading: '1. Author Catalogues',
            description:
              'Contain entries with author names as the main heading—including writers, illustrators, performers, producers, translators, or corporate bodies with intellectual or artistic responsibility.',
            example: '`Vikas Publishing Pvt Ltd`, `SIA Publications`',
          },
          {
            sideHeading: '2. Title Catalogues',
            description:
              'Organize entries alphabetically by work title; some libraries index titles for every item while others make title entries selectively for major works.',
          },
          {
            sideHeading: '3. Author/Title Catalogues',
            description:
              'Merge both author names and work titles into one unified alphabetical filing sequence so users can search either under the same index.',
          },
          {
            sideHeading: '4. Subject Catalogues',
            description:
              'Arrange document entries systematically under alphabetical subject headings indicating what each item is about.',
            example: '`Car`, `Lawyers`',
          },
        ],
      },
      {
        heading: 'History & Objectives of Indexing',
        subGroups: [
          {
            sideHeading: '1. History of Indexing',
            bullets: [
              {
                label: 'Origin in Cataloging',
                text: 'Indexing originally began as manual cataloging—the oldest technique to identify item contents via systematic alphabetical arrangement.',
              },
              {
                label: 'Evolution to Statistical & Computerized IR',
                text: 'Progressed from librarian-assigned LCSH/Dewey cards into 1950s–1960s statistical frequency indexing (Hans Peter Luhn) and modern automatic full-text engines.',
              },
            ],
          },
          {
            sideHeading: '2. Objectives of Indexing (Public vs Private Files)',
            bullets: [
              {
                label: 'Primary Objective',
                text: 'Represent the concepts within an item accurately so users find relevant information quickly.',
              },
              {
                label: 'Public Index Files (Increase Recall)',
                text: 'Consider information needs of all library users; users search shared public index files to broaden search coverage and raise Recall.',
              },
              {
                label: 'Private Index Files (Constrain Search)',
                text: 'Users restrict or tailor searches using personal/team private index files.',
              },
              {
                label: 'Two Core Policy Decisions',
                text: 'Every indexing design explicitly determines:',
                children: [
                  '1. Scope of indexing and level of detail based on user usage scenarios.',
                  '2. How related index terms are linked together into one concept index.',
                ],
              },
            ],
            diagramId: 'index-scope-venn',
            diagramCaption:
              'Overlap Between Document File, Public Index File, and Private Index File + Text Processing Context (UNIT-II NOTES p.4)',
          },
        ],
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
      {
        label: 'Indexing Process Definition',
        text: 'Collecting, parsing, converting, and storing received item data to facilitate fast and accurate information retrieval.',
      },
      {
        label: 'Interdisciplinary Index Design',
        text: 'Incorporates concepts from five fields: Linguistics, Cognitive Psychology, Mathematics, Informatics, and Computer Science.',
      },
    ],
    subSections: [
      {
        heading: 'Indexing Process: Six Text Processing Phases (Fig. 2.3)',
        description:
          'Every incoming full-text document passes sequentially through six text preprocessing phases before final searchable index entries are stored.',
        subGroups: [
          {
            sideHeading: '1. Document Parsing',
            description:
              'Recognizes structural document boundaries across mixed languages, character sets, and file formats and breaks compound files into individual unit documents.',
            example:
              'A French email with Portuguese PDF attachments is split into one document representing the email plus one separate document per PDF attachment.',
          },
          {
            sideHeading: '2. Lexical Analysis',
            description:
              'Tokenizes the continuous parsed character stream into candidate words while resolving accents, abbreviations, dates, and uppercase/lowercase variants.',
            bullets: [
              {
                label: 'Language Complexity Differences',
                text: 'Difficulty varies by morphology:',
                children: [
                  'English has neither diacritics nor grammatical noun cases here.',
                  'French has diacritics without noun cases.',
                  'German has both diacritics and grammatical cases.',
                ],
              },
            ],
          },
          {
            sideHeading: '3. Stop-Word Removal',
            description:
              'Optionally removes ultra-frequent structural words (`the, is, are, most`) carrying low topic discrimination power.',
            example:
              'With the Snowball stop-list, `"search engines are the most visible information retrieval applications"` becomes `"search engine most visible information retrieval applications"`.',
          },
          {
            sideHeading: '4. Phrase Detection',
            description:
              'Captures compound semantic meaning beyond bag-of-words tokens by identifying noun groups and multi-word phrases via punctuation rules, morphological analysis, or syntactic parsing.',
            example:
              'Extracts `"search engines"` and `"information retrieval"` from the example sentence.',
          },
          {
            sideHeading: '5. Stemming and Lemmatization',
            description: 'Both phases strip inflectional endings to normalize word forms:',
            subGroups: [
              {
                sideHeading: 'Stemming (Heuristic Rule-Based — Porter Stemmer)',
                description:
                  'A heuristic process that chops off word suffixes; fast and compact, though stems may not be valid dictionary words.',
                example:
                  'Porter stemmer outputs: `"Search engine are the most visible inform retrieval application"`.',
              },
              {
                sideHeading: 'Lemmatization (Dictionary & Morphological Analysis — WordNet)',
                description:
                  'Uses vocabularies and morphological dictionaries to return the valid base dictionary word (`lemma`).',
                example:
                  'WordNet lemmatizer outputs: `"Search engine are the most visible information retrieval application"`.',
              },
            ],
          },
          {
            sideHeading: '6. Weighting',
            description:
              'Assigns numerical weights reflecting the descriptive significance of each index term within a document and across the collection.',
            example:
              'Simplest form uses binary weighting (`0` = absent, `1` = present), whereas ranked engines use continuous `TF-IDF` scores.',
          },
        ],
        diagramId: 'indexing-process-flow',
        diagramCaption: 'End-to-End Indexing Process & Six Sequential Text Processing Phases (Document -> Indexing)',
      },
      {
        heading: 'Scope of Indexing (Exhaustivity, Specificity & Conceptual Zone)',
        description:
          'When manual indexing is performed, author and indexer vocabulary domains often differ—producing inconsistent indexing depth unless governed by explicit scope rules.',
        subGroups: [
          {
            sideHeading: 'Factor 1: Exhaustivity',
            description:
              'Measures the extent to which minor or secondary concepts inside an item are indexed (high exhaustivity increases Recall).',
            example:
              'Deciding whether two sentences discussing on-board caches inside a 10-page microprocessor paper deserve an index entry.',
          },
          {
            sideHeading: 'Factor 2: Specificity',
            description:
              'Measures how precise and narrow the chosen index term is (high specificity increases Precision). Indexing only the main concept with overly broad terms yields low exhaustivity and low specificity, causing loss of both Precision and Recall.',
            example:
              'Choosing among broad `"processor"`, mid-level `"microcomputer"`, or exact `"Pentium"`.',
          },
          {
            sideHeading: 'Portion of Item Indexed (Conceptual Zone)',
            description:
              'Determines which document sections get indexed; the simplest policy restricts indexing to the Title and Abstract (Conceptual Zone).',
          },
        ],
      },
      {
        heading: 'Preordination (Precoordination) and Linkages',
        subGroups: [
          {
            sideHeading: '1. Linkages Role',
            description:
              'Determines how many related index terms are explicitly coupled together within one item so unrelated concepts do not cross-match (`false drops`).',
          },
          {
            sideHeading: '2. Preordination (Precoordination — Index-Time)',
            description:
              'Correlates and binds multi-term attributes together at index creation time.',
            example:
              'Linking `"drilling of oil wells in Mexico by CITGO"` separately from `"oil refineries in Peru by the U.S."` so a query cannot wrongly combine `"Mexico"` with `"U.S."`.',
          },
          {
            sideHeading: '3. Post-Coordination (Search-Time)',
            description:
              'Omits index-time coupling and joins independent single terms dynamically at search time using Boolean `AND` intersections.',
          },
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
      {
        label: 'Automatic Indexing Definition',
        text: 'Computerized process of scanning large volumes of documents against a controlled vocabulary, taxonomy, or ontology (or performing Total Document Indexing) to build searchable indexes in seconds.',
      },
    ],
    subSections: [
      {
        heading: 'Classification of Automatic Indexing Approaches',
        subGroups: [
          {
            sideHeading: '1. Output Weighting Classes (Unweighted vs Weighted)',
            subGroups: [
              {
                sideHeading: 'Unweighted Indexing System',
                description:
                  'Stores only whether an index term exists in a document (plus optional word locations) inside the searchable data structure.',
              },
              {
                sideHeading: 'Weighted Indexing System',
                description:
                  'Assigns a numerical value normalized between $0$ and $1$ based on term occurrence frequency and ranks results from highest score to lowest.',
              },
            ],
          },
          {
            sideHeading: '2. Indexing by Term',
            description:
              'Uses processing tokens (vocabulary) extracted directly from the original item as the basis of the indexing process via two major techniques:',
            subGroups: [
              {
                sideHeading: 'Statistical Approaches',
                description:
                  'Calculates term weights using word occurrence frequencies across vector and probabilistic models:',
                subGroups: [
                  {
                    sideHeading: 'Vectorised Information System (SMART Model)',
                    description:
                      'Represents every document as a fixed-order vector where each slot corresponds to a unique database processing token (`0` = absent, positive value = term weight); retrieval computes distance between query vector and document vector.',
                  },
                  {
                    sideHeading: 'Probabilistic & Two-Level Bayesian Network Approach',
                    description:
                      'Uses evidential reasoning over directed graphical networks where nodes are random variables and arcs encode conditional dependencies: query concept nodes $c$ connect to item feature leaf nodes $f$ to compute query-item relevance.',
                    diagramId: 'bayesian-two-level',
                    diagramCaption:
                      'Two-Level Bayesian Inference Network Modeling Query Concept (c1) & Item Features (f11, f12, f1j) (UNIT-II p.9)',
                  },
                ],
              },
              {
                sideHeading: 'Natural Language Approaches (`DR-LINK`)',
                description:
                  'Combines statistical frequencies with deeper syntactic and semantic sentence parsing (`DR-LINK`: Document Retrieval through Linguistic Knowledge) to refine final concept descriptors.',
              },
            ],
          },
          {
            sideHeading: '3. Indexing by Concept (LSI & Neural Networks)',
            description:
              'Determines a canonical set of concepts (`Latent Semantic Indexing / LSI`) from test terms so synonyms map onto shared latent topics:',
            bullets: [
              {
                label: 'Two Neural Networks',
                text: 'One neural network generates stem context vectors capturing word-synonym relationships, while a second neural network executes query matching.',
              },
            ],
          },
          {
            sideHeading: '4. Multimedia Indexing',
            description:
              'Indexes non-textual media (images, video, and audio streams) directly at the raw data level.',
          },
        ],
      },
      {
        heading: 'Information Extraction (IE) & Document Summarization',
        subGroups: [
          {
            sideHeading: '1. Two Processes Associated with Information Extraction',
            bullets: [
              {
                label: 'Process 1 — Structured Fact Extraction (Automatic File Build)',
                text: 'Determines concrete facts from text to populate structured database fields (`AFB`).',
              },
              {
                label: 'Process 2 — Representative Text Extraction',
                text: 'Extracts concise passages used to summarize an item.',
              },
            ],
          },
          {
            sideHeading: '2. Four Evaluation Metrics for Information Extraction',
            description: 'Applicable to both human and automated extraction systems:',
            bullets: [
              {
                label: 'Recall',
                text: 'Correct and relevant facts extracted relative to all correct relevant facts present in the item.',
              },
              {
                label: 'Precision',
                text: 'Correct facts extracted accurately relative to total facts extracted.',
              },
              {
                label: 'Over-generation',
                text: 'Measures irrelevant or redundant data extracted due to misapplied templates or non-relevant slot fills.',
              },
              {
                label: 'Fallout',
                text: 'Measures how frequently the system assigns incorrect values to database template slots.',
              },
            ],
          },
          {
            sideHeading: '3. Document Summarization',
            description:
              'Extracts a compact summary preserving an item most important ideas while sharply reducing length (`titles`, `tables of contents`, and especially `abstracts`) so users judge document utility without reading full text.',
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
      {
        label: 'Data Structure Definition',
        text: 'A specialized format for organizing, processing, retrieving, and storing data cleanly so retrieval engines understand supported search capabilities.',
      },
      {
        label: 'Two Essential Capabilities',
        text: 'Every IRS search data structure supports:',
        children: [
          '1. Ability to represent underlying document concepts.',
          '2. Support for locating those concepts efficiently.',
        ],
      },
    ],
    subSections: [
      {
        heading: 'Introduction to Data Structures in an IRS',
        subGroups: [
          {
            sideHeading: '1. Two Major IRS Data Structures',
            bullets: [
              {
                label: 'Document Manager (`Original Document File`)',
                text: 'Stores, tracks versions, manages, and retrieves incoming digital items in their standardized Item Normalization format.',
              },
              {
                label: 'Document Search Manager (`Searchable Data Structure`)',
                text: 'Contains processing tokens and metadata supporting rapid search across text, images, and audio; returns matching item references back to the Document Manager.',
              },
            ],
          },
          {
            sideHeading: '2. Core Ingestion & Storage Stages',
            bullets: [
              {
                label: 'Item Normalization',
                text: 'Converts incoming items into a uniform system-understandable format regardless of user keyword variations.',
              },
              {
                label: 'Document File Creation',
                text: 'Defines the text or binary storage format persisting normalized documents cleanly on storage media.',
              },
            ],
          },
          {
            sideHeading: '3. Processing Tokens (Three Input Symbol Classes)',
            bullets: [
              {
                label: 'Valid Word Symbols',
                text: 'Searchable alphabets, numbers, and permitted word characters.',
              },
              {
                label: 'Inter-Word Symbols',
                text: 'Non-searchable delimiter characters such as blanks and semicolons (`;`).',
              },
              {
                label: 'Special Processing Symbols',
                text: 'Context-dependent punctuation characters such as the hyphen (`-`).',
              },
            ],
          },
        ],
        diagramId: 'major-data-structures',
        diagramCaption: 'IRS Major Data Structure Split (Document Manager vs Search Manager) + Successor Variety Tree',
      },
      {
        heading: 'Stemming Algorithms & Variations',
        description:
          'Introduced in the 1960s, stemming trims prefixes and suffixes (`cutting and trimming`) to reduce unique vocabulary size, conserve system resources, and improve retrieval efficiency.',
        bullets: [
          {
            label: 'Five Key Effects of Stemming',
            text: 'Conflates word variants (`Conflation`), reduces vocabulary diversity, increases search efficiency, increases Recall, and slightly reduces Precision (`risk of over-stemming`).',
          },
        ],
        subGroups: [
          {
            sideHeading: '1. Table Lookup Stemming',
            description:
              'Stores every inflected word form paired directly with its base stem inside large static lookup tables (e.g., `RetrievalWare`).',
          },
          {
            sideHeading: '2. Porter Stemming Algorithm',
            description:
              'Applies an iterative cascade of suffix-stripping condition-action rules governed by word stem measure and affix flags:',
            subGroups: [
              {
                sideHeading: 'Stem Measure $M$ Formula',
                description:
                  'Counts sequences of vowels `(A, E, I, O, U, Y)` followed by consonants in $C(VC)^M V$ (initial $C$ and final $V$ optional).',
              },
              {
                sideHeading: 'Condition Flags & Wildcards',
                bullets: [
                  '`*<X>` — stem ends with letter `X`',
                  '`*V*` — stem contains a vowel',
                  '`*d` — stem ends with a double consonant',
                ],
              },
            ],
          },
          {
            sideHeading: '3. Dictionary Stemming (`K-Stemming` in INQUERY)',
            description:
              'Combines iterative suffix/prefix stripping rules with NLP morphological dictionaries so words with different meanings never collapse wrongly (`"British" -> "Britain"`).',
            subGroups: [
              {
                sideHeading: 'Six Major Data Files Used by K-Stemming',
                bullets: [
                  {
                    label: '1. Dictionary of Words',
                    text: 'Core canonical root vocabulary verified before accepting any stem.',
                  },
                  {
                    label: '2. Supplement of Words',
                    text: 'Additional technical/domain words absent from the core dictionary.',
                  },
                  {
                    label: '3. Exceptions List',
                    text: 'Words that selectively retain a trailing `-e` (`"Suites" -> "suite"`, whereas `"suited" -> "suit"`).',
                  },
                  {
                    label: '4. Direct-Conflation List',
                    text: 'Explicit irregular word pairs overriding standard stemming rules directly.',
                  },
                  {
                    label: '5. Country-Nationality List',
                    text: 'Maps nationalities and demonyms to country names (`"British" -> "Britain"`).',
                  },
                  {
                    label: '6. Proper Nouns List',
                    text: 'Proper names protected from algorithmic suffix stripping.',
                  },
                ],
              },
            ],
          },
          {
            sideHeading: '4. Successor Variety Stemming',
            description:
              'Constructs a prefix/suffix symbol tree over vocabulary words (e.g., `{bag, barn, bring, box, bottle}`) and counts distinct successor letters at each node to find morpheme cuts.',
            subGroups: [
              {
                sideHeading: 'Three Morpheme Segmentation Methods',
                bullets: [
                  '1. Cutoff method',
                  '2. Peak & Plateau method',
                  '3. Complete Word method',
                ],
              },
            ],
          },
          {
            sideHeading: '5. N-Gram Stemmers',
            description:
              'Decomposes words into overlapping fixed-length character windows (bigrams/trigrams) and conflates similar words via Dice Similarity without language-specific rules.',
          },
          {
            sideHeading: 'Conclusion on Stemming',
            description:
              'Depends on corpus vocabulary, performs as effectively as manual conflation, and consistently yields positive net Recall improvements.',
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
      'Five Features (Precision, Zoning, Ranking, Concepts/Relationships, NLP)',
      'Query Execution, Sorting & Storage Overhead',
    ],
    summaryLine:
      'An **Inverted File Structure** maps every unique vocabulary term inside a **Dictionary** directly to its sorted list of containing **Document IDs** inside **Inversion (Posting) Lists** for sub-second lookup.',
    bullets: [
      {
        label: 'Role in DBMS & IRS',
        text: 'The most common searchable data structure used across both Database Management Systems and Information Retrieval Systems because it resolves term queries without scanning raw documents.',
      },
    ],
    subSections: [
      {
        heading: 'Three Basic Components of an Inverted File Structure',
        subGroups: [
          {
            sideHeading: '1. Document File',
            description:
              'Stores the complete processed documents and archival document metadata.',
          },
          {
            sideHeading: '2. Dictionary',
            description:
              'Maintains all sorted unique processing tokens alongside document frequencies (`DF`) and pointers—typically stored in RAM as a B-tree, Sorted Array, or Hash Table.',
          },
          {
            sideHeading: '3. Inversion Lists (Posting Lists)',
            description:
              'Stores sorted Document IDs (`plus term weights, zone IDs, and word offsets`) for every term in the Dictionary, delivering optimal performance across large databases and representing concepts and relationships.',
          },
        ],
      },
      {
        heading: 'Five Features of Inverted Files',
        bullets: [
          {
            label: '1. Increases Precision',
            text: 'Supports retrieving top-ranked documents that are mostly relevant by prioritizing matched query concepts.',
          },
          {
            label: '2. Zoning Used',
            text: 'Stores logical subsetting zone offsets (`Title, Author, Abstract`) to restrict search to specific fields.',
          },
          {
            label: '3. Ranking Used',
            text: 'Stores term occurrence weights so hits are sorted across documents, PDFs, and Word files.',
          },
          {
            label: '4. Stores Concepts & Relationships',
            text: 'Maintains concept linkages and structured relationships bridging DBMS and IRS layers.',
          },
          {
            label: '5. NLP Integration',
            text: 'Encodes Natural Language Processing annotations such as phrase relations and sentiment cues (`Happy / Sad`).',
          },
        ],
      },
      {
        heading: 'Query Execution & Storage Trade-off',
        bullets: [
          {
            label: 'Sub-Second Lookup Complexity',
            text: 'Resolves queries in $O(\\log |V| + |\\text{postings}|)$ time by looking up terms in the Dictionary and intersecting or unioning Inversion Lists.',
          },
          {
            label: 'Storage & Update Overhead',
            text: 'Consumes **50%–70% extra storage overhead** relative to raw text and requires costly list merging when new documents arrive.',
          },
        ],
      },
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
      'Specializations & Maximum Segments Formula (MAX Seg_n = λ^n)',
      'Worked Examples (Seacoal/Colony, Retail Trigrams)',
      'Origins (WWII Cryptography), Spelling Correction, Language ID & Limits',
    ],
    summaryLine:
      '**N-Gram Data Structures** slice input words or continuous character streams into overlapping fixed-length substrings of length $n$, giving strong resilience against **misspellings, OCR errors, and morphology differences**.',
    bullets: [
      {
        label: 'Definition of N-Gram',
        text: 'A fixed-length consecutive sequence of $n$ characters extracted across words or continuous data streams—serving as both a unique searchable data structure and a language-independent conflation/stemming technique.',
      },
    ],
    subSections: [
      {
        heading: 'Specializations & Key Properties of N-Grams',
        bullets: [
          {
            label: '1. Special Data Structure',
            text: 'Maps continuous text systematically into fixed-size substrings stored in bit-vectors, inverted lists, or hash tables.',
          },
          {
            label: '2. Ignore Words',
            text: 'Can ignore boundary words/sentences or terms occurring only once or twice.',
          },
          {
            label: '3. Input as Continuous Data',
            text: 'Processes character streams in systematic sequential order.',
          },
          {
            label: '4. N-Gram vs Trigram Sizing',
            text: 'An $n$-gram extracts $n$-length substrings; a Bigram uses $n=2$ letters and a Trigram uses $n=3$ letters bounded by $\\text{MAX Seg}_n = \\lambda^n$ (`e.g. 27^2 = 729 bigrams, 27^3 = 19,683 trigrams`).',
          },
        ],
      },
      {
        heading: 'Worked N-Gram Examples (No Inter-Word vs Inter-Word `#`)',
        subGroups: [
          {
            sideHeading: '1. Bigrams ($n=2$, No Inter-Word Symbols)',
            description: 'Slices strictly inside valid words without boundary markers:',
            example: '`Se ea` and `Col ol lo on ny`',
          },
          {
            sideHeading: '2. Trigrams ($n=3$, With Inter-Word Boundary `#`)',
            description: 'Includes inter-word separator `#` to retain word-boundary context:',
            example: '`#sea` `#colo` `olon` `lon#` `long#` and `"Retail" -> ret, eta, tai, ail`',
          },
        ],
      },
      {
        heading: 'Historical Origins, Applications & Limitations',
        subGroups: [
          {
            sideHeading: 'Origins & Core Advantages',
            bullets: [
              {
                label: 'WWII Cryptography Origin',
                text: 'First applied by World War II cryptographers for statistical cipher analysis.',
              },
              {
                label: 'Spelling Error Detection & Correction',
                text: 'Trigrams reliably match and correct misspelled or OCR-corrupted words.',
              },
              {
                label: 'Language Identification & Keyboard Prediction',
                text: 'N-gram frequency signatures identify document language and power mobile predictive keyboards (`Gboard`).',
              },
              {
                label: 'Bounded Token Optimization',
                text: 'Fixed $n$-character token bounds enable predictable, optimized query mapping.',
              },
            ],
          },
          {
            sideHeading: 'Key Limitations',
            bullets: [
              {
                label: 'No Semantic Meaning',
                text: 'An individual $n$-gram is only a character fragment and carries no standalone semantic concept.',
              },
              {
                label: 'Poor Concept Representation & Long N-Gram Sparsity',
                text: 'Longer $n$-grams degrade retrieval precision, making $n$-grams weak for conceptual relationships.',
              },
            ],
          },
        ],
      },
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
      {
        label: 'Continuous Text Addressing',
        text: 'Like N-grams with inter-word symbols, a PAT structure (`PAT Tree` or `PAT Array`) indexes a continuous text stream directly rather than isolated pre-split words.',
      },
    ],
    subSections: [
      {
        heading: '1. Semi-Infinite Strings (Sistrings)',
        description:
          'Every chosen anchor position in the input text defines a unique Sistring starting at that character position and extending all the way to the end of the text.',
        example:
          'For `"Economics for Warsaw is Complex"`: `Sistring 1 = "Economics for Warsaw is Complex"`, `Sistring 2 = "conomics for Warsaw is Complex"`, `Sistring 4 = "onomics for Warsaw is Complex"`, `Sistring 9 = "for Warsaw is Complex"`, down to `Sistring 25 = "ex"`.',
      },
      {
        heading: '2. PAT Binary Radix Tree Structure',
        bullets: [
          {
            label: 'Unbalanced Binary Digital Tree',
            text: 'Defined over the binary bit representation of all unique sistrings.',
          },
          {
            label: 'Bit-Position Branching Rule',
            text: 'Each internal node specifies which bit position to test: `0` branches left and `1` branches right (`skipping redundant single-child nodes`).',
          },
          {
            label: 'Exact Node Bounds',
            text: 'All sistring key values reside at external leaf nodes; indexing $n$ sistrings creates exactly **$n$ leaf nodes** and at most **$n - 1$ internal nodes**.',
          },
        ],
      },
      {
        heading: '3. PAT Array & Supported Queries',
        bullets: [
          {
            label: 'PAT Array',
            text: 'Stores sorted sistring pointers contiguously in a flat array, eliminating tree pointer overhead while preserving $O(\\log n)$ binary search.',
          },
          {
            label: 'Superior Query Capabilities',
            text: 'Because sistrings remain logically sorted lexicographically, PAT structures excel at prefix queries (`comp*`), range searches, longest-match queries, and contiguous phrase detection—outperforming standard inverted files on substrings.',
          },
        ],
      },
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
      {
        label: 'Primary Goal',
        text: 'Provides a fast first-pass filter that eliminates the majority of query-unrelated items using compressed, unordered bit signatures requiring far less space (`10%–20% overhead`) than an inverted file.',
      },
    ],
    subSections: [
      {
        heading: '1. Superimposed Coding & False Drops',
        bullets: [
          {
            label: 'Word & Block Signatures',
            text: 'Each word in a document block hashes into an $m$-bit word signature with $k$ `1`-bits; all word signatures are bitwise ORed into one Block Signature ($B$).',
          },
          {
            label: 'Query Matching Condition',
            text: 'A block matches query signature $Q$ when `(B AND Q) = Q`.',
          },
          {
            label: 'Zero False Negatives & False Drops',
            text: 'Guaranteed never to miss true matches, though hash collisions occasionally produce False Drops verified against the Document File.',
          },
        ],
      },
      {
        heading: '2. Dynamic Operations & Linear Scan Performance',
        bullets: [
          {
            label: 'Fast Append (Concatenation)',
            text: 'Newly arriving items are appended directly to the end of the signature file without rebuilding existing indexes.',
          },
          {
            label: 'Logical Deletion',
            text: 'Deleted records stay physically in place and are marked with a deleted flag.',
          },
          {
            label: 'Linear Search Latency',
            text: 'Checking compressed signatures performs a sequential scan whose response time grows linearly with file size.',
          },
        ],
      },
      {
        heading: '3. Storage Organizations (SSF vs BSSF) & Applications',
        subGroups: [
          {
            sideHeading: 'Sequential Signature File (SSF) vs Bit-Sliced Signature File (BSSF)',
            bullets: [
              {
                label: 'Sequential Signature File (SSF)',
                text: 'Stores block signatures contiguously row-by-row.',
              },
              {
                label: 'Bit-Sliced Signature File (BSSF)',
                text: 'Stores bit positions vertically column-by-column so queries scan only the $k$ slices where query bits are `1`.',
              },
            ],
          },
          {
            sideHeading: 'Key Applications & Advantages',
            bullets: [
              'Medium-sized databases',
              'Databases with low frequency of terms',
              'WORM (Write-Once-Read-Many) archival storage devices',
              'Parallel processing machines and distributed environments',
            ],
          },
        ],
      },
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
      {
        label: 'Web-Era Data Representation',
        text: 'Exponential Internet growth introduced non-linear linked structures (`Hypertext / HTML`) and hierarchical semantic markup (`XML`) alongside probabilistic sequence models (`HMMs`).',
      },
    ],
    subSections: [
      {
        heading: '1. Hypertext & HTML Data Structures',
        bullets: [
          {
            label: 'Nodes, Links & Viewers',
            text: 'Hypertext allows one item to reference another via an embedded pointer: each separate item is a **Node**, the pointer is a **Link**, and each node renders via a file-type-specific viewer.',
          },
          {
            label: 'HTML Formatting Tags',
            text: 'HTML defines internal structure for World Wide Web documents using angle-bracket structural tags (`<title>`, `<strong>`).',
          },
        ],
      },
      {
        heading: '2. XML Data Structure',
        bullets: [
          {
            label: 'Fine-Grained Semantic Zoning',
            text: 'Both HTML and XML describe text subsets similarly to logical zoning, with XML separating semantic structure from presentation.',
          },
          {
            label: 'Core XML Standards',
            text: 'Defined and transformed formally through **DTD** (Document Type Definition), **DOM** (Document Object Model), and **XSL** (Extensible Stylesheet Language).',
          },
        ],
      },
      {
        heading: '3. Hidden Markov Models (HMMs) in Information Retrieval',
        subGroups: [
          {
            sideHeading: 'Markov Chain & Noisy Channel Paradigm',
            bullets: [
              {
                label: 'Query Chain Process',
                text: 'Models search as a stochastic state chain where the output of one transition feeds the next ($Q_1 \\to Q_2 \\to \\dots \\to Q_n$).',
              },
              {
                label: 'Noisy Channel Interpretation',
                text: 'Relevant documents act as unknown hidden keys passing via state transitions through a noisy channel—representing the vocabulary mismatch between the author phrasing and the user query—to emit observed query terms.',
              },
            ],
          },
          {
            sideHeading: 'Bayes Conditional Rule & Core Algorithms',
            bullets: [
              {
                label: 'Bayesian Formulation',
                text: 'Applies Bayes rule $P(A \\mid B) = \\frac{P(B \\mid A)P(A)}{P(B)}$ over model tuple $\\lambda = (S, O, A, B, \\pi)$.',
              },
              {
                label: 'Standard HMM Algorithms',
                text: 'Evaluates, decodes, and trains parameters via **Forward-Backward**, **Viterbi decoding**, and **Baum-Welch**.',
              },
            ],
          },
          {
            sideHeading: 'Disadvantages of HMMs',
            description:
              'The primary challenge is accurately estimating the **Transition Probability Matrix** and **Output Emission Distribution** for every document—requiring a large query-relevance training corpus solved iteratively via **Estimation-Maximization (EM) algorithms**.',
          },
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
