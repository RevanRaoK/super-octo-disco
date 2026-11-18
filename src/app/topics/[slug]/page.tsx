import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import {
  ALL_TOPICS,
  getAdjacentTopics,
  getTopicBySlug,
} from '@/data/allLessons';
import { TopicSlugShell } from '@/components/TopicSlugShell';

export function generateStaticParams() {
  return ALL_TOPICS.map((t) => ({ slug: t.id }));
}

async function TopicSlugResolver({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) {
    notFound();
  }
  const { prev, next } = getAdjacentTopics(slug);

  return <TopicSlugShell topic={topic} prevTopic={prev} nextTopic={next} />;
}

export default function TopicSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="irs-page-grid">
          <div className="irs-card p-8 text-center text-sm text-[var(--muted)]">
            Loading DVT lesson module...
          </div>
        </div>
      }
    >
      <TopicSlugResolver params={params} />
    </Suspense>
  );
}
