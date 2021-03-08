import cold from "../svg/cold.svg";
import hot from "../svg/hot.svg";
import React from "react";

const temperature = ({ temp, avgs, city, month }) => {
  return (
    <div className="tmp">
      <img className="indicator" src={temp > avgs[city][month] ? hot : cold} />
      <div className="current">{temp}&deg;</div>
      <div className="avg">
        <div className="text">
          AVG <span className="degrees">{avgs[city][month]}</span>&deg;
        </div>
      </div>
    </div>
  );
};

export default temperature;
