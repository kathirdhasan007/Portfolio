import Section from './Section';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <Section title="Projects" hint="Selected builds, focused on clarity and robustness">
      <div className="grid auto-3">
        {projects.map((p) => (
          <article key={p.title} className="project card">
            <div className="title">{p.title}</div>
            <div className="meta">{p.role} • {p.stack.join(' / ')}</div>
            <p>{p.description}</p>
            <p style={{ color: 'var(--muted)' }}>{p.highlight}</p>
            <div style={{ marginTop: 8 }}>
              <a className="btn" href={p.link} target="_blank" rel="noreferrer">Repository</a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}