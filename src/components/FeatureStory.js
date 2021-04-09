import nat8 from "../img/nat-8.jpg";
import nat9 from "../img/nat-9.jpg";
import React from "react";

const stories = [
  {
    foto: nat8,
    name: "Mary Smith",
    heading: "I had the best week ever with my family.",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus",
  },
  {
    foto: nat9,
    name: "Jack Wilson",
    heading: "WOW! My life has completely changed.",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus",
  },
];

const FeatureStory = () => {
  return stories.map((item, index) => {
    return (
      <div key={index} className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src={`${item.foto}`}
              alt="person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">{item.name}</figcaption>
          </figure>

          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              {item.heading}
            </h3>
            <p>{item.text}</p>
          </div>
        </div>
      </div>
    );
  });
};

export default FeatureStory;
