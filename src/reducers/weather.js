const FETCH_DATA = "FETCH_DATA";
export const weatherInfo = (
  state = {
    weatherinfo: [],
  },
  action
) => {
  // check action type
  if (action.type === FETCH_DATA) {
    state = { ...state, weatherinfo: action.payload };
  }
  return state;
};

export default weatherInfo;
