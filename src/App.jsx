import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import { useScrollToHash } from './utils/useScrollToHash';
import SkillsGrid from './components/SkillsGrid';
import EducationSection from './components/EducationSection';


export default function App() {
useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);

  useEffect(() => {
    // Respect saved theme on first load
    const saved = localStorage.getItem('theme');
    document.documentElement.classList.toggle('light', saved === 'light');
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        <section id="home" className="section">
          <Hero />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="skills" className='section'>
          <SkillsGrid/>
        </section>
        <section id = "education">
          <EducationSection/>
        </section>
        
        <section id="experience" className="section">
          <Experience />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}