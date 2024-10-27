import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import './Project.css';
import blogVideo from "./Hr-System.mp4";
import DesignVideo from "./GraphicDesign.mp4";
import logmngVideo from "./log.mp4";
import UIVideo from "./UI.mp4";
import youtubeCloneVideo from "./Stayeasy.mp4";
import Visit from "./visit.mp4";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const handleSeeMoreClick = () => {
    setShowMore(!showMore);  // Toggle between showing and hiding the additional cards
  };

  return (
    <div id="Projects" className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-list">
        {/* Initially visible cards */}
        <ProjectCard
          title="Visit_Ethiopia"
          main="developed using React vite, Tailwind CSS."
          videoSrc={Visit}
          demoLink="https://visiteethio.netlify.app/"
          sourceCodeLink="https://github.com/BetiYEG/visite_ethio.git"
        />
        <ProjectCard
          title="CRM/HR-System"
          main="using React, Tailwind CSS, Docker, Spring Boot, and HTTP protocols."
          videoSrc={blogVideo}
          demoLink="https://your-demo-link.com"
          sourceCodeLink="https://github.com/BetiYEG/CRM-HR-System/tree/feature-readme"
        />
        <ProjectCard
          title="StayeasyHotel"
          main="developed using React, Tailwind CSS."
          videoSrc={youtubeCloneVideo}
          demoLink="https://your-demo-link.com"
          sourceCodeLink="https://github.com/BetiYEG/Hotel-project-react.git"
        />


        {/* Additional cards that are only visible when showMore is true */}
        {showMore && (
          <>
            <ProjectCard
              title="Log-Management"
              main="Log Collection, Sehttps://your-demo-link.comarch, Filtering, Visualization, and Alerting System ."
              videoSrc={logmngVideo}
              demoLink="https://your-demo-link.com"
              sourceCodeLink="https://github.com/BetiYEG/-Log-Management/tree/master"
            />
            <ProjectCard
              title="UI/UX-Design"
              main="coffee-ordering app interface by using figma"
              videoSrc={UIVideo}
              demoLink="https://your-demo-link.com"
              sourceCodeLink="https://www.figma.com/design/Zkgr9EJd4HwufrzUrG6EEM/Coffee?node-id=0-1&node-type=canvas&m=dev"
            />
            <ProjectCard
              title="Graphic-Design"
              main="using Adobe illustrator, Photoshop, and InDesign.i create logo banner, poster , and business card."
              videoSrc={DesignVideo}
              demoLink="https://your-demo-link.com"
              sourceCodeLink="https://github.com/BetiYEG/Graphic-Design/blob/main/profilee.pdf"
            />
          </>
        )}
      </div>

      {/* See More/See Less button */}
      <button onClick={handleSeeMoreClick} className="see-more-btn">
        {showMore ? "See Less" : "See More"}
      </button>
    </div>
  );
};

export default Projects;
