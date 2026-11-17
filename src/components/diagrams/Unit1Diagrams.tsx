import React from 'react';

export function IrsTotalSystemSvg() {
  return (
    <svg viewBox="0 0 880 340" className="irs-svg" role="img" aria-label="Total Information Retrieval System Functional Overview">
      <defs>
        <marker id="u1-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--c)" />
        </marker>
        <marker id="u1-arr-m" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--muted)" />
        </marker>
      </defs>
      <rect x="4" y="4" width="872" height="332" rx="14" fill="var(--surface)" stroke="var(--line)" />

      {/* Top Input & Normalization */}
      <rect x="330" y="16" width="220" height="36" rx="8" fill="var(--bg)" stroke="var(--line-strong)" />
      <text x="440" y="38" textAnchor="middle" fontSize="12" fontWeight="700">ITEM INPUT STREAM</text>
      <line x1="440" y1="52" x2="440" y2="72" stroke="var(--c)" strokeWidth="2" markerEnd="url(#u1-arr)" />

      <rect x="290" y="75" width="300" height="44" rx="10" fill="var(--c-bg)" stroke="var(--c)" strokeWidth="2" />
      <text x="440" y="102" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">ITEM NORMALIZATION</text>

      {/* 3 Branch Arrows */}
      <line x1="340" y1="119" x2="150" y2="152" stroke="var(--c)" strokeWidth="1.8" markerEnd="url(#u1-arr)" />
      <line x1="440" y1="119" x2="440" y2="152" stroke="var(--c)" strokeWidth="1.8" markerEnd="url(#u1-arr)" />
      <line x1="540" y1="119" x2="730" y2="152" stroke="var(--c)" strokeWidth="1.8" markerEnd="url(#u1-arr)" />

      {/* Branch 1: SDI */}
      <rect x="35" y="155" width="230" height="46" rx="10" fill="var(--hot-bg)" stroke="var(--hot)" strokeWidth="1.5" />
      <text x="150" y="175" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--hot)">SELECTIVE DISSEMINATION</text>
      <text x="150" y="191" textAnchor="middle" fontSize="11" className="svg-muted">OF INFORMATION (MAIL)</text>
      <line x1="110" y1="201" x2="88" y2="228" stroke="var(--muted)" strokeWidth="1.4" markerEnd="url(#u1-arr-m)" />
      <line x1="190" y1="201" x2="212" y2="228" stroke="var(--muted)" strokeWidth="1.4" markerEnd="url(#u1-arr-m)" />
      <rect x="36" y="232" width="102" height="42" rx="8" fill="var(--bg)" stroke="var(--line-strong)" />
      <text x="87" y="257" textAnchor="middle" fontSize="11" fontWeight="600">Mail Files</text>
      <rect x="158" y="232" width="102" height="42" rx="8" fill="var(--bg)" stroke="var(--line-strong)" />
      <text x="209" y="257" textAnchor="middle" fontSize="11" fontWeight="600">User Profiles</text>

      {/* Branch 2: Document File Creation */}
      <rect x="325" y="155" width="230" height="46" rx="10" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="1.5" />
      <text x="440" y="183" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--c-ink)">DOCUMENT FILE CREATION</text>
      <line x1="440" y1="201" x2="440" y2="228" stroke="var(--c)" strokeWidth="1.6" markerEnd="url(#u1-arr)" />
      <rect x="370" y="232" width="140" height="42" rx="8" fill="var(--c-bg)" stroke="var(--c)" />
      <text x="440" y="257" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--c-ink)">Document File</text>

      {/* Public & Private Index underneath */}
      <line x1="400" y1="274" x2="355" y2="292" stroke="var(--muted)" strokeWidth="1.4" markerEnd="url(#u1-arr-m)" />
      <line x1="480" y1="274" x2="525" y2="292" stroke="var(--muted)" strokeWidth="1.4" markerEnd="url(#u1-arr-m)" />
      <rect x="230" y="294" width="190" height="32" rx="7" fill="var(--bg)" stroke="var(--line-strong)" />
      <text x="325" y="314" textAnchor="middle" fontSize="11" fontWeight="600">Public Indexing &amp; Index File</text>
      <rect x="460" y="294" width="190" height="32" rx="7" fill="var(--bg)" stroke="var(--line-strong)" />
      <text x="555" y="314" textAnchor="middle" fontSize="11" fontWeight="600">Private Indexing &amp; Index File</text>

      {/* Branch 3: Automatic File Build */}
      <rect x="615" y="155" width="230" height="46" rx="10" fill="var(--ok-bg)" stroke="var(--ok)" strokeWidth="1.5" />
      <text x="730" y="183" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ok)">AUTOMATIC FILE BUILD (AFB)</text>
      <line x1="690" y1="201" x2="670" y2="228" stroke="var(--muted)" strokeWidth="1.4" markerEnd="url(#u1-arr-m)" />
      <line x1="770" y1="201" x2="792" y2="228" stroke="var(--muted)" strokeWidth="1.4" markerEnd="url(#u1-arr-m)" />
      <rect x="618" y="232" width="102" height="42" rx="8" fill="var(--bg)" stroke="var(--line-strong)" />
      <text x="669" y="257" textAnchor="middle" fontSize="11" fontWeight="600">AFB Profiles</text>
      <rect x="738" y="232" width="108" height="42" rx="8" fill="var(--bg)" stroke="var(--line-strong)" />
      <text x="792" y="250" textAnchor="middle" fontSize="10.5" fontWeight="600">Candidate Index</text>
      <text x="792" y="264" textAnchor="middle" fontSize="10.5" fontWeight="600">Records</text>
    </svg>
  );
}

export function IrsFunctionalFlowSvg() {
  const steps = [
    { n: '1', label: 'Standardize Input', sub: 'Unify encodings & formats' },
    { n: '2', label: 'Zoning', sub: 'Title, Author, Body' },
    { n: '3', label: 'Tokenize', sub: 'Identify searchable words' },
    { n: '4', label: 'Stop Algorithm', sub: 'Drop the, is, of, and' },
    { n: '5', label: 'Characterize', sub: 'Extract stems & weights' },
    { n: '6', label: 'Stemming', sub: 'Conflate word variants' },
    { n: '7', label: 'Index Store', sub: 'Inverted / PAT / Signature' },
  ];

  return (
    <svg viewBox="0 0 940 185" className="irs-svg" role="img" aria-label="7-Step Item Normalization Pipeline">
      <defs>
        <marker id="norm-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--c)" />
        </marker>
      </defs>
      <rect x="4" y="4" width="932" height="177" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <rect x="18" y="16" width="904" height="28" rx="8" fill="var(--c-bg)" stroke="var(--c-mid)" />
      <text x="470" y="34" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--c-ink)">
        ITEM NORMALIZATION &amp; SEARCHABLE DATA STRUCTURE PIPELINE
      </text>
      {steps.map((s, idx) => {
        const x = 18 + idx * 130;
        return (
          <g key={s.n}>
            <rect x={x} y={62} width={114} height={96} rx={10} fill="var(--bg)" stroke="var(--c)" strokeWidth={idx === 6 ? 2 : 1.3} />
            <circle cx={x + 57} cy={84} r={12} fill="var(--c)" />
            <text x={x + 57} y={88} textAnchor="middle" fontSize="11.5" fontWeight="800" style={{ fill: '#ffffff' }}>
              {s.n}
            </text>
            <text x={x + 57} y={115} textAnchor="middle" fontSize="11.5" fontWeight="700">
              {s.label}
            </text>
            <text x={x + 57} y={134} textAnchor="middle" fontSize="9.5" className="svg-muted">
              {s.sub.split(' ').slice(0, 2).join(' ')}
            </text>
            <text x={x + 57} y={147} textAnchor="middle" fontSize="9.5" className="svg-muted">
              {s.sub.split(' ').slice(2).join(' ')}
            </text>
            {idx < steps.length - 1 && (
              <line x1={x + 114} y1={110} x2={x + 128} y2={110} stroke="var(--c)" strokeWidth="2" markerEnd="url(#norm-arr)" />
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function IrsVsDbmsSvg() {
  return (
    <svg viewBox="0 0 880 230" className="irs-svg" role="img" aria-label="Comparison of IRS, DBMS, Digital Library and Data Warehouse">
      <rect x="4" y="4" width="872" height="222" rx="14" fill="var(--surface)" stroke="var(--line)" />
      {[
        { title: 'Information Retrieval (IRS)', sub: 'Unstructured Free Text', p1: 'Semantic & Fuzzy Matching', p2: 'Precision / Recall Ranking', p3: 'Read-Heavy / Rare Updates', bg: 'var(--c-bg)', st: 'var(--c)', ink: 'var(--c-ink)', x: 20 },
        { title: 'Database Mgmt (DBMS)', sub: 'Structured Tables & Keys', p1: 'Exact SQL Predicates', p2: '100% Deterministic Hits', p3: 'ACID & Frequent Updates', bg: 'var(--bg)', st: 'var(--v-blue)', ink: 'var(--v-blue)', x: 234 },
        { title: 'Digital Library (DL)', sub: 'Curated Multimedia Repos', p1: 'Metadata + Dublin Core', p2: 'Preservation & Citation', p3: 'Global Archive Access', bg: 'var(--hot-bg)', st: 'var(--hot)', ink: 'var(--hot)', x: 448 },
        { title: 'Data Warehouse (DW)', sub: 'Subject-Oriented History', p1: 'ETL Cleansed OLAP Cubes', p2: 'Roll-Up / Drill-Down', p3: 'Executive Trend Analytics', bg: 'var(--ok-bg)', st: 'var(--ok)', ink: 'var(--ok)', x: 662 },
      ].map((c) => (
        <g key={c.title}>
          <rect x={c.x} y={20} width={198} height={190} rx={12} fill={c.bg} stroke={c.st} strokeWidth="1.6" />
          <text x={c.x + 99} y={48} textAnchor="middle" fontSize="12.5" fontWeight="800" style={{ fill: c.ink }}>
            {c.title}
          </text>
          <text x={c.x + 99} y={66} textAnchor="middle" fontSize="10.5" className="svg-muted">
            {c.sub}
          </text>
          <line x1={c.x + 14} y1={78} x2={c.x + 184} y2={78} stroke="var(--line)" />
          <rect x={c.x + 12} y={90} width={174} height={30} rx={7} fill="var(--surface)" stroke="var(--line)" />
          <text x={c.x + 99} y={109} textAnchor="middle" fontSize="11">{c.p1}</text>
          <rect x={c.x + 12} y={128} width={174} height={30} rx={7} fill="var(--surface)" stroke="var(--line)" />
          <text x={c.x + 99} y={147} textAnchor="middle" fontSize="11">{c.p2}</text>
          <rect x={c.x + 12} y={166} width={174} height={30} rx={7} fill="var(--surface)" stroke="var(--line)" />
          <text x={c.x + 99} y={185} textAnchor="middle" fontSize="11">{c.p3}</text>
        </g>
      ))}
    </svg>
  );
}

export function IrsSearchCapabilitiesSvg() {
  return (
    <svg viewBox="0 0 880 220" className="irs-svg" role="img" aria-label="IRS Search Capabilities Summary">
      <rect x="4" y="4" width="872" height="212" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="440" y="32" textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--c-ink)">
        Core Search Capabilities in an Information Retrieval System
      </text>
      {[
        { title: 'Boolean Logic', ex: 'A AND (B OR NOT C)', bg: 'var(--c-bg)', st: 'var(--c)', x: 22, y: 50 },
        { title: 'Proximity Search', ex: 'data NEAR/3 mining', bg: 'var(--bg)', st: 'var(--line-strong)', x: 235, y: 50 },
        { title: 'Contiguous Phrase', ex: '"information retrieval"', bg: 'var(--hot-bg)', st: 'var(--hot)', x: 448, y: 50 },
        { title: 'Fuzzy Spelling', ex: 'edit distance <= 2', bg: 'var(--ok-bg)', st: 'var(--ok)', x: 661, y: 50 },
        { title: 'Term Masking', ex: 'comput* / wom?n', bg: 'var(--ok-bg)', st: 'var(--ok)', x: 22, y: 132 },
        { title: 'Numeric / Date Range', ex: 'year IN [2020..2026]', bg: 'var(--bg)', st: 'var(--line-strong)', x: 235, y: 132 },
        { title: 'Concept / Thesaurus', ex: 'car -> automobile', bg: 'var(--c-bg)', st: 'var(--c)', x: 448, y: 132 },
        { title: 'Natural Language', ex: 'Free-text Ranked NLQ', bg: 'var(--hot-bg)', st: 'var(--hot)', x: 661, y: 132 },
      ].map((b) => (
        <g key={b.title}>
          <rect x={b.x} y={b.y} width={196} height={66} rx={10} fill={b.bg} stroke={b.st} strokeWidth="1.4" />
          <text x={b.x + 98} y={b.y + 26} textAnchor="middle" fontSize="12.5" fontWeight="700">{b.title}</text>
          <text x={b.x + 98} y={b.y + 48} textAnchor="middle" fontSize="11" className="svg-mono svg-muted">{b.ex}</text>
        </g>
      ))}
    </svg>
  );
}

export function IrsWorkingStepsSvg() {
  const row1 = [
    { n: '1', t: 'Collection', s: 'Books, PDFs, Web' },
    { n: '2', t: 'Doc Processing', s: 'Clean, Parse, Stem' },
    { n: '3', t: 'Index Creation', s: 'Keyword & Posting Map' },
    { n: '4', t: 'DB Storage', s: 'Doc & Index Repo' },
    { n: '5', t: 'User Query', s: 'Search Input Entered' },
  ];
  const row2 = [
    { n: '9', t: 'Retrieved Docs', s: 'Presented to User' },
    { n: '8', t: 'Ranking Results', s: 'Sort by Relevance Score' },
    { n: '7', t: 'Matching Engine', s: 'Index vs Query Lookup' },
    { n: '6', t: 'Query Process', s: 'Normalize & Expand' },
  ];

  return (
    <svg viewBox="0 0 880 235" className="irs-svg" role="img" aria-label="9-Step Basic Working Flow of an IRS">
      <defs>
        <marker id="w-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--brick)" />
        </marker>
      </defs>
      <rect x="4" y="4" width="872" height="227" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="440" y="28" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        Basic 9-Step Working Cycle of an Information Retrieval System
      </text>

      {row1.map((b, i) => {
        const x = 22 + i * 170;
        return (
          <g key={b.n}>
            <rect x={x} y={44} width={150} height={64} rx={10} fill="var(--c-bg)" stroke="var(--c)" strokeWidth="1.4" />
            <text x={x + 75} y={67} textAnchor="middle" fontSize="11.5" fontWeight="800" fill="var(--c-ink)">{b.n}. {b.t}</text>
            <text x={x + 75} y={88} textAnchor="middle" fontSize="10" className="svg-muted">{b.s}</text>
            {i < row1.length - 1 && (
              <line x1={x + 150} y1={76} x2={x + 168} y2={76} stroke="var(--brick)" strokeWidth="1.8" markerEnd="url(#w-arr)" />
            )}
          </g>
        );
      })}

      {/* Connector down from Step 5 to Step 6 */}
      <line x1="777" y1="108" x2="777" y2="140" stroke="var(--brick)" strokeWidth="1.8" markerEnd="url(#w-arr)" />

      {row2.map((b, i) => {
        const x = 192 + i * 170;
        return (
          <g key={b.n}>
            <rect x={x} y={142} width={150} height={64} rx={10} fill={b.n === '9' ? 'var(--ok-bg)' : 'var(--brick-bg)'} stroke={b.n === '9' ? 'var(--ok)' : 'var(--brick)'} strokeWidth="1.5" />
            <text x={x + 75} y={165} textAnchor="middle" fontSize="11.5" fontWeight="800" fill={b.n === '9' ? 'var(--ok)' : 'var(--brick-ink)'}>{b.n}. {b.t}</text>
            <text x={x + 75} y={186} textAnchor="middle" fontSize="10" className="svg-muted">{b.s}</text>
            {i < row2.length - 1 && (
              <line x1={x + 170} y1={174} x2={x + 152} y2={174} stroke="var(--brick)" strokeWidth="1.8" markerEnd="url(#w-arr)" />
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function IrsDocSpaceSvg() {
  return (
    <svg viewBox="0 0 860 270" className="irs-svg" role="img" aria-label="Figure 1.1 Effects of Search on Total Document Space">
      <rect x="4" y="4" width="852" height="262" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="430" y="28" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        Figure 1.1: Effects of Search on Total Document Space (Precision, Recall &amp; Fallout)
      </text>

      {/* Outer Oval / Rounded Rectangle for Total Document Space */}
      <rect x="70" y="46" width="520" height="202" rx="96" fill="var(--bg)" stroke="var(--line-strong)" strokeWidth="2" />
      {/* Center crosshair */}
      <line x1="330" y1="46" x2="330" y2="248" stroke="var(--fg)" strokeWidth="1.6" strokeDasharray="5 4" />
      <line x1="70" y1="147" x2="590" y2="147" stroke="var(--fg)" strokeWidth="1.6" strokeDasharray="5 4" />

      {/* Top Left: Not Retrieved Non-Relevant */}
      <text x="208" y="92" textAnchor="middle" fontSize="12" fontWeight="700">Non-Relevant</text>
      <text x="208" y="109" textAnchor="middle" fontSize="11" className="svg-muted">Not Retrieved (True Negatives)</text>

      {/* Top Right: Retrieved Non-Relevant (False Hits) */}
      <rect x="348" y="72" width="212" height="58" rx="12" fill="var(--bad-bg)" stroke="var(--bad)" />
      <text x="454" y="96" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--bad)">Retrieved Non-Relevant</text>
      <text x="454" y="114" textAnchor="middle" fontSize="10.5" className="svg-muted">False Hits (Degrades Precision)</text>

      {/* Bottom Left: Retrieved Relevant */}
      <rect x="112" y="162" width="204" height="60" rx="12" fill="var(--ok-bg)" stroke="var(--ok)" strokeWidth="1.6" />
      <text x="214" y="186" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="var(--ok)">Retrieved Relevant (Hits)</text>
      <text x="214" y="204" textAnchor="middle" fontSize="10.5" className="svg-muted">Ideal Core Search Result</text>

      {/* Bottom Right: Relevant Not Retrieved */}
      <rect x="348" y="162" width="212" height="60" rx="12" fill="var(--c-bg)" stroke="var(--c)" />
      <text x="454" y="186" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--c-ink)">Relevant Not Retrieved</text>
      <text x="454" y="204" textAnchor="middle" fontSize="10.5" className="svg-muted">Missed Items (Degrades Recall)</text>

      {/* Side Summary Cards */}
      <rect x="615" y="54" width="224" height="56" rx="10" fill="var(--ok-bg)" stroke="var(--ok)" />
      <text x="727" y="76" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="var(--ok)">Precision = Hits / Total Retrieved</text>
      <text x="727" y="94" textAnchor="middle" fontSize="10" className="svg-muted">Minimizes Non-Relevant Overhead</text>

      <rect x="615" y="122" width="224" height="56" rx="10" fill="var(--c-bg)" stroke="var(--c)" />
      <text x="727" y="144" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="var(--c-ink)">Recall = Hits / Total Relevant</text>
      <text x="727" y="162" textAnchor="middle" fontSize="10" className="svg-muted">Captures All Relevant Database Items</text>

      <rect x="615" y="190" width="224" height="52" rx="10" fill="var(--brick-bg)" stroke="var(--brick)" />
      <text x="727" y="211" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--brick-ink)">Inverse Trade-off Law</text>
      <text x="727" y="229" textAnchor="middle" fontSize="10" className="svg-muted">Precision rises -&gt; Recall typically falls</text>
    </svg>
  );
}

export function IrsVocabDomainsSvg() {
  return (
    <svg viewBox="0 0 860 220" className="irs-svg" role="img" aria-label="Figure 1.3 Vocabulary Domains Mismatch">
      <rect x="4" y="4" width="852" height="212" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="430" y="28" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        Figure 1.3: Vocabulary Domains — User Query Terms vs Author Index Vocabulary
      </text>

      <ellipse cx="320" cy="126" rx="175" ry="68" fill="var(--brick-bg)" fillOpacity="0.65" stroke="var(--brick)" strokeWidth="2" />
      <ellipse cx="540" cy="126" rx="175" ry="68" fill="var(--c-bg)" fillOpacity="0.65" stroke="var(--c)" strokeWidth="2" />

      <text x="235" y="114" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="var(--brick-ink)">User Vocabulary</text>
      <text x="235" y="134" textAnchor="middle" fontSize="10.5" className="svg-muted">Query phrasing &amp; intent</text>
      <text x="235" y="150" textAnchor="middle" fontSize="10" className="svg-muted">(Synonyms &amp; abstractions)</text>

      <text x="430" y="118" textAnchor="middle" fontSize="11.5" fontWeight="800">Matched</text>
      <text x="430" y="135" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--ok)">Overlap</text>

      <text x="625" y="114" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="var(--c-ink)">Author / Indexer</text>
      <text x="625" y="134" textAnchor="middle" fontSize="10.5" className="svg-muted">Controlled &amp; free-text tokens</text>
      <text x="625" y="150" textAnchor="middle" fontSize="10" className="svg-muted">(Domain writing style)</text>
    </svg>
  );
}

export function IrsCapabilitiesTreeSvg() {
  const branches = [
    {
      title: '1. Search Capabilities',
      bg: 'var(--c-bg)',
      st: 'var(--c)',
      ink: 'var(--c-ink)',
      x: 24,
      items: ['Boolean (AND/OR/NOT)', 'Proximity & Contiguous', 'Fuzzy & Term Masking', 'Numeric/Date Ranges', 'Concept/NLQ Expansion'],
    },
    {
      title: '2. Browse Capabilities',
      bg: 'var(--brick-bg)',
      st: 'var(--brick)',
      ink: 'var(--brick-ink)',
      x: 312,
      items: ['Ranked Retrieval List', 'Zoning & Highlighting', 'Subject/Author/Year', 'Hyperlinks (CS->AI->ML)', 'Line Item Status & Viz'],
    },
    {
      title: '3. Miscellaneous',
      bg: 'var(--ok-bg)',
      st: 'var(--ok)',
      ink: 'var(--ok)',
      x: 600,
      items: ['Vocab Browse (Spell Fix)', 'Auto-Complete & Canned', 'Iterative Relevance Loop', 'Auto Summarization', 'Z39.50 / WAIS Standards'],
    },
  ];

  return (
    <svg viewBox="0 0 880 250" className="irs-svg" role="img" aria-label="Hierarchy of IRS Capabilities">
      <rect x="4" y="4" width="872" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <rect x="300" y="16" width="280" height="34" rx="9" fill="var(--c)" />
      <text x="440" y="38" textAnchor="middle" fontSize="12.5" fontWeight="800" style={{ fill: '#ffffff' }}>
        IRS CAPABILITIES TAXONOMY
      </text>
      <line x1="440" y1="50" x2="152" y2="74" stroke="var(--line-strong)" strokeWidth="1.8" />
      <line x1="440" y1="50" x2="440" y2="74" stroke="var(--line-strong)" strokeWidth="1.8" />
      <line x1="440" y1="50" x2="728" y2="74" stroke="var(--line-strong)" strokeWidth="1.8" />

      {branches.map((b) => (
        <g key={b.title}>
          <rect x={b.x} y={76} width={256} height={154} rx={11} fill={b.bg} stroke={b.st} strokeWidth="1.6" />
          <text x={b.x + 128} y={100} textAnchor="middle" fontSize="12" fontWeight="800" style={{ fill: b.ink }}>{b.title}</text>
          <line x1={b.x + 14} y1={110} x2={b.x + 242} y2={110} stroke="var(--line)" />
          {b.items.map((it, idx) => (
            <text key={it} x={b.x + 128} y={132 + idx * 22} textAnchor="middle" fontSize="11">{it}</text>
          ))}
        </g>
      ))}
    </svg>
  );
}
