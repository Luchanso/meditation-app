import React from "react";
import { Svg, Circle, Defs, LinearGradient, Stop } from "react-native-svg";

export const BreathCircle = function BreathCircle() {
  // console.log(props.radius)
  return (
    <Svg viewBox="0 0 100 100">
      <Circle cx="50" cy="50" r="50" fill="url(#paint0_linear)" />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="80.5"
          y1="5.5"
          x2="18.5"
          y2="97.5"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#4709F7" />
          <Stop offset="1" stopColor="#09D3FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
