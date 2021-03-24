import "./Header.css";
import React from "react";
import Logo from "./Logo";
import HeroButton from "./HeroButton";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">Is Where Life Happens</span>
        </h1>
        <HeroButton />
      </div>
    </header>
  );
};

export default Header;
