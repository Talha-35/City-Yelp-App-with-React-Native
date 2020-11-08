import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
import {CityList, RestaurantList, RestaurantDetail} from './pages';

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Cities" component={CityList} />
        <Stack.Screen name="Restaurants" component={RestaurantList} />
        <Stack.Screen name="Details" component={RestaurantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
