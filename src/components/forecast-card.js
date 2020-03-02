import React from 'react';
import {StyleSheet, View, Image, Text, FlatList} from 'react-native';
import {ForecastListItem} from './forecast-list-item';

export const ForecastCard = ({forecastWeather}) => {
  const {name, list} = forecastWeather;

  return (
    <View style={styles.forecastCard}>
      <Text>{name}</Text>
      <FlatList
        data={list}
        renderItem={({item}) => <ForecastListItem props={item} />}
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
});
