import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CurrentWeather} from '../screens/current-weather';
import {ForecastWeather} from '../screens/forecast-weather';

const Tab = createBottomTabNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Weather" component={CurrentWeather} />
        <Tab.Screen name="Forecast" component={ForecastWeather} lazy={true} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
// lazy={true}
