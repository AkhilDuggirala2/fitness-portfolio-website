import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={Logo} alt="" />
      </div>
    </header>
  );
};

export default Header;
