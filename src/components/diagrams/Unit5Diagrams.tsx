import React from 'react';

export function TextStreamingArchSvg() {
  return (
    <svg viewBox="0 0 840 190" className="irs-svg" role="img" aria-label="Text Streaming Search System Architecture">
      <defs>
        <marker id="ts-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--c)" />
        </marker>
      </defs>
      <rect x="4" y="4" width="832" height="182" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="420" y="30" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        Text Streaming Search System Architecture
      </text>

      {/* Top feedback loop UI -> Database */}
      <path d="M 710 72 L 710 46 L 110 46 L 110 72" fill="none" stroke="var(--c)" strokeWidth="1.8" markerEnd="url(#ts-a)" />

      <rect x="36" y="76" width="150" height="72" rx="10" fill="var(--bg)" stroke="var(--line-strong)" strokeWidth="1.8" />
      <text x="111" y="108" textAnchor="middle" fontSize="12.5" fontWeight="800">DATABASE</text>
      <text x="111" y="126" textAnchor="middle" fontSize="10.5" className="svg-muted">Full-Text Stream</text>

      <line x1="186" y1="112" x2="236" y2="112" stroke="var(--c)" strokeWidth="2" markerEnd="url(#ts-a)" />

      <rect x="242" y="76" width="165" height="72" rx="10" fill="var(--c-bg)" stroke="var(--c)" strokeWidth="1.8" />
      <text x="324" y="108" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="var(--c-ink)">Term Detector</text>
      <text x="324" y="126" textAnchor="middle" fontSize="10.5" className="svg-muted">Hardware/SW Matcher</text>

      <line x1="407" y1="112" x2="452" y2="112" stroke="var(--c)" strokeWidth="2" markerEnd="url(#ts-a)" />

      <rect x="458" y="76" width="160" height="72" rx="10" fill="var(--hot-bg)" stroke="var(--hot)" strokeWidth="1.6" />
      <text x="538" y="108" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="var(--hot)">Query Resolver</text>
      <text x="538" y="126" textAnchor="middle" fontSize="10.5" className="svg-muted">Logic &amp; Weights</text>

      <line x1="618" y1="112" x2="646" y2="112" stroke="var(--c)" strokeWidth="2" markerEnd="url(#ts-a)" />

      <rect x="652" y="76" width="152" height="72" rx="10" fill="var(--ok-bg)" stroke="var(--ok)" strokeWidth="1.6" />
      <text x="728" y="108" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="var(--ok)">User Interface</text>
      <text x="728" y="126" textAnchor="middle" fontSize="10.5" className="svg-muted">Instant Hits &amp; Status</text>
    </svg>
  );
}

export function SoftwareTextSearchSvg() {
  return (
    <svg viewBox="0 0 880 185" className="irs-svg" role="img" aria-label="Software Text Search Algorithms Comparison">
      <rect x="4" y="4" width="872" height="177" rx="14" fill="var(--surface)" stroke="var(--line)" />
      {[
        { title: '1. Brute Force', dir: 'Left → Right (Shift +1)', time: 'Worst: O(n·m)', note: 'Compares every offset naively', bg: 'var(--bg)', st: 'var(--line-strong)', x: 20 },
        { title: '2. Boyer–Moore', dir: 'Right → Left (Bad-Match Jump)', time: 'Best: O(n/m) Sublinear', note: 'Skips up to m chars per mismatch', bg: 'var(--c-bg)', st: 'var(--c)', x: 306 },
        { title: '3. Knuth–Morris–Pratt', dir: 'Left → Right (LPS Fail Table)', time: 'Guaranteed O(n + m)', note: 'Never rewinds pointer in text stream', bg: 'var(--ok-bg)', st: 'var(--ok)', x: 592 },
      ].map((a) => (
        <g key={a.title}>
          <rect x={a.x} y={24} width={268} height={134} rx={10} fill={a.bg} stroke={a.st} strokeWidth="1.6" />
          <text x={a.x + 134} y={54} textAnchor="middle" fontSize="13.5" fontWeight="800">{a.title}</text>
          <text x={a.x + 134} y={82} textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--c-ink)">{a.dir}</text>
          <text x={a.x + 134} y={108} textAnchor="middle" fontSize="11.5" className="svg-mono">{a.time}</text>
          <text x={a.x + 134} y={136} textAnchor="middle" fontSize="10.5" className="svg-muted">{a.note}</text>
        </g>
      ))}
    </svg>
  );
}

export function HardwareFdfGescanSvg() {
  return (
    <svg viewBox="0 0 880 245" className="irs-svg" role="img" aria-label="GESCAN Text Array Processor and Fast Data Finder Pipeline">
      <rect x="4" y="4" width="872" height="237" rx="14" fill="var(--surface)" stroke="var(--line)" />

      {/* Left: GESCAN TAP */}
      <rect x="20" y="18" width="405" height="208" rx="12" fill="var(--bg)" stroke="var(--c)" />
      <text x="222" y="42" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="var(--c-ink)">
        GESCAN Text Array Processor (TAP)
      </text>
      <text x="108" y="68" textAnchor="middle" fontSize="10.5" className="svg-muted">Query Resolvers</text>
      <text x="285" y="68" textAnchor="middle" fontSize="10.5" className="svg-muted">Parallel Character Match Cells</text>
      {[0, 1, 2].map((r) => (
        <g key={r}>
          <rect x="42" y={80 + r * 42} width="78" height="28" rx="5" fill="var(--c-bg)" stroke="var(--c)" />
          <text x="81" y={98 + r * 42} textAnchor="middle" fontSize="10.5" fontWeight="700">QP {r + 1}</text>
          {[0, 1, 2, 3].map((c) => (
            <rect key={c} x={156 + c * 60} y={80 + r * 42} width="44" height="28" rx="5" fill="var(--surface)" stroke="var(--line-strong)" />
          ))}
          <line x1="120" y1={94 + r * 42} x2="380" y2={94 + r * 42} stroke="var(--c)" strokeWidth="1.4" />
        </g>
      ))}

      {/* Right: Fast Data Finder (FDF) */}
      <rect x="450" y="18" width="410" height="208" rx="12" fill="var(--hot-bg)" stroke="var(--hot)" />
      <text x="655" y="42" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="var(--hot)">
        Fast Data Finder (FDF) Cell Pipeline
      </text>
      {['1', '2', '3', 'n'].map((id, i) => (
        <g key={id}>
          <rect x={480 + i * 90} y={64} width={64} height={30} rx={6} fill="var(--surface)" stroke="var(--c)" />
          <text x={512 + i * 90} y={84} textAnchor="middle" fontSize="11.5" fontWeight="700" className="svg-mono">C{id}</text>
          <line x1={512 + i * 90} y1={94} x2={512 + i * 90} y2={116} stroke="var(--c)" strokeWidth="1.6" />
          <rect x={480 + i * 90} y={116} width={64} height={30} rx={6} fill="var(--surface)" stroke="var(--hot)" />
          <text x={512 + i * 90} y={136} textAnchor="middle" fontSize="11.5" fontWeight="700" className="svg-mono">R{id}</text>
        </g>
      ))}
      <rect x="520" y="168" width="270" height="40" rx="8" fill="var(--surface)" stroke="var(--line-strong)" />
      <text x="655" y="192" textAnchor="middle" fontSize="11.5" fontWeight="700">Microprocessor + Host Workstation (0 Index!)</text>
    </svg>
  );
}

export function MultimediaRetrievalHubSvg() {
  const mods = [
    { name: 'Spoken Audio', f1: 'ASR Word Lattice', f2: 'Utterance Retrieval (SUR)', x: 20 },
    { name: 'Non-Speech Audio', f1: 'Audio Cues & Alarms', f2: 'Humming & Pitch Contour', x: 194 },
    { name: 'Graph Retrieval', f1: 'Topic/Edge Subgraphs', f2: 'Rank & Visual Analytics', x: 368 },
    { name: 'Imagery (CBIR)', f1: 'Annotation Metadata', f2: 'Color, Texture & Shape', x: 542 },
    { name: 'Video Retrieval', f1: 'Shot Boundary & Keyframes', f2: 'Motion & Spatio-Temporal', x: 716 },
  ];
  return (
    <svg viewBox="0 0 900 185" className="irs-svg" role="img" aria-label="Multimedia Information Retrieval Modalities">
      <rect x="4" y="4" width="892" height="177" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="450" y="30" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        Multimedia Information Retrieval Modalities (Unit V)
      </text>
      {mods.map((m, i) => (
        <g key={m.name}>
          <rect x={m.x} y={48} width={164} height={116} rx={10} fill={i % 2 === 0 ? 'var(--c-bg)' : 'var(--bg)'} stroke="var(--c)" strokeWidth="1.4" />
          <text x={m.x + 82} y={76} textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--c-ink)">{m.name}</text>
          <line x1={m.x + 12} y1={88} x2={m.x + 152} y2={88} stroke="var(--line)" />
          <text x={m.x + 82} y={114} textAnchor="middle" fontSize="10.5">{m.f1}</text>
          <text x={m.x + 82} y={138} textAnchor="middle" fontSize="10.5" className="svg-muted">{m.f2}</text>
        </g>
      ))}
    </svg>
  );
}

export function EvalRelevantLoopSvg() {
  return (
    <svg viewBox="0 0 860 220" className="irs-svg" role="img" aria-label="Figure 11.1 Identifying Relevant Items in IRS Evaluation">
      <defs>
        <marker id="ev-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--brick)" />
        </marker>
      </defs>
      <rect x="4" y="4" width="852" height="212" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="430" y="28" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        Figure 11.1: Identifying Relevant Items &amp; Evaluation Feedback Loop (TREC Baseline)
      </text>

      <rect x="40" y="48" width="220" height="48" rx="10" fill="var(--brick-bg)" stroke="var(--brick)" strokeWidth="1.6" />
      <text x="150" y="76" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--brick-ink)">ITEMS INDEXED INTO SYSTEM</text>

      <line x1="150" y1="96" x2="150" y2="138" stroke="var(--brick)" strokeWidth="1.8" markerEnd="url(#ev-arr)" />
      <text x="230" y="122" fontSize="9.5" className="svg-mono svg-muted">QUERY HITS RETURNED</text>

      <rect x="40" y="142" width="220" height="52" rx="10" fill="var(--c-bg)" stroke="var(--c)" strokeWidth="1.6" />
      <text x="150" y="164" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--c-ink)">SYSTEM EXECUTES QUERY</text>
      <text x="150" y="182" textAnchor="middle" fontSize="10.5" className="svg-muted">AGAINST SEARCH INDEX</text>

      <rect x="575" y="48" width="235" height="48" rx="10" fill="var(--bg)" stroke="var(--line-strong)" strokeWidth="1.6" />
      <text x="692" y="76" textAnchor="middle" fontSize="11.5" fontWeight="700">USER CREATES SEARCH STATEMENT</text>

      <line x1="575" y1="78" x2="262" y2="162" stroke="var(--brick)" strokeWidth="1.8" markerEnd="url(#ev-arr)" />
      <text x="435" y="108" textAnchor="middle" fontSize="10" className="svg-mono" fill="var(--brick-ink)">Search Statement</text>

      <line x1="260" y1="170" x2="572" y2="170" stroke="var(--c)" strokeWidth="1.8" markerEnd="url(#ev-arr)" />
      <text x="415" y="162" textAnchor="middle" fontSize="10" className="svg-mono" fill="var(--c-ink)">Hit File</text>

      <rect x="575" y="142" width="235" height="52" rx="10" fill="var(--ok-bg)" stroke="var(--ok)" strokeWidth="1.6" />
      <text x="692" y="172" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="var(--ok)">USER REVIEWS HITS FROM QUERY</text>
    </svg>
  );
}

export function EvalOverlapVennSvg() {
  return (
    <svg viewBox="0 0 860 225" className="irs-svg" role="img" aria-label="Figure 11.2b Four Algorithms Overlap for Unique Relevance Recall">
      <rect x="4" y="4" width="852" height="217" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="430" y="28" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        Figure 11.2b: Four Algorithms Overlap for Unique Relevance Recall (URR / TNRR / TURR)
      </text>

      {/* Overlapping circles representing Algorithms I-IV */}
      <circle cx="240" cy="100" r="46" fill="var(--c-bg)" fillOpacity="0.6" stroke="var(--c)" strokeWidth="1.8" />
      <circle cx="195" cy="128" r="46" fill="var(--brick-bg)" fillOpacity="0.55" stroke="var(--brick)" strokeWidth="1.8" />
      <circle cx="285" cy="128" r="46" fill="var(--ok-bg)" fillOpacity="0.55" stroke="var(--ok)" strokeWidth="1.8" />
      <circle cx="240" cy="156" r="46" fill="var(--surface-2)" fillOpacity="0.55" stroke="var(--v-blue)" strokeWidth="1.8" />

      <text x="240" y="48" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--c-ink)">Algorithm I (A=3)</text>
      <text x="112" y="128" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--brick-ink)">Algorithm II</text>
      <text x="366" y="128" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--ok)">Algorithm III</text>
      <text x="240" y="213" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--v-blue)">Algorithm IV</text>

      <text x="240" y="84" textAnchor="middle" fontSize="10" fontWeight="700">A</text>
      <text x="168" y="132" textAnchor="middle" fontSize="10" fontWeight="700">B</text>
      <text x="312" y="132" textAnchor="middle" fontSize="10" fontWeight="700">H</text>
      <text x="240" y="176" textAnchor="middle" fontSize="10" fontWeight="700">M</text>
      <text x="240" y="132" textAnchor="middle" fontSize="10" fontWeight="800">G, I</text>

      {/* Right Table Summary */}
      <rect x="445" y="52" width="390" height="148" rx="12" fill="var(--bg)" stroke="var(--line-strong)" />
      <text x="640" y="76" textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--brick-ink)">URR Benchmark Worked Summary (R17 Notes)</text>
      <text x="465" y="102" fontSize="11" className="svg-mono">TNRR = Sum(A..M) = 985 items</text>
      <text x="465" y="122" fontSize="11" className="svg-mono">TURR = A+B+C+E+H+J+L+M = 61 unique</text>
      <text x="465" y="146" fontSize="10.5" className="svg-muted">Alg I: 6 unique (0.098) | Alg II: 16 unique (0.262)</text>
      <text x="465" y="166" fontSize="10.5" className="svg-muted">Alg III: 29 unique (0.475) | Alg IV: 31 unique (0.508)</text>
      <text x="465" y="186" fontSize="10.5" fontWeight="700" fill="var(--ok)">Compares unique relevant finds missed by other systems</text>
    </svg>
  );
}
