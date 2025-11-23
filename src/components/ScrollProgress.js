"use client";

import React, { useEffect } from 'react';

const ScrollProgress = () => {
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (scrolled / total) : 0;
      document.documentElement.style.setProperty('--scroll', pct.toFixed(4));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-progress" />
  );
};

export default ScrollProgress;
