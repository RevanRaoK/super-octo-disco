import React from 'react';
import Link from 'next/link';
import { Sigma } from 'lucide-react';
import { FormulaBlock, LessonSubGroup } from '@/types/course';
import { ALL_TOPICS } from '@/data/allLessons';
import { UNIT_META } from '@/data/unitMeta';
import { MathFormula } from './MathFormula';
import { RichText } from './RichText';

function collectGroupFormulas(grp: LessonSubGroup): FormulaBlock[] {
  return [
    ...(grp.formulas ?? []),
    ...(grp.subGroups?.flatMap(collectGroupFormulas) ?? []),
  ];
}

export function FormulaSheetSection() {
  const formulaTopics = ALL_TOPICS.filter(
    (t) =>
      (t.formulas && t.formulas.length > 0) ||
      t.subSections?.some(
        (s) =>
          (s.formulas && s.formulas.length > 0) ||
          s.subGroups?.some((g) => collectGroupFormulas(g).length > 0)
      )
  );

  return (
    <section className="space-y-4">
      <div className="irs-card p-5 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono-code font-bold uppercase tracking-wider text-[var(--c-ink)]">
          <Sigma className="w-4 h-4 text-[var(--c)]" />
          Formula Sheet
        </div>
        <h2 className="font-display text-2xl font-extrabold text-[var(--fg)] m-0">
          Every DVT Formula Across Units I–V
        </h2>
        <p className="text-sm text-[var(--muted)] m-0">
          Every formula from the notes in one place, with what each symbol means. Click “Open Lesson” to see where it is used.
        </p>
      </div>

      {formulaTopics.map((t) => {
        const unit = UNIT_META.find((u) => u.id === t.unit)!;
        const allFormulas = [
          ...(t.formulas ?? []),
          ...(t.subSections?.flatMap((s) => [
            ...(s.formulas ?? []),
            ...(s.subGroups?.flatMap(collectGroupFormulas) ?? []),
          ]) ?? []),
        ];
        return (
          <div key={t.id} className="irs-card p-4 sm:p-5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="irs-tag irs-tag-pink">{unit.shortLabel}</span>
                <h3 className="font-display text-base sm:text-lg font-bold text-[var(--fg)] m-0">
                  <RichText text={t.title} />
                </h3>
              </div>
              <Link
                href={`/topics/${t.id}`}
                className="text-xs font-semibold text-[var(--brick-ink)] hover:underline no-underline"
              >
                Open Lesson →
              </Link>
            </div>

            <div className="grid gap-3">
              {allFormulas.map((fb, idx) => (
                <div key={idx} className="irs-formula-card">
                  <div className="text-xs font-mono-code font-bold uppercase text-[var(--brick-ink)] mb-1">
                    <RichText text={fb.label} />
                  </div>
                  <MathFormula tex={fb.tex} display />
                  {fb.note && (
                    <p className="text-xs sm:text-sm text-[var(--muted)] m-0 mt-1.5">
                      <RichText text={fb.note} />
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
