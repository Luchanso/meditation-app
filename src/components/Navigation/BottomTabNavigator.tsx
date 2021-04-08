import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MeditationIcon} from '../MeditationIcon/MeditationIcon';
import { MeditationScreen } from '../MeditationScreen/MeditationScreen';
import TabOneScreen from './TabOneScreen';
import TabTwoScreen from './TabTwoScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Meditation">
      <BottomTab.Screen
        name="Meditation"
        component={MeditationScreenNavigator}
        options={{
          tabBarIcon: ({color}) => <MeditationIcon color={color} />,
          tabBarTestID: 'meditation',
        }}
      />
      <BottomTab.Screen
        name="Progress"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({color}) => <MeditationIcon color={color} />,
          tabBarTestID: 'progress',
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({color}) => <MeditationIcon color={color} />,
          tabBarTestID: 'settings',
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{headerTitle: 'First tab'}}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{headerTitle: 'Tab Two Title'}}
      />
    </TabTwoStack.Navigator>
  );
}

const TabMeditationStack = createStackNavigator();

export function MeditationScreenNavigator() {
  return (
    <TabMeditationStack.Navigator>
      <TabMeditationStack.Screen
        name="MeditationScreen"
        component={MeditationScreen}
        options={{
          headerTitle: 'Meditation',
        }}
      />
    </TabMeditationStack.Navigator>
  );
};