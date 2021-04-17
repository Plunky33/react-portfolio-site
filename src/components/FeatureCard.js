import React from "react";
import HeroButton from "./HeroButton";
import { cardContent } from "../apis/cardContent";

// style statement applies to flow cards, see line 11
const renderedContent = cardContent.map((item, index) => {
  return (
    <div
      key={index}
      className="col-1-of-3-card"
      style={{ clear: index !== 0 && index % 3 === 0 ? "both" : "none" }}
    >
      <div className="card">
        <div className="card__side card__side--front">
          <div className={`card__picture card__picture--${item.picNum}`}>
            &nbsp;
          </div>
          <h4 className="card__heading">
            <span
              className={`card__heading-span card__heading-span--${item.headingNum}`}
            >
              {item.title}
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li>{item.slugA}</li>
              <li>{item.slugB}</li>
              <li>{item.slugC}</li>
              <li>{item.slugD}</li>
              <li>{item.slugE}</li>
            </ul>
          </div>
        </div>
        <div
          className={`card__side card__side--back card__side--back-${item.backNum}`}
        >
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">{item.backTitle}</p>
              <p className="card__price-value">{item.backSubtitle}</p>
            </div>
            <HeroButton
              projectLink={item.projectLink}
              text="Go To Project"
              color="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

const FeatureCard = () => {
  return renderedContent;
};

export default FeatureCard;
