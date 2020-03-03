import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Loader} from '../components/loader';
import {WeatherService} from '../services/wether-service';
import {ForecastCard} from '../components/forecast-card';

export const ForecastWeather = () => {
  const weatherService = new WeatherService();

  const [forecastWeather, setForecastWeather] = useState();

  //------ didMount()

  useEffect(() => {
    updateForecastWeather();
  }, []);

  const updateForecastWeather = () => {
    weatherService.getForecastWeather(`Kharkiv,ua`).then(forecastData => {
      setForecastWeather(forecastData);
    });
  };

  //------ render()

  const forecast = <ForecastCard forecastWeather={forecastWeather} />;

  const visibleContent = forecastWeather ? forecast : <Loader />;

  return <View style={styles.container}>{visibleContent}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00802b',
  },
});
