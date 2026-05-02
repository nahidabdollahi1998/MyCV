import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const publications = [
  {
    year: '2025',
    title: 'Optimizing Prompts Efficiently with Iterative Determinant Point Processes',
    venue: 'Journal Publication',
    status: 'PUBLISHED',
    description: 'A novel approach to prompt optimization using iterative DPP frameworks to efficiently search and diversify the prompt space for improved LLM performance.',
  },
  {
    year: '2025',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor',
    venue: 'Under Review',
    status: 'IN REVIEW',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    year: '2025',
    title: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip',
    venue: 'Under Review',
    status: 'IN REVIEW',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
  },
  {
    year: '2024',
    title: 'DPPROMPT: Domain-Specific Prompt Optimization via Determinantal Point Processes',
    venue: 'IJCAI 2024',
    status: 'ACCEPTED (WITHDRAWN)',
    description: 'Accepted at the International Joint Conference on Artificial Intelligence. Introduced DPP-based sampling for structured prompt optimization.',
    link: 'https://github.com/nahid1998/PromptBreeder',
  },
];

export default function ResearchSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <section
      id="research"
      ref={ref}
      className="section-dim relative"
      style={{ padding: '120px 80px 120px 120px' }}
    >
      <div className="diagonal-line" style={{ top: '30%' }} />

      <div
        style={{
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.8s ease',
          marginBottom: '80px',
        }}
      >
        <div className="font-mono text-p-grey mb-4" style={{ fontSize: '11px', letterSpacing: '0.2em' }}>
          04 — RESEARCH
        </div>
        <h2 className="display-heading text-p-text" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
          PUBLICATIONS
          <br />
          & PAPERS
        </h2>
      </div>

      <div className="flex flex-col gap-0">
        {publications.map((pub, i) => (
          <div
            key={pub.title}
            style={{
              borderBottom: '1px solid #E0E0E0',
              padding: '48px 0',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(20px)',
              transition: `all 0.8s ease ${i * 0.15}s`,
            }}
          >
            <div className="grid" style={{ gridTemplateColumns: '80px 1fr 1fr', gap: '40px' }}>
              <div className="font-mono text-p-grey" style={{ fontSize: '13px', paddingTop: '4px' }}>
                {pub.year}
              </div>
              <div>
                <div
                  className="font-mono mb-3"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    color: pub.status === 'PUBLISHED' ? '#0A0A0A' : '#999',
                    border: '1px solid currentColor',
                    display: 'inline-block',
                    padding: '2px 8px',
                    marginBottom: '12px',
                  }}
                >
                  {pub.status}
                </div>
                <h3 className="text-p-text font-semibold" style={{ fontSize: '17px', lineHeight: '1.4', marginBottom: '8px' }}>
                  {pub.title}
                </h3>
                <div className="font-mono text-p-grey" style={{ fontSize: '12px' }}>
                  {pub.venue}
                </div>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 font-mono text-p-text"
                    style={{ fontSize: '11px', letterSpacing: '0.1em', textDecoration: 'none' }}
                    data-hover
                  >
                    VIEW IMPLEMENTATION →
                  </a>
                )}
              </div>
              <div className="text-p-grey" style={{ fontSize: '14px', lineHeight: '1.65' }}>
                {pub.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education block */}
      <div
        style={{
          marginTop: '80px',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.8s ease 0.4s',
        }}
      >
        <div className="font-mono text-p-grey mb-8" style={{ fontSize: '11px', letterSpacing: '0.2em' }}>
          ACADEMIC BACKGROUND
        </div>
        <div className="grid gap-8" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div style={{ borderLeft: '2px solid #0A0A0A', paddingLeft: '24px' }}>
            <div className="font-mono text-p-grey mb-2" style={{ fontSize: '11px', letterSpacing: '0.1em' }}>2024 — NOW</div>
            <div className="font-semibold text-p-text" style={{ fontSize: '16px', marginBottom: '4px' }}>Scholarship M.Sc. Artificial Intelligence</div>
            <div className="text-p-grey" style={{ fontSize: '14px' }}>Leibniz University Hannover</div>
          </div>
          <div style={{ borderLeft: '2px solid #E0E0E0', paddingLeft: '24px' }}>
            <div className="font-mono text-p-grey mb-2" style={{ fontSize: '11px', letterSpacing: '0.1em' }}>2022 — 2024</div>
            <div className="font-semibold text-p-text" style={{ fontSize: '16px', marginBottom: '4px' }}>M.Sc. Artificial Intelligence & Robotics</div>
            <div className="text-p-grey" style={{ fontSize: '14px' }}>Shahid Bahonar University, Kerman</div>
          </div>
          <div style={{ borderLeft: '2px solid #E0E0E0', paddingLeft: '24px' }}>
            <div className="font-mono text-p-grey mb-2" style={{ fontSize: '11px', letterSpacing: '0.1em' }}>2016 — 2021</div>
            <div className="font-semibold text-p-text" style={{ fontSize: '16px', marginBottom: '4px' }}>B.Sc. Computer Engineering — Software</div>
            <div className="text-p-grey" style={{ fontSize: '14px' }}>Vali-e-asr University, Rafsanjan</div>
          </div>
        </div>
      </div>
    </section>
  );
}