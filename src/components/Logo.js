import logo from "../img/logo-white.png";
import React from "react";

const Logo = () => {
  return (
    <div className="logo-box">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default Logo;
