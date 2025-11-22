"use client";

import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="section-sub">Let’s build something great together.</p>
      <div className="panel">
        <ul className="contact-list">
          <li className="contact-item"><strong>Email:</strong> <a className="link" href="mailto:atulrsharma70@gmail.com">atulrsharma70@gmail.com</a></li>
          <li className="contact-item"><strong>Phone:</strong> <span className="muted">+91 9325489648</span></li>
          <li className="contact-item"><strong>Location:</strong> <span className="muted">Pune, Maharashtra, India</span></li>
        </ul>
        <div className="socials">
          <a href="#" onClick={(e)=>e.preventDefault()} title="GitHub coming soon">GitHub</a>
          <a href="#" onClick={(e)=>e.preventDefault()} title="LinkedIn coming soon">LinkedIn</a>
          <a href="#" onClick={(e)=>e.preventDefault()} title="Resume coming soon">Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
