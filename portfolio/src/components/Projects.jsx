import React from 'react';
import { Github } from 'lucide-react';

// Import local images
import project1 from '../assets/project1.png'; 
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: 'LangLearn',
      description:
        'A responsive web-based language learning platform built with HTML, CSS, and JavaScript, offering interactive lessons, quizzes, and practice exercises to enhance user engagement and improve learning efficiency effectively.',
      image: project1,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'Chart.js'],
      github: 'https://github.com/faizanalam9835/project-1',
      live: 'https://langlearn-project.netlify.app/',
    },
    {
      title: 'ShopCircle',
      description:
        'A React-based e-commerce website using Context API for state management, Firebase Authentication for secure login, and Firebase Database for real-time product, user, and order data, delivering a smooth online shopping experience.',
      image: project2,
      technologies: ['React', 'Inline css', 'Firebase', 'Context API' , "Firebase-Auth"],
      github: 'https://github.com/faizanalam9835/E-Commerce-July',
      live: 'https://ecommerce-july.netlify.app/',
    },
    {
      title: 'TaskTracker Collabration',
      description:
        'TaskTracker is a full-stack MERN web application with JWT authentication, offering secure user login, task creation, updates, and deletion. It ensures efficient task management, real-time data handling, and a responsive interface to boost productivity and organization.',
      image: project3,
      technologies: [
        'React.js',
        'Inline CSS',
        'Framer Motion',
        'Node.js',
        'Express.js',
        'MongoDB Atlas',
        'JWT',
      ],
      github: 'https://github.com/faizanalam9835/TaskTracker_Collaboration',
      live: 'https://task-traker-beta.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-label">RECENTLY ADDED PROJECT</div>
        <h2>
          MY PROJECTS <span className="arrow">→</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a
                    href={project.github}
                    className="github-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github /> Github
                  </a>
                  <a
                    href={project.live}
                    className="live-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ✓ Go Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
