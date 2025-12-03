import skills from '../data/skills.json';

const SkillsGrid = () => (
  <div className="tech-stack" id='skills'>
    <h3>Tech Stack</h3>
    <div className="grid">
      {skills.map((skill, index) => (
        <div className="skill-card" key={index}>
          <img src={skill.logo} alt={skill.name} />
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default SkillsGrid;