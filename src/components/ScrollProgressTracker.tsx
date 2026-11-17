'use client';

import React, { useEffect, useState } from 'react';

/**
 * Sleek flush-top scroll progress bar (YouTube-loading-bar style),
 * styled with the `--brick` CSS variable moving left -> right as the user scrolls.
 */
export function ScrollProgressTracker() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;

    const computeScroll = () => {
      rafId = null;
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const maxScroll = Math.max(0, doc.scrollHeight - window.innerHeight);
      const next =
        maxScroll > 4
          ? Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100))
          : 0;
      setPct(next);
    };

    const onScrollOrResize = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(computeScroll);
    };

    computeScroll();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  const rounded = Math.round(pct);

  return (
    <div
      className="irs-scroll-track"
      role="progressbar"
      aria-label="Page reading scroll progress"
      aria-valuenow={rounded}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="irs-scroll-bar" style={{ width: `${pct}%` }} />
    </div>
  );
}
