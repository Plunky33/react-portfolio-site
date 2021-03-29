import React from "react";
import FeatureVideo from "./FeatureVideo";
import FeatureStory from "./FeatureStory";
import TextButton from "./TextButton";

const SectionStory = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <FeatureVideo />
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>
      <FeatureStory />
      <div className="u-center-text u-margin-top-huge">
        <TextButton text="Read All Stories" link="stories" />
      </div>
    </section>
  );
};

export default SectionStory;
