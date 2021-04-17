import React from "react";

const HeroButton = (props) => {
  return (
    <a
      href={`http://${props.projectLink}`}
      target="_blank"
      rel="noreferrer"
      className={`btn btn--${props.color} btn-animated`}
    >
      {props.text}
    </a>
  );
};

export default HeroButton;
