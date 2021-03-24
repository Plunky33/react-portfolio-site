import "./Header.css";
import React from "react";
import Logo from "./Logo";
import HeroButton from "./HeroButton";

const Header = () => {
  return (
    <header class="header">
      <Logo />
      <div class="text-box">
        <h1 class="heading-primary">
          <span class="heading-primary-main">Outdoors</span>
          <span class="heading-primary-sub">Is Where Life Happens</span>
        </h1>
        <HeroButton />
      </div>
    </header>
  );
};

export default Header;
