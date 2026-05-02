import { useRef, useEffect } from 'react';
import CustomCursor from '../components/portfolio/CustomCursor';
import LifeLineNav from '../components/portfolio/LifeLineNav';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import ExperienceSection from '../components/portfolio/ExperienceSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import ResearchSection from '../components/portfolio/ResearchSection';
import ContactSection from '../components/portfolio/ContactSection';

export default function Portfolio() {
  const mousePos = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const onMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div style={{ background: '#FDFDFD', fontFamily: 'Inter, sans-serif' }}>
      <CustomCursor mousePos={mousePos} />
      <LifeLineNav />

      <main style={{ marginLeft: '80px' }}>
        <HeroSection mousePos={mousePos} />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ResearchSection />
        <ContactSection />
      </main>
    </div>
  );
}