import React from 'react';
import { DiagramId } from '@/types/course';
import { RichText } from '../RichText';
import { ThreePipelinesSvg, ScatterPlotSvg } from './Unit1Diagrams';
import {
  VisualizationStagesSvg,
  EightVisualVariablesSvg,
  KeimTaxonomySvg,
  PerceptionThreeStageSvg,
} from './Unit2Diagrams';
import {
  LineGraph1dSvg,
  MetaballsSvg,
  MapProjectionsSvg,
  PixelMapQuadtreeSvg,
  EdgeBundlingSvg,
  CartogramTypesSvg,
} from './Unit3Diagrams';
import {
  ScatterplotMatrixSvg,
  ParallelCoordinatesSvg,
  DimensionalStackingSvg,
  TreemapSunburstSvg,
  AdjacencyMatrixSvg,
  ZipfLogLogSvg,
  ArcDiagramSvg,
  ThemeRiverSvg,
} from './Unit4Diagrams';
import {
  DistortionPipelineSvg,
  FisheyeLensSvg,
  PerspectiveWallSvg,
  EaseInOutSvg,
} from './Unit5Diagrams';

const DIAGRAMS: Record<DiagramId, React.ComponentType> = {
  'dvt-three-pipelines': ThreePipelinesSvg,
  'dvt-scatter-plot': ScatterPlotSvg,
  'dvt-visualization-stages': VisualizationStagesSvg,
  'dvt-eight-visual-variables': EightVisualVariablesSvg,
  'dvt-keim-taxonomy': KeimTaxonomySvg,
  'dvt-perception-three-stage': PerceptionThreeStageSvg,
  'dvt-line-graph-1d': LineGraph1dSvg,
  'dvt-metaballs': MetaballsSvg,
  'dvt-map-projections': MapProjectionsSvg,
  'dvt-pixelmap-quadtree': PixelMapQuadtreeSvg,
  'dvt-edge-bundling': EdgeBundlingSvg,
  'dvt-cartogram-types': CartogramTypesSvg,
  'dvt-scatterplot-matrix': ScatterplotMatrixSvg,
  'dvt-parallel-coordinates': ParallelCoordinatesSvg,
  'dvt-dimensional-stacking': DimensionalStackingSvg,
  'dvt-treemap-sunburst': TreemapSunburstSvg,
  'dvt-adjacency-matrix': AdjacencyMatrixSvg,
  'dvt-zipf-loglog': ZipfLogLogSvg,
  'dvt-arc-diagram': ArcDiagramSvg,
  'dvt-themeriver': ThemeRiverSvg,
  'dvt-distortion-pipeline': DistortionPipelineSvg,
  'dvt-fisheye-lens': FisheyeLensSvg,
  'dvt-perspective-wall': PerspectiveWallSvg,
  'dvt-ease-in-out': EaseInOutSvg,
};

interface DiagramRendererProps {
  diagramId: DiagramId;
  caption?: string;
}

export function DiagramRenderer({ diagramId, caption }: DiagramRendererProps) {
  const Svg = DIAGRAMS[diagramId];
  return (
    <figure className="my-4 rounded-xl border border-[var(--line)] bg-[var(--bg)] p-3 irs-raised">
      {Svg ? <Svg /> : null}
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs font-medium text-[var(--muted)]">
          <RichText text={caption} />
        </figcaption>
      )}
    </figure>
  );
}
