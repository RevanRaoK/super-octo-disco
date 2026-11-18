import { LessonTopic } from '@/types/course';

export const UNIT5_TOPICS: LessonTopic[] = [
  {
    id: 'u5-interaction-operators',
    shortTitle: 'Interaction Concepts & Operators',
    unit: 'unit5',
    order: 1,
    title: 'Interaction Concepts & 5.1 Interaction Operators',
    subtopicsCovered: [
      'Classes of Interaction Techniques',
      '5.1.1 Navigation Operators (Grand Tour)',
      '5.1.2 Selection Operators',
      '5.1.3 Filtering Operators (Dynamic Queries)',
      '5.1.4 Reconfiguring Operators',
      '5.1.5 Encoding Operators',
      '5.1.6 Connection Operators (Linked Selection)',
      '5.1.7 Abstraction/Elaboration Operators (Distortion)',
    ],
    summaryLine:
      '**Interaction** lets the user **change what they see and how they see it** — by moving around, selecting, filtering, rearranging, recolouring, linking views, or zooming into detail.',
    bullets: [
      { label: 'Definition', text: 'Interaction is a way of **changing what the user sees and how they see it**.' },
    ],
    subSections: [
      {
        heading: 'Classes of Interaction Techniques',
        bullets: [
          { label: 'Navigation', text: 'Move the **camera** and change the **zoom** — panning, rotating, zooming.', example: 'Dragging and zooming Google Maps.' },
          { label: 'Selection', text: 'Pick an object, group or area to do something with it — highlight, delete, change.' },
          { label: 'Filtering', text: 'Show **less data** by hiding some rows, columns or both.' },
          { label: 'Reconfiguring', text: 'Change **how data is arranged**, like re-ordering, to see it differently.' },
          { label: 'Encoding', text: 'Change the **look** — dot size, line colour — to reveal different features.' },
          { label: 'Connecting', text: '**Link views**, so selecting something in one shows related items in others.' },
          { label: 'Abstracting / Elaborating', text: 'Change the **level of detail** — less detail (abstract) or more detail (elaborate).' },
          { label: 'Hybrid', text: 'A mix — e.g., **enlarge the focus area** to see detail while **shrinking the rest** so context is kept.' },
        ],
      },
      {
        heading: '5.1 Interaction Operators',
        description: 'An **operator** is a type of action the user performs. The seven main ones:',
        subGroups: [
          {
            sideHeading: '5.1.1 Navigation Operators',
            bullets: [
              'Navigation (also called **exploration**) chooses **which part** of the data to see, **from which angle**, and at what **level of detail (LOD)**.',
              'In 3D it is set by **camera position, view direction, view shape and size**, and an LOD setting.',
              'In multi-level data, changing LOD = **drill-down** (more detail) or **roll-up** (less detail).',
              'Moves can be **absolute** (go to X) or **relative** (move 10 steps left), in **small or big** steps.',
              { label: 'Grand Tour', text: 'An **automatic** navigation: the computer smoothly **rotates through many 2D views** of high-dimensional data, like a guided tour.' },
            ],
            example: 'Grand tour of a student grades data set in the GGobi tool.',
          },
          {
            sideHeading: '5.1.2 Selection Operators',
            bullets: [
              'The user **picks some items** to then highlight, delete, hide or move to the centre.',
              'Decide whether a new selection **replaces** or **adds to** the old one.',
              { label: 'Size of Selection', text: 'A click may pick the **smallest part** (one point or edge) or a **bigger area** (a surface or object).' },
              { label: 'Ways to Select', text: '**Click** items, **paint** over them (drag the mouse), or select **by a rule**.' },
            ],
            example: 'Select all nodes within 2 steps of a chosen node in a network.',
          },
          {
            sideHeading: '5.1.3 Filtering Operators',
            bullets: [
              '**Reduces the amount of data** shown by setting rules on what to keep or remove.',
              { label: 'Dynamic Queries (Shneiderman)', text: '**Sliders** set a range of values, and the picture **updates instantly**.', example: 'A price slider on a shopping site.' },
              'You can also pick items from a list to **show or hide**, like **hiding columns in Excel**.',
            ],
            example: 'Filtering rows and columns of the grades data set in XmdvTool.',
          },
          {
            sideHeading: '5.1.4 Reconfiguring Operators',
            bullets: [
              '**Rearranging** the data to reveal features or handle complexity.',
              'E.g., hide some columns and **re-order** the rest; **sort** table rows to show trends.',
              'Change which columns control x and y, or compute positions with **PCA or MDS**.',
            ],
          },
          {
            sideHeading: '5.1.5 Encoding Operators',
            bullets: [
              'The same data can make **many different pictures**; switching between them can reveal hidden features.',
              { label: 'Example', text: 'A scatterplot with a "year" axis has many **overlapping** points; **parallel coordinates** shows each separately.' },
              '**No single picture** suits every task — trying several is the **heart of interactive visualization**.',
            ],
          },
          {
            sideHeading: '5.1.6 Connection Operators',
            bullets: [
              '**Linked selection**: selecting items in **one view highlights the same items in all other views**.',
              'Helps build a **full mental picture** of a feature and see how it relates to others.',
              { label: 'Example', text: 'Click a city on a map and the same city lights up in a bar chart of sales.' },
            ],
          },
          {
            sideHeading: '5.1.7 Abstraction / Elaboration Operators',
            bullets: [
              'Show **more detail** on the part you care about (**elaboration**) and **less detail** elsewhere (**abstraction**).',
              'Most popular tool: **distortion** — stretching the picture to enlarge the focus. It can be applied to **any** visualization.',
              'Like panning and zooming, it helps **explore**.',
            ],
            example: 'A magnifying-glass (fisheye) lens over one part of a chart.',
          },
        ],
      },
    ],
    keyTakeaway:
      'Define interaction, list the **8 classes**, then the **7 operators** with an example each: navigation (**grand tour**), selection (replace or add), filtering (**dynamic queries / sliders**), reconfiguring (sort, PCA/MDS), encoding (scatterplot → parallel coords), connection (**linked selection**), abstraction/elaboration (**distortion**).',
    selfCheck: {
      question: 'What is the grand tour?',
      answer: 'An automatic navigation where the computer smoothly rotates through many 2D views of high-dimensional data.',
    },
  },
  {
    id: 'u5-interaction-operands-spaces',
    shortTitle: 'Interaction Operands & Spaces',
    unit: 'unit5',
    order: 2,
    title: '5.2 Interaction Operands and Spaces',
    subtopicsCovered: [
      'Interaction Operand',
      '5.2.1 Screen Space (Pixels)',
      '5.2.2 Data Value Space',
      '5.2.3 Data Structure Space',
      '5.2.4 Attribute Space',
      '5.2.5 Object Space (3D Surfaces)',
      '5.2.6 Visualization Structure Space',
    ],
    summaryLine:
      'An **operand** is **what the action works on**. The same action (like zoom) means different things depending on the **space**: pixels, data values, data structure, visual attributes, 3D objects, or the layout of the visualization.',
    bullets: [
      { label: 'Interaction Operand', text: 'The **part of the "space"** that an action is applied to.' },
      'When the user clicks somewhere, we must know **which space** they mean — the pixel? the data value? the object?',
    ],
    subSections: [
      {
        heading: 'The Six Spaces',
        subGroups: [
          {
            sideHeading: '5.2.1 Screen Space (Pixels)',
            bullets: [
              'Works directly on the **pixels** of the screen.',
              { label: 'Navigation', text: 'Pan, zoom, rotate the **image** — **no new data** is fetched, pixels are just moved or enlarged.' },
              { label: 'Selection', text: 'Each pixel becomes **selected or not**; select single pixels, rectangles, circles or free shapes.' },
              { label: 'Filtering', text: '**Crop** or **mask** (cover) an area of pixels.' },
              { label: 'Distortion', text: 'Move pixels to **enlarge one area without hiding others**, keeping order and continuity — e.g., **fisheye lens, rubber sheet**.' },
            ],
            example: 'A magnifier enlarging one cell of a scatterplot matrix.',
          },
          {
            sideHeading: '5.2.2 Data Value Space',
            bullets: [
              'Works on the **data values** themselves, not the screen.',
              { label: 'Navigation', text: '**Pan** = shift the range of values shown; **zoom** = show a **smaller range** of values.', example: 'Change a graph from years 2000–2020 to 2010–2015.' },
              { label: 'Selection', text: 'Like a **database query** — pick a range of values (e.g., price 100–200).' },
              { label: 'Filtering', text: 'Remove data outside a region, or remove some records/columns; **sampling** keeps a representative subset.' },
            ],
          },
          {
            sideHeading: '5.2.3 Data Structure Space',
            bullets: [
              'Works on **how data is organized** — **lists, tables, grids, trees, graphs**.',
              { label: 'Navigation', text: 'Move **along the structure** — next group of records, or **drill down/roll up** a tree.' },
              { label: 'Screen Zoom vs Structure Zoom', text: 'Screen zoom just makes **pixels bigger** (blurry). Structure zoom **loads more detailed data** (sharp).' },
              { label: 'Resnick', text: 'Selects data in a grid using a **focus point, extent and density** — more detail near the focus.' },
              { label: 'Filtering', text: 'Pick a **time range** (time series), nodes **within some distance** (graph), or certain **levels** (tree).' },
            ],
          },
          {
            sideHeading: '5.2.4 Attribute Space',
            bullets: [
              'Works on the **visual properties** — colour, size, shape, or any of the **eight visual variables**.',
              { label: 'Navigation', text: 'Shift or stretch the range of an attribute, like moving along a colour scale.' },
              { label: 'Selection', text: 'Pick part of an attribute range, e.g., **click some colours in a colour legend** to highlight those items.' },
              { label: 'Remapping', text: 'Use a different attribute range, or let a different attribute show the data.' },
              { label: 'Distortion', text: 'Change attributes of the shapes (e.g., enlarge some glyphs).' },
            ],
          },
          {
            sideHeading: '5.2.5 Object Space (3D Surfaces)',
            bullets: [
              'Data is drawn **on a 3D object**, and the object is what you interact with.',
              { label: 'Navigation', text: '**Move around** the object; allow both **whole views** and **close-ups**.' },
              { label: 'Selection', text: 'Click on the object or pick it from a **list**.' },
              { label: 'Remapping', text: 'Change the object — e.g., draw world data on a **flat map** or a **globe**.' },
            ],
          },
          {
            sideHeading: '5.2.6 Visualization Structure Space',
            bullets: [
              'Works on the **layout of the visualization itself**, not the data — e.g., the **grid of a scatterplot matrix** or the **axes**.',
              { label: 'Dashboards', text: 'Several charts arranged on one screen, used for **business monitoring** and **control rooms**.' },
              { label: 'Navigation', text: 'Flip through **pages** of a spreadsheet tool, or **zoom into one plot** of a scatterplot matrix.' },
            ],
          },
        ],
        table: {
          caption: '"Zoom" Means Something Different in Each Space',
          headers: ['Space', 'What "Zoom" Does'],
          rows: [
            ['Screen', 'Makes pixels bigger (no new data)'],
            ['Data value', 'Shows a smaller range of values'],
            ['Data structure', 'Loads more detailed data (drill down)'],
            ['Attribute', 'Stretches an attribute range (e.g., colours)'],
            ['Object', 'Moves the camera closer to the 3D object'],
            ['Visualization structure', 'Enlarges one plot of a dashboard or matrix'],
          ],
        },
      },
    ],
    keyTakeaway:
      'Define **interaction operand**, list the **six spaces**, and for each say what navigation / selection / filtering mean. Key contrast: **screen zoom = bigger pixels** vs **data structure zoom = more detailed data**.',
    selfCheck: {
      question: 'Compare zooming in screen space and in data structure space.',
      answer: 'Screen space zoom just enlarges the existing pixels with no new data; data structure zoom loads more detailed data.',
    },
  },
  {
    id: 'u5-unified-framework',
    shortTitle: 'A Unified Framework',
    unit: 'unit5',
    order: 3,
    title: '5.3 A Unified Framework',
    subtopicsCovered: ['Focus', 'Extents', 'Transformation', 'Blender', 'Distortion Pipeline'],
    summaryLine:
      'Every interaction in any space needs the same **four settings**: **focus** (where), **extents** (how far), **transformation** (what happens) and **blender** (what to do when two interactions overlap).',
    bullets: [
      'Every operator needs a few **parameters (settings)**; some may be fixed by the system.',
      { label: 'Focus', text: '**Where** the user’s interest is centred. There can be several, usually in separate windows.', example: 'The point you put a magnifier on.' },
      { label: 'Extents', text: '**How far** the interaction reaches — in pixels on screen, or rows/links in a data structure.', example: 'The radius of the magnifier.' },
      { label: 'Transformation', text: '**What happens** to things inside the extents, usually depending on **distance from the focus**, with a **strength** setting.', example: 'Enlarge 3× at the centre, less toward the edge. Text lenses use a **flat top** so words stay readable.' },
      { label: 'Blender', text: 'What to do where **two interactions overlap**. For selection, use logic (AND/OR); for distortion (**Keahey & Robertson**): **weighted average, maximum value, or composition** (apply one after the other).' },
    ],
    subSections: [
      {
        heading: 'The Distortion Pipeline',
        bullets: [
          'Distortion can happen in several spaces in a row; the user controls the settings at each stage, and **each stage is optional**.',
          'No tool supports every stage, but most let users control some settings.',
          'The order can vary, but **screen-space distortion is usually last**.',
        ],
        diagramId: 'dvt-distortion-pipeline',
        diagramCaption: 'Distortion pipeline: data → structure → attribute → object → screen, each with focus, extents, transformation and blender.',
      },
    ],
    keyTakeaway:
      'Four settings: **Focus (where), Extents (how far), Transformation (what + how strong), Blender (overlaps: weighted average / max / composition)**. Screen-space distortion comes **last**.',
    selfCheck: {
      question: 'What three ways of blending overlapping distortions did Keahey and Robertson give?',
      answer: 'Weighted average, maximum value, and composition.',
    },
  },
  {
    id: 'u5-screen-space-technique',
    shortTitle: 'Screen Space (Fisheye Lens)',
    unit: 'unit5',
    order: 4,
    title: 'Interaction Techniques: 5.4 Screen Space',
    subtopicsCovered: ['Focus + Context', 'Fisheye Lens Parameters', 'Log Transformation', 'Fisheye Pseudo-code', 'Gaps, Overlaps and Lens Shapes'],
    summaryLine:
      'A **fisheye lens** magnifies the area under the lens while keeping the rest visible (**focus + context**). It changes only each pixel’s **distance from the centre**.',
    bullets: [
      { label: 'Focus + Context', text: 'See the **detail you care about** and the **surroundings** at the same time.' },
      { label: 'Settings', text: 'Lens centre $(c_x, c_y)$, lens radius $r_l$, and strength (deflection) $d$.' },
      'Each pixel’s position is turned into **polar coordinates** (distance and angle from the centre); only the **distance** is changed.',
    ],
    subSections: [
      {
        heading: 'Fisheye Formula',
        formulas: [
          {
            label: 'New Distance from Centre',
            tex: 'r_{new} = s \\,\\log\\!\\left(1 + d \\cdot r_{old}\\right)',
            note: 'Small distances are stretched a lot (magnified); bigger ones are stretched less. Choosing $s = r_l / \\log(1 + d\\,r_l)$ keeps the lens edge fixed.',
          },
        ],
      },
      {
        heading: 'Fisheye Pseudo-code',
        bullets: [
          { label: '1.', text: '**Clear** the output image.' },
          { label: '2.', text: 'For **each pixel** in the input image:' },
          { label: '(a)', text: 'Find its **distance and angle** from the lens centre.' },
          { label: '(b)', text: 'If it is **inside the lens**: compute the **new distance**, take the colour from the original image, and set that pixel in the result.' },
          { label: '(c)', text: 'Otherwise: **copy** the original pixel unchanged.' },
        ],
      },
      {
        heading: 'Practical Problems',
        bullets: [
          'Moving pixels can leave **gaps** (empty pixels) or make pixels **overlap**.',
          'Overlaps are a small issue (can be **averaged**); gaps must be **filled in by interpolation**.',
          'Different formulas give different **lens shapes**; for text, a **flat-top** lens keeps words readable.',
        ],
        diagramId: 'dvt-fisheye-lens',
        diagramCaption: 'Fisheye lens: grid near the centre is enlarged, squeezed near the edge, unchanged outside.',
      },
    ],
    walkthroughLinkId: 'fisheye-distortion',
    keyTakeaway:
      'Write the settings $(c_x, c_y), r_l, d$, the formula $r_{new} = s\\log(1 + d r_{old})$, the **3-step pseudo-code**, and note **gaps → interpolation** and **flat-top lens for text**.',
    selfCheck: {
      question: 'Why do gaps need interpolation but overlaps do not?',
      answer: 'Gaps are pixels with no colour at all, so a value must be guessed; overlaps just give one pixel several colours, which can be averaged.',
    },
  },
  {
    id: 'u5-object-space-technique',
    shortTitle: 'Object Space (Perspective Wall)',
    unit: 'unit5',
    order: 5,
    title: '5.5 Object Space (3D Surfaces)',
    subtopicsCovered: ['Perspective Wall', 'Front Wall vs Side Panels', 'Piecewise Transformation', 'Interacting with the Wall'],
    summaryLine:
      'The **perspective wall** shows one panel flat in front of you and folds the rest away into the distance like the **side walls of a corridor** — detail in front, context at the sides.',
    bullets: [
      'Used to browse **long documents or data**.',
      'The **front panel** faces you directly; the **side panels** bend back and **shrink with distance** (perspective).',
      { label: 'Simple Version', text: 'The front panel is just **stretched sideways**; the side panels are **shrunk** more the farther they are from the front edge, and **slanted (sheared)**.' },
      'Original sections bounded by $(x_0, x_{left}, x_{right}, x_1)$ map to screen panels $(X_0, X_{left}, X_{right}, X_1)$.',
    ],
    formulas: [
      {
        label: 'Front Panel Mapping',
        tex: 'X = X_{left} + (x - x_{left})\\,\\dfrac{X_{right} - X_{left}}{x_{right} - x_{left}}, \\qquad x_{left} \\le x \\le x_{right}',
        note: 'The side panels use the same idea on their own ranges, with height shrinking toward the outer edges.',
      },
    ],
    subSections: [
      {
        heading: 'Interacting with the Perspective Wall',
        bullets: [
          '**Page forward/backward** one at a time, or **flip quickly** through pages.',
          'Use **index tabs** sticking out at the top of each section to **jump** there.',
          'Allow **more than one page** in front for a bigger clear view (with less detail).',
        ],
        diagramId: 'dvt-perspective-wall',
        diagramCaption: 'Perspective wall: a clear front panel with side panels folding into the distance.',
      },
    ],
    keyTakeaway:
      'Perspective wall = **front panel (stretched sideways)** + **side panels (shrunk by distance + slanted)**. Interactions: **page flipping, index tabs, multi-page focus**.',
    selfCheck: {
      question: 'How are the side panels of a simple perspective wall made?',
      answer: 'By shrinking them horizontally and vertically more the farther they are from the front panel’s edge, and slanting (shearing) them.',
    },
  },
  {
    id: 'u5-data-space-technique',
    shortTitle: 'Data Space',
    unit: 'unit5',
    order: 6,
    title: '5.6 Data Space (Multivariate Data Values)',
    subtopicsCovered: ['Typical Data Transformations', 'Informing the User', 'Rescaling to Graphical Ranges'],
    summaryLine:
      'Changing the **data values themselves** (scaling, log, sine, absolute value, negating) is common — but users **must be told**, and results must be **rescaled** to fit the screen.',
    bullets: [
      { label: 'Scale & Shift', text: 'Fit values into a chosen range.' },
      { label: 'Log / Exponential', text: '**Spread out** or **squeeze** the values.', example: 'Log scale for incomes from ₹1,000 to ₹1 crore.' },
      { label: 'Sine Functions', text: 'Study **repeating (cyclic)** patterns.' },
      { label: 'Absolute Value', text: 'Look only at **how big** a change is, not its direction.' },
      { label: 'Negate', text: 'Flip values so **low becomes high** and high becomes low.' },
    ],
    subSections: [
      {
        heading: 'Two Must-Do Rules',
        bullets: [
          { label: 'Tell the User', text: 'Users must know the data was changed — **label axes clearly** and add a **note** describing the change. Hidden changes cause wrong conclusions.' },
          { label: 'Rescale', text: 'After changing values, **shift and scale** them to fit the drawing range.' },
          { label: 'If You Forget', text: 'Shapes may be drawn **off the screen**, colours may **wrap around** (high values turn back into low colours), or sizes may become **negative**.' },
        ],
      },
    ],
    keyTakeaway:
      'List the **5 data changes** (scale, log, sine, absolute, negate) and the **2 rules**: tell the user (labels, notes) and rescale (else off-screen shapes, colour wrap-around, negative sizes).',
    selfCheck: {
      question: 'Name three problems caused by not rescaling changed data.',
      answer: 'Shapes drawn off the screen, colours wrapping around, and negative values for sizes or other attributes.',
    },
  },
  {
    id: 'u5-attribute-space-technique',
    shortTitle: 'Attribute Space',
    unit: 'unit5',
    order: 7,
    title: '5.7 Attribute Space (Properties of Graphical Entities)',
    subtopicsCovered: ['Equivalents with Data Space', 'Glyph Enlargement Intuition', 'Overlap with Screen Space', 'Color & Opacity Interactions'],
    summaryLine:
      'Attribute-space interactions change **how things look**, not the data — like **enlarging a glyph**, boosting **contrast** or adjusting **colour and transparency**.',
    bullets: [
      'Many attribute changes have a **data-space twin**: scaling, edge sharpening, colour balancing.',
      'Sometimes it feels more natural to change **only the picture** — enlarging a glyph does **not change the data**.',
      { label: 'Vs Screen Zoom', text: 'Enlarging a glyph by redrawing it bigger avoids the **blocky look** of just enlarging pixels.' },
      { label: 'Colour & Opacity', text: 'The biggest group: **contrast enhancement** and **colour histogram equalization** (spreading colours evenly so details show).' },
      'Contrast and brightness controls can **highlight areas** to make spotting, sorting or measuring features easier.',
    ],
    keyTakeaway:
      'Attribute space = change **the picture, not the data**; better than pixel zoom because it avoids **blocky pixels**; main tools are **colour/opacity** (contrast, histogram equalization).',
    selfCheck: {
      question: 'Why is enlarging a glyph in attribute space better than pixel zoom?',
      answer: 'The glyph is redrawn at a larger size, so it stays sharp instead of looking blocky.',
    },
  },
  {
    id: 'u5-data-structure-space-technique',
    shortTitle: 'Data Structure Space',
    unit: 'unit5',
    order: 8,
    title: '5.8 Data Structure Space (Components of Data Organization)',
    subtopicsCovered: ['Design Decisions', 'Automatic vs Manual', 'Dimension Ordering Example', 'Measures of Goodness'],
    summaryLine:
      'Data structures (order, grids, groups, trees, networks) need operations like **re-ordering**; the designer decides **how automatic** they are and whether they happen **on the picture or in a dialog box**.',
    bullets: [
      'Common structures: **ordering, grids, groups, hierarchies (trees), networks**.',
      { label: 'Decision 1', text: '**How automatic** should the operation be?' },
      { label: 'Decision 2', text: 'Done **directly on the picture**, or in a **separate dialog box**?' },
      'Automatic methods trade **slow but thorough** against **fast but not the best**.',
    ],
    subSections: [
      {
        heading: 'Example: Changing the Order of Columns',
        bullets: [
          { label: 'Manual', text: 'Move columns **up/down** in a list or **drag and drop** them.' },
          { label: 'Direct', text: '**Drag the axes** themselves in parallel coordinates or a scatterplot matrix.' },
          'In a **scatterplot matrix**, moving one column moves a **whole row and column**, to keep it mirror-symmetric.',
          { label: 'What Is a Good Order?', text: 'One that makes the picture **easier to read** — less clutter, clearer structure.' },
        ],
      },
    ],
    keyTakeaway:
      'Two decisions (**how automatic**, **on picture vs dialog box**), the **slow-thorough vs fast** trade-off, and the **column-ordering** example (list, drag axes, SPLOM row + column).',
    selfCheck: {
      question: 'Why does moving one column in a scatterplot matrix move a whole row and column?',
      answer: 'To keep the matrix mirror-symmetric about its diagonal.',
    },
  },
  {
    id: 'u5-visualization-structure-space-technique',
    shortTitle: 'Visualization Structure Space',
    unit: 'unit5',
    order: 9,
    title: '5.9 Visualization Structure Space (Components of the Data Visualization)',
    subtopicsCovered: ['Fisheye on Visualization Structure', 'Organizing Many Visualizations', 'Drill-down in Multi-Component Views', 'Consistent Icons and Labels'],
    summaryLine:
      'Earlier techniques also work on the **layout of the visualization** — e.g., a **fisheye** that widens the space between some axes, or **grouping many small charts** on screen.',
    bullets: [
      { label: 'Fisheye on Layout', text: 'Widen the **gap between axes** in parallel coordinates, or enlarge **cells** in a scatterplot matrix or **TableLens**.' },
      { label: 'Organizing Many Views', text: '**Cluster, filter or arrange** hundreds of small pictures, e.g., volume renderings with different settings.' },
      { label: 'Drill-down / Roll-up', text: 'Works well when the views are arranged in **levels**.' },
      { label: 'Keep It Clear', text: 'Use **consistent icons and labels** so users always know what they can do.' },
    ],
    keyTakeaway:
      'Visualization-structure interactions reuse **fisheye** (axis gaps, grid cells, TableLens), **cluster/filter** many views, and **drill-down/roll-up**, with **consistent icons and labels**.',
    selfCheck: {
      question: 'Give one way a fisheye can be used on the visualization structure.',
      answer: 'Widening the space between selected axes in parallel coordinates, or enlarging cells in a scatterplot matrix or TableLens.',
    },
  },
  {
    id: 'u5-animating-transformations',
    shortTitle: 'Animating Transformations',
    unit: 'unit5',
    order: 10,
    title: '5.10 Animating Transformations',
    subtopicsCovered: ['Smooth Transitions', 'Linear Interpolation', 'Constant Rate Issues', 'Ease-in, Ease-out'],
    summaryLine:
      'When the picture changes, **animate the change smoothly** so the user does not lose track. The best motion **starts slow, speeds up, then slows down** (ease-in, ease-out).',
    bullets: [
      'Almost every interaction **changes the picture** — sometimes completely, sometimes partly.',
      'If the user must **keep track** while noticing the change, use **smooth transitions** instead of jumps.',
      { label: 'Example', text: 'Rotating a 3D object smoothly is better than **jumping** straight to the new angle.' },
      { label: 'Linear Interpolation', text: 'Make in-between frames evenly from start to end; more frames for bigger changes.' },
      'Even steps may not give **even speed** — e.g., moving a camera along a **curved path**.',
      'Motion that **speeds up and slows down smoothly** looks better than constant speed.',
    ],
    subSections: [
      {
        heading: 'Ease-in, Ease-out',
        bullets: [
          'Start at **speed 0**, **speed up** to a cruising speed, then **slow down** to 0 at the end — like a car leaving and reaching a signal.',
          'Made from **pieces of a sine wave** joined by a **straight line** in the middle; the key is a **smooth curve**.',
        ],
        formulas: [
          {
            label: 'Smooth Start and Stop (position over time)',
            tex: 's(t) = \\dfrac{1 - \\cos(\\pi t)}{2}, \\qquad 0 \\le t \\le 1',
            note: 'Speed is 0 at the start and end. Constant speed would be $s(t) = t$.',
          },
        ],
        diagramId: 'dvt-ease-in-out',
        diagramCaption: 'Position over time: (a) constant speed vs (b) ease-in, ease-out.',
      },
    ],
    keyTakeaway:
      'Smooth transitions keep the user **oriented**; prefer **ease-in/ease-out** (sine pieces + straight middle) over constant speed; even steps can fail on **curved paths**.',
    selfCheck: {
      question: 'Why is ease-in/ease-out better than constant speed?',
      answer: 'Starting and stopping gently is easier for the eye to follow than sudden starts and stops.',
    },
  },
  {
    id: 'u5-interaction-control',
    shortTitle: 'Interaction Control',
    unit: 'unit5',
    order: 11,
    title: '5.11 Interaction Control',
    subtopicsCovered: ['Focus Selection', 'Extent Selection', 'Interaction Type Selection', 'Interaction Level Selection', 'Blender Type Selection', 'Animating Parameter Changes'],
    summaryLine:
      'Users need **easy controls** to set **where** (focus), **how far** (extent), **what kind** (type), **how strong** (level) and **how overlaps mix** (blender) — and changes should be **animated**.',
    bullets: [
      'At every stage, users need clear controls for the **type, place and strength** of an interaction, matched to the **precision** of that space.',
    ],
    subSections: [
      {
        heading: 'Types of Controls',
        subGroups: [
          {
            sideHeading: 'Focus Selection (Where)',
            description:
              'Easiest with **direct pointing** (mouse click). In attribute or structure space, first show a **picture of that space** (a tree, a table, a colour-scale bar) to click on.',
          },
          {
            sideHeading: 'Extent Selection (How Far)',
            description:
              'Set by dragging or by a separate control; can be **one number** (a radius, max items), **several numbers**, or **rules**. Often simply **fixed** by the system.',
          },
          {
            sideHeading: 'Interaction Type Selection (What Kind)',
            description: 'Use **two menus** — one for the **space**, one for the **kind of interaction** — or a few **buttons/icons**.',
          },
          {
            sideHeading: 'Interaction Level Selection (How Strong)',
            description:
              'One number (e.g., how much to magnify) set with a **slider or dial** plus a **reset** button — or drag the mouse **up to increase** and sideways to change the extent.',
          },
          {
            sideHeading: 'Blender Type Selection (Mixing Overlaps)',
            description:
              'A **menu** of ways to combine areas affected by **more than one** interaction; options depend on the space and interaction type.',
          },
        ],
      },
      {
        heading: 'Animate Every Change',
        bullets: [
          'When a setting changes, **animate** it smoothly from old to new value.',
          'This keeps users **oriented**; sudden changes cause **confusion**, especially with big data.',
          'Let users control the **animation speed** (number of frames).',
        ],
      },
    ],
    keyTakeaway:
      'Five controls: **Focus** (click), **Extent** (number/rules, often fixed), **Type** (two menus), **Level** (slider/dial + reset), **Blender** (menu) — plus **animate changes** with user-set speed.',
    selfCheck: {
      question: 'What control is suggested for setting the interaction level?',
      answer: 'A slider or dial with a reset button, or dragging the mouse upward to increase it.',
    },
  },
  {
    id: 'u5-steps-designing-visualizations',
    shortTitle: 'Steps in Designing Visualizations',
    unit: 'unit5',
    order: 12,
    title: '5.12 Designing Effective Visualizations — Steps in Designing Visualizations',
    subtopicsCovered: [
      'Successful vs Ineffective Visualizations',
      '(a) Intuitive Mappings from Data to Visualization',
      '(b) Selecting and Modifying Views',
      '(c) Information Density',
      '(d) Keys, Labels and Legends',
      '(e) Using Color with Care',
      '(f) The Importance of Aesthetics',
    ],
    summaryLine:
      'A good visualization gives the **right information, quickly and correctly**, to its audience. Design it in six steps: **natural mappings, useful views, right amount of data, clear labels, careful colour, good looks**.',
    bullets: [
      { label: 'Successful Visualization', text: 'Shows the needed information **quickly and accurately** to the **intended audience**, for its purpose (**explore, confirm, or present**).' },
      { label: 'Why Some Fail', text: 'Too confusing; data **distorted, hidden or lost**; no way to change the view or colours; or simply **ugly**.' },
    ],
    subSections: [
      {
        heading: '(a) Intuitive Mappings from Data to Visualization',
        bullets: [
          'Match the picture to how the **user already thinks** about the data — faster understanding, fewer mistakes.',
          { label: 'Example', text: 'Using **pictures of planets** to plot distance from the sun vs time to orbit.' },
          'Most natural mappings: **longitude/latitude → screen position**, and **time → animation**.',
          { label: 'Match the Scale', text: '**Ordered** data (age) must not use **unordered** visuals (shape). **Unordered** data (country) must not use **ordered** visuals (length).' },
        ],
      },
      {
        heading: '(b) Selecting and Modifying Views',
        bullets: [
          'One view is rarely enough; predict which views users need and give **easy controls**, clearly labelled.',
          { label: 'Scroll & Zoom', text: 'When not everything fits at the needed detail.' },
          { label: 'Colour Map Control', text: 'Let users choose palettes or individual colours.' },
          { label: 'Mapping Control', text: 'Switch between **different chart types** for the same data.' },
          { label: 'Scale Control', text: 'Change the value range before drawing; **clip or filter** to focus.' },
          { label: 'Level-of-Detail Control', text: 'Show more or less detail.' },
        ],
      },
      {
        heading: '(c) Information Density — Too Much or Too Little?',
        bullets: [
          { label: 'Too Little ("Gratuitous Graphics")', text: 'A chart for just **2–3 numbers** (like % men vs women) — just **write the numbers**. "Being able to make a chart doesn’t mean you should."' },
          { label: 'Too Much', text: 'A **cluttered** picture confuses and **hides** important information.' },
          { label: 'Fixes', text: 'Let users **turn parts on/off**, use **multiple screens/panes**, **filter** boring data, and **rescale** crowded areas.' },
        ],
      },
      {
        heading: '(d) Keys, Labels and Legends',
        bullets: [
          'Give a **caption** saying what is shown and how.',
          'Use **grid lines/tick marks** when exact values matter, and **label every axis with units**.',
          'Give a **key** for symbols and a **labelled colour bar** for colours.',
          'Choose tick spacing sensibly — tool **defaults** can mislead.',
          'Across many windows, keep **labels and grids consistent**; clearly show any change of range or colours.',
        ],
      },
      {
        heading: '(e) Using Color with Care',
        bullets: [
          'Colour is one of the **most misused** tools; how a colour looks **depends on the colours around it**.',
          'Up to **10% of men** have some colour blindness.',
        ],
        subGroups: [
          {
            sideHeading: 'Five Colour Rules',
            bullets: [
              { label: '1.', text: 'If users must read **exact values**, use **only a few** colour levels.' },
              { label: '2.', text: 'Use **redundant mapping** — show the value with colour **and** size.' },
              { label: '3.', text: 'For number scales, change **both hue and lightness** at each step.' },
              { label: '4.', text: 'Always include a **labelled colour key**.' },
              { label: '5.', text: 'Use **meaningful colours** (blue = cold, red = hot) so they are easy to remember.' },
            ],
          },
          {
            sideHeading: 'Grey First',
            description: 'Some designers first design in **greyscale**, test it, and add colour **last**.',
          },
        ],
      },
      {
        heading: '(f) The Importance of Aesthetics',
        bullets: [
          'First make it **work (function)**, then make it **look good (form)**; attractive pictures invite people to study them.',
          { label: 'Focus', text: 'Draw the eye to the **most important part**.' },
          { label: 'Balance', text: 'Use space well, important parts near the **centre**, no edge overloaded.' },
          { label: 'Simplicity', text: 'Do not cram; avoid fancy effects like **3D shaded bars** when a simple bar chart works. Remove features one by one; if nothing important is lost, drop them.' },
        ],
      },
    ],
    keyTakeaway:
      'Six steps **(a)–(f)**: natural mappings (**match ordered/unordered**), views (**5 controls**), density (**too little vs too much**), labels/keys, **5 colour rules**, aesthetics (**focus, balance, simplicity**).',
    selfCheck: {
      question: 'Why should "country" not be shown by bar length?',
      answer: 'Country has no natural order, but length does — so it would suggest an order that is not in the data.',
    },
  },
  {
    id: 'u5-problems-designing-visualizations',
    shortTitle: 'Problems in Designing Visualizations',
    unit: 'unit5',
    order: 13,
    title: '5.13 Problems in Designing Effective Visualizations',
    subtopicsCovered: [
      'Misleading Visualizations ("Viz Lies")',
      'Data Scrubbing, Unbalanced Scaling (Lie Factor), Range Distortion, Abusing Dimensionality',
      '1. Visual Nonsense',
      '2. Losing Data in the Chart Junk',
      '3. Raw versus Derived Data',
      '4. Absolute versus Relative Judgment',
    ],
    summaryLine:
      'Pictures can **mislead** (by hiding data, stretching scales, moving the baseline, using 3D volume) or **fail** (meaningless combinations, decoration that hides data, only smoothed data, needing exact readings).',
    bullets: [],
    subSections: [
      {
        heading: 'Misleading Visualizations ("Viz Lies")',
        description:
          'A picture must **honestly show the data**; "viz lies" bend the data to push an opinion. Learn them to **avoid** them.',
        subGroups: [
          {
            sideHeading: 'Data Scrubbing',
            bullets: [
              'Removing "messy" data — but choosing to remove data that **disagrees** with your point, often by dropping **outliers**.',
              'Never remove outliers **without telling** viewers and letting them see them (unless they are real recording errors).',
            ],
          },
          {
            sideHeading: 'Unbalanced Scaling',
            bullets: [
              'Stretching scales to make a trend look **stronger or weaker** than it is.',
              '**Tufte’s lie factor** measures this.',
            ],
            formulas: [
              {
                label: 'Tufte’s Lie Factor',
                tex: '\\text{Lie Factor} = \\dfrac{\\text{size of change shown in the picture}}{\\text{size of change in the data}}',
                note: 'An honest picture has a lie factor close to 1.',
              },
            ],
            example: 'Sales rise 10% but the bar is drawn 50% taller → lie factor = 5.',
          },
          {
            sideHeading: 'Range Distortion',
            bullets: [
              'Setting an axis range people **do not expect** — usually **not starting at zero**.',
              'Because we judge things **relative** to each other, a moved baseline can make small differences look **huge**; always make the baseline **clear**.',
            ],
            example: 'A bar chart starting at 95 makes 96 vs 98 look like a giant gap.',
          },
          {
            sideHeading: 'Abusing Dimensionality',
            bullets: [
              'We judge **length** best, **area** worse, **volume** worst.',
              'Showing a number as a **3D volume** makes misreading very likely — **simpler is better**.',
            ],
          },
        ],
      },
      {
        heading: '1. Visual Nonsense',
        bullets: [
          'Combining **unrelated data** can show fake patterns — e.g., **stock prices vs sunspots**; coincidence is mistaken for **cause**.',
          'Only combine data that has a **logical link**.',
          { label: 'Match Time and Place', text: 'Do not compare one product’s sales in **different regions and different years** at once.' },
          { label: 'Match Units', text: 'Price per kg and price per litre should both become **price per serving** before comparing.' },
        ],
      },
      {
        heading: '2. Losing Data in the Chart Junk',
        bullets: [
          { label: 'Chart Junk', text: '**Decoration** that is not data and is not needed to understand it.' },
          'It makes charts **complicated** and can **hide** the actual data.',
          'On computers, users can **adjust** how much helper graphics they see.',
          'Quick overviews need a **clean view**; detailed analysis needs **measuring tools** — give tools that can be **turned off**.',
        ],
      },
      {
        heading: '3. Raw versus Derived Data',
        bullets: [
          'Showing only a **smooth fitted curve** instead of real data **hides the truth** and can mislead.',
          'Best: show **both** raw data and the fitted model, and let users hide either one.',
          { label: 'Resampling Danger', text: 'Filling in many extra points makes data look **richer than it really is** — the denser the fill, the more people are misled.' },
        ],
      },
      {
        heading: '4. Absolute versus Relative Judgment',
        bullets: [
          'People are **bad at exact (absolute) readings** of position, length or colour.',
          'So design for **comparisons (relative judgment)**, or use only **a few distinct values**.',
          '**Boxes, grid lines and tick marks** turn exact reading into easy comparison.',
          '**Residuals** (value minus average) turn reading into a simple **above/below** decision.',
        ],
      },
    ],
    keyTakeaway:
      'Four viz lies: **scrubbing, unbalanced scaling (lie factor), range distortion (baseline), 3D volume**. Four problems: **visual nonsense, chart junk, raw vs derived, absolute vs relative judgment** — one example each.',
    selfCheck: {
      question: 'Data goes up 10% but the bar grows 50%. What is the lie factor?',
      answer: 'Lie factor = 50% / 10% = 5 — a big exaggeration (honest ≈ 1).',
    },
  },
  {
    id: 'u5-issues-of-data',
    shortTitle: 'Issues of Data',
    unit: 'unit5',
    order: 14,
    title: '5.14 Research Directions — 1. Issues of Data',
    subtopicsCovered: ['Scale', 'Static versus Dynamic', 'Spatial versus Nonspatial', 'Nominal versus Ordinal', 'Structured versus Nonstructured', 'Time', 'Variable Quality'],
    summaryLine:
      'Future research tries to visualize **harder kinds of data**: **huge** data, **live streaming** data, mixed **map and non-map** data, **text categories**, **unstructured** text, **time**, and **unreliable** data.',
    bullets: [
      'Visualization is now a **mature field**, and researchers study where it should go next.',
      'Much research is about handling **new kinds of data**.',
    ],
    subSections: [
      {
        heading: 'Data Research Issues',
        subGroups: [
          {
            sideHeading: 'Scale (Size)',
            bullets: [
              'Data is growing **faster than computers** (faster than Moore’s Law) — from KB/MB to **GB and TB**.',
              'Solutions: **clustering, sampling, abstraction**.',
              'Data that **does not fit in memory** is now common.',
            ],
          },
          {
            sideHeading: 'Static versus Dynamic',
            bullets: [
              'Most tools assume data sits still in files. Now we also need **streaming** data that keeps arriving.',
              'It must be analysed **in real time**, and is often **too big to store**.',
              'Analysts care about **how it changes**, not just current values.',
            ],
            example: 'Live stock prices or Twitter feeds.',
          },
          {
            sideHeading: 'Spatial versus Nonspatial',
            description:
              'Many fields have both **map data** and **non-map data**; tools must combine scientific (map) and information (chart) views with good **links** between them.',
          },
          {
            sideHeading: 'Nominal versus Ordinal',
            bullets: [
              'Visual properties (position, size, colour) are **numeric**, but much data is **text categories** (gene names, addresses).',
              'Patterns seen must be **real**, not created by the number mapping.',
              'Fixes: colours/symbols with **no natural order**, or numbering that keeps similar items close (similar cars → similar numbers).',
            ],
          },
          {
            sideHeading: 'Structured versus Unstructured',
            bullets: [
              '**Tables** = structured; **news articles** = unstructured; **e-mail** = semi-structured (fixed header + free-text body).',
              'Challenge: get useful information from the free text and use the structured parts to organize it.',
            ],
          },
          {
            sideHeading: 'Time',
            bullets: [
              'Time is a **special variable** — sometimes the thing shown changing, sometimes a **slider** the user controls.',
              '**Space + time** databases are growing.',
              'Open question: how to treat **time as just another variable** to find similar patterns over time.',
            ],
          },
          {
            sideHeading: 'Variable Quality',
            bullets: [
              'Real data is often **incomplete or unreliable** — broken sensors, unfilled forms, old information, typing errors.',
              'We need pictures that show this **uncertainty** so decision-makers know **how much to trust** the data.',
            ],
          },
        ],
      },
    ],
    keyTakeaway:
      'Seven data issues: **Scale, Static vs Dynamic, Spatial vs Nonspatial, Nominal vs Ordinal, Structured vs Unstructured, Time, Variable Quality** — one problem + one fix each.',
    selfCheck: {
      question: 'Why is e-mail called semi-structured?',
      answer: 'It has a structured part (sender, time, receiver) and an unstructured part (the free-text message).',
    },
  },
  {
    id: 'u5-issues-cognition-perception-reasoning',
    shortTitle: 'Issues of Cognition, Perception & Reasoning',
    unit: 'unit5',
    order: 15,
    title: '2. Issues of Cognition, Perception, and Reasoning',
    subtopicsCovered: ['Perception vs Cognition Research', 'Higher-Level Visual Tasks', 'Visualization for Learning', 'Supporting Memory', 'Measuring Cognitive Primitives'],
    summaryLine:
      'We know a lot about how people **see** (perception) but little about how they **think and reason** with pictures (cognition). Future work studies **problem solving, learning and memory**.',
    bullets: [
      'Visualization is built on **perception** research (choosing colour, size); very little uses **thinking and reasoning** research, except the **Gestalt laws** (how we group things).',
      'Goal: understand how people **solve problems** with interactive pictures, and design better tools from that.',
    ],
    subSections: [
      {
        heading: 'Research Directions',
        bullets: [
          { label: 'Bigger Tasks', text: 'Move from "find a cluster" to building a **mental model** of the whole situation, by combining small tasks.' },
          { label: 'Patterns of Change', text: 'See **how data changes** and how changes are **linked** to other changes.' },
          { label: 'Hypotheses', text: 'Help users **form, confirm or reject ideas** and make confident decisions.' },
          { label: 'Learning', text: 'People learn differently — **concrete vs abstract**, **step-by-step vs random**; tools should fit these styles.' },
          { label: 'Memory', text: 'Showing intermediate results works like **notes to yourself**, so you do not have to remember everything.' },
          { label: 'Measuring', text: 'Measuring what goes from **data → screen** is easy; from **screen → human brain** is hard.' },
        ],
      },
    ],
    keyTakeaway:
      'Perception is well studied; **thinking/reasoning** is not. Future work: **bigger tasks, change patterns, learning styles, memory support**, and measuring **screen → human** understanding.',
    selfCheck: {
      question: 'Which kind of transfer is hard to measure?',
      answer: 'From the screen to the human (how much people actually understand); data to screen is easy.',
    },
  },
  {
    id: 'u5-issues-system-design-evaluation',
    shortTitle: 'Issues of System Design & Evaluation',
    unit: 'unit5',
    order: 16,
    title: '3. Issues of System Design & 4. Issues of Evaluation',
    subtopicsCovered: ['Integrating Computational & Visual Analysis', 'New Interaction Paradigms', 'Expert-only Systems & Democratization', 'Toward a Science of Visualization', 'Evaluation'],
    summaryLine:
      'Tools must **combine computer analysis with visual analysis** smoothly, offer **better ways to interact**, and be usable by **non-experts**. **Evaluation** (testing) turns the field into a real science.',
    bullets: [],
    subSections: [
      {
        heading: '3. Issues of System Design',
        bullets: [
          { label: 'Combine Computing + Seeing', text: 'No tool yet **smoothly mixes** computer analysis (clustering, statistics) with visual analysis; each is better at different tasks.' },
          { label: 'Help Each Other', text: 'Pictures help choose **settings for algorithms**; algorithm results help choose **models**; both check how well the model fits.' },
          { label: 'Better Interaction', text: 'Interaction has improved **much more slowly** than hardware; we need ways to explore **causes** and **"what if"** questions, beyond just click and drag.' },
          { label: 'Not Just for Experts', text: 'Most tools need **experts**; as data becomes available to everyone, tools must be **easy and engaging**.' },
          { label: 'Not Yet a Science', text: 'Design still relies on **experience and rules of thumb**; automatic design needs **tasks, testing and measurements**.' },
        ],
      },
      {
        heading: '4. Issues of Evaluation',
        bullets: [
          'Early research rarely tested properly — just **showed pictures side by side** and gave an opinion.',
          'Now **formal tests** measure improvements and prove that visualization **really helps** analysis and decisions.',
          'Testing turns visualization from **guesswork into a science**, borrowing methods from **HCI and sociology**.',
        ],
      },
    ],
    keyTakeaway:
      'System design: **combine computing + seeing**, **better interaction**, **non-expert users**, **science + measurement**. Evaluation: from side-by-side opinions to **formal, measured testing** (HCI, sociology).',
    selfCheck: {
      question: 'Why are current interaction methods called a problem?',
      answer: 'They improved much more slowly than hardware and techniques, and are too low-level for big tasks like exploring causes or "what if" questions.',
    },
  },
  {
    id: 'u5-issues-hardware-applications',
    shortTitle: 'Issues of Hardware & Applications',
    unit: 'unit5',
    order: 17,
    title: '5. Issues of Hardware & 6. Issues of Applications',
    subtopicsCovered: ['Hand-held Displays', 'Display Walls', 'Immersive Environments', 'Graphical Processing Units', 'Interaction Devices', 'Depth-based Innovations', 'Breadth-based Innovations'],
    summaryLine:
      'New **hardware** (phones, giant screen walls, VR/AR, GPUs, new input devices) and new **applications** (deeper use in one field, wider use across many fields) shape the future of visualization.',
    bullets: [],
    subSections: [
      {
        heading: '5. Issues of Hardware',
        subGroups: [
          {
            sideHeading: '(a) Hand-held Displays',
            bullets: [
              'Phones, tablets and handheld games — a chance to show visualizations on **small screens**.',
              { label: 'Uses', text: 'Wiring diagrams for **technicians**, live info for **police/fire/medical teams** in emergencies, risk checks at **border crossings**.' },
              'Challenge: make good use of **limited screen space** and controls.',
            ],
          },
          {
            sideHeading: '(b) Display Walls',
            bullets: [
              'Huge multi-panel screens **10–30 feet** wide, used in **control rooms**.',
              'Copying a desktop layout is easy but wasteful; better to **redesign** so every view stays visible and users just **turn their head**.',
            ],
          },
          {
            sideHeading: '(c) Immersive Environments',
            bullets: [
              '**Virtual reality (VR)** and **augmented reality (AR)**; e.g., the **virtual wind tunnel** for studying airflow.',
              'Walk-throughs and fly-throughs in **architecture, medicine and aircraft design**.',
              'Must draw with **very little delay**; **Google Glass**-style AR opens new possibilities.',
            ],
          },
          {
            sideHeading: '(d) Graphical Processing Units (GPUs)',
            bullets: [
              'Graphics chips have grown **faster than normal CPUs**, driven by **gaming**.',
              'CPU programs must be **almost completely rewritten** to run on GPUs, but GPUs will be used more and more, even beyond graphics.',
            ],
          },
          {
            sideHeading: '(e) Interaction Devices',
            bullets: [
              '**Voice and sound**, **touch feedback** (e.g., training surgeons with force-feedback tools).',
              '**Game controllers** like the **Wii wand** for gestures, **head and eye trackers**, **touch tables**, even **brain control**.',
            ],
          },
        ],
      },
      {
        heading: '6. Issues of Applications',
        description: 'Advances often start in one field and spread. Research is either **deep** (one field) or **broad** (many fields).',
        subGroups: [
          {
            sideHeading: 'a) Depth-based Innovations',
            bullets: [
              'Designers must understand the **field and its tasks**, not just the data format.',
              'Field experts building tools alone often make **poor designs**, because they do not know visualization principles.',
              'The best tools come from **close teamwork** between field experts and visualization experts.',
            ],
          },
          {
            sideHeading: 'b) Breadth-based Innovations',
            bullets: [
              'Use visualization in **more areas** — pictures are replacing text in **weather, stock markets, health stats, calendars, social networks, org charts**.',
              'Find the right **pictures and interactions** for each new field.',
              'Convert data stuck in **odd or unstructured formats** into usable tables, automatically or semi-automatically.',
            ],
          },
        ],
      },
    ],
    keyTakeaway:
      'Hardware: **hand-helds, display walls, VR/AR, GPUs, new input devices**. Applications: **depth** (field expert + visualization expert teamwork) vs **breadth** (new fields, converting data).',
    selfCheck: {
      question: 'Why do field experts often build poor visualization tools on their own?',
      answer: 'They usually do not know how people perceive pictures or the range of visualization techniques that already exist.',
    },
  },
];
