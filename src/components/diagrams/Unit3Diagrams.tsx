import React from 'react';

export function AutoIndexDataflowSvg() {
  const left = [
    'Standardize Input',
    'Logical Subsetting (Zoning)',
    'Identify Processing Tokens',
    'Apply Stop Lists',
    'Characterize Tokens & Stem',
    'Create Searchable Data Structure',
  ];
  return (
    <svg viewBox="0 0 860 320" className="irs-svg" role="img" aria-label="Data Flow in Automatic Information Processing System">
      <defs>
        <marker id="ai-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--c)" />
        </marker>
      </defs>
      <rect x="4" y="4" width="852" height="312" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="430" y="28" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        Data Flow in Automatic Information Processing System
      </text>

      {left.map((lbl, i) => {
        const y = 46 + i * 44;
        return (
          <g key={lbl}>
            <rect x="42" y={y} width="290" height="32" rx="8" fill={i === 5 ? 'var(--c-bg)' : 'var(--bg)'} stroke="var(--c)" strokeWidth={i === 5 ? 1.8 : 1.2} />
            <text x="187" y={y + 20} textAnchor="middle" fontSize="11.5" fontWeight="700">{lbl}</text>
            {i < left.length - 1 && (
              <line x1="187" y1={y + 32} x2="187" y2={y + 42} stroke="var(--c)" strokeWidth="1.6" markerEnd="url(#ai-arr)" />
            )}
          </g>
        );
      })}

      {/* Right side: Update Document File & Create Hit List */}
      <line x1="332" y1="106" x2="518" y2="128" stroke="var(--c)" strokeWidth="1.8" markerEnd="url(#ai-arr)" />
      <rect x="524" y="108" width="270" height="44" rx="10" fill="var(--surface-2)" stroke="var(--line-strong)" />
      <text x="659" y="134" textAnchor="middle" fontSize="12.5" fontWeight="700">Update Document File</text>

      <line x1="332" y1="282" x2="538" y2="282" stroke="var(--c)" strokeWidth="2" markerEnd="url(#ai-arr)" />
      <line x1="659" y1="254" x2="659" y2="156" stroke="var(--hot)" strokeWidth="1.8" markerEnd="url(#ai-arr)" />
      <ellipse cx="659" cy="280" rx="115" ry="26" fill="var(--ok-bg)" stroke="var(--ok)" strokeWidth="1.8" />
      <text x="659" y="285" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="var(--ok)">Create Hit List</text>
    </svg>
  );
}

export function StatisticalIndexingTreeSvg() {
  const branches = [
    { name: 'Probabilistic Weighting', sub: 'Hypothesis & Log-Odds PRP', x: 30 },
    { name: 'Bayesian Model', sub: 'Conditional Belief Network', x: 245 },
    { name: 'Vector Weighting', sub: 'TF, IDF & Signal Weighting', x: 460 },
    { name: 'Neural Network Model', sub: 'Input Terms → Hidden Concepts', x: 675 },
  ];
  return (
    <svg viewBox="0 0 880 205" className="irs-svg" role="img" aria-label="Statistical Indexing Models Hierarchy">
      <defs>
        <marker id="st-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--c)" />
        </marker>
      </defs>
      <rect x="4" y="4" width="872" height="197" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <rect x="315" y="20" width="250" height="40" rx="10" fill="var(--c-bg)" stroke="var(--c)" strokeWidth="2" />
      <text x="440" y="45" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">STATISTICAL INDEXING</text>

      <line x1="440" y1="60" x2="440" y2="82" stroke="var(--c)" strokeWidth="2" />
      <line x1="125" y1="82" x2="770" y2="82" stroke="var(--c)" strokeWidth="2" />

      {branches.map((b) => (
        <g key={b.name}>
          <line x1={b.x + 95} y1="82" x2={b.x + 95} y2="108" stroke="var(--c)" strokeWidth="1.8" markerEnd="url(#st-a)" />
          <rect x={b.x} y={112} width={190} height={68} rx={10} fill="var(--bg)" stroke="var(--c)" />
          <text x={b.x + 95} y={140} textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--c-ink)">{b.name}</text>
          <text x={b.x + 95} y={162} textAnchor="middle" fontSize="10.5" className="svg-muted">{b.sub}</text>
        </g>
      ))}
    </svg>
  );
}

export function ConceptLsiSvdSvg() {
  return (
    <svg viewBox="0 0 860 190" className="irs-svg" role="img" aria-label="Concept Indexing via LSI SVD Decomposition">
      <rect x="4" y="4" width="852" height="182" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="430" y="30" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        Concept Indexing &amp; Latent Semantic Indexing (LSI) SVD Reduction
      </text>
      <rect x="28" y="54" width="160" height="90" rx="10" fill="var(--bg)" stroke="var(--line-strong)" />
      <text x="108" y="92" textAnchor="middle" fontSize="13" fontWeight="700">Matrix A (t × d)</text>
      <text x="108" y="114" textAnchor="middle" fontSize="10.5" className="svg-muted">Terms × Documents</text>

      <text x="214" y="104" textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--c-ink)">≈</text>

      <rect x="240" y="54" width="150" height="90" rx="10" fill="var(--c-bg)" stroke="var(--c)" />
      <text x="315" y="92" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--c-ink)">U_k (t × k)</text>
      <text x="315" y="114" textAnchor="middle" fontSize="10.5" className="svg-muted">Term-Concept Space</text>

      <rect x="415" y="64" width="140" height="70" rx="10" fill="var(--hot-bg)" stroke="var(--hot)" />
      <text x="485" y="96" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--hot)">Σ_k (k × k)</text>
      <text x="485" y="116" textAnchor="middle" fontSize="10.5" className="svg-muted">k Singular Values</text>

      <rect x="580" y="54" width="250" height="90" rx="10" fill="var(--ok-bg)" stroke="var(--ok)" />
      <text x="705" y="92" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--ok)">V_k^T (k × d)</text>
      <text x="705" y="114" textAnchor="middle" fontSize="10.5" className="svg-muted">Concept-Doc Map (Matches Synonyms)</text>

      <text x="430" y="170" textAnchor="middle" fontSize="11" className="svg-muted">
        Maps correlated words (&quot;car&quot;, &quot;automobile&quot;) onto shared latent concept dimensions, solving synonymy &amp; polysemy
      </text>
    </svg>
  );
}

export function ThesaurusKwocKwicSvg() {
  return (
    <svg viewBox="0 0 880 220" className="irs-svg" role="img" aria-label="KWOC, KWIC and KWAC Manual Thesaurus Indexing">
      <rect x="4" y="4" width="872" height="212" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="440" y="30" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        Manual Concordance Formats for &quot;Computer Design Contains Memory Chips&quot;
      </text>
      {[
        { tag: 'KWOC (Out of Context)', ex: 'Chips   (Freq 3)   DOC1, DOC3, DOC4', bg: 'var(--c-bg)', st: 'var(--c)', y: 50 },
        { tag: 'KWIC (In Context)', ex: 'Computer Design Contains  [MEMORY]  Chips /', bg: 'var(--bg)', st: 'var(--line-strong)', y: 102 },
        { tag: 'KWAC (And Context)', ex: 'MEMORY:  Computer Design Contains Memory Chips', bg: 'var(--ok-bg)', st: 'var(--ok)', y: 154 },
      ].map((r) => (
        <g key={r.tag}>
          <rect x="24" y={r.y} width="240" height="40" rx="8" fill={r.bg} stroke={r.st} />
          <text x="144" y={r.y + 24} textAnchor="middle" fontSize="12" fontWeight="700">{r.tag}</text>
          <rect x="282" y={r.y} width="574" height="40" rx="8" fill="var(--surface)" stroke="var(--line)" />
          <text x="300" y={r.y + 24} fontSize="12.5" className="svg-mono">{r.ex}</text>
        </g>
      ))}
    </svg>
  );
}

export function ItemClusteringMatrixSvg() {
  return (
    <svg viewBox="0 0 860 190" className="irs-svg" role="img" aria-label="Item Similarity Matrix Thresholding to Binary Matrix">
      <defs>
        <marker id="icm-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--c)" />
        </marker>
      </defs>
      <rect x="4" y="4" width="852" height="182" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <rect x="28" y="22" width="230" height="146" rx="10" fill="var(--bg)" stroke="var(--line-strong)" />
      <text x="143" y="46" textAnchor="middle" fontSize="12" fontWeight="700">Term-Term Similarity Matrix</text>
      <text x="143" y="74" textAnchor="middle" fontSize="12" className="svg-mono">T1: [ -   15   2   0 ]</text>
      <text x="143" y="96" textAnchor="middle" fontSize="12" className="svg-mono">T2: [ 15  -   12   3 ]</text>
      <text x="143" y="118" textAnchor="middle" fontSize="12" className="svg-mono">T3: [  2  12   -  11 ]</text>
      <text x="143" y="140" textAnchor="middle" fontSize="12" className="svg-mono">T4: [  0   3  11   - ]</text>

      <line x1="258" y1="95" x2="342" y2="95" stroke="var(--c)" strokeWidth="2" markerEnd="url(#icm-a)" />
      <text x="300" y="84" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--c-ink)">Sim &gt;= 10</text>

      <rect x="348" y="22" width="220" height="146" rx="10" fill="var(--c-bg)" stroke="var(--c)" />
      <text x="458" y="46" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--c-ink)">Binary Matrix</text>
      <text x="458" y="74" textAnchor="middle" fontSize="12" className="svg-mono">T1: [ -  1  0  0 ]</text>
      <text x="458" y="96" textAnchor="middle" fontSize="12" className="svg-mono">T2: [ 1  -  1  0 ]</text>
      <text x="458" y="118" textAnchor="middle" fontSize="12" className="svg-mono">T3: [ 0  1  -  1 ]</text>
      <text x="458" y="140" textAnchor="middle" fontSize="12" className="svg-mono">T4: [ 0  0  1  - ]</text>

      <line x1="568" y1="95" x2="628" y2="95" stroke="var(--c)" strokeWidth="2" markerEnd="url(#icm-a)" />

      <rect x="634" y="44" width="198" height="102" rx="10" fill="var(--ok-bg)" stroke="var(--ok)" />
      <text x="733" y="74" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ok)">Clique / String Clusters</text>
      <text x="733" y="102" textAnchor="middle" fontSize="11.5" className="svg-mono">{'{T1, T2}'}</text>
      <text x="733" y="122" textAnchor="middle" fontSize="11.5" className="svg-mono">{'{T2, T3}, {T3, T4}'}</text>
    </svg>
  );
}

export function ClusterDendrogramSvg() {
  return (
    <svg viewBox="0 0 840 245" className="irs-svg" role="img" aria-label="Hierarchical Clustering Dendrogram">
      <rect x="4" y="4" width="832" height="237" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="275" y="30" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        Hierarchical Clustering Dendrogram
      </text>

      {/* Dendrogram tree on left */}
      <line x1="275" y1="42" x2="275" y2="62" stroke="var(--fg)" strokeWidth="2" />
      <line x1="145" y1="62" x2="405" y2="62" stroke="var(--fg)" strokeWidth="2" />
      <line x1="145" y1="62" x2="145" y2="102" stroke="var(--c)" strokeWidth="2" />
      <line x1="405" y1="62" x2="405" y2="102" stroke="var(--c)" strokeWidth="2" />

      <line x1="90" y1="102" x2="200" y2="102" stroke="var(--c)" strokeWidth="2" />
      <line x1="90" y1="102" x2="90" y2="180" stroke="var(--c)" strokeWidth="2" />
      <line x1="200" y1="102" x2="200" y2="145" stroke="var(--c)" strokeWidth="2" />
      <line x1="165" y1="145" x2="235" y2="145" stroke="var(--ok)" strokeWidth="2" />
      <line x1="165" y1="145" x2="165" y2="180" stroke="var(--ok)" strokeWidth="2" />
      <line x1="235" y1="145" x2="235" y2="180" stroke="var(--ok)" strokeWidth="2" />

      <line x1="350" y1="102" x2="460" y2="102" stroke="var(--c)" strokeWidth="2" />
      <line x1="350" y1="102" x2="350" y2="180" stroke="var(--c)" strokeWidth="2" />
      <line x1="460" y1="102" x2="460" y2="180" stroke="var(--c)" strokeWidth="2" />

      {[
        { x: 90, l: 'D1' },
        { x: 165, l: 'D2' },
        { x: 235, l: 'D3' },
        { x: 350, l: 'D4' },
        { x: 460, l: 'D5' },
      ].map((leaf) => (
        <g key={leaf.l}>
          <rect x={leaf.x - 22} y={180} width={44} height={28} rx={6} fill="var(--c-bg)" stroke="var(--c)" />
          <text x={leaf.x} y={199} textAnchor="middle" fontSize="11.5" fontWeight="700" className="svg-mono">{leaf.l}</text>
        </g>
      ))}

      {/* Right Callouts */}
      <rect x="530" y="42" width="280" height="82" rx="10" fill="var(--c-bg)" stroke="var(--c)" />
      <text x="546" y="66" fontSize="12.5" fontWeight="800" fill="var(--c-ink)">HAC (Agglomerative ↑)</text>
      <text x="546" y="88" fontSize="11" className="svg-muted">Starts with N singletons and merges</text>
      <text x="546" y="106" fontSize="11" className="svg-muted">closest pairs bottom-up to root.</text>

      <rect x="530" y="140" width="280" height="82" rx="10" fill="var(--hot-bg)" stroke="var(--hot)" />
      <text x="546" y="164" fontSize="12.5" fontWeight="800" fill="var(--hot)">Divisive (Top-Down ↓)</text>
      <text x="546" y="186" fontSize="11" className="svg-muted">Starts with 1 global cluster and splits</text>
      <text x="546" y="204" fontSize="11" className="svg-muted">into finer sub-clusters top-down.</text>
    </svg>
  );
}
