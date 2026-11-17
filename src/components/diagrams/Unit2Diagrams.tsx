import React from 'react';

export function IndexingProcessFlowSvg() {
  const nodes = [
    { t: 'Raw Document', s: 'Item Text & Metadata' },
    { t: 'Scope & Selection', s: 'Exhaustivity vs Specificity' },
    { t: 'Token Normalization', s: 'Stopwords & Stemming' },
    { t: 'Controlled Vocab', s: 'Thesaurus / Concept Link' },
    { t: 'Index Structure', s: 'Inverted / PAT / Signature' },
  ];
  return (
    <svg viewBox="0 0 880 155" className="irs-svg" role="img" aria-label="Cataloging and Indexing Process">
      <defs>
        <marker id="idx-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--c)" />
        </marker>
      </defs>
      <rect x="4" y="4" width="872" height="147" rx="14" fill="var(--surface)" stroke="var(--line)" />
      {nodes.map((n, i) => {
        const x = 18 + i * 172;
        return (
          <g key={n.t}>
            <rect x={x} y={32} width={152} height={88} rx={10} fill={i === 4 ? 'var(--c-bg)' : 'var(--bg)'} stroke="var(--c)" strokeWidth={i === 4 ? 2 : 1.3} />
            <text x={x + 76} y={66} textAnchor="middle" fontSize="12.5" fontWeight="700" fill="var(--c-ink)">{n.t}</text>
            <text x={x + 76} y={88} textAnchor="middle" fontSize="10.5" className="svg-muted">{n.s}</text>
            {i < nodes.length - 1 && (
              <line x1={x + 152} y1={76} x2={x + 170} y2={76} stroke="var(--c)" strokeWidth="2" markerEnd="url(#idx-arr)" />
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function MajorDataStructuresSvg() {
  return (
    <svg viewBox="0 0 820 265" className="irs-svg" role="img" aria-label="Major Data Structure Architecture in IRS">
      <defs>
        <marker id="mds-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--c)" />
        </marker>
      </defs>
      <rect x="4" y="4" width="812" height="257" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <rect x="300" y="18" width="220" height="42" rx="10" fill="var(--c-bg)" stroke="var(--c)" strokeWidth="1.8" />
      <text x="410" y="44" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--c-ink)">Item Normalization</text>
      <line x1="410" y1="60" x2="410" y2="86" stroke="var(--c)" strokeWidth="2" markerEnd="url(#mds-a)" />

      <rect x="290" y="90" width="240" height="44" rx="10" fill="var(--surface-2)" stroke="var(--line-strong)" />
      <text x="410" y="117" textAnchor="middle" fontSize="13" fontWeight="700">Document File Creation</text>

      <line x1="350" y1="134" x2="210" y2="162" stroke="var(--c)" strokeWidth="2" markerEnd="url(#mds-a)" />
      <line x1="470" y1="134" x2="610" y2="162" stroke="var(--c)" strokeWidth="2" markerEnd="url(#mds-a)" />

      <rect x="85" y="166" width="210" height="36" rx="8" fill="var(--bg)" stroke="var(--c)" />
      <text x="190" y="189" textAnchor="middle" fontSize="12" fontWeight="700">Document Manager</text>
      <line x1="190" y1="202" x2="190" y2="218" stroke="var(--c)" strokeWidth="1.8" markerEnd="url(#mds-a)" />
      <rect x="85" y="220" width="210" height="30" rx="12" fill="var(--ok-bg)" stroke="var(--ok)" />
      <text x="190" y="239" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="var(--ok)">Original Document File</text>

      <rect x="525" y="166" width="210" height="36" rx="8" fill="var(--bg)" stroke="var(--c)" />
      <text x="630" y="189" textAnchor="middle" fontSize="12" fontWeight="700">Document Search Manager</text>
      <line x1="630" y1="202" x2="630" y2="218" stroke="var(--c)" strokeWidth="1.8" markerEnd="url(#mds-a)" />
      <rect x="525" y="220" width="210" height="30" rx="12" fill="var(--hot-bg)" stroke="var(--hot)" />
      <text x="630" y="239" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="var(--hot)">Processing Token Index</text>
    </svg>
  );
}

export function SuccessorTreeSvg() {
  return (
    <svg viewBox="0 0 820 265" className="irs-svg" role="img" aria-label="Successor Variety Symbol Tree for bag, barn, bring, box, bottle">
      <rect x="4" y="4" width="812" height="257" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="410" y="28" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        Successor Variety Symbol Tree: &#123;bag, barn, bring, box, bottle&#125;
      </text>

      {/* Root b */}
      <line x1="410" y1="74" x2="170" y2="108" stroke="var(--line-strong)" strokeWidth="1.8" />
      <line x1="410" y1="74" x2="410" y2="108" stroke="var(--line-strong)" strokeWidth="1.8" />
      <line x1="410" y1="74" x2="650" y2="108" stroke="var(--line-strong)" strokeWidth="1.8" />
      <rect x="386" y="44" width="48" height="30" rx="6" fill="var(--c-bg)" stroke="var(--c)" strokeWidth="2" />
      <text x="410" y="64" textAnchor="middle" fontSize="13" fontWeight="800" className="svg-mono">b (3)</text>

      {/* Left branch: a -> g, r -> n */}
      <line x1="170" y1="138" x2="105" y2="172" stroke="var(--line-strong)" strokeWidth="1.6" />
      <line x1="170" y1="138" x2="235" y2="172" stroke="var(--line-strong)" strokeWidth="1.6" />
      <rect x="148" y="108" width="44" height="30" rx="6" fill="var(--bg)" stroke="var(--c)" />
      <text x="170" y="128" textAnchor="middle" fontSize="12.5" fontWeight="700" className="svg-mono">a</text>

      <rect x="85" y="172" width="40" height="28" rx="6" fill="var(--ok-bg)" stroke="var(--ok)" />
      <text x="105" y="191" textAnchor="middle" fontSize="12" fontWeight="700" className="svg-mono">g</text>

      <line x1="235" y1="200" x2="235" y2="218" stroke="var(--line-strong)" strokeWidth="1.6" />
      <rect x="215" y="172" width="40" height="28" rx="6" fill="var(--bg)" stroke="var(--line-strong)" />
      <text x="235" y="191" textAnchor="middle" fontSize="12" className="svg-mono">r</text>
      <rect x="215" y="218" width="40" height="28" rx="6" fill="var(--ok-bg)" stroke="var(--ok)" />
      <text x="235" y="237" textAnchor="middle" fontSize="12" fontWeight="700" className="svg-mono">n</text>

      {/* Center branch: r -> i -> n -> g */}
      <line x1="410" y1="138" x2="410" y2="156" stroke="var(--line-strong)" strokeWidth="1.6" />
      <line x1="410" y1="184" x2="410" y2="202" stroke="var(--line-strong)" strokeWidth="1.6" />
      <rect x="390" y="108" width="40" height="30" rx="6" fill="var(--bg)" stroke="var(--c)" />
      <text x="410" y="128" textAnchor="middle" fontSize="12" className="svg-mono">r</text>
      <rect x="390" y="156" width="40" height="28" rx="6" fill="var(--bg)" stroke="var(--line-strong)" />
      <text x="410" y="175" textAnchor="middle" fontSize="12" className="svg-mono">i</text>
      <rect x="372" y="202" width="76" height="32" rx="6" fill="var(--ok-bg)" stroke="var(--ok)" />
      <text x="410" y="222" textAnchor="middle" fontSize="11.5" fontWeight="700" className="svg-mono">n → g</text>

      {/* Right branch: o -> t -> t->l->e & o -> x */}
      <line x1="650" y1="138" x2="585" y2="172" stroke="var(--line-strong)" strokeWidth="1.6" />
      <line x1="650" y1="138" x2="725" y2="172" stroke="var(--line-strong)" strokeWidth="1.6" />
      <rect x="628" y="108" width="44" height="30" rx="6" fill="var(--bg)" stroke="var(--c)" />
      <text x="650" y="128" textAnchor="middle" fontSize="12.5" fontWeight="700" className="svg-mono">o</text>

      <rect x="540" y="172" width="90" height="30" rx="6" fill="var(--ok-bg)" stroke="var(--ok)" />
      <text x="585" y="191" textAnchor="middle" fontSize="11.5" fontWeight="700" className="svg-mono">t-t-l-e</text>
      <rect x="705" y="172" width="40" height="30" rx="6" fill="var(--ok-bg)" stroke="var(--ok)" />
      <text x="725" y="191" textAnchor="middle" fontSize="12" fontWeight="700" className="svg-mono">x</text>
    </svg>
  );
}

export function InvertedFileStructureSvg() {
  const terms = [
    { w: 'bit (2)', list: '1, 3', y: 78 },
    { w: 'byte (3)', list: '1, 2, 4', y: 120 },
    { w: 'computer (3)', list: '1, 3, 4', y: 162 },
    { w: 'memory (2)', list: '2, 3', y: 204 },
  ];
  const docs = [
    { id: 'DOC #1', text: 'computer, bit, byte', y: 78 },
    { id: 'DOC #2', text: 'memory, byte', y: 120 },
    { id: 'DOC #3', text: 'computer, bit, memory', y: 162 },
    { id: 'DOC #4', text: 'byte, computer', y: 204 },
  ];
  return (
    <svg viewBox="0 0 880 260" className="irs-svg" role="img" aria-label="Inverted File Structure Components">
      <defs>
        <marker id="inv-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--c)" />
        </marker>
      </defs>
      <rect x="4" y="4" width="872" height="252" rx="14" fill="var(--surface)" stroke="var(--line)" />

      {/* Column Headers */}
      <text x="155" y="38" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="var(--c-ink)">1. DOCUMENT FILE</text>
      <text x="455" y="38" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="var(--c-ink)">2. DICTIONARY (VOCABULARY)</text>
      <text x="735" y="38" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="var(--c-ink)">3. INVERSION LISTS</text>

      {docs.map((d) => (
        <g key={d.id}>
          <rect x="24" y={d.y - 20} width="265" height="36" rx="8" fill="var(--bg)" stroke="var(--line-strong)" />
          <text x="36" y={d.y + 3} fontSize="11.5" fontWeight="700" className="svg-mono" fill="var(--c-ink)">{d.id}:</text>
          <text x="95" y={d.y + 3} fontSize="11.5" className="svg-muted">{d.text}</text>
        </g>
      ))}

      {terms.map((t) => (
        <g key={t.w}>
          <rect x="355" y={t.y - 20} width="200" height="36" rx="8" fill="var(--c-bg)" stroke="var(--c)" strokeWidth="1.5" />
          <text x="455" y={t.y + 3} textAnchor="middle" fontSize="12" fontWeight="700" className="svg-mono">{t.w}</text>
          <line x1="555" y1={t.y - 2} x2="625" y2={t.y - 2} stroke="var(--c)" strokeWidth="1.8" markerEnd="url(#inv-arr)" />
          <rect x="630" y={t.y - 20} width="215" height="36" rx="8" fill="var(--ok-bg)" stroke="var(--ok)" />
          <text x="737" y={t.y + 3} textAnchor="middle" fontSize="12" fontWeight="700" className="svg-mono" fill="var(--ok)">
            {`→ Docs [ ${t.list} ]`}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function NgramSlidingWindowSvg() {
  const bigrams = ['#C', 'CO', 'OM', 'MP', 'PU', 'UT', 'TE', 'ER', 'R#'];
  const trigrams = ['#CO', 'COM', 'OMP', 'MPU', 'PUT', 'UTE', 'TER', 'ER#'];
  return (
    <svg viewBox="0 0 880 215" className="irs-svg" role="img" aria-label="N-Gram Sliding Window Architecture">
      <rect x="4" y="4" width="872" height="207" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="440" y="34" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        N-Gram Sliding Window Decomposition of Token &quot;COMPUTER&quot;
      </text>

      <text x="26" y="84" fontSize="12" fontWeight="700">Bi-grams (N=2):</text>
      {bigrams.map((g, i) => (
        <g key={g + i}>
          <rect x={150 + i * 76} y={62} width={64} height={36} rx={7} fill="var(--c-bg)" stroke="var(--c)" />
          <text x={182 + i * 76} y={85} textAnchor="middle" fontSize="12.5" fontWeight="700" className="svg-mono">{g}</text>
        </g>
      ))}

      <text x="26" y="146" fontSize="12" fontWeight="700">Tri-grams (N=3):</text>
      {trigrams.map((g, i) => (
        <g key={g + i}>
          <rect x={150 + i * 84} y={124} width={72} height={36} rx={7} fill="var(--hot-bg)" stroke="var(--hot)" />
          <text x={186 + i * 84} y={147} textAnchor="middle" fontSize="12.5" fontWeight="700" className="svg-mono" fill="var(--hot)">{g}</text>
        </g>
      ))}

      <text x="440" y="190" textAnchor="middle" fontSize="11.5" className="svg-muted">
        Tolerates spelling/OCR errors (~&quot;COMPUTRE&quot; still shares most 2-grams and 3-grams with &quot;COMPUTER&quot;)
      </text>
    </svg>
  );
}

export function PatBinaryTreeSvg() {
  return (
    <svg viewBox="0 0 860 270" className="irs-svg" role="img" aria-label="PAT Binary Patricia Tree">
      <rect x="4" y="4" width="852" height="262" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="430" y="28" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        PAT (Patricia) Binary Radix Tree over Sistring Bit Prefixes
      </text>

      {/* Root R */}
      <line x1="430" y1="68" x2="230" y2="108" stroke="var(--line-strong)" strokeWidth="2" />
      <line x1="430" y1="68" x2="630" y2="108" stroke="var(--line-strong)" strokeWidth="2" />
      <rect x="404" y="42" width="52" height="28" rx="7" fill="var(--c-bg)" stroke="var(--c)" strokeWidth="2" />
      <text x="430" y="61" textAnchor="middle" fontSize="12.5" fontWeight="800" className="svg-mono">R (bit1)</text>

      {/* Level 1 */}
      <line x1="230" y1="136" x2="120" y2="176" stroke="var(--line-strong)" strokeWidth="1.6" />
      <line x1="230" y1="136" x2="340" y2="176" stroke="var(--line-strong)" strokeWidth="1.6" />
      <rect x="200" y="108" width="60" height="28" rx="7" fill="var(--bg)" stroke="var(--c)" />
      <text x="230" y="127" textAnchor="middle" fontSize="12" fontWeight="700" className="svg-mono">0</text>

      <line x1="630" y1="136" x2="530" y2="176" stroke="var(--line-strong)" strokeWidth="1.6" />
      <line x1="630" y1="136" x2="730" y2="176" stroke="var(--line-strong)" strokeWidth="1.6" />
      <rect x="600" y="108" width="60" height="28" rx="7" fill="var(--bg)" stroke="var(--c)" />
      <text x="630" y="127" textAnchor="middle" fontSize="12" fontWeight="700" className="svg-mono">1</text>

      {/* Level 2 leaves */}
      {[
        { x: 120, t: '00 → 000 / 001', leaf: false },
        { x: 340, t: '01 → 01100 / 01101', leaf: true },
        { x: 530, t: '10 → 1000 / 1001', leaf: true },
        { x: 730, t: '11 (Sistring Leaf)', leaf: true },
      ].map((n) => (
        <g key={n.t}>
          <rect x={n.x - 86} y={176} width={172} height={34} rx={8} fill={n.leaf ? 'var(--ok-bg)' : 'var(--bg)'} stroke={n.leaf ? 'var(--ok)' : 'var(--line-strong)'} />
          <text x={n.x} y={197} textAnchor="middle" fontSize="11" fontWeight="700" className="svg-mono">{n.t}</text>
        </g>
      ))}
      <text x="430" y="242" textAnchor="middle" fontSize="11.5" className="svg-muted">
        Internal nodes compare only the distinguishing bit index; leaves store pointers directly to text positions (Sistrings)
      </text>
    </svg>
  );
}

export function SignatureFileCodingSvg() {
  return (
    <svg viewBox="0 0 880 220" className="irs-svg" role="img" aria-label="Superimposed Coding Signature File">
      <defs>
        <marker id="sig-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--c)" />
        </marker>
      </defs>
      <rect x="4" y="4" width="872" height="212" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="440" y="30" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        Superimposed Coding: Block Signature Construction
      </text>

      <rect x="28" y="54" width="190" height="106" rx="10" fill="var(--bg)" stroke="var(--line-strong)" />
      <text x="123" y="78" textAnchor="middle" fontSize="12" fontWeight="700">Document Block</text>
      <text x="123" y="102" textAnchor="middle" fontSize="11.5" className="svg-mono">word 1: &quot;free&quot;</text>
      <text x="123" y="122" textAnchor="middle" fontSize="11.5" className="svg-mono">word 2: &quot;text&quot;</text>
      <text x="123" y="142" textAnchor="middle" fontSize="11.5" className="svg-mono">word 3: &quot;search&quot;</text>

      <line x1="218" y1="107" x2="278" y2="107" stroke="var(--c)" strokeWidth="2" markerEnd="url(#sig-arr)" />

      <rect x="284" y="54" width="246" height="106" rx="10" fill="var(--c-bg)" stroke="var(--c)" />
      <text x="407" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--c-ink)">m-Bit Word Signatures</text>
      <text x="407" y="102" textAnchor="middle" fontSize="12" className="svg-mono">0 0 1 0 0 0 1 1 0 0</text>
      <text x="407" y="122" textAnchor="middle" fontSize="12" className="svg-mono">0 1 0 0 1 0 0 1 0 0</text>
      <text x="407" y="142" textAnchor="middle" fontSize="12" className="svg-mono">1 0 0 0 0 1 0 0 0 1</text>

      <line x1="530" y1="107" x2="594" y2="107" stroke="var(--c)" strokeWidth="2" markerEnd="url(#sig-arr)" />
      <text x="562" y="96" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--c-ink)">OR</text>

      <rect x="600" y="64" width="250" height="88" rx="10" fill="var(--ok-bg)" stroke="var(--ok)" strokeWidth="1.6" />
      <text x="725" y="90" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ok)">Block Signature</text>
      <text x="725" y="118" textAnchor="middle" fontSize="13.5" fontWeight="800" className="svg-mono" fill="var(--ok)">
        1 1 1 0 1 1 1 1 0 1
      </text>
      <text x="725" y="140" textAnchor="middle" fontSize="10" className="svg-muted">Requires False-Drop Verification</text>

      <text x="440" y="192" textAnchor="middle" fontSize="11.5" className="svg-muted">
        Query matches Block when (BlockSig AND QuerySig) == QuerySig; false drops checked directly in Document File
      </text>
    </svg>
  );
}

export function XmlDomHypertextSvg() {
  return (
    <svg viewBox="0 0 860 215" className="irs-svg" role="img" aria-label="Hypertext Links and XML DOM Hierarchy">
      <rect x="4" y="4" width="852" height="207" rx="14" fill="var(--surface)" stroke="var(--line)" />

      {/* Left: Hypertext */}
      <rect x="22" y="20" width="380" height="174" rx="12" fill="var(--bg)" stroke="var(--line-strong)" />
      <text x="212" y="44" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--c-ink)">Hypertext Node &amp; Link Graph</text>
      <rect x="44" y="72" width="120" height="44" rx="8" fill="var(--surface)" stroke="var(--c)" />
      <text x="104" y="99" textAnchor="middle" fontSize="12" fontWeight="700">Node A (Anchor)</text>
      <line x1="164" y1="94" x2="250" y2="94" stroke="var(--c)" strokeWidth="2" />
      <text x="207" y="86" textAnchor="middle" fontSize="10" className="svg-mono" fill="var(--c-ink)">href link</text>
      <rect x="252" y="72" width="126" height="44" rx="8" fill="var(--c-bg)" stroke="var(--c)" />
      <text x="315" y="99" textAnchor="middle" fontSize="12" fontWeight="700">Target Node B</text>
      <text x="212" y="156" textAnchor="middle" fontSize="11" className="svg-muted">Non-linear traversal across typed media viewers</text>

      {/* Right: XML DOM Tree */}
      <rect x="430" y="20" width="408" height="174" rx="12" fill="var(--surface-2)" stroke="var(--accent)" />
      <text x="634" y="44" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--c-ink)">XML Structural DOM Tree</text>
      <line x1="634" y1="86" x2="534" y2="118" stroke="var(--line-strong)" strokeWidth="1.6" />
      <line x1="634" y1="86" x2="634" y2="118" stroke="var(--line-strong)" strokeWidth="1.6" />
      <line x1="634" y1="86" x2="734" y2="118" stroke="var(--line-strong)" strokeWidth="1.6" />
      <rect x="574" y="56" width="120" height="30" rx="7" fill="var(--c-bg)" stroke="var(--c)" />
      <text x="634" y="76" textAnchor="middle" fontSize="11.5" fontWeight="700" className="svg-mono">&lt;article&gt;</text>

      {[
        { x: 484, tag: '<title>', val: 'IR Guide' },
        { x: 584, tag: '<author>', val: 'Kowalski' },
        { x: 684, tag: '<body>', val: 'Structured' },
      ].map((n) => (
        <g key={n.tag}>
          <rect x={n.x} y={118} width={100} height={54} rx={7} fill="var(--surface)" stroke="var(--c)" />
          <text x={n.x + 50} y={139} textAnchor="middle" fontSize="11" fontWeight="700" className="svg-mono" fill="var(--c-ink)">{n.tag}</text>
          <text x={n.x + 50} y={158} textAnchor="middle" fontSize="10.5" className="svg-muted">{n.val}</text>
        </g>
      ))}
    </svg>
  );
}

export function HmmNoisyChannelSvg() {
  return (
    <svg viewBox="0 0 860 210" className="irs-svg" role="img" aria-label="Hidden Markov Model in IRS">
      <defs>
        <marker id="hmm-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--c)" />
        </marker>
      </defs>
      <rect x="4" y="4" width="852" height="202" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="430" y="30" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        Hidden Markov Model (Noisy Channel State Transitions)
      </text>

      {[
        { x: 110, s: 'State S1', q: 'Term Q1' },
        { x: 370, s: 'State S2', q: 'Term Q2' },
        { x: 630, s: 'State Sn', q: 'Term Qn' },
      ].map((st, idx) => (
        <g key={st.s}>
          <ellipse cx={st.x + 60} cy={80} rx={65} ry={26} fill="var(--c-bg)" stroke="var(--c)" strokeWidth="1.8" />
          <text x={st.x + 60} y={85} textAnchor="middle" fontSize="12.5" fontWeight="700" fill="var(--c-ink)">{st.s}</text>
          <line x1={st.x + 60} y1={106} x2={st.x + 60} y2={140} stroke="var(--hot)" strokeWidth="1.8" markerEnd="url(#hmm-a)" />
          <text x={st.x + 92} y={128} fontSize="10" className="svg-mono" fill="var(--hot)">B(O|S)</text>
          <rect x={st.x + 5} y={144} width={110} height={32} rx={8} fill="var(--hot-bg)" stroke="var(--hot)" />
          <text x={st.x + 60} y={165} textAnchor="middle" fontSize="12" fontWeight="700" className="svg-mono" fill="var(--hot)">{st.q}</text>
          {idx < 2 && (
            <g>
              <line x1={st.x + 125} y1={80} x2={st.x + 193} y2={80} stroke="var(--c)" strokeWidth="2" markerEnd="url(#hmm-a)" />
              <text x={st.x + 160} y={70} textAnchor="middle" fontSize="10.5" className="svg-mono" fill="var(--c-ink)">A(ij)</text>
            </g>
          )}
        </g>
      ))}
    </svg>
  );
}

export function IndexScopeVennSvg() {
  return (
    <svg viewBox="0 0 880 235" className="irs-svg" role="img" aria-label="Overlap Between Document File, Public Index File, and Private Index File plus 6 Text Processing Phases">
      <rect x="4" y="4" width="872" height="227" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="440" y="28" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        Document File vs Public/Private Index Files &amp; 6 Text Processing Phases
      </text>

      {/* Left: Venn diagram from U2 notes p.4 */}
      <rect x="20" y="44" width="380" height="172" rx="12" fill="var(--bg)" stroke="var(--line-strong)" />
      <text x="210" y="66" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--brick-ink)">Index Scope Overlap</text>
      <ellipse cx="145" cy="128" rx="85" ry="40" fill="var(--surface)" fillOpacity="0.8" stroke="var(--muted)" strokeWidth="1.5" />
      <ellipse cx="265" cy="128" rx="95" ry="44" fill="var(--brick-bg)" fillOpacity="0.65" stroke="var(--brick)" strokeWidth="2.5" />
      <ellipse cx="235" cy="164" rx="68" ry="24" fill="var(--c-bg)" fillOpacity="0.7" stroke="var(--c)" strokeWidth="1.5" />
      <text x="115" y="130" textAnchor="middle" fontSize="10.5" fontWeight="700">Document File</text>
      <text x="278" y="124" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--brick-ink)">Public Index File</text>
      <text x="235" y="168" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--c-ink)">Private Index File</text>

      {/* Right: Fig 2.3 Text Processing Phases */}
      <rect x="420" y="44" width="440" height="172" rx="12" fill="var(--surface-2)" stroke="var(--brick-border)" />
      <text x="640" y="66" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--c-ink)">Fig 2.3: 6 Text Processing Phases -&gt; Index Terms</text>
      {[
        { t: '1. Doc Parsing', x: 436, y: 82 },
        { t: '2. Lexical Analysis', x: 580, y: 82 },
        { t: '3. Stop-Word Drop', x: 724, y: 82 },
        { t: '4. Phrase Detect', x: 436, y: 142 },
        { t: '5. Stem & Lemma', x: 580, y: 142 },
        { t: '6. Term Weighting', x: 724, y: 142 },
      ].map((p) => (
        <g key={p.t}>
          <rect x={p.x} y={p.y} width={124} height={42} rx={8} fill="var(--surface)" stroke="var(--brick)" strokeWidth="1.3" />
          <text x={p.x + 62} y={p.y + 25} textAnchor="middle" fontSize="10.5" fontWeight="700">{p.t}</text>
        </g>
      ))}
    </svg>
  );
}

export function BayesianTwoLevelSvg() {
  return (
    <svg viewBox="0 0 860 220" className="irs-svg" role="img" aria-label="Two-Level Bayesian Inference Network in Automatic Indexing">
      <defs>
        <marker id="bay-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--brick)" />
        </marker>
      </defs>
      <rect x="4" y="4" width="852" height="212" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="430" y="28" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        Two-Level Bayesian Network (Evidential Reasoning: Query Concept c vs Item Features f)
      </text>

      <circle cx="430" cy="76" r="28" fill="var(--c)" />
      <text x="430" y="81" textAnchor="middle" fontSize="13" fontWeight="800" style={{ fill: '#ffffff' }}>c1</text>
      <text x="530" y="80" fontSize="11" className="svg-muted">Query Concept (Parent Node)</text>

      <line x1="406" y1="96" x2="245" y2="144" stroke="var(--brick)" strokeWidth="2" markerEnd="url(#bay-arr)" />
      <line x1="430" y1="104" x2="430" y2="142" stroke="var(--brick)" strokeWidth="2" markerEnd="url(#bay-arr)" />
      <line x1="454" y1="96" x2="615" y2="144" stroke="var(--brick)" strokeWidth="2" markerEnd="url(#bay-arr)" />

      {[
        { cx: 225, l: 'f11' },
        { cx: 430, l: 'f12' },
        { cx: 635, l: 'f1j' },
      ].map((n) => (
        <g key={n.l}>
          <circle cx={n.cx} cy={170} r={24} fill="var(--brick-bg)" stroke="var(--brick)" strokeWidth="2" />
          <text x={n.cx} y={175} textAnchor="middle" fontSize="12.5" fontWeight="800" fill="var(--brick-ink)">{n.l}</text>
        </g>
      ))}
      <text x="430" y="206" textAnchor="middle" fontSize="10.5" className="svg-muted">
        Leaf nodes represent item concepts (f); arcs compute relative P(relevant | evidence)
      </text>
    </svg>
  );
}
