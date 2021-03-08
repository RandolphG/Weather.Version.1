export const location = {
  default: {
    latitude: 45.815,
    longitude: 15.9819,
  },
  zagreb: {
    latitude: 45.815,
    longitude: 15.9819,
  },
  oslo: {
    latitude: 59.9139,
    longitude: 10.75223,
  },
  losAngeles: {
    latitude: 34.0522,
    longitude: -118.2437,
  },
};

// average annual monthly temperate provided by google
export const avgs = {
  zagreb: [1.5, 4, 8, 12.5, 17.5, 20.5, 23, 22, 17.5, 12.5, 7, 2.5],
  oslo: [-2.5, 2, 1.5, 6.5, 12, 16, 18.5, 17, 12.5, 7, 2, -1.5],
  losAngeles: [15, 15.5, 16, 18, 19.5, 21.5, 23.5, 24, 23.5, 21, 17.5, 14.5],
};

// weather patterns for Weather API Codes
export const weatherCodes = [
  "thunderstorm",
  "rain",
  "drizzle",
  "shower",
  "snow",
  "clouds",
  "clear Sky",
];

// svg icon urls
export const iconUrl = [
  "../svg/weather/default.svg",
  "../svg/weather/clear_sky.svg",
  "../svg/weather/clouds.svg",
  "../svg/weather/drizzle.svg",
  "../svg/weather/night.svg",
  "../svg/weather/rain.svg",
  "../svg/weather/showers.svg",
  "../svg/weather/snow.svg",
  "../svg/weather/thunderstorm.svg",
];
