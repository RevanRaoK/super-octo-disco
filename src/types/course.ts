export type UnitId = 'unit1' | 'unit2' | 'unit3' | 'unit4' | 'unit5';

export type TabId = 'all' | UnitId | 'formulas' | 'walkthroughs';

export type DiagramId =
  | 'irs-working-steps'
  | 'irs-doc-space'
  | 'irs-vocab-domains'
  | 'irs-total-system'
  | 'irs-functional-flow'
  | 'irs-vs-dbms'
  | 'irs-search-capabilities'
  | 'irs-capabilities-tree'
  | 'indexing-process-flow'
  | 'index-scope-venn'
  | 'bayesian-two-level'
  | 'major-data-structures'
  | 'successor-tree'
  | 'inverted-file-structure'
  | 'ngram-sliding-window'
  | 'pat-binary-tree'
  | 'signature-file-coding'
  | 'xml-dom-hypertext'
  | 'hmm-noisy-channel'
  | 'auto-index-dataflow'
  | 'statistical-indexing-tree'
  | 'concept-lsi-svd'
  | 'thesaurus-kwoc-kwic'
  | 'item-clustering-matrix'
  | 'cluster-dendrogram'
  | 'search-binding-levels'
  | 'relevance-feedback-shift'
  | 'sdi-push-architecture'
  | 'gestalt-perception-principles'
  | 'visualization-technologies'
  | 'text-streaming-arch'
  | 'software-text-search'
  | 'hardware-fdf-gescan'
  | 'multimedia-retrieval-hub'
  | 'eval-relevant-loop'
  | 'eval-overlap-venn';

export type WalkthroughId =
  | 'inverted-stemming'
  | 'item-clustering-hac'
  | 'similarity-rocchio'
  | 'boyer-moore'
  | 'kmp-search';

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

export interface LessonSubGroup {
  sideHeading: string;
  bullets: string[];
  formulas?: FormulaBlock[];
  table?: TableBlock;
  diagramId?: DiagramId;
  diagramCaption?: string;
}

export interface LessonSubSection {
  heading: string;
  bullets: string[];
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
  bullets: string[];
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
