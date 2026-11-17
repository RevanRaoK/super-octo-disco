import React from 'react';
import { MathFormula } from './MathFormula';

interface RichTextProps {
  text: string;
  boldClassName?: string;
}

/**
 * Renders inline **bold** technical keywords in plain dark ink (--fg),
 * $...$ Word-style KaTeX math, and `code/token` pills without leaking raw $ signs.
 */
export function RichText({
  text,
  boldClassName = 'font-bold text-[var(--fg)]',
}: RichTextProps) {
  const tokens = text.split(/(\*\*[^*]+\*\*|\$[^$]+\$|`[^`]+`)/g);

  return (
    <>
      {tokens.map((part, idx) => {
        if (!part) return null;
        if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
          const inner = part.slice(2, -2);
          return (
            <strong key={idx} className={boldClassName}>
              <RichText text={inner} boldClassName={boldClassName} />
            </strong>
          );
        }
        if (part.startsWith('$') && part.endsWith('$') && part.length >= 2) {
          return <MathFormula key={idx} tex={part.slice(1, -1)} display={false} />;
        }
        if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
          return (
            <code key={idx} className="irs-inline-code">
              {part.slice(1, -1)}
            </code>
          );
        }
        return <React.Fragment key={idx}>{part}</React.Fragment>;
      })}
    </>
  );
}
