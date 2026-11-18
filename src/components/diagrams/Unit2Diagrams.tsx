import React from 'react';
import { ArrowDefs, Box, FlowRow, Frame, PALETTE, Txt } from './svgKit';

export function VisualizationStagesSvg() {
  return (
    <svg viewBox="0 0 900 220" className="irs-svg" role="img" aria-label="Visualization stages">
      <ArrowDefs id="u2-st" />
      <Frame w={900} h={220} title="Visualization Stages" />
      <FlowRow y={60} labels={['Raw Data', 'Preprocessing & Transformation', 'Mapping for Visualization', 'Rendering Transformation', 'Image / User']} markerId="u2-st" x0={24} width={852} h={52} size={11} />
      {[0, 1, 2, 3].map((i) => {
        const w = (852 - 88) / 5;
        const x = 24 + (i + 1) * w + i * 22 + 11;
        return <circle key={i} cx={x} cy={70} r={6} fill="var(--hot)" />;
      })}
      <rect x={160} y={140} width={580} height={56} rx={10} fill="var(--hot-bg)" stroke="var(--hot)" strokeDasharray="5 4" />
      <Txt x={450} y={163} size={12} weight={800} color="var(--hot)">User interaction can occur at any node or link (●)</Txt>
      <Txt x={450} y={184} size={11}>Each link is a many-to-many mapping (multiple views, mappings and renderings)</Txt>
    </svg>
  );
}

export function EightVisualVariablesSvg() {
  const cells = ['1. Position', '2. Mark (Shape)', '3. Size', '4. Brightness', '5. Color', '6. Orientation', '7. Texture', '8. Motion'];
  return (
    <svg viewBox="0 0 900 300" className="irs-svg" role="img" aria-label="Eight visual variables">
      <defs>
        <pattern id="vv-tex1" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M0 8 L8 0" stroke="var(--c)" strokeWidth="1.5" /></pattern>
        <pattern id="vv-tex2" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="4" cy="4" r="1.6" fill="var(--c)" /></pattern>
        <pattern id="vv-tex3" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M0 4 H8 M4 0 V8" stroke="var(--c)" strokeWidth="1.2" /></pattern>
      </defs>
      <Frame w={900} h={300} title="The Eight Visual Variables" />
      {cells.map((c, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        const x = 24 + col * 214;
        const y = 46 + row * 124;
        const cx = x + 100;
        const cy = y + 62;
        return (
          <g key={c}>
            <rect x={x} y={y} width={200} height={112} rx={10} fill="var(--bg)" stroke="var(--line)" />
            <Txt x={cx} y={y + 20} size={11.5} weight={800} color="var(--c-ink)">{c}</Txt>
            {i === 0 && [[-50, 10], [-10, -12], [30, 18], [55, -8]].map(([dx, dy], k) => <circle key={k} cx={cx + dx} cy={cy + dy} r={7} fill="var(--c)" />)}
            {i === 1 && (
              <g fill="var(--c)">
                <circle cx={cx - 55} cy={cy + 5} r={10} />
                <rect x={cx - 28} y={cy - 5} width={20} height={20} />
                <path d={`M ${cx + 18} ${cy + 15} L ${cx + 30} ${cy - 7} L ${cx + 42} ${cy + 15} Z`} />
                <path d={`M ${cx + 55} ${cy - 6} h 6 v 8 h 8 v 6 h -8 v 8 h -6 v -8 h -8 v -6 h 8 Z`} />
              </g>
            )}
            {i === 2 && [4, 8, 13, 19].map((r, k) => <circle key={k} cx={cx - 60 + k * 38} cy={cy + 5} r={r} fill="var(--c)" />)}
            {i === 3 && [0.15, 0.4, 0.65, 0.95].map((o, k) => <rect key={k} x={cx - 70 + k * 36} y={cy - 10} width={28} height={28} fill="var(--fg)" fillOpacity={o} rx={4} />)}
            {i === 4 && PALETTE.slice(0, 4).map((p, k) => <rect key={k} x={cx - 70 + k * 36} y={cy - 10} width={28} height={28} fill={p} rx={4} />)}
            {i === 5 && [0, 45, 90, 135].map((a, k) => (
              <line key={k} x1={cx - 55 + k * 36} y1={cy + 18} x2={cx - 55 + k * 36} y2={cy - 12} stroke="var(--c)" strokeWidth={4} strokeLinecap="round" transform={`rotate(${a} ${cx - 55 + k * 36} ${cy + 3})`} />
            ))}
            {i === 6 && ['url(#vv-tex1)', 'url(#vv-tex2)', 'url(#vv-tex3)'].map((f, k) => <rect key={k} x={cx - 60 + k * 44} y={cy - 12} width={34} height={32} fill={f} stroke="var(--c)" rx={4} />)}
            {i === 7 && (
              <g>
                {[0.2, 0.45, 0.75, 1].map((o, k) => <circle key={k} cx={cx - 60 + k * 30} cy={cy + 4} r={8} fill="var(--c)" fillOpacity={o} />)}
                <line x1={cx + 40} y1={cy + 4} x2={cx + 72} y2={cy + 4} stroke="var(--c)" strokeWidth={2} strokeDasharray="3 3" />
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function KeimTaxonomySvg() {
  const cols = [
    { t: 'Data Types (6)', items: ['1D data', '2D data', 'Multidimensional', 'Text & hypertext', 'Hierarchies & graphs', 'Algorithm & software'] },
    { t: 'Visualization Techniques (5)', items: ['Standard 2D/3D', 'Geometrically transformed', 'Iconic displays', 'Dense pixel displays', 'Stacked displays'] },
    { t: 'Interaction & Distortion (5)', items: ['Dynamic projection', 'Interactive filtering', 'Interactive zooming', 'Interactive distortion', 'Linking & brushing'] },
  ];
  return (
    <svg viewBox="0 0 900 290" className="irs-svg" role="img" aria-label="Keim classification">
      <Frame w={900} h={290} title="Keim (2002): Three Classification Dimensions" />
      {cols.map((c, i) => {
        const x = 24 + i * 288;
        return (
          <g key={c.t}>
            <rect x={x} y={44} width={276} height={232} rx={10} fill="var(--bg)" stroke={PALETTE[i]} strokeWidth={1.6} />
            <Txt x={x + 138} y={66} size={12.5} weight={800} color={PALETTE[i]}>{c.t}</Txt>
            {c.items.map((it, k) => <Box key={it} x={x + 14} y={78 + k * 32} w={248} h={26} label={it} stroke="var(--line-strong)" size={11} />)}
          </g>
        );
      })}
    </svg>
  );
}

export function PerceptionThreeStageSvg() {
  return (
    <svg viewBox="0 0 900 250" className="irs-svg" role="img" aria-label="Three-stage model of perception">
      <ArrowDefs id="u2-pp" />
      <Frame w={900} h={250} title="A Three-Stage Model of Perception" />
      <rect x={24} y={50} width={270} height={180} rx={10} fill="var(--bg)" stroke={PALETTE[0]} strokeWidth={1.6} />
      <Txt x={159} y={72} size={12.5} weight={800} color={PALETTE[0]}>Stage 1: Features</Txt>
      {Array.from({ length: 24 }).map((_, k) => {
        const x = 48 + (k % 8) * 30;
        const y = 92 + Math.floor(k / 8) * 30;
        return <line key={k} x1={x} y1={y} x2={x + 12} y2={y + (k % 3 === 0 ? 12 : -2)} stroke={PALETTE[k % 4]} strokeWidth={3} strokeLinecap="round" />;
      })}
      <Txt x={159} y={200} size={10.5}>Rapid · parallel · bottom-up</Txt>
      <Txt x={159} y={216} size={10.5} color="var(--muted)">Iconic store (transitory)</Txt>
      <line x1={298} y1={140} x2={318} y2={140} stroke="var(--c)" strokeWidth={2} markerEnd="url(#u2-pp)" />
      <rect x={322} y={50} width={270} height={180} rx={10} fill="var(--bg)" stroke={PALETTE[1]} strokeWidth={1.6} />
      <Txt x={457} y={72} size={12.5} weight={800} color={PALETTE[1]}>Stage 2: Patterns</Txt>
      <path d="M350 160 C 390 90, 440 190, 480 110 S 560 120, 570 150" fill="none" stroke={PALETTE[1]} strokeWidth={3} />
      <rect x={360} y={92} width={60} height={34} fill={PALETTE[2]} fillOpacity={0.4} rx={6} />
      <rect x={500} y={160} width={60} height={30} fill={PALETTE[3]} fillOpacity={0.4} rx={6} />
      <Txt x={457} y={200} size={10.5}>Slow · serial · contours, regions</Txt>
      <Txt x={457} y={216} size={10.5} color="var(--muted)">Working + long-term memory</Txt>
      <line x1={596} y1={140} x2={616} y2={140} stroke="var(--c)" strokeWidth={2} markerEnd="url(#u2-pp)" />
      <rect x={620} y={50} width={256} height={180} rx={10} fill="var(--bg)" stroke={PALETTE[3]} strokeWidth={1.6} />
      <Txt x={748} y={72} size={12.5} weight={800} color={PALETTE[3]}>Stage 3: Goal-Directed</Txt>
      {[0, 1, 2].map((k) => <rect key={k} x={660 + k * 62} y={100} width={48} height={48} rx={8} fill="var(--c-bg)" stroke="var(--c)" />)}
      <Txt x={748} y={170} size={10.5}>Few objects in visual</Txt>
      <Txt x={748} y={185} size={10.5}>working memory</Txt>
      <Txt x={748} y={208} size={10.5} color="var(--muted)">Visual queries & search</Txt>
    </svg>
  );
}
