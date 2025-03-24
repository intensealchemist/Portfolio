import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        <h3>Virtual Classroom Platform</h3>
        <p>
          Designed and developed an online classroom platform using Java Spring Boot.
          <br /><em>(Jan 2024 – Mar 2024)</em>
        </p>
      </div>
      <div>
        <h3>Book Summarizer and Recommendation App</h3>
        <p>
          Built an AI-powered web application using JavaScript, Python, Django and Machine Learning algorithms.
        </p>
        <h3>CodeAssist</h3>
        <p>
            Built an AI Coding Assistant web application using python, Django, Mistral 7b (with 4 bit Quantization), Gemini-1.5-pro and React.
        </p>
        <h3>Chess Bot</h3>
        <p>
            Developed a Discord Chess Bot Using Python and Stockfish-API.
        </p>
      </div>
    </section>
  );
};

export default Projects;
