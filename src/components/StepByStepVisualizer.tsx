'use client';

import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import { WALKTHROUGH_DECKS } from '@/data/walkthroughs';
import { UNIT_META } from '@/data/unitMeta';
import { WalkthroughId } from '@/types/course';
import { WalkthroughSvgStage } from './WalkthroughSvgStage';
import { RichText } from './RichText';
import { MathFormula } from './MathFormula';

interface StepByStepVisualizerProps {
  initialDeckId?: WalkthroughId;
  initialSlideIndex?: number;
  embedded?: boolean;
}

export function StepByStepVisualizer({
  initialDeckId = 'scatterplot-render',
  initialSlideIndex = 0,
  embedded = false,
}: StepByStepVisualizerProps) {
  const [selectedDeckId, setSelectedDeckId] =
    useState<WalkthroughId>(initialDeckId);
  const [slideIdx, setSlideIdx] = useState(initialSlideIndex);
  const [prevPropDeck, setPrevPropDeck] = useState(initialDeckId);
  const [prevPropSlide, setPrevPropSlide] = useState(initialSlideIndex);

  if (prevPropDeck !== initialDeckId || prevPropSlide !== initialSlideIndex) {
    setPrevPropDeck(initialDeckId);
    setPrevPropSlide(initialSlideIndex);
    setSelectedDeckId(initialDeckId);
    setSlideIdx(initialSlideIndex);
  }

  const deck =
    WALKTHROUGH_DECKS.find((d) => d.id === selectedDeckId) ??
    WALKTHROUGH_DECKS[0];
  const safeIdx = Math.min(slideIdx, deck.slides.length - 1);
  const slide = deck.slides[safeIdx];

  const handleSelectDeck = (id: WalkthroughId) => {
    setSelectedDeckId(id);
    setSlideIdx(0);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')
      ) {
        return;
      }
      if (e.key === 'ArrowRight') {
        setSlideIdx((prev) => Math.min(prev + 1, deck.slides.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setSlideIdx((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [deck.slides.length]);

  return (
    <section
      id={embedded ? undefined : 'walkthrough-player'}
      className="irs-card p-5 sm:p-6 space-y-5"
      aria-label="Interactive DVT Algorithm Walkthrough Player"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono-code font-semibold uppercase tracking-wider text-[var(--c-ink)] mb-1">
            <PlayCircle className="w-4 h-4" />
            Step-by-Step Walkthrough (use ← / → keys)
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[var(--fg)] m-0">
            <RichText text={deck.title} />
          </h2>
          <p className="text-sm text-[var(--muted)] mt-1 mb-0">
            <RichText text={deck.subtitle} />
          </p>
        </div>
        <span className="irs-tag irs-tag-pink">
          {UNIT_META.find((u) => u.id === deck.unit)?.shortLabel}
        </span>
      </div>

      {/* Deck Switcher */}
      <div className="flex flex-wrap gap-2">
        {WALKTHROUGH_DECKS.map((d) => {
          const active = d.id === deck.id;
          return (
            <button
              key={d.id}
              type="button"
              onClick={() => handleSelectDeck(d.id)}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold border irs-raised transition cursor-pointer ${
                active
                  ? 'bg-[var(--c)] text-white border-[var(--c)]'
                  : 'bg-[var(--surface)] text-[var(--fg)] border-[var(--line)] hover:border-[var(--c)]'
              }`}
            >
              {d.title}
            </button>
          );
        })}
      </div>

      {/* Dataset Banner */}
      <div className="rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-2.5 text-xs sm:text-sm text-[var(--fg)] irs-raised">
        <span className="font-mono-code font-semibold text-[var(--brick-ink)] uppercase mr-2">
          Dataset:
        </span>
        <RichText text={deck.datasetSummary} />
      </div>

      {/* Step X of N Pills */}
      <div className="flex flex-wrap items-center gap-1.5">
        {deck.slides.map((s, idx) => {
          const active = idx === safeIdx;
          return (
            <button
              key={s.stepNumber}
              type="button"
              onClick={() => setSlideIdx(idx)}
              className={`px-2.5 py-1 rounded-md text-xs font-mono-code font-semibold border irs-raised transition cursor-pointer ${
                active
                  ? 'bg-[var(--c-bg)] text-[var(--c-ink)] border-[var(--c)]'
                  : idx < safeIdx
                    ? 'bg-[var(--ok-bg)] text-[var(--ok)] border-[var(--ok)]/30'
                    : 'bg-[var(--surface)] text-[var(--muted)] border-[var(--line)] hover:border-[var(--line-strong)]'
              }`}
            >
              {s.pillLabel}
            </button>
          );
        })}
      </div>

      {/* Current Step Card */}
      <div className="rounded-xl border border-[var(--line)] bg-[var(--bg)] p-4 sm:p-5 space-y-4 irs-raised">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-[var(--fg)] m-0">
            Step {safeIdx + 1} of {deck.slides.length}: <RichText text={slide.title} />
          </h3>
          <span className="irs-tag irs-tag-turq">
            Slide {safeIdx + 1} / {deck.slides.length}
          </span>
        </div>

        <WalkthroughSvgStage svgStateKey={slide.svgStateKey} />

        {slide.formulaTex && (
          <div className="irs-formula-card">
            <div className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[var(--brick-ink)] mb-1">
              Step Formula
            </div>
            <MathFormula tex={slide.formulaTex} display />
          </div>
        )}

        <ul className="irs-points">
          {slide.bullets.map((b, i) => (
            <li key={i}>
              <RichText text={b} />
            </li>
          ))}
        </ul>

        {slide.table && (
          <div className="irs-table-wrap">
            {slide.table.caption && (
              <div className="px-3.5 py-2 text-xs font-mono-code font-semibold text-[var(--muted)] bg-[var(--surface-2)] border-b border-[var(--line)]">
                <RichText text={slide.table.caption} />
              </div>
            )}
            <table className="irs-table">
              <thead>
                <tr>
                  {slide.table.headers.map((h, i) => (
                    <th key={i}>
                      <RichText text={h} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {slide.table.rows.map((row, rIdx) => {
                  const isHi = slide.table?.highlightRows?.includes(rIdx);
                  const isPr = slide.table?.prunedRows?.includes(rIdx);
                  return (
                    <tr
                      key={rIdx}
                      className={
                        isHi ? 'is-highlight' : isPr ? 'is-pruned' : ''
                      }
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
        )}

        {/* Controls */}
        <div className="flex items-center justify-between pt-2 border-t border-[var(--line)]">
          <button
            type="button"
            disabled={safeIdx === 0}
            onClick={() => setSlideIdx((i) => Math.max(0, i - 1))}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border border-[var(--line-strong)] bg-[var(--surface)] text-[var(--fg)] disabled:opacity-40 cursor-pointer disabled:cursor-default hover:border-[var(--c)] transition"
          >
            <ChevronLeft className="w-4 h-4" /> Previous Step
          </button>

          <span className="text-xs font-mono-code font-semibold text-[var(--muted)]">
            Step {safeIdx + 1} of {deck.slides.length}
          </span>

          <button
            type="button"
            disabled={safeIdx === deck.slides.length - 1}
            onClick={() =>
              setSlideIdx((i) => Math.min(deck.slides.length - 1, i + 1))
            }
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border border-[var(--c)] bg-[var(--c)] text-white disabled:opacity-40 cursor-pointer disabled:cursor-default hover:opacity-90 transition"
          >
            Next Step <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
