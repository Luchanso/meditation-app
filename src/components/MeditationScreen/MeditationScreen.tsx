import { createStackNavigator } from "@react-navigation/stack";
import { useSpring, animated, useSpringRef } from "react-spring/native";
import React, { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { BreathCircle } from "../BreathCircle/BreathCircle";
import { PlaceholderCircle } from "../PlaceholderCircle/PlaceholderCircle";

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
  align-items: center;
`;

const BottomSide = styled.View`
  margin-bottom: 8px;
`;

const AlignBlock = styled.View`
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;
  height: 300px;
`;

const Placeholder = styled.View`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
`;

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
