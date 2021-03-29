import React from "react";
import FeatureCard from "./FeatureCard";
import HeroButton from "./HeroButton";

const SectionCard = () => {
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>
      <div className="row">
        <FeatureCard />
        <div className="u-center-text u-margin-top-huge">
          <HeroButton text="Discover My Github" color="green" />
        </div>
      </div>
    </section>
  );
};

export default SectionCard;
