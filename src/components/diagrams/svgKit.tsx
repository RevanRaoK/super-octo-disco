import React from 'react';

export const PALETTE = ['var(--v-teal)', 'var(--v-blue)', 'var(--v-amber)', 'var(--v-violet)', 'var(--v-pink)', 'var(--v-olive)'];

interface TxtProps {
  x: number;
  y: number;
  children: React.ReactNode;
  size?: number;
  weight?: number | string;
  color?: string;
  anchor?: 'start' | 'middle' | 'end';
  mono?: boolean;
}

export function Txt({ x, y, children, size = 12, weight = 600, color, anchor = 'middle', mono }: TxtProps) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontSize={size}
      fontWeight={weight}
      className={mono ? 'svg-mono' : undefined}
      style={color ? { fill: color } : undefined}
    >
      {children}
    </text>
  );
}

export function Frame({ w, h, title }: { w: number; h: number; title?: string }) {
  return (
    <>
      <rect x={4} y={4} width={w - 8} height={h - 8} rx={14} fill="var(--surface)" stroke="var(--line)" />
      {title && (
        <Txt x={w / 2} y={28} size={13.5} weight={800} color="var(--c-ink)">
          {title}
        </Txt>
      )}
    </>
  );
}

export function ArrowDefs({ id, color = 'var(--c)' }: { id: string; color?: string }) {
  return (
    <defs>
      <marker id={id} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 1 L 10 5 L 0 9 z" fill={color} />
      </marker>
    </defs>
  );
}

interface BoxProps {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  fill?: string;
  stroke?: string;
  size?: number;
}

export function Box({ x, y, w, h, label, sub, fill = 'var(--bg)', stroke = 'var(--c)', size = 11.5 }: BoxProps) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={8} fill={fill} stroke={stroke} strokeWidth={1.4} />
      <Txt x={x + w / 2} y={sub ? y + h / 2 - 3 : y + h / 2 + 4} size={size} weight={700}>
        {label}
      </Txt>
      {sub && (
        <Txt x={x + w / 2} y={y + h / 2 + 12} size={size - 2} weight={500} color="var(--muted)">
          {sub}
        </Txt>
      )}
    </g>
  );
}

/** Horizontal chain of boxes joined by arrows. */
export function FlowRow({
  y,
  labels,
  markerId,
  x0 = 20,
  width = 840,
  h = 40,
  gap = 22,
  fill,
  stroke,
  size,
}: {
  y: number;
  labels: string[];
  markerId: string;
  x0?: number;
  width?: number;
  h?: number;
  gap?: number;
  fill?: string;
  stroke?: string;
  size?: number;
}) {
  const n = labels.length;
  const w = (width - gap * (n - 1)) / n;
  return (
    <g>
      {labels.map((lbl, i) => {
        const x = x0 + i * (w + gap);
        return (
          <g key={lbl + i}>
            <Box x={x} y={y} w={w} h={h} label={lbl} fill={fill} stroke={stroke} size={size} />
            {i < n - 1 && (
              <line x1={x + w + 2} y1={y + h / 2} x2={x + w + gap - 3} y2={y + h / 2} stroke="var(--c)" strokeWidth={1.6} markerEnd={`url(#${markerId})`} />
            )}
          </g>
        );
      })}
    </g>
  );
}
