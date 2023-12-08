import React from "react";
import "./admission.scss";
import { ParallaxBanner } from "react-scroll-parallax";

const Admission = () => {
  return (
    <div className="">
      <ParallaxBanner
        layers={[{ image: "/admissions.jpg", speed: -10 }]}
        className="admission"
      >
        <div className="admission">
          <div className="content">
            <h1>
              Seating at the bar is reserved for ages 21 and above. Management
              reserves the right of admission.
            </h1>
          </div>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default Admission;
