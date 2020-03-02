import {openWeatherApiKey} from './open-weather-api-key';
const axios = require('axios');

export class WeatherService {
  _apiBase = 'https://api.openweathermap.org/data/2.5';

  getResource = async url => {
    try {
      const response = await axios.get(
        `${this._apiBase}${url}&units=metric&mode=json&appid=${openWeatherApiKey}`,
      );
      return await response['data'];
    } catch (error) {
      console.error(error);
    }
  };

  getCurrentWeather = async city => {
    const currentWeather = await this.getResource(`/weather?q=${city}`);
    return this._transformCurrentWeather(currentWeather);
  };

  getForecastWeather = async city => {
    const forecast = await this.getResource(`/forecast?q=${city}`);
    return this._transformForecastWeather(forecast);
  };

  _transformCurrentWeather = currentWeather => {
    return {
      name: `${currentWeather.name}, ${currentWeather.sys.country}`,
      mainTemp: currentWeather.main.temp,
      feelsTemp: currentWeather.main.feels_like,
      maxTemp: currentWeather.main.temp_max,
      minTemp: currentWeather.main.temp_min,
      pressure: currentWeather.main.pressure,
      humidity: currentWeather.main.humidity,
      description: currentWeather.weather['0'].main,
      icon: currentWeather.weather['0'].icon,
      windSpeed: currentWeather.wind.speed,
      windDirection: currentWeather.wind.deg,
      sunrise: currentWeather.sys.sunrise,
      sunset: currentWeather.sys.sunset,
      updateTime: currentWeather.dt,
    };
  };

  _transformForecastWeather = forecast => {
    return {
      name: `${forecast.city.name}, ${forecast.city.country}`,
      list: forecast.list.slice(0, 8),
    };
  };
}
