import React from 'react';
import { DiagramId } from '@/types/course';
import { RichText } from '../RichText';
import {
  IrsWorkingStepsSvg,
  IrsDocSpaceSvg,
  IrsVocabDomainsSvg,
  IrsTotalSystemSvg,
  IrsFunctionalFlowSvg,
  IrsVsDbmsSvg,
  IrsSearchCapabilitiesSvg,
  IrsCapabilitiesTreeSvg,
} from './Unit1Diagrams';
import {
  IndexingProcessFlowSvg,
  IndexScopeVennSvg,
  BayesianTwoLevelSvg,
  MajorDataStructuresSvg,
  SuccessorTreeSvg,
  InvertedFileStructureSvg,
  NgramSlidingWindowSvg,
  PatBinaryTreeSvg,
  SignatureFileCodingSvg,
  XmlDomHypertextSvg,
  HmmNoisyChannelSvg,
} from './Unit2Diagrams';
import {
  AutoIndexDataflowSvg,
  StatisticalIndexingTreeSvg,
  ConceptLsiSvdSvg,
  ThesaurusKwocKwicSvg,
  ItemClusteringMatrixSvg,
  ClusterDendrogramSvg,
} from './Unit3Diagrams';
import {
  SearchBindingLevelsSvg,
  RelevanceFeedbackShiftSvg,
  SdiPushArchitectureSvg,
  GestaltPerceptionPrinciplesSvg,
  VisualizationTechnologiesSvg,
} from './Unit4Diagrams';
import {
  TextStreamingArchSvg,
  SoftwareTextSearchSvg,
  HardwareFdfGescanSvg,
  MultimediaRetrievalHubSvg,
  EvalRelevantLoopSvg,
  EvalOverlapVennSvg,
} from './Unit5Diagrams';

interface DiagramRendererProps {
  diagramId: DiagramId;
  caption?: string;
}

export function DiagramRenderer({ diagramId, caption }: DiagramRendererProps) {
  const renderSvg = () => {
    switch (diagramId) {
      case 'irs-working-steps':
        return <IrsWorkingStepsSvg />;
      case 'irs-doc-space':
        return <IrsDocSpaceSvg />;
      case 'irs-vocab-domains':
        return <IrsVocabDomainsSvg />;
      case 'irs-total-system':
        return <IrsTotalSystemSvg />;
      case 'irs-functional-flow':
        return <IrsFunctionalFlowSvg />;
      case 'irs-vs-dbms':
        return <IrsVsDbmsSvg />;
      case 'irs-search-capabilities':
        return <IrsSearchCapabilitiesSvg />;
      case 'irs-capabilities-tree':
        return <IrsCapabilitiesTreeSvg />;
      case 'indexing-process-flow':
        return <IndexingProcessFlowSvg />;
      case 'index-scope-venn':
        return <IndexScopeVennSvg />;
      case 'bayesian-two-level':
        return <BayesianTwoLevelSvg />;
      case 'major-data-structures':
        return <MajorDataStructuresSvg />;
      case 'successor-tree':
        return <SuccessorTreeSvg />;
      case 'inverted-file-structure':
        return <InvertedFileStructureSvg />;
      case 'ngram-sliding-window':
        return <NgramSlidingWindowSvg />;
      case 'pat-binary-tree':
        return <PatBinaryTreeSvg />;
      case 'signature-file-coding':
        return <SignatureFileCodingSvg />;
      case 'xml-dom-hypertext':
        return <XmlDomHypertextSvg />;
      case 'hmm-noisy-channel':
        return <HmmNoisyChannelSvg />;
      case 'auto-index-dataflow':
        return <AutoIndexDataflowSvg />;
      case 'statistical-indexing-tree':
        return <StatisticalIndexingTreeSvg />;
      case 'concept-lsi-svd':
        return <ConceptLsiSvdSvg />;
      case 'thesaurus-kwoc-kwic':
        return <ThesaurusKwocKwicSvg />;
      case 'item-clustering-matrix':
        return <ItemClusteringMatrixSvg />;
      case 'cluster-dendrogram':
        return <ClusterDendrogramSvg />;
      case 'search-binding-levels':
        return <SearchBindingLevelsSvg />;
      case 'relevance-feedback-shift':
        return <RelevanceFeedbackShiftSvg />;
      case 'sdi-push-architecture':
        return <SdiPushArchitectureSvg />;
      case 'gestalt-perception-principles':
        return <GestaltPerceptionPrinciplesSvg />;
      case 'visualization-technologies':
        return <VisualizationTechnologiesSvg />;
      case 'text-streaming-arch':
        return <TextStreamingArchSvg />;
      case 'software-text-search':
        return <SoftwareTextSearchSvg />;
      case 'hardware-fdf-gescan':
        return <HardwareFdfGescanSvg />;
      case 'multimedia-retrieval-hub':
        return <MultimediaRetrievalHubSvg />;
      case 'eval-relevant-loop':
        return <EvalRelevantLoopSvg />;
      case 'eval-overlap-venn':
        return <EvalOverlapVennSvg />;
      default:
        return null;
    }
  };

  return (
    <figure className="my-4 rounded-xl border border-[var(--line)] bg-[var(--bg)] p-3 irs-raised">
      {renderSvg()}
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs font-medium text-[var(--muted)]">
          <RichText text={caption} />
        </figcaption>
      )}
    </figure>
  );
}

