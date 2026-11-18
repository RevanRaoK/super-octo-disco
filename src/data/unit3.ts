import { LessonTopic } from '@/types/course';

const SPATIAL_TOPICS: LessonTopic[] = [
  {
    id: 'u3-one-dimensional-data',
    shortTitle: 'One-Dimensional Data',
    unit: 'unit3',
    order: 1,
    title: '3.1 Visualization Techniques for Spatial Data & One-Dimensional Data',
    subtopicsCovered: [
      'Spatial Data Visualization (Scientific Visualization)',
      'Mapping Spatial Attributes to Screen',
      'One-Dimensional Data & Probes',
      'Line Graph vs Color Bar',
      'Draw-Line-Graph Pseudo-code',
      'worldToScreen Range Mapping',
    ],
    summaryLine:
      '**Spatial data** is data tied to a **place** (and sometimes a time). Because it already has a location, drawing it is natural: put the location on screen, then show the value with height or colour.',
    bullets: [
      { label: 'Spatial Data', text: 'Data that has a **location** (and maybe a time) attached. Visualizing it is also called **scientific visualization**.' },
      { label: 'Why It Is Easy', text: 'The location gives an **obvious way** to place things on screen, and our eyes are used to seeing real-world scenes.' },
      { label: 'Step 1', text: 'Decide which **location values** go to which **screen positions**. This may need **scaling, rotating, moving, shearing (slanting) or projecting**.' },
      { label: 'Step 2', text: 'Show the **other values** using **colour, texture, size or shape**.' },
    ],
    subSections: [
      {
        heading: 'One-Dimensional Data',
        bullets: [
          '1D spatial data comes from taking **readings while moving along a path**.',
          { label: 'Example', text: 'A **drill hole**: mineral content is recorded at each depth from the top.' },
          'Taking such readings through bigger 2D/3D data is called a **probe** (like poking a stick through it).',
          { label: 'Line Graph', text: 'Put the **position** on the x-axis and the **value** on the y-axis.' },
          { label: 'Color Bar', text: 'Put the position along a strip and show the value as the **colour** of each part.' },
          'Data must be **scaled** to fit the screen (pixels) or colour range. Some screen space is kept for **axes, labels and a legend**, so the algorithm needs the **limits of both data and screen**.',
        ],
        diagramId: 'dvt-line-graph-1d',
        diagramCaption: 'A line graph of a 1D sequence of data values.',
      },
      {
        heading: 'Draw-Line-Graph Pseudo-code',
        description:
          'dataMin and dataMax are the smallest and largest values, dataCount is how many points, and (xMin, yMin, xMax, yMax) is the screen box to draw in.',
        subGroups: [
          {
            sideHeading: '`Draw-Line-Graph(data, dataCount, xMin, xMax, yMin, yMax)`',
            bullets: [
              { label: 'Lines 1–2', text: '`dataMin ← computeMin(...)`, `dataMax ← computeMax(...)` — find the smallest and largest value.' },
              { label: 'Lines 3–4', text: '`xFrom ← xMin`, `yFrom ← worldToScreenY(data[0], ...)` — the starting point of the first line.' },
              { label: 'Line 5', text: '`for i ← 1 to dataCount` — go through the remaining points.' },
              { label: 'Lines 6–7', text: '`xTo ← worldToScreenX(i, ...)`, `yTo ← worldToScreenY(data[i], ...)` — convert the next point to screen position.' },
              { label: 'Line 8', text: '`drawLine(xFrom, yFrom, xTo, yTo)` — draw a line from the previous point to this one.' },
              { label: 'Line 9', text: '`xFrom ← xTo; yFrom ← yTo` — this point becomes the start of the next line.' },
            ],
          },
          {
            sideHeading: 'Helper Functions',
            bullets: [
              '`worldToScreenX(index, dataCount, xMin, xMax) = xMin + index × (xMax − xMin) / dataCount` — spreads the points evenly across the width.',
              '`worldToScreenY(value, dataMin, dataMax, yMin, yMax) = yMin + (value − dataMin) × (yMax − yMin) / (dataMax − dataMin)` — puts the value at the right height.',
              'Both just **shift and stretch** numbers from one range to another — used everywhere in graphics.',
              'Idea: a value that is **30% of the way** through the data range should be **30% of the way** across the screen range.',
            ],
          },
        ],
        formulas: [
          {
            label: 'Range-to-Range Mapping',
            tex: '\\dfrac{A_i - A_{\\min}}{A_{\\max} - A_{\\min}} = \\dfrac{B_i - B_{\\min}}{B_{\\max} - B_{\\min}}',
            note: '$A_i$ is a value in the data range; $B_i$ is the matching position in the screen range.',
          },
        ],
      },
    ],
    keyTakeaway:
      'Define spatial data visualization, give the **drill-hole probe** example, write **Draw-Line-Graph** with the two `worldToScreen` helpers, and end with the **range-mapping equation**.',
    selfCheck: {
      question: 'Map data value 30 from range [10, 50] to screen range [100, 300].',
      answer: '30 is halfway through [10, 50], so it goes halfway through [100, 300]: $100 + 20 \\times 200/40 = 200$.',
    },
  },
  {
    id: 'u3-two-dimensional-data',
    shortTitle: 'Two-Dimensional Data',
    unit: 'unit3',
    order: 2,
    title: 'Two-Dimensional Data',
    subtopicsCovered: [
      'Image',
      'Rubber Sheet',
      'Cityscape',
      'Scatterplot',
      'Map',
      'Contour / Isovalue Map',
      'Probing 2D Data: Histograms, Aggregations, Linear Probes',
    ],
    summaryLine:
      '2D spatial data (values spread over an area) is shown by putting the two location values on the screen’s x and y. This gives six kinds of pictures, and we can also **probe** it by looking at 1D slices or summaries.',
    bullets: [
      'Data with **two location values** is shown by putting them on the screen’s **x and y**.',
    ],
    subSections: [
      {
        heading: 'Six Kinds of Pictures',
        subGroups: [
          { sideHeading: '1. Image', description: 'Each location’s value becomes a **colour**, and the pixels in between are **filled in by guessing** (interpolation).', example: 'A temperature heat map.' },
          { sideHeading: '2. Rubber Sheet', description: 'Each value becomes a **height**, and the points are joined into triangles to form a **3D surface** — like a stretched rubber sheet.', example: 'A 3D terrain surface.' },
          { sideHeading: '3. Cityscape', description: '**3D boxes** stand on a flat ground; data controls their **height and colour**, so it looks like city buildings.' },
          { sideHeading: '4. Scatterplot', description: 'A **marker** at each location; data controls its **colour, shape or size**. Nothing is filled in between (no interpolation).' },
          {
            sideHeading: '5. Map',
            bullets: [
              'Used when data has **lines and areas** as well as points.',
              { label: 'Line Feature', text: 'A road or river — a chain of points joined by **line segments**.' },
              { label: 'Area Feature', text: 'A lake or a state — a **closed outline** where the first and last points are the same.' },
            ],
          },
          {
            sideHeading: '6. Contour (Isovalue) Map',
            bullets: [
              'Draws **boundary lines** for a smooth quantity like height or temperature.',
              '**Isovalue = "one value"**. A contour line separates points **above** that value from points **below** it.',
              'Made by checking every **2 × 2 square** of neighbouring values: if some corners are above and some below, a line crosses that square.',
            ],
            example: 'Height contour lines on a hill map.',
          },
        ],
      },
      {
        heading: 'Probing Two-Dimensional Data',
        description:
          'Instead of showing everything, we can show a **1D slice or summary** of the data and then use any 1D technique.',
        subGroups: [
          {
            sideHeading: 'Frequency Histograms',
            bullets: [
              'Count **how often** each value (or value range) appears and show the counts as a **bar graph**.',
              'Hard choices: **how many ranges** and **where to split** them. Bad choices hide important features.',
              'Just using equal-size ranges is **rarely good**; someone who knows the data should choose.',
            ],
          },
          {
            sideHeading: 'Row and Column Aggregations',
            bullets: [
              'Summarize each **row or column** with one number — **sum, average, median, standard deviation, max or min**.',
              'Helps find **where features start and end** and where values change a lot.',
              'Shown **next to** the 2D picture as colour bars, line plots or bar graphs.',
            ],
          },
          {
            sideHeading: 'Linear Probes',
            bullets: [
              'Like a **drill hole**: draw a line through the data and plot the values along it as a 1D graph.',
              'The user gives two points P1 and P2; points on the line come from the formula below.',
              'Values between grid points are found by **bilinear interpolation** (averaging the four nearest grid values).',
              'Longer lines get **more sample points**, so a line that only clips a corner gets fewer.',
            ],
            formulas: [
              {
                label: 'Points on the Probe Line',
                tex: 'P(t) = P_1 + t\\,(P_2 - P_1), \\qquad 0 \\le t \\le 1',
                note: '$t = 0$ gives $P_1$, $t = 1$ gives $P_2$, $t = 0.5$ gives the midpoint.',
              },
            ],
          },
        ],
      },
    ],
    keyTakeaway:
      'List the **six 2D pictures** (image, rubber sheet, cityscape, scatterplot, map, contour) with one line each, then the **three probing methods** (histogram, row/column aggregation, linear probe with $P(t) = P_1 + t(P_2 - P_1)$).',
    selfCheck: {
      question: 'What is the difference between an image and a scatterplot of 2D data?',
      answer: 'An image fills in colours between data points (interpolation); a scatterplot only draws markers at the data points.',
    },
  },
  {
    id: 'u3-three-dimensional-data',
    shortTitle: 'Three-Dimensional Data',
    unit: 'unit3',
    order: 3,
    title: 'Three-Dimensional Data',
    subtopicsCovered: [
      'Visualizing Explicit Surfaces',
      'Visualizing Volume Data (Voxels)',
      'Slicing, Isosurface, Direct Volume Rendering',
      'Forward Mapping vs Ray Casting',
      'Implicit Surfaces',
      'Metaballs / Blobby Objects & Influence Equation',
    ],
    summaryLine:
      '3D data is either a **surface** (like the skin of an object) or a **volume** (values filling a 3D space, like a body scan). We show it with **explicit surfaces**, **volume techniques**, or **implicit surfaces** like metaballs.',
    bullets: [
      '3D data can be **samples of something continuous** (temperature in a room) or an **object made of corners, edges and faces**.',
      'Real engineering data often has **both**, like **air flowing around a wing** or **stress inside a machine part**.',
    ],
    subSections: [
      {
        heading: '1. Visualizing Explicit Surfaces',
        description: 'An **explicit surface** is a surface whose points are **written out directly**. It is defined in one of two ways:',
        bullets: [
          { label: 'Way 1 — Lists', text: 'A list of **corner points**, a list of **edges** (which corners are joined), and a list of **faces** (which edges form each flat patch).' },
          { label: 'Way 2 — Formulas', text: '**Equations** that give x, y, z of surface points, plus a rule to join them into a grid. A **smaller step** gives a **smoother** surface.' },
        ],
      },
      {
        heading: '2. Visualizing Volume Data',
        bullets: [
          'A **voxel** (volume element) is to 3D what a **pixel** is to 2D — a tiny cube with a value.',
          'Volume data comes from **scanners** (CT/MRI) or **simulations** (fluid flow).',
          'Goal: show the **structure, patterns and odd spots** inside the volume.',
        ],
        subGroups: [
          {
            sideHeading: 'Three Ways to Show a Volume',
            bullets: [
              { label: 'Slicing', text: 'Cut the volume with a **flat plane** and show that 2D slice.', example: 'One slice of a CT scan.' },
              { label: 'Isosurface', text: 'Pick one value and draw the **surface where the data equals that value**.', example: 'The surface of the bones in a CT scan.' },
              { label: 'Direct Volume Rendering', text: 'Make the picture **straight from the voxels**, by sending rays through them or projecting each voxel onto the screen.' },
            ],
          },
          {
            sideHeading: 'Direct Volume Rendering in Detail',
            bullets: [
              'No 3D polygons are made; **each pixel is calculated directly** from the voxels.',
              'Voxel positions are first converted into **camera (viewing) coordinates**, just like in the graphics pipeline.',
              'The viewer sets the **view point**, the **view direction**, the **image width and height**, and (for perspective) the **camera distance**.',
              { label: 'Forward Mapping', text: 'Start from **each voxel**, project it onto the screen and see which pixels it affects.' },
              { label: 'Inverse Mapping (Ray Casting)', text: 'Start from **each pixel**, shoot a **ray** into the volume and combine the values it passes through.' },
            ],
          },
        ],
      },
      {
        heading: '3. Implicit Surfaces',
        subGroups: [
          {
            sideHeading: 'The Usual Method',
            description:
              'Graphics normally uses **formulas to get surface points** and joins them into a **mesh** of polygons. This is good for moving objects and computing **surface normals** (which way the surface faces).',
          },
          {
            sideHeading: 'Implicit Representation',
            bullets: [
              'The surface is defined as **all points where a function equals zero**, instead of listing points.',
              'Very good at **blending** shapes and **morphing** one shape into another.',
              'In visualization, it can show **sparse data**, the **area of influence** of each data point, and turn **clouds of points** into smooth surfaces.',
            ],
          },
          {
            sideHeading: 'Metaballs / Blobby Objects',
            bullets: [
              'A metaball is a **point with an invisible "field" around it** that is strongest at the centre and **fades with distance**.',
              'The visible surface is drawn where the field equals a chosen value — a **higher value** gives a surface **closer** to the point.',
              'Power: **add up** the fields of all metaballs, and nearby balls **melt together smoothly** like drops of liquid.',
            ],
            example: 'Two overlapping spheres merging into one blob; a bent grid of 25 spheres with one missing in the centre.',
            diagramId: 'dvt-metaballs',
            diagramCaption: 'Two metaballs: their fields add up and blend into one smooth surface.',
          },
          {
            sideHeading: 'Influence Equation',
            bullets: [
              '**Blinn** used a **bell-shaped (Gaussian) bump** for each point: height **b**, width controlled by **a**.',
              'To save time he used the **squared distance** (no square root needed).',
              'The total value at any spot = **sum of all points’ fields**.',
            ],
            formulas: [
              {
                label: 'Blinn Metaball Influence',
                tex: 'F(r) = b\\,e^{-a r^{2}}, \\qquad D(\\mathbf{p}) = \\sum_{k} b_k\\, e^{-a_k r_k^{2}}',
                note: '$r$ = distance from the particle; the surface is where the total $D(\\mathbf{p})$ equals the chosen value.',
              },
            ],
          },
        ],
      },
    ],
    keyTakeaway:
      'Three families: **explicit surfaces** (lists or formulas), **volume data** (slicing, isosurface, direct rendering → **forward mapping vs ray casting**), **implicit surfaces** (function = 0, **metaballs** with Blinn’s bell-shaped field, added together).',
    selfCheck: {
      question: 'What is the difference between forward mapping and ray casting?',
      answer: 'Forward mapping starts from each voxel and projects it onto the screen; ray casting starts from each pixel and shoots a ray through the volume.',
    },
  },
  {
    id: 'u3-dynamic-data',
    shortTitle: 'Dynamic Data',
    unit: 'unit3',
    order: 4,
    title: 'Dynamic Data — Flow Visualization',
    subtopicsCovered: [
      'Flow Visualization History',
      'Computational Fluid Dynamics (CFD)',
      'Variations in Flow Field Data (Static, Unsteady)',
      'Definitions: Pathline, Streakline, Timeline, Streamline, Vorticity',
      'Arrow Glyphs, Streamlines, Ribbons, Tubes, Streaklines',
      'Line Integral Convolution (LIC)',
    ],
    summaryLine:
      '**Flow visualization** shows how **liquids and gases move**. Computer simulations give a grid of **velocity arrows**, shown with **arrows, streamlines, ribbons, streaklines** and **LIC textures**.',
    bullets: [
      { label: 'Flow Visualization', text: 'Ways of showing how **liquids and gases move**.' },
      { label: 'History', text: 'Goes back to the **1400s**: **Leonardo da Vinci** sketched sand and wood shavings moving in flowing water.' },
      'Later, lab experiments improved with **controlled particles** and **photography**.',
    ],
    subSections: [
      {
        heading: 'Computational Fluid Dynamics (CFD)',
        bullets: [
          '**CFD** = using computers to **simulate** how fluids move.',
          'The result is a **2D or 3D grid of velocity vectors** (arrows showing speed and direction at each point).',
          'Goal: find **turbulence** (chaotic flow), **vortices** (swirls) and **saddle points** (where flows split).',
        ],
      },
      {
        heading: 'Variations in Flow Field Data',
        bullets: [
          { label: 'Static Field', text: 'One flow that **never changes**.' },
          { label: 'Time-Varying (Fixed Points)', text: 'Grid points stay put but their **arrows change** over time.' },
          { label: 'Unsteady', text: '**Both** the points and the arrows change — e.g., **spinning turbine blades**.' },
        ],
      },
      {
        heading: 'Definitions',
        table: {
          headers: ['Term', 'Simple Meaning'],
          rows: [
            ['Pathline', 'The path of ONE particle over time (like a long-exposure photo of one firefly).'],
            ['Streakline', 'Where all particles released from one spot are right now (like smoke from a chimney).'],
            ['Timeline', 'A batch of particles released together, seen at one moment (a line that bends as it flows).'],
            ['Streamline', 'A line that follows the flow direction at every point at one instant.'],
            ['Steady flow', 'Flow that never changes; then pathlines, streaklines and streamlines are the same.'],
            ['Particle advection', 'Calculating how particles move through the flow.'],
            ['Vorticity', 'How much the flow is spinning at each point (the "curl" of velocity).'],
          ],
        },
        formulas: [
          {
            label: 'Vorticity (amount of spin)',
            tex: '\\boldsymbol{\\omega} = \\nabla \\times \\mathbf{v}',
          },
        ],
      },
      {
        heading: 'Visualization Techniques',
        subGroups: [
          {
            sideHeading: '1. Show the Velocity Directly',
            bullets: [
              'Draw **arrow glyphs** (small arrows) for direction and speed, or show **speed alone** as colour/size.',
              { label: 'Example', text: 'A **storm cloud** picture with arrows showing wind direction and strength.' },
              '**Too many** arrows cover each other; **too few** may miss features.',
              'Users can change **arrow density**; newer research **places arrows automatically** where the flow is interesting.',
            ],
          },
          {
            sideHeading: '2. Streamlines, Stream-Ribbons and Stream-Tubes',
            bullets: [
              'The user picks **seed points**; from each, a line is traced that always follows the flow direction.',
              'Lines can be made into flat **ribbons** or round **tubes**; speed or **spin (vorticity)** can control their **colour, thickness or twist**.',
            ],
            example: 'Ribbons that twist more where the flow spins more.',
          },
          {
            sideHeading: '3. Streaklines',
            bullets: [
              'A **continuous stream of particles** released from fixed points flows through the field.',
              'Particles from the same source get the **same colour**, so you can follow them even when they spread apart.',
            ],
            example: 'Sparks rising from a campfire.',
          },
          {
            sideHeading: '4. Line Integral Convolution (LIC)',
            bullets: [
              'Made by **Cabral and Leedom (1993)**.',
              'Takes a **random noise image** and a **flow field** of the same size, and creates a **dense streaky texture** showing the flow everywhere.',
              'Each output pixel = **average of noise pixels along the streamline** passing through it, so streaks line up with the flow.',
              'From each pixel, a chain of pixels is followed **forward and backward** along the flow.',
            ],
          },
        ],
      },
    ],
    keyTakeaway:
      'Learn the **7 definitions** in simple words (pathline = one particle’s path, streakline = smoke from a chimney, streamline = follows flow now, steady flow = all three same, vorticity = spin) and the **4 techniques** (arrows, streamlines/ribbons/tubes, streaklines, **LIC by Cabral & Leedom**).',
    selfCheck: {
      question: 'When are pathlines, streaklines and streamlines the same?',
      answer: 'In steady flow — when the flow does not change over time.',
    },
  },
  {
    id: 'u3-combining-techniques',
    shortTitle: 'Combining Techniques',
    unit: 'unit3',
    order: 5,
    title: 'Combining Techniques',
    subtopicsCovered: [
      'Why Combine Techniques',
      'Slice Plus Isosurface',
      'Isosurface Plus Glyphs',
      'Rubber Sheet Plus Contour Lines and Color',
    ],
    summaryLine:
      'Combining two or more techniques in one picture gives the **strengths of each**, as long as they do not **hide each other**.',
    bullets: [
      'Each technique shows some things well and others badly; combined, you get **all their strengths** if **overlap is kept low**.',
      'Many problems need **several data sets at once**.',
      { label: 'Example', text: '**Weather forecasting** combines air and ground temperature, wind speed, humidity and more.' },
    ],
    subSections: [
      {
        heading: 'A. Slice Plus Isosurface',
        bullets: [
          { label: 'Isosurface Alone', text: 'Shows the **3D shape** for one value, but nothing about other values or how fast values change.' },
          { label: 'Slice Alone', text: 'Shows **full detail on one flat cut** — smooth areas, changing areas, and **nested layers** that an isosurface would hide.' },
          'Together you see both the **3D shape** and the **detail inside**.',
        ],
        subGroups: [
          {
            sideHeading: 'Design Tips',
            bullets: [
              'Let the user **change the isosurface value quickly**.',
              'Let the user **move and turn the slice** easily, and animate it through the volume.',
              'Let the user **move the camera** to view from any angle.',
              'Choose **colours carefully** — the isosurface colour should not appear in the slice’s colour map.',
              'Let the user **hide either part**, or fade between them with an **opacity slider**.',
            ],
          },
        ],
      },
      {
        heading: 'B. Isosurface Plus Glyphs',
        bullets: [
          'An isosurface shows shape but **not direction or change**.',
          '**Glyphs** (like arrows) show **how big and which way** things change — the gradient in still data, the flow in moving data.',
          'Arrows are placed **near the isosurface** (an interesting area) or separately.',
          'User controls: **isosurface value, arrow positions, view position and angle**.',
        ],
        subGroups: [
          {
            sideHeading: 'Glyph Controls',
            bullets: [
              'Change **how many** arrows are shown.',
              'Change **arrow size**.',
              'Change **arrow colour** to show extra data or repeat the wind speed.',
              'Place arrows automatically in **interesting regions**.',
            ],
          },
        ],
      },
      {
        heading: 'C. Rubber Sheet Plus Contour Lines and Color',
        bullets: [
          'Shows the **same data in several ways at once** (redundant mapping) to make it clearer.',
          { label: 'Rubber Sheet', text: 'Values become **height**, so peaks and valleys look like a **real landscape**.' },
          { label: '+ Colour', text: 'Colour by height makes **far-apart areas of the same height** easy to match.' },
          { label: '+ Contour Lines', text: 'Lines at fixed heights make **steepness** easy to see.' },
          'Each layer helps; letting users **turn layers on and off** helps them understand step by step.',
        ],
        example: 'Land height above and below sea level for the south-east United States.',
      },
    ],
    keyTakeaway:
      'Three combos: **Slice + Isosurface** (shape + inside detail; 5 design tips), **Isosurface + Glyphs** (shape + direction; 4 arrow controls), **Rubber Sheet + Contours + Colour** (same data shown three ways).',
    selfCheck: {
      question: 'What can a slice show that an isosurface cannot?',
      answer: 'Detailed values on a flat cut, including smooth and changing areas and nested layers; an isosurface shows only the outer surface for one value.',
    },
  },
  {
    id: 'u3-visualizing-spatial-data',
    shortTitle: 'Visualizing Spatial (Geospatial) Data',
    unit: 'unit3',
    order: 6,
    title: 'Part 2: Geospatial Data — 2.1 Visualizing Spatial Data',
    subtopicsCovered: [
      'Geospatial Data & Geo-visualization',
      'Definitions (USGS, MacEachren)',
      'Point, Line, Area and Surface Phenomena',
      'Map Types',
      'Interaction in Exploratory Geo-visualization',
      'Map Projections (by Property & by Surface)',
      'Visual Variables for Spatial Data',
      'London Cholera Aggregation Example',
    ],
    summaryLine:
      '**Geospatial data** is data with a **real-world location** (latitude, longitude). We show it by putting the location on the screen — that is, as a **map**.',
    bullets: [
      'Geospatial data describes things at a **specific place on Earth**.',
      { label: 'Where It Comes From', text: 'Card payments, phone calls, environmental records, census data.' },
      'Showing it visually is called **geo-visualization**.',
      'It is usually **readings collected across an area**, often samples of something continuous (like rainfall).',
      { label: 'Uses', text: 'Climate (temperature, rain, wind), pollution (CO₂), economics (unemployment, education), customer analysis, crime.' },
      'Basic method: put **longitude and latitude** on the screen’s x and y → a **map**.',
    ],
    subSections: [
      {
        heading: 'What Is a Map',
        bullets: [
          'A map is the world **reduced to points, lines and areas**; size, shape, colour, texture and orientation add more information.',
          { label: 'USGS Definition', text: 'A map is a set of **points, lines and areas**, each with a **location** (spatial attributes) and **other properties** (non-spatial attributes).' },
          { label: 'MacEachren Definition', text: 'Geo-visualization uses pictures to make **places and location problems visible**, using our strongest sense — **vision**.' },
        ],
      },
      {
        heading: 'Spatial Phenomena by Size',
        table: {
          headers: ['Type', 'Dimension', 'Stored as', 'Examples'],
          rows: [
            ['Point', '0D (no size)', 'One (longitude, latitude) + properties', 'Buildings, oil wells, cities'],
            ['Line', '1D (length, no width)', 'A chain of lon/lat points (not closed)', 'Roads, cables, borders'],
            ['Area', '2D (length + width)', 'Lon/lat points forming a closed outline', 'Lakes, parks, states'],
            ['Surface', '2.5D (length, width, height)', 'Lon, lat, height for each point', 'Mountains, terrain'],
          ],
        },
      },
      {
        heading: 'Map Types',
        description:
          'Map types depend on the data (categories or numbers; separate or continuous) and the shapes used (points, lines, areas, volumes).',
        bullets: [
          '**Symbol maps** — category data at points (e.g., icons for hospitals vs schools).',
          '**Dot maps** — numeric data at points.',
          '**Land use maps** — category data over areas (farm, forest, city).',
          '**Choropleth maps** — numeric data over areas (states shaded by population).',
          '**Line diagrams** — category or numeric data along lines.',
          '**Isoline maps** — numeric surface data as contour lines.',
          '**Surface maps** — numeric volume data as 3D surfaces.',
          {
            label: 'Same Data, Different Maps',
            text: 'Grouping dots by area turns a dot map into a **choropleth**; turning dot density into a surface gives an **isoline map**; resizing areas by the count gives a **cartogram**.',
          },
        ],
      },
      {
        heading: 'Interaction in Exploratory Geo-visualization',
        bullets: [
          'Unlike paper maps, users can **change the grouping and colours**, **ask questions** and **change the display** live.',
          'Systems **link several maps**, or link maps with **bar/line charts** and advanced views like **parallel coordinates**.',
        ],
      },
      {
        heading: 'Map Projections',
        bullets: [
          'A **projection** is a way to turn the **round Earth** into a **flat map**. Longitude $\\lambda$ goes from −180° to 180°, latitude $\\varphi$ from −90° to 90°.',
          'Flattening a ball **always distorts** something; each projection keeps one property correct and distorts others.',
        ],
        subGroups: [
          {
            sideHeading: 'By What They Keep Correct',
            bullets: [
              { label: 'Conformal', text: 'Keeps **local angles and shapes**, distorts **area**.' },
              { label: 'Equal-area', text: 'Keeps **area**, distorts **shape**.' },
              { label: 'Equidistant', text: 'Keeps true **distances** from certain points or lines.' },
              { label: 'Gnomonic', text: 'Shows **shortest routes** (great circles) as **straight lines** — good for navigation.' },
              { label: 'Azimuthal', text: 'Keeps **directions** from a centre point.' },
              { label: 'Retroazimuthal', text: 'Keeps the direction from **any point to one fixed place**.' },
            ],
          },
          {
            sideHeading: 'By the Surface Used',
            subGroups: [
              {
                sideHeading: '1. Cylindrical',
                bullets: [
                  'Earth is projected onto a **cylinder** wrapped around it, then unrolled. Shows the **whole world**.',
                  'Usually **conformal**; latitude and longitude lines are **straight and at right angles**.',
                  '**Pseudo-cylindrical**: the middle meridian and parallels are straight, other meridians curve.',
                ],
              },
              {
                sideHeading: '2. Planar (Azimuthal)',
                bullets: [
                  'Projected onto a **flat sheet touching the globe at one point** (the map centre).',
                  '**Directions from the centre** are correct.',
                ],
              },
              {
                sideHeading: '3. Conic',
                bullets: [
                  'Projected onto a **cone** placed over the globe; latitude lines become **circles**, longitude lines **straight lines** from the tip.',
                  'Good for **middle-latitude** areas like the **USA and Europe**.',
                ],
              },
            ],
          },
        ],
        diagramId: 'dvt-map-projections',
        diagramCaption: 'Cylindrical, planar (azimuthal) and conic projection surfaces.',
      },
      {
        heading: 'Visual Variables for Spatial Data',
        description:
          'Maps may give **specific facts** about places, **general patterns**, or **comparisons** between maps; the encoding must match that goal.',
        bullets: [
          { label: 'Size', text: 'Size of symbols or width of lines.' },
          { label: 'Shape', text: 'Shape of symbols or patterns.' },
          { label: 'Brightness', text: 'How light or dark symbols, lines or areas are.' },
          { label: 'Colour', text: 'Colour of symbols, lines or areas.' },
          { label: 'Orientation', text: 'Rotation of symbols or patterns.' },
          { label: 'Spacing (Texture)', text: 'How tightly a pattern is packed.' },
          { label: 'Perspective Height', text: 'Data shown as **3D height** of points, lines or areas.' },
          { label: 'Arrangement', text: 'Pattern inside symbols, dash/dot style of lines, regular vs random spread in areas.' },
          {
            label: 'London Cholera Example',
            text: 'The same cholera data looks **very different** when grouped into different area sizes — so the choice of areas changes the story.',
          },
        ],
      },
    ],
    keyTakeaway:
      'Write the **USGS and MacEachren** definitions, the **point/line/area/surface (0D/1D/2D/2.5D)** table, the **7 map types**, **6 projection properties + 3 projection surfaces**, and the **8 spatial visual variables**.',
    selfCheck: {
      question: 'Which projection draws the shortest routes on Earth as straight lines?',
      answer: 'Gnomonic projection — useful for navigation.',
    },
  },
  {
    id: 'u3-visualization-point-data',
    shortTitle: 'Visualization of Point Data',
    unit: 'unit3',
    order: 7,
    title: '2.2 Visualization of Point Data',
    subtopicsCovered: [
      'Discrete vs Continuous, Smooth vs Abrupt',
      'Dot Maps',
      'Symbol Scaling & Ebbinghaus Illusion',
      'Overplotting Problem',
      'PixelMaps',
    ],
    summaryLine:
      'Point data (events at exact locations) is shown with **dot maps**. In crowded areas dots **pile on top of each other**; **PixelMaps** fix this by moving dots to nearby free pixels.',
    bullets: [
      'Point data is a set of **separate locations**, but it may describe something **continuous** (temperature measured at stations).',
      { label: 'Discrete vs Continuous', text: 'Discrete = exists only at **certain spots**. Continuous = exists **everywhere**.' },
      { label: 'Smooth vs Abrupt', text: 'Smooth = changes **gradually**. Abrupt = changes **suddenly**.' },
    ],
    subSections: [
      {
        heading: 'Dot Maps',
        bullets: [
          'Put a **symbol or pixel** at each event’s location.',
          'A number can be shown by symbol **size or colour**; **circles** are most common.',
          { label: 'Size Problem', text: 'A correctly calculated size is **not always seen correctly** — how big a dot looks depends on the dots around it (**Ebbinghaus illusion**), so no single formula fixes it.' },
          'Maps show spatial relationships in a **compact, familiar** way.',
          { label: 'Overplotting', text: 'With lots of data, dots **pile up** in busy cities while empty areas stay blank, because real data is very **uneven**.' },
          { label: 'Typical Data', text: 'Card payments, phone calls, health statistics, crime, census.' },
          'If several maps use the **same style**, we can compare them to spot **links between variables**.',
        ],
        example: 'A USA dot map: every circle is one event, and even zoomed in, the cities are solid blobs.',
      },
      {
        heading: 'PixelMaps',
        bullets: [
          'Shows **every point** without grouping and **without overlap**, by **moving pixels** to nearby free spots.',
          'It **splits the data into four groups** for four parts of the screen, then splits each part again (recursively).',
          'If points do not fit in their part, the **part’s borders are adjusted**.',
          'A **quadtree** (a tree where each node splits into 4) manages this efficiently — so **all points stay visible**.',
          { label: 'Limitation', text: 'In very crowded areas, where a point ends up depends on the **order of points** in the file.' },
        ],
        example:
          'U.S. phone calls at four times in 10 minutes: calls rise from east to west as people wake up; dark spots over **Kansas City and Omaha** reveal night-time **call centres**.',
        diagramId: 'dvt-pixelmap-quadtree',
        diagramCaption: 'PixelMap: splitting into quarters moves overlapping points to nearby free pixels.',
      },
    ],
    keyTakeaway:
      'Compare **dot maps** (simple, but dots overlap; size looks wrong due to the Ebbinghaus illusion) with **PixelMaps** (no grouping, split into 4 repeatedly, quadtree, depends on point order). Give the **phone call** example.',
    selfCheck: {
      question: 'Why can no single formula make dot sizes look correct?',
      answer: 'How big a dot looks depends on the dots around it (Ebbinghaus illusion), not only on its real size.',
    },
  },
  {
    id: 'u3-visualization-line-data',
    shortTitle: 'Visualization of Line Data',
    unit: 'unit3',
    order: 8,
    title: '2.3 Visualization of Line Data',
    subtopicsCovered: [
      'Encoding Line Data',
      'Network Maps (Eick & Wills, NCSA, SeeNet, SWIFT-3D)',
      'Flow Maps (Stanford)',
      'Edge Bundling (Holten)',
    ],
    summaryLine:
      'Line data (roads, cables, flows) is drawn as **lines between locations**. Values are shown with **width, pattern and colour**, and clutter is reduced with **curved flow maps** and **edge bundling**.',
    bullets: [
      'Draw **line segments** between pairs of (latitude, longitude) points.',
      'Show values with line **width, pattern, colour or labels**; show the end points with **size, shape, colour or labels**.',
      'Lines can be **curved** to reduce clutter; the best choice depends on the task.',
    ],
    subSections: [
      {
        heading: '(a) Network Maps',
        description: 'Show **how things are connected** and help understand the network’s **structure and behaviour**.',
        bullets: [
          { label: 'Eick and Wills', text: 'Used grouping, hierarchy, node placement and linked views for networks with no natural layout; colour/shape for nodes, colour/width for links.' },
          { label: 'NCSA', text: 'Used **3D animation** to show Internet traffic moving through the backbone.' },
          { label: 'SeeNet', text: 'By Becker, Eick and Wilks; **interactive** maps plus a **link matrix** that treats every connection equally.' },
          { label: 'SWIFT-3D (AT&T)', text: 'Combines **charts, pixel overviews and interactive 3D network maps** with drag-and-drop searching.' },
        ],
      },
      {
        heading: '(b) Flow Maps and Edge Bundling',
        description: 'Reduce clutter by using **curved lines** instead of straight ones — once hand-drawn by map makers, now done by algorithms.',
        subGroups: [
          {
            sideHeading: 'Stanford Flow Maps',
            bullets: [
              'Use graph-layout methods that **minimize line crossings** while keeping places roughly where they are.',
              '**Group nearby places** (hierarchical clustering) and **merge flows** going the same way, like rivers joining.',
              'Much **cleaner** than other computer-made flow maps.',
            ],
            example: 'Flows of tourists in Berlin vs migration from California drawn by the Stanford system.',
          },
          {
            sideHeading: 'Edge Bundling (Danny Holten)',
            bullets: [
              'If the nodes belong to a **hierarchy** (groups within groups), lines are **bundled** along it using smooth **B-spline** curves.',
              'Lines that travel through the **top (root)** of the hierarchy **bend the most**; lines within one group bend only a little.',
              'Greatly reduces clutter; works on **maps, trees, circular trees and treemaps**.',
            ],
            example: 'IP network traffic from outside computers to inside ones — bundled vs straight lines.',
            diagramId: 'dvt-edge-bundling',
            diagramCaption: 'Straight lines (left) vs edge bundling (right) — bundling groups lines like cables.',
          },
        ],
      },
    ],
    keyTakeaway:
      'Network maps: name **Eick & Wills, NCSA, SeeNet, SWIFT-3D**. Clutter fixes: **Stanford flow maps** (merge flows, fewer crossings) and **Holten edge bundling** (B-spline bundles, root edges bend most).',
    selfCheck: {
      question: 'In edge bundling, which lines bend the most?',
      answer: 'Lines that pass through the root (top) of the hierarchy; lines inside one group bend only slightly.',
    },
  },
  {
    id: 'u3-visualization-area-data',
    shortTitle: 'Visualization of Area Data',
    unit: 'unit3',
    order: 9,
    title: '2.4 Visualization of Area Data',
    subtopicsCovered: [
      'Thematic Maps',
      'Choropleth Maps & Their Problem',
      'Dasymetric Maps',
      'Isarithmic Maps (Isometric, Isopleth)',
      'Cartograms (Noncontinuous, Noncontiguous, Circular, Continuous)',
    ],
    summaryLine:
      'Area data (values for regions like states) is shown with **thematic maps**: **choropleth** (shaded regions), **dasymetric**, **isarithmic** (contour lines) and **cartograms** (regions resized by the value).',
    bullets: [
      '**Thematic maps** show a theme (like population) over areas.',
      { label: 'Choropleth', text: 'Greek: **choro = area, pleth = value**. Each region is **shaded** by its value.' },
      { label: 'Dasymetric', text: 'Used when the value is **not spread evenly** inside a region; the areas are drawn by where the value really is.' },
      { label: 'Isarithmic', text: '**Contour lines** for smooth quantities like temperature or height.' },
      { label: 'Isometric vs Isopleth', text: 'Contours from **point measurements** = isometric. Contours from **region averages** (placed at region centres) = isopleth.' },
      'Isarithmic maps need **interpolation** (guessing between points) such as triangulation or inverse-distance weighting.',
      { label: 'Cartogram', text: 'Region **sizes are changed** to match a value, so the map looks stretched.' },
    ],
    subSections: [
      {
        heading: 'Choropleth Maps',
        bullets: [
          'Regions are drawn as **shaded closed shapes** (first point = last point), like states or counties.',
          'They show **how a value is spread** across a geography.',
          'Key choices: **normalizing** the data (e.g., per person) and the **colour/grey scale**.',
          {
            label: 'Main Problem',
            text: 'Big regions with **few people** dominate the picture, while small crowded regions (often the interesting ones) are **barely visible**.',
            example: 'U.S. census maps highlight large, empty states.',
          },
        ],
        example: '2008 U.S. election (Obama vs McCain) choropleth; photo heat map of Mainau Island; dasymetric population map of Beaverton Creek, Oregon.',
      },
      {
        heading: 'Cartograms',
        bullets: [
          'Fix the choropleth problem by **resizing regions** according to the value, so crowded places become big.',
          { label: 'Uses', text: 'Population, election results, disease spread.' },
        ],
        subGroups: [
          {
            sideHeading: '1. Noncontinuous Cartograms',
            bullets: [
              'Each region is **scaled inside its own outline** — exact area and shape, but regions **no longer touch** (topology lost).',
              'A region **cannot grow bigger than its original outline**, so small regions stay small.',
            ],
          },
          {
            sideHeading: '2. Noncontiguous Cartograms',
            bullets: [
              'Every region gets its **exact target size** with good shape, and may touch others without overlapping.',
              'But neighbours are no longer next to each other, so the **overall map shape is lost**.',
            ],
          },
          {
            sideHeading: '3. Circular Cartograms',
            bullets: [
              'Each region becomes a **circle** of the right size; the original shape is ignored.',
              'Area and neighbours are only roughly kept.',
            ],
          },
          {
            sideHeading: '4. Continuous Cartograms',
            bullets: [
              'Regions **stay connected** to their neighbours (topology kept), but area and shape are **approximate**.',
              'Making them is a hard **optimization** (balancing shape vs area).',
              'Hardest to make, but they **look most like the real map**.',
            ],
          },
        ],
        table: {
          caption: 'Cartogram Trade-offs',
          headers: ['Type', 'Correct Area?', 'Correct Shape?', 'Neighbours Kept?'],
          rows: [
            ['Noncontinuous', 'Yes (limited by outline)', 'Yes', 'No'],
            ['Noncontiguous', 'Yes', 'Mostly', 'No'],
            ['Circular', 'Roughly', 'No (circles)', 'Roughly'],
            ['Continuous', 'Roughly', 'Roughly', 'Yes'],
          ],
        },
        diagramId: 'dvt-cartogram-types',
        diagramCaption: 'Original map vs noncontiguous, circular and continuous cartograms.',
      },
    ],
    keyTakeaway:
      'Define **choropleth (choro = area, pleth = value)** and its problem (**big empty regions dominate**), distinguish **dasymetric, isometric, isopleth**, and draw the **cartogram table** (area / shape / neighbours).',
    selfCheck: {
      question: 'Which cartogram keeps every region touching its real neighbours?',
      answer: 'The continuous cartogram — at the cost of only approximately correct area and shape.',
    },
  },
  {
    id: 'u3-other-geospatial-issues',
    shortTitle: 'Other Issues in Geospatial Visualization',
    unit: 'unit3',
    order: 10,
    title: '2.5 Other Issues in Geospatial Data Visualization',
    subtopicsCovered: [
      'Map Generalization',
      'Simplify Points, Lines, Polygons',
      'Map Labeling',
      'Geographic Information Systems (GIS)',
      'Web Technologies & APIs',
    ],
    summaryLine:
      'Good maps also need **map generalization** (simplifying detail), **map labeling** (placing names well), and good **GIS** software.',
    bullets: [
      'Two map-making techniques are needed first: **map generalization** and **map labeling**.',
    ],
    subSections: [
      {
        heading: 'Map Generalization',
        bullets: [
          '**Selecting and simplifying** what is shown on a map.',
          'Used when making a **zoomed-out map** from a **detailed** one.',
          'Goal: important things stay **easy to see**; what to keep depends on the **task**.',
          'Being **visible and recognizable** matters more than keeping every detail.',
        ],
        subGroups: [
          {
            sideHeading: 'Typical Simplifications',
            bullets: [
              { label: 'Simplify Points', text: 'Remove or merge points that are unimportant or too close to see separately.' },
              { label: 'Simplify Lines', text: 'Remove small wiggles, turn double lines (a two-lane road) into one, remove lines that would touch.' },
              { label: 'Simplify Polygons', text: 'Smooth outlines while keeping the main shape; merge nearby small areas into one.' },
            ],
            example: 'A city map shows every building; a country map shows the city as one dot.',
          },
        ],
      },
      {
        heading: 'Map Labeling',
        bullets: [
          'Placing **text or symbol labels** near points, lines and areas — harder than it sounds.',
          'Methods differ in **quality** (how good the result looks) and **speed**.',
          'Most use **rules first**, then an **optimization** step: local search, greedy, simulated annealing, random placement or genetic algorithms.',
          { label: 'Software', text: '**Label-EZ** (MapText Inc.) and **Maplex** (ESRI).' },
        ],
      },
      {
        heading: 'Geographic Information Systems (GIS)',
        bullets: [
          'A **GIS** lets users **search** map data, **compare and edit** different map layers, and **present** results.',
          'Geo-visualization is **part of GIS**, and both improve each other.',
          { label: 'Web Era', text: 'Web tools (**Flex, AJAX, Google Maps API**) and free public data have produced many fast, interactive map tools.' },
          'These tools help the **public understand issues**, making maps engaging for many people.',
        ],
      },
    ],
    keyTakeaway:
      'Three issues: **generalization** (simplify points / lines / polygons), **labeling** (rules + optimization; Label-EZ, Maplex), **GIS** and web map APIs (Flex, AJAX, Google Maps API).',
    selfCheck: {
      question: 'What is map generalization and when is it used?',
      answer: 'Selecting and simplifying map content; it is used when making a less detailed, zoomed-out map from a detailed one.',
    },
  },
];

export const UNIT3_TOPICS: LessonTopic[] = SPATIAL_TOPICS;
