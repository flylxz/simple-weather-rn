import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Transformation} from '../services/weather-and-date-transformation';

export const ForecastListItem = ({props}) => {
  transform = new Transformation();
  const {transformDate, degToCard, setWeekdayTitle} = transform;
  //   console.log(props);
  const {dt, weather, main, wind} = props;
  const weatherIcon = `https://openweathermap.org/img/wn/${weather['0'].icon}.png`;
  const windDirection = degToCard(wind.deg);

  return (
    <View>
      {/* <Text style={styles.date}>{title(dt)}</Text> */}
      <View style={styles.listItem}>
        <View>
          <Text style={styles.date}>{transformDate(dt)}</Text>
          <Text style={styles.date}>{Math.round(main.temp)}°C</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: weatherIcon,
            }}
          />
          <Text style={styles.date}>{weather['0'].main}</Text>
        </View>
        <View>
          <Text style={styles.date}>
            Wind: {wind.speed.toFixed(1)}m/s {windDirection}
          </Text>
          <Text style={styles.date}>Humidity: {main.humidity}%</Text>
          <Text style={styles.date}>
            Pressure: {~~(main.pressure / 1.333)}mmHg
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f222',
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,
  },

  date: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 16,
    color: 'white',
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: '#f2f2f255',
    borderRadius: 50,
  },
});
