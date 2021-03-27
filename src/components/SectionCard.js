import React from "react";
import FeatureCard from "./FeatureCard";

const SectionCard = () => {
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>
      <div className="row">
        <FeatureCard />
      </div>
      <div className="row">
        <FeatureCard />
      </div>
    </section>
  );
};

export default SectionCard;
