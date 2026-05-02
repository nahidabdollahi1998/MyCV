import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const skillGroups = [
  {
    category: 'CORE AI FIELDS',
    skills: ['Machine Learning', 'Natural Language Processing', 'Generative AI', 'Large Language Models', 'Prompt Engineering', 'Fine-Tuning', 'RAG', 'Knowledge Graphs', 'Agent-based Applications'],
  },
  {
    category: 'FRAMEWORKS & LIBRARIES',
    skills: ['LangChain', 'LangGraph', 'PyTorch', 'TensorFlow', 'Keras', 'Transformer', 'Sentence-Transformer', 'OpenCV', 'EasyOCR', 'VLLM', 'Tesseract'],
  },
  {
    category: 'LANGUAGES',
    skills: ['Python (Advanced)', 'C# (Intermediate)', 'C++ (Basic)'],
  },
  {
    category: 'DATABASES & TOOLS',
    skills: ['Neo4j (Advanced)', 'Cassandra', 'Elasticsearch', 'Faiss', 'Git (Advanced)', 'Jupyter', 'PyCharm', 'VSCode', 'Colab'],
  },
  {
    category: 'AI MODELS EXPERIENCE',
    skills: ['ChatGPT', 'Gemini', 'Mistral', 'Llama', 'BERT', 'Qwen', 'Gemma', 'Palm'],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      className="section-dim relative"
      style={{ padding: '120px 80px 120px 120px' }}
    >
      <div className="diagonal-line" style={{ top: '50%' }} />

      <div
        style={{
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.8s ease',
          marginBottom: '80px',
        }}
      >
        <div className="font-mono text-p-grey mb-4" style={{ fontSize: '11px', letterSpacing: '0.2em' }}>
          02 — SKILLS
        </div>
        <h2 className="display-heading text-p-text" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
          KNOWLEDGE
          <br />
          ARCHITECTURE
        </h2>
      </div>

      <div className="grid gap-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {skillGroups.map((group, gi) => (
          <div
            key={group.category}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(24px)',
              transition: `all 0.7s ease ${gi * 0.1}s`,
            }}
          >
            <div
              className="font-mono text-p-grey mb-5"
              style={{ fontSize: '10px', letterSpacing: '0.2em', borderBottom: '1px solid #E8E8E8', paddingBottom: '12px' }}
            >
              {group.category}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span
                  key={skill}
                  className="skill-node text-p-text border border-p-neural"
                  style={{
                    fontSize: '12px',
                    padding: '6px 12px',
                    cursor: 'default',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                  }}
                  data-hover
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}