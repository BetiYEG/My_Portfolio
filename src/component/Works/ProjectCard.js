import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, main, videoSrc, demoLink, sourceCodeLink }) => {
  return (
    <div className="project-card">
      <video className="project-banner" src={videoSrc} controls />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{main}</p>
      <div className="project-buttons">
        {/* Demo Button */}
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
  <button className="btn demo-btn">Demo</button>
</a>

        
        {/* Source Code Button */}
        <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
          <button className="btn source-btn">Source Code</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
