import React from 'react';
import { BookOpenCheck } from 'lucide-react';
import { RichText } from './RichText';

interface SyllabusCoverageBoxProps {
  unitShort: string;
  order: number;
  subtopics: string[];
  hasFormulas: boolean;
  hasDiagram: boolean;
  hasWalkthrough: boolean;
}

/**
 * Educative/AlgoMonster-style lesson map listing all syllabus headings,
 * subtopics, and nested concepts covered in this topic slug.
 */
export function SyllabusCoverageBox({
  unitShort,
  order,
  subtopics,
  hasFormulas,
  hasDiagram,
  hasWalkthrough,
}: SyllabusCoverageBoxProps) {
  return (
    <div className="rounded-xl border border-[var(--brick-border)] bg-[var(--brick-bg)] p-4 sm:p-5 space-y-3 irs-raised">
      <div className="flex flex-wrap items-center justify-between gap-2.5">
        <div className="inline-flex items-center gap-2 font-display font-bold text-[15px] sm:text-[17px] text-[var(--brick-ink)]">
          <BookOpenCheck className="w-4 h-4 shrink-0 text-[var(--brick)]" />
          <span>
            {unitShort} · Lesson {order}: What This Lesson Covers
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {hasFormulas && (
            <span className="irs-tag irs-tag-pink">Formulas</span>
          )}
          {hasDiagram && (
            <span className="irs-tag irs-tag-turq">Diagram</span>
          )}
          {hasWalkthrough && (
            <span className="irs-tag irs-tag-ok">Interactive Walkthrough</span>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        {subtopics.map((sub, i) => (
          <span
            key={i}
            className="text-xs sm:text-[13px] font-medium px-2.5 py-1 rounded-lg bg-[var(--surface)] border border-[var(--brick-border)] text-[var(--fg)] irs-raised"
          >
            <RichText text={sub} />
          </span>
        ))}
      </div>
    </div>
  );
}
