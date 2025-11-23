"use client";

import { useEffect } from 'react';

export default function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const onEnter = (entry) => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('data-reveal', 'in');
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(onEnter);
    }, { threshold: 0.15 });

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}