import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Transformation} from '../services/weather-and-date-transformation';

export const ForecastListItem = ({props}) => {
  transform = new Transformation();
  const {transformDate, getDate, degToCard} = transform;
  //   console.log(props);
  const {dt, weather, main, wind} = props;
  //   humidity,    pressure,    windDirection,    windSpeed,
  const weatherIcon = `https://openweathermap.org/img/wn/${weather['0'].icon}.png`;
  const windDirection = degToCard(wind.deg);

  return (
    <View style={styles.listItem}>
      {/* <Text>from item</Text> */}
      <Text style={styles.date}>{transformDate(dt)}</Text>
      <Image
        style={styles.image}
        source={{
          uri: weatherIcon,
        }}
      />
      <Text style={styles.date}>{weather['0'].main}</Text>
      <Text style={styles.date}>{Math.round(main.temp)}°C</Text>
      <Text style={styles.date}>
        Wind: {wind.speed.toFixed(1)}m/s {windDirection}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f222',
    borderRadius: 10,
    marginVertical: 5,
    padding: 5,
  },
  date: {
    fontFamily: 'Quicksand-Regular',
    color: 'white',
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: '#ffff0099',
    borderRadius: 50,
  },
});
