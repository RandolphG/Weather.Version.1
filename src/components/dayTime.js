import sunrise_icon from "../svg/_icon_dawn.svg";
import sunset_icon from "../svg/_icon_dusk.svg";
import React from "react";

const dayTime = ({ sunrise, sunset }) => {
  return (
    <div className="sun-time">
      <div className="sunrise">
        <img alt="sunrise" className="icon-sunrise" src={sunrise_icon} />
        <span className="time">{sunrise}</span>
      </div>
      <div className="sunset">
        <img alt="sunset" className="icon-sunset" src={sunset_icon} />
        <span className="sunset-time">{sunset}</span>
      </div>
    </div>
  );
};

export default dayTime;
