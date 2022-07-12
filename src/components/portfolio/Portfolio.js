/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./portfolio.css";
import Image4 from "../../assets/background4.jpg";
import Image5 from "../../assets/background5.jpg";
import Image6 from "../../assets/background6.jpg";
import Image7 from "../../assets/background7.jpg";
import Image8 from "../../assets/background8.jpg";
import Image9 from "../../assets/background9.jpg";

const data = [
  {
    id: 1,
    image: Image4,
    title: "Fitness Body Build",
  },
  {
    id: 2,
    image: Image5,
    title: "Fitness Body Build",
  },
  {
    id: 3,
    image: Image6,
    title: "Fitness Body Build",
  },
  {
    id: 4,
    image: Image7,
    title: "Fitness Body Build",
  },
  {
    id: 5,
    image: Image8,
    title: "Fitness Body Build",
  },
  {
    id: 6,
    image: Image9,
    title: "Fitness Body Build",
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="portfolio-container">
        <h1>Portfolio</h1>
      </div>
      <div className="portfolio-item">
        {data.map(({ id, image, title }) => {
          return (
            <div key={id} className="portfolio-content">
              <div className="portfolio-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-btn">
                <a href="#">Book Now</a>
                <a href="#">View Now</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
