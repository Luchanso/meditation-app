import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import {linking} from './LinkingConfiguration';
import NotFoundScreen from './NotFoundScreen';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{title: 'Oops!'}}
      />
    </Stack.Navigator>
  );
}

export function Navigation() {
  return (
    <NavigationContainer linking={linking}>
      <RootNavigator />
    </NavigationContainer>
  );
}
