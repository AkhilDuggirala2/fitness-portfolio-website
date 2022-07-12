/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./banner.css";
import Logo from "../../assets/background.png";

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={Logo} alt="logo" />
      <h1>Build Perfect Body</h1>
      <h3>With Clean Mind</h3>

      <div className="banner-button">
        <a href="#" className="banner-text">
          Booking Now
        </a>
        <a href="#contact" className="banner-join">
          Join Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
