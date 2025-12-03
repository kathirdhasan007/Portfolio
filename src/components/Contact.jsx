import Section from './Section';
import { profile } from '../data/content';

export default function Contact() {
  return (
    <Section title="Contact" hint="Say hello—quick response, clear communication">
      <div className="card" style={{ padding: 20 }}>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> <a href={`mailto:${profile.links.email}`}>{profile.links.email}</a></p>
        <p><strong>LinkedIn:</strong> <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">{profile.links.linkedin}</a></p>
        <p><strong>GitHub:</strong> <a href={profile.links.github} target="_blank" rel="noopener noreferrer">{profile.links.github}</a></p>
      </div>
    </Section>
  );
}