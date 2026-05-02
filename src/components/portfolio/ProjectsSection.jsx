import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const projects = [
  {
    index: '01',
    title: 'IREX TerraMind',
    subtitle: 'Intelligent File Processor & RAG Chatbot',
    description: 'Built an MVP system that processes 100+ PDFs into a Neo4j graph database using LangChain and SBERT embeddings, with a RAG-based chatbot for natural-language queries and decision support.',
    stack: ['Neo4j', 'LangChain', 'SBERT', 'RAG', 'Python'],
    type: 'PRODUCTION SYSTEM',
  },
  {
    index: '02',
    title: 'Shop Assistance Chatbot',
    subtitle: 'Online Cosmetics Store AI',
    description: 'Conversational shopping assistant that recommends cosmetics by analyzing user preferences. Integrated Faiss vector search, Elasticsearch, and SBERT for hybrid keyword–semantic retrieval.',
    stack: ['Faiss', 'Elasticsearch', 'SBERT', 'LangChain', 'Neo4j'],
    type: 'AI APPLICATION',
  },
  {
    index: '03',
    title: 'DPPROMPT',
    subtitle: 'Prompt Optimization Algorithm',
    description: 'Novel algorithm for domain-specific prompt optimization using Determinantal Point Processes (DPPs) to efficiently explore the prompt space. Accepted at IJCAI 2024.',
    stack: ['DPP', 'Prompt Optimization', 'LLMs', 'Python'],
    type: 'RESEARCH — IJCAI',
    link: 'https://github.com/nahid1998/PromptBreeder',
  },
  {
    index: '04',
    title: 'MMR + SA',
    subtitle: 'Prompt Optimization with Simulated Annealing',
    description: 'Alternative to DPPROMPT integrating Maximal Marginal Relevance with Simulated Annealing to balance diversity and similarity in prompt space exploration.',
    stack: ['MMR', 'Simulated Annealing', 'Prompt Engineering', 'LLMs'],
    type: 'RESEARCH',
  },
  {
    index: '05',
    title: 'AutoReasoning',
    subtitle: 'Prompt Optimization for Reasoning LLMs',
    description: 'Prompt optimization algorithm that discovers high-performing initial prompts and generates a "reflection wait" prompt to enforce deeper reasoning in smaller LLMs.',
    stack: ['Reasoning LLMs', 'Prompt Engineering', 'Fine-Tuning'],
    type: 'RESEARCH — 2025',
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.05 });

  return (
    <section
      id="projects"
      ref={ref}
      className="section-light relative"
      style={{ padding: '120px 80px 120px 120px' }}
    >
      <div style={{ marginBottom: '80px' }}>
        <div className="font-mono text-p-grey mb-4" style={{ fontSize: '11px', letterSpacing: '0.2em' }}>
          03 — PROJECTS
        </div>
        <h2 className="display-heading text-p-text" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
          CASE FILES
        </h2>
      </div>

      <div className="flex flex-col" style={{ gap: '0' }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.index} project={p} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index, inView }) {
  const ref = useRef(null);
  const cardInView = useInView(ref, { threshold: 0.2 });

  return (
    <div
      ref={ref}
      style={{
        borderBottom: '1px solid #EFEFEF',
        padding: '48px 0',
        opacity: cardInView ? 1 : 0,
        transform: cardInView ? 'none' : 'translateY(30px)',
        transition: `all 0.8s ease ${index * 0.05}s`,
      }}
    >
      <div
        className="grid"
        style={{ gridTemplateColumns: '60px 1.2fr 1.8fr 1fr', gap: '32px', alignItems: 'start' }}
      >
        {/* Index */}
        <div className="font-mono text-p-neural" style={{ fontSize: '13px', paddingTop: '4px' }}>
          {project.index}
        </div>

        {/* Title */}
        <div>
          <div
            className="font-mono text-p-grey mb-2"
            style={{ fontSize: '10px', letterSpacing: '0.15em' }}
          >
            {project.type}
          </div>
          <h3 className="display-heading text-p-text" style={{ fontSize: 'clamp(20px, 2vw, 28px)', marginBottom: '6px' }}>
            {project.title}
          </h3>
          <div className="text-p-grey" style={{ fontSize: '13px' }}>
            {project.subtitle}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 font-mono text-p-text"
              style={{ fontSize: '11px', letterSpacing: '0.1em', textDecoration: 'none' }}
              data-hover
            >
              VIEW CODE →
            </a>
          )}
        </div>

        {/* Description */}
        <div className="text-p-grey" style={{ fontSize: '15px', lineHeight: '1.65' }}>
          {project.description}
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 content-start">
          {project.stack.map(s => (
            <span
              key={s}
              className="font-mono text-p-grey border border-p-neural"
              style={{ fontSize: '10px', padding: '4px 8px', letterSpacing: '0.05em' }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}