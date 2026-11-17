import { LessonTopic } from '@/types/course';

export const UNIT4_TOPICS: LessonTopic[] = [
  {
    id: 'u4-search-statements-binding',
    shortTitle: 'Search Statements & Binding Levels',
    unit: 'unit4',
    order: 1,
    title: 'Search Statements and Binding',
    subtopicsCovered: [
      'Search Statement Definition (Boolean & Natural Language + Term Weights)',
      'Binding Across Statistical, Natural Language & Concept Systems',
      'Progressive 3-Level Binding & Thesaurus Parenthesis Expansion',
      'Figure 7.1 Worked Query Binding Trace & Query Length Law',
    ],
    summaryLine:
      'A **Search Statement** expresses user information needs via Boolean or natural language, while **Binding** translates those concepts progressively through **user vocabulary**, **system meta-language**, and **weighted index primitives**.',
    bullets: [
      'A **Search Statement** defines the user formal request to logically partition the total document item space into the narrow cluster satisfying the user concept need.',
      'Query generation directly supports both **Boolean logic** and **Natural Language** phrasing while allowing users to assign importance weights to priority terms.',
      '**Query Length Law:** The length of a search statement directly governs retrieval capability—**longer, richer queries** make it significantly easier for the IRS to identify relevant items accurately.',
    ],
    subSections: [
      {
        heading: 'Progressive Levels of Binding & Meta-Language Translation',
        bullets: [
          'As a query travels from human thought into index execution, binding transforms vocabulary successively across three layers.',
        ],
        subGroups: [
          {
            sideHeading: 'Level 1 — User Vocabulary & Experience Binding',
            bullets: [
              'Initially, terms inside a search statement bind purely to the **personal vocabulary, jargon, and past experiences of the user** (`e.g. searching "price of oil"`).',
            ],
          },
          {
            sideHeading: 'Level 2 — System Meta-Language Translation (Statistical, NLP & Concept Systems)',
            bullets: [
              '**Statistical Systems** bind statements into stemmed processing tokens weighted by frequency and collection statistics (`Document Frequency DF` and `Total Frequency`).',
              '**Natural Language Systems** parse syntax and discourse semantics cleanly into normalized phrases using algorithms mirroring document indexing.',
              '**Concept Systems** map query keywords onto canonical indexed concept dimensions; parentheses denote **Thesaurus Expansion** (`e.g. oil (petroleum), price (cost, value)`).',
            ],
          },
          {
            sideHeading: 'Level 3 — Collection IDF Weight & Hit-List Binding',
            bullets: [
              'Final system binding attaches quantitative **Inverse Document Frequency ($IDF$)** collection weights directly onto each expanded query token (`Figure 7.1`) before inverted execution.',
            ],
          },
        ],
        diagramId: 'search-binding-levels',
        diagramCaption: 'Three-Stage Translation From User Need Through Vocabulary & Meta-Language Binding',
      },
    ],
    table: {
      caption: 'Figure 7.1 Worked Query Binding Trace ("impact of oil spills in Alaska on price of oil")',
      headers: ['Binding Stage', 'Query Representation', 'Binding Action Performed'],
      rows: [
        ['1. User Need Vocabulary', '"Find me info on impact of oil spills in Alaska on price of oil"', 'Natural language search statement bound to user words'],
        ['2. Statistical + Thesaurus Binding', '`impact, oil (petroleum), spills (accidents), Alaska, price (cost, value)`', 'Extracts processing tokens & parenthesis thesaurus expansion'],
        ['3. Collection IDF Weight Binding', '`impact (.308), oil (.606), petroleum (.65), spills (.12), Alaska (.45), cost (.25)`', 'Assigns numerical IDF weights from database statistics'],
      ],
      highlightRows: [1, 2],
    },
    keyTakeaway:
      'Explain all **3 binding paradigms (`Statistical`, `NLP`, `Concept` + parentheses thesaurus)**, walk through **Figure 7.1 Alaska oil spills**, and note **longer query length improves retrieval**.',
  },
  {
    id: 'u4-similarity-measures-ranking',
    shortTitle: 'Similarity Measures, Ranking & DOC1–3 Vectors',
    unit: 'unit4',
    order: 2,
    title: 'Similarity Measures and Ranking (Simple, Cosine, Dice, Jaccard)',
    subtopicsCovered: [
      'Similarity Principles & Passage-Level Restriction',
      'Four Similarity Formulas (Simple Dot-Product, Salton Cosine, Dice, Jaccard)',
      'Query Threshold Process & Worked Notes Vectors (DOC1, DOC2, DOC3)',
    ],
    summaryLine:
      '**Similarity Measures** compute scalar relevance weights between vector representations of items and queries (**Simple, Cosine, Dice, Jaccard**), sorting hits by descending rank above a **Query Threshold**.',
    bullets: [
      '**Ranking** presents items most likely to satisfy a search first by assigning every candidate document a scalar numerical score measuring similarity between the document vector $DOC_i$ and query vector $QUERY_j$.',
      'Two fundamental similarity axioms hold for every formula: **(a) scores increase strictly as items become more similar**, and **(b) total dissimilarity evaluates to zero**.',
      '**Passage-Level Restriction:** Restricting similarity calculation to localized **Passages** instead of whole documents yields a substantial gain in **Precision** with modest trade-off in **Recall**.',
    ],
    subSections: [
      {
        heading: 'Four Classical Vector Similarity Formulations',
        bullets: [
          'Different retrieval formulas balance raw keyword overlap against document length normalization differently.',
        ],
        subGroups: [
          {
            sideHeading: '1. Simple Dot-Product Measure (Unnormalized)',
            bullets: [
              '**Simple Similarity** sums term-by-term products directly across all vocabulary axes (`suffers from length bias without normalization`).',
            ],
            formulas: [
              {
                label: 'Formula 1: Simple Dot-Product Similarity',
                tex: '\\text{SIM}(\\text{Item}_i, \\text{Item}_j) = \\sum_{k=1}^{n} \\left(\\text{Term}_{i,k} \\times \\text{Term}_{j,k}\\right)',
                note: 'Unnormalized overlap sum; favors long documents with high term counts.',
              },
            ],
          },
          {
            sideHeading: '2. Cosine Similarity (Salton — SMART System)',
            bullets: [
              '**Cosine Similarity** measures the cosine of the angle between vectors by dividing the dot product by Euclidean vector norms, cleanly normalizing document length variations.',
            ],
            formulas: [
              {
                label: 'Formula 2: Cosine Similarity (Salton, SMART System)',
                tex: '\\text{SIM}(\\text{DOC}_i, \\text{QUERY}_j) = \\frac{\\sum_{k=1}^{n} \\left(DOC_{i,k} \\times QTERM_{j,k}\\right)}{\\sqrt{\\sum_{k=1}^{n} (DOC_{i,k})^2 \\times \\sum_{k=1}^{n} (QTERM_{j,k})^2}}',
                note: 'Ranges cleanly from $0$ (orthogonal / disjoint) to $1$ (identical vector direction).',
              },
            ],
          },
          {
            sideHeading: '3. Dice & 4. Jaccard Similarity Formulas',
            bullets: [
              '**Dice Similarity** simplifies Jaccard denominator by doubling numerator overlap over summed weights (`invariant to common-term imbalance`).',
              '**Jaccard Similarity** penalizes union terms lacking overlap by computing set intersection divided by set union ($|D| + |Q| - |D \\cap Q|$).',
            ],
            formulas: [
              {
                label: 'Formula 3: Dice Similarity',
                tex: '\\text{SIM}(\\text{DOC}_i, \\text{QUERY}_j) = \\frac{2 \\sum_{k=1}^{n} \\left(DOC_{i,k} \\times QTERM_{j,k}\\right)}{\\sum_{k=1}^{n} DOC_{i,k} + \\sum_{k=1}^{n} QTERM_{j,k}}',
                note: 'Doubles co-occurrence over arithmetic sum of active document and query terms.',
              },
              {
                label: 'Formula 4: Jaccard Similarity',
                tex: '\\text{SIM}(\\text{DOC}_i, \\text{QUERY}_j) = \\frac{\\sum_{k=1}^{n} \\left(DOC_{i,k} \\times QTERM_{j,k}\\right)}{\\sum_{k=1}^{n} DOC_{i,k} + \\sum_{k=1}^{n} QTERM_{j,k} - \\sum_{k=1}^{n} \\left(DOC_{i,k} \\times QTERM_{j,k}\\right)}',
                note: 'Computes overlap relative to union $|A \\cap B| / |A \\cup B|$.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Query Threshold Process & Benchmark Corpus Vectors (DOC1–DOC3)',
        bullets: [
          'Because pure similarity formulas score the entire collection (`leaving most unrelated documents at similarity zero`), applying a **Query Threshold** cuts off weak trailing items to assemble the **Resultant Hit File**.',
          'Over the notes 8-term vocabulary **`(American, geography, Lakes, Mexico, Painter, oil, Reserve, Subject)`**, sample documents form frequency vectors `DOC1 = (0,1,0,2,0,3,1,0)`, `DOC2 = (1,3,0,0,0,0,0,0)`, and `DOC3 = (0,0,1,3,3,0,0,2)` (`ranked on Binary/Frequency queries below`).',
        ],
      },
    ],
    table: {
      caption: 'Benchmark Binary Evaluation on 8-Term Vocabulary (Query = "oil, Mexico")',
      headers: ['Document', 'Matched Terms', 'Simple', 'Cosine', 'Dice', 'Jaccard'],
      rows: [
        ['DOC1 (`geography, Mexico, oil, Reserve`)', 'Mexico + oil (dot = 2)', '2', '0.707', '0.667', '0.500'],
        ['DOC3 (`Lakes, Mexico, Painter, Subject`)', 'Mexico only (dot = 1)', '1', '0.354', '0.333', '0.200'],
        ['DOC2 (`American, geography`)', 'None (dot = 0)', '0', '0.000', '0.000', '0.000'],
      ],
      highlightRows: [0],
    },
    walkthroughLinkId: 'similarity-rocchio',
    keyTakeaway:
      'Include all **4 Similarity equations**, explain **Passage-level Precision**, show the **8-term notes corpus vectors (`DOC1–DOC3`)**, and practice deriving **`0.707, 0.667, 0.500`**.',
  },
  {
    id: 'u4-relevance-feedback',
    shortTitle: 'Relevance Feedback (Rocchio)',
    unit: 'unit4',
    order: 3,
    title: 'Relevance Feedback (Rocchio Vector Reformulation)',
    subtopicsCovered: [
      'Why Static Thesauri Fail vs Dynamic Feedback',
      'Positive Feedback, Negative Feedback & Query Term Expansion',
      'Pseudo (Blind) Relevance Feedback',
      'Standard Notes & Generalized Tunable Rocchio Equations',
    ],
    summaryLine:
      '**Relevance Feedback** dynamically refines initial search results using user relevance judgments (`Positive` and `Negative`), shifting the query vector $Q_o$ toward confirmed relevant documents and away from non-relevant noise.',
    bullets: [
      'While static thesauri and semantic networks broaden terms, they still fail to match the specific dialect of local database authors or capture **newly coined vocabulary terms**.',
      'Interactive IRS platforms enable users to judge returned documents as **Relevant** or **Non-Relevant** so the system automatically re-weights and expands terms into an improved second-pass query.',
    ],
    subSections: [
      {
        heading: 'Three Feedback Refinement Mechanisms',
        bullets: [
          'Vector modification uses user judgments (or assumed top hits) to adjust query coordinates geometrically.',
        ],
        subGroups: [
          {
            sideHeading: '1. Positive Feedback (Vector Pull + Term Expansion)',
            bullets: [
              'Adds normalized term weights from **relevant items ($DR_i$)** to the original query vector $Q_o$, pulling $Q_n$ toward the relevant topic cluster and adding helpful new terms missing from $Q_o$.',
            ],
          },
          {
            sideHeading: '2. Negative Feedback (Vector Push)',
            bullets: [
              'Subtracts normalized term weights from **non-relevant false hits ($DNR_j$)**, steering $Q_n$ cleanly away from noisy distracting terminology.',
            ],
          },
          {
            sideHeading: '3. Pseudo (Blind) Relevance Feedback',
            bullets: [
              'Automatically assumes the top $k$ retrieved items from Pass 1 are relevant without requiring user clicks, expanding the query silently for stronger Pass-2 **Recall**.',
            ],
          },
        ],
      },
      {
        heading: 'Mathematical Formulation (Notes & Tunable Rocchio Equations)',
        bullets: [
          'Rocchio vector update combines original terms with normalized centroids of relevant and non-relevant item vectors.',
        ],
        formulas: [
          {
            label: 'Standard Equal-Weight Relevance Feedback Formula (Notes Form)',
            tex: 'Q_n = Q_o + \\frac{1}{r} \\sum_{i=1}^{r} DR_i - \\frac{1}{nr} \\sum_{j=1}^{nr} DNR_j',
            note: '$Q_n$ = revised query; $Q_o$ = original query; $r$ = relevant count; $DR_i$ = relevant document vectors; $nr$ = non-relevant count; $DNR_j$ = non-relevant vectors.',
          },
          {
            label: 'Generalized Tunable Rocchio Equation',
            tex: '\\vec{Q}_n = \\alpha \\vec{Q}_o + \\frac{\\beta}{r} \\sum_{i=1}^{r} \\vec{DR}_i - \\frac{\\gamma}{nr} \\sum_{j=1}^{nr} \\vec{DNR}_j',
            note: 'Weights $\\alpha, \\beta, \\gamma$ control trust in original query vs positive hits vs negative rejections (`Ide Regular / Dec-Hi`).',
          },
        ],
      },
    ],
    diagramId: 'relevance-feedback-shift',
    diagramCaption: 'Two-Panel Impact of Positive vs Negative Relevance Feedback (UNIT-4 Notes p.5)',
    walkthroughLinkId: 'similarity-rocchio',
    keyTakeaway:
      'Contrast **Static Thesauri limitations (`misses newest terms`)**, explain **Positive/Negative/Pseudo Feedback**, and write **Rocchio equation (`Q_n = Q_o + 1/r ΣDR - 1/nr ΣDNR`)**.',
  },
  {
    id: 'u4-sdi-search',
    shortTitle: 'SDI Search & Mail-File Filtering',
    unit: 'unit4',
    order: 4,
    title: 'Selective Dissemination of Information (SDI) Search',
    subtopicsCovered: [
      'Dissemination (Push–Pull) Architecture & Profiles',
      'Dynamic vs Static Distinction Across Ad-Hoc Search vs SDI',
      'Commercial Systems: LMDS (CRW 20-Second Architecture) & Statistical Error Minimization',
    ],
    summaryLine:
      '**Selective Dissemination of Information (SDI)** reverses pull search by matching continuously streaming incoming documents against standing **User Profiles** asynchronously into user mail files—pioneered at scale by **LMDS** and **Statistical Classification**.',
    bullets: [
      'Also described as **Push–Pull dissemination** (`push delivers matched alerts proactively; pull extracts requested records on demand`), **SDI** compares newly arriving normalized items directly against registered user interest profiles.',
      'Whereas ad-hoc retrieval searches a stable archival collection using short dynamic user queries, **SDI** runs **thousands of broad, relatively static standing profiles** concurrently per incoming document stream.',
    ],
    subSections: [
      {
        heading: 'Operational Algorithms for Large-Scale SDI Filtering',
        bullets: [
          'Real-time news and wire-service dissemination demands ultra-fast matching across thousands of simultaneous user profiles.',
        ],
        subGroups: [
          {
            sideHeading: '1. Logistical Message Dissemination System (LMDS — CRW)',
            bullets: [
              'Developed originally by **Chase, Rosen, and Wallace (CRW)**, **LMDS** was among the first high-speed commercial dissemination engines.',
              '**LMDS** inverted thousands of standing user profiles cleanly so newly arriving wires could match all profiles reliably every **20 seconds**.',
            ],
          },
          {
            sideHeading: '2. Statistical Classification & Explicit Error Minimization',
            bullets: [
              'Modern statistical dissemination engines derive profile selection thresholds using existing archival corpus weights alongside **Explicit Error Minimization** classification rules.',
              'Whenever an arriving item satisfies a user profile criterion, the engine asynchronously dispatches it straight to that subscriber **User Mail File**.',
            ],
          },
        ],
      },
    ],
    diagramId: 'sdi-push-architecture',
    diagramCaption: 'SDI Push Architecture Streaming New Documents Through Profiles to User Mail Files',
    table: {
      caption: 'Ad-Hoc Retrieval (Pull) vs SDI Information Filtering (Push)',
      headers: ['Dimension', 'Ad-Hoc Retrieval (Pull)', 'SDI Search / Filtering (Push)'],
      rows: [
        ['Dynamic Stream', 'User queries change moment to moment', 'Incoming document stream arrives continuously'],
        ['Static Asset', 'Archival Document Database & Indexes', 'Broad Standing User Interest Profiles'],
        ['Execution Scale', 'Single user query against DB index', 'Thousands of simultaneous profiles per arriving item'],
        ['Landmark Engine & Dest.', 'Interactive Hit Screen / Result List', 'LMDS (CRW, ~20 sec) -> User Mail File'],
      ],
      highlightRows: [0, 3],
    },
    keyTakeaway:
      'Contrast **Dynamic items + Static broad profiles**, define **Push vs Pull**, and explicitly highlight **LMDS (Chase, Rosen & Wallace — 20s streams)** and **Explicit Error Minimization**.',
  },
  {
    id: 'u4-weighted-boolean-fuzzy',
    shortTitle: 'Weighted Boolean, Fuzzy & P-Norm',
    unit: 'unit4',
    order: 5,
    title: 'Weighted Searches of Boolean Systems & Fuzzy Set Models',
    subtopicsCovered: [
      'Problems of Strict Boolean Operators on Weighted Indexes (Bookstein)',
      'Fuzzy Set Theory (Zadeh 1965): Degree of Membership',
      'Mixed Min-Max Model (Bookstein / Waller-Kraft)',
      'Considering All Item Weights & P-Norm Extended Boolean Model',
    ],
    summaryLine:
      '**Weighted Boolean** and **Fuzzy Set Models** generalize rigid `0/1` Boolean operators (`AND`, `OR`) into continuous membership blends (**Zadeh Fuzzy Min/Max**, **Mixed Min-Max**, **All-Item Geometric Weighting**, and **P-Norm**) enabling ranked retrieval.',
    bullets: [
      'Strict Boolean logic clashes with weighted index systems because classical `AND` behaves **too restrictively** (rejecting relevant items missing one minor term), classical `OR` behaves **too generally**, and neither produces ranked hit scores.',
      'Early work by **Bookstein (1978, 1980)** recognized the inherent **fuzziness** required to blend Boolean connectives smoothly with numeric document weights.',
    ],
    subSections: [
      {
        heading: 'Four Models Extending Boolean Logic to Continuous Weights',
        bullets: [
          'Mathematical generalizations replace crisp true/false decisions with graded scalar relevance functions.',
        ],
        subGroups: [
          {
            sideHeading: '1. Zadeh Fuzzy Set Theory (1965)',
            bullets: [
              'Introduced by mathematician Lotfi **Zadeh (1965)**, **Fuzzy Sets** replace binary membership with a continuous **Degree of Membership $\\in [0,1]$**, modeling `AND` as `min` and `OR` as `max`.',
            ],
            formulas: [
              {
                label: 'Zadeh Fuzzy Set Logic (1965)',
                tex: '\\text{DEG}_{A \\cap B} = \\min(\\text{DEG}_A, \\text{DEG}_B) \\qquad \\text{DEG}_{A \\cup B} = \\max(\\text{DEG}_A, \\text{DEG}_B)',
                note: 'Membership falls continuously inside $[0, 1]$ rather than strict binary `0` or `1`.',
              },
            ],
          },
          {
            sideHeading: '2. Mixed Min-Max Model (Waller–Kraft / Bookstein)',
            bullets: [
              'Pure `min/max` depends strictly on a single extreme term while ignoring all other weights, so the **Mixed Min-Max Model** blends `max` and `min` linearly via weighting parameters ($C_{\\text{OR1}}, C_{\\text{OR2}}, C_{\\text{AND1}}, C_{\\text{AND2}}$).',
            ],
            formulas: [
              {
                label: 'Mixed Min-Max Similarity Model (OR & AND Queries)',
                tex: '\\begin{aligned} \\text{SIM}(\\text{QUERY}_{\\text{OR}}, \\text{DOC}) &= C_{\\text{OR1}} \\cdot \\max(DOC_1, \\dots, DOC_n) + C_{\\text{OR2}} \\cdot \\min(DOC_1, \\dots, DOC_n) \\\\ \\text{SIM}(\\text{QUERY}_{\\text{AND}}, \\text{DOC}) &= C_{\\text{AND1}} \\cdot \\min(DOC_1, \\dots, DOC_n) + C_{\\text{AND2}} \\cdot \\max(DOC_1, \\dots, DOC_n) \\end{aligned}',
                note: 'Lets both highest and lowest matching term weights contribute proportionally to ranking.',
              },
            ],
          },
          {
            sideHeading: '3. Considering All Item Weights (Geometric Decay Sum)',
            bullets: [
              'Rather than inspecting only extreme minimum/maximum terms, the **All-Item Weighted Sum** incorporates every sorted document term score $d_i$ scaled by geometric decay factor $r$.',
            ],
            formulas: [
              {
                label: 'Considering All Item Weights (Geometric Rank Decay)',
                tex: '\\text{SIM}(\\text{QUERY}, \\text{DOC}) = \\frac{\\sum_{i=1}^{n} r^{i-1} d_i}{\\sum_{i=1}^{n} r^{i-1}}',
                note: 'Smoothly incorporates every term score $d_1 \\dots d_n$ using rank factor $r$.',
              },
            ],
          },
          {
            sideHeading: '4. P-Norm Extended Boolean Model (Salton)',
            bullets: [
              'The **P-Norm Model** evaluates $L_p$-norm spatial distances parameterized by $p \\in [1, \\infty)$ where **$p = 1$ yields pure vector-space sum** and **$p = \\infty$ converges back to strict Boolean `AND/OR`**.',
            ],
          },
        ],
      },
    ],
    keyTakeaway:
      'State strict Boolean problems (**no ranking, AND too narrow, OR too broad**), then give each model its clean card: **Zadeh (1965)**, **Mixed Min-Max**, **All-Item Weighted Sum**, and **P-Norm ($p=1$ vs $\\infty$)**.',
  },
  {
    id: 'u4-searching-internet-hypertext',
    shortTitle: 'Searching the Internet & Intelligent Agents',
    unit: 'unit4',
    order: 6,
    title: 'Searching the INTERNET, Hypertext & Intelligent Agents',
    subtopicsCovered: [
      'Web Directories & Search Crawlers (Yahoo!, Lycos vs AltaVista)',
      'URL Storage, Simple Word-Frequency Ranking & Attribute Query Tuples',
      'Intelligent Search Agents & All Six Essential Characteristics',
    ],
    summaryLine:
      '**Internet & Hypertext Search** deploys automated servers indexing web text + **URLs** (`Yahoo!, Lycos, AltaVista`), alongside autonomous **Intelligent Agents** defined by **six essential behavioral characteristics**.',
    bullets: [
      'Distributed Internet search servers crawl remote web hosts actively to build centralized indexes linking tokens to source **Uniform Resource Locators (URLs)** sorted via word-frequency statistical ranking.',
    ],
    subSections: [
      {
        heading: 'Web Search Servers (Yahoo!, Lycos vs AltaVista) & Attribute Tuples',
        bullets: [
          'Early search pioneers contrasted distinct web-harvesting philosophies and formal multi-attribute query structures.',
        ],
        subGroups: [
          {
            sideHeading: 'Yahoo!, Lycos vs AltaVista Indexing Philosophy',
            bullets: [
              'Prominent Internet indexing nodes included hierarchical directory **Yahoo!** alongside automated full-text crawlers **Lycos** (`lycos.com`) and **AltaVista** (`altavista.digital.com`).',
              '**Design Contrast:** **Lycos** returned only **home pages** from each visited web server for automatic indexing, whereas **AltaVista** harvested **all text across every page of a site**.',
              'Both crawlers stored target **URLs** and ordered hits using simple occurrence statistics alongside hyperlinked **Anchor Text** context.',
            ],
          },
          {
            sideHeading: 'Attribute-Value Web Query Tuples (OR & AND Forms)',
            bullets: [
              'Formal hypertext/attribute web search statements bind pairs $(A_i, a_i)$ systematically under logical `OR` and `AND` combinations.',
            ],
            formulas: [
              {
                label: 'Formal Attribute-Value Internet Query Tuple Forms (OR & AND)',
                tex: 'Q_{\\text{OR}} = (A_1, a_1) \\; \\text{OR} \\; (A_2, a_2) \\; \\text{OR} \\; \\dots \\; \\text{OR} \\; (A_n, a_n) \\qquad Q_{\\text{AND}} = (A_1, a_1) \\; \\text{AND} \\; (A_2, a_2) \\; \\text{AND} \\; \\dots \\; \\text{AND} \\; (A_n, a_n)',
                note: 'Each tuple $(A_i, a_i)$ matches an attribute-value target across distributed Internet repositories.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Six Essential Characteristics of an Intelligent Agent',
        bullets: [
          'An **Intelligent Agent** accepts a user information need, traverses distributed Internet sites independently, and brings back curated hits exhibiting six mandatory properties.',
        ],
        subGroups: [
          {
            sideHeading: '1. Autonomy & 2. Communications Ability',
            bullets: [
              '**Trait 1 — Autonomy:** Operates independently without constant human intervention, controlling internal states and traversing remote sites using preset relevance rules.',
              '**Trait 2 — Communications Ability:** Speaks standardized open interface protocols so it converses fluently with remote servers and users while traversing hosts.',
            ],
          },
          {
            sideHeading: '3. Capacity for Cooperation & 4. Capacity for Reasoning',
            bullets: [
              '**Trait 3 — Cooperation:** Collaborates across multiple specialized agents to share partial results and execute mutually beneficial tasks.',
              '**Reasoning Mode A — Rule-Based:** Evaluates pre-defined user condition-action rules directly.',
              '**Reasoning Mode B — Knowledge-Based:** Leverages historical stored condition-action experience to infer future decisions.',
              '**Reasoning Mode C — Artificial Evolution:** Spawns child agents equipped with higher logic capabilities to accomplish evolving objectives.',
            ],
          },
          {
            sideHeading: '5. Adaptive Behavior & 6. Trustworthiness',
            bullets: [
              '**Trait 5 — Adaptive Behavior:** Assesses live environmental state (`integrating Autonomy and Reasoning`) to adjust collection actions dynamically over time.',
              '**Trait 6 — Trustworthiness:** Guarantees security and fidelity so the agent strictly retrieves authorized, accurate items faithfully on the user behalf.',
            ],
          },
        ],
      },
    ],
    keyTakeaway:
      'Contrast **Lycos (home pages) vs AltaVista (full site)**, include $Q_{\\text{OR}}/Q_{\\text{AND}}$, and present all **6 Intelligent Agent traits** (`with all 3 reasoning types: Rule, Knowledge, Artificial Evolution`).',
  },
  {
    id: 'u4-visualization-cognition-perception',
    shortTitle: 'Info Visualization, Cognition & Perception',
    unit: 'unit4',
    order: 7,
    title: 'Introduction to Information Visualization, Cognition & Perception',
    subtopicsCovered: [
      'Visualization Capabilities, 3 User Benefits & Two Classes (Link vs Attribute)',
      'Cognition vs Perception & Interface Evolution (Typewriter -> Paper -> WIMP -> Audio/Touch/VR)',
      'Five Gestalt Principles With Exact Notes Examples',
    ],
    summaryLine:
      '**Information Visualization** shifts heavy cognitive reading onto high-bandwidth human **Perception** (`via WIMP/Link/Attribute tools`) governed by the **5 Gestalt Visual Grouping Laws**.',
    bullets: [
      '**Information Visualization** transforms complex index metadata and hit sets into interactive visual structures so users spot clusters and patterns effortlessly.',
      '**Three Core User Gains:** **(A)** Cuts time needed to interpret hits and clusters, **(B)** reveals structural relationships across items rather than treating each doc independently, and **(C)** executes sophisticated queries with simple clicks.',
    ],
    subSections: [
      {
        heading: 'Interactive Visualization Capabilities & Two Broad Classes',
        bullets: [
          'Electronic visualization displays support four core operations categorized into Link or Attribute mapping.',
        ],
        subGroups: [
          {
            sideHeading: 'Four Electronic Visualization Capabilities (Notes p.10)',
            bullets: [
              '**Capability 1 — Style Modification:** Dynamically updates display conditions including color scales and encodings.',
              '**Capability 2 — Consistent State Tracking:** Updates values smoothly while keeping the spatial representation constant.',
              '**Capability 3 — Spatio-Temporal Animation:** Animates display changes across dimensions of space and time.',
              '**Capability 4 — User-Controlled Hyperlinks:** Builds interactive clickable edges linking correlated data nodes.',
            ],
          },
          {
            sideHeading: 'Link Visualization vs Attribute Visualization',
            bullets: [
              '**Link Visualization** renders explicit structural connections and edge topologies among retrieved documents (`citations, cluster graphs`).',
              '**Attribute Visualization** illuminates shared content properties (`term importance, publication year, subject weight`) across massive numbers of items.',
            ],
          },
        ],
      },
      {
        heading: 'Cognition vs Perception & Human-Computer Interface Evolution',
        bullets: [
          'Effective UI design shifts slow deliberate cognitive work onto ultra-fast subconscious visual perception.',
        ],
        subGroups: [
          {
            sideHeading: 'Cognition (Store) vs Perception (Receive)',
            bullets: [
              '**Cognition** means storing, processing, and understanding retrieved knowledge through conscious thought and reasoning (**slower bottleneck**).',
              '**Perception** is the immediate physiological awareness and reception of visual shapes, hues, and patterns through the eyes (**high-bandwidth channel**).',
            ],
          },
          {
            sideHeading: 'UI Paradigm Evolution: Typewriter -> Paper -> WIMP -> Multi-Sensory HCI',
            bullets: [
              'Early computer systems copied **typewriters**, progressed into **display-as-paper** metaphors, and matured into modern **WIMP (`Windows, Icons, Menus, Pointers`)** graphical interfaces.',
              'Future multi-sensory **HCI** complements dominant human **Vision** with **Speech input/output** replacing basic chimes and **Virtual Reality Touch cues** to lower user cognitive overhead.',
            ],
          },
        ],
      },
      {
        heading: 'Five Gestalt Principles of Visual Grouping',
        bullets: [
          '**Principle 1 — Proximity:** Figures positioned physically near each other are perceived immediately as one unified group.',
          '**Principle 2 — Similarity:** Elements sharing color, icon, or shape are mentally clustered together across distance.',
          '**Principle 3 — Continuity:** Eyes follow smooth continuous paths—so a circle bisected by a line reads as **one circle + one line**, rather than two half-circles welded together.',
          '**Principle 4 — Closure:** Human perception bridges small missing contour gaps automatically—reading a **dashed-line square** immediately as one closed square.',
          '**Principle 5 — Connectedness:** Uniform dots, symbols, or areas joined explicitly by connecting lines read together as a single unit.',
        ],
      },
    ],
    diagramId: 'gestalt-perception-principles',
    diagramCaption: 'All Five Gestalt Visual Grouping Laws Used in IRS Interfaces',
    keyTakeaway:
      'Include the **4 electronic visualization capabilities**, **Cognition vs Perception + WIMP evolution**, and all **5 Gestalt laws** with the **circle+diameter** and **dashed-square** notes examples.',
  },
  {
    id: 'u4-visualization-technologies',
    shortTitle: 'Information Visualization Technologies',
    unit: 'unit4',
    order: 8,
    title: 'Information Visualization Technologies',
    subtopicsCovered: [
      'Goals of Display (Document Clustering vs Search Statement Analysis)',
      'Tree Structure, Cone Tree & Perspective Wall',
      'Tree Maps, Envision System, DCARS (Calspan) & Cityscape',
    ],
    summaryLine:
      '**Information Visualization Technologies** present search hierarchies, term weights, and hit-document clusters cleanly using **Tree Structures**, **Cone Trees**, **Perspective Walls**, **Tree Maps**, **Envision**, **DCARS**, and **Cityscape**.',
    bullets: [
      'Display tools pursue **two primary goals**: **(1) Document Clustering (`showing cluster sizes and topics for browsing`)** and **(2) Search Statement Analysis (`displaying expanded terms alongside relevance contribution weights`)**.',
    ],
    subSections: [
      {
        heading: 'All Seven Information Visualization Technologies (UNIT-4 Notes p.12–16)',
        bullets: [
          'Each visualization paradigm adapts physical, geometric, or architectural metaphors to prevent visual clutter over thousands of items.',
        ],
        subGroups: [
          {
            sideHeading: '1. Tree Structure (Organizational & Hierarchical Aggregates)',
            bullets: [
              '**Tree Structures** visualize time-varying containment relationships cleanly across organizational charts, mechanical parts, and top-down **hierarchical document clusters**.',
            ],
          },
          {
            sideHeading: '2. Cone Tree (3D Rotating Apex Hierarchy)',
            bullets: [
              'A **Cone Tree** renders a **3D hierarchy** placing each parent node at a cone apex with child nodes arranged evenly around a circular base; any child can root a sub-cone, and clicking any node **rotates it smoothly to the front**.',
            ],
          },
          {
            sideHeading: '3. Perspective Wall (Three-Area Focus + Context)',
            bullets: [
              'The **Perspective Wall** partitions wide linear archives cleanly into **three distinct visual areas** (`center crisp Focus panel flanked by two slanted Context side panels`) keeping global structure visible.',
            ],
          },
          {
            sideHeading: '4. Tree Maps (Johnson — Recursive Nested Space-Filling Rectangles)',
            bullets: [
              '**Tree Maps** maximize display area by recursively subdividing rectangular screen partitions according to parent-child weights (`for instance grouping CPU, OS, Memory, and Network Management cleanly under Computer Operating Systems vs Computer Applications`).',
            ],
          },
          {
            sideHeading: '5. Envision System (Simple 2D Multi-Attribute Matrix)',
            bullets: [
              'The **Envision System** presents **relevance rank, estimated relevance score, and additional query attributes simultaneously** inside an intentionally clean 2D graphical layout.',
            ],
          },
          {
            sideHeading: '6. DCARS (Document Content Analysis & Retrieval System — Calspan)',
            bullets: [
              'Developed by **Calspan Advanced Technology Center** to augment **RetrievalWare**, **DCARS** renders query results as horizontal histogram rows where **bar width encodes each term contribution**—showing clearly why an item matched (`though less intuitive for editing queries`).',
            ],
          },
          {
            sideHeading: '7. Cityscape (Skyscraper Metaphor for Themes)',
            bullets: [
              '**Cityscape** adapts hierarchical and network navigation to the metaphor of moving through a city where clustered **skyscrapers represent topical theme areas** instead of rolling hills.',
            ],
          },
        ],
        diagramId: 'visualization-technologies',
        diagramCaption: 'Visual Overview: Cone Tree, Perspective Wall, Tree Maps, Envision, DCARS & Cityscape',
      },
    ],
    table: {
      caption: 'Comparison of All Seven Visualization Technologies',
      headers: ['System / Technique', 'Primary Visual Metaphor', 'Key Feature / Use Case'],
      rows: [
        ['Tree Structure', '2D parent-child node hierarchy', 'Time trends, parts hierarchies & doc clusters'],
        ['Cone Tree', '3D cones with circular rotating child bases', 'Click any node to rotate sub-cone to front'],
        ['Perspective Wall', '3 visual areas: front focus + 2 side context wings', 'Focus + context browsing along linear timelines'],
        ['Tree Maps', 'Space-filling recursively subdivided rectangles', 'Groups domains (`CPU/OS/Memory/Network`) efficiently'],
        ['Envision', 'Intentional simple 2D multi-axis scatter + icons', 'Displays rank, relevance estimate & metadata jointly'],
        ['DCARS (Calspan)', 'Horizontal histogram rows beside RetrievalWare', 'Explains why document matched (`term contribution width`)'],
        ['Cityscape', '3D clusters of city skyscrapers', 'Navigation metaphor replacing hills with theme skyscrapers'],
      ],
      highlightRows: [1, 3, 5],
    },
    keyTakeaway:
      'Include the **2 visualization goals (`Document Clustering vs Search Analysis`)** and dedicate crisp points to all **7 systems (`Tree Structure, Cone Tree, Perspective Wall, Tree Maps, Envision, Calspan DCARS, Cityscape`)**.',
  },
];
