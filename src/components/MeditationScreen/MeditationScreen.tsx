import { createStackNavigator } from "@react-navigation/stack";
import React, { memo } from "react";
import { Button } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const BreathControl = styled.View`
  flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
`;

const BottomSide = styled.View`
    margin-bottom: 8px;
`;

function noop() {}

const TabOneStack = createStackNavigator();

export function MeditationScreenNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="MeditationScreen"
        component={MeditationScreen}
        options={{
          headerTitle: "Meditation",
        }}
      />
    </TabOneStack.Navigator>
  );
}

export const MeditationScreen = memo(function MeditationScreen() {
  return (
    <Container>
      <BreathControl>
        <Button title="Stop" onPress={noop} />
      </BreathControl>
      <BottomSide>
        <Button title="Stop" onPress={noop} />
      </BottomSide>
    </Container>
  );
});
