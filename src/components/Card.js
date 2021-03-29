import React from "react";

const Card = () => {
  return (
    <div key={item.title} className="col-1-of-3">
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
            <HeroButton text="See Project" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
