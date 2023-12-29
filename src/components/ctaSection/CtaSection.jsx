import React from "react";
import "./ctaSection.scss";

const CtaSection = ({ toMenu, toContact }) => {
  return (
    <div style={{ backgroundImage: `url("/seafood.jpeg")` }} className="cta">
      <div className="overlay"></div>
      <div className="inner">
        <h1>We take food and fun seriously, and we take it Slow.</h1>
        <div className="btns">
          <a href="#our-menu" onClick={() => toMenu()}>
            Our Menu
          </a>
          <a href="#our-location" onClick={() => toContact()}>
            Our Location
          </a>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
