import './Projects.css';

const projects = [
  {
    name: 'Project One',
    desc: 'A brief description of the project goes here.',
    demo: '#',
    code: '#',
  },
  {
    name: 'Project Two',
    desc: 'A brief description of the project goes here.',
    demo: '#',
    code: '#',
  },
];

const Projects = () => (
  <section className="projects" id="projects">
    <h2>Projects</h2>
    <div className="projects-list">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <div className="project-img-placeholder"></div>
          <h3>{project.name}</h3>
          <p>{project.desc}</p>
          <div className="project-links">
            <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={project.code} target="_blank" rel="noopener noreferrer">Source</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 