import { LessonTopic } from '@/types/course';

export const UNIT1_TOPICS: LessonTopic[] = [
  {
    id: 'u1-basics',
    shortTitle: 'Basics of Visualization',
    unit: 'unit1',
    order: 1,
    title: '1.1 Basics of Visualization',
    subtopicsCovered: [
      'Definition of Visualization',
      'Visualization in Everyday Life',
      'Visualization in Employment',
      'Importance of Visualization',
      'Various Visual Representations',
      'Early Visualizations (Cave Painting, Mesopotamia)',
      'Visualization Today',
    ],
    summaryLine:
      '**Visualization** means showing information as a **picture** (chart, map, diagram) instead of only text or numbers, so people understand it faster.',
    bullets: [
      {
        label: 'Definition',
        text: 'Visualization is the **communication of information using graphical representations**. In simple words, we turn data into a picture so that people can understand it quickly.',
        example: 'Instead of reading 365 temperature values, you look at one line graph and instantly see that summer is hotter.',
      },
      {
        label: 'Older Than Writing',
        text: 'Humans used **pictures to communicate** long before written language was invented.',
      },
      {
        label: 'One Picture = Lots of Information',
        text: 'A single picture can hold a lot of information and can be understood **much faster** than a full page of text with the same information.',
      },
      {
        label: 'Why Pictures Are Faster',
        text: 'Our eyes and brain read an image **in parallel** (many parts at the same time), but we read text **sequentially** (one word after another). That is why pictures are understood faster.',
      },
    ],
    subSections: [
      {
        heading: 'Visualization in Everyday Life',
        description:
          'We see visualizations every day, often without noticing them.',
        bullets: [
          'A **table in a newspaper** that shows the numbers discussed in an article.',
          'A **train or subway map with timings**, used to find arrival and departure times.',
          'A **map of a region**, used to choose a route to a new place.',
          'A **weather chart** showing a storm moving, which may affect your weekend plans.',
          'A **stock market graph** showing whether the economy is going up or down.',
          'A **plot comparing medicines**, for example your painkiller vs the leading brand.',
          'A **bicycle assembly manual**, which shows a separate picture for each part as it is added.',
          'A **highway sign** that shows a curve, merging lanes, or an intersection ahead.',
        ],
      },
      {
        heading: 'Visualization in Areas of Employment',
        description: 'Many jobs use visualization every day.',
        bullets: [
          'Results of a **financial and stock market analysis**.',
          'Design and analysis of a **rotary bridge** in mechanical and civil engineering.',
          'A **breast cancer MRI** scan used by doctors for diagnosis and treatment.',
          '**Comet path** data and trend analysis in astronomy.',
          'Analysis of **smoking behaviour** in a population.',
          'Study of **actuarial data** (insurance and risk data) to guide number-based analysis.',
          '**Simulation** of a complex process, and analysis of a simulated physical system.',
          'A picture of **Facebook friends and how they are connected**.',
          '**Marketing posters and advertisements**.',
        ],
      },
      {
        heading: 'Importance of Visualization',
        bullets: [
          {
            label: 'We Are Visual Beings',
            text: 'Sight is one of our **main senses** for understanding information, so information shown as a picture is easy to grasp.',
          },
          {
            label: 'Helps in Decision Making',
            text: 'The textbook gives two examples to show this. One is about **data distortion** and the other is about **human interpretation**.',
            children: [
              {
                label: 'Data Distortion',
                text: 'If a chart is drawn badly (for example, with a misleading scale), it **distorts the data** and can lead to a wrong decision.',
              },
              {
                label: 'Human Interpretation',
                text: 'Different people may **read the same picture differently** depending on their preferences and training.',
              },
            ],
          },
        ],
      },
      {
        heading: '1.4 Various Visual Representations',
        bullets: [
          {
            label: 'Organizational Chart',
            text: 'An org chart shows **who reports to whom** in a company. Just by looking, you can see that Marketing has the most consultants and the Driver has the longest chain of command (most bosses above him).',
          },
          {
            label: 'Data Is Everywhere Now',
            text: 'The flood of data, its **democratization** (data being available to everyone) and the web have made both **static** (fixed) and **interactive** (clickable) visualizations more common and easier to understand.',
          },
          {
            label: 'Explaining Big Results',
            text: 'Analysis of large marketing, financial, security, medical and biological data produces results that must be **explained**, and pictures explain them best.',
          },
        ],
      },
      {
        heading: 'Early Visualizations',
        bullets: [
          {
            label: 'First Technique',
            text: 'The first way of recording information as pictures was used by **early man** (cave paintings).',
          },
          {
            label: 'Chauvet Cave',
            text: 'The **Chauvet-Pont-d’Arc Cave** in southern France has **over 250 paintings** made about **30,000 years ago**.',
          },
          {
            label: 'Purpose',
            text: 'These paintings were most likely meant to **pass on information** to future generations.',
          },
          {
            label: 'Mesopotamia Graphics',
            text: 'Ancient **Mesopotamia** also recorded information using drawings and symbols on clay tablets.',
          },
        ],
      },
      {
        heading: 'Visualization Today',
        bullets: [
          {
            label: 'Two Kinds of Views',
            text: 'Modern visualizations give both **qualitative** views (what kind / describing) and **quantitative** views (how much / numbers).',
          },
          {
            label: 'Tokyo Subway Map',
            text: 'It is easy to read but **logically distorted**. This means it does not show real distances; it straightens the lines so passengers can easily see which line goes where.',
          },
          {
            label: 'Same Idea Elsewhere',
            text: 'The same trick is used for other **transport maps** and for **process flow diagrams**.',
          },
          {
            label: 'Google Maps',
            text: 'A modern **interactive** visualization where you can zoom, move around and switch views.',
          },
        ],
      },
    ],
    keyTakeaway:
      'Write the definition (**communication of information using graphical representations**), give the reason (**parallel** picture reading vs **sequential** text reading), then add examples from daily life, jobs, history (Chauvet Cave) and today (Tokyo subway map, Google Maps).',
    selfCheck: {
      question: 'Why is a picture understood faster than a page of text?',
      answer:
        'The brain looks at many parts of a picture at the same time (parallel), but text must be read one word after another (sequential).',
    },
  },
  {
    id: 'u1-relationship-other-fields',
    shortTitle: 'Relationship with Other Fields',
    unit: 'unit1',
    order: 2,
    title: '1.2 Relationship between Visualization and Other Fields',
    subtopicsCovered: [
      'Data Science and Analytics',
      'Computer Science and Information Technology',
      'Design and User Experience (UX)',
      'Visualization vs Computer Graphics',
      'Scientific Visualization vs Information Visualization',
    ],
    summaryLine:
      'Visualization is **multidisciplinary** (it borrows from many subjects) — data science, computer science, design, psychology, statistics — and it uses **computer graphics** as its drawing tool.',
    bullets: [
      'Visualization is a **multidisciplinary** field. This means it takes ideas from many other fields and also gives back to them.',
    ],
    subSections: [
      {
        heading: 'Key Relationships with Other Fields',
        subGroups: [
          {
            sideHeading: '1. Data Science and Analytics',
            bullets: [
              'Visualization helps data scientists **understand and explain** complex patterns hidden in data.',
              'It helps them spot **trends** (general direction), **outliers** (odd values) and **correlations** (two things changing together), and present findings to both technical and non-technical people.',
            ],
          },
          {
            sideHeading: '2. Computer Science and Information Technology',
            bullets: [
              'We need **algorithms and software** to create interactive visualizations, so computer science is closely linked.',
              '**Computer graphics**, **image processing** and **human-computer interaction (HCI)** — how people use computers — all contribute techniques to visualization.',
            ],
          },
          {
            sideHeading: '3. Design and User Experience (UX)',
            bullets: [
              'Good visualizations need **design principles** so they are both effective and nice to look at.',
              'Designers build **easy-to-use interfaces** so that information is user-friendly and accessible.',
            ],
          },
        ],
      },
      {
        heading: 'Difference between Visualization and Computer Graphics',
        subGroups: [
          {
            sideHeading: 'Started as a Part of Graphics',
            bullets: [
              'Visualization was first treated as a **subfield of computer graphics**, because it also draws images.',
              'In visualization, graphics is simply the **medium** (the means) used to communicate.',
            ],
          },
          {
            sideHeading: 'The Key Difference: Data',
            bullets: [
              'Both use the same **graphics primitives** — the basic building blocks: **points, lines, areas and volumes**.',
              'Computer graphics cares about the **shapes themselves**. Visualization goes one step further: every shape is **driven by data** (positions, populations, measurements).',
              {
                label: 'Definition',
                text: 'Visualization = **mapping data to graphical primitives** (deciding which data value becomes which shape, size or colour) + **rendering** (drawing it on screen).',
              },
            ],
          },
          {
            sideHeading: 'Visualization Is More Than Graphics',
            bullets: [
              'It also uses **HCI, perceptual psychology** (how humans see), **databases, statistics and data mining**.',
              'Graphics only draws the picture; visualization also cares about **where the data comes from** and **how users see and interact** with it.',
            ],
          },
          {
            sideHeading: 'Different Goals',
            bullets: [
              {
                label: 'Computer Graphics',
                text: 'Aims for **visual realism** — making 3D objects look real. Used in **games, cartoons, ads and movie effects**.',
              },
              {
                label: 'Visualization',
                text: 'Aims for **clear communication**, not realism. It often shows things you **cannot normally see**, like stress inside a metal part or air flowing around a wing.',
              },
              'They share tools and ideas, but **what they show** and **why they show it** are different.',
            ],
          },
          {
            sideHeading: 'Graphics Is the Toolbox of Visualization',
            bullets: [
              'Computer graphics provides the **tools** that draw visualizations.',
              {
                label: 'Tools Include',
                text: 'Graphics languages (**OpenGL, DirectX, Processing, Java3D**), graphics cards (**NVidia, ATI/AMD**), rendering styles (**flat, Gouraud, Phong, ray tracing, radiosity**) and file formats (**JPEG, TIFF, AVI, MPEG**).',
              },
            ],
          },
        ],
        table: {
          caption: 'Computer Graphics vs Visualization',
          headers: ['Point', 'Computer Graphics', 'Visualization'],
          rows: [
            ['Focus', 'The shapes themselves', 'The data behind the shapes'],
            ['Goal', 'Look real (realism)', 'Be understood (communication)'],
            ['Typical output', '3D scenes, games, films', 'Charts, maps, plots, flow pictures'],
            ['Shows', 'Objects as they look', 'Often invisible things (stress, flow)'],
            ['Role', 'Provides the drawing tools', 'Uses those tools to explain data'],
          ],
        },
      },
      {
        heading: 'Scientific Visualization vs Information Visualization',
        bullets: [
          {
            label: 'Old Split',
            text: 'In the 1990s–2000s people split the field into **scientific visualization** (data with a real physical location, like MRI or weather) and **information visualization** (abstract data, like sales or social networks).',
          },
          {
            label: 'Textbook’s View',
            text: 'The textbook **does not separate them**, because both are just **pictures of data**. Only the kind of data set differs.',
          },
          {
            label: 'Example: Chemistry',
            text: 'Molecules were first drawn as **stick-and-ball** models, then **spheres with rods**, then **realistic** models, and today also with **scatterplots** — so both types now mix.',
          },
        ],
      },
    ],
    keyTakeaway:
      'For "Visualization vs Graphics": graphics = **realism + drawing tools**; visualization = **data → shapes → drawing** for **understanding**. Then list the related fields (data science, CS/IT, UX, HCI, psychology, statistics).',
    selfCheck: {
      question: 'Give the one-line definition of visualization in terms of graphics.',
      answer:
        'Visualization is the use of graphics to display data by mapping data to graphical primitives and rendering the display.',
    },
  },
  {
    id: 'u1-visualization-process',
    shortTitle: 'The Visualization Process',
    unit: 'unit1',
    order: 3,
    title: '1.3 The Visualization Process',
    subtopicsCovered: [
      'Mapping Data to the Display',
      'Visualization as Part of a Larger Process',
      'What Is a Pipeline',
      'Computer Graphics Pipeline',
      'The Visualization Pipeline',
      'The Knowledge Discovery Pipeline',
    ],
    summaryLine:
      'To visualize data we decide **how each data value becomes something on screen** (a mapping). The steps from data to picture are called a **pipeline**; there are three pipelines, and all start with **data** and end with the **user**.',
    bullets: [
      {
        label: 'Mapping',
        text: 'We must decide **how data turns into a picture** — this rule is called a **mapping**. There are many possible mappings for the same data.',
      },
      {
        label: 'Data → Shapes and Their Properties',
        text: 'Data values decide the **shapes** (points, lines) and their **properties** (size, position, angle, colour).',
        example:
          'For the list 5, 2, 8, 4: plot each number as a dot’s height (dot plot), as a bar’s height (bar chart), or as a square’s colour (colour strip). Same data, three pictures.',
      },
      {
        label: 'User Interface',
        text: 'The screen controls let users **enter, view, monitor, analyze and compute** data, usually through dialog boxes or by clicking on the picture itself.',
      },
      {
        label: 'Part of a Bigger Job',
        text: 'Visualization is usually one part of a larger task like **exploring data**, **knowledge discovery** (finding useful facts in data) or **visual analytics**. The data often has to be **cleaned** first.',
      },
      {
        label: 'What It Helps Find',
        text: 'It helps us discover **structures, patterns, anomalies** (odd values), **trends and relationships** in data.',
      },
      {
        label: 'Pipeline',
        text: 'A **pipeline** is a fixed **sequence of steps** that turns data into a picture or a model, like an assembly line. Each step can be studied on its own.',
      },
    ],
    subSections: [
      {
        heading: 'Computer Graphics Pipeline',
        description: 'This pipeline turns a **3D model** of objects into a **2D image** on screen.',
        subGroups: [
          {
            sideHeading: '1. Modeling',
            description:
              'Build the 3D object out of flat **polygons** (small flat faces) defined by **vertices** (corner points), all placed in one common **world coordinate system**.',
          },
          {
            sideHeading: '2. Viewing',
            bullets: [
              'Place a **virtual camera** in the scene with a position, direction and orientation.',
              'Convert every corner point so it is described **relative to the camera** (viewing coordinates).',
            ],
          },
          {
            sideHeading: '3. Clipping',
            bullets: [
              'Decide the **edges of the picture**. Objects completely outside are **removed**; objects partly outside are **cut** at the edge.',
              'Clipping can be done at many stages, often after converting to simpler **normalized coordinates**.',
            ],
          },
          {
            sideHeading: '4. Hidden Surface Removal',
            bullets: [
              'Remove faces that **point away from the camera** or are **hidden behind** other objects.',
              'This is often done together with projection.',
            ],
          },
          {
            sideHeading: '5. Projection',
            bullets: [
              'Flatten the 3D scene onto a **2D plane**, usually with **perspective** (far things look smaller).',
              'The result is in 2D coordinates or **screen (pixel) coordinates**.',
            ],
          },
          {
            sideHeading: '6. Rendering',
            bullets: [
              'Decide the **colour of each pixel** using the object’s **material** (colour, texture, shininess), the **lights** (position, colour, brightness), **shadows** and **light reflected** from nearby objects.',
              'It is heavy work, so it is usually done **together with projection**.',
            ],
          },
        ],
      },
      {
        heading: 'The Visualization Pipeline',
        description:
          'This is like the graphics pipeline, but it starts with **data** (numbers, tables) instead of a 3D model.',
        subGroups: [
          {
            sideHeading: '1. Data Modeling',
            description:
              'Organize the data so it is ready to draw. For every column we must know its **name, type, range and meaning**, stored so it can be read and changed quickly.',
            example: 'Column "Temperature": type = number, range = −10 to 45, meaning = °C at noon.',
          },
          {
            sideHeading: '2. Data Selection',
            description:
              'Choose **which part of the data** to show — like clipping in graphics. The user can choose, or the computer can choose automatically (for example, one time slice at a time).',
          },
          {
            sideHeading: '3. Data to Visual Mappings',
            description:
              'The **heart (most important step)** of the pipeline. Each data value is turned into a **visual property** — size, position or colour of a shape. The data may first be scaled or filtered.',
            example: 'Population → circle size, latitude/longitude → circle position, income → circle colour.',
          },
          {
            sideHeading: '4. Scene Parameter Setting (View Transformations)',
            description:
              'Set things that **do not depend on the data**: the **colour map** (which colours to use), a **sound map** (if sound is used) and **lighting** (for 3D).',
            example: 'Choosing blue-to-red for cold-to-hot in a weather map.',
          },
          {
            sideHeading: '5. Rendering or Generation of the Visualization',
            description:
              'Draw the final picture and add helpers that make it readable: **axes, keys (legends) and labels**.',
          },
        ],
      },
      {
        heading: 'The Knowledge Discovery Pipeline',
        description:
          '**Knowledge discovery** (also called **data mining**) means finding useful facts hidden in data. Its goal is to produce a **model** (a rule or pattern), not just a picture.',
        subGroups: [
          {
            sideHeading: '1. Data',
            bullets: [
              'This pipeline spends **much more effort on the data itself**.',
              'The graphics and visualization pipelines **assume the data is already clean and organized**. Knowledge discovery does **not** assume this, because real data is usually messy.',
            ],
            example: 'A visualization tool expects a neat table; a data-mining project often starts with scattered Excel files, logs and database dumps.',
          },
          {
            sideHeading: '2. Data Integration, Cleaning, Warehousing and Selection',
            bullets: [
              { label: 'Integration', text: '**Combine** data from different sources into one place.' },
              { label: 'Cleaning', text: '**Fix or remove** wrong, missing or duplicate values.' },
              { label: 'Warehousing', text: '**Store** the combined data in one large organized storage (a data warehouse).' },
              { label: 'Selection', text: '**Pick** only the data needed for the analysis, using filtering, sampling, subsetting or aggregating. The user can help here.' },
            ],
          },
          {
            sideHeading: '3. Data Mining',
            description:
              'The **heart** of this pipeline. Algorithms **analyze the data and produce a model** — a rule or pattern that describes the data.',
            example: 'A supermarket finds the rule "people who buy bread often buy butter".',
          },
          {
            sideHeading: '4. Pattern Evaluation',
            description:
              'Check whether the model is **good**: is it **robust** (works on new data), **stable** (does not change wildly), **precise** and **accurate**?',
          },
          {
            sideHeading: '5. Rendering or Visualization',
            description:
              'Show the results to the user as a picture. Whatever pipeline we call it, the user must finally **see** the result.',
          },
          {
            sideHeading: 'Computational Steering',
            description:
              'Interactive visualization can be used at **every step** of this pipeline. The user looks at pictures along the way and **steers** (adjusts) the computation, like steering a car by watching the road.',
          },
        ],
        diagramId: 'dvt-three-pipelines',
        diagramCaption:
          'The three pipelines side by side — each starts with **data** and ends with the **user**.',
      },
    ],
    table: {
      caption: 'Three Pipelines Compared',
      headers: ['Point', 'Graphics', 'Visualization', 'Knowledge Discovery'],
      rows: [
        ['Starts with', '3D model', 'Organized data', 'Raw, messy data'],
        ['Heart (key step)', 'Projection & rendering', 'Data-to-visual mapping', 'Data mining'],
        ['"Choose what to show" step', 'Clipping', 'Data selection', 'Integration, cleaning, selection'],
        ['Output', 'Realistic image', 'Informative picture', 'A model (+ its picture)'],
      ],
    },
    keyTakeaway:
      'Learn the three pipelines in order: **Graphics** (Modeling → Viewing → Clipping → Hidden Surface Removal → Projection → Rendering), **Visualization** (Data Modeling → Data Selection → Data-to-Visual Mapping → Scene Parameters → Rendering), **KD** (Data → Integration/Cleaning/Warehousing/Selection → Data Mining → Pattern Evaluation → Visualization). Using visualization at every KD step = **computational steering**.',
    selfCheck: {
      question: 'Why does the knowledge discovery pipeline spend more effort on the data step than the visualization pipeline?',
      answer:
        'The visualization pipeline assumes the data is already clean and organized, but knowledge discovery usually starts with messy data from many sources that must be combined and cleaned first.',
    },
  },
  {
    id: 'u1-pseudocode-conventions',
    shortTitle: 'Pseudo-code Conventions',
    unit: 'unit1',
    order: 4,
    title: '1.4 Pseudo-code Conventions',
    subtopicsCovered: [
      'Global Variables (data, m, n)',
      'Normalize()',
      'Color() and MapColor()',
      'Circle() and Polyline()',
      'Geographic Functions',
      'Graph & 3D Surface Functions',
    ],
    summaryLine:
      '**Pseudo-code** is a simple, English-like way of writing an algorithm. The textbook assumes some **ready-made variables and functions** exist so its algorithms stay short.',
    bullets: [
      'The pseudo-code shows only the **main idea** of an algorithm and skips details like button clicks, graphics settings and file handling.',
      'To keep it short, the book assumes the following **global variables and functions** already exist.',
    ],
    subSections: [
      {
        heading: 'Global Variables',
        subGroups: [
          {
            sideHeading: '`data` — The Working Data Table',
            bullets: [
              'The table we are drawing. It is assumed to hold **only numbers**; any text columns must first be **converted to numbers**.',
              'If we only show part of the original table, `data` **is** that part.',
            ],
          },
          {
            sideHeading: '`m` — Number of Dimensions (Columns)',
            description: 'How many **columns** the table has. We loop over columns using the index **j**.',
          },
          {
            sideHeading: '`n` — Number of Records (Rows)',
            description: 'How many **rows** the table has. We loop over rows using the index **i**.',
            example: 'A table of 100 students with 5 subjects: n = 100 (rows), m = 5 (columns).',
          },
        ],
      },
      {
        heading: 'Global Functions',
        subGroups: [
          {
            sideHeading: '`Normalize(record, dimension)` / `Normalize(record, dimension, min, max)`',
            bullets: [
              'Converts a value into the range **min to max**, or **0 to 1** if min and max are not given. This puts all columns on the same scale.',
              'Usually **linear** (straight-line scaling) and done **per column**.',
              'Other kinds are possible, like **log** or **square root**. It can use the bounds of the **current column**, **all columns**, or **only the columns being shown**.',
              {
                label: 'Mixed Normalization',
                text: 'One picture may need different kinds on different axes.',
                example: 'A scatter plot with normal (linear) scaling on x and log scaling on y.',
              },
            ],
            formulas: [
              {
                label: 'Linear Normalization',
                tex: "v' = \\text{min} + \\dfrac{v - v_{\\min}}{v_{\\max} - v_{\\min}}\\,(\\text{max} - \\text{min})",
                note: 'Example: values 20, 50, 80 into [0, 1] → 50 becomes (50 − 20)/(80 − 20) = **0.5**.',
              },
            ],
          },
          {
            sideHeading: '`Color(color)`',
            description:
              'Sets the **current drawing colour** (given as an RGB number). Everything drawn after this uses that colour.',
          },
          {
            sideHeading: '`MapColor(record, dimension)`',
            description:
              'Picks a colour **automatically from the data value**, using the global **colour map** (a lookup from values to colours).',
            example: 'Low value → blue, high value → red.',
          },
          {
            sideHeading: '`Circle(x, y, radius)`',
            bullets: [
              'Draws a **filled circle** at (x, y) with the given radius, in the current colour.',
              'All drawing happens in a **unit square** (0 to 1 on both axes), which is then scaled to **screen pixels**.',
            ],
          },
          {
            sideHeading: '`Polyline(xs, ys)`',
            description:
              'Draws a **polyline** — several straight line segments joined end to end — from arrays of x and y values.',
          },
        ],
      },
      {
        heading: 'Functions for Geographic (Map) Visualizations',
        bullets: [
          {
            label: '`GetLatitudes(record)`, `GetLongitudes(record)`',
            text: 'Return the **latitude and longitude** points of a region’s outline (for example, a country’s border).',
          },
          {
            label: '`ProjectLatitudes(lats, scale)`, `ProjectLongitudes(longs, scale)`',
            text: 'Convert latitudes into **y values** and longitudes into **x values**, so the map can be drawn on a flat screen.',
          },
        ],
      },
      {
        heading: 'Functions for Graph and 3D Surface Data Sets',
        bullets: [
          {
            label: '`GetConnections(record)`',
            text: 'Returns the list of records that this record is **connected to** (like friends in a network).',
          },
          'All arrays start at **index 0**.',
        ],
      },
    ],
    keyTakeaway:
      'List the **variables** (`data` = numeric table, `n` = rows with index i, `m` = columns with index j) and the **functions** (`Normalize`, `Color`, `MapColor`, `Circle`, `Polyline`, map functions, `GetConnections`). Mention the **unit square** and that arrays start at **0**.',
    selfCheck: {
      question: 'What does Normalize(record, dimension) return if min and max are not given?',
      answer: 'A value between 0 and 1, usually using straight-line (linear) scaling based on that column’s smallest and largest values.',
    },
  },
  {
    id: 'u1-scatter-plot',
    shortTitle: 'The Scatter Plot',
    unit: 'unit1',
    order: 5,
    title: '1.5 The Scatter Plot',
    subtopicsCovered: [
      'Definition (Cartesian Coordinates)',
      'Uses of Scatter Plots',
      'Independent vs Dependent Axis',
      'Types of Relationships',
      'Scatter Plot Pseudo-code (6 Steps)',
    ],
    summaryLine:
      'A **scatter plot** puts one **dot per item** on an x–y graph, using two numeric values, so you can see how the two values are **related**.',
    bullets: [
      {
        label: 'Origin',
        text: 'One of the **oldest and most used** visualizations. It is based on the **Cartesian coordinate system** (the normal x-axis and y-axis graph).',
      },
      {
        label: 'Definition',
        text: 'Each item becomes a **dot**. Its left–right position shows one value and its up–down position shows another.',
        example: 'Each dot is a tree: x = trunk diameter, y = tree height.',
      },
      {
        label: 'Main Use',
        text: 'To see the **relationship between two numeric variables** — both single values and the overall pattern.',
      },
      {
        label: 'Prediction (Correlation)',
        text: 'It answers: if I know the x value, what is a good guess for y?',
      },
      {
        label: 'Which Axis Is Which',
        text: 'The x-axis usually holds the **independent variable** (the cause). The y-axis holds the **dependent variable** (the effect).',
      },
      {
        label: 'Types of Relationship',
        text: 'A relationship can be **positive or negative**, **strong or weak**, and **linear or nonlinear**.',
        children: [
          { label: 'Positive', text: 'Both go up together (dots rise left to right).' },
          { label: 'Negative', text: 'One goes up while the other goes down (dots fall left to right).' },
          { label: 'Strong / Weak', text: 'Dots lie close to a line (strong) or are widely spread (weak).' },
          { label: 'Linear / Nonlinear', text: 'Dots follow a straight line (linear) or a curve (nonlinear).' },
        ],
      },
    ],
    subSections: [
      {
        heading: 'Scatter Plot Pseudo-code',
        bullets: [
          'Each record is drawn as a **circle**. Its **position, colour and size** all come from the data, so one plot can show **four columns** at once.',
          '**xDim** and **yDim** give the x and y columns, **cDim** gives the colour column, **rDim** gives the size column, and **rMin**/**rMax** are the smallest and largest allowed radius.',
        ],
        subGroups: [
          {
            sideHeading: '`ScatterPlot(xDim, yDim, cDim, rDim, rMin, rMax)`',
            bullets: [
              { label: 'Step 1', text: '`for each record i` — go through every row one by one.' },
              { label: 'Step 2', text: '`x ← Normalize(i, xDim)` — turn the x-column value into a position between 0 and 1.' },
              { label: 'Step 3', text: '`y ← Normalize(i, yDim)` — do the same for the y position.' },
              { label: 'Step 4', text: '`r ← Normalize(i, rDim, rMin, rMax)` — turn the size-column value into a radius between rMin and rMax, so no circle is too tiny or too huge.' },
              { label: 'Step 5', text: '`MapColor(i, cDim)` — pick the circle’s colour from the colour-column value.' },
              { label: 'Step 6', text: '`Circle(x, y, r)` — draw the filled circle.' },
            ],
          },
        ],
        diagramId: 'dvt-scatter-plot',
        diagramCaption:
          'Tree diameter vs height: position from **xDim/yDim**, size from **rDim**, colour from **cDim**.',
      },
    ],
    walkthroughLinkId: 'scatterplot-render',
    keyTakeaway:
      'Write the **6-step pseudo-code** (Normalize x, Normalize y, Normalize r with rMin/rMax, MapColor, Circle) and the three ways to describe a relationship: **positive/negative, strong/weak, linear/nonlinear**.',
    selfCheck: {
      question: 'Why does the pseudo-code use rMin and rMax for the radius?',
      answer: 'So every circle stays visible and none becomes too large — the radius is kept between rMin and rMax.',
    },
  },
  {
    id: 'u1-types-of-data',
    shortTitle: 'Data Foundations & Types of Data',
    unit: 'unit1',
    order: 6,
    title: '1.6 Data Foundations & Types of Data',
    subtopicsCovered: [
      'Sources of Data (Raw vs Derived)',
      'Records and Variables',
      'Independent vs Dependent Variables',
      'Ordinal Data (Binary, Discrete, Continuous)',
      'Nominal Data (Categorical, Ranked, Arbitrary)',
      'Scale (Ordering, Distance, Absolute Zero)',
    ],
    summaryLine:
      'Every visualization starts with **data**: a table of **n rows (records)** and **m columns (variables)**. Each column is either **ordinal** (numbers) or **nominal** (non-numbers).',
    bullets: [
      {
        label: 'Start With Data',
        text: 'Before designing a picture, first **study what the data looks like**.',
      },
      {
        label: 'Where Data Comes From',
        text: 'From **sensors** or **surveys**, or created by **simulations** and **calculations**.',
      },
      {
        label: 'Raw vs Derived',
        text: '**Raw** data is untouched. **Derived** data is made from raw data by smoothing, removing noise, scaling or filling gaps.',
      },
    ],
    subSections: [
      {
        heading: 'Records and Variables',
        bullets: [
          'A data set is a list of **n records** (rows): $r_1, r_2, \\ldots, r_n$.',
          'Each record has **m variables** (columns): $v_1, v_2, \\ldots, v_m$.',
          'A value can be a single number, word or symbol, or something **more complex**.',
          {
            label: 'Independent Variable',
            text: 'A value that is **not affected** by other variables.',
            example: 'Time in a daily temperature record.',
          },
          {
            label: 'Dependent Variable',
            text: 'A value that **changes because of** other variables.',
            example: 'Temperature, which depends on date, time and place.',
          },
          'Often we **do not know** which variables are dependent or independent.',
        ],
        formulas: [
          {
            label: 'A Record Written Formally',
            tex: 'r_i = (iv_1, iv_2, \\ldots, iv_{m_i},\\; dv_1, dv_2, \\ldots, dv_{m_d}), \\qquad m = m_i + m_d',
            note: '$m_i$ = number of independent variables, $m_d$ = number of dependent variables. Total columns = independent + dependent.',
          },
        ],
      },
      {
        heading: 'Types of Data',
        description:
          'Each value is either **ordinal (numeric)** or **nominal (non-numeric)**. Careful: in this textbook, "ordinal" means **numbers**.',
        subGroups: [
          {
            sideHeading: '1. Ordinal — Numbers',
            bullets: [
              { label: 'Binary', text: 'Only **0 or 1**.', example: 'Pass = 1, Fail = 0.' },
              { label: 'Discrete', text: 'Only **whole numbers** or values from a fixed set.', example: 'Number of children; values from (2, 4, 6).' },
              { label: 'Continuous', text: 'Any **real number** (decimals allowed) in a range.', example: 'Height = 172.5 cm; any value in [0, 5].' },
            ],
          },
          {
            sideHeading: '2. Nominal — Not Numbers',
            bullets: [
              { label: 'Categorical', text: 'One value from a **short fixed list**.', example: 'Colour: red, blue, green.' },
              { label: 'Ranked', text: 'Categories that have a **natural order**.', example: 'Size: small, medium, large.' },
              { label: 'Arbitrary', text: 'Almost **unlimited** values with **no order**.', example: 'Home addresses, names.' },
            ],
          },
          {
            sideHeading: '3. Scale',
            description:
              'Another way to describe a variable, using three questions about what maths you can do with it.',
            bullets: [
              {
                label: 'Ordering Relation',
                text: 'Can the values be **put in order** (less than / greater than)? Yes for ranked and all numeric data.',
                example: 'small < medium < large.',
              },
              {
                label: 'Distance Metric',
                text: 'Can we **measure the gap** between two values? Yes for numbers, usually no for non-numbers.',
                example: '30°C − 20°C = 10°C makes sense; "blue − red" does not.',
              },
              {
                label: 'Existence of Absolute Zero',
                text: 'Is there a **true zero** (nothing at all)? Test: if **+, −, ×, ÷** all make sense, it has one.',
                example: 'Weight has a true zero (10 kg is twice 5 kg). Bank balance does not, because it can go negative.',
              },
            ],
          },
        ],
        table: {
          caption: 'Which Scale Properties Each Type Has',
          headers: ['Data Type', 'Ordering', 'Distance', 'Absolute Zero'],
          rows: [
            ['Nominal – Categorical (colour)', 'No', 'No', 'No'],
            ['Nominal – Ranked (S/M/L)', 'Yes', 'No', 'No'],
            ['Nominal – Arbitrary (address)', 'No', 'No', 'No'],
            ['Ordinal (bank balance)', 'Yes', 'Yes', 'No'],
            ['Ordinal (weight)', 'Yes', 'Yes', 'Yes'],
          ],
        },
      },
    ],
    keyTakeaway:
      'Draw the tree: **Ordinal (numbers)** → binary / discrete / continuous; **Nominal (non-numbers)** → categorical / ranked / arbitrary. Then **Scale** → ordering, distance, absolute zero. Write $m = m_i + m_d$.',
    selfCheck: {
      question: 'Why does weight have an absolute zero but bank balance does not?',
      answer:
        'Zero weight means no weight at all and all four operations make sense ("10 kg is twice 5 kg"); a bank balance can go below zero, so zero is not a true "nothing".',
    },
  },
  {
    id: 'u1-structure-within-between-records',
    shortTitle: 'Structure within & between Records',
    unit: 'unit1',
    order: 7,
    title: '1.7 Structure within and between Records',
    subtopicsCovered: [
      'Syntax vs Semantics',
      'Scalars, Vectors and Tensors',
      'Geometry and Grids',
      'Other Forms of Structure (Time)',
      'Examples of Structured Data',
    ],
    summaryLine:
      'Data has **structure**: how it is written (**syntax**) and how its parts relate (**semantics**). Examples are scalars/vectors/tensors, grids with coordinates, and timestamps.',
    bullets: [
      {
        label: 'Syntax',
        text: '**How** the data is written or stored (its format).',
      },
      {
        label: 'Semantics',
        text: '**What it means** — how values inside one record, and across records, are related.',
      },
    ],
    subSections: [
      {
        heading: 'Scalars, Vectors and Tensors',
        bullets: [
          'Scalars and vectors are simple cases of a general structure called a **tensor**.',
          'A tensor has a **rank** (how many index directions it has) and lives in a space of some **dimension** (2D, 3D…). It is stored as an array or matrix.',
          { label: 'Scalar (rank 0)', text: 'A **single number**.', example: 'Temperature = 30°C.' },
          { label: 'Vector (rank 1)', text: 'A **list of numbers** with direction.', example: 'Wind velocity (u, v, w) in 3D.' },
          { label: 'Rank 2', text: 'A **matrix**; in 3D it is a **3 × 3** grid of numbers.', example: 'Stress inside a material.' },
          {
            label: 'In a Record',
            text: 'A **transformation matrix** that defines a local coordinate system can be stored inside a record.',
          },
        ],
        formulas: [
          {
            label: 'Number of Values in a Tensor',
            tex: '\\text{values} = D^{M}',
            note: 'D = dimension of space, M = rank. In 3D: scalar = $3^0 = 1$, vector = $3^1 = 3$, matrix = $3^2 = 9$.',
          },
        ],
      },
      {
        heading: 'Geometry and Grids',
        bullets: [
          '**Scientific and engineering** data usually has a location (geometry) attached.',
          {
            label: 'Explicit Coordinates',
            text: 'The simplest way is to store the **location with each record**.',
            example: 'Each temperature sensor record also stores its latitude and longitude.',
          },
          'In **3D models**, the geometry (coordinates of every corner) is most of the data.',
          {
            label: 'Coordinate Systems',
            text: 'Grids can use **Cartesian** (x, y, z), **spherical** (angles + distance, like on Earth) or **hyperbolic** coordinates. The choice depends on the field and how data was collected.',
          },
          {
            label: 'Uniform vs Irregular',
            text: 'Points may be **evenly spaced** like graph paper, or **unevenly spaced** like weather stations across a country.',
          },
        ],
      },
      {
        heading: 'Other Forms of Structure — Time',
        bullets: [
          {
            label: 'Timestamp',
            text: 'A time value attached to a record. Time has the **widest range** of any attribute — from **picoseconds to millennia**.',
          },
          {
            label: 'Relative or Absolute',
            text: 'Relative: "5 seconds after start". Absolute: "18 Nov 2026, 10:00 AM".',
          },
          {
            label: 'Spacing',
            text: '**Uniform** (a reading every second) or **nonuniform** (shop transactions at random times).',
          },
        ],
      },
      {
        heading: 'Examples of Structured Data',
        table: {
          headers: ['Domain', 'Structure (in simple words)'],
          rows: [
            ['MRI (body scan)', 'One density value (scalar) at each 3D point on a 3D grid'],
            ['CFD (fluid simulation)', '3 movement values per point, 3 space + 1 time attribute, 3D grid (even or uneven)'],
            ['Financial', 'No location; many independent values (numbers and names) with a time attribute'],
            ['CAD (engineering design)', '3D points joined by edges and polygons, plus surface properties'],
            ['Remote Sensing (satellite)', 'Many channels, 2–3 space attributes, 1 time attribute, grid'],
            ['Census', 'All kinds of fields, addresses (space), time; records linked by similar values'],
            ['Social Network', 'People (nodes) with many fields, linked by friendship, place, time or group'],
          ],
        },
      },
    ],
    keyTakeaway:
      'Structure = **syntax (format) + semantics (meaning)**. Know **scalar = rank 0, vector = rank 1, rank M in D-space needs $D^M$ values**, the grid types, time, and the **7 examples** (MRI, CFD, Financial, CAD, Remote Sensing, Census, Social Network).',
    selfCheck: {
      question: 'How many values does a rank-2 tensor in 3D space need?',
      answer: '$D^M = 3^2 = 9$ values — a 3 × 3 matrix.',
    },
  },
  {
    id: 'u1-data-preprocessing',
    shortTitle: 'Data Preprocessing',
    unit: 'unit1',
    order: 8,
    title: '1.8 Data Preprocessing',
    subtopicsCovered: [
      'Why View Raw Data',
      'Metadata and Statistics',
      'Missing Values and Data Cleansing',
      'Normalization',
      'Segmentation',
      'Sampling and Subsetting',
      'Dimension Reduction',
      'Mapping Nominal Dimensions to Numbers',
      'Aggregation and Summarization',
      'Smoothing and Filtering',
      'Raster-to-Vector Conversion',
    ],
    summaryLine:
      '**Preprocessing** means preparing data before drawing it. Raw data is preferred, but sometimes we must clean, scale, group or simplify it first.',
    bullets: [
      {
        label: 'Raw Data Is Preferred',
        text: 'In fields like **medical imaging**, experts dislike changing data because changes may **lose important detail** or **create fake patterns**.',
      },
      {
        label: 'Raw Data Shows Problems',
        text: 'Looking at raw data reveals **missing values** and **outliers** (values that are way off, often from errors).',
      },
      'Still, depending on the data and the technique, some preprocessing is often **needed**.',
    ],
    subSections: [
      {
        heading: 'Common Methods for Preprocessing Data',
        subGroups: [
          {
            sideHeading: '1. Metadata and Statistics',
            bullets: [
              '**Metadata** = "**data about data**" — information describing the data set.',
              'It can tell us the **format** of fields, the **units** (metres, °C), the **reference point**, the **resolution**, and the **symbol used for missing values**.',
              '**Statistics** (average, min, max) also help choose and tune preprocessing.',
            ],
            example: 'Metadata says "−999 means missing", so we do not treat −999 as a real temperature.',
          },
          {
            sideHeading: '2. Missing Values and Data Cleansing',
            bullets: [
              'Real data often has **missing** or **wrong** entries.',
              { label: 'Why Values Go Missing', text: 'A broken sensor, a blank survey answer, or someone forgot to type it.' },
              { label: 'Wrong Values', text: 'Usually caused by **human error**, and hard to spot.' },
              'The analyst must pick a **strategy** — for example, drop the record, fill in the average, or estimate from neighbours.',
            ],
          },
          {
            sideHeading: '3. Normalization',
            bullets: [
              'Changing the data so it follows a **chosen rule**, usually putting everything on the **same scale**.',
              { label: 'Range Normalization', text: 'Squeeze all values into **0.0 to 1.0**.' },
              { label: 'Mean/Std Normalization', text: 'Shift and scale so every column has the **same average and spread**.' },
              'This lets us **compare** columns that use very different units.',
            ],
            example: 'Age (18–60) and salary (₹10,000–₹10,00,000) can be compared only after both are scaled to 0–1.',
            formulas: [
              {
                label: 'Min–Max Normalization to [0, 1]',
                tex: "x' = \\dfrac{x - x_{\\min}}{x_{\\max} - x_{\\min}}",
              },
              {
                label: 'Same Mean & Spread (z-score)',
                tex: "x' = \\dfrac{x - \\mu}{\\sigma}",
                note: '$\\mu$ = average of the column, $\\sigma$ = standard deviation (spread).',
              },
            ],
          },
          {
            sideHeading: '4. Segmentation',
            bullets: [
              'Splitting data into **regions**, where each region belongs to one **category**.',
              { label: 'Example', text: 'An MRI scan with 256 possible values is split into **bone, muscle, fat and skin**.' },
              'Simple method: give each **range of values** a category. But often a value could belong to **two categories**, so it is not always clear.',
            ],
          },
          {
            sideHeading: '5. Sampling and Subsetting',
            bullets: [
              'Changing data from one **resolution** (level of detail) to another.',
              { label: 'Example', text: 'Shrinking or enlarging an image, or filling in values between a few measured points.' },
              'We assume the data are **samples of something continuous**, so a missing spot can be guessed from its **nearest** known values.',
              'This guessing is called **interpolation**.',
            ],
            example: '20°C at 10 AM and 30°C at 12 PM → guess 25°C at 11 AM.',
          },
          {
            sideHeading: '6. Dimension Reduction',
            bullets: [
              'Used when the data has **too many columns** for the picture to show, while keeping as much information as possible.',
              { label: 'Manual', text: 'The user **picks** the most important columns.' },
              { label: 'Automatic', text: 'Methods like **PCA**, **MDS**, **Kohonen SOMs** and **LLE** combine many columns into 2 or 3.' },
            ],
            example: 'A 50-column data set is reduced to 2 columns so it fits on a scatter plot.',
          },
          {
            sideHeading: '7. Mapping Nominal Dimensions to Numbers',
            bullets: [
              'Text columns must be turned into **numbers** before drawing.',
              'The method depends on **how many** text columns there are, **how many different values** each has, and whether they have a **natural order**.',
              'Key rule: do **not create fake relationships** that are not in the data.',
            ],
            example: 'Red = 1, Green = 2, Blue = 3 wrongly suggests Blue > Red. But Small = 1, Medium = 2, Large = 3 is fine because the order is real.',
          },
          {
            sideHeading: '8. Aggregation and Summarization',
            bullets: [
              'When there is **too much data**, group similar points and show each group as **one summary**.',
              'The summary can be a simple **average**, or include the **count** of items and their **range**.',
            ],
            example: '10 lakh daily sales → 12 monthly totals.',
          },
          {
            sideHeading: '9. Smoothing and Filtering',
            bullets: [
              'Smoothing **reduces noise** (random jitter) and softens **sudden jumps**.',
              'Done by **convolution** — replacing each value with a **weighted average of its neighbours**.',
            ],
            example: 'Data 10, **40**, 12 → the spike 40 becomes about (10 + 40 + 12)/3 ≈ 21.',
            formulas: [
              {
                label: 'Weighted Neighbour Average',
                tex: "x'_i = \\sum_{k=-K}^{K} w_k \\, x_{i+k}, \\qquad \\sum_k w_k = 1",
              },
            ],
          },
          {
            sideHeading: '10. Raster-to-Vector Conversion',
            bullets: [
              '**Raster** = a picture made of **pixels**. **Vector** = a picture made of **points, lines and shapes**.',
              'Computer graphics normally goes vector → raster (shapes → pixels).',
              'Raster-to-vector goes the **other way**: find **lines and shapes** inside a pixel image.',
            ],
            example: 'Extracting the road network as lines from a satellite photo.',
          },
        ],
      },
    ],
    walkthroughLinkId: 'normalization-preprocess',
    keyTakeaway:
      'List all **10 methods** with one example each: metadata, missing values, **normalization (0–1 or mean/std)**, segmentation (MRI → bone/muscle/fat/skin), sampling (interpolation), **dimension reduction (PCA, MDS, SOM, LLE)**, nominal → numbers (no fake order), aggregation, **smoothing (convolution)**, raster-to-vector.',
    selfCheck: {
      question: 'Why is mapping Red = 1, Green = 2, Blue = 3 a mistake?',
      answer: 'It creates a fake order (Blue looks "bigger" than Red) that does not exist in the data.',
    },
  },
  {
    id: 'u1-data-sets',
    shortTitle: 'Data Sets',
    unit: 'unit1',
    order: 9,
    title: '1.9 Data Sets',
    subtopicsCovered: [
      'djia-100.xls',
      'colorado elev.vit',
      'cars / detroit / cereal',
      'Health-related Multivariate Sets',
      'iris.csv',
      'city temp.xls',
      'uvw.dat',
    ],
    summaryLine:
      'The textbook uses a few **sample data sets** throughout the book. Know each one’s **name, type of data and format**.',
    bullets: [
      {
        label: 'djia-100.xls',
        text: '**100+ years** of daily **Dow Jones** stock index values. **Univariate** (one value) and **non-spatial** (no location). Excel; each row = date (YYMMDD) + closing value.',
      },
      {
        label: 'colorado elev.vit',
        text: '**Height of the land** (elevation) over a square area of Colorado. A **2D evenly spaced grid** of single values. Binary file: 268-byte header + **400 × 400** grid.',
      },
      {
        label: 'cars.xls, detroit.xls, cereal.xls',
        text: '**Multivariate** (many columns), **non-spatial** data sets often used in analysis. Excel, mostly without headers.',
      },
      {
        label: 'Health Data Sets',
        text: '**UNICEF** indicators by country and **CDC** obesity by state. Multivariate **with location**, used with map (GIS) tools.',
      },
      {
        label: 'iris.csv',
        text: '**Flower measurements** of Iris plants grouped by species. CSV file.',
      },
      {
        label: 'city temp.xls',
        text: 'Average **January temperature** of **56 U.S. cities**. 2D, **unevenly spaced** map data with one value per city.',
      },
      {
        label: 'uvw.dat',
        text: 'A simulated **fluid flow** (air/water movement) in a channel. A **3D evenly spaced grid of vectors** (direction + speed). Each row = 3 position + 3 movement values (ratio about 20:1:1).',
      },
    ],
    table: {
      caption: 'Data Sets at a Glance',
      headers: ['Data Set', 'Type', 'Format'],
      rows: [
        ['djia-100.xls', 'Univariate, no location, time series', 'Excel'],
        ['colorado elev.vit', '2D even grid, single values', 'Binary (400 × 400)'],
        ['cars / detroit / cereal', 'Many columns, no location', 'Excel'],
        ['UNICEF / CDC health', 'Many columns, with location', 'Excel'],
        ['iris.csv', 'Many columns, grouped by species', 'CSV'],
        ['city temp.xls', '2D uneven, map data, single values', 'Excel'],
        ['uvw.dat', '3D even grid, vectors (flow)', 'Plain text'],
      ],
    },
    keyTakeaway:
      'Remember the odd ones out: **uvw.dat is the only vector (flow) data**, **djia is the only univariate one**, **city temp is uneven** while **colorado elev is even**.',
    selfCheck: {
      question: 'Which data set is a 3D grid of vectors, and what does it show?',
      answer: 'uvw.dat — one moment of a simulated turbulent fluid flow in a channel.',
    },
  },
];
