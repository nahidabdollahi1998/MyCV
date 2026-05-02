import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const experiences = [
  {
    index: '01',
    role: 'AI Specialist',
    company: 'IREX Australia',
    period: 'Dec 2024 — Present',
    duration: '4 months',
    description: 'Development of Relation Extraction models and rule-based systems for constructing knowledge graphs at enterprise scale.',
    tags: ['Knowledge Graphs', 'NLP', 'Relation Extraction'],
  },
  {
    index: '02',
    role: 'AI Specialist',
    company: 'IREX Australia',
    period: 'Jun 2024 — Dec 2024',
    duration: '6 months',
    description: 'Advanced AI systems development, focusing on large language model integration and intelligent data processing pipelines.',
    tags: ['LLMs', 'Python', 'Neo4j'],
  },
  {
    index: '03',
    role: 'AI (LLMs) Programmer',
    company: 'IREX Australia',
    period: 'Sep 2023 — Feb 2024',
    duration: '5 months',
    description: 'Engineered LLM-powered applications including RAG systems, chatbots, and intelligent document processors.',
    tags: ['RAG', 'LangChain', 'Vector Search'],
  },
  {
    index: '04',
    role: 'AI & LLMs Intern',
    company: 'DigitAIs Australia',
    period: 'Mar 2023 — Aug 2023',
    duration: '5 months',
    description: 'Explored LLM capabilities for real-world applications, building foundational expertise in prompt engineering and AI integration.',
    tags: ['Prompt Engineering', 'LLMs', 'Research'],
  },
  {
    index: '05',
    role: 'Unity Developer',
    company: 'Freelancer — Iran',
    period: 'Mar 2021 — Sep 2022',
    duration: '1.5 years',
    description: 'Developed interactive 3D applications and games using Unity engine with C# scripting.',
    tags: ['Unity', 'C#', '3D Development'],
  },
  {
    index: '06',
    role: 'Android Developer',
    company: 'Falaapp — Iran',
    period: 'Nov 2019 — Mar 2021',
    duration: '1 year 5 months',
    description: 'Built Android mobile applications with focus on performance and user experience.',
    tags: ['Android', 'Java', 'Mobile'],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className="section-light relative"
      style={{ padding: '120px 80px 120px 120px' }}
    >
      {/* Header */}
      <div style={{ marginBottom: '80px' }}>
        <div className="font-mono text-p-grey mb-4" style={{ fontSize: '11px', letterSpacing: '0.2em' }}>
          01 — EXPERIENCE
        </div>
        <h2 className="display-heading text-p-text" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
          WORK HISTORY
        </h2>
      </div>

      {/* Table header */}
      <div
        className="grid font-mono text-p-grey"
        style={{
          gridTemplateColumns: '60px 1fr 1.4fr 0.8fr 1fr',
          fontSize: '10px',
          letterSpacing: '0.15em',
          paddingBottom: '16px',
          borderBottom: '1px solid #E0E0E0',
          marginBottom: '0',
        }}
      >
        <span>#</span>
        <span>ROLE</span>
        <span>DESCRIPTION</span>
        <span>PERIOD</span>
        <span>STACK</span>
      </div>

      {/* Rows */}
      {experiences.map((exp, i) => (
        <div
          key={exp.index}
          className="grid group"
          style={{
            gridTemplateColumns: '60px 1fr 1.4fr 0.8fr 1fr',
            padding: '28px 0',
            borderBottom: '1px solid #EFEFEF',
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(20px)',
            transition: `all 0.7s ease ${i * 0.08}s`,
            alignItems: 'start',
            gap: '16px',
          }}
        >
          <div className="font-mono text-p-neural" style={{ fontSize: '12px', paddingTop: '2px' }}>
            {exp.index}
          </div>
          <div>
            <div className="font-semibold text-p-text" style={{ fontSize: '15px', marginBottom: '4px' }}>
              {exp.role}
            </div>
            <div className="text-p-grey font-mono" style={{ fontSize: '12px' }}>
              {exp.company}
            </div>
          </div>
          <div className="text-p-grey" style={{ fontSize: '14px', lineHeight: '1.6' }}>
            {exp.description}
          </div>
          <div>
            <div className="text-p-text" style={{ fontSize: '13px', marginBottom: '2px' }}>{exp.period}</div>
            <div className="text-p-grey font-mono" style={{ fontSize: '11px' }}>{exp.duration}</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {exp.tags.map(t => (
              <span
                key={t}
                className="skill-node border border-p-neural text-p-grey font-mono"
                style={{ fontSize: '10px', padding: '3px 8px', letterSpacing: '0.05em' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}