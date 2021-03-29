import nature1 from "../img/nat-1.jpg";
import nature2 from "../img/nat-2.jpg";
import nature3 from "../img/nat-3.jpg";
import React from "react";
import TextButton from "./TextButton";

const SectionAbout = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting Tour for Adventurous People
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            nesciunt vitae corporis iusto nostrum eius, nisi libero sequi.
            Doloribus nesciunt vitae corporis iusto nostrum eius, nisi libero
            sequi.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            nesciunt vitae corporis iusto nostrum eius, nisi libero sequi.
          </p>
          <TextButton text="Learn More" link="about" />
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={nature1}
              alt="about"
              className="composition__photo composition__photo--p1"
            />
            <img
              src={nature2}
              alt="about"
              className="composition__photo composition__photo--p2"
            />
            <img
              src={nature3}
              alt="about"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
