import { combineReducers } from "redux";
import { weatherInfo } from "./weather";

// combine reducers
const reducers = combineReducers({
  weatherInfo,
});

export default reducers;
