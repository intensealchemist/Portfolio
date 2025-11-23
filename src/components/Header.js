"use client";

import React, { useEffect, useState } from 'react';
import { FiDownload, FiMoon, FiSun } from 'react-icons/fi';

const Header = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (typeof window !== 'undefined') localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  const [active, setActive] = useState('about');
  useEffect(() => {
    const sections = ['about','skills','projects','contact'];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { threshold: 0.4 });
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header>
      <nav className="nav">
        <div className="brand">Atul Sharma</div>
        <div>
          <a href="#about" className={active==='about'?'active':''} aria-current={active==='about'?'page':undefined}>About</a>
          <a href="#skills" className={active==='skills'?'active':''} aria-current={active==='skills'?'page':undefined}>Skills</a>
          <a href="#projects" className={active==='projects'?'active':''} aria-current={active==='projects'?'page':undefined}>Projects</a>
          <a href="#contact" className={active==='contact'?'active':''} aria-current={active==='contact'?'page':undefined}>Contact</a>
          <button
            className="btn ghost icon"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            style={{marginLeft:12}}
          >
            {theme === 'dark' ? <FiSun aria-hidden /> : <FiMoon aria-hidden />}
          </button>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-card" data-reveal>
          <div className="eyebrow">Full Stack Developer</div>
          <h1>Crafting modern, resilient, and delightful web experiences</h1>
          <p>
            I design and build end‑to‑end products with React, Django, and a pragmatic toolchain.
            I care about performance, accessibility, and clean architecture that scales.
            Open to full‑time roles and select freelance engagements.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#projects">View Work</a>
            <a className="btn ghost" href="#contact">Get in Touch</a>
            <a className="btn secondary" href="#" onClick={(e) => e.preventDefault()} title="Coming soon"><FiDownload aria-hidden /> <span>Download Resume</span></a>
          </div>
        </div>
        <div className="hero-card" data-reveal>
          <div className="eyebrow">Quick Highlights</div>
          <ul className="contact-list" style={{marginTop: 10}}>
            <li className="contact-item">• 2+ years building production‑grade projects</li>
            <li className="contact-item">• React, Django REST, Node.js</li>
            <li className="contact-item">• MySQL, MongoDB, SQLite</li>
            <li className="contact-item">• Strong fundamentals in data structures</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
