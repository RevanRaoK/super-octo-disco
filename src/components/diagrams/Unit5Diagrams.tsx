import React from 'react';
import { ArrowDefs, FlowRow, Frame, PALETTE, Txt } from './svgKit';

export function DistortionPipelineSvg() {
  return (
    <svg viewBox="0 0 900 230" className="irs-svg" role="img" aria-label="Distortion pipeline">
      <ArrowDefs id="u5-dp" />
      <Frame w={900} h={230} title="The Distortion Pipeline (each stage optional, user-controlled)" />
      <FlowRow y={56} labels={['Data Value Space', 'Data Structure Space', 'Attribute Space', 'Object Space', 'Screen Space (last)']} markerId="u5-dp" x0={24} width={852} h={48} size={11} />
      {['Focus', 'Extents', 'Transformation', 'Blender'].map((p, i) => (
        <g key={p}>
          <rect x={120 + i * 170} y={140} width={150} height={40} rx={20} fill="var(--c-bg)" stroke="var(--c)" />
          <Txt x={195 + i * 170} y={165} size={12} weight={800} color="var(--c-ink)">{p}</Txt>
        </g>
      ))}
      <Txt x={450} y={208} size={11} color="var(--muted)">Parameters required by every operator in every space</Txt>
    </svg>
  );
}

export function FisheyeLensSvg() {
  const cx = 440;
  const cy = 150;
  const rl = 110;
  const d = 0.05;
  const s = rl / Math.log(1 + d * rl);
  const map = (x: number, y: number) => {
    const dx = x - cx;
    const dy = y - cy;
    const r = Math.hypot(dx, dy);
    if (r >= rl || r === 0) return [x, y];
    const rn = s * Math.log(1 + d * r);
    return [cx + (dx / r) * rn, cy + (dy / r) * rn];
  };
  const lines: string[] = [];
  for (let g = 200; g <= 680; g += 20) {
    const v: string[] = [];
    const h: string[] = [];
    for (let k = 30; k <= 270; k += 4) {
      const [vx, vy] = map(g, k);
      v.push(`${vx},${vy}`);
    }
    for (let k = 200; k <= 680; k += 4) {
      const gy = 30 + ((g - 200) / 480) * 240;
      const [hx, hy] = map(k, gy);
      h.push(`${hx},${hy}`);
    }
    lines.push(v.join(' '), h.join(' '));
  }
  return (
    <svg viewBox="0 0 880 300" className="irs-svg" role="img" aria-label="Fisheye lens distortion">
      <Frame w={880} h={300} />
      {lines.map((p, k) => <polyline key={k} points={p} fill="none" stroke="var(--c)" strokeOpacity={0.6} strokeWidth={1} />)}
      <circle cx={cx} cy={cy} r={rl} fill="none" stroke="var(--hot)" strokeDasharray="5 4" strokeWidth={1.6} />
      <circle cx={cx} cy={cy} r={4} fill="var(--hot)" />
      <Txt x={110} y={140} size={11.5} weight={700}>Center (cx, cy)</Txt>
      <Txt x={110} y={158} size={11}>Lens radius r_l</Txt>
      <Txt x={110} y={176} size={11}>Deflection d</Txt>
      <Txt x={770} y={150} size={11} mono>r_new = s·log(1 + d·r_old)</Txt>
    </svg>
  );
}

export function PerspectiveWallSvg() {
  return (
    <svg viewBox="0 0 880 260" className="irs-svg" role="img" aria-label="Perspective wall">
      <Frame w={880} h={260} title="Perspective Wall" />
      <path d="M 120 90 L 300 60 L 300 220 L 120 190 Z" fill={PALETTE[1]} fillOpacity={0.3} stroke="var(--fg)" />
      <rect x={300} y={60} width={280} height={160} fill={PALETTE[0]} fillOpacity={0.35} stroke="var(--fg)" />
      <path d="M 580 60 L 760 90 L 760 190 L 580 220 Z" fill={PALETTE[1]} fillOpacity={0.3} stroke="var(--fg)" />
      {[0, 1, 2, 3, 4, 5].map((k) => <line key={k} x1={320 + k * 48} y1={80} x2={320 + k * 48} y2={200} stroke="var(--fg)" strokeOpacity={0.35} />)}
      {[0, 1, 2, 3].map((k) => <line key={`l${k}`} x1={140 + k * 40} y1={98 - k * 6} x2={140 + k * 40} y2={182 + k * 6} stroke="var(--fg)" strokeOpacity={0.3} />)}
      {[0, 1, 2, 3].map((k) => <line key={`r${k}`} x1={600 + k * 40} y1={64 + k * 7 + 4} x2={600 + k * 40} y2={216 - k * 7 - 4} stroke="var(--fg)" strokeOpacity={0.3} />)}
      <Txt x={440} y={244} size={11.5} weight={700}>Front wall: undistorted focus</Txt>
      <Txt x={210} y={244} size={11}>Side panel (foreshortened)</Txt>
      <Txt x={670} y={244} size={11}>Side panel (foreshortened)</Txt>
    </svg>
  );
}

export function EaseInOutSvg() {
  const N = 40;
  const lin = Array.from({ length: N + 1 }).map((_, i) => [i / N, i / N]);
  const ease = Array.from({ length: N + 1 }).map((_, i) => [i / N, (1 - Math.cos(Math.PI * (i / N))) / 2]);
  const plot = (ox: number, pts: number[][], title: string, color: string) => (
    <g>
      <line x1={ox} y1={240} x2={ox + 300} y2={240} stroke="var(--line-strong)" />
      <line x1={ox} y1={240} x2={ox} y2={50} stroke="var(--line-strong)" />
      <polyline points={pts.map(([t, s]) => `${ox + t * 300},${240 - s * 180}`).join(' ')} fill="none" stroke={color} strokeWidth={2.6} />
      <Txt x={ox + 150} y={262} size={11.5} weight={700}>{title}</Txt>
      <Txt x={ox + 290} y={254} size={10} color="var(--muted)">time</Txt>
      <Txt x={ox - 8} y={56} size={10} anchor="end" color="var(--muted)">pos</Txt>
    </g>
  );
  return (
    <svg viewBox="0 0 880 280" className="irs-svg" role="img" aria-label="Constant velocity vs ease-in ease-out">
      <Frame w={880} h={280} />
      {plot(90, lin, '(a) Constant velocity', PALETTE[1])}
      {plot(500, ease, '(b) Ease-in, ease-out', PALETTE[0])}
    </svg>
  );
}
