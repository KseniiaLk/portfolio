import React from "react";
import './ProjectItem.css';

const ProjectItem = ({ imageSrc, title, description, githubLink }) => {
  return (
    <div className="project-item">
      <div className="project-inner">
        <div className="project-content">
          <img className="project-image" src={imageSrc} alt="" />
          <h5 className="project-title">{title}</h5>
          <p className="project-description">{description}</p>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
