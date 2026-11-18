import React from 'react';
import { Frame, PALETTE, Txt } from './svgKit';

const IRIS = [
  [0.2, 0.6, 0.1, 0.1, 0], [0.25, 0.7, 0.12, 0.08, 0], [0.15, 0.55, 0.08, 0.1, 0], [0.3, 0.75, 0.15, 0.12, 0],
  [0.5, 0.35, 0.5, 0.45, 1], [0.55, 0.3, 0.55, 0.5, 1], [0.6, 0.4, 0.6, 0.55, 1], [0.45, 0.28, 0.48, 0.42, 1],
  [0.75, 0.45, 0.8, 0.85, 2], [0.85, 0.5, 0.9, 0.8, 2], [0.7, 0.38, 0.75, 0.9, 2], [0.9, 0.55, 0.95, 0.95, 2],
];
const DIMS = ['Sepal L', 'Sepal W', 'Petal L', 'Petal W'];

export function ScatterplotMatrixSvg() {
  const cell = 62;
  const x0 = 270;
  const y0 = 46;
  return (
    <svg viewBox="0 0 880 320" className="irs-svg" role="img" aria-label="Scatterplot matrix">
      <Frame w={880} h={320} />
      {DIMS.map((_, r) =>
        DIMS.map((__, c) => {
          const x = x0 + c * (cell + 6);
          const y = y0 + r * (cell + 6);
          return (
            <g key={`${r}-${c}`}>
              <rect x={x} y={y} width={cell} height={cell} fill={r === c ? 'var(--c-bg)' : 'var(--bg)'} stroke="var(--line)" />
              {r === c ? (
                <Txt x={x + cell / 2} y={y + cell / 2 + 4} size={10} weight={800} color="var(--c-ink)">{DIMS[r]}</Txt>
              ) : (
                IRIS.map((p, k) => <circle key={k} cx={x + 5 + p[c] * (cell - 10)} cy={y + cell - 5 - p[r] * (cell - 10)} r={2.6} fill={PALETTE[p[4]]} />)
              )}
            </g>
          );
        })
      )}
      <Txt x={150} y={140} size={12} weight={800} color="var(--c-ink)">N = 4 dimensions</Txt>
      <Txt x={150} y={160} size={11}>N² = 16 cells</Txt>
      <Txt x={150} y={180} size={11}>Symmetric about diagonal</Txt>
      <Txt x={730} y={140} size={11}>Each pair shown twice</Txt>
      <Txt x={730} y={160} size={11}>(rotated 90°)</Txt>
    </svg>
  );
}

export function ParallelCoordinatesSvg() {
  const ax = DIMS.map((_, i) => 140 + i * 200);
  return (
    <svg viewBox="0 0 880 290" className="irs-svg" role="img" aria-label="Parallel coordinates">
      <Frame w={880} h={290} />
      {IRIS.map((p, k) => (
        <polyline key={k} points={ax.map((x, i) => `${x},${250 - p[i] * 200}`).join(' ')} fill="none" stroke={PALETTE[p[4]]} strokeOpacity={0.75} strokeWidth={1.8} />
      ))}
      {ax.map((x, i) => (
        <g key={i}>
          <line x1={x} y1={40} x2={x} y2={252} stroke="var(--fg)" strokeWidth={2} />
          <Txt x={x} y={272} size={11.5} weight={700}>{DIMS[i]}</Txt>
        </g>
      ))}
    </svg>
  );
}

export function DimensionalStackingSvg() {
  const outer = 4;
  const inner = 3;
  const size = 220;
  const x0 = 330;
  const y0 = 40;
  const oc = size / outer;
  const ic = oc / inner;
  return (
    <svg viewBox="0 0 880 290" className="irs-svg" role="img" aria-label="Dimensional stacking">
      <Frame w={880} h={290} />
      {Array.from({ length: outer * inner }).map((_, r) =>
        Array.from({ length: outer * inner }).map((__, c) => {
          const v = (Math.sin(r * 0.7) + Math.cos(c * 0.5) + 2) / 4;
          return <rect key={`${r}-${c}`} x={x0 + c * ic} y={y0 + r * ic} width={ic} height={ic} fill="var(--c)" fillOpacity={0.15 + v * 0.75} />;
        })
      )}
      {Array.from({ length: outer + 1 }).map((_, k) => (
        <g key={k} stroke="var(--fg)" strokeWidth={2}>
          <line x1={x0 + k * oc} y1={y0} x2={x0 + k * oc} y2={y0 + size} />
          <line x1={x0} y1={y0 + k * oc} x2={x0 + size} y2={y0 + k * oc} />
        </g>
      ))}
      <Txt x={x0 + size / 2} y={y0 + size + 22} size={11.5}>Outer: d1 (cols) × d2 (rows) · Inner: d3 × d4</Txt>
      <Txt x={170} y={130} size={11.5} weight={700}>Odometer analogy:</Txt>
      <Txt x={170} y={150} size={11}>inner dims change fastest,</Txt>
      <Txt x={170} y={168} size={11}>outer dims slowest</Txt>
      <Txt x={720} y={140} size={11}>Cell shade = dependent variable</Txt>
    </svg>
  );
}

export function TreemapSunburstSvg() {
  const sun = [
    { a0: 0, a1: 0.5, r: 1, c: 0 }, { a0: 0.5, a1: 0.8, r: 1, c: 1 }, { a0: 0.8, a1: 1, r: 1, c: 2 },
    { a0: 0, a1: 0.3, r: 2, c: 0 }, { a0: 0.3, a1: 0.5, r: 2, c: 0 }, { a0: 0.5, a1: 0.65, r: 2, c: 1 }, { a0: 0.65, a1: 0.8, r: 2, c: 1 }, { a0: 0.8, a1: 1, r: 2, c: 2 },
  ];
  const arc = (a0: number, a1: number, r0: number, r1: number, cx: number, cy: number) => {
    const p = (a: number, r: number) => [cx + r * Math.cos(a * 2 * Math.PI - Math.PI / 2), cy + r * Math.sin(a * 2 * Math.PI - Math.PI / 2)];
    const large = a1 - a0 > 0.5 ? 1 : 0;
    const [x0, y0] = p(a0, r1);
    const [x1, y1] = p(a1, r1);
    const [x2, y2] = p(a1, r0);
    const [x3, y3] = p(a0, r0);
    return `M ${x0} ${y0} A ${r1} ${r1} 0 ${large} 1 ${x1} ${y1} L ${x2} ${y2} A ${r0} ${r0} 0 ${large} 0 ${x3} ${y3} Z`;
  };
  return (
    <svg viewBox="0 0 880 290" className="irs-svg" role="img" aria-label="Treemap and sunburst">
      <Frame w={880} h={290} />
      <g stroke="var(--surface)" strokeWidth={3}>
        <rect x={60} y={40} width={170} height={130} fill={PALETTE[0]} fillOpacity={0.75} />
        <rect x={60} y={170} width={170} height={90} fill={PALETTE[0]} fillOpacity={0.5} />
        <rect x={230} y={40} width={110} height={120} fill={PALETTE[1]} fillOpacity={0.75} />
        <rect x={230} y={160} width={110} height={100} fill={PALETTE[1]} fillOpacity={0.5} />
        <rect x={340} y={40} width={80} height={220} fill={PALETTE[2]} fillOpacity={0.7} />
      </g>
      <Txt x={240} y={280} size={11.5} weight={700}>Treemap: vertical slices, then horizontal</Txt>
      <circle cx={660} cy={150} r={30} fill="var(--fg)" fillOpacity={0.8} />
      <Txt x={660} y={155} size={11} weight={800} color="var(--surface)">root</Txt>
      {sun.map((s, k) => (
        <path key={k} d={arc(s.a0, s.a1, s.r === 1 ? 32 : 76, s.r === 1 ? 74 : 118, 660, 150)} fill={PALETTE[s.c]} fillOpacity={s.r === 1 ? 0.75 : 0.5} stroke="var(--surface)" strokeWidth={2} />
      ))}
      <Txt x={660} y={284} size={11.5} weight={700}>Sunburst: rings = levels</Txt>
    </svg>
  );
}

export function AdjacencyMatrixSvg() {
  const n = 8;
  const edges = new Set<string>();
  const cliques = [[0, 2, 4, 6], [1, 3, 5, 7]];
  cliques.forEach((cq) => cq.forEach((a) => cq.forEach((b) => a !== b && edges.add(`${a}-${b}`))));
  edges.add('6-1');
  edges.add('1-6');
  const orderA = [0, 1, 2, 3, 4, 5, 6, 7];
  const orderB = [0, 2, 4, 6, 1, 3, 5, 7];
  const labels = 'abcdefgh';
  const panel = (ox: number, order: number[], title: string) => (
    <g>
      {order.map((ri, r) =>
        order.map((ci, c) => (
          <rect key={`${r}-${c}`} x={ox + c * 22} y={60 + r * 22} width={20} height={20} rx={3} fill={edges.has(`${ri}-${ci}`) ? 'var(--c)' : 'var(--bg)'} stroke="var(--line)" />
        ))
      )}
      {order.map((ri, r) => (
        <g key={`l${r}`}>
          <Txt x={ox - 10} y={74 + r * 22} size={10.5} mono>{labels[ri]}</Txt>
          <Txt x={ox + 10 + r * 22} y={52} size={10.5} mono>{labels[ri]}</Txt>
        </g>
      ))}
      <Txt x={ox + (n * 22) / 2} y={258} size={11.5} weight={700}>{title}</Txt>
    </g>
  );
  return (
    <svg viewBox="0 0 880 280" className="irs-svg" role="img" aria-label="Adjacency matrix reordering">
      <Frame w={880} h={280} />
      {panel(150, orderA, 'Original order: structure hidden')}
      {panel(560, orderB, 'Reordered: two 4-node cliques')}
    </svg>
  );
}

export function ZipfLogLogSvg() {
  const X = (lr: number) => 100 + lr * 150;
  const Y = (lf: number) => 260 - lf * 50;
  const pts = Array.from({ length: 30 }).map((_, k) => {
    const lr = (k / 29) * 3.9;
    return [lr, 4 - lr + Math.sin(k) * 0.06];
  });
  return (
    <svg viewBox="0 0 880 300" className="irs-svg" role="img" aria-label="Zipf law log-log plot">
      <Frame w={880} h={300} title="Zipf’s Law on log–log axes" />
      <line x1={100} y1={260} x2={720} y2={260} stroke="var(--line-strong)" />
      <line x1={100} y1={260} x2={100} y2={44} stroke="var(--line-strong)" />
      <line x1={X(0)} y1={Y(4)} x2={X(4)} y2={Y(0)} stroke="var(--hot)" strokeDasharray="6 5" strokeWidth={1.6} />
      {pts.map(([lr, lf], k) => <circle key={k} cx={X(lr)} cy={Y(lf)} r={4} fill="var(--c)" />)}
      <Txt x={410} y={286} size={11}>log(rank)</Txt>
      <text x={60} y={150} fontSize={11} fontWeight={600} textAnchor="middle" transform="rotate(-90 60 150)">log(frequency)</text>
      <Txt x={760} y={110} size={12} weight={800} color="var(--hot)">slope = −1</Txt>
      <Txt x={760} y={130} size={11}>f ∝ 1 / r</Txt>
    </svg>
  );
}

export function ArcDiagramSvg() {
  const seq = 'ABCDABCDXYABCD'.split('');
  const X = (i: number) => 80 + i * 55;
  const arcs = [
    { a: 0, b: 4, len: 4 },
    { a: 4, b: 10, len: 4 },
    { a: 8, b: 9, len: 1 },
  ];
  return (
    <svg viewBox="0 0 880 250" className="irs-svg" role="img" aria-label="Arc diagram">
      <Frame w={880} h={250} />
      {arcs.map(({ a, b, len }, k) => {
        const x1 = X(a) + ((len - 1) * 55) / 2;
        const x2 = X(b) + ((len - 1) * 55) / 2;
        const r = (x2 - x1) / 2;
        return <path key={k} d={`M ${x1} 190 A ${r} ${r} 0 0 1 ${x2} 190`} fill="none" stroke={PALETTE[k]} strokeOpacity={0.6} strokeWidth={len * 6} />;
      })}
      {seq.map((ch, i) => (
        <g key={i}>
          <rect x={X(i) - 16} y={192} width={32} height={28} rx={6} fill="var(--bg)" stroke="var(--line-strong)" />
          <Txt x={X(i)} y={211} size={13} weight={800} mono>{ch}</Txt>
        </g>
      ))}
      <Txt x={440} y={36} size={11.5}>Thickness = length of repeated subsequence · Height = distance between repeats</Txt>
    </svg>
  );
}

export function ThemeRiverSvg() {
  const t = Array.from({ length: 11 }).map((_, i) => i);
  const themes = [
    t.map((i) => 18 + 12 * Math.sin(i * 0.6)),
    t.map((i) => 14 + 10 * Math.cos(i * 0.5)),
    t.map((i) => 6 + i * 2.6),
    t.map((i) => 24 - i * 1.5 + 6 * Math.sin(i)),
  ];
  const X = (i: number) => 60 + i * 76;
  const totals = t.map((i) => themes.reduce((s, th) => s + th[i], 0));
  let lower = t.map((i) => 150 - totals[i] * 1.1);
  const bands = themes.map((th) => {
    const upper = lower;
    const next = t.map((i) => upper[i] + th[i] * 2.2);
    const d = `M ${t.map((i) => `${X(i)} ${upper[i]}`).join(' L ')} L ${t.slice().reverse().map((i) => `${X(i)} ${next[i]}`).join(' L ')} Z`;
    lower = next;
    return d;
  });
  return (
    <svg viewBox="0 0 880 290" className="irs-svg" role="img" aria-label="ThemeRiver stream graph">
      <Frame w={880} h={290} />
      {bands.map((d, k) => <path key={k} d={d} fill={PALETTE[k]} fillOpacity={0.7} stroke="var(--surface)" strokeWidth={1} />)}
      <line x1={60} y1={270} x2={820} y2={270} stroke="var(--line-strong)" />
      <Txt x={440} y={284} size={11}>time →</Txt>
    </svg>
  );
}
