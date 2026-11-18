export type UnitId = 'unit1' | 'unit2' | 'unit3' | 'unit4' | 'unit5';

export type TabId = 'all' | UnitId | 'formulas' | 'walkthroughs';

export type DiagramId =
  | 'dvt-three-pipelines'
  | 'dvt-scatter-plot'
  | 'dvt-visualization-stages'
  | 'dvt-eight-visual-variables'
  | 'dvt-keim-taxonomy'
  | 'dvt-perception-three-stage'
  | 'dvt-line-graph-1d'
  | 'dvt-metaballs'
  | 'dvt-map-projections'
  | 'dvt-pixelmap-quadtree'
  | 'dvt-edge-bundling'
  | 'dvt-cartogram-types'
  | 'dvt-scatterplot-matrix'
  | 'dvt-parallel-coordinates'
  | 'dvt-dimensional-stacking'
  | 'dvt-treemap-sunburst'
  | 'dvt-adjacency-matrix'
  | 'dvt-zipf-loglog'
  | 'dvt-arc-diagram'
  | 'dvt-themeriver'
  | 'dvt-distortion-pipeline'
  | 'dvt-fisheye-lens'
  | 'dvt-perspective-wall'
  | 'dvt-ease-in-out';

export type WalkthroughId =
  | 'scatterplot-render'
  | 'normalization-preprocess'
  | 'mds-iteration'
  | 'tfidf-vector'
  | 'fisheye-distortion';

export interface TableBlock {
  caption?: string;
  headers: string[];
  rows: string[][];
  highlightRows?: number[];
  prunedRows?: number[];
}

export interface FormulaBlock {
  label: string;
  /** Valid LaTeX expression rendered via KaTeX in Word-equation display style */
  tex: string;
  /** Variable breakdown or intuition note (supports $inline math$ and **bold**) */
  note?: string;
}

export interface StructuredBullet {
  /** Optional side-heading / lead-in label shown prominently at the start of the bullet */
  label?: string;
  /** Main bullet text (supports RichText **bold**, $math$, and `code`) */
  text: string;
  /** Optional Example line(s) rendered cleanly underneath the bullet */
  example?: string | string[];
  /** Nested sub-bullets (Level 2+) */
  children?: BulletItem[];
}

export type BulletItem = string | StructuredBullet;

export interface LessonSubGroup {
  sideHeading: string;
  /** Concise explanation directly beneath the side heading (matches PDF layout) */
  description?: string;
  /** Optional Example line(s) rendered cleanly beneath the description */
  example?: string | string[];
  bullets?: BulletItem[];
  /** Recursive nested headings (Level 3) and nested-nested headings (Level 4+) */
  subGroups?: LessonSubGroup[];
  formulas?: FormulaBlock[];
  table?: TableBlock;
  diagramId?: DiagramId;
  diagramCaption?: string;
}

export interface LessonSubSection {
  heading: string;
  /** Concise intro paragraph directly beneath the section heading */
  description?: string;
  /** Optional Example line(s) */
  example?: string | string[];
  bullets?: BulletItem[];
  subGroups?: LessonSubGroup[];
  formulas?: FormulaBlock[];
  table?: TableBlock;
  diagramId?: DiagramId;
  diagramCaption?: string;
}

export interface SelfCheckItem {
  question: string;
  answer: string;
}

export interface LessonTopic {
  id: string;
  shortTitle?: string;
  unit: UnitId;
  order: number;
  title: string;
  subtopicsCovered: string[];
  summaryLine: string;
  bullets: BulletItem[];
  subSections?: LessonSubSection[];
  formulas?: FormulaBlock[];
  table?: TableBlock;
  secondaryTable?: TableBlock;
  diagramId?: DiagramId;
  diagramCaption?: string;
  secondaryDiagramId?: DiagramId;
  secondaryDiagramCaption?: string;
  walkthroughLinkId?: WalkthroughId;
  keyTakeaway: string;
  selfCheck?: SelfCheckItem;
}

export interface UnitMeta {
  id: UnitId;
  shortLabel: string;
  roman: string;
  title: string;
  subtitle: string;
  topicCount: number;
  colorVar: string;
}

export interface WalkthroughSlide {
  stepNumber: number;
  pillLabel: string;
  title: string;
  bullets: string[];
  formulaTex?: string;
  table?: TableBlock;
  svgStateKey: string;
}

export interface WalkthroughDeck {
  id: WalkthroughId;
  unit: UnitId;
  title: string;
  subtitle: string;
  linkedTopicSlug: string;
  datasetSummary: string;
  slides: WalkthroughSlide[];
}
