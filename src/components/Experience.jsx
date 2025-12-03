import Section from './Section';
import { experience } from '../data/content';

export default function Experience() {
  return (
    <Section title="Experience" hint="What I shipped and how I worked">
      <div className="grid auto-2">
        {experience.map((e) => (
          <article key={e.role + e.company} className="exp card">
            <div>
              <div className="role">{e.role}</div>
              <div style={{ color: 'var(--muted)' }}>{e.company}</div>
            </div>
            <div className="period">{e.period}</div>
            <ul style={{ gridColumn: '1 / -1', margin: 0, paddingLeft: 18 }}>
              {e.details.map((d) => <li key={d}>{d}</li>)}
            </ul>
            <div style={{ gridColumn: '1 / -1', marginTop: 8 }} className="badges">
              {e.tech.map((t) => <span key={t} className="badge">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}