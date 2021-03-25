import logo from "../img/logo-white.png";
import React from "react";

const Logo = () => {
  return (
    <div className="header__logo-box">
      <img src={logo} alt="Logo" className="header__logo" />
    </div>
  );
};

export default Logo;
