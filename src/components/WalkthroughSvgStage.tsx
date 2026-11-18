import React from 'react';
import { Frame, PALETTE, Txt } from './diagrams/svgKit';

interface WalkthroughSvgStageProps {
  svgStateKey: string;
}

/** Inline <svg> stage that updates at every step of the five DVT walkthrough decks. */
export function WalkthroughSvgStage({ svgStateKey }: WalkthroughSvgStageProps) {
  const [prefix, raw] = svgStateKey.split('-');
  const step = Number(raw);
  switch (prefix) {
    case 'sp':
      return <ScatterStep step={step} />;
    case 'np':
      return <NormalizeStep step={step} />;
    case 'mds':
      return <MdsStep step={step} />;
    case 'tf':
      return <TfIdfStep step={step} />;
    case 'fe':
      return <FisheyeStep step={step} />;
    default:
      return null;
  }
}

function StepPills({ labels, step, w = 880 }: { labels: string[]; step: number; w?: number }) {
  const pw = (w - 36 - (labels.length - 1) * 10) / labels.length;
  return (
    <g>
      {labels.map((l, i) => {
        const n = i + 1;
        const active = n === step;
        const done = n < step;
        const x = 18 + i * (pw + 10);
        return (
          <g key={l}>
            <rect x={x} y={14} width={pw} height={30} rx={8} fill={active ? 'var(--c-bg)' : done ? 'var(--ok-bg)' : 'var(--bg)'} stroke={active ? 'var(--c)' : done ? 'var(--ok)' : 'var(--line)'} strokeWidth={active ? 2 : 1.2} />
            <Txt x={x + pw / 2} y={34} size={11} weight={700} color={active ? 'var(--c-ink)' : done ? 'var(--ok)' : 'var(--muted)'}>{l}</Txt>
          </g>
        );
      })}
    </g>
  );
}

const TREES = [
  { x: 0, y: 0, r: 0.02, c: 0, n: 'T1' },
  { x: 0.333, y: 0.267, r: 0.035, c: 1, n: 'T2' },
  { x: 0.667, y: 0.467, r: 0.05, c: 1, n: 'T3' },
  { x: 1, y: 1, r: 0.08, c: 2, n: 'T4' },
];

function ScatterStep({ step }: { step: number }) {
  const X = (v: number) => 260 + v * 360;
  const Y = (v: number) => 205 - v * 140;
  return (
    <svg viewBox="0 0 880 225" className="irs-svg" role="img" aria-label={`Scatter plot step ${step}`}>
      <Frame w={880} h={225} />
      <StepPills labels={['Data table', 'Normalize x, y', 'Radius', 'Color', 'Circle()']} step={step} />
      <rect x={240} y={55} width={400} height={160} fill="none" stroke="var(--line-strong)" strokeDasharray="4 4" />
      <Txt x={232} y={212} anchor="end" size={10} mono>(0,0)</Txt>
      <Txt x={648} y={64} anchor="start" size={10} mono>(1,1)</Txt>
      {step >= 2 &&
        TREES.map((t) => {
          const r = step >= 3 ? 40 + t.r * 300 : 4;
          return (
            <g key={t.n}>
              <circle cx={X(t.x)} cy={Y(t.y)} r={step >= 3 ? r / 4 : r} fill={step >= 4 ? PALETTE[t.c] : 'var(--muted)'} fillOpacity={step >= 5 ? 0.8 : 0.45} stroke={step >= 4 ? PALETTE[t.c] : 'var(--muted)'} />
              <Txt x={X(t.x) + 20} y={Y(t.y) + 4} anchor="start" size={10.5} mono>{t.n}</Txt>
            </g>
          );
        })}
      {step === 1 && <Txt x={440} y={140} size={12.5} weight={700} color="var(--c-ink)">Unit square ready — records not yet placed</Txt>}
      {step === 5 && <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(1)} stroke="var(--hot)" strokeDasharray="6 5" />}
    </svg>
  );
}

const SERIES: Record<number, number[]> = {
  1: [12, 15, -999, 18, 30],
  2: [12, 15, 16.5, 18, 30],
  3: [0, 0.167, 0.25, 0.333, 1],
  4: [-1.02, -0.53, -0.29, -0.05, 1.89],
  5: [12, 14.63, 16.5, 20.63, 30],
};

function NormalizeStep({ step }: { step: number }) {
  const vals = SERIES[step];
  const shown = vals.map((v) => (v === -999 ? null : v));
  const nums = shown.filter((v): v is number => v !== null);
  const min = Math.min(...nums, 0);
  const max = Math.max(...nums);
  const Y = (v: number) => 200 - ((v - min) / (max - min || 1)) * 130;
  return (
    <svg viewBox="0 0 880 225" className="irs-svg" role="img" aria-label={`Preprocessing step ${step}`}>
      <Frame w={880} h={225} />
      <StepPills labels={['Metadata', 'Cleanse', 'Min–max', 'z-score', 'Smooth']} step={step} />
      <line x1={200} y1={Y(0)} x2={700} y2={Y(0)} stroke="var(--line-strong)" />
      {shown.map((v, i) => {
        const x = 240 + i * 105;
        if (v === null) {
          return (
            <g key={i}>
              <Txt x={x} y={140} size={22} weight={800} color="var(--bad)">?</Txt>
              <Txt x={x} y={215} size={10.5} mono color="var(--bad)">−999</Txt>
            </g>
          );
        }
        const top = Math.min(Y(v), Y(0));
        const h = Math.abs(Y(v) - Y(0));
        return (
          <g key={i}>
            <rect x={x - 22} y={top} width={44} height={Math.max(h, 1)} rx={4} fill={step === 2 && i === 2 ? 'var(--hot)' : 'var(--c)'} fillOpacity={0.7} />
            <Txt x={x} y={215} size={10.5} mono>{v}</Txt>
          </g>
        );
      })}
      {step === 5 && <polyline points={SERIES[2].map((v, i) => `${240 + i * 105},${Y(v)}`).join(' ')} fill="none" stroke="var(--muted)" strokeDasharray="4 4" />}
    </svg>
  );
}

function MdsStep({ step }: { step: number }) {
  const C = step >= 4 ? [-0.2, 1.3] : [0, 1];
  const P: Record<string, number[]> = { A: [0, 0], B: [1, 0], C };
  const X = (v: number) => 520 + v * 150;
  const Y = (v: number) => 210 - v * 120;
  return (
    <svg viewBox="0 0 880 230" className="irs-svg" role="img" aria-label={`MDS step ${step}`}>
      <Frame w={880} h={230} />
      <StepPills labels={['Ds', 'Initial L', 'Ls & stress', 'Shift', 'Terminate']} step={step} />
      <g>
        <Txt x={180} y={72} size={12} weight={800} color="var(--c-ink)">Original 3D (target distances)</Txt>
        {[['AB', '1.000'], ['AC', '1.414'], ['BC', '1.732']].map(([p, d], i) => (
          <Txt key={p} x={180} y={100 + i * 24} size={11.5} mono>{`${p} = ${d}`}</Txt>
        ))}
        {step >= 3 && (
          <Txt x={180} y={188} size={13} weight={800} color={step >= 5 ? 'var(--ok)' : 'var(--hot)'}>
            {step >= 5 ? 'S ≈ 0.043 < 0.05 ✓' : 'S ≈ 0.213'}
          </Txt>
        )}
      </g>
      {step >= 2 && (
        <g>
          {[['A', 'B'], ['A', 'C'], ['B', 'C']].map(([a, b]) => (
            <line key={a + b} x1={X(P[a][0])} y1={Y(P[a][1])} x2={X(P[b][0])} y2={Y(P[b][1])} stroke={step >= 3 && b === 'C' ? (step >= 5 ? 'var(--ok)' : 'var(--hot)') : 'var(--line-strong)'} strokeWidth={1.8} />
          ))}
          {Object.entries(P).map(([n, [x, y]]) => (
            <g key={n}>
              <circle cx={X(x)} cy={Y(y)} r={9} fill={PALETTE[n.charCodeAt(0) - 65]} />
              <Txt x={X(x) + 16} y={Y(y) + 4} anchor="start" size={12} weight={800}>{n}</Txt>
            </g>
          ))}
          {step === 4 && <line x1={X(0)} y1={Y(1)} x2={X(-0.2) + 4} y2={Y(1.3) + 6} stroke="var(--hot)" strokeWidth={2} strokeDasharray="3 3" />}
        </g>
      )}
    </svg>
  );
}

function TfIdfStep({ step }: { step: number }) {
  const tokens = ['The', 'visual', 'data', 'is', 'a', 'visual', 'map'];
  const stop = new Set(['The', 'is', 'a']);
  const weights = [
    { t: 'visual', tf: 2, idf: 0.602, w: 1.204 },
    { t: 'data', tf: 1, idf: 0, w: 0 },
    { t: 'map', tf: 1, idf: 0.301, w: 0.301 },
  ];
  return (
    <svg viewBox="0 0 880 225" className="irs-svg" role="img" aria-label={`TF-IDF step ${step}`}>
      <Frame w={880} h={225} />
      <StepPills labels={['Tokens', 'Count-Terms', 'Df', 'TF-IDF', 'Cosine']} step={step} />
      {step === 1 &&
        tokens.map((t, i) => (
          <g key={i} opacity={stop.has(t) ? 0.35 : 1}>
            <rect x={70 + i * 108} y={110} width={96} height={36} rx={8} fill={stop.has(t) ? 'var(--bad-bg)' : 'var(--c-bg)'} stroke={stop.has(t) ? 'var(--bad)' : 'var(--c)'} />
            <Txt x={118 + i * 108} y={133} size={12} weight={700} mono>{t}</Txt>
            {stop.has(t) && <line x1={76 + i * 108} y1={128} x2={160 + i * 108} y2={128} stroke="var(--bad)" strokeWidth={2} />}
          </g>
        ))}
      {step >= 2 &&
        weights.map((w, i) => {
          const val = step === 2 ? w.tf : step === 3 ? w.idf : w.w;
          const max = step === 2 ? 2 : step === 3 ? 0.602 : 1.204;
          const bw = (val / max) * 420;
          return (
            <g key={w.t}>
              <Txt x={190} y={88 + i * 44} anchor="end" size={12.5} weight={700} mono>{w.t}</Txt>
              <rect x={200} y={72 + i * 44} width={Math.max(bw, 2)} height={24} rx={5} fill={PALETTE[i]} fillOpacity={0.75} />
              <Txt x={210 + Math.max(bw, 2)} y={89 + i * 44} anchor="start" size={11.5} mono>{step === 2 ? `Tf = ${w.tf}` : step === 3 ? `idf = ${w.idf}` : `w = ${w.w}`}</Txt>
            </g>
          );
        })}
      {step === 5 && <Txt x={760} y={130} size={14} weight={800} color="var(--ok)">cos ≈ 0.976</Txt>}
    </svg>
  );
}

function FisheyeStep({ step }: { step: number }) {
  const cx = 440;
  const cy = 135;
  const scale = 0.8;
  const s = 100 / Math.log(11);
  const f = (r: number) => (r >= 100 ? r : s * Math.log(1 + 0.1 * r));
  const radii = [10, 25, 50, 100];
  return (
    <svg viewBox="0 0 880 230" className="irs-svg" role="img" aria-label={`Fisheye step ${step}`}>
      <Frame w={880} h={230} />
      <StepPills labels={['Parameters', 'Polar', 'New radius', 'Profile', 'Gaps']} step={step} />
      <circle cx={cx} cy={cy} r={100 * scale} fill="var(--c-bg)" stroke="var(--c)" strokeDasharray="5 4" />
      <circle cx={cx} cy={cy} r={3} fill="var(--fg)" />
      {step >= 4 &&
        radii.map((r) => (
          <g key={r}>
            <circle cx={cx} cy={cy} r={r * scale} fill="none" stroke="var(--muted)" strokeDasharray="2 3" />
            <circle cx={cx} cy={cy} r={f(r) * scale} fill="none" stroke="var(--hot)" />
          </g>
        ))}
      {step >= 2 && step <= 3 && (
        <g>
          <line x1={cx} y1={cy} x2={cx + 30 * scale} y2={cy - 40 * scale} stroke="var(--fg)" strokeDasharray="3 3" />
          <circle cx={cx + 30 * scale} cy={cy - 40 * scale} r={5} fill="var(--c)" />
          <Txt x={cx + 30 * scale + 10} y={cy - 40 * scale} anchor="start" size={10.5} mono>(30, 40), r = 50</Txt>
        </g>
      )}
      {step === 3 && (
        <g>
          <line x1={cx + 30 * scale} y1={cy - 40 * scale} x2={cx + 44.8 * scale} y2={cy - 59.8 * scale} stroke="var(--hot)" strokeWidth={2} />
          <circle cx={cx + 44.8 * scale} cy={cy - 59.8 * scale} r={5} fill="var(--hot)" />
          <Txt x={cx - 60} y={cy + 30} anchor="end" size={10.5} mono>r_new ≈ 74.7</Txt>
        </g>
      )}
      {step === 1 && <Txt x={cx} y={cy + 4} size={11} mono>r_l = 100, d = 0.1, s ≈ 41.70</Txt>}
      {step === 5 &&
        [0, 1, 2, 3, 4, 5].map((k) => (
          <rect key={k} x={cx - 36 + k * 13} y={cy - 6} width={8} height={12} fill={k % 2 ? 'var(--bad-bg)' : 'var(--c)'} stroke="var(--bad)" strokeWidth={k % 2 ? 1 : 0} />
        ))}
      {step === 4 && <Txt x={740} y={135} size={11}>gray = r_old, orange = r_new</Txt>}
      {step === 5 && <Txt x={740} y={135} size={11}>red cells = gaps → interpolate</Txt>}
    </svg>
  );
}
