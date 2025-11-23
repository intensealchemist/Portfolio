"use client";

import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="section-sub">Let’s connect and build something meaningful together.</p>
      <div className="panel" data-reveal>
        <ul className="contact-list">
          <li className="contact-item"><FiMail aria-hidden /> <a className="link" href="mailto:atulrsharma70@gmail.com">atulrsharma70@gmail.com</a></li>
          <li className="contact-item"><FiPhone aria-hidden /> <span className="muted">+91 9325489648</span></li>
          <li className="contact-item"><FiMapPin aria-hidden /> <span className="muted">Pune, Maharashtra, India</span></li>
        </ul>
        <div className="socials">
          <a href="#" onClick={(e)=>e.preventDefault()} title="GitHub coming soon"><FiGithub aria-hidden /> <span style={{marginLeft:8}}>GitHub</span></a>
          <a href="#" onClick={(e)=>e.preventDefault()} title="LinkedIn coming soon"><FiLinkedin aria-hidden /> <span style={{marginLeft:8}}>LinkedIn</span></a>
          <a href="#" onClick={(e)=>e.preventDefault()} title="Resume coming soon"><FiFileText aria-hidden /> <span style={{marginLeft:8}}>Resume</span></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
