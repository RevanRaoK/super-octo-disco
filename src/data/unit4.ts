import { LessonTopic } from '@/types/course';
import { buildMultivariateTopics } from './multivariateShared';

const MULTIVARIATE = buildMultivariateTopics({ unit: 'unit4', idPrefix: 'u4', startOrder: 1 });
const BASE = MULTIVARIATE.length;

const TEXT_TOPICS: LessonTopic[] = [
  {
    id: 'u4-text-document-introduction',
    shortTitle: 'Text & Document Visualization: Intro',
    unit: 'unit4',
    order: BASE + 1,
    title: '4 & 4.1 Text and Document Visualization — Introduction',
    subtopicsCovered: [
      'Why Visualize Text',
      'Tasks for Text, Partially Structured and Structured Data',
      'Corpus and Objects',
      'Metadata and Information Retrieval',
      'Document Statistics and Relationships',
    ],
    summaryLine:
      'There is a huge amount of text (books, e-mails, websites). **Text visualization** turns it into pictures so we can **search** it, see **relationships** and spot **patterns**.',
    bullets: [
      'We have huge text collections — **libraries, e-mail archives, the web**. Pictures help us make sense of them.',
      { label: 'What We Can Visualize', text: 'A blog, a wiki, a Twitter feed, billions of words, a set of papers, a digital library.' },
      'What we draw depends on the **task**:',
      { label: 'Plain Text', text: 'Search for a **word, phrase or topic**.' },
      { label: 'Partly Structured Text', text: 'Find **relationships** between words, topics or documents.' },
      { label: 'Structured Collections', text: 'Find **patterns** and **outliers** (unusual documents).' },
    ],
    subSections: [
      {
        heading: '4.1 Introduction',
        bullets: [
          { label: 'Corpus', text: 'A **collection of documents** (plural: **corpora**).', example: 'All news articles from 2024.' },
          { label: 'Objects', text: 'The items we study: **words, sentences, paragraphs, documents**, whole collections — even images and videos.' },
          'Text has **little structure**, but documents carry **metadata** (data about them): author, creation date, modified date, comments, size.',
          { label: 'Search Systems', text: 'Search engines find documents by measuring how **relevant** each one is to a query; this needs **preprocessing** and understanding **meaning**.' },
          { label: 'Document Statistics', text: 'Counts like number of words or **how often each word appears** can even check **who really wrote** a text.' },
          { label: 'Relationships', text: '"Which documents are about the spread of flu?" is hard — a relevant article may never use the word **flu**.' },
          'We also look for **clusters** (groups of similar documents) and **themes**; similarity can be based on **citations, shared authors or topics**.',
        ],
      },
    ],
    keyTakeaway:
      'Define **corpus**, list the objects, then match tasks to structure: **plain → search**, **partly structured → relationships**, **structured → patterns & outliers**. Mention metadata, relevance and author checking.',
    selfCheck: {
      question: 'Why is "Which documents relate to the spread of flu?" not a simple search?',
      answer: 'Relevant documents may not contain the word "flu", so we need meaning and relationships, not just keyword matching.',
    },
  },
  {
    id: 'u4-levels-of-text-representation',
    shortTitle: 'Levels of Text Representations',
    unit: 'unit4',
    order: BASE + 2,
    title: '4.2 Levels of Text Representations',
    subtopicsCovered: ['Lexical Level (Tokens)', 'Syntactic Level (Tagging, NER)', 'Semantic Level (Meaning)'],
    summaryLine:
      'Before a computer can draw text, it must turn raw text into structured data in **three levels**: **lexical** (split into words), **syntactic** (label each word’s role) and **semantic** (understand the meaning).',
    bullets: ['Each level turns **unstructured text** into a bit more **structured data**.'],
    subSections: [
      {
        heading: 'The Three Levels',
        subGroups: [
          {
            sideHeading: '1. Lexical Level — Split into Tokens',
            bullets: [
              'Breaks a long string of characters into small units called **tokens**.',
              'A **lexical analyzer** does this using a set of rules.',
              { label: 'Tokens Can Be', text: 'Characters, **character n-grams** (groups of n letters), words, **word stems** (root of a word: "running" → "run"), phrases, **word n-grams** (groups of n words).' },
              'Rules are usually written as **regular expressions** (text patterns).',
            ],
            example: '"The cat sat." → [The] [cat] [sat] [.]',
          },
          {
            sideHeading: '2. Syntactic Level — Label Each Token',
            bullets: [
              '**Tags** each token with its **role** — noun, verb, adjective, conjunction, position in the sentence.',
              'Also notes things like **singular/plural** and which tokens are near each other.',
              { label: 'Rich Tags', text: '**Date, money, place, person, organization, time**.' },
              { label: 'Named Entity Recognition (NER)', text: 'Finding these special names automatically.', example: '"Sundar Pichai visited Hyderabad on Monday" → person, place, date.' },
              'Many grammar models exist (generative, dependency, probabilistic…), so many approaches exist.',
            ],
          },
          {
            sideHeading: '3. Semantic Level — Understand Meaning',
            bullets: [
              'Extracts the **meaning** and the **relationships** between facts found at the syntactic level.',
              'Goal: understand the **whole text** in its context (or even without context).',
            ],
            example: 'Understanding that "the company" in sentence 2 means "Google" from sentence 1.',
          },
        ],
        table: {
          caption: 'Three Levels at a Glance',
          headers: ['Level', 'What It Does', 'Example Tool'],
          rows: [
            ['Lexical', 'Text → tokens (words)', 'Regular expressions'],
            ['Syntactic', 'Tokens → tagged tokens (roles)', 'Part-of-speech tagging, NER'],
            ['Semantic', 'Tagged text → meaning', 'Context understanding'],
          ],
        },
      },
    ],
    keyTakeaway:
      '**Lexical** = split into tokens (regex; n-grams, stems); **Syntactic** = tag roles + **NER** (date, money, place, person, organization, time); **Semantic** = meaning and relationships.',
    selfCheck: {
      question: 'What is Named Entity Recognition and at which level does it happen?',
      answer: 'Automatically finding names like people, places, dates, money and organizations in text; it happens at the syntactic level.',
    },
  },
  {
    id: 'u4-vector-space-model',
    shortTitle: 'The Vector Space Model',
    unit: 'unit4',
    order: BASE + 3,
    title: '4.3 The Vector Space Model',
    subtopicsCovered: [
      'Term Vectors',
      'Count-Terms Pseudo-code',
      '4.3.1 Computing Weights (TF-IDF)',
      '4.3.2 Zipf’s Law',
      '4.3.3 Tasks Using the Vector Space Model',
    ],
    summaryLine:
      'Each document is turned into a **list of numbers** (a **term vector**) — one number per word showing how **important** that word is (usually **tf-idf**). Then documents can be compared like points in space.',
    bullets: [
      { label: 'Term Vector', text: 'A list of numbers for a document, **one number per word**, giving that word’s **weight** (importance).', example: 'Document about cricket → high weight for "bat", "wicket", low for "the".' },
      'This is a key step for most text and document visualizations.',
      { label: 'Cleaning First', text: 'Remove **stop words** (very common words like "the", "a") and merge words with the same **stem** ("play", "playing", "played").' },
    ],
    subSections: [
      {
        heading: 'Count-Terms Pseudo-code',
        description: 'Input: the stream of tokens for one document. `terms` is a hashtable (dictionary) from word → count.',
        bullets: [
          { label: 'Line 1', text: '`terms ← ∅` — start with an empty dictionary.' },
          { label: 'Line 2', text: '`for each token t in tokenStream` — go through every word.' },
          { label: 'Line 3', text: '`if t is not a stop word` — skip words like "the", "is".' },
          { label: 'Line 4', text: '`increment (or set to 1) terms[t]` — add one to that word’s count.' },
          { label: 'Line 5', text: '`return terms` — the word counts for the document.' },
          { label: 'Example', text: 'A paragraph on genetically engineered food has **98 tokens**, **74 different words**, and **48** after removing stop words.' },
        ],
      },
      {
        heading: '4.3.1 Computing Weights',
        bullets: [
          'We need a rule to give each word a **weight**. The best-known is **tf-idf** (term frequency × inverse document frequency).',
          { label: 'Tf(w)', text: 'How many times word w appears **in this document**.' },
          { label: 'Df(w)', text: 'How many documents **in the whole collection** contain w.' },
          { label: 'N', text: 'Total number of documents.' },
          'A word is **important** if it appears **often in this document** but in **few other documents**.',
          'Such words **tell documents apart** — they are distinguishing words.',
        ],
        example: '"the" appears in every document → weight 0. "wicket" appears a lot here but in few documents → high weight.',
        formulas: [
          {
            label: 'TF-IDF Weight',
            tex: 'TfIdf(w) = Tf(w) \\times \\log\\!\\left(\\dfrac{N}{Df(w)}\\right)',
            note: 'If a word is in every document, $\\log(N/N) = \\log 1 = 0$, so its weight is 0.',
          },
        ],
      },
      {
        heading: '4.3.2 Zipf’s Law',
        bullets: [
          'Common patterns are **normal** (bell curve) and **uniform** (all equal). Big real-world data often follows a **power law** instead.',
          { label: 'Pareto (80-20 Rule)', text: 'A company’s revenue is inversely related to its rank — **20% of people hold 80% of the wealth**.' },
          { label: 'Zipf’s Law', text: 'Linguist **George Kingsley Zipf** found that a word’s frequency is **inversely proportional to its rank**: the 2nd most common word appears about half as often as the 1st, the 3rd about a third as often.' },
          'On a **log-log graph** it becomes a **straight line with slope −1**.',
          'Meaning: **a few words** carry most of a document’s key ideas — which makes **summaries** possible.',
        ],
        formulas: [
          {
            label: 'Zipf’s Law',
            tex: 'f(r) \\propto \\dfrac{1}{r} \\quad\\Longleftrightarrow\\quad \\log f = C - \\log r',
            note: '$r$ = rank (1 = most common), $f$ = how often the word appears.',
          },
        ],
        diagramId: 'dvt-zipf-loglog',
        diagramCaption: 'Word frequency vs rank on log-log axes (e.g., Wikipedia): a straight line of slope −1.',
      },
      {
        heading: '4.3.3 Tasks Using the Vector Space Model',
        bullets: [
          'With a **distance measure** between vectors, we can answer useful questions:',
          { label: 'Similar Documents', text: 'Which documents are **most like** this one?' },
          { label: 'Fits a Collection', text: 'Which documents match a **collection’s average vector**?' },
          { label: 'Search', text: 'Which documents best match a **search query** (turned into a vector too)?' },
          { label: 'Understanding a Corpus', text: 'Find **themes and clusters** and show them as a **2D layout** or a **graph** of connections.' },
          { label: 'Fits the Pipeline', text: 'Corpus → **vectors** → algorithms (similarity, search, clustering) → **pictures**.' },
        ],
        formulas: [
          {
            label: 'Cosine Similarity (how alike two documents are)',
            tex: '\\cos(\\mathbf{a}, \\mathbf{b}) = \\dfrac{\\mathbf{a} \\cdot \\mathbf{b}}{\\lVert \\mathbf{a} \\rVert \\, \\lVert \\mathbf{b} \\rVert}',
            note: '1 = same direction (very similar), 0 = nothing in common.',
          },
        ],
      },
    ],
    walkthroughLinkId: 'tfidf-vector',
    keyTakeaway:
      'Write **Count-Terms** (5 lines), **tf-idf = Tf × log(N/Df)** with its meaning (often here, rare elsewhere), **Zipf** (frequency ∝ 1/rank, slope −1, Pareto 80-20), and the tasks (**similarity, search, clustering**).',
    selfCheck: {
      question: 'N = 1000 documents. A word appears 5 times in document d and in 10 documents in total. What is its tf-idf (log base 10)?',
      answer: '$5 \\times \\log_{10}(1000/10) = 5 \\times 2 = 10$.',
    },
  },
  {
    id: 'u4-single-document-visualizations',
    shortTitle: 'Single Document Visualizations',
    unit: 'unit4',
    order: BASE + 4,
    title: '4.4 Single Document Visualizations',
    subtopicsCovered: ['Word Clouds (Tag Cloud, Wordle)', 'Word Tree', 'TextArc', 'Arc Diagrams', 'Literature Fingerprinting'],
    summaryLine:
      'Ways to picture **one document**: **word clouds** (how often words appear), **word tree** (words in context), **TextArc** (how words connect), **arc diagrams** (repeated parts) and **literature fingerprinting** (writing style).',
    bullets: ['The examples use one document from the **VAST Contest 2007** data set.'],
    subSections: [
      {
        heading: '4.4.1 Word Clouds',
        bullets: [
          { label: 'Tag Cloud (tagCrowd.com)', text: 'Words shown with **bigger, darker font** the more often they appear.' },
          { label: 'Wordle (wordle.net)', text: 'Words packed together, **text size** = how often they appear.' },
        ],
        example: 'In a cricket article, "India", "runs" and "wicket" appear huge.',
      },
      {
        heading: '4.4.2 Word Tree',
        bullets: [
          'Shows **how often** words appear **and the context** around them.',
          '**Bigger text** = more frequent word or phrase.',
          'The **root** is a word you choose; the **branches** show the different words that **follow it** in the document.',
        ],
        example: 'Root "I have" → branches "a dream", "been to", "seen".',
      },
      {
        heading: '4.4.3 TextArc',
        bullets: [
          'Shows **how words connect** to the lines where they appear.',
          'Every line of the text is written **in order around an ellipse** (oval).',
          'Frequent words are drawn **bigger and brighter** and placed **inside** the oval, pulled toward the lines where they appear (like **RadViz**).',
          'Users can highlight text and **animate the reading** of it.',
        ],
        example: 'Alice in Wonderland: words used all through the book sit in the middle; words from one chapter sit near that part of the edge.',
      },
      {
        heading: '4.4.4 Arc Diagrams',
        bullets: [
          'Show **repetition** in text (or any sequence, like music).',
          'Repeated parts are joined by **half-circle arcs**.',
          { label: 'Arc Thickness', text: '= **how long** the repeated part is.' },
          { label: 'Arc Height', text: '= **how far apart** the repeats are.' },
        ],
        diagramId: 'dvt-arc-diagram',
        diagramCaption: 'Arc diagram: thicker arcs = longer repeats, taller arcs = repeats farther apart.',
      },
      {
        heading: '4.4.5 Literature Fingerprinting',
        bullets: [
          'Pictures the **features** that describe a text (like sentence length or word variety).',
          'Instead of **one number** for the whole book, it computes **many values along the text** — a **fingerprint**.',
          'Lets you **"look inside"** and see how the style changes across the text.',
          'Can be shown at different **levels** (chapter, paragraph, sentence).',
          'Used for **authorship attribution** — working out **who wrote** a text by style.',
        ],
      },
    ],
    keyTakeaway:
      'Five techniques: **word cloud** (size = frequency), **word tree** (chosen root + context branches), **TextArc** (lines around an oval, RadViz-like), **arc diagram** (thickness = length, height = distance), **literature fingerprinting** (values along the text, who wrote it).',
    selfCheck: {
      question: 'In an arc diagram, what do arc thickness and height show?',
      answer: 'Thickness shows how long the repeated part is; height shows how far apart the repeats are.',
    },
  },
  {
    id: 'u4-document-collection-visualizations',
    shortTitle: 'Document Collection Visualizations',
    unit: 'unit4',
    order: BASE + 5,
    title: '4.5 Document Collection Visualizations',
    subtopicsCovered: ['Goal & Complexity', 'Self-Organizing Maps', 'Themescapes', 'Document Cards'],
    summaryLine:
      'For **many documents**, the goal is to place **similar documents close together** and different ones far apart, using **SOMs**, **themescapes** (3D landscapes) and **document cards**.',
    bullets: [
      'Goal: **similar documents close**, **different documents far apart**.',
      'This needs comparing **every pair** of documents — slow, about **O(n²)** work.',
      { label: 'Common Methods', text: '**Spring layouts**, **MDS**, **clustering** (k-means, hierarchical, EM, support vector), and **self-organizing maps**.' },
    ],
    subSections: [
      {
        heading: '4.5.1 Self-Organizing Maps (SOM)',
        bullets: [
          'An **unsupervised learning** method (learns without labelled answers) that arranges documents on a **2D grid of nodes**.',
          'Each node has a **weight vector** the same length as the document vectors.',
          { label: 'Step 1', text: 'Give every node **random** weights.' },
          { label: 'Step 2', text: 'Pick a **random document** and find the **closest node**.' },
          { label: 'Step 3', text: 'Move that node and its **neighbours** (within a radius) **closer** to the document — the closest node moves the most.' },
          { label: 'Step 4', text: 'Repeat with more documents while the **radius gets smaller**.' },
          'In the end, similar documents land on **nearby nodes**.',
        ],
        formulas: [
          {
            label: 'SOM Weight Update',
            tex: '\\mathbf{w}_k \\leftarrow \\mathbf{w}_k + \\alpha\\, h(k, c)\\,(\\mathbf{x} - \\mathbf{w}_k)',
            note: '$c$ = closest node, $h(k,c)$ = how strongly node $k$ is pulled (less for far nodes, shrinking over time), $\\alpha$ = learning rate.',
          },
        ],
        example: 'One million posts from 83 newsgroups; a SOM of Finnish news where labels show topics and lighter areas hold more documents.',
      },
      {
        heading: '4.5.2 Themescapes',
        bullets: [
          'A summary of a collection drawn as a **3D landscape**.',
          '**Height and colour** show how many similar documents are there.',
          '**Tall mountains** = **popular themes** (many documents on that theme).',
        ],
        example: 'A themescape of news articles by Pacific Northwest National Labs (PNNL).',
      },
      {
        heading: '4.5.3 Document Cards',
        bullets: [
          'A **small card** summarizing a document with its **key words and pictures** — like a **Top Trumps** card.',
          'Key words found by **text mining** using the document’s structure.',
          'Pictures and captions are pulled out automatically; captions help rank the pictures.',
          { label: 'Picture Types (by colour histogram)', text: '1: photo / rendered image, 2: diagram / sketch / graph, 3: table — at least one of each type found is shown.' },
        ],
      },
    ],
    keyTakeaway:
      'Goal: **similar close, different far** (O(n²)). **SOM**: 4 steps with a shrinking radius. **Themescapes**: 3D landscape, mountain height = theme popularity (PNNL). **Document cards**: key words + 3 picture types.',
    selfCheck: {
      question: 'What happens to the neighbourhood radius as a SOM learns?',
      answer: 'It gets smaller over time, so later updates only adjust the closest nodes.',
    },
  },
  {
    id: 'u4-extended-text-visualizations',
    shortTitle: 'Extended Text Visualizations',
    unit: 'unit4',
    order: BASE + 6,
    title: '4.6 Extended Text Visualizations',
    subtopicsCovered: [
      '4.6.1 Software Visualization (SeeSoft)',
      '4.6.2 Search Result Visualization (TileBars)',
      '4.6.3 Temporal: ThemeRiver, Jigsaw Calendar, Sentiment Analysis',
      '4.6.4 Representing Relationships (Jigsaw Graph)',
    ],
    summaryLine:
      'Text visualization also works for **program code** (SeeSoft), **search results** (TileBars), **changes over time** (ThemeRiver, Jigsaw, news sentiment) and **relationships** (Jigsaw graph).',
    bullets: [],
    subSections: [
      {
        heading: '4.6.1 Software Visualization — SeeSoft',
        bullets: [
          'Made by **Eick et al.** to show information about **every line of program code** (age, number of changes, programmer, dates).',
          'Each **column** = one source file; its **height** = file length (long files continue in the next column).',
          'Each **line of code** = a thin **row of pixels**, so many lines fit on screen.',
          '**Colour** = how often the line runs: **red** = often (a **hot-spot**), **blue** = rarely. Colour can also show last-change time.',
          'A **1000 × 1000** screen can show up to **50,000 lines**.',
        ],
        example: '52 files with 15,255 lines; file1.c zoomed to line 408.',
      },
      {
        heading: '4.6.2 Search Result Visualization — TileBars',
        bullets: [
          'By **Marti Hearst**; similar to Keim’s pixel displays.',
          'Shows **where and how often** your search words appear in each result.',
          'Each result = a **rectangle**; its **width** = document length; it is split into **small squares** = sections of the text.',
          'Each **row** = one set of search words; a **darker square** = those words appear more in that section.',
          'Title and first words appear beside it — you see at a glance **which part** of each document matches.',
        ],
      },
      {
        heading: '4.6.3 Temporal Document Collection Visualizations',
        subGroups: [
          {
            sideHeading: 'ThemeRiver (Stream Graph)',
            bullets: [
              'Shows how **themes change over time** in a collection.',
              'Each theme is a **coloured band** flowing left to right; its **thickness** at a time = how much that theme appears then.',
            ],
            example: 'Election-night speeches of Canadian candidates.',
            diagramId: 'dvt-themeriver',
            diagramCaption: 'ThemeRiver: band thickness shows how strongly each theme appears over time.',
          },
          {
            sideHeading: 'Jigsaw Calendar View',
            description:
              'Places documents on a **calendar** using dates found in the text; selecting a document shows the **names/places** it mentions.',
          },
          {
            sideHeading: 'News Sentiment Analysis (Wanner et al.)',
            bullets: [
              'Checks **RSS news feeds** for **positive and negative** opinion words automatically.',
              'Finding trends and context is left to the **human expert**.',
              'Each news item = a mark on a **time line**; **shape/colour** = category; **shifted up = positive**, **down = negative**.',
            ],
          },
        ],
      },
      {
        heading: '4.6.4 Representing Relationships',
        bullets: [
          '**Jigsaw’s graph view** shows **names/places (entities)** and the **documents** they appear in, joined by lines.',
          'It does not show everything at once; the user **expands the graph step by step** from items of interest.',
        ],
      },
    ],
    keyTakeaway:
      'Four extensions: **SeeSoft** (column = file, pixel row = line, red = hot-spot, 50k lines), **TileBars** (Hearst; width = length, dark = more matches), **ThemeRiver / Jigsaw calendar / Wanner sentiment** (time), **Jigsaw graph** (grow step by step).',
    selfCheck: {
      question: 'In SeeSoft, what do red and blue lines mean?',
      answer: 'Red lines run very often (hot-spots); blue lines run rarely.',
    },
  },
];

export const UNIT4_TOPICS: LessonTopic[] = [...MULTIVARIATE, ...TEXT_TOPICS];
