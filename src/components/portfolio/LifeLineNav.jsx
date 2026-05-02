import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
];

export default function LifeLineNav() {
  const [active, setActive] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? window.scrollY / total : 0);

      const offsets = sections.map(s => {
        const el = document.getElementById(s.id);
        return el ? { id: s.id, top: el.getBoundingClientRect().top } : null;
      }).filter(Boolean);

      const current = offsets.reduce((acc, o) => {
        if (o.top <= window.innerHeight / 2) return o;
        return acc;
      }, offsets[0]);

      if (current) setActive(current.id);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed left-0 top-0 h-full w-20 z-50 flex flex-col items-center justify-center"
      style={{ background: 'transparent' }}>

      {/* Vertical line */}
      <div className="relative flex flex-col items-center" style={{ height: '60vh' }}>
        {/* Background line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-p-neural" style={{ transform: 'translateX(-50%)' }} />

        {/* Progress line */}
        <div
          className="absolute left-1/2 top-0 w-px bg-p-text transition-all duration-300"
          style={{
            transform: 'translateX(-50%)',
            height: `${scrollProgress * 100}%`,
          }}
        />

        {/* Dots */}
        {sections.map((s, i) => {
          const isActive = s.id === active;
          const topPct = (i / (sections.length - 1)) * 100;
          return (
            <button
              key={s.id}
              data-hover
              onClick={() => scrollTo(s.id)}
              className="absolute group flex items-center gap-3"
              style={{ top: `${topPct}%`, transform: 'translateY(-50%)', left: '50%' }}
              title={s.label}
            >
              {/* Dot */}
              <div
                className="transition-all duration-300"
                style={{
                  width: isActive ? '8px' : '5px',
                  height: isActive ? '8px' : '5px',
                  borderRadius: '50%',
                  background: isActive ? '#0A0A0A' : '#CCCCCC',
                  transform: 'translateX(-50%)',
                  boxShadow: isActive ? '0 0 0 3px rgba(10,10,10,0.1)' : 'none',
                  transition: 'all 0.3s ease',
                }}
              />
              {/* Label tooltip */}
              <span
                className="absolute left-6 text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: '#666', letterSpacing: '0.08em', fontSize: '10px' }}
              >
                {s.label.toUpperCase()}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}