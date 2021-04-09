import logo from "../img/logo-green-2x.png";
import React from "react";

const SectionFooter = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={logo} alt="Full logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#company" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#contact" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="#careers" className="footer__link">
                  Carrers
                </a>
              </li>
              <li className="footer__item">
                <a href="#privacy" className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#terms" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            temporibus beatae vel accusamus minima est blanditiis consectetur
            nam incidunt inventore?
            <a href="#footer" className="footer__link">
              Lorem ipsum
            </a>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            inventore delectus in magni iste itaque impedit rerum voluptate
            tenetur voluptatum.
            <a href="#footer" className="footer__link">
              Lorem ipsum
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SectionFooter;
