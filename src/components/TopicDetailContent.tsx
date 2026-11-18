'use client';

import React, { useState } from 'react';
import { CheckCircle2, Eye, Lightbulb, PlayCircle } from 'lucide-react';
import {
  BulletItem,
  FormulaBlock,
  LessonSubGroup,
  LessonTopic,
  TableBlock,
  WalkthroughId,
} from '@/types/course';
import { UNIT_META } from '@/data/unitMeta';
import { WALKTHROUGH_DECKS } from '@/data/walkthroughs';
import { DiagramRenderer } from './diagrams/DiagramRenderer';
import { StepByStepVisualizer } from './StepByStepVisualizer';
import { SyllabusCoverageBox } from './SyllabusCoverageBox';
import { RichText } from './RichText';
import { MathFormula } from './MathFormula';

function renderTableBlock(tbl: TableBlock) {
  return (
    <div className="irs-table-wrap my-3">
      {tbl.caption && (
        <div className="px-3.5 py-2 text-xs font-mono-code font-semibold text-[var(--muted)] bg-[var(--surface-2)] border-b border-[var(--line)]">
          <RichText text={tbl.caption} />
        </div>
      )}
      <table className="irs-table">
        <thead>
          <tr>
            {tbl.headers.map((h, i) => (
              <th key={i}>
                <RichText text={h} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tbl.rows.map((row, rIdx) => {
            const isHi = tbl.highlightRows?.includes(rIdx);
            const isPr = tbl.prunedRows?.includes(rIdx);
            return (
              <tr
                key={rIdx}
                className={isHi ? 'is-highlight' : isPr ? 'is-pruned' : ''}
              >
                {row.map((cell, cIdx) => (
                  <td key={cIdx}>
                    <RichText text={cell} />
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function hasGroupFormulas(grp: LessonSubGroup): boolean {
  return Boolean(
    grp.formulas?.length || grp.subGroups?.some(hasGroupFormulas)
  );
}

function hasGroupDiagrams(grp: LessonSubGroup): boolean {
  return Boolean(
    grp.diagramId || grp.subGroups?.some(hasGroupDiagrams)
  );
}

function renderExampleBlock(example?: string | string[]) {
  if (!example) return null;
  const items = Array.isArray(example) ? example : [example];
  return (
    <div className="space-y-1.5">
      {items.map((ex, i) => (
        <div key={i} className="irs-example">
          <span className="irs-example-label">Example:</span>
          <RichText text={ex} />
        </div>
      ))}
    </div>
  );
}

function renderFormulaList(formulas?: FormulaBlock[], wrapperClass = 'space-y-3 mt-3') {
  if (!formulas || formulas.length === 0) return null;
  return (
    <div className={wrapperClass}>
      {formulas.map((f, fi) => (
        <div key={fi} className="irs-formula-card">
          <div className="text-xs font-mono-code font-bold uppercase tracking-wide text-[var(--brick-ink)] mb-1">
            <RichText text={f.label} />
          </div>
          <MathFormula tex={f.tex} display />
          {f.note && (
            <p className="text-xs sm:text-sm text-[var(--muted)] m-0 mt-1.5">
              <RichText text={f.note} />
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

function renderBulletList(items?: BulletItem[], depth = 0) {
  if (!items || items.length === 0) return null;
  const listClass =
    depth === 0
      ? 'irs-points'
      : depth === 1
        ? 'irs-points irs-points-nested'
        : 'irs-points irs-points-deep';

  return (
    <ul className={listClass}>
      {items.map((item, i) => {
        if (typeof item === 'string') {
          return (
            <li key={i}>
              <RichText text={item} />
            </li>
          );
        }
        const cleanLabel = item.label?.replace(/:\s*$/, '');
        return (
          <li key={i}>
            {cleanLabel && (
              <strong className="font-bold text-[var(--fg)] mr-1.5">
                <RichText text={`${cleanLabel}:`} />
              </strong>
            )}
            <RichText text={item.text} />
            {renderExampleBlock(item.example)}
            {item.children && renderBulletList(item.children, depth + 1)}
          </li>
        );
      })}
    </ul>
  );
}

function renderSubGroup(grp: LessonSubGroup, idx: number, depth = 0) {
  const boxClass =
    depth === 0
      ? 'irs-sidegroup'
      : depth === 1
        ? 'irs-nestedgroup'
        : 'irs-deepgroup';
  const titleClass =
    depth === 0
      ? 'irs-sidegroup-title'
      : depth === 1
        ? 'irs-nestedgroup-title'
        : 'irs-deepgroup-title';

  return (
    <div key={idx} className={boxClass}>
      {depth === 0 ? (
        <h5 className={titleClass}>
          <RichText text={grp.sideHeading} />
        </h5>
      ) : depth === 1 ? (
        <h6 className={titleClass}>
          <RichText text={grp.sideHeading} />
        </h6>
      ) : (
        <div role="heading" aria-level={6} className={titleClass}>
          <RichText text={grp.sideHeading} />
        </div>
      )}
      {grp.description && (
        <p className="irs-group-desc">
          <RichText text={grp.description} />
        </p>
      )}
      {renderBulletList(grp.bullets, depth === 0 ? 0 : 1)}
      {renderExampleBlock(grp.example)}
      {grp.subGroups?.map((child, ci) => renderSubGroup(child, ci, depth + 1))}
      {renderFormulaList(grp.formulas)}
      {grp.table && renderTableBlock(grp.table)}
      {grp.diagramId && (
        <DiagramRenderer
          diagramId={grp.diagramId}
          caption={grp.diagramCaption}
        />
      )}
    </div>
  );
}

interface TopicDetailContentProps {
  topic: LessonTopic;
  embedWalkthrough?: boolean;
  onJumpToWalkthrough?: (id: WalkthroughId) => void;
}

export function TopicDetailContent({
  topic,
  embedWalkthrough = false,
  onJumpToWalkthrough,
}: TopicDetailContentProps) {
  const [showSelfCheck, setShowSelfCheck] = useState(false);

  const unitMeta = UNIT_META.find((u) => u.id === topic.unit)!;
  const linkedDeck = topic.walkthroughLinkId
    ? WALKTHROUGH_DECKS.find((d) => d.id === topic.walkthroughLinkId)
    : undefined;


  return (
    <div className="space-y-7">
      {/* Core Summary Banner */}
      <div className="irs-oneline">
        <div className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[var(--c-ink)] mb-1.5">
          Core Concept in One Line
        </div>
        <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-[var(--fg)] m-0">
          <RichText text={topic.summaryLine} />
        </p>
      </div>

      {/* Covered Syllabus Subtopics Strip */}
      <SyllabusCoverageBox
        unitShort={unitMeta.shortLabel}
        order={topic.order}
        subtopics={topic.subtopicsCovered}
        hasFormulas={Boolean(
          topic.formulas?.length ||
            topic.subSections?.some(
              (s) => s.formulas?.length || s.subGroups?.some(hasGroupFormulas)
            )
        )}
        hasDiagram={Boolean(
          topic.diagramId ||
            topic.secondaryDiagramId ||
            topic.subSections?.some(
              (s) => s.diagramId || s.subGroups?.some(hasGroupDiagrams)
            )
        )}
        hasWalkthrough={Boolean(topic.walkthroughLinkId)}
      />

      {/* Core Bullet Points */}
      {renderBulletList(topic.bullets, 0)}

      {/* Nested Subtopic Sections with Structured Side, Nested & Deep Headings */}
      {topic.subSections?.map((sub, i) => (
        <section key={i} className="space-y-3 pt-3">
          <h4 className="font-display text-[17.5px] sm:text-[18.5px] font-bold text-[var(--brick-ink)] m-0 border-l-4 border-[var(--brick)] pl-3.5 py-0.5">
            <RichText text={sub.heading} />
          </h4>
          {sub.description && (
            <p className="irs-group-desc">
              <RichText text={sub.description} />
            </p>
          )}
          {renderBulletList(sub.bullets, 0)}
          {renderExampleBlock(sub.example)}

          {/* Level 2+ Side Headings, Nested Headings & Nested-Nested Headings */}
          {sub.subGroups?.map((grp, gi) => renderSubGroup(grp, gi, 0))}

          {renderFormulaList(sub.formulas, 'space-y-3 pt-1')}
          {sub.table && renderTableBlock(sub.table)}
          {sub.diagramId && (
            <DiagramRenderer
              diagramId={sub.diagramId}
              caption={sub.diagramCaption}
            />
          )}
        </section>
      ))}

      {/* Word-Style KaTeX Equation Cards */}
      {renderFormulaList(topic.formulas, 'space-y-2.5')}

      {/* Primary & Secondary Tables */}
      {topic.table && renderTableBlock(topic.table)}
      {topic.secondaryTable && renderTableBlock(topic.secondaryTable)}

      {/* Theme-Matched Inline SVG Diagrams */}
      {topic.diagramId && (
        <DiagramRenderer
          diagramId={topic.diagramId}
          caption={topic.diagramCaption}
        />
      )}
      {topic.secondaryDiagramId && (
        <DiagramRenderer
          diagramId={topic.secondaryDiagramId}
          caption={topic.secondaryDiagramCaption}
        />
      )}

      {/* Inline Interactive Algorithm Walkthrough */}
      {embedWalkthrough && topic.walkthroughLinkId && (
        <div className="space-y-4 pt-2">
          <StepByStepVisualizer
            embedded
            initialDeckId={topic.walkthroughLinkId}
          />
        </div>
      )}

      {!embedWalkthrough && linkedDeck && onJumpToWalkthrough && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[var(--c-mid)] bg-[var(--c-bg)] px-4 py-3 irs-raised">
          <div className="text-xs sm:text-sm font-medium text-[var(--fg)]">
            <strong className="text-[var(--fg)]">
              Interactive Walkthrough Linked:
            </strong>{' '}
            {linkedDeck.title}
          </div>
          <button
            type="button"
            onClick={() => onJumpToWalkthrough(linkedDeck.id)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[var(--c)] text-white hover:opacity-90 irs-raised cursor-pointer transition"
          >
            <PlayCircle className="w-3.5 h-3.5" />
            Launch Interactive Steps
          </button>
        </div>
      )}

      {/* Exam Key Takeaway */}
      <div className="rounded-xl border border-[var(--ok)]/30 bg-[var(--ok-bg)] px-4 py-3 text-sm text-[var(--fg)] irs-raised">
        <span className="inline-flex items-center gap-1.5 font-bold text-[var(--ok)] mr-1.5">
          <Lightbulb className="w-4 h-4 shrink-0" />
          Exam Scoring Takeaway:
        </span>
        <RichText text={topic.keyTakeaway} />
      </div>

      {/* Educative-Style Quick Self-Check Recall */}
      {topic.selfCheck && (
        <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 space-y-2.5 irs-raised">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-xs font-mono-code font-bold uppercase tracking-wider text-[var(--brick-ink)]">
              Quick Self-Check Recall
            </div>
            <button
              type="button"
              onClick={() => setShowSelfCheck((s) => !s)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border border-[var(--brick)] bg-[var(--brick-bg)] text-[var(--brick-ink)] hover:bg-[var(--brick)] hover:text-white irs-raised cursor-pointer transition"
            >
              <Eye className="w-3.5 h-3.5" />
              {showSelfCheck ? 'Hide Answer' : 'Reveal Answer'}
            </button>
          </div>
          <p className="text-sm font-semibold text-[var(--fg)] m-0">
            <RichText text={topic.selfCheck.question} />
          </p>
          {showSelfCheck && (
            <div className="rounded-lg border border-[var(--ok)]/30 bg-[var(--ok-bg)] px-3.5 py-2.5 text-sm text-[var(--fg)] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--ok)] shrink-0 mt-0.5" />
              <span>
                <RichText text={topic.selfCheck.answer} />
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
