import { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';

const contacts = [
  { key: 'email', label: 'email', value: 'nahidabdollahi1998@gmail.com', href: 'mailto:nahidabdollahi1998@gmail.com' },
  { key: 'github', label: 'github', value: '/nahidabdollahi1998', href: 'https://github.com/nahidabdollahi1998' },
  { key: 'linkedin', label: 'linkedin', value: '/in/nahidabdollahi', href: 'https://linkedin.com/in/nahidabdollahi' },
  { key: 'phone', label: 'phone', value: '+98 914 096 4611', href: 'tel:+989140964611' },
];

function CopyLink({ item }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(item.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="group" style={{ borderBottom: '1px solid #EFEFEF', padding: '24px 0' }}>
      <div className="flex items-center justify-between">
        <div className="font-mono text-p-grey" style={{ fontSize: '11px', letterSpacing: '0.15em', minWidth: '80px' }}>
          {item.label}:
        </div>
        <div className="flex items-center gap-6 flex-1 ml-8">
          <a
            href={item.href}
            target={item.key !== 'email' && item.key !== 'phone' ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="font-mono text-p-text"
            style={{ fontSize: '14px', textDecoration: 'none', letterSpacing: '0.02em' }}
            data-hover
          >
            {copied ? (
              <span style={{ color: '#666' }}>COPIED!</span>
            ) : (
              item.value
            )}
          </a>
        </div>
        <button
          onClick={handleCopy}
          className="font-mono text-p-grey opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ fontSize: '10px', letterSpacing: '0.1em', background: 'none', border: 'none', cursor: 'none' }}
          data-hover
        >
          COPY
        </button>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className="section-light relative"
      style={{ padding: '120px 80px 160px 120px', minHeight: '60vh' }}
    >
      <div
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(30px)',
          transition: 'all 0.9s ease',
          marginBottom: '80px',
        }}
      >
        <div className="font-mono text-p-grey mb-4" style={{ fontSize: '11px', letterSpacing: '0.2em' }}>
          05 — CONTACT
        </div>
        <h2 className="display-heading text-p-text" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
          LET'S BUILD
          <br />
          SOMETHING
          <br />
          INTELLIGENT
        </h2>
      </div>

      <div
        style={{
          maxWidth: '700px',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.8s ease 0.3s',
        }}
      >
        <p className="text-p-grey mb-12" style={{ fontSize: '16px', lineHeight: '1.7' }}>
          Open to exciting opportunities in AI research, LLM engineering, and generative systems. If you're building the future of intelligent technology, I'd love to hear from you.
        </p>

        <div style={{ borderTop: '1px solid #E0E0E0' }}>
          {contacts.map(c => (
            <CopyLink key={c.key} item={c} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="absolute bottom-12 right-16 font-mono text-p-neural"
        style={{ fontSize: '11px', letterSpacing: '0.15em' }}
      >
        NAHID ABDOLLAHI © 2025 — AI ENGINEER & RESEARCHER
      </div>
    </section>
  );
}