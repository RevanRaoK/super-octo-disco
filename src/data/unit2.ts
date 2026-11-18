import { LessonTopic } from '@/types/course';

export const UNIT2_TOPICS: LessonTopic[] = [
  {
    id: 'u2-visualization-stages',
    shortTitle: 'Visualization Stages',
    unit: 'unit2',
    order: 1,
    title: '2.1 Visualization Stages',
    subtopicsCovered: [
      'Two Key Points of the Pipeline',
      'Data Preprocessing and Transformation',
      'Mapping for Visualizations',
      'Expressiveness and Effectiveness',
      'Rendering Transformations',
    ],
    summaryLine:
      'Turning data into a picture happens in **three stages**: **prepare the data**, **decide how it will look** (mapping), and **draw it** (rendering). The user can interact at any stage.',
    bullets: [
      'Almost every visualization system fits these stages, and any calculation can be placed in any stage.',
      {
        label: 'Key Point 1 — Interaction Anywhere',
        text: 'The user can step in at **any point** — at any stage (node) or between stages (link).',
      },
      {
        label: 'Key Point 2 — Many-to-Many',
        text: 'Each link is **many-to-many**: one data set can feed many pictures, and one screen can show many pictures at once.',
        example: 'The same sales data shown as a bar chart and a map side by side.',
      },
    ],
    subSections: [
      {
        heading: 'The Three Stages',
        subGroups: [
          {
            sideHeading: '1. Data Preprocessing and Transformation',
            bullets: [
              'Turn raw data into something the system **can use**.',
              { label: 'First', text: 'Convert data into **basic computer data types** (numbers, text, dates).' },
              { label: 'Second', text: 'Fix problems: **missing values**, **typing errors**, and data that is **too big** to handle.' },
              { label: 'Fixes', text: 'Missing values → **interpolation** (guess from neighbours). Too much data → **sampling, filtering, aggregation or partitioning** (splitting into parts).' },
            ],
          },
          {
            sideHeading: '2. Mapping for Visualizations',
            bullets: [
              'Once data is clean, decide **how it will look** — which value becomes **shape, colour or sound**.',
              'It is easy to make a **nonsense picture** that gives the wrong message.',
              {
                label: 'Bad Bar Chart Example',
                text: 'Bars that stretch across the x-axis labels make it look like the x-axis matters when it does not.',
                example: 'The Volvo bar crosses USA, Japan, Germany… before reaching Sweden, wrongly hinting at a link to those countries. A scatter plot is better.',
              },
              {
                label: 'Expressiveness & Effectiveness',
                text: '**Expressiveness** = the picture shows exactly the facts in the data, nothing false. **Effectiveness** = people understand it quickly and correctly. These two decide how good a mapping is.',
              },
            ],
          },
          {
            sideHeading: '3. Rendering Transformations',
            bullets: [
              'The final stage: turn the shapes into an actual **image on screen**.',
              'It talks to a **graphics library (API)** and sets the **view**, the **shading** (for 3D) and the **output device** (screen, printer).',
              'This stage **depends heavily on the graphics library** being used.',
            ],
          },
        ],
        diagramId: 'dvt-visualization-stages',
        diagramCaption:
          'Data → Preprocessing → Mapping → Rendering → Image, with user interaction possible at every node and link.',
      },
    ],
    keyTakeaway:
      'Write the 3 stages with their sub-points and **always add the two key points**: interaction at any node/link, and **many-to-many** links. Use the **Volvo bar chart** as the example of a bad mapping.',
    selfCheck: {
      question: 'What two key points apply to the visualization stages?',
      answer:
        'The user can interact at any stage or link, and every link is many-to-many (many pictures from one data set, many pictures on one screen).',
    },
  },
  {
    id: 'u2-semiology-graphical-symbols',
    shortTitle: 'Semiology of Graphical Symbols',
    unit: 'unit2',
    order: 2,
    title: '2.2 Semiology of Graphical Symbols',
    subtopicsCovered: [
      'Graphical Symbol & Semiology',
      'Symbols and Visualizations',
      'Features of Graphics',
      'Rules of a Graphic',
      'Analysis of a Graphic',
    ],
    summaryLine:
      'Any visual object (arrow, label, dot) is a **graphical symbol**. **Semiology** is the study of these symbols — how their position and shape show **similarity, order and proportion** in data.',
    bullets: [
      { label: 'Graphical Symbol', text: 'Any **visual object** in a picture, like an arrow, a label or a dot.' },
      { label: 'Semiology', text: 'The **science of graphical symbols and marks** — how pictures carry meaning.' },
      'Everything drawn on a flat page (diagrams, networks, maps, plots) is built from graphical symbols.',
      'Semiology uses the page and its objects to make data **similarities, order and proportions** visible to people.',
    ],
    subSections: [
      {
        heading: '1. Symbols and Visualizations',
        subGroups: [
          {
            sideHeading: 'Understood in One Step',
            bullets: [
              'A familiar sign like a **yield (give way) sign** is recognized **instantly** once you have seen it often.',
              'You understand it in **one step** — you just recall its meaning.',
            ],
          },
          {
            sideHeading: 'Understood in Two Steps',
            bullets: [
              'A complex chart needs **attention** and effort.',
              { label: 'Step 1', text: 'Find the **main elements** (the pieces) in the picture.' },
              { label: 'Step 2', text: 'Work out the **relationships** between those pieces.' },
              'With effort we recognize symbols from **memory**, pick out **groups** that look alike, and finally spot the **most interesting** items (special clusters, countries, products).',
            ],
          },
          {
            sideHeading: 'Must Be Labelled Clearly',
            bullets: [
              'A chart is **useless without labels** that tell you what it shows, and they must be easy to read.',
              'A good picture has **clear x, y (and z) axes** and clear elements.',
            ],
          },
        ],
      },
      {
        heading: '2. Features of Graphics',
        bullets: [
          'Graphics have **three or more dimensions** (directions of information).',
          'Each point links a position in **x** with a position in **y**.',
          'If points also **vary in size**, size acts as a **third value, z**.',
          'So a 2D plot with sizes is **equivalent** to a 3D plot with heights — two ways of showing z.',
          'All the points together show **all relations between x, y and z**; any pattern you see is a pattern in the data.',
        ],
        example: 'A city map where x = longitude, y = latitude, and dot size = population.',
      },
      {
        heading: '3. Rules of a Graphic',
        bullets: [
          { label: 'Rule 1', text: 'A graphic’s goal is to find **groups or orders** in x and in y, based on the **z values**.' },
          { label: 'Rule 2', text: 'The **(x, y, z) layout** always lets you find those groups.' },
          { label: 'Rule 3', text: 'Inside this layout, **re-ordering and grouping** rows/columns reveals the big-picture information.' },
          { label: 'Rule 4', text: 'A graphic with **more than three factors** that breaks the (x, y, z) layout **loses its unity** — it stops being readable as one picture.' },
          { label: 'Rule 5', text: 'Pictures must be **readable and understandable by people**.' },
        ],
      },
      {
        heading: '4. Analysis of a Graphic',
        bullets: [
          { label: 'First (Preattentive)', text: 'We **instantly** see groups of objects, without effort.' },
          { label: 'Then (Cognitive)', text: 'We **think** about what those groups are.' },
          { label: 'Finally (Both)', text: 'We look at **special cases** outside the groups and links between groups.' },
          'This can be done at many levels and with many pictures.',
          {
            label: 'Computer Help',
            text: 'The computer can **pre-group** the data (clustering) and show the result, so we see groups faster.',
          },
        ],
      },
    ],
    keyTakeaway:
      'Define **graphical symbol** and **semiology**, contrast **one-step (yield sign)** vs **two-step** understanding, list the **5 rules** around the (x, y, z) layout, and the 3-step analysis: **see groups → understand groups → study special cases**.',
    selfCheck: {
      question: 'What happens to a graphic with more than three factors that breaks the (x, y, z) layout?',
      answer: 'It loses its unity — it can no longer be read as one picture and the big-picture information is lost.',
    },
  },
  {
    id: 'u2-eight-visual-variables',
    shortTitle: 'The Eight Visual Variables',
    unit: 'unit2',
    order: 3,
    title: '2.3 The Eight Visual Variables',
    subtopicsCovered: [
      'Position',
      'Mark (Shape)',
      'Size (Length, Area, Volume)',
      'Brightness (Luminance)',
      'Color (Hue, Saturation)',
      'Orientation',
      'Texture',
      'Motion',
    ],
    summaryLine:
      'There are **eight ways** a shape can carry data: **position, mark (shape), size, brightness, color, orientation, texture and motion**.',
    bullets: [
      'A **visual variable** is a property of a shape that we can change to show data.',
      'The eight are: **position, shape, size, brightness, color, orientation, texture and motion**.',
      '**Position and mark** are required to make any picture. The other six are **extra properties** of the marks.',
    ],
    subSections: [
      {
        heading: 'The Eight Variables',
        subGroups: [
          {
            sideHeading: '1. Position',
            bullets: [
              '**Where** a shape is placed (in 1D, 2D or 3D). It is the **first and most important** variable.',
              'It has the **biggest impact**, because reading a picture starts with **where things are**.',
              'Spreading shapes out across the space shows **more information**.',
              { label: 'Worst Case', text: 'Everything drawn at the **same spot** — you only see the last one.' },
              { label: 'Best Case', text: 'Every shape at its **own spot** with **no overlap**.' },
            ],
          },
          {
            sideHeading: '2. Mark (Shape)',
            bullets: [
              'The **basic shapes** that stand for data: points, lines, areas, volumes, or even **letters and symbols**.',
              'When comparing marks, look only at **shape**, not size, shade or angle.',
              'Marks must be **easy to tell apart**, since a picture may have thousands.',
              'Different shapes should have **similar size and complexity**, so one does not stand out by accident.',
            ],
            example: 'Circles for sedans, triangles for SUVs, squares for trucks in an MPG vs horsepower plot.',
          },
          {
            sideHeading: '3. Size (Length, Area and Volume)',
            bullets: [
              '**How big** a mark is drawn.',
              'Best for **numbers that change gradually** (continuous data).',
              'Can show **categories** only if there are **very few**, because similar sizes are hard to tell apart.',
            ],
            example: '1993 cars: engine size vs fuel tank, with bigger dots for higher price.',
          },
          {
            sideHeading: '4. Brightness (Luminance)',
            bullets: [
              '**How light or dark** a mark is.',
              'People **cannot tell apart** every small brightness difference.',
              'So use it for **rough comparisons**, or use only **a few clear brightness steps**.',
              'Use a **perceptually even** scale — each step should **look** equally different.',
            ],
            example: '1993 cars: darker dot = wider car.',
          },
          {
            sideHeading: '5. Color',
            bullets: [
              'Brightness is **not** colour. Colour has two parts:',
              { label: 'Hue', text: 'What we call the colour — **red, green, blue** (the main wavelength of light).' },
              { label: 'Saturation', text: 'How **pure or strong** the colour is compared with grey (vivid red vs dull pinkish-grey).' },
              'We use a **colour map** — a table that says which value gets which colour.',
            ],
            example: '1993 cars: car length coloured blue (short) to yellow (long).',
          },
          {
            sideHeading: '6. Orientation',
            bullets: [
              '**Which way** a mark is rotated, based on a data value.',
              'Our eyes notice orientation **instantly** (preattentively).',
              'Does **not** work for circles — a circle looks the same however it is turned.',
              'Works best for marks with **one clear long axis**, like a line or arrow.',
            ],
            example: 'Smallest value = arrow pointing up; bigger values rotate it clockwise.',
          },
          {
            sideHeading: '7. Texture',
            bullets: [
              'A **pattern** filling a mark, made of small marks, colours and angles.',
              '**Dashed and dotted** lines can be told apart if there are only a few types.',
              'Mostly used to fill **areas and surfaces**; in 3D it can be bumps of different height and spacing.',
            ],
            example: '1993 cars: car type shown by striped, dotted or cross-hatched fill.',
          },
          {
            sideHeading: '8. Motion',
            bullets: [
              'Any variable can **change over time** to show more information.',
              { label: 'Speed', text: 'How fast something moves or **flashes**.' },
              'The eye is drawn to things that **move together** and to things that move **differently** (outliers).',
              { label: 'Direction', text: 'Up/down/left/right for position; bigger/smaller or brighter/dimmer for other variables.' },
            ],
          },
        ],
        diagramId: 'dvt-eight-visual-variables',
        diagramCaption: 'The eight visual variables applied to the same mark.',
      },
    ],
    keyTakeaway:
      'Mnemonic **P-M-S-B-C-O-T-M**: Position, Mark, Size, Brightness, Color, Orientation, Texture, Motion. For each write what it is + one car-data example. **Position and mark** make the picture; the rest are **properties of marks**.',
    selfCheck: {
      question: 'Why is a circle a bad mark for showing orientation?',
      answer: 'A circle looks the same at every angle; orientation needs a mark with one clear long axis, like a line or arrow.',
    },
  },
  {
    id: 'u2-historical-perspective',
    shortTitle: 'Historical Perspective',
    unit: 'unit2',
    order: 4,
    title: '2.4 Historical Perspective',
    subtopicsCovered: [
      'Bertin (1967) Semiology of Graphics',
      'Mackinlay (1986) APT',
      'Bergeron & Grinstein (1989) Reference Model',
      'Wehrend & Lewis (1990)',
      'Robertson (1990) Natural Scene Paradigm',
      'Roth (1991) Visage & SAGE',
      'Casner (1991) BOZ',
      'Beshers & Feiner (1992) AutoVisual',
      'Senay & Ignatius (1994) VISTA',
      'Hibbard (1994) Lattice Model',
      'Golovchinsky (1995) AVE',
      'Card, Mackinlay & Shneiderman (1999) Spatial Substrate',
      'Kamps (1999) EAVE',
      'Wilkinson (1999) Grammar of Graphics',
      'Hoffman (2000) Table Visualizations',
    ],
    summaryLine:
      'These are the people and systems that tried to turn visualization from guesswork into a **formal, rule-based science**, from **Bertin (1967)** to **Hoffman (2000)**.',
    bullets: [
      '**Robertson** first said visualization systems need **formal models** (clear rules) as their foundation.',
      'Most of the systems below try to **design pictures automatically** from the data.',
    ],
    subSections: [
      {
        heading: 'Efforts to Formalize Visualization',
        subGroups: [
          {
            sideHeading: '1. Bertin (1967) — Semiology of Graphics',
            bullets: [
              '**Jacques Bertin**, probably the most important person in visualization theory, wrote *Sémiologie Graphique*.',
              'The **first serious attempt** to define how graphics carry information, treated as a **science of signs**.',
              'Key idea: keep **content** (the information) separate from the **container** (the graphic’s properties).',
              'He defined a **graphical vocabulary** — the basic building blocks of pictures.',
            ],
          },
          {
            sideHeading: '2. Mackinlay (1986) — APT',
            bullets: [
              '**APT (A Presentation Tool)** automatically designs charts for **database (table) data**.',
              'It takes information from a database and produces a **graphical design**.',
              'A graphical design = a **description of which graphic techniques** encode which information.',
            ],
          },
          {
            sideHeading: '3. Bergeron and Grinstein (1989) — Visualization Reference Model',
            bullets: [
              'A model that maps the **data space** to a **picture**, based on the graphics pipeline, in **four stages**:',
              { label: 'Stage 1', text: 'Identify the **data source** and its structure.' },
              { label: 'Stage 2 — Model Transformation', text: 'Convert the data into a **usable form**.' },
              { label: 'Stage 3 — View Specification', text: 'Choose **how it will look** (the visual mapping).' },
              { label: 'Stage 4 — Association', text: 'Generate the **actual graphics (and sound)** that people perceive.' },
            ],
          },
          {
            sideHeading: '4. Wehrend and Lewis (1990)',
            bullets: [
              'Built a large **catalog** of encoding techniques and when to use them, to design pictures automatically.',
              'The catalog is a **2D table**: **objects** (types of problems, grouped by field) × **operations** (types of goals).',
              'Each cell lists a **problem** (task) and its **solution** (technique).',
            ],
          },
          {
            sideHeading: '5. Robertson (1990) — Natural Scene Paradigm',
            bullets: [
              'Show data as properties of **realistic natural scenes** (like landscapes).',
              'People are very good at reading natural scenes, so this helps analyze **many variables at once**.',
              'Data is mapped to scene properties like **surface height, material, density, wetness**, ranked by how well we perceive them.',
            ],
          },
          {
            sideHeading: '6. Roth (1991) — Visage and SAGE',
            bullets: [
              '**Visage** is an environment for exploring information that includes **SAGE**, an automatic graphic designer.',
              'Main idea: **information-centric** — users interact **directly with the data objects** in the picture.',
              'Built from two object types: **elements** and **frames**.',
            ],
          },
          {
            sideHeading: '7. Casner (1991) — BOZ',
            bullets: [
              'Automatic graphic design for **specific tasks**.',
              'Replaces **mental work** (doing arithmetic, comparing numbers) with **visual work** (seeing shortest distance, bigger size).',
              'Can make **different pictures of the same data** for different tasks.',
            ],
            example: 'Instead of adding flight times in your head, you just pick the shortest line on the screen.',
          },
          {
            sideHeading: '8. Beshers and Feiner (1992) — AutoVisual',
            bullets: [
              'Automatic design inside the **n-Vision** system.',
              'n-Vision uses **worlds-within-worlds**: a small coordinate system placed inside a bigger one, repeatedly.',
              'Built from four parts: **encoding objects, encoding spaces, selections, user interface**.',
            ],
          },
          {
            sideHeading: '9. Senay and Ignatius (1994) — VISTA',
            bullets: [
              'Extended Mackinlay’s idea to **scientific data**.',
              '**VISTA (Visualization Tool Assistant)** uses **perception experiment results** and **rules of thumb** to judge how good a picture is.',
            ],
          },
          {
            sideHeading: '10. Hibbard (1994) — Lattice Model',
            bullets: [
              'Focuses on the **conversion from data to display**, not on the shapes.',
              'Key idea: data is only an **approximation** of real maths, and a screen is only an **approximation** of a perfect display.',
            ],
          },
          {
            sideHeading: '11. Golovchinsky (1995) — AVE',
            bullets: [
              '**AVE (Automatic Visualization Environment)** builds diagrams from **basic pieces** that match relations in the data.',
              'Uses **only rectangles**, connected according to the data.',
              'Produces **trees and graphs** (rectangles as boxes, lines/arrows as links).',
            ],
          },
          {
            sideHeading: '12. Card, Mackinlay and Shneiderman (1999) — Spatial Substrate',
            bullets: [
              'A reference model with three steps that support interaction: **data transformations, visual mappings, view transformations**.',
              'The **spatial substrate** is about using **position on screen** to show data.',
            ],
          },
          {
            sideHeading: '13. Kamps (1999) — EAVE',
            bullets: [
              '**EAVE (Extended AVE)** — an extension of AVE.',
              'Takes **any relations** as input; considers data, graphic knowledge and **user preferences**.',
              'Only makes **standard publication diagrams**; has its own **diagram language**.',
            ],
          },
          {
            sideHeading: '14. Wilkinson (1999) — Grammar of Graphics',
            bullets: [
              'A set of rules ("grammar") for building **statistical charts**, based on his Graphics Algebra.',
              'Each part of a chart is a **graphical object**, and combining parts gives the full chart.',
            ],
          },
          {
            sideHeading: '15. Hoffman (2000) — Table Visualizations',
            bullets: [
              'The **first attempt** to define a **general space of all visualizations**.',
              'Describes each technique by its basic graphic properties, and new techniques as **combinations** of them.',
              'Combined four techniques: **survey plots, scatterplots, RadViz, parallel coordinates**.',
            ],
          },
        ],
        table: {
          caption: 'Timeline Cheat Sheet',
          headers: ['Year', 'Who', 'Main Idea (one line)'],
          rows: [
            ['1967', 'Bertin', 'Semiology of Graphics — content vs container'],
            ['1986', 'Mackinlay', 'APT — auto-design charts for table data'],
            ['1989', 'Bergeron & Grinstein', '4-stage reference model'],
            ['1990', 'Wehrend & Lewis', 'Catalog: problems × goals'],
            ['1990', 'Robertson', 'Show data as natural scenes'],
            ['1991', 'Roth', 'Visage + SAGE, interact with data directly'],
            ['1991', 'Casner', 'BOZ — mental work → visual work'],
            ['1992', 'Beshers & Feiner', 'AutoVisual, worlds within worlds'],
            ['1994', 'Senay & Ignatius', 'VISTA for scientific data'],
            ['1994', 'Hibbard', 'Lattice model of data → display'],
            ['1995', 'Golovchinsky', 'AVE — diagrams from rectangles'],
            ['1999', 'Card, Mackinlay, Shneiderman', 'Spatial substrate'],
            ['1999', 'Kamps', 'EAVE — extended AVE'],
            ['1999', 'Wilkinson', 'Grammar of Graphics'],
            ['2000', 'Hoffman', 'General space of table visualizations'],
          ],
        },
      },
    ],
    keyTakeaway:
      'Learn the **timeline table**. Write more for Bertin (content vs container), Bergeron & Grinstein (4 stages), Casner BOZ (mental → visual work) and Hoffman (survey plot, scatterplot, RadViz, parallel coordinates).',
    selfCheck: {
      question: 'What did Casner’s BOZ do differently?',
      answer: 'It replaced mental tasks like arithmetic and comparing numbers with visual tasks like seeing the shortest distance or biggest size.',
    },
  },
  {
    id: 'u2-taxonomies',
    shortTitle: 'Taxonomies',
    unit: 'unit2',
    order: 5,
    title: '2.5 Visualization Taxonomies',
    subtopicsCovered: [
      'What is a Taxonomy',
      'Keller & Keller (1994) Visualization Goals',
      'Shneiderman (1996) Data Type by Task',
      'Keim (2002) Information Visualization Classification',
    ],
    summaryLine:
      'A **taxonomy** is a **classification** (a way of sorting things into groups). Here we classify **data types, techniques, tasks and interactions**.',
    bullets: [
      'A **taxonomy** sorts things into **groups**, usually in a hierarchy (tree), and shows how they relate.',
      'In visualization we classify **data, techniques, tasks and ways of interacting**.',
    ],
    subSections: [
      {
        heading: '1. Keller and Keller (1994) — Taxonomy of Visualization Goals',
        description:
          'In their book *Visual Cues*, they classify techniques by **type of data** and **what the user wants to do**.',
        bullets: [
          {
            label: 'Data Types',
            text: '**Scalar** (single values), **nominal** (names/categories), **direction**, **shape**, **position**, and **SERO** (spatially extended region or object — something that takes up space, like a lake).',
          },
          'They also list user **tasks**; some overlap, but the list is a good starting point when designing.',
        ],
      },
      {
        heading: '2. Shneiderman (1996) — Data Type by Task Taxonomy',
        bullets: [
          {
            label: '7 Data Types',
            text: '**1D linear** (a list), **2D map**, **3D world**, **temporal** (time), **multidimensional** (many columns), **tree**, **network**.',
          },
          'For tasks, he looked at **how analysts behave** when getting knowledge from data.',
        ],
      },
      {
        heading: '3. Keim (2002) — Information Visualization Classification',
        description:
          'Classifies systems along **three independent axes**: **data type**, **visualization technique**, and **interaction/distortion** method.',
        subGroups: [
          {
            sideHeading: 'Data Types (6)',
            bullets: [
              { label: '1. One-dimensional', text: 'Time data, news, stock prices, text.' },
              { label: '2. Two-dimensional', text: 'Maps, charts, floor plans, newspaper layouts.' },
              { label: '3. Multidimensional', text: 'Spreadsheets, database tables.' },
              { label: '4. Text and hypertext', text: 'News articles, web pages.' },
              { label: '5. Hierarchies and graphs', text: 'Phone/network traffic, system models.' },
              { label: '6. Algorithm and software', text: 'Program code, execution traces, memory dumps.' },
            ],
          },
          {
            sideHeading: 'Visualization Techniques (5)',
            bullets: [
              { label: '1. Standard 2D/3D', text: 'Normal x-y or x-y-z plots, bar charts, line graphs.' },
              { label: '2. Geometrically transformed', text: 'Pictures made by transforming the data’s geometry — scatterplot matrices, parallel coordinates, landscapes.' },
              { label: '3. Iconic', text: 'Each record drawn as a small icon — Chernoff faces, star icons, stick figures.' },
              { label: '4. Dense pixel', text: 'Each value = one pixel — recursive pattern, circle segments.' },
              { label: '5. Stacked', text: 'Data placed inside data — dimensional stacking, treemaps, cone trees, worlds-within-worlds.' },
            ],
          },
          {
            sideHeading: 'Interaction & Distortion Techniques (5)',
            bullets: [
              { label: '1. Dynamic projection', text: 'Automatically rotate through many views — grand tour, XGobi.' },
              { label: '2. Interactive filtering', text: 'Hide/show data by rules — Magic Lenses, dynamic queries, Polaris.' },
              { label: '3. Interactive zooming', text: 'Zoom in for detail — TableLens, PAD++, Spotfire.' },
              { label: '4. Interactive distortion', text: 'Enlarge one part, shrink the rest — fisheye views, perspective wall, hyperbolic views.' },
              { label: '5. Linking & brushing', text: 'Select in one view, it highlights in all other views — multiple scatterplots, XmdvTool.' },
            ],
          },
        ],
        diagramId: 'dvt-keim-taxonomy',
        diagramCaption: 'Keim’s three classification axes: data type × technique × interaction/distortion.',
      },
    ],
    keyTakeaway:
      'Remember the counts: **Keller & Keller = 6 data types (incl. SERO)**, **Shneiderman = 7 data types**, **Keim = 6 data types × 5 techniques × 5 interactions** — give one example each.',
    selfCheck: {
      question: 'Name Keim’s five classes of visualization techniques.',
      answer: 'Standard 2D/3D, geometrically transformed, iconic, dense pixel, and stacked displays.',
    },
  },
  {
    id: 'u2-experimental-semiotics',
    shortTitle: 'Experimental Semiotics',
    unit: 'unit2',
    order: 6,
    title: '2.6 Experimental Semiotics Based on Perception',
    subtopicsCovered: [
      'Conventional View of Diagrams',
      'Semiotics of Graphics',
      'Pictures as Sensory Languages',
      'Sensory versus Arbitrary Symbols',
    ],
    summaryLine:
      'Are diagrams just **learned rules** (like words), or do some work **naturally** because of how our eyes and brain see? This topic says some symbols are **sensory** (natural) and others are **arbitrary** (learned).',
    bullets: [
      'One view says visualization is about **diagrams** and how they carry meaning.',
      'Diagrams are made of **symbols**, and the meaning of a symbol comes from **agreement between people** (convention).',
      'If so, diagrams are just like written words — **learn the code** and any diagram works equally well, so the science of perception would not matter.',
      'Many philosophers in **semiotics** support this view; this topic tests it using **experiments on perception**.',
    ],
    subSections: [
      {
        heading: '1. Semiotics of Graphics',
        bullets: [
          { label: 'Semiotics', text: 'The study of **symbols and how they carry meaning**.' },
          'Started by **C.S. Peirce** in the USA and developed by **Ferdinand de Saussure** in Europe.',
          'It was mostly argued by **philosophers using examples**, not by scientific experiments.',
          '**Bertin (1983)** classified all graphic marks by how they show data, but mostly from his own **expert judgment**, not from perception studies.',
          'People say visual languages are easy, but some diagrams take **almost as long to learn** as reading and writing.',
          'If pictures were only learned conventions, there could be **no scientific rules** for better pictures.',
        ],
      },
      {
        heading: '2. Pictures as Sensory Languages',
        bullets: [
          'Scientists have studied whether pictures are **pure convention** or have **natural, perceptual** meaning.',
          'There is a long debate: one side says pictures are **as arbitrary as words**; the other says pictures **look like** what they show.',
          'This matters: if even realistic pictures are not natural, we **cannot say** one diagram is perceptually better than another.',
        ],
      },
      {
        heading: '3. Sensory versus Arbitrary Symbols',
        subGroups: [
          {
            sideHeading: 'Sensory Symbols',
            bullets: [
              'Work by using the brain’s **natural seeing ability**, **without learning**.',
              'They match the **early stages** of how the brain processes images.',
              'They are **the same across people, cultures and time**.',
            ],
            example: 'A cave drawing of a hunt is still understood after thousands of years.',
          },
          {
            sideHeading: 'Arbitrary Symbols',
            bullets: [
              'Must be **learned**, because they have **no natural link** to what they mean.',
              'Get their power from **culture**, so they differ between cultures.',
            ],
            example: 'The written word "dog" looks nothing like a dog.',
          },
          {
            sideHeading: 'Real Graphics Are a Mix',
            description:
              'Almost no graphical language is **fully arbitrary** or **fully sensory**, but the difference is still important.',
          },
        ],
        table: {
          caption: 'Sensory vs Arbitrary Symbols',
          headers: ['Point', 'Sensory', 'Arbitrary'],
          rows: [
            ['Needs learning?', 'No', 'Yes'],
            ['Based on', 'How the brain naturally sees', 'Cultural agreement'],
            ['Same everywhere?', 'Yes — across people, cultures, time', 'No — depends on culture'],
            ['Example', 'Cave drawing of a hunt', 'The word "dog"'],
          ],
        },
      },
    ],
    keyTakeaway:
      'Contrast the **convention view** (Peirce, Saussure, Bertin) with the **perception view**, then define **sensory** (natural, no learning, universal) vs **arbitrary** (learned, cultural) with the **cave drawing** and **"dog"** examples.',
    selfCheck: {
      question: 'Why are sensory symbols understood the same across cultures?',
      answer: 'They use the brain’s natural way of seeing and need no learning, so culture does not change their meaning.',
    },
  },
  {
    id: 'u2-gibson-affordance-theory',
    shortTitle: 'Gibson’s Affordance Theory',
    unit: 'unit2',
    order: 7,
    title: '2.7 Gibson’s Affordance Theory',
    subtopicsCovered: [
      'Ecological Optics & Direct Perception',
      'Affordances',
      'Top-Down vs Atomistic Approach',
      'Affordances in Interface Design',
      'Three Problems with Direct Perception',
    ],
    summaryLine:
      '**J.J. Gibson** said we see things in order to **act** on them. An **affordance** is a **possibility for action** that we see directly — like a handle that "says" pull me.',
    bullets: [
      'Gibson changed perception theory with **ecological optics**, **affordances** and **direct perception**.',
      { label: 'Perception Is for Action', text: 'We see the world so that we can **do things** in it.' },
      { label: 'Affordance', text: 'A **possibility for action** that we can see — a chair affords sitting, a handle affords pulling.' },
      { label: 'Direct', text: 'We see affordances **directly and instantly**, without reasoning.' },
      'This suits visualization, because the goal of most visualization is **making decisions** (acting).',
    ],
    subSections: [
      {
        heading: 'Gibson vs Earlier Theorists',
        subGroups: [
          {
            sideHeading: 'Old Bottom-Up View',
            description:
              'Earlier theorists started from **single points of light**, then pairs, slowly building up to the whole visual world — like building a wall brick by brick.',
          },
          {
            sideHeading: 'Gibson’s Top-Down View',
            bullets: [
              'We do not see points of light; we see **possibilities for action**.',
              'We see **surfaces to walk on, handles to pull, space to move through, tools to use**.',
              { label: 'Warren (1984) Experiment', text: 'People correctly judged whether stairs were **"climbable"**, and their judgment depended on their **own leg length**.' },
              'We see affordances **directly**, not by piecing together clues.',
            ],
          },
          {
            sideHeading: 'Resonating',
            description:
              'Gibson said the visual system is **tuned** to the world and **"resonates"** with it, seeing it correctly except in unusual situations.',
          },
        ],
      },
      {
        heading: 'Affordances in Interface Design',
        bullets: [
          { label: 'Design Rule', text: 'A good interface should have **clear affordances** that make the user’s task easy.' },
          'If a task is moving an object in 3D, it should have **visible handles** to rotate and lift it.',
          { label: 'Houde (1992) Example', text: 'When an object is selected, **handles** appear, with pictures of **gripping hands** showing how to lift or rotate it.' },
        ],
      },
      {
        heading: 'Three Problems with Gibson’s Theory for Visualization',
        bullets: [
          {
            label: '1. Visualization Is Indirect',
            text: 'Between the data and the picture there are **many processing steps**. Data may be tiny, invisible or abstract (like stock prices), so "direct perception" does not apply.',
          },
          {
            label: '2. Screens Have No Real Affordances',
            text: 'A screen button does not "afford" pressing the way a floor affords walking. We **learn** that buttons do things, and clicking a picture of a button with a mouse is even more indirect.',
          },
          {
            label: '3. Ignores How Vision Works Inside',
            text: 'Gibson ignored the **brain’s mechanisms**, but much of what we know (like how colour TV works) comes from studying them.',
          },
        ],
      },
    ],
    keyTakeaway:
      'Define **affordance** (possibility for action), give **Warren’s stairs** and **Houde’s handles**, state the design rule, and list the **three problems**: visualization is indirect, screens have no real affordances, Gibson ignored brain mechanisms.',
    selfCheck: {
      question: 'What did Warren’s 1984 stair experiment show?',
      answer: 'People could correctly judge whether stairs were climbable, and the judgment depended on their own leg length — they directly saw a possibility for action.',
    },
  },
  {
    id: 'u2-model-perceptual-processing',
    shortTitle: 'Model of Perceptual Processing',
    unit: 'unit2',
    order: 8,
    title: '2.8 A Model of Perceptual Processing',
    subtopicsCovered: [
      'Three-Stage Model Overview',
      'Stage 1: Parallel Processing of Low-Level Properties',
      'Stage 2: Pattern Perception',
      'Stage 3: Sequential Goal-Directed Processing',
    ],
    summaryLine:
      'We see in **three stages**: (1) the brain grabs **basic features** everywhere at once, (2) it groups them into **patterns**, (3) we focus on **a few objects** to answer a question.',
    bullets: [
      { label: 'Stage 1', text: 'Basic features (colour, edges, movement) are picked up **everywhere at the same time**.' },
      { label: 'Stage 2', text: 'Features are grouped into **patterns and regions** (same colour, same texture, continuous lines).' },
      { label: 'Stage 3', text: 'Attention keeps **only a few objects** in short-term visual memory to answer what we are looking for.' },
    ],
    subSections: [
      {
        heading: 'Stage 1: Parallel Processing to Extract Low-Level Properties',
        bullets: [
          'Done by huge numbers of **neurons in the eye and the back of the brain**.',
          'Each neuron reacts to one kind of thing — an **edge at an angle** or a **patch of colour**.',
          '**Billions** of neurons work **at the same time** over the whole view.',
          'It happens **automatically**, whether we want it or not, and it is **very fast**.',
          'Design lesson: show important information so these **fast automatic systems** can spot it.',
        ],
        example: 'One red dot among many blue dots "pops out" instantly.',
        subGroups: [
          {
            sideHeading: 'Key Characteristics',
            bullets: [
              '**Fast** and **parallel** (everything at once).',
              'Extracts **orientation, colour, texture, movement**.',
              'Information lasts only **a moment** in a short **iconic store** (visual buffer).',
              '**Bottom-up**, driven by what is in front of the eyes, not by what we want.',
            ],
          },
        ],
      },
      {
        heading: 'Stage 2: Pattern Perception',
        bullets: [
          'The view is divided into **regions and simple patterns** — continuous lines, same-colour areas, same-texture areas.',
        ],
        subGroups: [
          {
            sideHeading: 'Key Characteristics',
            bullets: [
              '**Slower** and **one at a time** (serial).',
              'Uses **working memory** (short-term) and **long-term memory**.',
              'More use of **learned (arbitrary)** symbol meanings.',
              'A **mix** of bottom-up (what we see) and **top-down** (what we are looking for).',
              'Separate brain paths for **recognizing objects** and **guiding movement**.',
            ],
          },
        ],
      },
      {
        heading: 'Stage 3: Sequential Goal-Directed Processing',
        bullets: [
          'Only a **few objects** are held in **visual working memory** by active attention.',
          'We ask a series of **visual questions** and answer them by **searching** the picture.',
          {
            label: 'Example',
            text: 'Finding a route on a road map: we search for **connected red lines** (highways) between two **city symbols**.',
          },
        ],
        diagramId: 'dvt-perception-three-stage',
        diagramCaption: 'Three-stage model: parallel features → patterns → goal-directed objects.',
      },
    ],
    table: {
      caption: 'Stage Comparison',
      headers: ['Stage', 'Speed', 'Driven by', 'Memory used'],
      rows: [
        ['1. Features', 'Fast, all at once', 'What is seen (bottom-up)', 'Iconic store (a moment)'],
        ['2. Patterns', 'Slower, one by one', 'Both seen + wanted', 'Working + long-term memory'],
        ['3. Goal-directed', 'Step by step', 'Our questions (attention)', 'Visual working memory (few objects)'],
      ],
    },
    keyTakeaway:
      'Draw the **3-stage figure** and write characteristics: Stage 1 **parallel, features, iconic store, bottom-up**; Stage 2 **serial, working + long-term memory, bottom-up + top-down**; Stage 3 **visual queries, few objects**. Use the **road map** example.',
    selfCheck: {
      question: 'Which stage makes one red dot pop out among blue dots, and is it bottom-up or top-down?',
      answer: 'Stage 1 (parallel feature extraction), which is bottom-up.',
    },
  },
];
