import React from "react";
import HeroButton from "./HeroButton";

const cardContent = [
  {
    picNum: 1,
    headingNum: 1,
    backNum: 1,
    title: "The Sea Explorer",
    slugA: "3 Day Tour",
    slugB: "Up to 30 People",
    slugC: "2 Tour Guides",
    slugD: "Sleep in Cozy Hotels",
    slugE: "Difficulty: Easy",
    backTitle: "Only",
    backSubtitle: "$297",
  },
  {
    picNum: 2,
    headingNum: 2,
    backNum: 2,
    title: "The Forest Hiker",
    slugA: "3 Day Tour",
    slugB: "Up to 30 People",
    slugC: "2 Tour Guides",
    slugD: "Sleep in Cozy Hotels",
    slugE: "Difficulty: Easy",
    backTitle: "Only",
    backSubtitle: "$297",
  },
  {
    picNum: 3,
    headingNum: 3,
    backNum: 3,
    title: "The Snow Adventurer",
    slugA: "3 Day Tour",
    slugB: "Up to 30 People",
    slugC: "2 Tour Guides",
    slugD: "Sleep in Cozy Hotels",
    slugE: "Difficulty: Easy",
    backTitle: "Only",
    backSubtitle: "$297",
  },
];

const renderedContent = cardContent.map((item) => {
  return (
    <div class="col-1-of-3">
      <div class="card">
        <div class="card__side card__side--front">
          <div class={`card__picture card__picture--${item.picNum}`}>
            &nbsp;
          </div>
          <h4 class="card__heading">
            <span
              class={`card__heading-span card__heading-span--${item.headingNum}`}
            >
              {item.title}
            </span>
          </h4>
          <div class="card__details">
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
          class={`card__side card__side--back card__side--back-${item.backNum}`}
        >
          <div class="card__cta">
            <div class="card__price-box">
              <p class="card__price-only">{item.backTitle}</p>
              <p class="card__price-value">{item.backSubtitle}</p>
            </div>
            <HeroButton text="Check Out Project" />
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
