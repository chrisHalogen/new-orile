import React, { useEffect, useState, useRef } from "react";
import "./gridSection.scss";

const GridSection = ({ theRef }) => {
  const [height, setHeight] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    setHeight(elementRef.current.offsetHeight);
  }, []);
  return (
    <div className="grid-section" ref={theRef}>
      <div className="plain-text" ref={elementRef}>
        <p>
          Experience the refined tastes of Nigeria dishes in a uniquely
          flavorful manner. Our menu celebrates ancient Nigerian cooking methods
          fused with international influences, bringing you a unique dining
          experience.
        </p>
        <br />
        <p>
          Unwind in our cocktail bar, where classic sophistication meets
          innovative creations, offering a boundary-pushing cocktail menu
          alongside timeless classics.
        </p>
        <br />
        <p>
          Enjoy indoor and outdoor seating with multiple dining options, all
          while adhering to our strict no smoking policy, except in designated
          outdoor areas.
        </p>
      </div>
      <img
        src="/new-grid.jpeg"
        alt="grid image"
        style={{ height: `${height}px` }}
      />
    </div>
  );
};

export default GridSection;
