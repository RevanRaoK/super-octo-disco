import { LessonTopic, UnitId, WalkthroughId } from '@/types/course';

/** Multivariate-data lessons (Unit IV, Part 1). */
interface BuildOptions {
  unit: UnitId;
  idPrefix: string;
  startOrder: number;
}

type TopicDraft = Omit<LessonTopic, 'id' | 'unit' | 'order'> & { slug: string };

const DRAFTS: TopicDraft[] = [
  {
    slug: 'point-based-techniques',
    shortTitle: 'Point-Based Techniques',
    title: 'Multivariate Data: 1. Point-Based Techniques',
    subtopicsCovered: [
      'Point Plots (n-D → k-D Projection)',
      'Scatterplots & Handling High Dimensions',
      'Scatterplot Matrices',
      'Force-Based Methods',
      'Multidimensional Scaling (MDS) Algorithm',
    ],
    summaryLine:
      '**Multivariate data** has **many columns**. Point-based techniques draw **each record as a point**; the trick is squeezing many columns into a 2D or 3D screen, using **scatterplots, scatterplot matrices** and **MDS**.',
    bullets: [
      { label: 'Multivariate Data', text: 'Data where each record has **many variables (columns)**.', example: 'A car with price, mileage, weight, horsepower, length…' },
      { label: 'Point Plot', text: 'Each record is **squeezed** from its many columns (n dimensions) down to a few screen dimensions (k = 2 or 3) and drawn as **one point**.' },
      'A **mark** (dot, symbol) is drawn at each point; techniques differ in **how they squeeze** the data and **how they draw** it.',
      'They can show **individual records** or **summary records** (like group averages).',
    ],
    subSections: [
      {
        heading: '(a) Scatterplots and Scatterplot Matrices',
        bullets: [
          'Scatterplots are among the **oldest and most used** techniques; most software has 2D and 3D versions.',
          'They work because we are naturally good at judging **where things are** in a box.',
        ],
        subGroups: [
          {
            sideHeading: 'What to Do When There Are Too Many Columns',
            bullets: [
              { label: 'Dimension Subsetting', text: 'Show only **some columns** — chosen by the user or by an algorithm that finds the most useful ones.' },
              { label: 'Dimension Reduction', text: 'Use **PCA or MDS** to combine many columns into 2–3 while keeping relationships.' },
              { label: 'Dimension Embedding', text: 'Put extra columns into **colour, size and shape** of the dots (only a few can fit this way).' },
              { label: 'Multiple Displays', text: 'Show **several plots**, each with a few columns, side by side or on top of each other.' },
            ],
          },
          {
            sideHeading: 'Scatterplot Matrix (SPLOM)',
            bullets: [
              'A **grid of scatterplots** — one for every pair of columns. With N columns there are **$N^2$ cells**.',
              'Every pair appears **twice** (A vs B and B vs A), just rotated by **90°**.',
              'Rows and columns use the same order, so the grid is **mirror-symmetric** about the diagonal.',
              'The **diagonal** cells would plot a column against itself, so they show the **column name** or a **histogram** instead.',
            ],
            example: 'Iris data with 4 columns → a 4 × 4 grid of 16 cells.',
            diagramId: 'dvt-scatterplot-matrix',
            diagramCaption: 'A 4 × 4 scatterplot matrix: mirror-symmetric, with column names on the diagonal.',
          },
        ],
      },
      {
        heading: '(b) Force-Based Methods',
        bullets: [
          'Methods that place high-dimensional points on a 2D/3D screen while trying to **keep the same relationships** (close points stay close).',
          'This is not always possible when there are many columns, and the result may show **fake patterns** that are not really in the data.',
          '**Multidimensional scaling (MDS)** is the most important of these methods.',
        ],
        subGroups: [
          {
            sideHeading: 'MDS Algorithm',
            description: 'Idea: keep moving the points on screen until their **screen distances match the real distances** as closely as possible.',
            bullets: [
              { label: 'Step 1', text: 'For M records, make an **M × M table Ds** of the **real distances** between every pair (e.g., Euclidean distance).' },
              { label: 'Step 2', text: 'Choose the screen size K (usually 2). Make an **M × K table L** of **starting screen positions** — random, or from PCA.' },
              { label: 'Step 3', text: 'Make an **M × M table Ls** of the **screen distances** between every pair of points in L.' },
              { label: 'Step 4', text: 'Compute the **stress S** — how different the screen distances (Ls) are from the real distances (Ds). Lower = better.' },
              { label: 'Step 5', text: 'If S is **small enough**, or has **stopped improving**, **stop**.' },
              { label: 'Step 6', text: 'Otherwise **move each point a little** in the direction that lowers its stress — in small steps so points do not jump back and forth.' },
              { label: 'Step 7', text: '**Go back to Step 3**.' },
            ],
            formulas: [
              {
                label: 'Stress (one common measure)',
                tex: 'S = \\sqrt{\\dfrac{\\sum_{i<j} \\left(D_s(i,j) - L_s(i,j)\\right)^2}{\\sum_{i<j} D_s(i,j)^2}}',
                note: 'Compares real distances $D_s$ with screen distances $L_s$. $S = 0$ means a perfect match.',
              },
            ],
          },
          {
            sideHeading: 'Variants and the "Stuck" Problem',
            bullets: [
              'Versions differ in how they measure **distance and stress**, how they **start and stop**, and how they **move points**.',
              'Like any optimization, MDS can get **stuck** in a poor layout that is not the best (a **local minimum**).',
              'Fix: sometimes give a point a **random jump** to see if it settles somewhere better.',
            ],
            example: 'The Iris flower data projected to 2D with MDS.',
          },
        ],
      },
    ],
    keyTakeaway:
      'Write the **4 ways** to handle many columns (subsetting, reduction, embedding, multiple displays), SPLOM facts (**$N^2$ cells, mirror-symmetric, diagonal = names/histograms**), and the **7-step MDS loop** ending "go back to step 3".',
    selfCheck: {
      question: 'What does the stress value S measure in MDS?',
      answer: 'How different the distances on screen are from the real distances between records — lower stress means a more faithful layout.',
    },
    walkthroughLinkId: 'mds-iteration',
  },
  {
    slug: 'line-based-techniques',
    shortTitle: 'Line-Based Techniques',
    title: 'Multivariate Data: 2. Line-Based Techniques',
    subtopicsCovered: [
      'Line Graphs (Superimposed, Stacked, Sorted)',
      'Parallel Coordinates (Inselberg 1985)',
      'Andrews Curves (1972)',
      'Radial Axis Techniques',
    ],
    summaryLine:
      'Line-based techniques **join the values with lines**, so you can read patterns from **slopes, curves and crossings**: **line graphs, parallel coordinates, Andrews curves** and **circular (radial) charts**.',
    bullets: [
      'Point methods draw a **dot** per value; **line methods join** a record’s (or column’s) values with lines.',
      'The lines show relationships through **slopes, curves and crossings**.',
    ],
    subSections: [
      {
        heading: 'A) Line Graphs',
        bullets: [
          'Basic version: the **y-axis** is the value and the **x-axis** is the order of records (often time).',
          'For many columns, draw a line per column **on the same axes** (superimposed) or **in separate panels** (juxtaposed).',
          'With a few columns, tell lines apart by **colour, dash style or width**.',
          'With many or overlapping columns, it becomes **a mess**.',
          { label: 'Stacked Line Chart', text: 'Each line sits **on top of the previous one** — fewer overlaps, but harder to read actual values.' },
          { label: 'Sorting', text: '**Sorting the records** by one column makes patterns much easier to see.' },
        ],
        example: 'Faculty salaries (8 columns) for 100 universities.',
      },
      {
        heading: 'B) Parallel Coordinates',
        bullets: [
          'Also called **||-coords** or **PCP**; invented by **Inselberg in 1985**.',
          'Instead of axes at right angles, all axes are **parallel**, evenly spaced vertical lines — **one per column**.',
          'Each record is a **zig-zag line (polyline)** that crosses each axis at its value for that column.',
          'It is like a line graph that **joins the values of one record** instead of one column.',
        ],
        example: 'A car record crosses the Price axis high, the Mileage axis low, the Weight axis high.',
        diagramId: 'dvt-parallel-coordinates',
        diagramCaption: 'Parallel coordinates: each record is a zig-zag line across the parallel axes.',
      },
      {
        heading: 'C) Andrews Curves',
        bullets: [
          'Invented by **David F. Andrews in 1972**.',
          'Each record $D = (d_1, d_2, \\ldots, d_N)$ becomes a **smooth wavy curve** made by adding sine and cosine waves.',
          'Similar records give **similar curves**; odd records stand out.',
          'The **order of columns** changes the curve a lot — an outlier may become easier or harder to see.',
        ],
        formulas: [
          {
            label: 'Andrews Curve',
            tex: 'f_D(t) = \\dfrac{d_1}{\\sqrt{2}} + d_2 \\sin t + d_3 \\cos t + d_4 \\sin 2t + d_5 \\cos 2t + \\cdots, \\qquad -\\pi \\le t \\le \\pi',
            note: 'Last term: odd N → $d_N \\cos(\\frac{N-1}{2}t)$; even N → $d_N \\sin(\\frac{N}{2}t)$.',
          },
        ],
        example: 'Iris data in normal column order vs reversed order gives different curves.',
      },
      {
        heading: 'D) Radial Axis Techniques',
        bullets: [
          'Every straight-axis chart has a **circular version**.',
          { label: 'Circular Line Graph', text: 'The line is drawn around a **circle** instead of along a straight base. Long data can be split into **rings** — great for **repeating (cyclic)** events like days of the week.' },
          'Related: **radar** and **star** charts.',
        ],
        subGroups: [
          {
            sideHeading: 'Other Circular Charts',
            bullets: [
              { label: '1. Polar Graphs', text: 'Dots placed using an **angle and a distance** from the centre.' },
              { label: '2. Circular Bar Charts', text: '**Straight bars** standing on a **circular base**.' },
              { label: '3. Circular Area Graphs', text: 'A circular line graph with the area under the line **filled in**.' },
              { label: '4. Circular Bar Graphs', text: '**Curved bars (arcs)** around a common centre, on a **straight base**.' },
            ],
          },
        ],
      },
    ],
    keyTakeaway:
      'Four line techniques: **line graphs** (stacked / sorted), **parallel coordinates** (Inselberg 1985, one record = one zig-zag line), **Andrews curves** (1972, sum of sine/cosine waves, order matters), **radial** (circular line graph, radar/star, polar, circular bar/area).',
    selfCheck: {
      question: 'How is one record drawn in parallel coordinates?',
      answer: 'As a zig-zag line that crosses each parallel axis at that record’s value for the column.',
    },
  },
  {
    slug: 'region-based-techniques',
    shortTitle: 'Region-Based Techniques',
    title: 'Multivariate Data: 3. Region-Based Techniques',
    subtopicsCovered: [
      'Bar Charts / Histograms',
      'Stacked vs Adjacent Bars',
      'Cityscapes (3D Histograms)',
      'Tabular Displays (Heatmaps)',
      'Dimensional Stacking',
    ],
    summaryLine:
      'Region-based techniques use **filled shapes** (bars, boxes, coloured cells) whose **size, shape or colour** show the values: **bar charts, cityscapes, heatmaps** and **dimensional stacking**.',
    bullets: [
      'Values are shown by **filled shapes** — their **size, shape or colour**.',
      'We judge **area** less accurately than **length**, but many good techniques still exist.',
      'Some show **summaries or distributions** (how values are spread), not raw data. Many began as **single-column** charts (pie, bar).',
    ],
    subSections: [
      {
        heading: 'A. Bar Charts / Histograms',
        bullets: [
          '**Rectangular bars** whose length shows a number; we compare **lengths** very accurately.',
          'Bars can be **horizontal or vertical**; horizontal bars make **long labels** easier to read.',
          { label: 'How Many Bars', text: 'For N variables, use **one bar each** (if N is not too big).' },
          { label: 'Histogram', text: 'Shows **how often** each value appears. For categories, one bar per category; for continuous numbers, one bar per **range** (e.g., 0–10, 10–20).' },
        ],
        subGroups: [
          {
            sideHeading: 'Bar Charts for Many Columns',
            bullets: [
              { label: 'Stacked Bars', text: 'Each bar is made of **smaller pieces**, one per column, in different colours/textures.' },
              { label: 'Side-by-Side (Grouped) Bars', text: 'Bars for each column stand **next to each other** on the same baseline — easier to compare, but uses more space.' },
              'Choice depends on **how many columns and bars** there are.',
            ],
            example: 'Monthly sales split into Product A, B and C — stacked vs side by side.',
          },
          {
            sideHeading: 'Cityscapes',
            bullets: [
              'A **3D bar chart**: boxes placed on a grid using two columns, with other columns setting **height and colour**.',
              'Looks like **city buildings**; if every grid cell has a box, it is a **3D histogram**.',
              { label: 'Problem', text: 'Front boxes **hide** back ones (occlusion).' },
              { label: 'Fixes', text: '**Rotate** the view, make boxes **thinner**, or make them **see-through**.' },
              'Popular for **map-based data**.',
            ],
          },
        ],
      },
      {
        heading: 'B. Tabular Displays',
        bullets: [
          'Many data sets are **tables**, so some techniques draw the table itself.',
          { label: 'Heatmap', text: 'The table with **colours instead of numbers** — each cell is a coloured square on one common colour scale.' },
          'Changing the **colour map** or stretching colours can highlight or hide certain values.',
        ],
        example: 'A table of temperatures per city per month shown as a grid of coloured squares.',
      },
      {
        heading: 'C. Dimensional Stacking',
        bullets: [
          'Shows many-column data on a flat 2D image **without overlapping points**.',
          { label: 'Step 1', text: 'Two columns make a **big grid** (rows and columns).' },
          { label: 'Step 2', text: 'Inside **each cell**, draw a **smaller grid** for the next two columns.' },
          { label: 'Step 3', text: 'Repeat until **all columns** are used.' },
          'Like an **odometer** (car distance meter): the inner grid changes fastest, the outer grid slowest.',
          'Every record gets **its own spot**; the value being studied (dependent variable) sets that spot’s **colour**.',
        ],
        example: 'Six columns with 4, 5, 2, 3, 3 and 6 possible values; a seventh column colours the smallest cells.',
        diagramId: 'dvt-dimensional-stacking',
        diagramCaption: 'Dimensional stacking: outer grid (d1 × d2) with smaller grids inside (d3 × d4).',
      },
    ],
    keyTakeaway:
      'Bar charts (**stacked vs side-by-side**, histograms), **cityscapes** (3D bars; fixes: rotate, thinner, see-through), **heatmaps** (table as colours), **dimensional stacking** (grids inside grids, odometer, colour = value).',
    selfCheck: {
      question: 'Give three ways to stop front boxes hiding back boxes in a cityscape.',
      answer: 'Let the user rotate the view, make the boxes thinner, or make them partly see-through.',
    },
  },
  {
    slug: 'combinations-of-techniques',
    shortTitle: 'Combinations of Techniques',
    title: 'Multivariate Data: 4. Combinations of Techniques',
    subtopicsCovered: [
      'Glyphs and Icons',
      'One-to-One, One-to-Many, Many-to-One Mappings',
      'Biases and Limitations of Glyphs',
      'Dimension Ordering Strategies',
      'Glyph Layout: Uniform, Data-Driven, Structure-Driven',
      'Dense Pixel Displays',
    ],
    summaryLine:
      'Some techniques **mix** point, line and region ideas. The two main ones: **glyphs** (small pictures whose parts are controlled by data) and **dense pixel displays** (one pixel per value).',
    bullets: [
      '**Hybrid** techniques combine features of points, lines and regions. The two most popular are **glyphs** and **dense pixel displays**.',
    ],
    subSections: [
      {
        heading: 'Glyphs and Icons',
        bullets: [
          { label: 'Glyph', text: 'A **small picture** whose features (width, height, colour, angle…) are **controlled by data values**.' },
          { label: 'Example', text: 'A box whose **width = midterm marks**, **height = final marks**, and **colour = gender**.' },
          'This definition is broad — a scatterplot dot, a histogram bar, or even a whole small line plot can be a glyph.',
          'Features you can use: **position, size, shape, orientation, colour, texture, line style, motion**.',
        ],
        subGroups: [
          {
            sideHeading: 'Three Ways to Map Data to a Glyph',
            bullets: [
              { label: '1. One-to-One', text: 'Each value controls a **different** feature, chosen to feel natural.', example: 'Temperature → colour; wind direction → arrow angle.' },
              { label: '2. One-to-Many (Redundant)', text: 'One value controls **several features** at once, to avoid misreading.', example: 'Population → both size and colour (helps colour-blind users).' },
              { label: '3. Many-to-One', text: 'Many values use the **same kind of feature**, so they are easy to compare.', example: 'Each column = height of one bar in a tiny bar chart.' },
            ],
          },
          {
            sideHeading: 'Problems and Limits of Glyphs',
            bullets: [
              { label: 'Some Features Are Read Better', text: 'We judge **length** well but **angle and colour** less accurately.' },
              { label: 'Neighbours Are Easier', text: 'Two features **next to each other** in a glyph are easier to compare than far-apart ones.' },
              { label: 'Close Glyphs Are Easier', text: 'Comparing glyphs **near each other on screen** is easier than distant ones.' },
              { label: 'Size Limit', text: 'Glyphs can only handle a **limited number** of columns and records.' },
            ],
          },
          {
            sideHeading: 'Choosing the Order of Columns',
            description: 'With N columns there are **N! possible orders** (N factorial). Ways to choose one:',
            bullets: [
              { label: 'By Similarity', text: 'Put **similar (correlated)** columns next to each other — shows trends and outliers.' },
              { label: 'For Symmetry', text: 'Make glyphs **symmetric**, which are easier to see and remember; odd ones stand out.' },
              { label: 'By One Record', text: 'Sort columns by the values of **one record** (e.g., the first day in a time series).' },
              { label: 'By Hand', text: 'Use **domain knowledge** to group related columns.' },
            ],
          },
          {
            sideHeading: 'Placing Glyphs on the Screen',
            bullets: [
              { label: '1. Uniform', text: 'Glyphs in a **neat grid** with equal spacing — no overlap, uses space well.' },
              { label: '2. Data-Driven', text: 'Position comes from **data values** (two columns as x, y, or from PCA/MDS); then push apart overlapping glyphs.' },
              { label: '3. Structure-Driven', text: 'Position follows the data’s **structure**, like a **spiral** for repeating cycles or a tree for hierarchies.' },
            ],
          },
        ],
      },
      {
        heading: 'Dense Pixel Displays',
        bullets: [
          'Also called **pixel-oriented techniques** — a mix of point and region methods.',
          'Developed by **Keim** and colleagues.',
          'Each value = **one pixel**; all pixels of one column form a **filled block**.',
          'Uses **every pixel** of the screen, so **millions of values** fit on one screen.',
          'Each pixel’s **colour** shows its value; trying a different colour map can reveal new features.',
          'Main design questions: **how to arrange** the pixels and **in what order**.',
        ],
        example: 'A year of stock prices for 100 companies, one pixel per price, one block per company.',
      },
    ],
    keyTakeaway:
      'Glyphs: definition + **3 mappings** (one-to-one, one-to-many, many-to-one) + **4 limits** + **N! orders** (4 ways) + **3 layouts** (uniform, data-driven, structure-driven). Dense pixel: **Keim**, one value per pixel, arrangement and order.',
    selfCheck: {
      question: 'Why map population to both size and colour (one-to-many)?',
      answer: 'It reduces misreading and helps colour-blind users, because the value can be read from either feature.',
    },
  },
  {
    slug: 'hierarchical-structures',
    shortTitle: 'Trees: Hierarchical Structures',
    title: 'Trees — Displaying Hierarchical Structures',
    subtopicsCovered: [
      'Space-Filling vs Non-Space-Filling',
      'Treemaps (Rectangular Layout)',
      'Sunburst (Radial Layout)',
      'Node-Link Diagrams',
      'Fan-out Degree and Depth',
    ],
    summaryLine:
      'A **tree (hierarchy)** is data in levels, like folders inside folders. It is drawn either by **filling space** (**treemaps, sunbursts**) or with **boxes and lines** (**node-link diagrams**).',
    bullets: [
      'Trees (hierarchies) are among the **most common** ways to store related information.',
      { label: 'Example', text: 'Company → departments → teams → people; or folders → sub-folders → files.' },
      'Two families: **space-filling** and **non-space-filling**.',
    ],
    subSections: [
      {
        heading: 'A. Space-Filling Methods',
        bullets: [
          'Use **all the screen space**. Parent–child is shown by **placing children inside or next to the parent**, not by lines.',
          'Two common layouts: **rectangular** and **radial (circular)**.',
        ],
        subGroups: [
          {
            sideHeading: 'Treemaps (Rectangular)',
            bullets: [
              'Like a **Venn diagram made of rectangles**; the most popular rectangular layout.',
              'Start with one rectangle (the root). **Slice it** into pieces for its children — **sizes based on how big each child is** — then slice each piece again, **switching between vertical and horizontal** cuts at each level.',
            ],
            example: 'A disk-usage map where each folder is a rectangle sized by its file size.',
          },
          {
            sideHeading: 'Sunburst (Radial)',
            bullets: [
              'The **root is in the centre**; each level is a **ring** around it.',
              'Each ring is divided among the nodes at that level.',
              'As in treemaps, a subtree with **more leaf items gets more space**.',
            ],
          },
        ],
        diagramId: 'dvt-treemap-sunburst',
        diagramCaption: 'The same hierarchy as a treemap (left) and a sunburst (right).',
      },
      {
        heading: 'B. Non-Space-Filling Methods',
        bullets: [
          'The most common is the **node-link diagram** — boxes (nodes) joined by lines (links).',
          { label: 'Uses', text: 'Organization charts, family trees, tournament brackets.' },
          { label: 'What Makes It Hard', text: '**Fan-out** (how many children a node has) and **depth** (how many levels).' },
          'Trees with few children per node (like **binary trees**) or **few levels** are much easier to draw.',
        ],
        example: 'A simple tree drawn with equal spacing on each level.',
      },
    ],
    keyTakeaway:
      'Space-filling (no lines, children placed inside parents): **treemap** = slice rectangles, alternate vertical/horizontal, size by subtree; **sunburst** = rings from the centre. Non-space-filling: **node-link**, made hard by **fan-out and depth**.',
    selfCheck: {
      question: 'How does a basic treemap divide space?',
      answer: 'It slices a rectangle into pieces sized by each child’s subtree, then slices each piece again, switching between vertical and horizontal cuts at each level.',
    },
  },
  {
    slug: 'arbitrary-graphs-networks',
    shortTitle: 'Graphs & Arbitrary Networks',
    title: 'Graphics and Networks — Displaying Arbitrary Graphs/Networks',
    subtopicsCovered: [
      'Trees vs Arbitrary Graphs',
      'Force-Directed Node-Link Graphs',
      'Planar Graph Drawing & Definitions',
      'Planarity Test (Separating Cycle)',
      'Visibility Approach',
      'Complex Networks & Strogatz’s Six Complexities',
      'Matrix Representations',
    ],
    summaryLine:
      'A **graph** is a set of **nodes connected by links** (like a social network). Any graph can be drawn as **dots and lines** (force-directed or planar layouts) or as a **grid of connections** (adjacency matrix).',
    bullets: [
      { label: 'Graph vs Tree', text: 'A tree is a special graph: **connected, no loops (cycles)**. General graphs can have **loops**, **weights** on links, or **separate pieces**.' },
      { label: 'Arbitrary Graph', text: 'A graph whose type or structure we **do not know in advance**; here we assume links have no direction.' },
      'Two ways to draw: **node-link diagrams** and **matrix displays**.',
    ],
    subSections: [
      {
        heading: 'Node-Link Graphs',
        subGroups: [
          {
            sideHeading: 'Force-Directed Drawing',
            bullets: [
              'Imagine every link is a **spring** and every node **pushes others away** like magnets of the same pole.',
              'Connected nodes are pulled to a comfortable distance (**spring force, Hooke’s law**); all nodes repel so they do not overlap (**repulsion, inverse-square law**).',
              'Each step: **add up all forces** on each node and move it a bit in that direction; then recalculate.',
              'Start with **big moves**, then **smaller** ones so nodes settle instead of shaking.',
              'It can get **stuck** in a poor layout, so run it **several times** from random starts and keep the one with the **lowest total force**.',
            ],
            formulas: [
              {
                label: 'Spring Force (x-part)',
                tex: 'f_{ij}(x) = k_{ij}\\,\\big(d(i,j) - s_{ij}\\big)\\,\\dfrac{x_i - x_j}{d(i,j)}',
                note: '$k_{ij}$ = spring stiffness, $s_{ij}$ = natural spring length, $d(i,j)$ = current distance.',
              },
              {
                label: 'Repulsion Force (x-part)',
                tex: 'g_{ij}(x) = \\dfrac{r_{ij}}{d(i,j)^2}\\,\\dfrac{x_i - x_j}{d(i,j)}',
                note: '$r_{ij}$ = repulsion strength; it gets weaker with the square of the distance.',
              },
            ],
            example: 'A graph of relationships between European countries drawn with aiSee.',
          },
          {
            sideHeading: 'Planar Graph Drawing',
            bullets: [
              'A **planar graph** can be drawn with **no crossing lines**. We also assume it is **connected** (every node can reach every other).',
              { label: 'Why Focus on It', text: 'Long maths history; **crossings make graphs hard to read**; planar graphs have **few links**.' },
              'Non-planar graph? Add **dummy nodes** at the crossings, draw it, then remove the dummies.',
            ],
            formulas: [
              {
                label: 'Euler’s Limit for Planar Graphs',
                tex: '|E| \\le 3n - 6',
                note: 'A planar graph with $n$ nodes has at most $3n - 6$ links.',
              },
            ],
          },
          {
            sideHeading: 'Planar Graph Terms',
            bullets: [
              { label: 'Face', text: 'A region of the page **enclosed** by connected nodes.' },
              { label: 'Neighbour Set', text: 'The nodes attached to a node, listed **anticlockwise**.' },
              { label: 'Planar Embedding', text: 'A group of drawings where every node has the **same neighbour order**; there can be very many.' },
              { label: 'Cutvertex', text: 'A node whose removal **breaks the graph into pieces**.' },
              { label: 'Biconnected Graph', text: 'A graph with **no cutvertex**.' },
              { label: 'Block', text: 'The **largest biconnected part** of a graph.' },
              { label: 'Separating Pair', text: '**Two nodes** whose removal breaks a biconnected graph.' },
              { label: 'Triconnected Graph', text: 'No separating pair; if planar, it has **only one** possible embedding.' },
            ],
          },
          {
            sideHeading: 'Planarity Test (Is the Graph Planar?)',
            description: 'Given a biconnected graph G and a cycle C that splits it into at least two pieces:',
            bullets: [
              { label: '1.', text: 'Find all the **pieces** of G with respect to C.' },
              { label: '2.', text: 'For each piece P that is **not a simple path** (it has a loop):' },
              { label: '(a)', text: 'Make a smaller graph G′ = P plus C.' },
              { label: '(b)', text: 'Make a new cycle C′ = a path through P plus the part of C joining its ends.' },
              { label: '(c)', text: '**Repeat the test** on (G′, C′); if any part is not planar, G is not planar.' },
            ],
          },
          {
            sideHeading: 'Visibility Approach (How to Draw It)',
            bullets: [
              { label: 'Step 1 — Visibility', text: 'Draw each node as a **horizontal bar** and each link as a **vertical line** between bars. For planar graphs this never crosses.' },
              { label: 'Step 2 — Replacement', text: 'Shrink each bar to a **single point** and turn each vertical line into a **bent line** that follows the original link.' },
            ],
          },
        ],
      },
      {
        heading: 'Complex Networks',
        bullets: [
          'For networks with many layers (multiplex), an **entanglement index** measures how tangled the links are.',
          'A **complex network** has features found in **real-world** networks but not in simple or random ones:',
          { label: 'Small World', text: 'Any two nodes are only a **few steps apart** ("six degrees of separation").' },
          { label: 'Scale-Free', text: 'A few nodes have **huge numbers of links**, most have few (a **power-law / long-tail** pattern).', example: 'A few celebrities with millions of followers.' },
          { label: 'High Clustering', text: 'Your friends are often **friends with each other**.' },
          'Real graphs often have many **separate pieces** of different sizes.',
        ],
        subGroups: [
          {
            sideHeading: 'Strogatz’s Six Kinds of Network Complexity',
            bullets: [
              '**Structural** — links are tangled.',
              '**Network evolution** — the network changes over time.',
              '**Connection diversity** — links have different weights, directions or signs.',
              '**Dynamical** — node states change over time.',
              '**Node diversity** — different types of nodes.',
              '**Meta-complication** — several of the above together.',
            ],
          },
        ],
      },
      {
        heading: 'Matrix Representations for Graphs',
        bullets: [
          'An **adjacency matrix** is an **N × N grid**: the cell at row i, column j is filled if nodes i and j are **linked**.',
          'Cells can be just **filled/empty** or show the link’s **strength**.',
          '**Advantage:** no crossing lines at all. **Disadvantage:** does not fit graphs with **thousands** of nodes.',
          '**Bertin** studied it first; **re-ordering** rows and columns makes groups appear as **dense blocks**.',
        ],
        example: 'The same 8-node graph: after re-ordering, two groups of 4 friends become two solid squares.',
        diagramId: 'dvt-adjacency-matrix',
        diagramCaption: 'Same graph, two node orders — re-ordering reveals two 4-node groups as solid blocks.',
      },
    ],
    keyTakeaway:
      'Write the **force-directed** idea (springs + repulsion) with both formulas, **planar terms** (cutvertex, biconnected, block, separating pair, triconnected), **Euler 3n − 6**, the **visibility approach** (bars → points), complex-network features (**small world, scale-free, clustering**), and **adjacency matrix + re-ordering**.',
    selfCheck: {
      question: 'What is the main advantage and limitation of an adjacency matrix?',
      answer: 'It has no crossing lines at all, but it does not work well for graphs with thousands of nodes.',
    },
  },
];

export function buildMultivariateTopics({ unit, idPrefix, startOrder }: BuildOptions): LessonTopic[] {
  return DRAFTS.map(({ slug, ...rest }, idx) => ({
    ...rest,
    id: `${idPrefix}-${slug}`,
    unit,
    order: startOrder + idx,
    walkthroughLinkId: rest.walkthroughLinkId as WalkthroughId | undefined,
  }));
}
