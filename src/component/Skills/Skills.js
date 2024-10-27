import React, { useState } from "react";
import "./skills.css";
import coderImage from "./coder.webp";
import Image from "./image.jpg";
import Image1 from "./image1.avif";
import image from "./Skill.png"; // Import the image file

const Skills = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const handleDownloadImage = () => {
    const link = document.createElement("a");
    link.href = image;
    link.download = "skill.jpg";
    link.click();
  };

  return (
    <section id="skills">
      <span className="skilTitle">About Us</span>
      

      <div className="tab-titles">
        <p
          className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
          onClick={() => openTab("skills")}
        >
          Skills
        </p>
        <p
          className={`tab-links ${activeTab === "experience" ? "active-link" : ""}`}
          onClick={() => openTab("experience")}
        >
          Experiences
        </p>
        <p
          className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
          onClick={() => openTab("education")}
        >
          Education
        </p>
      </div>

      <div className="skills-container">
        {activeTab === "skills" && (
          <div className="tab-contents active-tab">
            <div className="card">
              <div className="skills-content">
                <ul>
                  <li>
                    <span>UI/UX</span>
                    <p>
                      Crafting intuitive user experiences and visually appealing interfaces by focusing on usability and accessibility. This includes wireframing, prototyping, and testing designs to ensure a seamless and user-friendly interaction.
                    </p>
                  </li>
                  <li>
                    <span>Web Development</span>
                    <p>
                      Creating websites that adapt to different screen sizes and devices, ensuring a seamless user experience.
                    </p>
                  </li>
                  <li>
                    <span>Graphic Design</span>
                    <p>
                      I use various tools and techniques to create engaging materials, both in print and digital formats, enhancing branding and user engagement.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card image-container">
              <img src={Image} alt="Coder" className="coder-image" />
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="tab-contents active-tab">
            <div className="card">
              <div className="skills-content">
                <ul>
                  <li>
                    <span>Full-Stack Web Developer at Xcell Company</span>
                    <p>Creating websites that adapt to different screen sizes and devices, ensuring a seamless user experience.</p>
                  </li>
                  <li>
                    <span>Mobile App Development and UI/UX</span>
                    <p>Building iOS and Android applications, focusing on intuitive and engaging user interfaces and experiences.</p>
                  </li>
                  <li>
                    <span>Graphic Design</span>
                    <p>Working on various design projects, including branding and digital media, to enhance visual aesthetics across platforms.</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card image-container">
              <img src={Image1} alt="Coder" className="coder-image" />
            </div>
          </div>
        )}

        {activeTab === "education" && (
          <div className="tab-contents active-tab">
            <div className="card">
              <div className="skills-content">
                <ul className="education-list">
                  <li className="education-item">
                    <span className="degree-title">Software Engineering Degree</span>
                    <p className="degree-details">Bachelor of Science in Software Engineering, Addis Ababa University (2021 - 2025)</p>
                  </li>
                  <li className="certifications">
                    <span className="certifications-title">CERTIFICATIONS</span>
                    <p className="certifications-details">
                      Introduction to Packet Tracer, Cisco Networking Academy®<br />
                      JavaScript & jQuery Survival Guide, Gymnasium<br />
                      UI/UX Design, Udemy<br />
                      Graphic Design Certificate, Berhanena Selam Printing Technology College
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card image-container">
              <img src={coderImage} alt="Coder" className="coder-image" />
            </div>
          </div>
        )}
      </div>

      <button className="downloadButton" onClick={handleDownloadImage}>
        Download My CV
      </button>
    </section>
  );
};

export default Skills;
