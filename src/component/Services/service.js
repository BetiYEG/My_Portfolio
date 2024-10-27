import React, { useEffect, useState } from "react";
import "./service.css";
import UIDesign from "../../asset/ui-design.png";
import WebDevelopment from "../../asset/web-development.png";
import MobileApp from "../../asset/mobile-app.jpg";
import GraphicDesign from "../../asset/gra.avif";

const Service = () => {
  const [animate, setAnimate] = useState(false);
  const [clickedCard, setClickedCard] = useState(null); // Track which card is clicked

  // Function to start animation when "Services" link is clicked or section comes into view
  const startAnimation = () => {
    setAnimate(true);
  };

  useEffect(() => {
    const serviceSection = document.getElementById("services");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect(); // Stop observing once the section is visible
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold to trigger the animation earlier
    );

    if (serviceSection) {
      observer.observe(serviceSection);
    }

    return () => {
      if (serviceSection) observer.disconnect();
    };
  }, []);

  // Handle card click to trigger animation
  const handleCardClick = (card) => {
    setClickedCard(card); // Track which card is clicked
    // Reset the animation after it finishes
    setTimeout(() => setClickedCard(null), 1000); // 1 second (matches animation duration)
  };

  return (
    <section id="services" className={animate ? "animate" : ""}>
      <span className="skillTitle">My Services</span><br />
      <span className="skillDesc">
        I am a passionate and dedicated software engineering student with a strong interest
        in developing innovative web.
      </span>
      <div className="skillBars">
        <div
          className={`skillBar ${clickedCard === "UIDesign" ? "cardClicked" : ""}`}
          onClick={() => handleCardClick("UIDesign")}
        >
          <img
            src={UIDesign}
            alt="UIDesign"
            className={`skillBarImg ${clickedCard === "UIDesign" ? "clicked" : ""}`}
          />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>
              I specialize in designing intuitive and visually appealing
              user interfaces that provide a seamless user experience.
            </p>
          </div>
        </div>
        <div
          className={`skillBar ${clickedCard === "WebDevelopment" ? "cardClicked" : ""}`}
          onClick={() => handleCardClick("WebDevelopment")}
        >
          <img
            src={WebDevelopment}
            alt="WebDevelopment"
            className={`skillBarImg ${clickedCard === "WebDevelopment" ? "clicked" : ""}`}
          />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>
              I have expertise in developing responsive and scalable web
              applications using modern frameworks and technologies.
            </p>
          </div>
        </div>
        <div
          className={`skillBar ${clickedCard === "GraphicDesign" ? "cardClicked" : ""}`}
          onClick={() => handleCardClick("GraphicDesign")}
        >
          <img
            src={GraphicDesign}
            alt="GraphicDesign"
            className={`skillBarImg ${clickedCard === "GraphicDesign" ? "clicked" : ""}`}
          />
          <div className="skillBarText">
            <h2>Graphic Design</h2>
            <p>
              I have hands-on experience in creating visually compelling graphic designs
              that effectively communicate ideas and engage users across various platforms.
            </p>
          </div>
        </div>
        <div
          className={`skillBar ${clickedCard === "MobileApp" ? "cardClicked" : ""}`}
          onClick={() => handleCardClick("MobileApp")}
        >
          <img
            src={MobileApp}
            alt="MobileApp"
            className={`skillBarImg ${clickedCard === "MobileApp" ? "clicked" : ""}`}
          />
          <div className="skillBarText">
            <h2>Mobile App Development</h2>
            <p>
              I have hands-on experience in building cross-platform
              mobile applications that deliver a rich and engaging user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
