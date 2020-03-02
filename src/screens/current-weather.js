import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Loader} from '../components/loader';
import {WeatherService} from '../services/wether-service';
import {WeatherCard} from '../components/weather-card';

export const CurrentWeather = () => {
  const weatherService = new WeatherService();

  const [currentWeather, setCurrentWeather] = useState();

  //------ didMount()

  useEffect(() => {
    updateCurrentWeather();
  }, []);

  const updateCurrentWeather = () => {
    weatherService.getCurrentWeather(`Kharkiv,ua`).then(weatherData => {
      // console.log(weatherData);
      setCurrentWeather(weatherData);
    });
  };

  //------ render()

  const weather = <WeatherCard props={currentWeather} />;

  const visibleContent = currentWeather ? weather : <Loader />;

  return <View style={styles.container}>{visibleContent}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008000',
  },
});
