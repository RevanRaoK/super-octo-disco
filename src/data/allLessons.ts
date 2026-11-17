import { UNIT1_TOPICS } from './unit1';
import { UNIT2_TOPICS } from './unit2';
import { UNIT3_TOPICS } from './unit3';
import { UNIT4_TOPICS } from './unit4';
import { UNIT5_TOPICS } from './unit5';
import { LessonTopic, UnitId } from '@/types/course';

export const TOPICS_BY_UNIT: Record<UnitId, LessonTopic[]> = {
  unit1: UNIT1_TOPICS,
  unit2: UNIT2_TOPICS,
  unit3: UNIT3_TOPICS,
  unit4: UNIT4_TOPICS,
  unit5: UNIT5_TOPICS,
};

export const ALL_TOPICS: LessonTopic[] = [
  ...UNIT1_TOPICS,
  ...UNIT2_TOPICS,
  ...UNIT3_TOPICS,
  ...UNIT4_TOPICS,
  ...UNIT5_TOPICS,
];

export function getTopicBySlug(slug: string): LessonTopic | undefined {
  return ALL_TOPICS.find((t) => t.id === slug);
}

export function getAdjacentTopics(slug: string): {
  prev: LessonTopic | null;
  next: LessonTopic | null;
} {
  const idx = ALL_TOPICS.findIndex((t) => t.id === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? ALL_TOPICS[idx - 1] : null,
    next: idx < ALL_TOPICS.length - 1 ? ALL_TOPICS[idx + 1] : null,
  };
}

export function getShortTitle(t: LessonTopic): string {
  return t.shortTitle ?? t.title;
}
