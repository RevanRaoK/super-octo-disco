'use client';

import React, { Suspense, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  BookOpen,
  Compass,
  PlayCircle,
  Search,
  Sigma,
  Sparkles,
  X,
} from 'lucide-react';
import {
  BulletItem,
  LessonSubGroup,
  TabId,
  UnitId,
  WalkthroughId,
} from '@/types/course';
import { UNIT_META } from '@/data/unitMeta';
import {
  ALL_TOPICS,
  TOPICS_BY_UNIT,
  getShortTitle,
} from '@/data/allLessons';
import { useRevisedProgress } from '@/hooks/useRevisedProgress';
import { LessonCard } from '@/components/LessonCard';
import { StepByStepVisualizer } from '@/components/StepByStepVisualizer';
import { FormulaSheetSection } from '@/components/FormulaSheetSection';
import { RightNavRail } from '@/components/RightNavRail';

function extractBulletText(items?: BulletItem[]): string[] {
  if (!items) return [];
  return items.flatMap((b) => {
    if (typeof b === 'string') return [b];
    const ex = b.example ? (Array.isArray(b.example) ? b.example : [b.example]) : [];
    return [b.label ?? '', b.text, ...ex, ...extractBulletText(b.children)];
  });
}

function extractGroupText(grp: LessonSubGroup): string[] {
  const ex = grp.example
    ? Array.isArray(grp.example)
      ? grp.example
      : [grp.example]
    : [];
  return [
    grp.sideHeading,
    grp.description ?? '',
    ...ex,
    ...extractBulletText(grp.bullets),
    ...(grp.formulas?.map((f) => `${f.label} ${f.tex}`) ?? []),
    ...(grp.subGroups?.flatMap(extractGroupText) ?? []),
  ];
}

function CourseDashboardInner() {
  const searchParams = useSearchParams();
  const initialTabParam = searchParams.get('tab');
  const initialTab: TabId =
    initialTabParam === 'formulas' || initialTabParam === 'walkthroughs'
      ? initialTabParam
      : 'all';

  const [activeTab, setActiveTab] = useState<TabId>(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [walkthroughDeck, setWalkthroughDeck] =
    useState<WalkthroughId>('inverted-stemming');

  const { revisedMap, toggleRevised, resetProgress } = useRevisedProgress();

  const totalCount = ALL_TOPICS.length;
  const revisedCount = ALL_TOPICS.filter((t) => revisedMap[t.id]).length;
  const pct = totalCount ? Math.round((revisedCount / totalCount) * 100) : 0;

  const unitCounts = useMemo(() => {
    const out: Record<UnitId, { done: number; total: number }> = {
      unit1: { done: 0, total: 0 },
      unit2: { done: 0, total: 0 },
      unit3: { done: 0, total: 0 },
      unit4: { done: 0, total: 0 },
      unit5: { done: 0, total: 0 },
    };
    for (const t of ALL_TOPICS) {
      out[t.unit].total += 1;
      if (revisedMap[t.id]) out[t.unit].done += 1;
    }
    return out;
  }, [revisedMap]);

  const filteredTopics = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return ALL_TOPICS.filter((item) => {
      if (activeTab !== 'all' && activeTab !== item.unit) return false;
      if (!q) return true;
      const haystack = [
        item.title,
        item.summaryLine,
        ...item.subtopicsCovered,
        ...extractBulletText(item.bullets),
        ...(item.subSections?.flatMap((s) => {
          const sEx = s.example
            ? Array.isArray(s.example)
              ? s.example
              : [s.example]
            : [];
          return [
            s.heading,
            s.description ?? '',
            ...sEx,
            ...extractBulletText(s.bullets),
            ...(s.formulas?.map((f) => `${f.label} ${f.tex}`) ?? []),
            ...(s.subGroups?.flatMap(extractGroupText) ?? []),
          ];
        }) ?? []),
        ...(item.formulas?.map((f) => `${f.label} ${f.tex}`) ?? []),
        item.keyTakeaway,
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [activeTab, searchQuery]);

  const handleJumpToWalkthrough = (id: WalkthroughId) => {
    setWalkthroughDeck(id);
    setActiveTab('walkthroughs');
    setTimeout(() => {
      document
        .getElementById('walkthrough-player')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  const tabs: { id: TabId; label: string; count?: string }[] = [
    { id: 'all', label: 'All Units', count: `${totalCount}` },
    ...UNIT_META.map((u) => ({
      id: u.id as TabId,
      label: u.shortLabel,
      count: `${unitCounts[u.id].done}/${unitCounts[u.id].total}`,
    })),
    { id: 'formulas', label: 'Formula Sheet (KaTeX)', count: 'All' },
    { id: 'walkthroughs', label: 'Algorithm Lab', count: '5' },
  ];

  const isTopicView =
    activeTab !== 'formulas' && activeTab !== 'walkthroughs';

  return (
    <div className="irs-page-grid">
      {/* Main Centered Learning Workspace (LEFT / Column 1) */}
      <main className="space-y-5 min-w-0">
        {/* Course Hero Banner */}
        <header className="irs-card p-5 sm:p-6 space-y-4">
          <div className="space-y-2 w-full">
            <div className="flex flex-wrap items-center gap-2">
              <span className="irs-tag irs-tag-pink">
                <Sparkles className="w-3 h-3" /> Interactive Course Guide
              </span>
              <span className="irs-tag irs-tag-turq">
                5 Units · 41 Topic Slugs · Word-Formatted KaTeX Equations
              </span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--fg)] m-0">
              Information Retrieval Systems (IRS) — Complete Course Roadmap
            </h1>
            <p className="text-sm sm:text-[15.5px] text-[var(--muted)] m-0">
              Clean AlgoMonster/Educative-style study lessons covering every syllabus heading and nested subtopic across Units I–V, paired with custom dark-turquoise inline{' '}
              <code className="irs-inline-code">&lt;svg&gt;</code> diagrams, stacked Word-style KaTeX equations, and step-by-step algorithm walkthroughs.
            </p>
          </div>

          <div className="pt-2 border-t border-[var(--line)] space-y-2">
            <div className="flex items-center justify-between text-xs font-mono-code">
              <span className="font-semibold text-[var(--fg)] inline-flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[var(--c)]" />
                Overall Course Completion: {revisedCount} / {totalCount} lessons
              </span>
              <span className="font-bold text-[var(--c-ink)]">{pct}%</span>
            </div>
            <div className="irs-bar-track">
              <div className="irs-bar-fill" style={{ width: `${pct}%` }} />
            </div>
          </div>

          {/* Search Bar */}
          {isTopicView && (
            <div className="relative pt-1">
              <Search className="w-4 h-4 text-[var(--muted)] absolute left-3.5 top-1/2 -translate-y-1/2 mt-0.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any IRS topic, keyword, algorithm, or equation (e.g., Porter, PAT, Jaccard, Boyer-Moore, FDF, CBIR)..."
                aria-label="Search IRS lessons"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-sm text-[var(--fg)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--c)] transition"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 mt-0.5 text-[var(--muted)] hover:text-[var(--fg)] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </header>

        {/* Unit Tabs */}
        <section className="irs-card p-3 sm:p-4">
          <div className="flex items-center gap-1.5 text-[11px] font-mono-code font-semibold uppercase tracking-wider text-[var(--muted)] mb-2">
            <Compass className="w-3.5 h-3.5 text-[var(--c)]" />
            Course Modules &amp; Tools
          </div>
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border irs-raised transition cursor-pointer ${
                    active
                      ? 'bg-[var(--c)] text-white border-[var(--c)]'
                      : 'bg-[var(--surface)] text-[var(--fg)] border-[var(--line)] hover:border-[var(--c)]'
                  }`}
                >
                  {tab.id === 'formulas' && <Sigma className="w-3.5 h-3.5" />}
                  {tab.id === 'walkthroughs' && (
                    <PlayCircle className="w-3.5 h-3.5" />
                  )}
                  <span>{tab.label}</span>
                  {tab.count && (
                    <span
                      className={`text-[11px] font-mono-code px-1.5 py-0.5 rounded-full ${
                        active
                          ? 'bg-white/20 text-white'
                          : 'bg-[var(--surface)] text-[var(--muted)]'
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* Dynamic Main Content */}
        {activeTab === 'walkthroughs' ? (
          <StepByStepVisualizer initialDeckId={walkthroughDeck} />
        ) : activeTab === 'formulas' ? (
          <FormulaSheetSection />
        ) : activeTab === 'all' ? (
          <div className="space-y-6">
            {UNIT_META.map((u) => {
              const unitTopics = filteredTopics.filter((t) => t.unit === u.id);
              const allInUnit = TOPICS_BY_UNIT[u.id];
              return (
                <section key={u.id} className="space-y-3">
                  <div className="irs-card p-4 sm:p-5 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h2 className="font-display text-xl font-bold text-[var(--fg)] m-0">
                          {u.shortLabel}: {u.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-[var(--muted)] m-0 mt-0.5">
                          {u.subtitle}
                        </p>
                      </div>
                      <span className="irs-tag irs-tag-pink">
                        {unitCounts[u.id].done}/{unitCounts[u.id].total} Complete
                      </span>
                    </div>

                    {/* Direct Topic Slugs Row */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--line)]">
                      {allInUnit.map((t, i) => (
                        <Link
                          key={t.id}
                          href={`/topics/${t.id}`}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border irs-raised no-underline transition ${
                            revisedMap[t.id]
                              ? 'border-[var(--ok)]/40 bg-[var(--ok-bg)] text-[var(--ok)]'
                              : 'border-[var(--line)] bg-[var(--surface)] text-[var(--fg)] hover:border-[var(--c)] hover:text-[var(--c-ink)]'
                          }`}
                        >
                          <span className="font-mono-code text-[11px] opacity-75">
                            {i + 1}.
                          </span>
                          {getShortTitle(t)}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {unitTopics.length > 0 && (
                    <div className="space-y-3">
                      {unitTopics.map((topic) => (
                        <LessonCard
                          key={topic.id}
                          topic={topic}
                          isRevised={Boolean(revisedMap[topic.id])}
                          onToggleRevised={toggleRevised}
                          onJumpToWalkthrough={handleJumpToWalkthrough}
                        />
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        ) : (
          (() => {
            const meta = UNIT_META.find((u) => u.id === activeTab)!;
            const allInUnit = TOPICS_BY_UNIT[meta.id];
            return (
              <section className="space-y-3">
                <div className="irs-card p-4 sm:p-5 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h2 className="font-display text-xl font-bold text-[var(--fg)] m-0">
                        {meta.shortLabel}: {meta.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[var(--muted)] m-0 mt-0.5">
                        {meta.subtitle}
                      </p>
                    </div>
                    <span className="irs-tag irs-tag-pink">
                      {unitCounts[meta.id].done}/{unitCounts[meta.id].total}{' '}
                      Complete
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--line)]">
                    {allInUnit.map((t, i) => (
                      <Link
                        key={t.id}
                        href={`/topics/${t.id}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border border-[var(--line)] bg-[var(--surface)] text-[var(--fg)] hover:border-[var(--c)] hover:text-[var(--c-ink)] irs-raised no-underline transition"
                      >
                        <span className="font-mono-code text-[11px] text-[var(--muted)]">
                          {i + 1}.
                        </span>
                        {getShortTitle(t)}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  {filteredTopics.map((topic) => (
                    <LessonCard
                      key={topic.id}
                      topic={topic}
                      isRevised={Boolean(revisedMap[topic.id])}
                      onToggleRevised={toggleRevised}
                      onJumpToWalkthrough={handleJumpToWalkthrough}
                    />
                  ))}
                </div>
              </section>
            );
          })()
        )}
      </main>

      {/* Navigation Sidebar Anchored on the RIGHT */}
      <RightNavRail
        revisedMap={revisedMap}
        onResetProgress={resetProgress}
        onSelectDashboardTab={(tab) => setActiveTab(tab)}
      />
    </div>
  );
}

export default function CourseDashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-sm text-[var(--muted)]">
          Loading IRS interactive course guide...
        </div>
      }
    >
      <CourseDashboardInner />
    </Suspense>
  );
}
