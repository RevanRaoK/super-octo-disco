'use client';

import React, { useState } from 'react';
import { CheckCircle2, Eye, Lightbulb, PlayCircle } from 'lucide-react';
import { LessonTopic, TableBlock, WalkthroughId } from '@/types/course';
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

  // Software text search topic teaches BOTH Boyer-Moore & KMP decks inside its full page
  const showDualStringDecks =
    embedWalkthrough && topic.id === 'u5-software-text-search';

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
              (s) =>
                s.formulas?.length || s.subGroups?.some((g) => g.formulas?.length)
            )
        )}
        hasDiagram={Boolean(
          topic.diagramId ||
            topic.secondaryDiagramId ||
            topic.subSections?.some(
              (s) =>
                s.diagramId || s.subGroups?.some((g) => g.diagramId)
            )
        )}
        hasWalkthrough={Boolean(topic.walkthroughLinkId)}
      />

      {/* Core Bullet Points */}
      {topic.bullets.length > 0 && (
        <ul className="irs-points">
          {topic.bullets.map((b, i) => (
            <li key={i}>
              <RichText text={b} />
            </li>
          ))}
        </ul>
      )}

      {/* Nested Subtopic Sections with Structured Side Headings */}
      {topic.subSections?.map((sub, i) => (
        <section key={i} className="space-y-4 pt-3">
          <h4 className="font-display text-[17.5px] sm:text-[18.5px] font-bold text-[var(--brick-ink)] m-0 border-l-4 border-[var(--brick)] pl-3.5 py-0.5">
            <RichText text={sub.heading} />
          </h4>
          {sub.bullets.length > 0 && (
            <ul className="irs-points">
              {sub.bullets.map((sb, idx) => (
                <li key={idx}>
                  <RichText text={sb} />
                </li>
              ))}
            </ul>
          )}

          {/* Nested Side Headings inside SubSection */}
          {sub.subGroups?.map((grp, gi) => (
            <div key={gi} className="irs-sidegroup">
              <h5 className="irs-sidegroup-title">
                <RichText text={grp.sideHeading} />
              </h5>
              {grp.bullets.length > 0 && (
                <ul className="irs-points">
                  {grp.bullets.map((gb, gbi) => (
                    <li key={gbi}>
                      <RichText text={gb} />
                    </li>
                  ))}
                </ul>
              )}
              {grp.formulas && (
                <div className="space-y-3 mt-3">
                  {grp.formulas.map((f, fi) => (
                    <div key={fi} className="irs-formula-card">
                      <div className="text-xs font-mono-code font-bold uppercase text-[var(--brick-ink)] mb-1">
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
              )}
              {grp.table && renderTableBlock(grp.table)}
              {grp.diagramId && (
                <DiagramRenderer
                  diagramId={grp.diagramId}
                  caption={grp.diagramCaption}
                />
              )}
            </div>
          ))}

          {sub.formulas && (
            <div className="space-y-3 pt-1">
              {sub.formulas.map((f, fi) => (
                <div key={fi} className="irs-formula-card">
                  <div className="text-xs font-mono-code font-bold uppercase text-[var(--brick-ink)] mb-1">
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
          )}
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
      {topic.formulas && topic.formulas.length > 0 && (
        <div className="space-y-2.5">
          {topic.formulas.map((f, i) => (
            <div key={i} className="irs-formula-card">
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
      )}

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
          {showDualStringDecks && (
            <StepByStepVisualizer embedded initialDeckId="kmp-search" />
          )}
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
