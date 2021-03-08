import { location } from "../data/data";

/**
 * fetch api
 * @returns {function(*): Response | void}
 * @param city
 */
export function fetchData(city) {
  if (!city || "") {
    const selection = getNestedObject(location, ["default"]);
  }
  const selection = getNestedObject(location, [city]);
  const { latitude, longitude } = selection || {};
  const lon = longitude;
  const lat = latitude;

  return async function (dispatch) {
    const url = `https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&lon=${lon}&lat=${lat}`;
    await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
        "x-rapidapi-key": "3433df2959msh22e9e7607844fa5p12cb6ejsne7179ae91a96",
      },
    })
      .then((response) => {
        if (response.error) {
          throw response.error;
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "FETCH_DATA", payload: data.data[0] });
      })
      .catch((err) => {});
  };
}

/**
 * access nested objects with array reduce
 * source  https://dev.to/flexdinesh/accessing-nested-objects-in-javascript--9m4
 * @param nestedObj
 * @param pathArr
 * @returns {*}
 */
const getNestedObject = (nestedObj, pathArr) => {
  return pathArr.reduce(
    (obj, key) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
    nestedObj
  );
};
