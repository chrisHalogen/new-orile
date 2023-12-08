import React, { useState } from "react";
import "./menu.scss";

const Menu = ({ theRef }) => {
  const [timeOfDay, setTimeOfDay] = useState(1);
  const [numPages, setNumPages] = useState(4);

  const nums = [4, 10, 10];

  let setValues = (value) => {
    setTimeOfDay(value);
    setNumPages(nums[value - 1]);
  };

  const renderImages = (tod, num) => {
    const listItems = [];
    for (let i = 0; i < num; i++) {
      listItems.push(
        <img
          className="current-image"
          src={`/menu-images/orile-${tod}-${i}.jpg`}
          alt="Menu Image"
          key={i}
        />
      );
    }
    return listItems;
  };

  return (
    <div className="menu" ref={theRef}>
      <div className="inner">
        <h1>Our Menu</h1>
        <div className="tod-selector">
          <button onClick={() => setValues(1)}>Breakfast</button>
          <button onClick={() => setValues(2)}>Lunch</button>
          <button onClick={() => setValues(3)}>Dinner</button>
        </div>

        {renderImages(timeOfDay, numPages)}
      </div>
    </div>
  );
};

export default Menu;
