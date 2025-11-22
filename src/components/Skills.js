import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-sub">Tools and technologies I use regularly.</p>
      <div className="panel">
        <div style={{display:'grid', gap:16}}>
          <div>
            <div className="muted" style={{marginBottom:8}}>Programming Languages</div>
            <div className="badges">
              <span className="badge">Java</span>
              <span className="badge">Python</span>
              <span className="badge">JavaScript</span>
              <span className="badge">Node.js</span>
            </div>
          </div>
          <div>
            <div className="muted" style={{marginBottom:8}}>Frameworks</div>
            <div className="badges">
              <span className="badge">React</span>
              <span className="badge">Django</span>
              <span className="badge">Django REST</span>
            </div>
          </div>
          <div>
            <div className="muted" style={{marginBottom:8}}>Web</div>
            <div className="badges">
              <span className="badge">HTML5</span>
              <span className="badge">CSS3</span>
              <span className="badge">JavaScript (ES6+)</span>
            </div>
          </div>
          <div>
            <div className="muted" style={{marginBottom:8}}>Databases</div>
            <div className="badges">
              <span className="badge">MySQL</span>
              <span className="badge">SQLite</span>
              <span className="badge">MongoDB</span>
            </div>
          </div>
          <div>
            <div className="muted" style={{marginBottom:8}}>Other</div>
            <div className="badges">
              <span className="badge">Data Structures</span>
              <span className="badge">Algorithms</span>
              <span className="badge">REST APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
