import React from "react";
import Logo from "./Logo";
import FeatureButton from "./FeatureButton";


const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">John Milner</span>
          <span className="heading-primary--sub">Web Developer</span>
        </h1>
        <FeatureButton text="Discover Projects" color="white" dest="projects" />
      </div>
    </header>
  );
};

export default Header;
