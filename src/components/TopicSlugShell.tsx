'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { LessonTopic } from '@/types/course';
import { UNIT_META } from '@/data/unitMeta';
import { getShortTitle } from '@/data/allLessons';
import { useRevisedProgress } from '@/hooks/useRevisedProgress';
import { TopicDetailContent } from './TopicDetailContent';
import { RightNavRail } from './RightNavRail';
import { RichText } from './RichText';

interface TopicSlugShellProps {
  topic: LessonTopic;
  prevTopic: LessonTopic | null;
  nextTopic: LessonTopic | null;
}

export function TopicSlugShell({
  topic,
  prevTopic,
  nextTopic,
}: TopicSlugShellProps) {
  const { revisedMap, toggleRevised, resetProgress } = useRevisedProgress();
  const unitMeta = UNIT_META.find((u) => u.id === topic.unit)!;
  const isRevised = Boolean(revisedMap[topic.id]);

  return (
    <div className="irs-page-grid">
      {/* Main Centered Reading Workspace (LEFT / Column 1) */}
      <main className="space-y-5 min-w-0">
        {/* Breadcrumb & Mark Done */}
        <div className="irs-card px-4 sm:px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm font-semibold"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-[var(--c-ink)] hover:underline no-underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All Units
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--muted)]" />
            <span className="text-[var(--muted)]">{unitMeta.shortLabel}</span>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--muted)]" />
            <span className="text-[var(--fg)] font-bold">
              {getShortTitle(topic)}
            </span>
          </nav>

          <button
            type="button"
            onClick={() => toggleRevised(topic.id)}
            aria-pressed={isRevised}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border irs-raised transition cursor-pointer ${
              isRevised
                ? 'bg-[var(--ok-bg)] text-[var(--ok)] border-[var(--ok)]/40'
                : 'bg-[var(--surface)] text-[var(--fg)] border-[var(--line)] hover:border-[var(--c)]'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            {isRevised ? 'Lesson Completed' : 'Mark Lesson Complete'}
          </button>
        </div>

        {/* Dedicated Lesson Body */}
        <article className="irs-card p-6 sm:p-8 space-y-6">
          <header className="space-y-3 border-b border-[var(--line)] pb-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="irs-tag irs-tag-pink">
                {unitMeta.shortLabel}: {unitMeta.title}
              </span>
              <span className="irs-tag irs-tag-turq">
                Lesson {topic.order} of {unitMeta.topicCount}
              </span>
              {topic.walkthroughLinkId && (
                <span className="irs-tag irs-tag-ok">
                  Includes Interactive Walkthrough
                </span>
              )}
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--fg)] m-0">
              <RichText text={topic.title} />
            </h1>
          </header>

          <TopicDetailContent topic={topic} embedWalkthrough={true} />
        </article>

        {/* Sequential Lesson Navigation */}
        <nav
          aria-label="Lesson sequence navigation"
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {prevTopic ? (
            <Link
              href={`/topics/${prevTopic.id}`}
              className="irs-card p-4 flex items-center gap-3 no-underline hover:border-[var(--c)] transition group"
            >
              <ArrowLeft className="w-4 h-4 text-[var(--muted)] shrink-0" />
              <div className="min-w-0">
                <span className="text-[11px] font-mono-code uppercase text-[var(--muted)] block">
                  ← Previous ({UNIT_META.find((u) => u.id === prevTopic.unit)?.shortLabel})
                </span>
                <span className="font-display text-sm font-bold text-[var(--fg)] group-hover:text-[var(--c-ink)] block truncate mt-0.5">
                  {getShortTitle(prevTopic)}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextTopic ? (
            <Link
              href={`/topics/${nextTopic.id}`}
              className="irs-card p-4 flex items-center justify-between gap-3 no-underline hover:border-[var(--c)] transition group sm:text-right"
            >
              <ArrowRight className="w-4 h-4 text-[var(--muted)] shrink-0 sm:order-2" />
              <div className="min-w-0 flex-1 sm:order-1">
                <span className="text-[11px] font-mono-code uppercase text-[var(--muted)] block">
                  Next Lesson ({UNIT_META.find((u) => u.id === nextTopic.unit)?.shortLabel}) →
                </span>
                <span className="font-display text-sm font-bold text-[var(--fg)] group-hover:text-[var(--c-ink)] block truncate mt-0.5">
                  {getShortTitle(nextTopic)}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </main>

      {/* Navigation Sidebar Anchored on the RIGHT */}
      <RightNavRail
        revisedMap={revisedMap}
        onResetProgress={resetProgress}
        activeSlug={topic.id}
        activeUnit={topic.unit}
      />
    </div>
  );
}
