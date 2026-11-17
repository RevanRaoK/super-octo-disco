'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  PlayCircle,
} from 'lucide-react';
import { LessonTopic, WalkthroughId } from '@/types/course';
import { UNIT_META } from '@/data/unitMeta';
import { TopicDetailContent } from './TopicDetailContent';
import { RichText } from './RichText';

interface LessonCardProps {
  topic: LessonTopic;
  isRevised: boolean;
  onToggleRevised: (id: string) => void;
  onJumpToWalkthrough: (id: WalkthroughId) => void;
  defaultOpen?: boolean;
}

export function LessonCard({
  topic,
  isRevised,
  onToggleRevised,
  onJumpToWalkthrough,
  defaultOpen = false,
}: LessonCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  const unitMeta = UNIT_META.find((u) => u.id === topic.unit)!;

  return (
    <article
      className={`irs-card transition ${
        isRevised ? 'border-[var(--ok)]/50' : ''
      }`}
    >
      <div className="p-4 sm:p-5 flex flex-wrap items-start justify-between gap-3">
        <div
          className="space-y-2 flex-1 min-w-[240px] cursor-pointer"
          onClick={() => setOpen((o) => !o)}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="irs-tag irs-tag-pink">
              {unitMeta.shortLabel} · Lesson {topic.order}
            </span>
            {topic.formulas && topic.formulas.length > 0 && (
              <span className="irs-tag irs-tag-turq">
                {topic.formulas.length} Equation
                {topic.formulas.length > 1 ? 's' : ''}
              </span>
            )}
            {topic.diagramId && (
              <span className="irs-tag irs-tag-accent">Inline SVG</span>
            )}
            {topic.walkthroughLinkId && (
              <span className="irs-tag irs-tag-ok">
                <PlayCircle className="w-3 h-3" /> Walkthrough
              </span>
            )}
          </div>

          <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-[var(--fg)] m-0 hover:text-[var(--c-ink)] transition">
            {topic.order}. <RichText text={topic.title} />
          </h3>

          <p className="text-sm text-[var(--muted)] m-0 line-clamp-2">
            <RichText text={topic.summaryLine} />
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <Link
            href={`/topics/${topic.id}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-[var(--c)] bg-[var(--c-bg)] text-[var(--c-ink)] hover:bg-[var(--c)] hover:text-white no-underline irs-raised transition"
          >
            Open Full Lesson <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={() => onToggleRevised(topic.id)}
            aria-pressed={isRevised}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border irs-raised cursor-pointer transition ${
              isRevised
                ? 'bg-[var(--ok-bg)] text-[var(--ok)] border-[var(--ok)]/40'
                : 'bg-[var(--surface)] text-[var(--fg)] border-[var(--line)] hover:border-[var(--c)]'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            {isRevised ? 'Revised' : 'Mark Done'}
          </button>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--fg)] irs-raised cursor-pointer transition"
          >
            {open ? (
              <>
                Collapse <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                Expand <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-[var(--line)]">
          <TopicDetailContent
            topic={topic}
            embedWalkthrough={false}
            onJumpToWalkthrough={onJumpToWalkthrough}
          />
        </div>
      )}
    </article>
  );
}
