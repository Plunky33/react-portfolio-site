import React from "react";
import video1 from "../img/video.mp4";
import video2 from "../img/video.webm";
import nat8 from "../img/nat-8.jpg";
import nat9 from "../img/nat-9.jpg";

const SectionStory = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video1} type="video/mp4" />
          <source src={video2} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={nat8} alt="person on a tour" className="story__img" />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>

          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family.
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus nesciunt vitae corporis iusto nostrum eius, nisi libero
              sequi. Doloribus nesciunt vitae corporis iusto nostrum eius, nisi
              libero sequi. Doloribus nesciunt vitae corporis iusto nostrum
              eius, nisi libero sequi. Doloribus nesciunt vitae corporis iusto
              nostrum eius, nisi libero sequi.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={nat9} alt="person on a tour" className="story__img" />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>

          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              WOW! My life is completely different now.
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus nesciunt vitae corporis iusto nostrum eius, nisi libero
              sequi. Doloribus nesciunt vitae corporis iusto nostrum eius, nisi
              libero sequi. Doloribus nesciunt vitae corporis iusto nostrum
              eius, nisi libero sequi. Doloribus nesciunt vitae corporis iusto
              nostrum eius, nisi libero sequi.
            </p>
          </div>
        </div>
      </div>
      <div className="u-center-text u-margin-top-huge">
        <a href="#stories" className="btn-text">
          Read All Stories &rarr;
        </a>
      </div>
    </section>
  );
};

export default SectionStory;
