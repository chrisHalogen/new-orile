import React from "react";
import "./walkins.scss";

const Walkins = ({ theRef }) => {
  return (
    <div className="walkins" ref={theRef}>
      <div className="inner">
        <h1>Walk-ins welcome but reservations are highly recommended. </h1>
        <p>
          Operating Hours: Mondays: 12pm - 12am
          <br />
          Tuesdays- Sundays: 7:30am - 12am
          <br />
          For Reservations, please call{" "}
          <a href="tel:09136800000">09136800000</a>.
        </p>
      </div>
    </div>
  );
};

export default Walkins;
