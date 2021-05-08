import React from "react";
import FeatureCard from "./FeatureCard";
import HeroButton from "./HeroButton";

const SectionCard = () => {
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary" id="projects">Current Projects</h2>
      </div>
      <div className="row">
        <FeatureCard />
        <div className="u-center-text u-margin-top-huge">
          <HeroButton text="Discover My Github" color="blue" projectLink="github.com/plunky33"/>
        </div>
      </div>
    </section>
  );
};

export default SectionCard;
