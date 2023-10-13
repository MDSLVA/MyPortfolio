import React from 'react';
import Project from './Project'; 

const projects = [
  {
    description: 'Password Generator',
    imageUrl: './src/img/1.jpg',
    githubLink: 'https://github.com/MDSLVA/Password-Generator',
    deployedLink: 'https://mdslva.github.io/Password-Generator/',
  },
  {
    description: 'Web Api Quiz',
    imageUrl: './src/img/2.jpg',
    githubLink: 'https://github.com/MDSLVA/WebApiQuiz',
    deployedLink: 'https://mdslva.github.io/WebApiQuiz/',
  },
  {
    description: 'Work Day Scheduler',
    imageUrl: './src/img/3.jpg',
    githubLink: 'https://github.com/MDSLVA/Work-Day-Scheduler',
    deployedLink: 'https://mdslva.github.io/Work-Day-Scheduler/',
  },
  {
    description: 'Marvel Character Browser',
    imageUrl: './src/img/4.jpg',
    githubLink: 'https://github.com/J-D-garwood/Marvel-Character-Browser',
    deployedLink: 'https://j-d-garwood.github.io/Marvel-Character-Browser/',
  },
  {
    description: 'Weather Dashboard',
    imageUrl: './src/img/5.jpg',
    githubLink: 'https://github.com/MDSLVA/Weather-Dashboard',
    deployedLink: 'https://mdslva.github.io/Weather-Dashboard/',
  },
  {
    description: 'Note Taker',
    imageUrl: './src/img/6.jpg',
    githubLink: 'https://github.com/MDSLVA/Note-Taker-Module11',
    deployedLink: 'https://shielded-lowlands-15441-b5fe0285417e.herokuapp.com/',
  },
];

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
              <img
                src={project.imageUrl}
                alt={project.description}
                title={project.description}
              />
            </a>
            <h3>{project.description}</h3>
            <a
              className="navigation-link"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;