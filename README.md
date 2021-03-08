Weather API https://www.weatherbit.io

# react-redux with electron wrapper

### A Weather App

## Screenshot

![Weather App](https://media.giphy.com/media/QvjlUCkdbXJHVQk0IG/giphy.gif)


## Install


And then install dependencies with npm.

```bash
$ cd project
$ npm i
$ npm run electron 
```
**Note**: I opted to choose the RapidApi over the suggested example as it was responding with incorrect data. Unfortunately I ran out of time to write the test code.


## Features
- users can choose a city (managed with redux)
- displays the time, temperature, and wind info of the selected city
- refreshes data every 10 seconds
- blue background if it's colder than usual than average this month
- orange background if it's warmer than usual
- custom CSS
- electron 
