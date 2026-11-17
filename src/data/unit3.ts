import { LessonTopic } from '@/types/course';

export const UNIT3_TOPICS: LessonTopic[] = [
  {
    id: 'u3-classes-automatic-indexing',
    shortTitle: 'Classes of Automatic Indexing',
    unit: 'unit3',
    order: 1,
    title: 'Classes of Automatic Indexing',
    subtopicsCovered: [
      'Automatic Indexing Definition & Output Schemes (Weighted vs Unweighted)',
      'Seven Sequential Processing Stages (Data Flow in IRS — UNIT-III p.2–4)',
      'Four Major Classes of Automatic Indexing (Statistical, NLP, Concept, Hypertext)',
    ],
    summaryLine:
      '**Automatic Indexing** classifies algorithmic representation strategies into **Weighted vs Unweighted** schemes spanning four major classes—**Statistical**, **Natural Language Processing**, **Concept**, and **Hypertext Linkage** indexing—executed across **seven pipeline stages**.',
    bullets: [
      {
        label: 'Automatic Indexing',
        text: 'Analyzes each arriving item algorithmically against a controlled vocabulary, taxonomy, or ontology (or performs Total Document Indexing) to build permanent searchable index representations alongside the Document File.',
      },
      {
        label: 'Index Definition',
        text: 'The internal searchable data structure created specifically to support the chosen search strategy (`statistical`, `natural language`, or `concept`).',
      },
      {
        label: 'Unweighted vs Weighted Indexing',
        text: 'Distinguishes how term significance is stored:',
        children: [
          {
            label: 'Unweighted Indexing System',
            text: 'Records only binary `0/1` term existence (plus optional word locations) inside the searchable index.',
          },
          {
            label: 'Weighted Indexing System',
            text: 'Computes normalized term weights between $0$ and $1$ based on occurrence frequency to rank results from highest score to lowest.',
          },
        ],
      },
    ],
    subSections: [
      {
        heading: 'Seven Processing Modules in Automatic Indexing (UNIT-III p.2–4)',
        description:
          'All automatic indexing systems begin with input standardization, zoning, and token identification before branching into Statistical, Natural Language, or Concept strategies.',
        subGroups: [
          {
            sideHeading: '1. Standardize Input',
            description:
              'Translates diverse external input file formats and character encodings into the canonical internal format acceptable to the indexing engine.',
          },
          {
            sideHeading: '2. Logical Subsetting (Zoning)',
            description:
              'Parses each item into meaningful logical subdivisions visible to users—increasing search precision and optimizing display:',
            bullets: [
              '`Title`',
              '`Author`',
              '`Abstract`',
              '`Main Text`',
              '`Conclusion`',
              '`References`',
              '`Country` & `Keyword`',
            ],
          },
          {
            sideHeading: '3. Identify Processing Tokens (Three Symbol Classes)',
            description:
              'Determines searchable processing tokens (`better than raw words`) by dividing input symbols into three classes:',
            bullets: [
              {
                label: 'Valid Word Symbols',
                text: 'Alphabetic characters and numbers forming searchable tokens.',
              },
              {
                label: 'Inter-Word Symbols',
                text: 'Non-searchable delimiter characters such as blanks, periods, and semicolons.',
              },
              {
                label: 'Special Processing Symbols',
                text: 'Context-sensitive punctuation symbols such as the hyphen (`-`).',
              },
            ],
          },
          {
            sideHeading: '4. Stop Algorithm',
            description:
              'Eliminates tokens whose ultra-high frequency or weak semantic utility wastes memory and processing time.',
          },
          {
            sideHeading: '5. Characterize Tokens',
            description:
              'Tags surviving tokens with specialized lexical and semantic attributes:',
            bullets: [
              'Word Sense Disambiguation (WSD)',
              'Part-of-Speech (POS) tagging',
              'Uppercase proper names, acronyms, and organizations',
              'Numbers and dates',
            ],
          },
          {
            sideHeading: '6. Stemming Algorithm',
            description:
              'Cuts and trims suffixes/prefixes systematically to collapse morphological variants while maintaining phrase and grammar integrity.',
          },
          {
            sideHeading: '7. Create Searchable Data Structure',
            description:
              'Outputs the internal machine representation (`not visible directly to users`) storing semantic concepts that bound what queries can retrieve.',
          },
        ],
        diagramId: 'auto-index-dataflow',
        diagramCaption: 'Data Flow in an Automatic Information Processing System (IRS UNIT-III NOTES p.2)',
      },
      {
        heading: 'Four Major Classes of Automatic Indexing',
        description:
          'Statistical strategies cover the broadest range of techniques and remain the most prevalent in commercial systems:',
        subGroups: [
          {
            sideHeading: '1. Statistical Indexing',
            description:
              'Applies word and phrase occurrence frequencies, log-odds probabilities, vectors, or neural weights to score item relevance.',
          },
          {
            sideHeading: '2. Natural Language Processing (NLP)',
            description:
              'Performs syntactic and semantic parsing to extract unambiguous compound index phrases and discourse relations.',
          },
          {
            sideHeading: '3. Concept Indexing',
            description:
              'Maps co-occurring synonymous words onto shared latent concept dimensions (`LSI / Neural Context Vectors`).',
          },
          {
            sideHeading: '4. Hypertext Linkages',
            description:
              'Captures manual or automatic directional node links and anchor contexts connecting cross-referenced items.',
          },
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
      'Break the **Automatic Indexing Data Flow** cleanly into all **7 stages**, state **Weighted vs Unweighted**, and list all **4 classes (`Statistical, NLP, Concept, Hypertext`)** individually.',
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
      'Bayesian Model & Neural Network Model',
    ],
    summaryLine:
      '**Statistical Indexing** models token event frequencies (**TF & DF**) across **Probabilistic**, **Vector (TF-IDF, Signal, Discrimination)**, **Bayesian**, and **Neural Network** weighting frameworks to rank relevance.',
    bullets: [
      {
        label: 'Core Statistical Basis',
        text: 'Uses occurrence frequencies of processing tokens (`words and phrases`) inside documents and across the collection to compute scalar relevance scores after Boolean filtering (`Hit File Ranking`).',
      },
      {
        label: 'Document Frequency ($DF$)',
        text: 'Identifies which/how many documents in the database contain a particular term.',
      },
      {
        label: 'Term Frequency ($TF$)',
        text: 'Counts the number of occurrences (or lines) of a term inside one individual item.',
      },
    ],
    subSections: [
      {
        heading: 'Four Statistical Indexing Approaches (UNIT-III p.6–8)',
        subGroups: [
          {
            sideHeading: '1. Probabilistic Weighting',
            description:
              'Applies formal mathematical probability theory directly to estimate the probability that an item satisfies a query.',
            subGroups: [
              {
                sideHeading: 'Probability Ranking Principle (PRP)',
                description:
                  'Demonstrates that optimal retrieval effectiveness is achieved when documents are ranked strictly in descending order of relevance probability.',
              },
              {
                sideHeading: 'Technique 1 — Hypothesis',
                description:
                  'Maintains a collection list of words with probability rankings based on corpus occurrence.',
              },
              {
                sideHeading: 'Technique 2 — Plausible Corollary (Log-Odds Formula)',
                description:
                  'Applies standard probability theory and statistics to produce invariant relevance estimates that integrate cleanly across different databases via Log-Odds summation.',
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
            sideHeading: '2. Vector Weighting (SMART System — Cornell University)',
            description:
              'Pioneered in Salton SMART system; represents each document as a fixed one-dimensional vector where every slot corresponds to a unique processing token.',
            subGroups: [
              {
                sideHeading: 'Binary Vector Approach',
                description:
                  'Vector entries hold only `1` (token exists in the item) or `0` (token is absent).',
              },
              {
                sideHeading: 'Weighted Vector Approach ($IDF$ & $TF\\text{-}IDF$)',
                description:
                  'Vector entries hold positive real numbers multiplying local term frequency ($TF$) by inverse document rarity ($IDF_k$).',
                formulas: [
                  {
                    label: 'IDF & TF-IDF Weighting',
                    tex: 'IDF_k = \\log_2\\!\\left(\\frac{N}{DF_k}\\right) + 1 \\qquad W_{i,k} = TF_{i,k} \\times \\log_2\\!\\left(\\frac{N}{DF_k}\\right)',
                    note: '$N$ = total items in collection; $DF_k$ = documents containing term $k$; $TF_{i,k}$ = count of term $k$ inside item $i$.',
                  },
                ],
              },
              {
                sideHeading: 'Shannon Signal Weighting (`SAW` vs `DRILL`)',
                description:
                  'Uses Shannon Entropy to reward terms concentrated heavily inside a small subset of items (`DRILL = [2,2,18,10,18]`) over uniformly distributed terms (`SAW = [10,10,10,10,10]`).',
                formulas: [
                  {
                    label: 'Shannon Information & Signal Weighting ($SAW$ vs $DRILL$)',
                    tex: '\\text{AveInfo}_k = -\\sum_{i=1}^{N} \\frac{TF_{i,k}}{\\text{TotFreq}_k} \\log_2\\!\\left(\\frac{TF_{i,k}}{\\text{TotFreq}_k}\\right) \\qquad \\text{Signal}_k = \\log_2(\\text{TotFreq}_k) - \\text{AveInfo}_k',
                    note: 'Non-uniform terms (`DRILL`) exhibit lower entropy $\\text{AveInfo}_k$ and earn much higher **Signal Weight** than flat `SAW`.',
                  },
                ],
              },
              {
                sideHeading: 'Salton & Yang Discrimination Value ($DISCRIM_i$)',
                description:
                  'Measures how much removing term $i$ increases average pairwise document similarity; positive values confirm term $i$ effectively separates items.',
                formulas: [
                  {
                    label: 'Salton & Yang Discrimination Value',
                    tex: '\\text{DISCRIM}_i = \\text{AVESIM}_i - \\text{AVESIM}',
                    note: 'If deleting term $i$ makes documents appear closer together ($\\text{AVESIM}_i > \\text{AVESIM}$), $DISCRIM_i > 0$ marks a strong discriminator.',
                  },
                ],
              },
              {
                sideHeading: 'Limitations of Pure Vector Models',
                bullets: [
                  'Discards word ordering inside sentences.',
                  'Assumes vocabulary terms are statistically independent.',
                  'Treats synonyms as zero-overlap orthogonal vector axes.',
                ],
              },
            ],
          },
          {
            sideHeading: '3. Bayesian Model',
            description:
              'Overcomes vector-model independence restrictions by applying conditional probabilities over graphical belief networks.',
            bullets: [
              {
                label: 'Relative Confidence Ranking',
                text: 'Generates strong relative confidence scores ordering item relevance cleanly rather than relying on fragile absolute probabilities.',
              },
            ],
          },
          {
            sideHeading: '4. Neural Network Model',
            description:
              'Dynamic learning graph structures under concept indexing linking Input Query Tokens, Hidden Concept Class Layers, and Output Document Nodes.',
            bullets: [
              {
                label: 'Key Benefit & Examples',
                text: 'Learns domain-specific concept hierarchies iteratively and significantly **improves Recall**.',
              },
            ],
          },
        ],
      },
    ],
    diagramId: 'statistical-indexing-tree',
    diagramCaption: 'Hierarchy of Statistical Indexing Approaches (IRS UNIT-III NOTES p.6)',
    keyTakeaway:
      'Include ALL four formula blocks (**Log-Odds, $TF\\text{-}IDF$, Signal Weighting `SAW/DRILL`, and Discrimination Value**) alongside explicit side-blocks for **Probabilistic, Vector, Bayesian, and Neural Network** models.',
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
      {
        label: 'Semantic & Opinion Understanding',
        text: 'Interprets sentence context, logical grammar roles, and user views/emotions alongside token statistics.',
        example: 'Distinguishing sentiment cues such as `"Happy or sad"`, `"Good or Bad"`.',
      },
      {
        label: 'Higher Precision & Fewer False Hits',
        text: 'Resolves homographs (`river bank vs savings bank`) instead of treating every word independently, reducing false hits and sharply improving Precision.',
      },
      {
        label: 'Phrases & Thematic Representations',
        text: 'Outputs structured multi-word Index Phrases as basic units and combines related phrases upward into higher-level abstractions called Thematic Representations.',
      },
    ],
    subSections: [
      {
        heading: 'Five Linguistic Processing Levels & DR-LINK System',
        description:
          'Full-text semantic indexers progress through five linguistic levels, unified cleanly in the DR-LINK retrieval architecture.',
        subGroups: [
          {
            sideHeading: '1. Morphological Level',
            description:
              'Reduces inflected words down to base root lemmas together with grammatical tense and number tags (`computing -> compute`).',
          },
          {
            sideHeading: '2. Lexical / Part-of-Speech (POS) Level',
            description:
              'Assigns grammatical categories (`Noun vs Verb`) using local sentence context.',
            example: 'Distinguishing `"book a ticket"` (Verb) vs `"read a book"` (Noun).',
          },
          {
            sideHeading: '3. Syntactic Level',
            description:
              'Builds grammatical parse/dependency trees capturing subject–verb–object roles and extracting multi-word Compound Noun Phrases (`"expert systems"`).',
          },
          {
            sideHeading: '4. Semantic Level',
            description:
              'Disambiguates word senses and entity roles via selectional restrictions and lexical ontologies (`"Apple"` -> Fruit vs Technology Company).',
          },
          {
            sideHeading: '5. Discourse Level',
            description:
              'Resolves pronouns (`he, it, they`) back to true antecedent nouns across neighboring sentences (`"The system failed. It crashed." -> It = system`).',
          },
          {
            sideHeading: '6. DR-LINK Retrieval System',
            description:
              'Document Retrieval through Linguistic Knowledge (`DR-LINK`) integrates Lexical sub-components, Conceptual Relations, Subject Field Codes, and Syntactic Phrases for high-precision text retrieval.',
          },
        ],
      },
      {
        heading: 'Statistical Proximity & Cohesion Factor Phrase Detection',
        description:
          'Earlier statistical phrase systems measured inter-word proximity across collections via Salton Cohesion Factor to form focused multi-word index phrases that reduce non-relevant item overhead.',
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
      {
        label: 'Generalization to Abstract Concepts',
        text: 'Correlates specific words in an item to broader underlying concepts so synonyms (`car`, `automobile`) match seamlessly—even when automatically generated statistical concept classes have no fixed English name.',
      },
      {
        label: 'Many-to-Many Mapping & Recall Gain',
        text: 'Mapping from surface terms to concepts is inherently many-to-many because one word may represent multiple concepts to varying degrees, significantly improving Recall.',
      },
    ],
    subSections: [
      {
        heading: '1. Concept Indexing Approaches',
        subGroups: [
          {
            sideHeading: 'Latent Semantic Indexing (LSI) via Singular Value Decomposition',
            description:
              'Decomposes the sparse Term–Document matrix $A$ via Singular Value Decomposition (SVD) retaining the top $k$ latent concept dimensions, folding synonyms together while suppressing accidental statistical noise.',
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
            description:
              'Applies brain-inspired Neural Network algorithms (`CONVECTIS / Convection system`) to learn contextual concept weights from terms occurring in similar contexts and score incoming documents across synonymous neighborhoods.',
          },
        ],
      },
      {
        heading: '2. Hypertext Linkage Indexing & Internet Discovery',
        description:
          'Adds a new information retrieval dimension atop linear text by creating directional hyperlinks (`virtual threads of concepts`) connecting related items.',
        subGroups: [
          {
            sideHeading: 'Manual vs Automatic Link Generation',
            subGroups: [
              {
                sideHeading: 'Manual Linkages',
                description:
                  'Authors explicitly embed citation links, footnotes, or conceptual anchor tags inside documents.',
              },
              {
                sideHeading: 'Automatic Linkages',
                description:
                  'Algorithms infer inter-node links via Similarity-Based thresholds, Direct Citations, Whole–Part aggregation, or Conceptual Association weighted by anchor text.',
              },
            ],
          },
          {
            sideHeading: 'Three Internet Information Discovery Classes',
            bullets: [
              {
                label: '1. Manually Generated Indexes',
                text: 'Human-curated topical web directories and subject catalogs.',
              },
              {
                label: '2. Automatically Generated Indexes',
                text: 'Inverted keyword indexes compiled automatically from harvested page content.',
              },
              {
                label: '3. Web Crawlers (Spider-Bots / Intelligent Agents)',
                text: 'Autonomous Internet bots that systematically browse the World Wide Web following hyperlinks to feed search-engine indexers.',
              },
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
      {
        label: 'Clustering Definition',
        text: 'Enhances retrieval efficiency and effectiveness by partitioning documents or terms into classes of closely associated objects under a general class label with optional inter-cluster linkages.',
      },
      {
        label: 'Van Rijsbergen Cluster Hypothesis',
        text: 'Closely associated documents tend to be relevant to the same information requests—enabling rapid retrieval of whole topical clusters.',
      },
    ],
    subSections: [
      {
        heading: 'Two Fundamental Types of Clustering in IRS',
        subGroups: [
          {
            sideHeading: '1. Term Clustering (Query Expansion)',
            description:
              'Groups synonymous or co-occurring terms (`single words, phrases, or paragraphs`) into a Statistical Thesaurus.',
            bullets: [
              'Expands user queries with related terms (`Query Expansion`) to **increase Recall**.',
            ],
          },
          {
            sideHeading: '2. Document Clustering (Resultant Set Expansion)',
            description:
              'Groups entire documents sharing key index terms or concepts into cohesive topical collections.',
            bullets: [
              'Retrieves items similar to an item of interest even when exact query words were omitted (`Resultant Set / Result-Set Expansion`).',
            ],
          },
        ],
      },
      {
        heading: 'Four-Step Clustering Process (UNIT-III p.13)',
        subGroups: [
          {
            sideHeading: 'Step 1 — Define the Domain & Reduce Noise',
            bullets: [
              {
                label: 'Thesaurus',
                text: 'Target domain (`e.g., medical or education`) with relevant term subsets.',
              },
              {
                label: 'Documents',
                text: 'Select cohesive set of items and discard objects likely to induce clustering errors.',
              },
            ],
          },
          {
            sideHeading: 'Step 2 — Determine Attributes of Clustered Objects',
            bullets: [
              {
                label: 'Thesaurus',
                text: 'Select the specific vocabulary words inside objects to cluster.',
              },
              {
                label: 'Documents',
                text: 'Focus on informative document zones (`Title, Abstract`) used to measure similarity.',
              },
            ],
          },
          {
            sideHeading: 'Step 3 — Determine Inter-Attribute Relationships',
            bullets: [
              {
                label: 'Thesaurus',
                text: 'Determine synonymous word pairs and the strength of their relationships.',
              },
              {
                label: 'Documents',
                text: 'Define a similarity function (`Cosine, Dice, Jaccard`) over shared word co-occurrences.',
              },
            ],
          },
          {
            sideHeading: 'Step 4 — Apply Clustering Algorithm',
            description:
              'Execute the chosen clustering algorithm (`Single-Link, Complete-Link, One-Pass, HAC`) to assign each object to classes.',
          },
        ],
      },
      {
        heading: 'Three Guidelines on Cluster Class Characteristics (UNIT-III p.14)',
        bullets: [
          {
            label: '1. Clear Semantic Definition',
            text: 'A well-defined semantic identity should exist for each class (noting the risk that an assigned label could be misleading).',
          },
          {
            label: '2. Balanced Class Size',
            text: 'Cluster sizes should remain within the same order of magnitude so one giant object never dominates a class.',
          },
          {
            label: '3. Single vs Multi-Class Assignment Policy',
            text: 'Decide explicitly at creation time whether each object belongs strictly to one class or multiple overlapping classes.',
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
      {
        label: 'Core Principle of Automatic Thesauri',
        text: 'Automatically generated thesauri group statistically co-occurring words (`lacking natural class names`) based on the principle that the more frequently two terms co-occur in the same items, the more likely they share the same concept.',
      },
      {
        label: 'Word Coordination Decision',
        text: 'Specifies upfront whether multi-word phrases as well as individual single terms should be clustered inside the thesaurus.',
      },
    ],
    subSections: [
      {
        heading: 'Six Word Relationships Inside a Thesaurus',
        bullets: [
          {
            label: '1. Equivalence',
            text: 'Links strict synonyms and acronyms under standardized `USE / UF (Used For)` mappings.',
          },
          {
            label: '2. Hierarchical',
            text: 'Connects parent concepts to sub-concepts via `BT (Broader Term)` and `NT (Narrower Term)`.',
          },
          {
            label: '3. Non-Hierarchical',
            text: 'Associates related descriptors without parent–child hierarchy (`RT — Related Term`).',
          },
          {
            label: '4. Parts–Wholes',
            text: 'Models structural aggregation and composition (`Processor -> Computer`).',
          },
          {
            label: '5. Collocation',
            text: 'Statistical relation linking words that co-occur in the same sentence, phrase, or paragraph.',
          },
          {
            label: '6. Paradigmatic',
            text: 'Relates words sharing the same semantic base or grammatical role (`"Formula" & "Equation"`, `Taxonomy & Synonym`).',
          },
        ],
      },
      {
        heading: 'Manual Thesaurus Construction: KWOC, KWIC & KWAC (Exam Favorite)',
        description:
          'Human analysts review sorted concordance listings (`built over sample phrases/sentences`) and use domain judgment to group related terms into manual thesaurus clusters.',
        subGroups: [
          {
            sideHeading: '1. KWOC (Keyword Out of Context)',
            description:
              'Separates each keyword from its sentence and tabulates alphabetical Term, Frequency, and containing Document IDs.',
            example: '`Chips | 3 | DOC1, DOC3, DOC4`',
          },
          {
            sideHeading: '2. KWIC (Keyword In Context — Fig. 6.1 Homograph Resolution)',
            description:
              'Wraps and rotates surrounding phrase context beside the centered keyword using slash `/` to mark the end of the phrase—especially helpful for resolving **homographs**.',
            example: '`chips/ computer design contains memory`',
          },
          {
            sideHeading: '3. KWAC (Keyword And Context)',
            description:
              'Displays each keyword cleanly on the left followed completely by its un-rotated full sentence context.',
            example: '`chips : computer design contains memory chips`',
          },
        ],
      },
      {
        heading: 'Automatic Term Clustering Methods (Kowalski Ch. 6.2.2)',
        subGroups: [
          {
            sideHeading: '1. Complete Term Relation Method',
            description:
              'Computes a full pairwise $n \\times n$ term similarity matrix, thresholds entries into a binary matrix, and extracts Cliques, Stars, or Single-Link clusters.',
          },
          {
            sideHeading: '2. Clustering Using Existing Clusters',
            description:
              'Starts from manually seeded initial clusters (`represented by centroid vectors`) and assigns remaining corpus terms to their closest matching cluster.',
          },
          {
            sideHeading: '3. One-Pass Assignments',
            description:
              'Processes terms in one $O(N)$ pass, assigning each new term to any existing cluster exceeding threshold similarity or opening a new cluster otherwise.',
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
      {
        label: 'Item Clustering Definition',
        text: 'Groups heterogeneous item units across multiple documents (`words, phrases, sentences, diagrams, or pictures`) sharing high attribute co-occurrence.',
      },
    ],
    subSections: [
      {
        heading: 'Manual vs Automatic Item Clustering',
        subGroups: [
          {
            sideHeading: '1. Manual Item Clustering',
            description:
              'Relies on human analysts evaluating items manually, imposing excessive time, storage, and computational overhead on large archives.',
          },
          {
            sideHeading: '2. Automatic Item Clustering',
            description:
              'Highly efficient algorithmic clustering assigning one **Primary Category** plus several **Secondary Categories** per item using the **Item Complete-Relation Method**.',
          },
        ],
      },
      {
        heading: 'Similarity Matrix, Thresholding ($\\ge 10$) & Clique Extraction',
        bullets: [
          {
            label: 'Pairwise Row Similarity',
            text: 'Computes dot-product similarity between pairs of rows in the item-term matrix based on common terms.',
          },
          {
            label: 'Default Binarization Threshold ($= 10$)',
            text: 'Scores $\\ge 10$ convert to `1` (linked in same cluster) and scores $< 10$ convert to `0`.',
          },
          {
            label: 'Cluster Graph Structures',
            text: 'Extracts maximal Cliques (`all pairs linked`, e.g. `{I1, I2, I5}` and `{I2, I4, I5}`), Stars, or Strings from the binary matrix.',
          },
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
      'Four Objectives of Creating Cluster Hierarchies (Centroid Pruning, Visual Cues, Generality/Specificity)',
      'Inter-Cluster Linkage Criteria (Single, Complete, Group-Average) & Dendrogram',
    ],
    summaryLine:
      '**Hierarchical Clustering** organizes collections into nested tree structures using bottom-up **Agglomerative (HAC)** merging or top-down **Divisive** splitting visualized by a **Dendrogram**.',
    bullets: [
      {
        label: 'Tree Hierarchy Concept',
        text: 'Arranges clustered items inside a multi-level tree where a root spans the whole database, intermediate nodes group parent concepts, and leaf nodes isolate granular document subsets.',
      },
    ],
    subSections: [
      {
        heading: 'Two Hierarchical Clustering Paradigms',
        subGroups: [
          {
            sideHeading: '1. Hierarchical Agglomerative Clustering (HAC — Bottom-Up)',
            description:
              'Starts with every unclustered document as a singleton leaf cluster and iteratively merges the highest-similarity pairs upward into a tree hierarchy.',
          },
          {
            sideHeading: '2. Hierarchical Divisive Clustering (Top-Down)',
            description:
              'Starts with all documents placed inside one large root cluster and splits it recursively downward into smaller cohesive subclusters.',
          },
        ],
      },
      {
        heading: 'Objectives of Creating a Hierarchy of Clusters (UNIT-III p.19–20)',
        bullets: [
          {
            label: '1. Reduce Search Overhead',
            text: 'Performs rapid top-down comparisons against cluster centroids and trims/prunes irrelevant tree branches immediately.',
          },
          {
            label: '2. Visual Information Space',
            text: 'Provides visual cues displaying relative cluster sizes and inter-cluster linkage strengths.',
          },
          {
            label: '3. Expand Retrieval of Relevant Items',
            text: 'Once a user identifies one helpful item, they can immediately request neighboring items in the same cluster.',
          },
          {
            label: '4. Specificity vs Generality Navigation',
            text: 'Users move downward to **children clusters to increase Specificity (Precision)** or upward to **parent clusters to increase Generality (Recall)**.',
          },
        ],
      },
      {
        heading: 'Inter-Cluster Linkage Criteria ($C_1$ and $C_2$)',
        bullets: [
          {
            label: '1. Single-Linkage',
            text: 'Distance equals minimum distance (maximum similarity) across any pair in $C_1 \\times C_2$; tends to produce elongated chaining structures.',
          },
          {
            label: '2. Complete-Linkage',
            text: 'Distance equals maximum distance (minimum similarity) between farthest pairs across $C_1$ and $C_2$; yields tight compact clusters.',
          },
          {
            label: '3. Group-Average Linkage',
            text: 'Averages pairwise similarities across all member pairs in $C_1 \\times C_2$ to balance compactness and noise tolerance.',
          },
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
