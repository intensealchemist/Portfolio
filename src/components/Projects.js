import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="section-sub">A selection of things I’ve built and shipped.</p>
      <div className="grid">
        <article className="card">
          <div className="meta">Jan 2024 – Mar 2024</div>
          <h3>Virtual Classroom Platform</h3>
          <p>Online classroom with course management, assignments, and real-time updates.</p>
          <div className="tags">
            <span className="tag">Spring Boot</span>
            <span className="tag">MySQL</span>
            <span className="tag">REST</span>
          </div>
          <div className="links">
            <a className="link" href="#" onClick={(e)=>e.preventDefault()}>Live</a>
            <a className="link" href="#" onClick={(e)=>e.preventDefault()}>Code</a>
          </div>
        </article>

        <article className="card">
          <div className="meta">2024</div>
          <h3>Book Summarizer & Recommender</h3>
          <p>AI-powered summaries and personalized recommendations.</p>
          <div className="tags">
            <span className="tag">Django</span>
            <span className="tag">Python</span>
            <span className="tag">ML</span>
          </div>
          <div className="links">
            <a className="link" href="#" onClick={(e)=>e.preventDefault()}>Live</a>
            <a className="link" href="#" onClick={(e)=>e.preventDefault()}>Code</a>
          </div>
        </article>

        <article className="card">
          <div className="meta">2024</div>
          <h3>CodeAssist</h3>
          <p>AI Coding Assistant integrating Mistral 7B (4-bit), Gemini 1.5 Pro, and a Django/React stack.</p>
          <div className="tags">
            <span className="tag">Django</span>
            <span className="tag">React</span>
            <span className="tag">LLM</span>
          </div>
          <div className="links">
            <a className="link" href="#" onClick={(e)=>e.preventDefault()}>Live</a>
            <a className="link" href="#" onClick={(e)=>e.preventDefault()}>Code</a>
          </div>
        </article>

        <article className="card">
          <div className="meta">2023</div>
          <h3>Discord Chess Bot</h3>
          <p>Play chess in Discord powered by Stockfish API.</p>
          <div className="tags">
            <span className="tag">Python</span>
            <span className="tag">Discord</span>
            <span className="tag">Stockfish</span>
          </div>
          <div className="links">
            <a className="link" href="#" onClick={(e)=>e.preventDefault()}>Invite</a>
            <a className="link" href="#" onClick={(e)=>e.preventDefault()}>Code</a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
