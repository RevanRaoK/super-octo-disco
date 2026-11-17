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
      {
        label: 'Search Statement Definition',
        text: 'A user-generated information statement attempting to specify the conditions needed to logically subset the total item space to the cluster containing needed information.',
      },
      {
        label: 'Query Modes & Term Weighting',
        text: 'Supports traditional Boolean logic and Natural Language queries while allowing users to assign importance weights to different concepts.',
      },
      {
        label: 'Query Length Law',
        text: 'The length of a search statement directly affects retrieval effectiveness—longer, richer search queries make it significantly easier for the IRS to find relevant items.',
      },
    ],
    subSections: [
      {
        heading: 'Progressive Levels of Binding & Meta-Language Translation',
        description:
          'As a search statement travels from human thought into index matching, binding transforms vocabulary across three progressive stages.',
        subGroups: [
          {
            sideHeading: 'Level 1 — User Vocabulary & Past Experience Binding',
            description:
              'Initially, terms inside a search statement bind strictly to the personal vocabulary, domain jargon, and past experiences of the user.',
            example: 'User enters `"impact of oil spills in Alaska on price of oil"`.',
          },
          {
            sideHeading: 'Level 2 — System Meta-Language Binding',
            description:
              'The search system parses the statement into its internal meta-language (`analogous to Item Indexing`) according to its retrieval paradigm:',
            subGroups: [
              {
                sideHeading: '1. Statistical Systems',
                description:
                  'Determines stemmed processing tokens of interest and assigns term weights based on occurrence frequencies.',
              },
              {
                sideHeading: '2. Natural Language Systems',
                description:
                  'Determines syntactic phrases and discourse semantics using algorithms mirroring document indexing.',
              },
              {
                sideHeading: '3. Concept Systems & Thesaurus Expansion',
                description:
                  'Maps search statements onto canonical indexed concepts; parentheses indicate automatic Thesaurus Expansion.',
                example: '`oil (petroleum), spills (accidents), price (cost, value)`',
              },
            ],
          },
          {
            sideHeading: 'Level 3 — Collection Weighting & Hit-List Binding',
            description:
              'Attaches current database collection statistics (`Document Frequency DF`, `Total Frequency`, and `Inverse Document Frequency IDF`) onto each expanded token (`Figure 7.1`) before inverted list execution.',
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
      {
        label: 'Ranking Principle',
        text: 'Presents the most likely relevant items first using a scalar similarity score between document vector $DOC_i$ and query vector $QUERY_j$.',
      },
      {
        label: 'Two Fundamental Similarity Axioms',
        text: 'Every valid similarity formula satisfies two rules:',
        children: [
          '1. Result values increase strictly as items become more similar.',
          '2. Value equals zero when items are completely dissimilar.',
        ],
      },
      {
        label: 'Passage-Level Similarity Restriction',
        text: 'Restricting similarity calculation to localized Passages rather than whole items yields a significant gain in Precision with minor impact on Recall.',
      },
    ],
    subSections: [
      {
        heading: 'Four Classical Vector Similarity Formulas',
        description:
          'Different retrieval formulas balance raw term overlap against document length normalization differently.',
        subGroups: [
          {
            sideHeading: '1. Simple Dot-Product Measure (Unnormalized)',
            description:
              'Sums products of matching term weights across vector dimensions; suffers from lack of normalization for document length variances.',
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
            description:
              'Normalizes document and query vectors by their Euclidean norms (`measuring the cosine of the angle between vectors`), cleanly eliminating document length bias.',
            formulas: [
              {
                label: 'Formula 2: Cosine Similarity (Salton, SMART System)',
                tex: '\\text{SIM}(\\text{DOC}_i, \\text{QUERY}_j) = \\frac{\\sum_{k=1}^{n} \\left(DOC_{i,k} \\times QTERM_{j,k}\\right)}{\\sqrt{\\sum_{k=1}^{n} (DOC_{i,k})^2 \\times \\sum_{k=1}^{n} (QTERM_{j,k})^2}}',
                note: 'Ranges cleanly from $0$ (orthogonal / disjoint) to $1$ (identical vector direction).',
              },
            ],
          },
          {
            sideHeading: '3. Dice Similarity Formula',
            description:
              'Simplifies the Jaccard denominator and introduces a factor of $2$ in the numerator (`normalization invariant to the number of terms in common`).',
            formulas: [
              {
                label: 'Formula 3: Dice Similarity',
                tex: '\\text{SIM}(\\text{DOC}_i, \\text{QUERY}_j) = \\frac{2 \\sum_{k=1}^{n} \\left(DOC_{i,k} \\times QTERM_{j,k}\\right)}{\\sum_{k=1}^{n} DOC_{i,k} + \\sum_{k=1}^{n} QTERM_{j,k}}',
                note: 'Doubles co-occurrence over arithmetic sum of active document and query terms.',
              },
            ],
          },
          {
            sideHeading: '4. Jaccard Similarity Formula',
            description:
              'Normalizes overlap relative to total set union ($|D| + |Q| - |D \\cap Q|$), penalizing non-overlapping terms.',
            formulas: [
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
          {
            label: 'Role of the Query Threshold',
            text: 'Similarity algorithms score the entire database (`leaving most unrelated items near or equal to zero`); applying a Query Threshold trims low scores to define the final Resultant Hit File.',
          },
          {
            label: '8-Term Notes Vocabulary',
            text: '`[American, geography, Lakes, Mexico, Painter, oil, Reserve, Subject]`',
            children: [
              {
                label: 'DOC1 (`"geography of Mexico suggests oil reserves are available"`)',
                text: 'Vector `(0, 1, 0, 2, 0, 3, 1, 0)`',
              },
              {
                label: 'DOC2 (`"American Geography has lakes available everywhere"`)',
                text: 'Vector `(1, 3, 0, 0, 0, 0, 0, 0)`',
              },
              {
                label: 'DOC3 (`"Painters Suggest Mexico Lakes as Subjects"`)',
                text: 'Vector `(0, 0, 1, 3, 3, 0, 0, 2)`',
              },
            ],
          },
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
      {
        label: 'Limitations of Static Thesauri',
        text: 'Even though thesauri and semantic networks broaden queries, they still fail to match the specific author dialect in a local database and risk missing the latest newly coined words.',
      },
      {
        label: 'Interactive Query Reformulation Concept',
        text: 'Users evaluate initial hits as Relevant or Non-Relevant so the IRS constructs a new query increasing weights of terms in relevant items and decreasing weights of terms in non-relevant items.',
      },
    ],
    subSections: [
      {
        heading: 'Three Feedback Refinement Mechanisms',
        subGroups: [
          {
            sideHeading: '1. Positive Feedback (Vector Pull + Term Expansion)',
            description:
              'Adds normalized weights from confirmed relevant documents ($DR_i$) onto $Q_o$, pulling $Q_n$ toward the relevant topic cluster and expanding the query with helpful terms missing initially.',
          },
          {
            sideHeading: '2. Negative Feedback (Vector Push)',
            description:
              'Subtracts normalized weights from non-relevant false hits ($DNR_j$), steering $Q_n$ cleanly away from distracting terminology.',
          },
          {
            sideHeading: '3. Pseudo (Blind) Relevance Feedback',
            description:
              'Automatically assumes the top $k$ retrieved items from Pass 1 are relevant without requiring manual clicks, silently expanding terms for stronger Pass-2 Recall.',
          },
        ],
      },
      {
        heading: 'Mathematical Formulation (Notes & Tunable Rocchio Equations)',
        description:
          'Rocchio vector update combines the original query with normalized centroids of relevant and non-relevant document vectors.',
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
      {
        label: 'Push–Pull Dissemination Model',
        text: 'Push proactively dispatches newly arrived matching documents to subscribers based on standing user profiles; Pull extracts requested records on demand when a user submits an interactive query.',
      },
      {
        label: 'Dynamic vs Static Inversion',
        text: 'Unlike ad-hoc search (dynamic short queries against a static archive), SDI runs thousands of relatively static, broad standing profiles concurrently against a continuously arriving dynamic document stream.',
      },
      {
        label: 'Corpus Weighting Support',
        text: 'Historical database statistics supply baseline IDF/weighting factors used during indexing and profile similarity comparison.',
      },
    ],
    subSections: [
      {
        heading: 'Operational Algorithms for Large-Scale SDI Filtering',
        subGroups: [
          {
            sideHeading: '1. Logistical Message Dissemination System (LMDS — CRW)',
            description:
              'Developed by Chase, Rosen, and Wallace (CRW) as one of the earliest high-speed commercial dissemination engines.',
            bullets: [
              'Inverted thousands of standing user profiles so continuously arriving items could match all profiles every **20 seconds**.',
            ],
          },
          {
            sideHeading: '2. Statistical Classification & Explicit Error Minimization',
            description:
              'Uses Statistical Classification and Explicit Error Minimization to determine selection thresholds for each profile—asynchronously delivering matching items straight to the subscriber User Mail File.',
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
      {
        label: 'Three Flaws of Strict Boolean Logic on Weighted Systems',
        text: 'Normal crisp Boolean operators fail when combined with weighted index systems:',
        children: [
          {
            label: 'AND Too Restrictive',
            text: 'Rejects relevant items missing even one minor term.',
          },
          {
            label: 'OR Too General',
            text: 'Retrieves too many weak hits matching only one common term.',
          },
          {
            label: 'No Ranking Output',
            text: 'Pure Boolean logic returns an unranked set without relevance ordering.',
          },
        ],
      },
      {
        label: 'Bookstein Fuzziness Foundation (1978, 1980)',
        text: 'Early work by Bookstein identified the fuzziness inherent in integrating Boolean operators cleanly with weighted index systems.',
      },
    ],
    subSections: [
      {
        heading: 'Four Models Extending Boolean Logic to Continuous Weights',
        subGroups: [
          {
            sideHeading: '1. Zadeh Fuzzy Set Theory (1965)',
            description:
              'Introduced by mathematician Lotfi Zadeh (1965); replaces strict binary set membership with a continuous Degree of Membership $\\in [0, 1]$, computing `AND` via `min` and `OR` via `max`.',
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
            description:
              'Overcomes pure `min/max` reliance on only a single extreme term weight by blending `max` and `min` linearly using tunable coefficients ($C_{\\text{OR1}}, C_{\\text{OR2}}, C_{\\text{AND1}}, C_{\\text{AND2}}$).',
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
            description:
              'Incorporates every sorted term weight $d_i$ in the document rather than only min/max extremes, scaled by geometric rank factor $r$.',
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
            description:
              'Measures $L_p$-norm distances parameterized by $p \\in [1, \\infty)$: **$p = 1$ reduces to pure vector-space sum** while **$p = \\infty$ converges back to strict Boolean `AND / OR`**.',
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
      'Intelligent Search Agents & All Six Key Characteristics',
    ],
    summaryLine:
      '**Internet & Hypertext Search** deploys automated servers indexing web text + **URLs** (`Yahoo!, Lycos, AltaVista`), alongside autonomous **Intelligent Agents** defined by **six essential behavioral characteristics**.',
    bullets: [
      {
        label: 'Internet Search Crawling & URL Indexing',
        text: 'Distributed search servers visit Internet sites, retrieve text, store Uniform Resource Locators (URLs), and rank hits using simple statistical word-occurrence algorithms.',
      },
    ],
    subSections: [
      {
        heading: 'Web Search Servers (Yahoo!, Lycos vs AltaVista) & Attribute Tuples',
        subGroups: [
          {
            sideHeading: '1. Yahoo!, Lycos vs AltaVista Design Contrast',
            bullets: [
              {
                label: 'Early Web Nodes',
                text: 'Prominent Internet search hubs included **Yahoo!**, **Lycos** (`lycos.com`), and **AltaVista** (`altavista.digital.com`).',
              },
              {
                label: 'Lycos (Home Pages) vs AltaVista (Full Site)',
                text: 'Lycos indexed only **home pages** from each visited server, whereas AltaVista retrieved and indexed **all text across every page** at a site.',
              },
            ],
          },
          {
            sideHeading: '2. Attribute-Value Web Query Tuples (OR & AND Forms)',
            description:
              'Formal hypertext/attribute web search statements bind pairs $(A_i, a_i)$ under logical `OR` and `AND` combinations.',
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
        heading: 'Six Key Characteristics of Intelligent Agents (UNIT-4 Notes p.8–9)',
        description:
          'An Intelligent Agent accepts a user information need, traverses Internet sites independently, and locates items of interest using six essential traits:',
        subGroups: [
          {
            sideHeading: '1. Autonomy',
            description:
              'Operates without continuous human intervention, controlling internal states and making independent decisions to traverse sites based on pre-established criteria.',
          },
          {
            sideHeading: '2. Communications Ability',
            description:
              'Communicates fluently with information sites as it traverses them using a universally accepted interface language.',
          },
          {
            sideHeading: '3. Capacity for Cooperation',
            description:
              'Cooperates with other intelligent agents to share results and perform mutually beneficial tasks.',
          },
          {
            sideHeading: '4. Capacity for Reasoning',
            description: 'Supports three distinct reasoning scenarios:',
            subGroups: [
              {
                sideHeading: 'Rule-Based Reasoning',
                description: 'Executes user-defined condition–action rules directly.',
              },
              {
                sideHeading: 'Knowledge-Based Reasoning',
                description:
                  'Uses previously stored conditions and past actions to deduce future decisions.',
              },
              {
                sideHeading: 'Artificial Evolution-Based Reasoning',
                description:
                  'Spawns new child agents endowed with higher logic capabilities to accomplish evolving objectives.',
              },
            ],
          },
          {
            sideHeading: '5. Adaptive Behavior',
            description:
              'Closely tied to Autonomy (1) and Reasoning (4)—assesses current environmental state and dynamically adapts future actions.',
          },
          {
            sideHeading: '6. Trustworthiness',
            description:
              'Assures the user that the agent acts faithfully and securely on their behalf to retrieve authorized, relevant information.',
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
      {
        label: 'Information Visualization Definition',
        text: 'Transformation of complex search data and index metadata into a visual form enabling users to observe, understand, and select relevant items quickly.',
      },
      {
        label: 'Three Core Areas Visualization Helps (A, B, C)',
        text: 'Effective visual presentation supports users in three ways:',
        children: [
          'A. Reduces time needed to understand search results and clusters of relevant items.',
          'B. Yields insights from inter-item relationships instead of treating each item independently.',
          'C. Enables simple user actions that perform sophisticated search functions.',
        ],
      },
    ],
    subSections: [
      {
        heading: 'Electronic Visualization Functions & Two Broad Classes',
        subGroups: [
          {
            sideHeading: '1. Four Electronic Visualization Functions (Notes p.10)',
            bullets: [
              '1. Modify representations of data or display conditions (`changing colors and scales`).',
              '2. Keep the same visual representation constant while updating underlying data changes.',
              '3. Animate displays to show changes across space and time.',
              '4. Create user-controlled hyperlinks establishing explicit relationships between data.',
            ],
          },
          {
            sideHeading: '2. Link Visualization vs Attribute Visualization',
            subGroups: [
              {
                sideHeading: 'Link Visualization',
                description:
                  'Displays explicit structural relationships and edges among retrieved items (`citations, cluster networks`).',
              },
              {
                sideHeading: 'Attribute Visualization',
                description:
                  'Reveals shared content attributes (`term weights, categories, years`) across large numbers of items.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Cognition vs Perception & Human–Computer Interface Evolution',
        subGroups: [
          {
            sideHeading: '1. Cognition vs Perception',
            bullets: [
              {
                label: 'Cognition (Store / Reason)',
                text: 'Acquiring knowledge and understanding slowly through conscious thought, memory, experience, and the senses.',
              },
              {
                label: 'Perception (Receive / Sense)',
                text: 'Immediate physiological awareness—seeing, hearing, or noticing visual patterns through the senses (`high-bandwidth visual brain channel`).',
              },
              {
                label: 'Core HCI Goal',
                text: 'Shifting processing load from slower cognitive reading onto faster visual perception dramatically improves human–computer interfaces.',
              },
            ],
          },
          {
            sideHeading: '2. Interface Evolution (Typewriter -> Paper -> WIMP -> Multi-Sensory)',
            bullets: [
              {
                label: 'Typewriter -> Paper -> WIMP',
                text: 'Interfaces evolved from typewriter terminals to display-as-paper metaphors and modern WIMP (`Windows, Icons, Menus, Pointers`) GUIs.',
              },
              {
                label: 'Multi-Sensory Extensions',
                text: 'Speech input/output is replacing simple audio alerts alongside Virtual Reality touch senses to further cut user overhead.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Five Gestalt Principles of Visual Perception (Notes p.11–12)',
        subGroups: [
          {
            sideHeading: '1. Proximity',
            description: 'Nearby figures are grouped together visually as a unified cluster.',
          },
          {
            sideHeading: '2. Similarity',
            description: 'Figures sharing similar color, size, or shape are grouped together.',
          },
          {
            sideHeading: '3. Continuity',
            description:
              'Figures are interpreted as smooth continuous patterns rather than discontinuous concatenated shapes.',
            example:
              'A circle with its diameter drawn is perceived as one continuous circle + one line, rather than two half-circles welded together.',
          },
          {
            sideHeading: '4. Closure',
            description: 'Small gaps within a figure are filled in mentally to form a complete whole.',
            example:
              'Using dashed lines to draw a square still allows immediate recognition of a closed square.',
          },
          {
            sideHeading: '5. Connectedness',
            description: 'Uniform and linked spots, lines, or areas are perceived as a single unit.',
          },
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
      {
        label: 'Two Major Goals of Search Result Display',
        text: 'Visualization tools focus on two tasks:',
        children: [
          {
            label: '1. Document Clustering',
            text: 'Displays cluster sizes and topics so users navigate straight to relevant document groups.',
          },
          {
            label: '2. Search Statement Analysis',
            text: 'Displays total query terms (`including relevance feedback & thesaurus expansions`) alongside retrieved items to show term contributions to ranking.',
          },
        ],
      },
    ],
    subSections: [
      {
        heading: 'All Seven Information Visualization Technologies (UNIT-4 Notes p.12–16)',
        subGroups: [
          {
            sideHeading: '1. Tree Structure',
            description:
              'Represents hierarchical containment and aggregates from higher to lower levels over time.',
            example: 'Organizational structures, mechanical device parts, and hierarchical clustering of documents.',
          },
          {
            sideHeading: '2. Cone Tree',
            description:
              '3-Dimensional representation placing a parent node at a cone apex with subordinate items arranged evenly around a circular base; any child node can root another cone, and selecting a node rotates it smoothly to the front of the display.',
          },
          {
            sideHeading: '3. Perspective Wall',
            description:
              'Divides wide linear information into three visual areas (`one front crisp focus panel flanked by two slanted context side wings`), keeping global context visible while focusing on a particular area.',
          },
          {
            sideHeading: '4. Tree Maps',
            description:
              'Maximizes screen space by recursively subdividing rectangular boxes based on parent–child relationships.',
            example:
              'Grouping `CPU`, `OS`, `Memory`, and `Network Management` articles as nested boxes under `Computer Operating Systems` alongside `Computer Applications`.',
          },
          {
            sideHeading: '5. Envision System',
            description:
              'Displays relevance rank, estimated relevance score, and additional query attributes simultaneously inside an intentionally simple 2D graphical layout.',
          },
          {
            sideHeading: '6. Document Content Analysis & Retrieval System (DCARS — Calspan)',
            description:
              'Developed by Calspan Advanced Technology Center to augment `RetrievalWare`; displays results as horizontal histogram rows where tile bar width shows each term contribution—clearly explaining why an item matched (`though harder to use for editing queries`).',
          },
          {
            sideHeading: '7. Cityscape',
            description:
              'Represents hierarchical and networked corpora using the metaphor of navigating a city, where clustered skyscrapers represent topical theme areas instead of terrain hills.',
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
