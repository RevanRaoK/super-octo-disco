import { WalkthroughDeck } from '@/types/course';

export const WALKTHROUGH_DECKS: WalkthroughDeck[] = [
  {
    id: 'inverted-stemming',
    unit: 'unit2',
    title: '1. Normalization, Porter Stemming & Inverted File Build',
    subtitle:
      'Step-by-step trace converting raw sentences into stop-filtered, stemmed processing tokens, Dictionary entries, and Inversion Lists.',
    linkedTopicSlug: 'u2-inverted-file-structure',
    datasetSummary:
      'DOC1: "computer, bit, byte" | DOC2: "memory, byte" | DOC3: "computer, bit, memory" | DOC4: "byte, computer" (plus sample inflections).',
    slides: [
      {
        stepNumber: 1,
        pillLabel: '1 · Tokenize & Stop',
        title: 'Tokenize Raw Documents & Strip Stop Words',
        bullets: [
          'Input normalization splits raw document lines into individual processing tokens (`computers`, `bits`, `bytes`, `memories`, `the`, `and`).',
          'The **Stop Algorithm** filters high-frequency function words (`the`, `is`, `and`, `of`) so only meaningful indexing candidates advance.',
        ],
        formulaTex: '\\text{Tokens} \\xrightarrow{\\text{Stop List}} \\text{Filtered Content Terms (}\\approx 30\\%\\text{ size saved)}',
        svgStateKey: 'inv-1',
        table: {
          caption: 'Document File After Tokenization & Stop-Word Filtering',
          headers: ['Doc ID', 'Raw Sentence Fragment', 'Kept Content Tokens'],
          rows: [
            ['DOC #1', 'the computer has bit and byte', 'computer, bit, byte'],
            ['DOC #2', 'a memory with one byte', 'memory, byte'],
            ['DOC #3', 'computer bit and memory', 'computer, bit, memory'],
            ['DOC #4', 'byte inside computer', 'byte, computer'],
          ],
          highlightRows: [0],
        },
      },
      {
        stepNumber: 2,
        pillLabel: '2 · Porter Stemming',
        title: 'Apply Porter Stemmer Suffix Reduction',
        bullets: [
          'The **Porter Stemmer** inspects each token vowel-consonant measure $m$ (`[C](VC)^m[V]`) to conflate plurals and verb variants onto canonical stems.',
          'Words such as `computers`, `computing`, and `computed` converge cleanly onto one shared dictionary root (`comput`), boosting **Recall**.',
        ],
        formulaTex: '[C](VC)^m[V] \\qquad \\text{computers} \\xrightarrow{\\text{Step 1a}} \\text{computer} \\qquad \\text{computing} \\xrightarrow{\\text{Step 1b}} \\text{comput}',
        svgStateKey: 'inv-2',
        table: {
          caption: 'Porter Conflation Trace Across Inflected Variants',
          headers: ['Original Token', 'Rule Applied', 'Resulting Stem'],
          rows: [
            ['computers', 'Step 1a: drop plural -s', 'computer'],
            ['bytes', 'Step 1a: drop plural -s', 'byte'],
            ['memories', 'Step 1a: -ies → -i', 'memori'],
            ['bits', 'Step 1a: drop plural -s', 'bit'],
          ],
          highlightRows: [0, 2],
        },
      },
      {
        stepNumber: 3,
        pillLabel: '3 · Build Dictionary',
        title: 'Sort Unique Vocabulary & Count Document Frequency (DF)',
        bullets: [
          'All normalized stems across DOC #1 through DOC #4 are sorted alphabetically inside the **Dictionary (Vocabulary List)**.',
          'Each dictionary row stores the term string alongside its total **Document Frequency ($DF$)** (`bit(2), byte(3), computer(3), memory(2)`).',
        ],
        formulaTex: 'DF(\\text{term}) = \\text{Number of distinct documents containing that term}',
        svgStateKey: 'inv-3',
        table: {
          caption: 'Sorted Dictionary With Document Frequency Pointers',
          headers: ['Dictionary Term', 'DF Count', 'Posting List Pointer'],
          rows: [
            ['bit', '2', 'ptr → list_1'],
            ['byte', '3', 'ptr → list_2'],
            ['computer', '3', 'ptr → list_3'],
            ['memory', '2', 'ptr → list_4'],
          ],
          highlightRows: [1, 2],
        },
      },
      {
        stepNumber: 4,
        pillLabel: '4 · Inversion Lists & Query',
        title: 'Build Inversion Lists & Intersect Boolean Query',
        bullets: [
          'Each dictionary entry points directly to an ordered **Inversion (Posting) List** storing matching Document IDs (`bit → [1, 3]`, `memory → [2, 3]`).',
          'Evaluating `bit AND memory` intersects `[1, 3]` and `[2, 3]` in linear pointer walk to return **DOC #3** instantly without reading raw files.',
        ],
        formulaTex: '\\text{Postings}(\\text{bit}) \\cap \\text{Postings}(\\text{memory}) = [1, 3] \\cap [2, 3] = \\{\\text{DOC \\#3}\\}',
        svgStateKey: 'inv-4',
        table: {
          caption: 'Final Inverted Index & Query Resolution',
          headers: ['Term', 'Inversion List (Doc IDs)', 'Match `bit AND memory`?'],
          rows: [
            ['bit', '[1, 3]', 'Used (Contains 3)'],
            ['byte', '[1, 2, 4]', 'Not queried'],
            ['computer', '[1, 3, 4]', 'Not queried'],
            ['memory', '[2, 3]', 'Used (Contains 3) → Hit: DOC #3'],
          ],
          highlightRows: [0, 3],
        },
      },
    ],
  },
  {
    id: 'item-clustering-hac',
    unit: 'unit3',
    title: '2. Item Clustering Matrix (Threshold = 10) & HAC Merge',
    subtitle:
      'Step-by-step trace converting the 5×5 Item Similarity Matrix to a Binary Matrix, extracting cliques, and merging via HAC.',
    linkedTopicSlug: 'u3-item-clustering',
    datasetSummary:
      '5 Items (`I1..I5`) pairwise co-occurrence matrix from IRS Course Notes p.52 with default threshold ≥ 10.',
    slides: [
      {
        stepNumber: 1,
        pillLabel: '1 · Similarity Matrix',
        title: 'Build the 5×5 Pairwise Item-Item Similarity Matrix',
        bullets: [
          'Each cell $(i, j)$ equals the pairwise dot product $\\sum_k (\\text{term}_{i,k} \\times \\text{term}_{j,k})$ counting weighted term co-occurrence between Item $i$ and Item $j$.',
          'Notice $(2, 5)$ shares the highest similarity score (`36`), followed by $(1, 5) = 22$ and $(2, 3) = 12$.',
        ],
        formulaTex: '\\text{SIM}(\\text{Item}_i, \\text{Item}_j) = \\sum_{k} (\\text{term}_{i,k})(\\text{term}_{j,k})',
        svgStateKey: 'clus-1',
        table: {
          caption: 'Raw 5×5 Item-Item Similarity Matrix',
          headers: ['Item', 'I1', 'I2', 'I3', 'I4', 'I5'],
          rows: [
            ['I1', '—', '11', '3', '6', '22'],
            ['I2', '11', '—', '12', '10', '36'],
            ['I3', '3', '12', '—', '6', '9'],
            ['I4', '6', '10', '6', '—', '11'],
            ['I5', '22', '36', '9', '11', '—'],
          ],
          highlightRows: [1],
        },
      },
      {
        stepNumber: 2,
        pillLabel: '2 · Threshold ≥ 10',
        title: 'Apply Threshold ≥ 10 to Create the Binary Matrix',
        bullets: [
          'Every cell scoring $\\ge 10$ converts to **`1`** (significant similarity link), while every cell $< 10$ (`3, 6, 9`) drops to **`0`**.',
          'Because diagonal self-entries are ignored, `I3` retains only one active link (`to I2` since `12 ≥ 10`, whereas `9 < 10` to `I5`).',
        ],
        formulaTex: 'B_{i,j} = \\begin{cases} 1 & \\text{if } \\text{SIM}(i, j) \\ge 10 \\\\ 0 & \\text{otherwise} \\end{cases}',
        svgStateKey: 'clus-2',
        table: {
          caption: 'Binary Adjacency Matrix After Cutoff Threshold ≥ 10',
          headers: ['Item', 'I1', 'I2', 'I3', 'I4', 'I5'],
          rows: [
            ['I1', '—', '1', '0', '0', '1'],
            ['I2', '1', '—', '1', '1', '1'],
            ['I3', '0', '1', '—', '0', '0'],
            ['I4', '0', '1', '0', '—', '1'],
            ['I5', '1', '1', '0', '1', '—'],
          ],
          highlightRows: [0, 4],
        },
      },
      {
        stepNumber: 3,
        pillLabel: '3 · Cliques & HAC',
        title: 'Extract Maximal Cliques & Merge Bottom-Up in HAC Dendrogram',
        bullets: [
          'Complete triangles of `1`s in the binary matrix reveal two maximal cliques: **`{I1, I2, I5}`** and **`{I2, I4, I5}`**, with `I3` attached strictly to hub `I2`.',
          'Running **HAC (Agglomerative)** merges highest-similarity pair **`(I2, I5)` at level 36** first, then joins `I1` (avg/single 22), `I4` (11), and finally `I3` (12) into the root dendrogram.',
        ],
        formulaTex: '\\text{Max Similarity Pair} = \\arg\\max_{i \\neq j} \\text{SIM}(I_i, I_j) = (I_2, I_5) = 36',
        svgStateKey: 'clus-3',
        table: {
          caption: 'Agglomerative (HAC) Merge Sequence',
          headers: ['Merge Step', 'Merged Cluster Pair', 'Similarity Level', 'Cluster Membership'],
          rows: [
            ['Step 1', 'I2 + I5', '36', '{I2, I5}'],
            ['Step 2', '{I2, I5} + I1', '22 (Single Link)', '{I1, I2, I5}'],
            ['Step 3', '{I1, I2, I5} + I3', '12 (Single Link)', '{I1, I2, I3, I5}'],
            ['Step 4', '{I1, I2, I3, I5} + I4', '11 (Single Link)', '{I1, I2, I3, I4, I5}'],
          ],
          highlightRows: [0, 1],
        },
      },
    ],
  },
  {
    id: 'similarity-rocchio',
    unit: 'unit4',
    title: '3. Vector Similarity Measures & Rocchio Relevance Feedback',
    subtitle:
      'Step-by-step worked numerical across DOC1–DOC3 (Cosine, Dice, Jaccard) followed by Rocchio Query Shift.',
    linkedTopicSlug: 'u4-similarity-measures-ranking',
    datasetSummary:
      'Vocabulary of 8 terms (`American, geography, Lakes, Mexico, Painter, oil, Reserve, Subject`); Query = `"Mexico, oil"`.',
    slides: [
      {
        stepNumber: 1,
        pillLabel: '1 · Term Matrix',
        title: 'Build Binary Document & Query Vectors',
        bullets: [
          'Representing presence (`1`) or absence (`0`) across the 8 terms gives **`Q = (0,0,0,1,0,1,0,0)`** (`|Q| = 2`) and **`DOC1 = (0,1,0,1,0,1,1,0)`** (`|D1| = 4`).',
          'Inspection shows `DOC1` overlaps both `Mexico` and `oil` (dot product = `2`), `DOC3` shares only `Mexico` (dot = `1`), and `DOC2` shares `0`.',
        ],
        formulaTex: '\\vec{Q} \\cdot \\vec{DOC}_1 = \\sum_{k=1}^{8} (DOC_{1,k} \\times Q_k) = (1\\cdot 1) + (1\\cdot 1) = 2',
        svgStateKey: 'sim-1',
        table: {
          caption: 'Binary Term Vectors (0 / 1) for Query and Three Documents',
          headers: ['Vector', 'Amer.', 'geog.', 'Lakes', 'Mexico', 'Paint.', 'oil', 'Res.', 'Subj.', 'Sum'],
          rows: [
            ['Query Q', '0', '0', '0', '1', '0', '1', '0', '0', '2'],
            ['DOC1', '0', '1', '0', '1', '0', '1', '1', '0', '4'],
            ['DOC2', '1', '1', '0', '0', '0', '0', '0', '0', '2'],
            ['DOC3', '0', '0', '1', '1', '1', '0', '0', '1', '4'],
          ],
          highlightRows: [0, 1],
        },
      },
      {
        stepNumber: 2,
        pillLabel: '2 · Cosine / Dice / Jaccard',
        title: 'Compute Cosine, Dice & Jaccard Similarity for DOC1',
        bullets: [
          '**Cosine Similarity** divides dot product `2` by `sqrt(4 * 2) = 2.828` to yield **`0.707`** cleanly normalized between 0 and 1.',
          '**Dice** computes `(2 * 2) / (4 + 2) = 4/6 = 0.667`, while **Jaccard** computes `2 / (4 + 2 - 2) = 2/4 = 0.500`.',
        ],
        formulaTex: '\\text{Cosine} = \\frac{2}{\\sqrt{4 \\times 2}} = 0.707 \\qquad \\text{Dice} = \\frac{2(2)}{4 + 2} = 0.667 \\qquad \\text{Jaccard} = \\frac{2}{4 + 2 - 2} = 0.500',
        svgStateKey: 'sim-2',
        table: {
          caption: 'Calculated Similarity Scores & Final Document Ranking',
          headers: ['Rank', 'Document', 'Dot Product', 'Cosine', 'Dice', 'Jaccard'],
          rows: [
            ['1', 'DOC1', '2', '0.707', '0.667', '0.500'],
            ['2', 'DOC3', '1', '0.354', '0.333', '0.200'],
            ['3', 'DOC2', '0', '0.000', '0.000', '0.000'],
          ],
          highlightRows: [0],
          prunedRows: [2],
        },
      },
      {
        stepNumber: 3,
        pillLabel: '3 · Rocchio Feedback',
        title: 'Apply Positive & Negative Relevance Feedback to Shift Query Q',
        bullets: [
          'Suppose the user marks **`DOC1` Relevant ($r = 1$)** and **`DOC3` Non-Relevant ($nr = 1$)** after Pass 1 review.',
          'Applying Rocchio **`Qn = Qo + DR1 - DNR1`** boosts `geography (+1)`, `oil (+1)`, and `Reserve (+1)` while penalizing off-topic terms `Lakes (-1)`, `Painter (-1)`, and `Subject (-1)`.',
        ],
        formulaTex: 'Q_n = Q_o + \\frac{1}{1}(DOC_1) - \\frac{1}{1}(DOC_3) = (0, 1, -1, 1, -1, 2, 1, -1)',
        svgStateKey: 'sim-3',
        table: {
          caption: 'Vector Weight Shift From Qo to Revised Query Qn',
          headers: ['Term', 'Qo', '+ DR1 (DOC1)', '− DNR1 (DOC3)', 'New Qn Weight'],
          rows: [
            ['geography', '0', '+1', '0', '+1 (Boosted!)'],
            ['Mexico', '1', '+1', '−1', '+1'],
            ['oil', '1', '+1', '0', '+2 (Double Boost!)'],
            ['Reserve', '0', '+1', '0', '+1 (Expanded!)'],
            ['Lakes / Painter / Subject', '0', '0', '−1', '−1 (Suppressed)'],
          ],
          highlightRows: [0, 2, 3],
          prunedRows: [4],
        },
      },
    ],
  },
  {
    id: 'boyer-moore',
    unit: 'unit5',
    title: '4. Boyer–Moore Search & Bad-Match Table (TEAMMAST)',
    subtitle:
      'Step-by-step construction of the Bad-Match Table (`shift = max(1, m - idx - 1)`) and right-to-left jumps on "welcometoteammast".',
    linkedTopicSlug: 'u5-software-text-search',
    datasetSummary:
      'Text `T = "welcometoteammast"` ($n=17$); Pattern `P = "teammast"` ($m=8$) from R17A1209 Notes p.72.',
    slides: [
      {
        stepNumber: 1,
        pillLabel: '1 · Bad-Match Table',
        title: 'Compute Bad-Match Jump Values Using Shift = m − index − 1',
        bullets: [
          'Scan pattern **`T E A M M A S T`** ($m = 8$, indices `0..7`) left-to-right computing `shift = max(1, 8 - index - 1)` so later occurrences overwrite earlier values.',
          'Note `A` updates from index `2` (`8-2-1=5`) to index `5` (`8-5-1=2`), `M` updates to index `4` (`8-4-1=3`), `S` at index `6` gets `1`, and missing characters (`*`) jump the full length **`8`**.',
        ],
        formulaTex: '\\text{BadMatch}(c) = \\max\\bigl(1, \\; m - \\text{lastIndex}(c) - 1\\bigr) \\quad \\text{(and } m \\text{ if } c \\notin P\\text{)}',
        svgStateKey: 'bm-1',
        table: {
          caption: 'Completed Bad-Match Jump Table for "TEAMMAST" (m = 8)',
          headers: ['Char', 'T', 'E', 'A', 'M', 'S', 'Other (*)'],
          rows: [
            ['Last Index', '0 (tail=8)', '1', '5', '4', '6', 'Not in P'],
            ['Shift Value', '8', '6', '2', '3', '1', '8'],
          ],
          highlightRows: [1],
        },
      },
      {
        stepNumber: 2,
        pillLabel: '2 · Align Index 0',
        title: 'Right-to-Left Compare at Text Offset 0 Mismatches Immediately',
        bullets: [
          'Boyer–Moore aligns `T E A M M A S T` at text start (`0..7`) and compares rightmost index `7` (`P[7] = t`) against `T[7] = t`? No, **`T = "w e l c o m e t o..."`** has `T[7] = t` (Match!), then checks `P[6] = s` vs `T[6] = e` (**Mismatch on `"e"`**!).',
          'Looking up mismatch character `T[6] = e` inside the Bad-Match Table returns jump **`6`** (`6 - 1` from end, sliding `E` cleanly to align—or shifting `6` right)!',
        ],
        formulaTex: 'T[7] = t = P[7] \\; (\\checkmark), \\quad T[6] = e \\neq P[6] = s \\implies \\text{Lookup BadMatch}(e) = 6',
        svgStateKey: 'bm-2',
      },
      {
        stepNumber: 3,
        pillLabel: '3 · Mismatch & Jump',
        title: 'Second Comparison & Direct Jump to Index 9 Match',
        bullets: [
          'After shifting past offset `0`, comparing `P[7] = t` at `T[13] = a` sees mismatch character **`a`** whose Bad-Match Table value equals **`2`**.',
          'Shifting right by `2` positions moves `P` cleanly onto text indices **`9..16`**, aligning `"teammast"` perfectly under `T[9..16]` (`"teammast"`).',
        ],
        formulaTex: '\\text{Shift from offset } 6 \\text{ via BadMatch}(o/a) \\longrightarrow \\text{Offset } 9',
        svgStateKey: 'bm-3',
      },
      {
        stepNumber: 4,
        pillLabel: '4 · Full Match Found',
        title: 'Verify All 8 Characters Right-to-Left at Offset 9',
        bullets: [
          'Starting at rightmost `P[7] = t` down through `P[0] = t`, every single letter matches **`T[9..16] = "teammast"`** cleanly.',
          'Boyer–Moore located the 8-letter pattern across a 17-character text with only a fraction of the comparisons Brute-Force would waste.',
        ],
        formulaTex: 'P[7..0] = T[16..9] = \\text{t e a m m a s t} \\implies \\text{Match Found at Index } 9!',
        svgStateKey: 'bm-4',
      },
    ],
  },
  {
    id: 'kmp-search',
    unit: 'unit5',
    title: '5. Knuth–Morris–Pratt (KMP) Jump Table & Stream Trace',
    subtitle:
      'Step-by-step non-backtracking scan on `I = babcbabcabcaabc` using pattern `S = abcbca... / abcabcacab` from Unit V notes.',
    linkedTopicSlug: 'u5-software-text-search',
    datasetSummary:
      'Benchmark Unit-V Note Trace (IRS_UNIT_5 p.4): Input `I = "b a b c b a b c a b c a a b c a"` ($n=16$); Search Pattern `S = "a b c a b c a c a b"` ($m=10$).',
    slides: [
      {
        stepNumber: 1,
        pillLabel: '1 · LPS Failure Table',
        title: 'Precompute Prefix-Suffix Jump Table Without Scanning Text',
        bullets: [
          'Before touching input stream $I$, **KMP** pre-processes search pattern `S = "a b c a b c a c a b"` into an array recording the longest prefix repeating as a suffix.',
          'Notice characters `1..7` repeat the `"a b c a b c a"` prefix (`LPS[7] = 4`), telling KMP exactly how far to slide $S$ without ever rewinding the text stream pointer.',
        ],
        formulaTex: '\\pi[q] = \\max\\{ k < q : P[1..k] \\text{ is a suffix of } P[1..q] \\}',
        svgStateKey: 'kmp-1',
        table: {
          caption: 'Preprocessed KMP Prefix Jump Table (1-Indexed)',
          headers: ['Pos q', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          rows: [
            ['Pattern S[q]', 'a', 'b', 'c', 'a', 'b', 'c', 'a', 'c', 'a', 'b'],
            ['LPS Value π[q]', '0', '0', '0', '1', '2', '3', '4', '0', '1', '2'],
          ],
          highlightRows: [1],
        },
      },
      {
        stepNumber: 2,
        pillLabel: '2 · Early Mismatches',
        title: 'Skip Position 1 (`b != a`) and Slide Safely Past Position 5 (`b != a`)',
        bullets: [
          'At stream position `1`, `I[1] = b` fails immediately against `S[1] = a`, so KMP shifts pattern `S` forward by **1** place to align at position `2`.',
          'Aligned at position `2`, characters `2..5` match `"a b c a"` until mismatch at `I[5] = b` vs `S[4] = a`—no repeating prefix fits, so KMP jumps **3 places** cleanly forward.',
        ],
        formulaTex: '\\text{Pos } 1: b \\neq a \\; (+1) \\quad \\longrightarrow \\quad \\text{Pos } 5: b \\neq a \\; (\\text{skip } 3)',
        svgStateKey: 'kmp-2',
      },
      {
        stepNumber: 3,
        pillLabel: '3 · Partial Reuse Jump',
        title: 'Skip 3 Places at Position 13 by Reusing "a b c a"',
        bullets: [
          'Scanning forward from `I[6]`, `S` matches seven consecutive characters `"a b c a b c a"` (`I[6..12]`) before hitting mismatch at stream position `13` (`I[13] = a` vs `S[8] = c`).',
          'Because the already-matched prefix ends with `"a b c a"` (`LPS[7] = 4`), KMP shifts `S` forward by **3 places** so `S[4]` stays aligned on `"a"` **without moving backwards in $I$**!',
        ],
        formulaTex: '\\text{Matched length } 7 \\; (\\text{``abca\'\'}) \\implies \\text{Jump } 7 - \\pi[7] = 7 - 4 = 3 \\text{ spaces}',
        svgStateKey: 'kmp-3',
      },
      {
        stepNumber: 4,
        pillLabel: '4 · Final Linear Alignment',
        title: 'Strict $O(n + m)$ Completion With Zero Text Rewinds',
        bullets: [
          'After sliding 3 places to align at `I[9..16]`, KMP continues strictly forward from `I[13]` without ever decrementing the stream read head.',
          'Guaranteed **$O(n + m)$ worst-case complexity** makes KMP ideal for unbuffered real-time network and disk streaming pipelines.',
        ],
        formulaTex: '\\begin{aligned} \\text{Total Text Cursor Steps} &\\le n \\\\ \\text{Total Runtime} &= O(n + m) \\end{aligned}',
        svgStateKey: 'kmp-4',
      },
    ],
  },
];
