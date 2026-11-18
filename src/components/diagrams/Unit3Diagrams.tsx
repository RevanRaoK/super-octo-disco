import React from 'react';
import { Frame, PALETTE, Txt } from './svgKit';

export function LineGraph1dSvg() {
  const data = [3, 5, 4, 7, 6, 9, 8, 11, 7, 6, 8, 12, 10, 9, 13];
  const min = 3;
  const max = 13;
  const X = (i: number) => 90 + (i * (780 - 90)) / (data.length - 1);
  const Y = (v: number) => 260 - ((v - min) * (260 - 60)) / (max - min);
  return (
    <svg viewBox="0 0 880 300" className="irs-svg" role="img" aria-label="Line graph of 1D data">
      <Frame w={880} h={300} title="Line Graph of a 1D Sequence (worldToScreenX / worldToScreenY)" />
      <line x1={90} y1={260} x2={790} y2={260} stroke="var(--line-strong)" />
      <line x1={90} y1={260} x2={90} y2={50} stroke="var(--line-strong)" />
      <polyline points={data.map((v, i) => `${X(i)},${Y(v)}`).join(' ')} fill="none" stroke="var(--c)" strokeWidth={2.5} />
      {data.map((v, i) => <circle key={i} cx={X(i)} cy={Y(v)} r={3.5} fill="var(--c)" />)}
      <Txt x={440} y={286} size={11}>Spatial axis (e.g., depth along drill hole) → index i</Txt>
      <Txt x={84} y={64} anchor="end" size={10} mono>dataMax</Txt>
      <Txt x={84} y={262} anchor="end" size={10} mono>dataMin</Txt>
    </svg>
  );
}

export function MetaballsSvg() {
  return (
    <svg viewBox="0 0 880 260" className="irs-svg" role="img" aria-label="Metaballs blending">
      <defs>
        <radialGradient id="mb-g">
          <stop offset="0%" stopColor="var(--c)" stopOpacity={0.9} />
          <stop offset="100%" stopColor="var(--c)" stopOpacity={0} />
        </radialGradient>
        <filter id="mb-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9" />
        </filter>
      </defs>
      <Frame w={880} h={260} title="Metaballs: Summed Influence Fields → Smooth Isosurface" />
      <circle cx={170} cy={140} r={70} fill="url(#mb-g)" />
      <circle cx={270} cy={140} r={70} fill="url(#mb-g)" />
      <circle cx={170} cy={140} r={4} fill="var(--fg)" />
      <circle cx={270} cy={140} r={4} fill="var(--fg)" />
      <Txt x={220} y={236} size={11}>Density fields b·e^(−a r²) around each particle</Txt>
      <Txt x={440} y={146} size={22} weight={800} color="var(--c-ink)">Σ →</Txt>
      <g filter="url(#mb-goo)">
        <circle cx={600} cy={140} r={46} fill={PALETTE[1]} />
        <circle cx={690} cy={140} r={46} fill={PALETTE[1]} />
      </g>
      <Txt x={645} y={236} size={11}>Isosurface of the summed field: one blended blob</Txt>
    </svg>
  );
}

export function MapProjectionsSvg() {
  return (
    <svg viewBox="0 0 900 270" className="irs-svg" role="img" aria-label="Cylindrical, planar and conic projections">
      <Frame w={900} h={270} title="Map Projections by Surface" />
      {[0, 1, 2].map((i) => {
        const cx = 150 + i * 300;
        const cy = 140;
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r={58} fill="var(--c-bg)" stroke="var(--c)" strokeWidth={1.5} />
            <ellipse cx={cx} cy={cy} rx={58} ry={16} fill="none" stroke="var(--c)" strokeOpacity={0.5} />
            <ellipse cx={cx} cy={cy} rx={22} ry={58} fill="none" stroke="var(--c)" strokeOpacity={0.5} />
            {i === 0 && (
              <g fill="none" stroke={PALETTE[2]} strokeWidth={2}>
                <line x1={cx - 58} y1={cy - 66} x2={cx - 58} y2={cy + 66} />
                <line x1={cx + 58} y1={cy - 66} x2={cx + 58} y2={cy + 66} />
                <ellipse cx={cx} cy={cy - 66} rx={58} ry={9} />
                <ellipse cx={cx} cy={cy + 66} rx={58} ry={9} />
              </g>
            )}
            {i === 1 && <path d={`M ${cx - 95} ${cy - 58} L ${cx + 95} ${cy - 58} L ${cx + 70} ${cy - 78} L ${cx - 70} ${cy - 78} Z`} fill={PALETTE[2]} fillOpacity={0.25} stroke={PALETTE[2]} strokeWidth={2} />}
            {i === 2 && (
              <g fill={PALETTE[2]} fillOpacity={0.15} stroke={PALETTE[2]} strokeWidth={2}>
                <path d={`M ${cx} ${cy - 105} L ${cx - 75} ${cy + 10} L ${cx + 75} ${cy + 10} Z`} />
              </g>
            )}
            <Txt x={cx} y={236} size={12.5} weight={800} color="var(--c-ink)">{['1. Cylindrical', '2. Planar (Azimuthal)', '3. Conic'][i]}</Txt>
            <Txt x={cx} y={254} size={10.5} color="var(--muted)">{['Whole world; usually conformal', 'Touches at one point; directions kept', 'Mid-latitudes (USA, Europe)'][i]}</Txt>
          </g>
        );
      })}
    </svg>
  );
}

export function PixelMapQuadtreeSvg() {
  const dense = Array.from({ length: 40 }).map((_, k) => [k % 8, Math.floor(k / 8)]);
  return (
    <svg viewBox="0 0 880 270" className="irs-svg" role="img" aria-label="Dot map vs PixelMap">
      <Frame w={880} h={270} title="Dot Map Overplotting vs PixelMap Repositioning" />
      <rect x={40} y={50} width={360} height={190} rx={8} fill="var(--bg)" stroke="var(--line)" />
      {dense.map(([a, b], k) => <circle key={k} cx={170 + a * 3 + (k % 3)} cy={130 + b * 3} r={6} fill="var(--c)" fillOpacity={0.35} />)}
      <circle cx={320} cy={90} r={6} fill="var(--c)" fillOpacity={0.35} />
      <circle cx={90} cy={210} r={6} fill="var(--c)" fillOpacity={0.35} />
      <Txt x={220} y={232} size={11}>Dot map: 40 events overlap in one city</Txt>
      <rect x={480} y={50} width={360} height={190} rx={8} fill="var(--bg)" stroke="var(--line)" />
      <line x1={660} y1={50} x2={660} y2={240} stroke="var(--line-strong)" strokeDasharray="4 3" />
      <line x1={480} y1={145} x2={840} y2={145} stroke="var(--line-strong)" strokeDasharray="4 3" />
      <line x1={570} y1={50} x2={570} y2={145} stroke="var(--line)" strokeDasharray="3 3" />
      <line x1={480} y1={97} x2={660} y2={97} stroke="var(--line)" strokeDasharray="3 3" />
      {dense.map(([a, b], k) => <rect key={k} x={584 + a * 9} y={104 + b * 9} width={8} height={8} fill={PALETTE[k % 3]} />)}
      <rect x={790} y={80} width={8} height={8} fill={PALETTE[1]} />
      <rect x={520} y={205} width={8} height={8} fill={PALETTE[1]} />
      <Txt x={660} y={232} size={11}>PixelMap: recursive quad split, every point visible</Txt>
    </svg>
  );
}

export function EdgeBundlingSvg() {
  const n = 12;
  const pos = Array.from({ length: n }).map((_, k) => {
    const a = (k / n) * Math.PI * 2 - Math.PI / 2;
    return [Math.cos(a), Math.sin(a)];
  });
  const group = (k: number) => Math.floor(k / 4);
  const hub = (g: number) => {
    const a = ((g * 4 + 1.5) / n) * Math.PI * 2 - Math.PI / 2;
    return [Math.cos(a) * 0.45, Math.sin(a) * 0.45];
  };
  const pairs = [[0, 5], [1, 6], [2, 5], [3, 7], [0, 9], [1, 10], [2, 8], [3, 11], [4, 9], [5, 10], [6, 11], [7, 8], [0, 2], [9, 11]];
  const R = 100;
  const panel = (cx: number, bundled: boolean) => (
    <g>
      {pairs.map(([a, b], k) => {
        const P = (v: number[]) => `${cx + v[0] * R} ${150 + v[1] * R}`;
        let d = `M ${P(pos[a])} L ${P(pos[b])}`;
        if (bundled) {
          const ga = group(a);
          const gb = group(b);
          d = ga === gb
            ? `M ${P(pos[a])} Q ${P(hub(ga).map((v) => v * 1.5))} ${P(pos[b])}`
            : `M ${P(pos[a])} C ${P(hub(ga))} ${P(hub(gb))} ${P(pos[b])}`;
        }
        return <path key={k} d={d} fill="none" stroke={PALETTE[group(a)]} strokeOpacity={0.75} strokeWidth={1.8} />;
      })}
      {pos.map(([x, y], k) => <circle key={k} cx={cx + x * R} cy={150 + y * R} r={6} fill={PALETTE[group(k)]} stroke="var(--fg)" />)}
    </g>
  );
  return (
    <svg viewBox="0 0 880 290" className="irs-svg" role="img" aria-label="Straight lines vs edge bundling">
      <Frame w={880} h={290} />
      {panel(220, false)}
      {panel(660, true)}
      <Txt x={220} y={276} size={11.5} weight={700}>Straight lines: cluttered</Txt>
      <Txt x={660} y={276} size={11.5} weight={700}>Hierarchical edge bundling (curves follow group hubs)</Txt>
    </svg>
  );
}

export function CartogramTypesSvg() {
  const titles = ['Original Map', 'Noncontiguous', 'Circular', 'Continuous'];
  const scale = [1, 1.4, 0.6, 0.9];
  return (
    <svg viewBox="0 0 900 250" className="irs-svg" role="img" aria-label="Cartogram types">
      <Frame w={900} h={250} title="Cartogram Variants (region area ∝ statistic)" />
      {titles.map((t, i) => {
        const ox = 30 + i * 215;
        return (
          <g key={t}>
            <rect x={ox} y={46} width={200} height={170} rx={8} fill="var(--bg)" stroke="var(--line)" />
            {i === 0 && (
              <g stroke="var(--fg)" strokeWidth={1.2}>
                {[0, 1, 2, 3].map((k) => <rect key={k} x={ox + 30 + (k % 2) * 70} y={70 + Math.floor(k / 2) * 65} width={70} height={65} fill={PALETTE[k]} fillOpacity={0.35} />)}
              </g>
            )}
            {i === 1 && [0, 1, 2, 3].map((k) => {
              const s = 52 * Math.sqrt(scale[k]);
              const cx = ox + 65 + (k % 2) * 70;
              const cy = 102 + Math.floor(k / 2) * 65;
              return <rect key={k} x={cx - s / 2} y={cy - s / 2} width={s} height={s} fill={PALETTE[k]} fillOpacity={0.45} stroke="var(--fg)" />;
            })}
            {i === 2 && [0, 1, 2, 3].map((k) => <circle key={k} cx={ox + 65 + (k % 2) * 70} cy={102 + Math.floor(k / 2) * 65} r={32 * Math.sqrt(scale[k])} fill={PALETTE[k]} fillOpacity={0.45} stroke="var(--fg)" />)}
            {i === 3 && (
              <g stroke="var(--fg)" strokeWidth={1.2}>
                <path d={`M ${ox + 30} 70 L ${ox + 85} 70 L ${ox + 92} 128 L ${ox + 30} 120 Z`} fill={PALETTE[0]} fillOpacity={0.35} />
                <path d={`M ${ox + 85} 70 L ${ox + 170} 70 L ${ox + 170} 140 L ${ox + 92} 128 Z`} fill={PALETTE[1]} fillOpacity={0.35} />
                <path d={`M ${ox + 30} 120 L ${ox + 92} 128 L ${ox + 110} 200 L ${ox + 30} 200 Z`} fill={PALETTE[2]} fillOpacity={0.35} />
                <path d={`M ${ox + 92} 128 L ${ox + 170} 140 L ${ox + 170} 200 L ${ox + 110} 200 Z`} fill={PALETTE[3]} fillOpacity={0.35} />
              </g>
            )}
            <Txt x={ox + 100} y={236} size={12} weight={800} color="var(--c-ink)">{t}</Txt>
          </g>
        );
      })}
    </svg>
  );
}
