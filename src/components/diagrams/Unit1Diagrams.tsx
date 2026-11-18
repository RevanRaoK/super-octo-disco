import React from 'react';
import { ArrowDefs, FlowRow, Frame, PALETTE, Txt } from './svgKit';

export function ThreePipelinesSvg() {
  const rows = [
    { name: 'Computer Graphics Pipeline', labels: ['Modeling', 'Viewing', 'Clipping', 'Hidden Surface Removal', 'Projection', 'Rendering'] },
    { name: 'Visualization Pipeline', labels: ['Data Modeling', 'Data Selection', 'Data → Visual Mapping', 'Scene Parameters', 'Rendering'] },
    { name: 'Knowledge Discovery Pipeline', labels: ['Data', 'Integration / Cleaning / Selection', 'Data Mining', 'Pattern Evaluation', 'Visualization'] },
  ];
  return (
    <svg viewBox="0 0 900 330" className="irs-svg" role="img" aria-label="Graphics, visualization and knowledge discovery pipelines">
      <ArrowDefs id="u1-pipe" />
      <Frame w={900} h={330} title="Three Pipelines: Data → … → User" />
      {rows.map((r, i) => {
        const y = 56 + i * 90;
        return (
          <g key={r.name}>
            <Txt x={24} y={y + 4} anchor="start" size={12} weight={800} color={PALETTE[i]}>
              {r.name}
            </Txt>
            <FlowRow y={y + 14} labels={r.labels} markerId="u1-pipe" x0={24} width={852} h={44} size={10.5} />
          </g>
        );
      })}
    </svg>
  );
}

export function ScatterPlotSvg() {
  const pts = [
    [0.1, 0.15, 0.2, 0], [0.18, 0.22, 0.35, 0], [0.25, 0.3, 0.3, 1], [0.32, 0.38, 0.5, 1],
    [0.4, 0.42, 0.45, 1], [0.47, 0.55, 0.6, 2], [0.55, 0.58, 0.55, 2], [0.62, 0.7, 0.7, 2],
    [0.7, 0.68, 0.8, 3], [0.78, 0.82, 0.9, 3], [0.86, 0.85, 0.75, 3], [0.35, 0.28, 0.25, 0],
  ];
  const X = (v: number) => 90 + v * 500;
  const Y = (v: number) => 290 - v * 230;
  return (
    <svg viewBox="0 0 880 330" className="irs-svg" role="img" aria-label="Scatter plot of tree diameter vs height">
      <Frame w={880} h={330} title="ScatterPlot(xDim, yDim, cDim, rDim, rMin, rMax)" />
      <line x1={90} y1={290} x2={610} y2={290} stroke="var(--line-strong)" strokeWidth={1.5} />
      <line x1={90} y1={290} x2={90} y2={50} stroke="var(--line-strong)" strokeWidth={1.5} />
      <Txt x={350} y={316} size={11.5}>xDim → Diameter (independent)</Txt>
      <text x={40} y={170} fontSize={11.5} fontWeight={600} textAnchor="middle" transform="rotate(-90 40 170)">yDim → Height (dependent)</text>
      {pts.map(([x, y, r, c], i) => (
        <circle key={i} cx={X(x)} cy={Y(y)} r={5 + r * 12} fill={PALETTE[c]} fillOpacity={0.55} stroke={PALETTE[c]} strokeWidth={1.4} />
      ))}
      <line x1={X(0.05)} y1={Y(0.1)} x2={X(0.92)} y2={Y(0.9)} stroke="var(--hot)" strokeDasharray="6 5" strokeWidth={1.5} />
      <g>
        <rect x={640} y={60} width={220} height={220} rx={10} fill="var(--bg)" stroke="var(--line)" />
        <Txt x={750} y={84} size={12} weight={800} color="var(--c-ink)">Encoding</Txt>
        {[
          'Position x ← Normalize(i, xDim)',
          'Position y ← Normalize(i, yDim)',
          'Radius ← Normalize(i, rDim, rMin, rMax)',
          'Color ← MapColor(i, cDim)',
          'Draw ← Circle(x, y, r)',
        ].map((t, i) => (
          <Txt key={t} x={652} y={112 + i * 26} anchor="start" size={10.5} mono>{t}</Txt>
        ))}
        <Txt x={750} y={258} size={10.5} color="var(--hot)">Dashed: positive, strong, linear</Txt>
      </g>
    </svg>
  );
}
