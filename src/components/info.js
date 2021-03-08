import { motion } from "framer-motion";
import React from "react";
import defaultImg from "../svg/weather/clear_sky.svg";

const info = ({ weather, date, cityName }) => {
  return (
    <div className="top">
      <motion.img
        animate={{
          rotate: [180, 0, 180],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          loop: Infinity,
        }}
        className="icon"
        src={defaultImg}
      />
      <div className="info">
        <div className="city">{cityName && cityName.toUpperCase()}</div>
        <div className="date">
          <span>{date}</span>
        </div>
        <div className="description">
          <span>{weather && weather.description.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
};

export default info;
