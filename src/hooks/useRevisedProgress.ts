'use client';

import { useCallback, useSyncExternalStore } from 'react';

const STORAGE_KEY = 'dvt-course-revised-v1';
const EMPTY_MAP: Record<string, boolean> = {};

let cachedRaw: string | null = null;
let cachedMap: Record<string, boolean> = EMPTY_MAP;
const listeners = new Set<() => void>();

function notifyListeners() {
  for (const fn of listeners) fn();
}

function getSnapshot(): Record<string, boolean> {
  if (typeof window === 'undefined') return EMPTY_MAP;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === cachedRaw) return cachedMap;
    cachedRaw = raw;
    if (!raw) {
      cachedMap = EMPTY_MAP;
      return cachedMap;
    }
    const parsed = JSON.parse(raw);
    cachedMap =
      parsed && typeof parsed === 'object'
        ? (parsed as Record<string, boolean>)
        : EMPTY_MAP;
    return cachedMap;
  } catch {
    return EMPTY_MAP;
  }
}

function getServerSnapshot(): Record<string, boolean> {
  return EMPTY_MAP;
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) callback();
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', onStorage);
  }
  return () => {
    listeners.delete(callback);
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', onStorage);
    }
  };
}

export function useRevisedProgress() {
  const revisedMap = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const toggleRevised = useCallback((id: string) => {
    const current = getSnapshot();
    const next: Record<string, boolean> = { ...current };
    if (next[id]) {
      delete next[id];
    } else {
      next[id] = true;
    }
    try {
      const serialized = JSON.stringify(next);
      window.localStorage.setItem(STORAGE_KEY, serialized);
      cachedRaw = serialized;
      cachedMap = next;
    } catch {
      cachedMap = next;
    }
    notifyListeners();
  }, []);

  const resetProgress = useCallback(() => {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore storage errors
    }
    cachedRaw = null;
    cachedMap = EMPTY_MAP;
    notifyListeners();
  }, []);

  return { revisedMap, toggleRevised, resetProgress };
}
