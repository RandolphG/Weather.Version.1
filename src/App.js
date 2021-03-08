import React, { useEffect, useState } from "react";
import DialogSelect from "./components/dialogSelect";
import { fetchData } from "./actions/fetchData";
import { useSelector, useDispatch } from "react-redux";
import { avgs } from "./data/data";
import Info from "./components/info";
import Temperature from "./components/temperature";
import DayLightTime from "./components/dayTime";
import WindInfo from "./components/windInfo";

function App() {
  const date = new Date().toDateString().toUpperCase();
  const month = new Date().getMonth();
  const [city, setCity] = useState("zagreb");
  const weatherSelector = useSelector((state) => state.weatherInfo.weatherinfo);
  const dispatch = useDispatch();
  const getWeatherInfoAction = (city) => dispatch(fetchData(city));

  useEffect(() => {
    let interval = null;
    getWeatherInfoAction(city);
    /*interval = setInterval(() => {
      getWeatherInfoAction(city);
    }, 10000);*/
  }, []);

  //
  const {
    wind_spd,
    city_name,
    wind_cdir,
    sunset,
    sunrise,
    temp,
    weather,
  } = weatherSelector;

  if (!weatherSelector) {
    return <div>Nothing</div>;
  }

  return (
    <div className="App">
      <div className="background">
        <div
          className={`container${
            temp > avgs[city][month] ? " container-hot" : ""
          }`}
        >
          <Info weather={weather} date={date} cityName={city_name} />
          <Temperature temp={temp} avgs={avgs} city={city} month={month} />
          <DayLightTime sunrise={sunrise} sunset={sunset} />
          <WindInfo windDir={wind_cdir} windSpeed={wind_spd} />
          <DialogSelect
            city={city}
            setCity={setCity}
            getWeatherInfoAction={getWeatherInfoAction}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
