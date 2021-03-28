import React, { memo } from "react";
import { Svg, Path } from "react-native-svg";

type Props = {
  color?: string;
};

export const MeditationIcon = memo(function MeditationIcon({ color }: Props) {
  const stroke = color || "#111111";
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
});
