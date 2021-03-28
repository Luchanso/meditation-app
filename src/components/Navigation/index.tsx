import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import NotFoundScreen from "./NotFoundScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import { linking } from "./LinkingConfiguration";

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
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
