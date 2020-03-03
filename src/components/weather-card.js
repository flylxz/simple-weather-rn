import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {Transformation} from '../services/weather-and-date-transformation';

export const WeatherCard = ({props}) => {
  const {
    name,
    description,
    mainTemp,
    feelsTemp,
    humidity,
    pressure,
    sunrise,
    sunset,
    windDirection,
    windSpeed,
    updateTime,
    icon,
  } = props;

  transform = new Transformation();
  const {transformDate, getDate, degToCard} = transform;

  const weatherIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  const windDir = degToCard(windDirection);

  return (
    <View style={styles.weatherCard}>
      <View style={styles.cityInfo}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.date}>{getDate(updateTime)}</Text>
      </View>
      <View style={styles.mainInfo}>
        <View style={styles.mainInfoBig}>
          <View>
            <Text style={styles.bigText}>{description}</Text>
            <Text style={styles.bigText}>{mainTemp}°C</Text>
            <Text style={styles.mainText}>
              Feels like: {Math.round(feelsTemp)}°C
            </Text>
          </View>
          <Image
            style={styles.image}
            source={{
              uri: weatherIcon,
            }}
          />
        </View>
      </View>
      <View style={styles.additionInfo}>
        <Text style={styles.mainText}>
          Wind: {windSpeed}m/s {windDir}
        </Text>
        <Text style={styles.mainText}>Humidity: {humidity}%</Text>
        <Text style={styles.mainText}>
          Pressure: {~~(pressure / 1.333)}mmHg
        </Text>
        <Text style={styles.mainText}>Sunrise: {transformDate(sunrise)}</Text>
        <Text style={styles.mainText}>Sunset: {transformDate(sunset)}</Text>
        <Text style={styles.updateTime}>
          Updated: {transformDate(updateTime)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherCard: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cityInfo: {
    height: '15%',
    alignItems: 'center',
    backgroundColor: '#f2f2f222',
    borderRadius: 10,
    marginVertical: 10,
    paddingBottom: 10,
  },
  title: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 32,
    color: 'white',
  },
  date: {
    fontFamily: 'Quicksand-Regular',
    color: 'white',
  },
  bigText: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 36,
    alignSelf: 'flex-end',
    color: 'white',
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: '#e1e1e155',
    borderRadius: 50,
  },
  mainText: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 18,
    color: 'white',
  },
  mainInfo: {
    height: '30%',
    backgroundColor: '#f2f2f222',
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 10,
  },
  mainInfoBig: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  additionInfo: {
    height: '35%',
    backgroundColor: '#f2f2f222',
    borderRadius: 10,
    marginVertical: 10,
    padding: 20,
  },
  updateTime: {
    alignSelf: 'flex-end',
    fontFamily: 'Quicksand-Light',
    fontSize: 14,
    color: 'white',
  },
});
