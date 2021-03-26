import React from "react";
import FeatureCard from "./FeatureCard";

const SectionCard = () => {
  return (
    <section class="section-tours">
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">Most popular tours</h2>
      </div>
      <div class="row">
        <FeatureCard />
      </div>
    </section>
  );
};

export default SectionCard;
