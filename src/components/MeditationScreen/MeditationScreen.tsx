import { createStackNavigator } from "@react-navigation/stack";
import { animated } from "react-spring/native";
import React, { memo } from "react";
import { BreathCircle } from "../BreathCircle/BreathCircle";
import { PlaceholderCircle } from "../PlaceholderCircle/PlaceholderCircle";
import { AlignBlock, BottomSide, BreathControl, Container, Placeholder } from "./styled";
import { useBreathControl } from "./useBreathControl";

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
  const { onToggle, style } = useBreathControl();

  return (
    <Container onTouchEnd={ onToggle }>
      <BreathControl>
        <AlignBlock>
          <Placeholder>
            <PlaceholderCircle />
          </Placeholder>
          <animated.View style={ style }>
            <BreathCircle />
          </animated.View>
        </AlignBlock>
      </BreathControl>
      <BottomSide />
    </Container>
  );
});
