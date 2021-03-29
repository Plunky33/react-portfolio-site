import React from "react";

const TextButton = (props) => {
  return (
    <a href={`#${props.link}`} className="btn-text">
      {props.text} &rarr;
    </a>
  );
};

export default TextButton;
