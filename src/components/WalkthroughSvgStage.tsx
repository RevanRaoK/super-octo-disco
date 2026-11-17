import React from 'react';

interface WalkthroughSvgStageProps {
  svgStateKey: string;
}

/**
 * Dynamic dark-turquoise inline <svg> visuals updating at every step
 * of the 5 interactive IRS walkthrough decks.
 */
export function WalkthroughSvgStage({ svgStateKey }: WalkthroughSvgStageProps) {
  if (svgStateKey.startsWith('inv-')) {
    return <InvertedStepSvg step={Number(svgStateKey.split('-')[1])} />;
  }
  if (svgStateKey.startsWith('clus-')) {
    return <ClusteringStepSvg step={Number(svgStateKey.split('-')[1])} />;
  }
  if (svgStateKey.startsWith('sim-')) {
    return <SimilarityRocchioStepSvg step={Number(svgStateKey.split('-')[1])} />;
  }
  if (svgStateKey.startsWith('bm-')) {
    return <BoyerMooreStepSvg step={Number(svgStateKey.split('-')[1])} />;
  }
  if (svgStateKey.startsWith('kmp-')) {
    return <KmpStepSvg step={Number(svgStateKey.split('-')[1])} />;
  }
  return null;
}

function InvertedStepSvg({ step }: { step: number }) {
  const cols = [
    { n: 1, title: 'Raw -> Stopwords' },
    { n: 2, title: 'Porter Stemming' },
    { n: 3, title: 'Sorted Dictionary' },
    { n: 4, title: 'Inversion & Query' },
  ];
  return (
    <svg viewBox="0 0 880 215" className="irs-svg" role="img" aria-label={`Inverted file step ${step}`}>
      <rect x="4" y="4" width="872" height="207" rx="14" fill="var(--surface)" stroke="var(--line)" />
      {cols.map((c, idx) => {
        const active = c.n === step;
        const done = c.n < step;
        const x = 18 + idx * 215;
        return (
          <g key={c.n}>
            <rect x={x} y={14} width={200} height={34} rx={8} fill={active ? 'var(--c-bg)' : done ? 'var(--ok-bg)' : 'var(--bg)'} stroke={active ? 'var(--c)' : done ? 'var(--ok)' : 'var(--line)'} strokeWidth={active ? 2 : 1.2} />
            <text x={x + 100} y={36} textAnchor="middle" fontSize="11.5" fontWeight="700" style={{ fill: active ? 'var(--c-ink)' : done ? 'var(--ok)' : 'var(--muted)' }}>
              {c.title}
            </text>
          </g>
        );
      })}

      {step === 1 && (
        <g>
          <text x="440" y="78" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--c-ink)">
            Step 1: Tokenize Text &amp; Remove Non-Discriminating Stop Words
          </text>
          {[
            'DOC1: "the computer bit byte"  →  [computer, bit, byte]',
            'DOC2: "a memory and byte"     →  [memory, byte]',
            'DOC3: "computer bit & memory" →  [computer, bit, memory]',
            'DOC4: "the byte computer"     →  [byte, computer]',
          ].map((line, i) => (
            <text key={line} x="110" y={108 + i * 24} fontSize="12.5" className="svg-mono">{line}</text>
          ))}
        </g>
      )}
      {step === 2 && (
        <g>
          <text x="440" y="78" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--c-ink)">
            Step 2: Porter Stemmer Suffix Conflation Rules
          </text>
          {[
            { a: 'computers', b: 'computer (Step 1a: -s)', x: 35 },
            { a: 'bytes', b: 'byte (Step 1a: -s)', x: 245 },
            { a: 'memories', b: 'memori (Step 1a: -ies)', x: 455 },
            { a: 'bits', b: 'bit (Step 1a: -s)', x: 665 },
          ].map((it) => (
            <g key={it.a}>
              <rect x={it.x} y={96} width={185} height={92} rx={10} fill="var(--c-bg)" stroke="var(--c)" />
              <text x={it.x + 92} y={128} textAnchor="middle" fontSize="13" fontWeight="800" className="svg-mono">{it.a}</text>
              <text x={it.x + 92} y={148} textAnchor="middle" fontSize="14" fill="var(--c-ink)">↓</text>
              <text x={it.x + 92} y={170} textAnchor="middle" fontSize="11.5" fontWeight="700" className="svg-mono" fill="var(--c-ink)">{it.b}</text>
            </g>
          ))}
        </g>
      )}
      {step === 3 && (
        <g>
          <text x="440" y="78" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--c-ink)">
            Step 3: Alphabetized Vocabulary Dictionary With DF Counts
          </text>
          {[
            { t: 'bit', df: 'DF = 2', x: 50 },
            { t: 'byte', df: 'DF = 3', x: 250 },
            { t: 'computer', df: 'DF = 3', x: 450 },
            { t: 'memory', df: 'DF = 2', x: 650 },
          ].map((d) => (
            <g key={d.t}>
              <rect x={d.x} y={102} width={175} height={78} rx={10} fill="var(--bg)" stroke="var(--c)" strokeWidth="1.6" />
              <text x={d.x + 87} y={134} textAnchor="middle" fontSize="15" fontWeight="800" className="svg-mono" fill="var(--c-ink)">{d.t}</text>
              <text x={d.x + 87} y={160} textAnchor="middle" fontSize="12" className="svg-muted">{d.df}</text>
            </g>
          ))}
        </g>
      )}
      {step === 4 && (
        <g>
          <text x="440" y="78" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--c-ink)">
            Step 4: Boolean Query &quot;bit AND memory&quot; Intersects Inversion Lists → DOC #3
          </text>
          <rect x="65" y="102" width="240" height="78" rx="10" fill="var(--c-bg)" stroke="var(--c)" strokeWidth="1.8" />
          <text x="185" y="132" textAnchor="middle" fontSize="13" fontWeight="800" className="svg-mono">bit → [ 1,  3 ]</text>
          <text x="185" y="158" textAnchor="middle" fontSize="11" className="svg-muted">DF = 2</text>

          <text x="342" y="146" textAnchor="middle" fontSize="20" fontWeight="800" fill="var(--c-ink)">∩</text>

          <rect x="380" y="102" width="240" height="78" rx="10" fill="var(--c-bg)" stroke="var(--c)" strokeWidth="1.8" />
          <text x="500" y="132" textAnchor="middle" fontSize="13" fontWeight="800" className="svg-mono">memory → [ 2,  3 ]</text>
          <text x="500" y="158" textAnchor="middle" fontSize="11" className="svg-muted">DF = 2</text>

          <text x="655" y="146" textAnchor="middle" fontSize="18" fontWeight="800" fill="var(--ok)">=</text>
          <rect x="690" y="102" width="150" height="78" rx="10" fill="var(--ok-bg)" stroke="var(--ok)" strokeWidth="2" />
          <text x="765" y="145" textAnchor="middle" fontSize="15" fontWeight="800" fill="var(--ok)">DOC #3 ★</text>
        </g>
      )}
    </svg>
  );
}

function ClusteringStepSvg({ step }: { step: number }) {
  return (
    <svg viewBox="0 0 880 205" className="irs-svg" role="img" aria-label={`Clustering step ${step}`}>
      <rect x="4" y="4" width="872" height="197" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="440" y="30" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        {step === 1
          ? 'Step 1: 5×5 Similarity Matrix Values (Highlight Strongest Pair I2–I5 = 36)'
          : step === 2
            ? 'Step 2: Binary Matrix Cutoff (Values ≥ 10 → 1, Values < 10 → 0)'
            : 'Step 3: Maximal Cliques {I1, I2, I5} & {I2, I4, I5} + HAC Merge Order'}
      </text>

      {[
        { id: 'I1', x: 140, y: 120 },
        { id: 'I2', x: 340, y: 76 },
        { id: 'I3', x: 340, y: 168 },
        { id: 'I4', x: 560, y: 168 },
        { id: 'I5', x: 560, y: 76 },
      ].map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="22" fill="var(--c-bg)" stroke="var(--c)" strokeWidth="2" />
          <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize="13" fontWeight="800">{n.id}</text>
        </g>
      ))}

      {/* Draw edges surviving threshold >= 10 */}
      {step >= 2 && (
        <g>
          <line x1="162" y1="114" x2="318" y2="82" stroke="var(--c)" strokeWidth="2.2" />
          <line x1="162" y1="118" x2="538" y2="78" stroke="var(--c)" strokeWidth="2.2" />
          <line x1="362" y1="76" x2="538" y2="76" stroke="var(--ok)" strokeWidth="3.2" />
          <line x1="340" y1="98" x2="340" y2="146" stroke="var(--hot)" strokeWidth="2" />
          <line x1="360" y1="86" x2="540" y2="158" stroke="var(--c)" strokeWidth="1.8" />
          <line x1="560" y1="98" x2="560" y2="146" stroke="var(--c)" strokeWidth="2" />
        </g>
      )}
      {step === 1 && (
        <line x1="362" y1="76" x2="538" y2="76" stroke="var(--ok)" strokeWidth="3" strokeDasharray="4 3" />
      )}
      <text x="450" y="64" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="var(--ok)">36</text>
      <text x="242" y="88" textAnchor="middle" fontSize="11" fill="var(--c-ink)">11</text>
      <text x="322" y="128" textAnchor="middle" fontSize="11" fill="var(--hot)">12</text>
      <text x="580" y="128" textAnchor="middle" fontSize="11" fill="var(--c-ink)">11</text>
    </svg>
  );
}

function SimilarityRocchioStepSvg({ step }: { step: number }) {
  return (
    <svg viewBox="0 0 880 200" className="irs-svg" role="img" aria-label={`Similarity & Rocchio step ${step}`}>
      <rect x="4" y="4" width="872" height="192" rx="14" fill="var(--surface)" stroke="var(--line)" />
      {step === 1 && (
        <g>
          <text x="440" y="34" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
            Step 1: Term Overlap Across Binary Vectors (Query: Mexico = 1, oil = 1)
          </text>
          {[
            { d: 'DOC1', m: 'Mexico (✓), oil (✓), geog, reserve', dot: 'Dot = 2', c: 'var(--ok-bg)', st: 'var(--ok)', y: 54 },
            { d: 'DOC3', m: 'Mexico (✓), lakes, painter, subject', dot: 'Dot = 1', c: 'var(--c-bg)', st: 'var(--c)', y: 100 },
            { d: 'DOC2', m: 'American, geography (0 query overlap)', dot: 'Dot = 0', c: 'var(--bad-bg)', st: 'var(--bad)', y: 146 },
          ].map((r) => (
            <g key={r.d}>
              <rect x="44" y={r.y} width="790" height="36" rx="8" fill={r.c} stroke={r.st} />
              <text x="72" y={r.y + 23} fontSize="12.5" fontWeight="800">{r.d}</text>
              <text x="165" y={r.y + 23} fontSize="12">{r.m}</text>
              <text x="770" y={r.y + 23} textAnchor="end" fontSize="12.5" fontWeight="800" className="svg-mono">{r.dot}</text>
            </g>
          ))}
        </g>
      )}
      {step === 2 && (
        <g>
          <text x="440" y="34" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
            Step 2: Ranked Results for DOC1 (Normalized Length Eliminates Verbose Bias)
          </text>
          {[
            { name: 'Cosine(Q, DOC1)', val: '0.707', w: 420, y: 56 },
            { name: 'Dice(Q, DOC1)', val: '0.667', w: 396, y: 102 },
            { name: 'Jaccard(Q, DOC1)', val: '0.500', w: 298, y: 148 },
          ].map((b) => (
            <g key={b.name}>
              <text x="42" y={b.y + 22} fontSize="12.5" fontWeight="700">{b.name}</text>
              <rect x="210" y={b.y + 4} width="560" height="24" rx="6" fill="var(--surface-2)" />
              <rect x="210" y={b.y + 4} width={b.w} height="24" rx="6" fill="var(--c)" />
              <text x="795" y={b.y + 22} fontSize="13" fontWeight="800" className="svg-mono" fill="var(--c-ink)">{b.val}</text>
            </g>
          ))}
        </g>
      )}
      {step === 3 && (
        <g>
          <text x="440" y="34" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
            Step 3: Rocchio Vector Shift (Qo + DOC1 − DOC3) Amplifies Oil &amp; Reserve
          </text>
          <rect x="44" y="64" width="220" height="92" rx="10" fill="var(--bg)" stroke="var(--line-strong)" />
          <text x="154" y="98" textAnchor="middle" fontSize="13" fontWeight="700">Original Qo</text>
          <text x="154" y="122" textAnchor="middle" fontSize="11.5" className="svg-mono">(0,0,0,1,0,1,0,0)</text>

          <text x="315" y="116" textAnchor="middle" fontSize="22" fontWeight="800" fill="var(--c-ink)">→</text>

          <rect x="366" y="64" width="465" height="92" rx="10" fill="var(--ok-bg)" stroke="var(--ok)" strokeWidth="2" />
          <text x="598" y="96" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--ok)">Revised Query Qn = Qo + DOC1 − DOC3</text>
          <text x="598" y="124" textAnchor="middle" fontSize="12" className="svg-mono">(0, +1, -1, +1, -1, +2, +1, -1)</text>
        </g>
      )}
    </svg>
  );
}

function BoyerMooreStepSvg({ step }: { step: number }) {
  const txt = 'welcometoteammast'.split('');
  const pat = 'teammast'.split('');
  const offset = step === 2 ? 0 : step === 3 ? 6 : step === 4 ? 9 : 0;

  return (
    <svg viewBox="0 0 880 200" className="irs-svg" role="img" aria-label={`Boyer-Moore step ${step}`}>
      <rect x="4" y="4" width="872" height="192" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="440" y="28" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--c-ink)">
        {step === 1
          ? 'Bad-Match Table Computed: T=8, E=6, A=2, M=3, S=1, *=8'
          : step === 2
            ? 'Alignment 0: Compare Right-to-Left → P[6]="s" vs T[6]="e" Mismatch → Jump +6'
            : step === 3
              ? 'Alignment 6: Compare Right-to-Left → P[7]="t" vs T[13]="a" Mismatch → Jump +2'
              : 'Alignment 9: Right-to-Left Scan Matches All 8 Characters ("teammast") ★'}
      </text>

      {/* Text array row */}
      {txt.map((ch, i) => (
        <g key={i}>
          <rect x={44 + i * 46} y={48} width={42} height={38} rx={6} fill={step === 4 && i >= 9 ? 'var(--ok-bg)' : 'var(--bg)'} stroke={step === 4 && i >= 9 ? 'var(--ok)' : 'var(--line-strong)'} />
          <text x={65 + i * 46} y={72} textAnchor="middle" fontSize="14" fontWeight="700" className="svg-mono">{ch}</text>
          <text x={65 + i * 46} y={42} textAnchor="middle" fontSize="9.5" className="svg-muted svg-mono">{i}</text>
        </g>
      ))}

      {/* Pattern row shifted to offset */}
      {step >= 2 &&
        pat.map((ch, i) => {
          const isMismatch =
            (step === 2 && i === 6) || (step === 3 && i === 7);
          const isOk =
            (step === 2 && i === 7) || step === 4;
          return (
            <g key={i}>
              <rect
                x={44 + (offset + i) * 46}
                y={104}
                width={42}
                height={38}
                rx={6}
                fill={isMismatch ? 'var(--bad-bg)' : isOk ? 'var(--ok-bg)' : 'var(--c-bg)'}
                stroke={isMismatch ? 'var(--bad)' : isOk ? 'var(--ok)' : 'var(--c)'}
                strokeWidth="1.8"
              />
              <text x={65 + (offset + i) * 46} y={128} textAnchor="middle" fontSize="14" fontWeight="800" className="svg-mono">
                {ch}
              </text>
            </g>
          );
        })}

      <text x="440" y="176" textAnchor="middle" fontSize="11.5" className="svg-muted">
        {step === 1
          ? 'Preprocessed pattern of length m = 8 scans right-to-left skipping unmatching blocks in single jumps'
          : step === 4
            ? 'Verified Match at Offset 9 ("teammast") with zero backward text pointer rewinds!'
            : 'Red = mismatch character checked in Bad-Match Table; Green = matched character right-to-left'}
      </text>
    </svg>
  );
}

function KmpStepSvg({ step }: { step: number }) {
  const txt = 'babcbabcabcaabca'.split('');
  const pat = 'abcabcacab'.split('');
  const offset = step === 1 ? 0 : step === 2 ? 1 : step === 3 ? 5 : 8;

  return (
    <svg viewBox="0 0 880 200" className="irs-svg" role="img" aria-label={`KMP step ${step}`}>
      <rect x="4" y="4" width="872" height="192" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="440" y="28" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--c-ink)">
        {step === 1
          ? 'Step 1: Preprocess Pattern "abcabcacab" → Prefix Table [0,0,0,1,2,3,4,0,1,2]'
          : step === 2
            ? 'Step 2: Mismatch at Index 5 ("b" vs "a") — No Prefix Reuse, Jump +3 Places'
            : step === 3
              ? 'Step 3: 7 Matched ("abcabca"), Mismatch at 13 ("a" vs "c") → Reuse "abca" (+3 Jump)'
              : 'Step 4: Continue Strictly Forward — O(n + m) Worst Case With Zero Backtracking'}
      </text>

      {txt.map((ch, i) => (
        <g key={i}>
          <rect x={44 + i * 48} y={50} width={44} height={36} rx={6} fill="var(--bg)" stroke="var(--line-strong)" />
          <text x={66 + i * 48} y={73} textAnchor="middle" fontSize="13.5" fontWeight="700" className="svg-mono">{ch}</text>
          <text x={66 + i * 48} y={44} textAnchor="middle" fontSize="9.5" className="svg-muted svg-mono">{i + 1}</text>
        </g>
      ))}

      {pat.slice(0, Math.min(pat.length, 16 - offset)).map((ch, i) => (
        <g key={i}>
          <rect x={44 + (offset + i) * 48} y={102} width={44} height={36} rx={6} fill={step === 3 && i === 7 ? 'var(--bad-bg)' : step === 3 && i < 7 ? 'var(--ok-bg)' : 'var(--c-bg)'} stroke={step === 3 && i === 7 ? 'var(--bad)' : 'var(--c)'} />
          <text x={66 + (offset + i) * 48} y={125} textAnchor="middle" fontSize="13.5" fontWeight="800" className="svg-mono">{ch}</text>
        </g>
      ))}

      <text x="440" y="172" textAnchor="middle" fontSize="11.5" className="svg-muted">
        Already matched prefix (&quot;abca&quot;, length 4) allows KMP to slide pattern safely forward while text cursor never steps backward
      </text>
    </svg>
  );
}
