import React from "react";
import { Link } from 'react-scroll';


const FeatureButton = (props) => {
  return (
    <Link
    activeClass="active"
    to={props.dest}
    spy={true}
    smooth={true}
    duration={1000}
    className={`btn btn--${props.color} btn-animated`}>
      {props.text}
    </Link>
  );
};

export default FeatureButton;
