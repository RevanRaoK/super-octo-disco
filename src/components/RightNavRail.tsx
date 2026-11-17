'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  ChevronRight,
  Layers,
  PlayCircle,
  RotateCcw,
  Sigma,
} from 'lucide-react';
import { UNIT_META } from '@/data/unitMeta';
import { ALL_TOPICS, TOPICS_BY_UNIT, getShortTitle } from '@/data/allLessons';
import { TabId, UnitId } from '@/types/course';

interface RightNavRailProps {
  revisedMap: Record<string, boolean>;
  onResetProgress: () => void;
  activeSlug?: string;
  activeUnit?: UnitId;
  onSelectDashboardTab?: (tab: TabId) => void;
}

export function RightNavRail({
  revisedMap,
  onResetProgress,
  activeSlug,
  activeUnit,
  onSelectDashboardTab,
}: RightNavRailProps) {
  const [openUnits, setOpenUnits] = useState<Record<UnitId, boolean>>({
    unit1: activeUnit ? activeUnit === 'unit1' : true,
    unit2: activeUnit === 'unit2',
    unit3: activeUnit === 'unit3',
    unit4: activeUnit === 'unit4',
    unit5: activeUnit === 'unit5',
  });

  const totalCount = ALL_TOPICS.length;
  const revisedCount = ALL_TOPICS.filter((t) => revisedMap[t.id]).length;
  const pct = totalCount ? Math.round((revisedCount / totalCount) * 100) : 0;

  const toggleUnit = (uid: UnitId) => {
    setOpenUnits((prev) => ({ ...prev, [uid]: !prev[uid] }));
  };

  return (
    <aside
      className="irs-nav-sidebar space-y-4"
      aria-label="IRS Course & Topic Slug Navigation"
    >
      {/* Subject Header */}
      <div className="space-y-1 pb-3 border-b border-[var(--line)]">
        <Link href="/" className="no-underline block group">
          <div className="font-display text-4xl font-extrabold tracking-tight text-[var(--c)] leading-none group-hover:opacity-90 transition">
            IRS
          </div>
          <p className="font-mono-code text-[10.5px] font-semibold uppercase tracking-widest text-[var(--muted)] m-0 mt-1">
            Interactive Course Guide
          </p>
          <p className="text-sm font-bold text-[var(--fg)] m-0 pt-1">
            Information Retrieval Systems
          </p>
        </Link>
      </div>

      {/* Progress Meter */}
      <div className="rounded-xl border border-[var(--line)] bg-[var(--bg)] p-3 space-y-2">
        <div className="flex items-center justify-between text-xs font-mono-code">
          <span className="font-semibold text-[var(--fg)]">
            Course Progress
          </span>
          <span className="font-bold text-[var(--c-ink)]">
            {revisedCount}/{totalCount} ({pct}%)
          </span>
        </div>
        <div className="irs-bar-track">
          <div className="irs-bar-fill" style={{ width: `${pct}%` }} />
        </div>
        {revisedCount > 0 && (
          <button
            type="button"
            onClick={onResetProgress}
            className="inline-flex items-center gap-1 text-[11px] text-[var(--muted)] hover:text-[var(--bad)] cursor-pointer transition"
          >
            <RotateCcw className="w-3 h-3" /> Reset Progress
          </button>
        )}
      </div>

      {/* Quick Shortcuts */}
      <div className="space-y-1">
        {onSelectDashboardTab ? (
          <button
            type="button"
            onClick={() => onSelectDashboardTab('all')}
            className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-semibold text-[var(--fg)] hover:bg-[var(--c-bg)] hover:text-[var(--c-ink)] cursor-pointer transition"
          >
            <span className="inline-flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[var(--c)]" />
              All 41 Modules
            </span>
            <span className="font-mono-code text-[11px] text-[var(--muted)]">
              Home
            </span>
          </button>
        ) : (
          <Link
            href="/"
            className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-semibold text-[var(--fg)] hover:bg-[var(--c-bg)] hover:text-[var(--c-ink)] no-underline transition"
          >
            <span className="inline-flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[var(--c)]" />
              All Units Dashboard
            </span>
            <span className="font-mono-code text-[11px] text-[var(--muted)]">
              Home
            </span>
          </Link>
        )}
      </div>

      {/* Expandable Unit Slugs */}
      <nav aria-label="Units and Lesson Slugs" className="space-y-2">
        {UNIT_META.map((u) => {
          const items = TOPICS_BY_UNIT[u.id];
          const doneInUnit = items.filter((it) => revisedMap[it.id]).length;
          const isOpen = openUnits[u.id];

          return (
            <div
              key={u.id}
              className="rounded-xl border border-[var(--line)] bg-[var(--surface)] overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleUnit(u.id)}
                className="w-full flex items-center justify-between gap-2 px-3 py-2 text-left bg-[var(--bg)] hover:bg-[var(--c-bg)] transition cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--fg)]">
                  {isOpen ? (
                    <ChevronDown className="w-3.5 h-3.5 text-[var(--c)] shrink-0" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--muted)] shrink-0" />
                  )}
                  <span>
                    {u.shortLabel} ({items.length} slugs)
                  </span>
                </span>
                <span className="font-mono-code text-[11px] text-[var(--muted)] shrink-0">
                  {doneInUnit}/{items.length}
                </span>
              </button>

              {isOpen && (
                <ul className="list-none m-0 p-1.5 space-y-1 border-t border-[var(--line)]">
                  {items.map((item, idx) => {
                    const isCurrent = activeSlug === item.id;
                    const isDone = Boolean(revisedMap[item.id]);
                    return (
                      <li key={item.id}>
                        <Link
                          href={`/topics/${item.id}`}
                          className={`flex items-start justify-between gap-2 px-2 py-1.5 rounded-lg text-[12.5px] leading-snug no-underline transition ${
                            isCurrent
                              ? 'bg-[var(--c)] text-white font-semibold'
                              : isDone
                                ? 'bg-[var(--ok-bg)]/70 text-[var(--ok)] hover:bg-[var(--ok-bg)] font-medium'
                                : 'text-[var(--fg)] hover:bg-[var(--c-bg)] hover:text-[var(--c-ink)]'
                          }`}
                        >
                          <span className="flex-1 min-w-0">
                            <span
                              className={`font-mono-code text-[10.5px] mr-1 ${
                                isCurrent
                                  ? 'text-white/80'
                                  : 'text-[var(--muted)]'
                              }`}
                            >
                              {idx + 1}.
                            </span>
                            {getShortTitle(item)}
                          </span>
                          {isDone && (
                            <span
                              className={`font-mono-code text-[10.5px] shrink-0 ${
                                isCurrent ? 'text-white' : 'text-[var(--ok)]'
                              }`}
                            >
                              ✓
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>

      {/* Bottom Lab Links */}
      <div className="pt-2 border-t border-[var(--line)] space-y-1">
        {onSelectDashboardTab ? (
          <>
            <button
              type="button"
              onClick={() => onSelectDashboardTab('formulas')}
              className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-semibold text-[var(--fg)] hover:bg-[var(--c-bg)] hover:text-[var(--c-ink)] cursor-pointer transition"
            >
              <span className="inline-flex items-center gap-2">
                <Sigma className="w-3.5 h-3.5 text-[var(--hot)]" />
                Formula Sheet (KaTeX)
              </span>
              <span className="font-mono-code text-[11px] text-[var(--muted)]">
                All
              </span>
            </button>
            <button
              type="button"
              onClick={() => onSelectDashboardTab('walkthroughs')}
              className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-semibold text-[var(--fg)] hover:bg-[var(--c-bg)] hover:text-[var(--c-ink)] cursor-pointer transition"
            >
              <span className="inline-flex items-center gap-2">
                <PlayCircle className="w-3.5 h-3.5 text-[var(--c)]" />
                Algorithm Walkthroughs
              </span>
              <span className="font-mono-code text-[11px] text-[var(--muted)]">
                5 decks
              </span>
            </button>
          </>
        ) : (
          <>
            <Link
              href="/?tab=formulas"
              className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-semibold text-[var(--fg)] hover:bg-[var(--c-bg)] hover:text-[var(--c-ink)] no-underline transition"
            >
              <span className="inline-flex items-center gap-2">
                <Sigma className="w-3.5 h-3.5 text-[var(--hot)]" />
                Formula Sheet (KaTeX)
              </span>
              <span className="font-mono-code text-[11px] text-[var(--muted)]">
                All
              </span>
            </Link>
            <Link
              href="/?tab=walkthroughs"
              className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-semibold text-[var(--fg)] hover:bg-[var(--c-bg)] hover:text-[var(--c-ink)] no-underline transition"
            >
              <span className="inline-flex items-center gap-2">
                <PlayCircle className="w-3.5 h-3.5 text-[var(--c)]" />
                Algorithm Walkthroughs
              </span>
              <span className="font-mono-code text-[11px] text-[var(--muted)]">
                5 decks
              </span>
            </Link>
          </>
        )}
      </div>
    </aside>
  );
}
