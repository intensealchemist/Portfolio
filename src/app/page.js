import Header from '@/components/Header';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  return (
    <main className="app-container">
      <ScrollProgress />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="muted" style={{textAlign:'center', marginTop: 40, padding: '14px 0'}}>
        {new Date().getFullYear()} Atul Sharma. Built with Next.js.
      </footer>
    </main>
  );
}
