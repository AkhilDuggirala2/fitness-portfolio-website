import React from "react";
import "./about.css";
import ME from "../../assets/me.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-container">
        <h1>About Me</h1>
      </div>
      <div className="about-me">
        <div className="about-me-image">
          <img src={ME} alt="About Image" />
        </div>
        <div className="about-description">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, libero
            iusto! Sapiente est magni amet non doloremque maxime eveniet,
            deleniti autem rerum praesentium. Unde, cumque obcaecati. Ullam
            similique odio itaque cupiditate obcaecati dolores tempora harum
            accusamus id delectus. Rem, eveniet.
          </p>
          <div className="about-readmore">Read More</div>
        </div>
      </div>
    </div>
  );
};

export default About;
