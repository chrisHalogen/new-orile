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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem
          unde debitis architecto! Odit ipsa nobis aliquid, error perspiciatis
          illum non vel eveniet iusto expedita cum! Odio, itaque. Nobis, quae!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem
          unde debitis architecto! Odit ipsa nobis aliquid, error perspiciatis
          illum non vel eveniet iusto expedita cum! Odio, itaque. Nobis, quae!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem
          unde debitis architecto! Odit ipsa nobis aliquid, error perspiciatis
          illum non vel eveniet iusto expedita cum! Odio, itaque. Nobis, quae!
        </p>
      </div>
      <img
        src="/grid-image.jpg"
        alt="grid image"
        style={{ height: `${height}px` }}
      />
    </div>
  );
};

export default GridSection;
