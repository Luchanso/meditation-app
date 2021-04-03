import React from "react";
import { Svg, Circle, Defs, LinearGradient, Stop } from "react-native-svg";

export const PlaceholderCircle = function PlaceholderCircle() {
  // console.log(props.radius)
  return (
    <Svg viewBox="0 0 100 100">
      <Circle cx="50" cy="50" r="49" stroke="url(#paint0_linear)" stroke-width="2" />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="80.5"
          y1="5.5"
          x2="18.5"
          y2="97.5"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#6C38FF" />
          <Stop offset="1" stopColor="#54C9E2" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
