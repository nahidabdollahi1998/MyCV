import { useEffect, useState, useRef } from 'react';
import NeuralCanvas from './NeuralCanvas';

const roles = [
  'AI Specialist & Researcher',
  'Prompt Engineer',
  'LLM Systems Architect',
  'NLP Engineer',
  'Knowledge Graph Developer',
];

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';

function useScrambleText(target, trigger) {
  const [display, setDisplay] = useState('');
  const iterRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    clearInterval(intervalRef.current);
    iterRef.current = 0;
    intervalRef.current = setInterval(() => {
      setDisplay(
        target.split('').map((char, i) => {
          if (char === ' ') return ' ';
          if (i < iterRef.current) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join('')
      );
      iterRef.current += 0.4;
      if (iterRef.current >= target.length) {
        clearInterval(intervalRef.current);
        setDisplay(target);
      }
    }, 35);
    return () => clearInterval(intervalRef.current);
  }, [target, trigger]);

  return display;
}

export default function HeroSection({ mousePos }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(i => (i + 1) % roles.length);
      setTrigger(t => t + 1);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const scrambledRole = useScrambleText(roles[roleIndex], trigger);

  return (
    <section
      id="hero"
      className="relative w-full section-light"
      style={{ height: '100vh', overflow: 'hidden' }}
    >
      <NeuralCanvas mousePos={mousePos} />

      {/* Diagonal ghost line */}
      <div className="diagonal-line" style={{ top: '60%', opacity: 0.5 }} />

      {/* Top-right role text */}
      <div
        className="absolute top-16 right-16 text-right"
        style={{ animation: 'fadeIn 1.2s ease forwards', zIndex: 10 }}
      >
        <div
          className="font-mono text-p-grey"
          style={{ fontSize: '11px', letterSpacing: '0.15em', marginBottom: '8px' }}
        >
          ROLE
        </div>
        <div
          className="font-mono text-p-text"
          style={{ fontSize: '14px', letterSpacing: '0.05em', minWidth: '260px' }}
        >
          {scrambledRole}
        </div>
      </div>

      {/* Bottom-left name */}
      <div
        className="absolute bottom-24 left-24"
        style={{ zIndex: 10 }}
      >
        <div
          className="font-mono text-p-grey mb-3"
          style={{ fontSize: '11px', letterSpacing: '0.2em', animation: 'fadeUp 0.8s ease 0.2s both' }}
        >
          AI ENGINEER &amp; RESEARCHER
        </div>
        <h1
          className="display-heading text-p-text"
          style={{
            fontSize: 'clamp(56px, 8vw, 120px)',
            animation: 'fadeUp 0.9s ease 0.4s both',
          }}
        >
          NAHID
          <br />
          ABDOLLAHI
        </h1>
        <div
          className="mt-8 flex items-center gap-4"
          style={{ animation: 'fadeUp 0.9s ease 0.8s both' }}
        >
          <div className="w-12 h-px bg-p-text" />
          <span className="font-mono text-p-grey" style={{ fontSize: '11px', letterSpacing: '0.15em' }}>
            SCROLL TO EXPLORE
          </span>
        </div>
      </div>

      {/* Bottom right stats */}
      <div
        className="absolute bottom-24 right-16 text-right"
        style={{ animation: 'fadeUp 0.9s ease 1s both', zIndex: 10 }}
      >
        <div className="font-mono text-p-grey" style={{ fontSize: '11px', letterSpacing: '0.1em' }}>
          <div>5 YRS EXPERIENCE</div>
          <div className="mt-1">5 RESEARCH PROJECTS</div>
          <div className="mt-1">TEHRAN, IRAN</div>
        </div>
      </div>
    </section>
  );
}