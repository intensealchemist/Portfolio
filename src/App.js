import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="App">
      <ScrollProgress />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="muted" style={{textAlign:'center', marginTop: 40, padding: '14px 0'}}>
        {new Date().getFullYear()} Atul Sharma. Built with React.
      </footer>
    </div>
  );
}

export default App;
