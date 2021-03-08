import weathercock from "../svg/weathercock.svg";
import speed from "../svg/wind-speed.svg";
import React from "react";

const windInfo = ({ windDir, windSpeed }) => {
  return (
    <div className="wind">
      <div className="text">
        <img alt="wind" className="icon-wind" src={weathercock} />
        <span className="direction">{windDir}</span>
      </div>
      <div className="speed-text">
        <img alt="wind-speed" className="icon-speed" src={speed} />
        <span className="wind-spd">{windSpeed} </span>
        <p style={{ fontSize: ".9rem" }}>ms</p>
      </div>
    </div>
  );
};

export default windInfo;
