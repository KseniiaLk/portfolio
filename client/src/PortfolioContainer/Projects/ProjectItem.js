import React from "react";
import './ProjectItem.css';

const ProjectItem = ({ imageSrc, title, description, githubLink,liveLink }) => {
  return (
    <div className="project-item">
      <div className="project-inner">
        <div className="project-content">
          <img className="project-image" src={imageSrc} alt="" />
          <h5 className="project-title">{title}</h5>
          <p className="project-description">{description}</p>
          <div className="project-links">
            <a className="project-link" href={githubLink} target="_blank" rel="noopener noreferrer">
            Project
          </a>
          <a className="project-link" href={liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
