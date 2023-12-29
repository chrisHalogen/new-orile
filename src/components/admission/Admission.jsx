import React from "react";
import "./admission.scss";
import { ParallaxBanner } from "react-scroll-parallax";

const Admission = () => {
  return (
    <div className="">
      <ParallaxBanner
        layers={[{ image: "/cocktail.jpeg", speed: -10 }]}
        className="admission"
      >
        <div className="admission">
          <div className="content">
            <h1>
              Our Cocktail Bar offers the finest blend of originally curated
              signature cocktails, with distinct flavors and taste for every
              mood type- Sweet, Sour, Sweet-Sour.
            </h1>
          </div>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default Admission;
