import React from 'react';

export function SearchBindingLevelsSvg() {
  const levels = [
    { step: '1. User Need', ex: 'Natural Problem Concept', bg: 'var(--bg)', st: 'var(--line-strong)' },
    { step: '2. Search Statement', ex: 'Boolean / NL Query Text', bg: 'var(--hot-bg)', st: 'var(--hot)' },
    { step: '3. Vocabulary Binding', ex: 'Map to Controlled Thesaurus', bg: 'var(--c-bg)', st: 'var(--c)' },
    { step: '4. System Meta-Language', ex: 'Machine Index Stem IDs & Exec', bg: 'var(--ok-bg)', st: 'var(--ok)' },
  ];
  return (
    <svg viewBox="0 0 880 150" className="irs-svg" role="img" aria-label="Search Statement and Binding Levels">
      <defs>
        <marker id="bind-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--c)" />
        </marker>
      </defs>
      <rect x="4" y="4" width="872" height="142" rx="14" fill="var(--surface)" stroke="var(--line)" />
      {levels.map((l, i) => {
        const x = 18 + i * 215;
        return (
          <g key={l.step}>
            <rect x={x} y={32} width={196} height={86} rx={10} fill={l.bg} stroke={l.st} strokeWidth="1.6" />
            <text x={x + 98} y={66} textAnchor="middle" fontSize="12" fontWeight="800">{l.step}</text>
            <text x={x + 98} y={88} textAnchor="middle" fontSize="10.5" className="svg-muted">{l.ex}</text>
            {i < levels.length - 1 && (
              <line x1={x + 196} y1={75} x2={x + 213} y2={75} stroke="var(--c)" strokeWidth="2" markerEnd="url(#bind-a)" />
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function RelevanceFeedbackShiftSvg() {
  return (
    <svg viewBox="0 0 860 255" className="irs-svg" role="img" aria-label="Impact of Positive and Negative Relevance Feedback">
      <defs>
        <marker id="rf-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--c)" />
        </marker>
      </defs>
      <rect x="4" y="4" width="852" height="247" rx="14" fill="var(--surface)" stroke="var(--line)" />

      {/* Panel 1: Positive Feedback */}
      <rect x="24" y="20" width="390" height="214" rx="12" fill="var(--bg)" stroke="var(--c)" />
      <text x="219" y="44" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--c-ink)">
        Positive Feedback (Pulls Query Toward Relevant Hits)
      </text>
      <ellipse cx="305" cy="128" rx="68" ry="62" fill="var(--ok-bg)" stroke="var(--ok)" strokeWidth="1.6" />
      <text x="305" y="88" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--ok)">Relevant Cluster</text>
      {/* Scatter non-relevant docs */}
      {[
        [85, 92], [115, 138], [148, 86], [100, 175], [160, 170], [202, 76], [206, 185],
      ].map(([cx, cy], idx) => (
        <circle key={idx} cx={cx} cy={cy} r={6} fill="var(--surface)" stroke="var(--muted)" strokeWidth="1.5" />
      ))}
      {/* Relevant docs inside ellipse */}
      {[[275, 118], [322, 112], [335, 152], [295, 162]].map(([cx, cy], idx) => (
        <circle key={idx} cx={cx} cy={cy} r={6} fill="var(--ok)" />
      ))}
      {/* Original Q0 -> Revised Qn */}
      <rect x="212" y="128" width="14" height="14" rx="2" fill="var(--surface)" stroke="var(--fg)" strokeWidth="2" />
      <text x="202" y="156" fontSize="11" fontWeight="700" className="svg-mono">Qo</text>
      <line x1="226" y1="135" x2="294" y2="135" stroke="var(--c)" strokeWidth="2.4" markerEnd="url(#rf-arr)" />
      <rect x="298" y="128" width="14" height="14" rx="2" fill="var(--c)" />
      <text x="318" y="140" fontSize="11.5" fontWeight="800" className="svg-mono" fill="var(--c-ink)">Qn</text>

      {/* Panel 2: Negative Feedback */}
      <rect x="446" y="20" width="390" height="214" rx="12" fill="var(--bg)" stroke="var(--hot)" />
      <text x="641" y="44" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--hot)">
        Negative Feedback (Pushes Query Away From Noise)
      </text>
      <ellipse cx="725" cy="118" rx="68" ry="56" fill="var(--ok-bg)" stroke="var(--ok)" strokeWidth="1.6" />
      {[
        [505, 88], [540, 145], [585, 86], [530, 185], [610, 188],
      ].map(([cx, cy], idx) => (
        <circle key={idx} cx={cx} cy={cy} r={6} fill="var(--surface)" stroke="var(--muted)" strokeWidth="1.5" />
      ))}
      {[[695, 108], [740, 102], [750, 138], [715, 148]].map(([cx, cy], idx) => (
        <circle key={idx} cx={cx} cy={cy} r={6} fill="var(--ok)" />
      ))}
      <circle cx="645" cy="196" r={6} fill="var(--bad)" />
      <text x="665" y="200" fontSize="10" fill="var(--bad)" fontWeight="700">Non-Rel</text>
      <rect x="652" y="168" width="14" height="14" rx="2" fill="var(--surface)" stroke="var(--fg)" strokeWidth="2" />
      <text x="632" y="178" fontSize="11" fontWeight="700" className="svg-mono">Qo</text>
      <line x1="665" y1="168" x2="706" y2="132" stroke="var(--c)" strokeWidth="2.4" markerEnd="url(#rf-arr)" />
      <rect x="708" y="114" width="14" height="14" rx="2" fill="var(--c)" />
      <text x="728" y="126" fontSize="11.5" fontWeight="800" className="svg-mono" fill="var(--c-ink)">Qn</text>
    </svg>
  );
}

export function SdiPushArchitectureSvg() {
  return (
    <svg viewBox="0 0 860 190" className="irs-svg" role="img" aria-label="SDI Push Architecture and LMDS Flow">
      <defs>
        <marker id="sdi-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--c)" />
        </marker>
      </defs>
      <rect x="4" y="4" width="852" height="182" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="430" y="30" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        Selective Dissemination of Information (SDI / LMDS Push Model)
      </text>

      <rect x="26" y="64" width="170" height="72" rx="10" fill="var(--bg)" stroke="var(--line-strong)" />
      <text x="111" y="96" textAnchor="middle" fontSize="12" fontWeight="700">New Item Stream</text>
      <text x="111" y="116" textAnchor="middle" fontSize="10.5" className="svg-muted">Normalized Ingest</text>

      <line x1="196" y1="100" x2="262" y2="100" stroke="var(--c)" strokeWidth="2" markerEnd="url(#sdi-a)" />

      <rect x="268" y="54" width="240" height="92" rx="10" fill="var(--c-bg)" stroke="var(--c)" strokeWidth="1.8" />
      <text x="388" y="84" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="var(--c-ink)">SDI Profile Matcher</text>
      <text x="388" y="106" textAnchor="middle" fontSize="11" className="svg-muted">Scores each incoming document</text>
      <text x="388" y="122" textAnchor="middle" fontSize="11" className="svg-muted">against stored User Profiles</text>

      <line x1="508" y1="100" x2="578" y2="100" stroke="var(--c)" strokeWidth="2" markerEnd="url(#sdi-a)" />

      <rect x="584" y="64" width="244" height="72" rx="10" fill="var(--ok-bg)" stroke="var(--ok)" strokeWidth="1.6" />
      <text x="706" y="96" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ok)">User Mail File / Alert</text>
      <text x="706" y="116" textAnchor="middle" fontSize="10.5" className="svg-muted">Delivered above threshold (LMDS)</text>
    </svg>
  );
}

export function GestaltPerceptionPrinciplesSvg() {
  return (
    <svg viewBox="0 0 900 185" className="irs-svg" role="img" aria-label="Five Gestalt Principles of Visual Perception">
      <rect x="4" y="4" width="892" height="177" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="450" y="28" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        Five Gestalt Principles Applied to Information Visualization
      </text>
      {[
        { title: '1. Proximity', desc: 'Nearby items group', x: 18 },
        { title: '2. Similarity', desc: 'Matching shape/color', x: 192 },
        { title: '3. Continuity', desc: 'Smooth eye alignment', x: 366 },
        { title: '4. Closure', desc: 'Mind completes gaps', x: 540 },
        { title: '5. Connectedness', desc: 'Lines show relation', x: 714 },
      ].map((g) => (
        <rect key={g.title} x={g.x} y={44} width={162} height={122} rx={10} fill="var(--bg)" stroke="var(--line-strong)" />
      ))}

      {/* 1. Proximity */}
      {[56, 72, 134, 150].map((cx) => (
        <circle key={cx} cx={cx} cy={90} r={6} fill="var(--c)" />
      ))}
      {/* 2. Similarity */}
      <circle cx={235} cy={90} r={7} fill="var(--c)" />
      <rect x={256} y={83} width={14} height={14} fill="var(--hot)" />
      <circle cx={288} cy={90} r={7} fill="var(--c)" />
      <rect x={306} y={83} width={14} height={14} fill="var(--hot)" />
      {/* 3. Continuity */}
      <path d="M 384 104 Q 446 66 508 104" fill="none" stroke="var(--c)" strokeWidth="2.8" />
      <line x1={384} y1={80} x2={508} y2={106} stroke="var(--muted)" strokeWidth="1.6" strokeDasharray="4 3" />
      {/* 4. Closure */}
      <path d="M 596 68 L 574 68 L 574 112 L 596 112" fill="none" stroke="var(--c)" strokeWidth="2.5" />
      <path d="M 642 68 L 664 68 L 664 112 L 642 112" fill="none" stroke="var(--c)" strokeWidth="2.5" />
      {/* 5. Connectedness */}
      <line x1={744} y1={90} x2={846} y2={90} stroke="var(--c)" strokeWidth="2.5" />
      <circle cx={744} cy={90} r={7} fill="var(--c)" />
      <circle cx={795} cy={90} r={7} fill="var(--hot)" />
      <circle cx={846} cy={90} r={7} fill="var(--c)" />

      {[
        { title: '1. Proximity', desc: 'Nearby items group', x: 18 },
        { title: '2. Similarity', desc: 'Shared style groups', x: 192 },
        { title: '3. Continuity', desc: 'Follows smooth curves', x: 366 },
        { title: '4. Closure', desc: 'Completes open bounds', x: 540 },
        { title: '5. Connectedness', desc: 'Edges bind nodes', x: 714 },
      ].map((g) => (
        <g key={g.title}>
          <text x={g.x + 81} y={136} textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--c-ink)">{g.title}</text>
          <text x={g.x + 81} y={154} textAnchor="middle" fontSize="10" className="svg-muted">{g.desc}</text>
        </g>
      ))}
    </svg>
  );
}

export function VisualizationTechnologiesSvg() {
  return (
    <svg viewBox="0 0 880 225" className="irs-svg" role="img" aria-label="Information Visualization Technologies">
      <rect x="4" y="4" width="872" height="217" rx="14" fill="var(--surface)" stroke="var(--line)" />
      <text x="440" y="28" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="var(--c-ink)">
        Core Information Visualization Systems (Kowalski Ch. 8)
      </text>

      {/* Cone Tree */}
      <rect x="20" y="44" width="198" height="164" rx="10" fill="var(--bg)" stroke="var(--c)" />
      <text x="119" y="66" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--c-ink)">Cone Tree (3D)</text>
      <ellipse cx="119" cy="142" rx="64" ry="18" fill="var(--c-bg)" stroke="var(--c)" />
      <line x1="119" y1="86" x2="62" y2="142" stroke="var(--c)" strokeWidth="1.5" />
      <line x1="119" y1="86" x2="119" y2="158" stroke="var(--c)" strokeWidth="1.5" />
      <line x1="119" y1="86" x2="176" y2="142" stroke="var(--c)" strokeWidth="1.5" />
      <circle cx="119" cy="86" r="6" fill="var(--c)" />
      <text x="119" y="186" textAnchor="middle" fontSize="10.5" className="svg-muted">Apex + rotating circle base</text>

      {/* Perspective Wall */}
      <rect x="234" y="44" width="204" height="164" rx="10" fill="var(--bg)" stroke="var(--line-strong)" />
      <text x="336" y="66" textAnchor="middle" fontSize="12" fontWeight="700">Perspective Wall</text>
      <polygon points="248,92 282,82 282,158 248,148" fill="var(--surface-2)" stroke="var(--muted)" />
      <rect x="282" y="82" width="108" height="76" fill="var(--c-bg)" stroke="var(--c)" />
      <polygon points="390,82 424,92 424,148 390,158" fill="var(--surface-2)" stroke="var(--muted)" />
      <text x="336" y="124" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--c-ink)">Focus Center</text>
      <text x="336" y="186" textAnchor="middle" fontSize="10.5" className="svg-muted">3 panels: Focus + 2 wings</text>

      {/* Tree Maps */}
      <rect x="454" y="44" width="198" height="164" rx="10" fill="var(--bg)" stroke="var(--hot)" />
      <text x="553" y="66" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--hot)">Tree Maps (Johnson-91)</text>
      <rect x="472" y="80" width="76" height="44" fill="var(--surface)" stroke="var(--fg)" />
      <text x="510" y="106" textAnchor="middle" fontSize="10">CPU</text>
      <rect x="548" y="80" width="86" height="44" fill="var(--hot-bg)" stroke="var(--fg)" />
      <text x="591" y="106" textAnchor="middle" fontSize="10">Network</text>
      <rect x="472" y="124" width="162" height="36" fill="var(--c-bg)" stroke="var(--fg)" />
      <text x="553" y="146" textAnchor="middle" fontSize="10">Software Articles</text>
      <text x="553" y="186" textAnchor="middle" fontSize="10.5" className="svg-muted">Space-filling nested rects</text>

      {/* Envision / DCARS / Cityscape */}
      <rect x="668" y="44" width="192" height="164" rx="10" fill="var(--ok-bg)" stroke="var(--ok)" />
      <text x="764" y="66" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ok)">Envision · DCARS · City</text>
      <rect x="684" y="82" width="160" height="24" rx="5" fill="var(--surface)" stroke="var(--line)" />
      <text x="764" y="98" textAnchor="middle" fontSize="10.5">Envision: 2D Icon Matrix</text>
      <rect x="684" y="114" width="160" height="24" rx="5" fill="var(--surface)" stroke="var(--line)" />
      <text x="764" y="130" textAnchor="middle" fontSize="10.5">DCARS: Query Tile Bars</text>
      <rect x="684" y="146" width="160" height="24" rx="5" fill="var(--surface)" stroke="var(--line)" />
      <text x="764" y="162" textAnchor="middle" fontSize="10.5">Cityscape: 3D Skyscrapers</text>
      <text x="764" y="186" textAnchor="middle" fontSize="10.5" className="svg-muted">Multi-attribute collections</text>
    </svg>
  );
}
