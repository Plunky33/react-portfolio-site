import React from "react";

const HeroButton = (props) => {
  return (
    <a href="#projects" className="btn btn--white btn-animated">
      {props.text}
    </a>
  );
};

export default HeroButton;
