import Section from './Section';

const educationData = [
  {
    degree: "Bsc Computer Science",
    institution: "Egs Pillay Arts and Science College",
    location: "Nagapattinam,Tamilnadu",
    year: "2022 – 2025",
    details: "Focused on backend development, data structures, and system design. Final year project on RESTful API architecture."
  },
  {
    degree: "Higher Secondary",
    institution: "National Higher Secondary School",
    location: "Mannargudi,Thiruvarur",
    year: "2019 – 2022",
    details: "Completed higher secondary education with strong academic performance, emphasizing analytical thinking and technical aptitude."
  }
];

export default function EducationSection() {
  return (
    <Section title="Education" hint="Academic foundation and technical focus">
      <div className="grid auto-fit" style={{ gap: 16 }}>
        {educationData.map((edu, index) => (
          <div className="card" key={index} style={{ padding: 20 }}>
            <h4 style={{ marginBottom: 8 }}>{edu.degree}</h4>
            <p><strong>{edu.institution}</strong> — {edu.location}</p>
            <p>{edu.year}</p>
            <p style={{ marginTop: 8, color: 'var(--text-secondary)' }}>{edu.details}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}