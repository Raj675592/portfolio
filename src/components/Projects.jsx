import './Projects.css';

const projects = [
  {
    name: 'Projects By IIT KANPUR',
    desc: 'A collaborative platform for showcasing innovative projects from IIT Kanpur students and faculty. I contributed to the frontend, building interactive UI components and ensuring a seamless user experience.',
    demo:'https://sntsummerprojects.netlify.app/',
    code: 'https://github.com/Raj675592/SnT_Project_Site',
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