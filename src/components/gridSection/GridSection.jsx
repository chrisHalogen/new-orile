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
          Our menu is based on ancient cooking methods redesigned to meet the
          modern diners needs. We are heavily influenced by African flavors with
          an international touch set in a casual, yet luxurious and lush
          atmosphere.
        </p>
        <br />
        <p>
          Our cocktail bar is designed to give a classic, lavish but
          approachable and friendly experience where you will discover new
          flavors thanks to our no boundary approach to cocktail creativity but
          also reminisce on the days that were with our classic cocktail
          selection.
        </p>
        <br />
        <p>
          We offer indoor and outdoor seating and several different dining
          options such as booths, high tables and dining on the bar. The
          restaurant adheres to a strict no smoking policy except in designated
          outdoor areas.
        </p>
      </div>
      <img
        src="/orile-food.jpg"
        alt="grid image"
        style={{ height: `${height}px` }}
      />
    </div>
  );
};

export default GridSection;
