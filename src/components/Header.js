"use client";

import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div className="brand">Atul Sharma</div>
        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-card">
          <div className="eyebrow">Full Stack Developer</div>
          <h1>Building reliable, scalable, and delightful web apps</h1>
          <p>
            I focus on React, Django, and modern tooling to craft performant, accessible,
            and elegant user experiences. Currently open to opportunities and freelance projects.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn ghost" href="#contact">Contact Me</a>
            <a className="btn" href="#" onClick={(e) => e.preventDefault()} title="Coming soon">Download CV</a>
          </div>
        </div>
        <div className="hero-card">
          <div className="eyebrow">Quick Highlights</div>
          <ul className="contact-list" style={{marginTop: 10}}>
            <li className="contact-item">• 2+ years of hands-on project experience</li>
            <li className="contact-item">• React, Django REST, Node.js</li>
            <li className="contact-item">• MySQL, MongoDB, SQLite</li>
            <li className="contact-item">• Strong DSA foundation</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
