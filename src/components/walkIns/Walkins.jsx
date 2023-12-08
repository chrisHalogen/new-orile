import React from "react";
import "./walkins.scss";

const Walkins = ({ theRef }) => {
  return (
    <div className="walkins" ref={theRef}>
      <div className="inner">
        <h1>Walk-ins welcome but reservations are highly recommended. </h1>
        <p>
          Operating Hours: Monday - Friday 8am - 12am
          <br />
          Saturday & Sunday 10am - 12am
          <br />
          To reserve please <a href="#">call us</a> or <a href="#">whatsapp</a>{" "}
          from 10am.
        </p>
      </div>
    </div>
  );
};

export default Walkins;
