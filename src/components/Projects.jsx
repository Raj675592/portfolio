import './Projects.css';

const projects = [
  {
    name: 'PlanPaisa',
    desc: 'A full stack web application for managing personal finances. I designed and developed the entire website, including both the frontend and backend, using Firebase for real-time database, authentication, and cloud storage. The app features secure login, intuitive dashboards, and tools for tracking expenses, budgets, and financial goals.Special features include: 1. Real-time notifications. 2. Interactive bar charts for analyzing income and expenses 3. Detailed financial reports. 4. User-adjustable profile settings. 5. Personalized user dashboard',
    demo: 'https://finance-management-4ceb0.web.app/login',
    code: 'https://github.com/Raj675592/finance-management',
    img:'image.png',
  },
  {
    name: 'Projects By IIT KANPUR',
    desc: 'A collaborative platform for showcasing innovative projects from IIT Kanpur students and faculty. I contributed to the frontend, building interactive UI components and ensuring a seamless user experience. The platform allows users to submit, browse, and search for projects, with advanced filtering and categorization features. It supports real-time collaboration, project updates, and user authentication. The site is fully responsive and optimized for both desktop and mobile devices. My work focused on frontend development, UI/UX design, and implementing dynamic project listing and search functionalities.',
    demo:'https://sntsummerprojects.netlify.app/',
    code: 'https://github.com/Raj675592/SnT_Project_Site',
    img:'image copy.png',
  },
  
  
 
];

const Projects = () => (
  <section className="projects" id="projects">
    <h2>Projects</h2>
    <div className="projects-list">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <div className="project-img-placeholder">
            <img  src={project.img}/>
          </div>
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