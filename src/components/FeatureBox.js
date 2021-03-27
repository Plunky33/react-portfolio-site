import "../vendor/icon-font.css";
import React from "react";

const boxContent = [
  {
    icon: "world",
    tag: "Explore the World",
    copy:
      "Hello world, dolor sit amet consectetur adipisicing elit. nesciunt nesciunt vitae",
  },
  {
    icon: "compass",
    tag: "Meet Nature",
    copy:
      "Looking good, dolor sit amet consectetur adipisicing elit. nesciunt nesciunt vitae",
  },
  {
    icon: "map",
    tag: "Find Your Way",
    copy:
      "Yowzer!, dolor sit amet consectetur adipisicing elit. nesciunt nesciunt vitae",
  },
  {
    icon: "heart",
    tag: "Live a Healthier Life",
    copy:
      "Awesome!!, dolor sit amet consectetur adipisicing elit. nesciunt nesciunt vitae",
  },
];

const renderedContent = boxContent.map((item) => {
  return (
    <div key={item.tag} className="col-1-of-4">
      <div className="feature-box">
        <i className={`feature-box__icon icon-basic-${item.icon}`}></i>
        <h3 className="heading-tertiary u-margin-bottom-small">{item.tag}</h3>
        <p className="feature-box__text">{item.copy}</p>
      </div>
    </div>
  );
});

const FeatureBox = () => {
  return renderedContent;
};

export default FeatureBox;
