import React from 'react';
import katex from 'katex';

interface MathFormulaProps {
  tex: string;
  display?: boolean;
  className?: string;
}

/**
 * Renders genuine typeset mathematical equations via KaTeX (stacked fractions,
 * limits, roots, subscripts) matching Microsoft Word equation formatting.
 */
export function MathFormula({
  tex,
  display = false,
  className = '',
}: MathFormulaProps) {
  const html = katex.renderToString(tex, {
    displayMode: display,
    throwOnError: false,
    strict: false,
    output: 'html',
  });

  if (display) {
    return (
      <div
        className={`irs-formula-math ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className={`inline-block align-middle ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
