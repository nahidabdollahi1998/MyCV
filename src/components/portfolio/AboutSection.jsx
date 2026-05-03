import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="section-dim relative"
      style={{ padding: '120px 80px 120px 120px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}
    >
      <div className="diagonal-line" style={{ top: '20%' }} />

      <div className="grid gap-20 w-full" style={{ gridTemplateColumns: '1fr 1.8fr', maxWidth: '1400px' }}>
        {/* Left */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(30px)',
            transition: 'all 0.9s ease',
          }}
        >
          <div className="font-mono text-p-grey mb-4" style={{ fontSize: '11px', letterSpacing: '0.2em' }}>
            00 — ABOUT
          </div>
          <h2
            className="display-heading text-p-text"
            style={{ fontSize: 'clamp(36px, 4vw, 64px)', marginBottom: '32px' }}
          >
            THE MIND
            <br />
            BEHIND THE
            <br />
            MODELS
          </h2>
          <div style={{ width: '40px', height: '1px', background: '#0A0A0A' }} />
        </div>

        {/* Right */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateX(20px)',
            transition: 'all 0.9s ease 0.2s',
          }}
        >
          <p className="text-p-text" style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '24px' }}>
            I'm a programmer and AI researcher driven by curiosity, creativity, and a relentless passion for building intelligent systems. My journey has been shaped by deep work in <strong>Artificial Intelligence</strong> and <strong>Generative AI</strong>, where I thrive at the intersection of research and real-world application.
          </p>
          <p className="text-p-grey" style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '32px' }}>
            I don't just write code—I design solutions. From customized chatbots and knowledge management platforms to recommendation engines, I enjoy transforming complex ideas into practical, impactful technologies.
          </p>
          <p className="text-p-grey" style={{ fontSize: '16px', lineHeight: '1.7' }}>
            I bring patience, precision, and a fast-learning mindset to every project. What excites me most is working in dynamic environments where bold ideas meet execution—collaborating with forward-thinking teams to create real value.
          </p>

          {/* Credentials */}
          <div className="mt-12 grid gap-6" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {[
              { label: 'EDUCATION', value: 'M.Sc. AI & Robotics', sub: 'Shahid Bahonar University' },
              { label: 'LOCATION', value: 'Tehran, Iran', sub: 'Available Remotely' },
              { label: 'EXPERIENCE', value: '5 Years', sub: 'AI & Software Engineering' },
              { label: 'LANGUAGES', value: 'English (Advanced)', sub: 'German (Intermediate) · Persian (Native)' },
            ].map(c => (
              <div key={c.label}>
                <div className="font-mono text-p-grey mb-1" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>{c.label}</div>
                <div className="text-p-text font-semibold" style={{ fontSize: '15px' }}>{c.value}</div>
                <div className="text-p-grey" style={{ fontSize: '13px' }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}