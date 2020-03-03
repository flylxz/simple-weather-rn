import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {ForecastListItem} from './forecast-list-item';
import {Transformation} from '../services/weather-and-date-transformation';

export const ForecastCard = ({forecastWeather}) => {
  const {name, list} = forecastWeather;
  transform = new Transformation();
  const {getDate, getWeekday, setWeekdayTitle} = transform;
  // const title = new setWeekdayTitle(list.dt);

  return (
    <View style={styles.forecastCard}>
      <View style={styles.cityInfo}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.date}>{getDate(list[0].dt)}</Text>
      </View>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <View>
            <Text style={styles.date}>{getWeekday(item.dt)}</Text>
            <ForecastListItem props={item} />
          </View>
        )}
        keyExtractor={item => `${item.dt}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  forecastCard: {
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
    textAlign: 'center',
  },
});
