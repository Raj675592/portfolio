import './Skills.css';

const skills = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'HTML', icon: '📄' },
  { name: 'CSS', icon: '🎨' },
  { name: 'C++', icon: '🟦' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'MongoDB', icon: '🌱' }, 
];

const Skills = () => (
  <section className="skills" id="skills">
    <h2>Skills</h2>
    <ul className="skills-list">
      {skills.map(skill => (
        <li key={skill.name} className="skill-item">
          <span className="skill-icon">{skill.icon}</span>
          <span>{skill.name}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Skills; 