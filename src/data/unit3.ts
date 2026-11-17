import { LessonTopic } from '@/types/course';

export const UNIT3_TOPICS: LessonTopic[] = [
  {
    id: 'u3-classes-automatic-indexing',
    shortTitle: 'Classes of Automatic Indexing',
    unit: 'unit3',
    order: 1,
    title: 'Classes of Automatic Indexing',
    subtopicsCovered: [
      'Automatic Indexing Definition & Four Indexing Classes',
      'Weighted vs Unweighted Indexing Schemes',
      'Seven Sequential Processing Stages (Data Flow in IRS — UNIT-III p.2)',
    ],
    summaryLine:
      '**Automatic Indexing** classifies algorithmic representation strategies into **Weighted vs Unweighted** schemes spanning four major classes—**Statistical**, **Natural Language Processing**, **Concept**, and **Hypertext Linkage** indexing—executed across **seven pipeline stages**.',
    bullets: [
      '**Automatic Indexing** analyzes every arriving item algorithmically to extract permanent index representations and construct searchable data structures alongside the **Document File**.',
      '**An Index** is the internal searchable data structure specifically designed and built to execute the chosen search strategy.',
      '**Weighted vs Unweighted Output:** Binary unweighted indexing records only `0` or `1` term presence per item, whereas weighted indexing stores continuous relevance values used to sort ranked results.',
      '**Statistical strategies** cover the broadest spectrum of indexing techniques and remain the most prevalent across real commercial IRS products.',
    ],
    subSections: [
      {
        heading: 'Seven Processing Modules in Automatic Indexing (UNIT-III p.2–4)',
        bullets: [
          'All automatic indexing systems begin with input standardization, zoning, and token identification before branching into **Statistical**, **Natural Language**, or **Concept** index builders.',
        ],
        subGroups: [
          {
            sideHeading: '1. Standardize Input & 2. Logical Subsetting (Zoning)',
            bullets: [
              '**Standardize Input** translates diverse incoming file formats and encodings into the canonical internal format acceptable to the indexing engine.',
              '**Logical Subsetting (Zoning)** splits each item into meaningful named sections (`Title, Author, Abstract, Main Text, Conclusion, References, Country, Keyword`) to improve precision and selective display.',
            ],
          },
          {
            sideHeading: '3. Identify Processing Tokens (Three Symbol Classes)',
            bullets: [
              '**Valid Word Symbols** match searchable alphabetic characters and numeric digits.',
              '**Inter-word Symbols** identify non-searchable boundary characters including whitespace blanks, periods, and semicolons.',
              '**Special Processing Symbols** regulate context-sensitive punctuation characters such as the hyphen (`-`).',
            ],
          },
          {
            sideHeading: '4. Stop Algorithm & 5. Characterize Tokens',
            bullets: [
              '**Stop Algorithm** discards ultra-frequent or semantically weak processing tokens prior to indexing to save memory and search execution cycles.',
              '**Characterize Tokens** determines specialized lexical metadata including **Word Sense Disambiguation (WSD)**, **Part-of-Speech (POS)** tags, uppercase proper names/acronyms, numbers, and dates.',
            ],
          },
          {
            sideHeading: '6. Stemming Algorithm & 7. Create Searchable Data Structure',
            bullets: [
              '**Stemming Algorithm** trims morphological suffixes and prefixes consistently to collapse related word forms while preserving phrase and grammar integrity.',
              '**Create Searchable Data Structure** outputs the internal machine representation (`never displayed directly to users`) storing semantic index concepts that bound what queries can retrieve.',
            ],
          },
        ],
        diagramId: 'auto-index-dataflow',
        diagramCaption: 'Data Flow in an Automatic Information Processing System (IRS UNIT-III NOTES p.2)',
      },
      {
        heading: 'Four Major Classes of Automatic Indexing',
        bullets: [
          '**Class 1 — Statistical Indexing:** Applies word/phrase frequency distributions, log-odds probabilities, vectors, or neural weights to score item relevance.',
          '**Class 2 — Natural Language Processing (NLP):** Executes syntactic and semantic parsing to extract unambiguous compound index phrases and discourse relations.',
          '**Class 3 — Concept Indexing:** Projects synonymous surface words onto shared abstract concept dimensions using covariance or neural context vectors.',
          '**Class 4 — Hypertext Linkages:** Captures manual or automatic directional node pointers and anchor contexts linking cross-referenced items.',
        ],
      },
    ],
    table: {
      caption: 'Taxonomy of Automatic Indexing Classes',
      headers: ['Indexing Class', 'Primary Mechanism', 'Best Strength'],
      rows: [
        ['Statistical Indexing', 'Word frequencies, probability log-odds, vector & neural weights', 'Fast, domain-independent ranked retrieval'],
        ['Natural Language (NLP)', 'POS tagging, syntactic phrases, semantic disambiguation', 'Resolves homographs and extracts multi-word noun phrases'],
        ['Concept Indexing (LSI)', 'Maps co-occurring words into latent semantic concept dimensions', 'Overcomes synonym mismatch across queries and docs'],
        ['Hypertext Linkages', 'Tracks anchor text and inter-node cross-reference link weights', 'Captures web/graph citation authority and context'],
      ],
      highlightRows: [0, 2],
    },
    keyTakeaway:
      'Break the **Automatic Indexing Data Flow** cleanly into its **7 stages**, state **Weighted vs Unweighted**, and compare all **4 classes (`Statistical, NLP, Concept, Hypertext`)**.',
  },
  {
    id: 'u3-statistical-indexing',
    shortTitle: 'Statistical Indexing & Weighting Models',
    unit: 'unit3',
    order: 2,
    title: 'Statistical Indexing (Probabilistic, Vector, Signal, Bayesian & Neural)',
    subtopicsCovered: [
      'Document Frequency (DF) & Term Frequency (TF)',
      'Probabilistic Weighting (PRP, Hypothesis, Plausible Corollary & Log-Odds)',
      'Vector Weighting (Binary vs Weighted, IDF, TF-IDF, Signal Weighting & Discrimination Value)',
      'Bayesian Belief Model & Neural Network Model',
    ],
    summaryLine:
      '**Statistical Indexing** models token event frequencies (**TF & DF**) across **Probabilistic**, **Vector (TF-IDF, Signal, Discrimination)**, **Bayesian**, and **Neural Network** weighting frameworks to rank relevance.',
    bullets: [
      '**Statistical Indexing** uses occurrence frequencies of processing tokens (`words and phrases`) inside individual documents and across the database to calculate scalar relevance scores after initial Boolean filtering (**Hit File Ranking**).',
      'Two fundamental statistics drive weighting: **Document Frequency ($DF$)** (`tracks which database documents contain a term`) and **Term Frequency ($TF$)** (`counts occurrences of a term inside one item`).',
    ],
    subSections: [
      {
        heading: '1. Probabilistic Weighting (Probability Ranking Principle)',
        bullets: [
          'The **Probabilistic Approach** applies formal mathematical probability theory directly to estimate query-document relevance.',
        ],
        subGroups: [
          {
            sideHeading: 'Probability Ranking Principle (PRP), Hypothesis & Plausible Corollary',
            bullets: [
              'The **Probability Ranking Principle (PRP)** demonstrates that best retrieval performance is achieved when items are ordered strictly by descending probability of relevance.',
              '**Technique 1 — Hypothesis:** Maintains ranked word-occurrence probability estimates tailored to retrieval hit lists.',
              '**Technique 2 — Plausible Corollary:** Applies standard statistics to integrate invariant probabilistic relevance scores seamlessly across distributed databases via **Log-Odds Summation**.',
            ],
            formulas: [
              {
                label: 'Probabilistic Log-Odds Weighting',
                tex: '\\log O(R \\mid Q_i, D_j, t_k) = C_0 + C_1 V_1 + C_2 V_2 + \\dots + C_n V_n',
                note: 'Log-odds that query $Q_i$ matches document $D_j$ equals the linear sum of log-odds weights across shared terms.',
              },
            ],
          },
        ],
      },
      {
        heading: '2. Vector Weighting (SMART Model, TF-IDF, Signal & Discrimination Value)',
        bullets: [
          'Pioneered in Salton **SMART System** at Cornell University, **Vector Weighting** represents every document as a fixed one-dimensional coordinate vector over every vocabulary processing token.',
        ],
        subGroups: [
          {
            sideHeading: 'Binary Vectors vs Real-Weighted Vectors & IDF / TF-IDF',
            bullets: [
              '**Binary Approach:** Every vector position holds only `1` (token present in document) or `0` (token absent).',
              '**Weighted Approach:** Every position stores a continuous positive real weight computed via **TF-IDF**, multiplying term repetition by rare-term specificity ($IDF_k$).',
              'Limitations of pure vector models include discarding word order, assuming independent terms, and treating synonyms as zero-overlap orthogonal axes.',
            ],
            formulas: [
              {
                label: 'IDF & TF-IDF Weighting',
                tex: 'IDF_k = \\log_2\\!\\left(\\frac{N}{DF_k}\\right) + 1 \\qquad W_{i,k} = TF_{i,k} \\times \\log_2\\!\\left(\\frac{N}{DF_k}\\right)',
                note: '$N$ = total items in collection; $DF_k$ = documents containing term $k$; $TF_{i,k}$ = count of term $k$ inside item $i$.',
              },
            ],
          },
          {
            sideHeading: 'Shannon Signal Weighting (SAW vs DRILL) & Salton Discrimination Value',
            bullets: [
              '**Signal Weighting** uses Shannon Entropy to reward terms concentrated heavily inside a small group of relevant documents (`DRILL = [2,2,18,10,18]`) over uniformly spread terms (`SAW = [10,10,10,10,10]`).',
              '**Discrimination Value ($DISCRIM_i$)** measures how much removing term $i$ collapses average pairwise document similarity; positive values confirm term $i$ separates documents effectively.',
            ],
            formulas: [
              {
                label: 'Shannon Information & Signal Weighting ($SAW$ vs $DRILL$)',
                tex: '\\text{AveInfo}_k = -\\sum_{i=1}^{N} \\frac{TF_{i,k}}{\\text{TotFreq}_k} \\log_2\\!\\left(\\frac{TF_{i,k}}{\\text{TotFreq}_k}\\right) \\qquad \\text{Signal}_k = \\log_2(\\text{TotFreq}_k) - \\text{AveInfo}_k',
                note: 'Non-uniform terms (`DRILL`) exhibit lower entropy $\\text{AveInfo}_k$ and therefore earn much higher **Signal Weight** than flat `SAW`.',
              },
              {
                label: 'Salton & Yang Discrimination Value',
                tex: '\\text{DISCRIM}_i = \\text{AVESIM}_i - \\text{AVESIM}',
                note: 'If deleting term $i$ makes documents look closer together ($\\text{AVESIM}_i > \\text{AVESIM}$), $DISCRIM_i > 0$ marks a strong discriminator.',
              },
            ],
          },
        ],
      },
      {
        heading: '3. Bayesian Model & Neural Network Model',
        bullets: [
          'Two advanced statistical inference frameworks extend vector weighting to handle uncertainty and dynamic concept grouping.',
        ],
        subGroups: [
          {
            sideHeading: 'Bayesian Model (Conditional Evidential Reasoning)',
            bullets: [
              '**Bayesian Weighting** overcomes rigid vector assumptions by modeling conditional probabilistic dependencies over graphical belief networks.',
              'Rather than computing fragile absolute probabilities, the Bayesian model generates reliable **relative confidence scores** ordering matching documents cleanly.',
            ],
          },
          {
            sideHeading: 'Neural Network Model (Dynamic Concept Learning)',
            bullets: [
              '**Neural Network Models** operate as dynamic weighted adaptive graphs linking **Input Query Tokens**, **Hidden Concept Class Layers**, and **Output Document Nodes**.',
              'By learning domain-specific term correlations iteratively, neural models capture non-linear concept hierarchies and substantially **improve Recall**.',
            ],
          },
        ],
      },
    ],
    diagramId: 'statistical-indexing-tree',
    diagramCaption: 'Hierarchy of Statistical Indexing Approaches (IRS UNIT-III NOTES p.6)',
    keyTakeaway:
      'Include ALL four formula blocks (**Log-Odds, $TF\\text{-}IDF$, Signal Weighting `SAW/DRILL`, and Discrimination Value**) alongside explicit side-blocks for **Bayesian** and **Neural Network** models.',
  },
  {
    id: 'u3-natural-language-indexing',
    shortTitle: 'Natural Language Indexing (NLP)',
    unit: 'unit3',
    order: 3,
    title: 'Natural Language Processing (NLP) in Indexing',
    subtopicsCovered: [
      'Goals of NLP Indexing (Sentiment, Semantics, Phrase Generation, Precision)',
      'Five Levels of Natural Language Processing & DR-LINK System',
      'Statistical Proximity & Cohesion Factor Phrase Extraction',
      'Thematic Representations & False-Hit Overhead Reduction',
    ],
    summaryLine:
      '**Natural Language Indexing** fuses semantic sentence structure, grammar roles, and statistical **Cohesion** to construct unambiguous compound **Index Phrases** and higher-level **Thematic Representations**, boosting **Precision**.',
    bullets: [
      '**Natural Language Processing (NLP)** interprets context, logical sentence grammar, and user opinions/attitudes (`"Happy or sad"`, `"Good or Bad"`) alongside token statistics to enhance indexing quality.',
      'Rather than treating words as isolated bag-of-words tokens, NLP indexing resolves homographs (`river bank vs savings bank`) and minimizes **False Hits**, sharply **improving Precision**.',
      'NLP systems combine related phrase components upward into higher-level semantic abstractions known as **Thematic Representations**.',
    ],
    subSections: [
      {
        heading: 'Five Linguistic Processing Levels & The DR-LINK System',
        bullets: [
          'Full-text semantic indexers step progressively through **five linguistic levels** (`exemplified cleanly in the DR-LINK retrieval architecture`).',
        ],
        subGroups: [
          {
            sideHeading: '1. Morphological & 2. Lexical / POS Processing',
            bullets: [
              '**Morphological Level** reduces inflected words to root lemmas alongside grammatical tense and number attributes.',
              '**Lexical Level** assigns exact **Part-of-Speech (POS)** tags (`Noun vs Verb`) using local sentence cues (`"book a ticket" vs "read a book"`).',
            ],
          },
          {
            sideHeading: '3. Syntactic Processing (Index Phrase Generation)',
            bullets: [
              '**Syntactic Parsing** constructs grammatical dependency trees capturing subject-verb-object relations and valid multi-word **Compound Noun Phrases** (`expert systems`).',
            ],
          },
          {
            sideHeading: '4. Semantic & 5. Discourse Processing (plus DR-LINK)',
            bullets: [
              '**Semantic Level** disambiguates word senses and entity roles using **selectional restrictions** and lexical ontologies.',
              '**Discourse Level** links pronouns (`he, it, they`) back to true antecedent nouns across neighboring sentences.',
              '**DR-LINK System** unifies **Lexical Sub-components**, **Conceptual Relations**, **Subject Field Codes**, and **Syntactic Phrases** directly for high-precision text retrieval.',
            ],
          },
        ],
      },
      {
        heading: 'Statistical Proximity & Cohesion Factor Phrase Detection',
        bullets: [
          'Earlier statistical phrase engines quantified inter-word proximity across collections via Salton **Cohesion Factor**, identifying strongly co-occurring term pairs (`Term k, Term h`) to form focused multi-word index phrases that reduce non-relevant user overhead.',
        ],
        formulas: [
          {
            label: 'Cohesion Factor Between Co-Occurring Phrase Terms',
            tex: '\\text{Cohesion}(k, h) = \\text{SizeFactor} \\times \\frac{\\text{PAIR-FREQ}_{k,h}}{\\text{TOTF}_k \\times \\text{TOTF}_h}',
            note: '$\\text{PAIR-FREQ}_{k,h}$ is total collection co-occurrence count of terms $k$ and $h$ together; $\\text{TOTF}_k, \\text{TOTF}_h$ are individual totals scaled by vocabulary $\\text{SizeFactor}$.',
          },
        ],
      },
    ],
    table: {
      caption: 'Five NLP Processing Stages in IRS Indexing',
      headers: ['Linguistic Stage', 'Core Task Performed', 'Concrete IR Example'],
      rows: [
        ['Morphological', 'Strip affixes into base root + tense tags', 'computing → compute (Verb / Participle)'],
        ['Lexical / POS', 'Tag grammatical word category using local context', '"book" tagged as Verb vs Noun'],
        ['Syntactic', 'Parse noun phrases & grammatical dependencies', 'Preserves "information retrieval" as 1 phrase'],
        ['Semantic', 'Disambiguate word sense & entity role', '"Apple" → Fruit vs Technology Company'],
        ['Discourse', 'Resolve pronouns & coreference across sentences', '"The system failed. It crashed." → It = system'],
      ],
      highlightRows: [2, 3],
    },
    keyTakeaway:
      'Step cleanly through all **5 NLP stages + DR-LINK**, include **Thematic Representations**, and write Salton **Cohesion Factor** formula.',
  },
  {
    id: 'u3-concept-indexing-hypertext',
    shortTitle: 'Concept Indexing & Hypertext Linkages',
    unit: 'unit3',
    order: 4,
    title: 'Concept Indexing & Hypertext Linkages',
    subtopicsCovered: [
      'Concept Indexing Goal & Generalization Beyond Words',
      'Latent Semantic Indexing (LSI) & Singular Value Decomposition (SVD)',
      'Neural Network Context Mapping (CONVECTIS / Convection System)',
      'Hypertext Linkage Indexing & Three Internet Discovery Mechanisms',
    ],
    summaryLine:
      '**Concept Indexing** generalizes surface terms into abstract latent **Concept Classes** via **LSI / SVD** and **Neural Networks (`CONVECTIS`)**, while **Hypertext Linkage Indexing** adds cross-document virtual concept threads.',
    bullets: [
      '**Concept Indexing** correlates specific words appearing inside an item to canonical domain concepts so synonyms (`car` and `automobile`) match seamlessly and automatically generated concept classes may be statistical dimensions lacking fixed English names.',
      'Mapping from raw words to concepts is inherently many-to-many because a single ambiguous word can participate in multiple distinct concept classes to varying degrees (**elevating Recall cleanly**).',
    ],
    subSections: [
      {
        heading: '1. Concept Indexing Approaches (LSI SVD & CONVECTIS Neural Network)',
        bullets: [
          'Two flagship methodologies automate concept projection from corpus statistics without rigid manual synonym rules.',
        ],
        subGroups: [
          {
            sideHeading: 'Latent Semantic Indexing (LSI) via Singular Value Decomposition',
            bullets: [
              '**LSI** decomposes the sparse term-document matrix $A$ using **Singular Value Decomposition (SVD)** retaining only the top $k$ singular conceptual dimensions.',
              'Low-rank projection folds synonymous words together while filtering accidental statistical noise dimensions cleanly.',
            ],
            formulas: [
              {
                label: 'Singular Value Decomposition (LSI Concept Approximation)',
                tex: 'A_{t \\times d} \\approx U_{t \\times k} \\, \\Sigma_{k \\times k} \\, V_{k \\times d}^T',
                note: '$A$ is raw Term-Document matrix; $U_k$ maps terms to $k$ latent concepts; $\\Sigma_k$ stores singular concept strengths; $V_k^T$ maps documents into $k$-dimensional concept space.',
              },
            ],
          },
          {
            sideHeading: 'CONVECTIS / Convection Neural Network System',
            bullets: [
              'Systems such as **CONVECTIS** apply **Neural Network** algorithms inspired by biological synapses to learn concept weights from co-occurring contextual terms.',
              'Whenever unfamiliar documents or queries arrive, learned neural activations weight concept strength directly across synonymous neighborhoods.',
            ],
          },
        ],
      },
      {
        heading: '2. Hypertext Linkage Indexing & Internet Mechanisms',
        bullets: [
          '**Hypertext Linkage Indexing** adds a brand-new retrieval dimension atop traditional linear text by embedding directional navigation pointers (**virtual threads of concepts**) across interconnected pages.',
        ],
        subGroups: [
          {
            sideHeading: 'Manual vs Automatic Link Generation Types',
            bullets: [
              '**Manual Linkages** rely on authors embedding explicit citation references, footnotes, or conceptual anchor tags directly inside items.',
              '**Automatic Linkages** infer inter-node links algorithmically using **Similarity-Based thresholds**, **Direct Citations**, **Whole–Part Aggregation**, or **Conceptual Association** weighted by anchor text.',
            ],
          },
          {
            sideHeading: 'Three Internet Information Discovery Classes',
            bullets: [
              '**Discovery Mechanism 1 — Manually Generated Indexes:** Consists of expert-curated topical web directories.',
              '**Discovery Mechanism 2 — Automatically Generated Indexes:** Builds inverted keyword structures generated by automated indexers.',
              '**Discovery Mechanism 3 — Web Crawlers (Spider-Bots / Intelligent Agents):** Runs autonomous Internet bots systematically traversing links across the World Wide Web to feed search-engine indexers.',
            ],
          },
        ],
      },
    ],
    diagramId: 'concept-lsi-svd',
    diagramCaption: 'LSI Singular Value Decomposition Projecting Terms & Documents into Latent Concept Space',
    keyTakeaway:
      'Present **LSI ($A \\approx U_k \\Sigma_k V_k^T$)** alongside **Neural CONVECTIS** concept mapping, plus **Hypertext virtual threads** and all **3 Internet discovery classes (`Manual, Automatic, Spider-Bots`)**.',
  },
  {
    id: 'u3-intro-clustering',
    shortTitle: 'Introduction to Clustering (Process & Rules)',
    unit: 'unit3',
    order: 5,
    title: 'Introduction to Document and Term Clustering',
    subtopicsCovered: [
      'Clustering Definition & Van Rijsbergen Cluster Hypothesis',
      'Term Clustering vs Document Clustering',
      'Four-Step Clustering Process (Domain, Attributes, Relationships, Algorithm)',
      'Guidelines on Cluster Class Properties',
    ],
    summaryLine:
      '**Clustering** partitions similar items into cohesive classes so **Term Clustering** constructs **Statistical Thesauri** for query expansion while **Document Clustering** accelerates retrieval via the **Cluster Hypothesis**.',
    bullets: [
      '**Clustering** improves both retrieval effectiveness and search speed by grouping related items into a class under a broader general title alongside optional inter-cluster linkages.',
      'Van Rijsbergen **Cluster Hypothesis** asserts that **closely associated documents tend to be relevant to identical information requests**, allowing whole document clusters to be retrieved rapidly.',
    ],
    subSections: [
      {
        heading: 'Two Fundamental Types of Clustering in IRS',
        bullets: [
          'IRS platforms deploy clustering symmetrically across both index vocabulary terms and full archival documents.',
        ],
        subGroups: [
          {
            sideHeading: '1. Term Clustering (Query Expansion)',
            bullets: [
              'A **Term** may span a single word, multi-word phrase, or paragraph grouped via corpus co-occurrence statistics.',
              '**Term Clustering** generates a **Statistical Thesaurus** expanding user queries with related synonyms to **increase Recall**.',
            ],
          },
          {
            sideHeading: '2. Document Clustering (Result-Set Expansion)',
            bullets: [
              '**Document Clustering** groups full items sharing key index terms or concepts into cohesive topical collections.',
              'Searching clusters retrieves topically related documents similar to an item of interest even when exact query words were omitted (**Resultant Set Expansion**).',
            ],
          },
        ],
      },
      {
        heading: 'Four Core Steps of Clustering & Class Guidelines (UNIT-III p.13–14)',
        bullets: [
          'Constructing high-quality clusters follows four systematic decisions coupled with balanced class design rules.',
        ],
        subGroups: [
          {
            sideHeading: 'Step 1 — Define the Domain & Reduce Noise',
            bullets: [
              'Identify the target topical domain (`such as medical or educational`) and discard noisy items that could corrupt cluster boundaries.',
            ],
          },
          {
            sideHeading: 'Step 2 — Determine Attributes of Clustered Objects',
            bullets: [
              'For **Thesauri**, select exact vocabulary words representing target concepts; for **Documents**, focus on informative item zones (`Title, Abstract`) defining similarity.',
            ],
          },
          {
            sideHeading: 'Step 3 — Determine Inter-Attribute Relationships',
            bullets: [
              'For **Thesauri**, identify synonymous word pairs and association strengths; for **Documents**, apply similarity metrics (**Cosine, Dice, Jaccard**) over shared word co-occurrences.',
            ],
          },
          {
            sideHeading: 'Step 4 — Apply Clustering Algorithm & Class Guidelines',
            bullets: [
              '**Semantic Clarity:** Ensure every generated cluster possesses a clear semantic identity without misleading class labels.',
              '**Balanced Class Magnitude:** Keep cluster sizes roughly within the same order of magnitude so no single giant object dominates a class.',
              '**Multi-Class Policy:** Decide explicitly at cluster creation whether items belong strictly to one class or multiple overlapping classes.',
            ],
          },
        ],
      },
    ],
    table: {
      caption: 'Term Clustering vs Document Clustering',
      headers: ['Feature', 'Term Clustering', 'Document Clustering'],
      rows: [
        ['Objects Grouped', 'Index terms / processing tokens', 'Entire documents / items'],
        ['Similarity Cue', 'Co-occurring inside same documents', 'Sharing overlapping query/index words'],
        ['Primary Artifact', 'Statistical Thesaurus (synonym classes)', 'Topical Document Clusters & Browsing Hierarchy'],
        ['Retrieval Role', 'Query Expansion (Boosts Recall)', 'Resultant Set Expansion & Fast Pruning'],
      ],
      highlightRows: [2, 3],
    },
    keyTakeaway:
      'Compare **Term vs Document Clustering**, state the **Cluster Hypothesis**, show all **4 steps comparing Thesaurus vs Document choices**, and list the **3 Class Guidelines**.',
  },
  {
    id: 'u3-thesaurus-generation',
    shortTitle: 'Thesaurus Generation (KWOC / KWIC / KWAC)',
    unit: 'unit3',
    order: 6,
    title: 'Thesaurus Generation (Manual KWOC/KWIC/KWAC & Automatic Clustering)',
    subtopicsCovered: [
      'Word Coordination & Six Semantic Word Relationships',
      'Manual Clustering Concordances: KWOC, KWIC (/ End-of-Phrase & Homographs) & KWAC',
      'Automatic Term Clustering (Complete Term Relation, Existing Clusters, One-Pass)',
    ],
    summaryLine:
      '**Thesaurus Generation** builds synonym and concept classes either manually using human concordance tables (**KWOC, KWIC, KWAC**) and semantic relation rules or automatically via **Statistical Co-occurrence Term Clustering**.',
    bullets: [
      'Before clustering terms manually or automatically, designers define **Word Coordination** (`whether multi-word phrases as well as individual tokens belong inside thesaurus classes`).',
      'Automatically generated thesauri group statistically co-occurring terms lacking natural class names based on the principle that terms co-occurring often inside the same items discuss the same concept.',
    ],
    subSections: [
      {
        heading: 'Six Semantic Word Relationships Inside a Thesaurus',
        bullets: [
          '**Relationship 1 — Equivalence:** Links strict synonyms and acronyms under standardized `USE / UF (Used For)` mappings.',
          '**Relationship 2 — Hierarchical:** Connects general concepts down to subtypes using `BT (Broader Term)` and `NT (Narrower Term)` pointers.',
          '**Relationship 3 — Non-Hierarchical:** Associates conceptually allied descriptors that do not form parent-child hierarchies (`RT — Related Term`).',
          '**Relationship 4 — Parts–Wholes:** Encodes structural **aggregation and composition** (such as `Processor -> Computer`).',
          '**Relationship 5 — Collocation:** Groups statistically co-occurring words appearing inside the same sentence, phrase, or paragraph.',
          '**Relationship 6 — Paradigmatic:** Connects words sharing the same semantic stem or grammatical substitution role (`Formula / Equation`).',
        ],
      },
      {
        heading: 'Manual Thesaurus Construction: KWOC, KWIC & KWAC (Exam Favorite)',
        bullets: [
          'Human analysts review sorted concordance listings over sample sentences before exercising judgment to merge synonymous vocabulary into manual thesaurus clusters.',
        ],
        subGroups: [
          {
            sideHeading: '1. KWOC (Keyword Out of Context)',
            bullets: [
              '**KWOC** detaches each index word from its source sentence and tabulates alphabetical **Term**, corpus **Frequency**, and matching **Document IDs** (`e.g. Chips | 3 | DOC1, DOC3, DOC4`).',
            ],
          },
          {
            sideHeading: '2. KWIC (Keyword In Context — Fig. 6.1 Homograph Resolution)',
            bullets: [
              '**KWIC** wraps and rotates surrounding phrase context beside each target keyword using slash `/` to indicate phrase boundaries (`chips/ computer design contains memory`), enabling analysts to resolve **homographs**.',
            ],
          },
          {
            sideHeading: '3. KWAC (Keyword And Context)',
            bullets: [
              '**KWAC** displays every target keyword cleanly in the left column followed completely by its un-rotated full sentence context (`chips : computer design contains memory chips`).',
            ],
          },
        ],
      },
      {
        heading: 'Automatic Term Clustering Methods (Kowalski Ch. 6.2.2)',
        bullets: [
          'Automatic clustering partitions vocabulary sets using three algorithmic strategies differing in completeness and speed.',
        ],
        subGroups: [
          {
            sideHeading: '1. Complete Term Relation Method',
            bullets: [
              'Computes a full pairwise $n \\times n$ term similarity matrix, converts entries above a threshold to a binary matrix, and forms **Cliques**, **Stars**, or **Single-Link** clusters.',
            ],
          },
          {
            sideHeading: '2. Clustering Using Existing Clusters',
            bullets: [
              'Begins from known manually seeded core clusters (`represented by centroid vectors`) and assigns remaining corpus terms to their closest matching seed cluster.',
            ],
          },
          {
            sideHeading: '3. One-Pass Assignments',
            bullets: [
              'Streams terms once in $O(N)$ time, assigning each new term to any existing cluster exceeding threshold similarity or opening a new singleton cluster otherwise.',
            ],
          },
        ],
      },
    ],
    diagramId: 'thesaurus-kwoc-kwic',
    diagramCaption: 'KWOC, KWIC & KWAC Concordance Listings (IRS UNIT-III NOTES p.15–16)',
    table: {
      caption: 'KWOC Sample Vocabulary Table From Notes (DOC1–DOC4)',
      headers: ['Term', 'Frequency', 'Containing Document IDs'],
      rows: [
        ['Chips', '3', 'DOC1, DOC3, DOC4'],
        ['Computer', '3', 'DOC1, DOC3, DOC4'],
        ['Design', '2', 'DOC2, DOC3'],
        ['Memory', '3', 'DOC1, DOC2, DOC3'],
      ],
      highlightRows: [0, 3],
    },
    keyTakeaway:
      'Illustrate **KWOC, KWIC (`/` phrase boundary & homographs), and KWAC**, list all **6 word relationships (+ Word Coordination)**, and summarize all **3 Automatic Term Clustering** algorithms.',
  },
  {
    id: 'u3-item-clustering',
    shortTitle: 'Item Clustering (5×5 Matrix)',
    unit: 'unit3',
    order: 7,
    title: 'Item Clustering (Similarity Matrix, Thresholding & Cliques)',
    subtopicsCovered: [
      'Item Clustering Definition & Heterogeneous Units',
      'Manual vs Automatic Item Clustering (Primary & Secondary Categories)',
      'Pairwise Similarity Formula & 5 × 5 Benchmark Matrix',
      'Thresholding (Threshold = 10) to Binary Matrix & Cliques/Stars',
    ],
    summaryLine:
      '**Item Clustering** applies complete-relation similarity across phrases, sentences, or full documents to construct an $N \\times N$ **Similarity Matrix**, binarize it at **Threshold $\\ge 10$**, and extract **Cliques or Stars**.',
    bullets: [
      '**Item Clustering** groups heterogeneous document units (`single words, phrases, sentences, diagrams, or pictures`) sharing high attribute co-occurrence across collections.',
    ],
    subSections: [
      {
        heading: 'Manual vs Automatic Item Clustering',
        bullets: [
          'Cluster assignment strategies trade computational efficiency against human precision.',
        ],
        subGroups: [
          {
            sideHeading: 'Manual vs Automatic Trade-offs',
            bullets: [
              '**Manual Item Clustering** requires human judgment across item pairs, imposing excessive time, storage, and **computational overhead** on large archives.',
              '**Automatic Item Clustering** efficiently assigns one **Primary Category** plus several **Secondary Categories** per item using the **Item Complete-Relation** matrix workflow.',
            ],
          },
        ],
      },
      {
        heading: 'Similarity Computation, Thresholding (≥ 10) & Clique Extraction',
        bullets: [
          'The engine computes dot-product similarity across every pair of rows in the item-term matrix, converts entries $\\ge 10$ to `1` and entries $< 10$ to `0` (`default threshold = 10`), and extracts maximal **Cliques**, **Stars**, or **Strings**.',
        ],
        formulas: [
          {
            label: 'Pairwise Item-Item Similarity Score',
            tex: '\\text{SIM}(\\text{Item}_i, \\text{Item}_j) = \\sum_{k} (\\text{term}_{i,k}) \\times (\\text{term}_{j,k})',
            note: 'Default cutoff threshold $= 10$: $\\text{SIM} \\ge 10 \\implies 1$ (linked in same cluster), else $0$.',
          },
        ],
        diagramId: 'item-clustering-matrix',
        diagramCaption: 'Pairwise Similarity Matrix Thresholded at ≥ 10 into a Binary Adjacency Matrix',
      },
    ],
    table: {
      caption: 'Benchmark 5 × 5 Item-Item Similarity Matrix (Course Notes p.52)',
      headers: ['Item ID', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
      rows: [
        ['Item 1', '—', '11', '3', '6', '22'],
        ['Item 2', '11', '—', '12', '10', '36'],
        ['Item 3', '3', '12', '—', '6', '9'],
        ['Item 4', '6', '10', '6', '—', '11'],
        ['Item 5', '22', '36', '9', '11', '—'],
      ],
      highlightRows: [1],
    },
    secondaryTable: {
      caption: 'Resulting Binary Matrix After Threshold ≥ 10',
      headers: ['Item ID', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
      rows: [
        ['Item 1', '—', '1', '0', '0', '1'],
        ['Item 2', '1', '—', '1', '1', '1'],
        ['Item 3', '0', '1', '—', '0', '0'],
        ['Item 4', '0', '1', '0', '—', '1'],
        ['Item 5', '1', '1', '0', '1', '—'],
      ],
      highlightRows: [1, 4],
    },
    walkthroughLinkId: 'item-clustering-hac',
    keyTakeaway:
      'Contrast **Manual vs Automatic (`1 Primary + Secondary Categories`)**, compute the **$5\\times 5$ Matrix -> Threshold $\\ge 10$ Binary Matrix**, and list cliques (`{I1, I2, I5}`, `{I2, I4, I5}`).',
  },
  {
    id: 'u3-hierarchy-of-clusters',
    shortTitle: 'Hierarchy of Clusters & Dendrograms',
    unit: 'unit3',
    order: 8,
    title: 'Hierarchy of Clusters (HAC, Divisive & Dendrograms)',
    subtopicsCovered: [
      'Hierarchical Clustering Tree Concept',
      'Hierarchical Agglomerative Clustering (HAC) vs Divisive Clustering',
      'Six Objectives of Creating Cluster Hierarchies (Centroid Pruning, Visual Cues, Generality/Specificity)',
      'Inter-Cluster Linkage Criteria (Single, Complete, Group-Average) & Dendrogram',
    ],
    summaryLine:
      '**Hierarchical Clustering** organizes collections into nested tree structures using bottom-up **Agglomerative (HAC)** merging or top-down **Divisive** splitting visualized by a **Dendrogram**.',
    bullets: [
      '**Hierarchical Clustering** arranges clustered items inside a multi-level **Tree Hierarchy** where a root spans the whole database, intermediate nodes group parent concepts, and leaf nodes isolate granular document subsets.',
    ],
    subSections: [
      {
        heading: 'Two Hierarchical Clustering Paradigms',
        bullets: [
          'Tree hierarchies are constructed either bottom-up from individual documents or top-down from the unified root cluster.',
        ],
        subGroups: [
          {
            sideHeading: '1. Hierarchical Agglomerative Clustering (HAC — Bottom-Up)',
            bullets: [
              '**HAC** starts with every unclustered document as a singleton leaf cluster and iteratively merges the highest-similarity cluster pairs upward into parent tree nodes.',
            ],
          },
          {
            sideHeading: '2. Hierarchical Divisive Clustering (Top-Down)',
            bullets: [
              '**Hierarchical Divisive Clustering** places all documents into one root cluster initially and splits the least cohesive group recursively downward into smaller fine-grained subclusters.',
            ],
          },
        ],
      },
      {
        heading: 'Objectives of Creating a Cluster Hierarchy (UNIT-III p.19–20)',
        bullets: [
          '**Objective 1 — Reduce Search Overhead:** Performs rapid top-down comparisons against cluster centroids and **prunes irrelevant tree branches** immediately.',
          '**Objective 2 — Visual Information Space:** Renders an intuitive map displaying relative **cluster sizes and inter-cluster linkage strengths**.',
          '**Objective 3 — Result Expansion:** Allows users locating one helpful item to request neighboring documents inside the same cohesive cluster.',
          '**Objective 4 — Interactive Specificity & Generality Navigation:** Users traverse downward toward **children clusters to boost Specificity (Precision)** or upward toward **parent clusters to boost Generality (Recall)**.',
        ],
      },
      {
        heading: 'Linkage Criteria Between Two Clusters $C_1$ and $C_2$',
        bullets: [
          '**Single-Linkage** defines inter-cluster distance as the minimum distance (maximum similarity) across any pair in $C_1 \\times C_2$, often producing elongated chaining structures.',
          '**Complete-Linkage** defines distance as the maximum distance (minimum similarity) between farthest pairs across $C_1$ and $C_2$, creating tight compact clusters.',
          '**Group-Average Linkage** averages pairwise similarities across every member pair in $C_1 \\times C_2$ to balance compactness and noise resistance.',
        ],
      },
    ],
    diagramId: 'cluster-dendrogram',
    diagramCaption: 'Dendrogram Visualizing Bottom-Up HAC vs Top-Down Divisive Hierarchy (UNIT-III p.20)',
    walkthroughLinkId: 'item-clustering-hac',
    keyTakeaway:
      'Draw a **Dendrogram**, compare **HAC vs Divisive**, cite all **cluster hierarchy objectives (`centroid branch pruning`, `visual size cues`, `children specificity vs parent generality`)**, and distinguish **Single vs Complete vs Average Linkage**.',
  },
];
