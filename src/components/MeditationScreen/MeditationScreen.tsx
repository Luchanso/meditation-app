import { createStackNavigator } from "@react-navigation/stack";
import { useSpring, animated, useSpringRef } from "react-spring/native";
import React, { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import { BreathCircle } from "../BreathCircle/BreathCircle";
import { PlaceholderCircle } from "../PlaceholderCircle/PlaceholderCircle";
import { AlignBlock, BottomSide, BreathControl, Container, Placeholder } from "./styled";

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

const breathConfig = {
  loop: { reverse: true },
  from: { width: 50 },
  to: { width: 300 },
  config: {
    duration: 5000,
  },
};

const resetConfig = {
  to: { width: 50 },
};

export const MeditationScreen = function MeditationScreen() {
  const [pause, setPause] = useState(false);
  const onTouchDisabled = useRef(false);
  const breathRef = useSpringRef();
  const resetRef = useSpringRef();
  const [breath] = useSpring(() => ({
    ...breathConfig,
    ref: breathRef,
  }));
  const [reset] = useSpring(() => ({
    ...resetConfig,
    ref: resetRef,
  }));

  useEffect(() => {
    breathRef.start();
  }, []);

  function handleEnableTouch() {
    onTouchDisabled.current = false;
  }

  function onTouch() {
    if (onTouchDisabled.current) {
      return;
    }
    if (pause) {
      breathRef.start(breathConfig);
    } else {
      onTouchDisabled.current = true;
      breathRef.stop();
      resetRef.start({
        ...resetConfig,
        from: { width: breath.width.get() },
        onResolve: handleEnableTouch,
      });
    }
    setPause(!pause);
  }

  return (
    <Container onTouchEnd={onTouch}>
      <BreathControl>
        <AlignBlock>
          <Placeholder>
            <PlaceholderCircle />
          </Placeholder>
          <animated.View style={pause ? reset : breath}>
            <BreathCircle />
          </animated.View>
        </AlignBlock>
      </BreathControl>
      <BottomSide>
        <Text>
          Breath:{" "}
          <animated.Text>{breath.width.to((x) => x.toFixed(0))}</animated.Text>
          px
        </Text>
        <Text>
          Reset:{" "}
          {<animated.Text>{reset.width.to((x) => x.toFixed(0))}</animated.Text>}
          px
        </Text>
      </BottomSide>
    </Container>
  );
};
