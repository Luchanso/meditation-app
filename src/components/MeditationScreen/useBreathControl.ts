import { useCallback, useEffect, useRef, useState } from "react";
import { useSpring, animated, useSpringRef } from "react-spring/native";

const MIN_WIDTH = 50;
const MAX_WIDTH = 300;

const breathConfig = {
  loop: { reverse: true },
  from: { width: MIN_WIDTH },
  to: { width: MAX_WIDTH },
  config: {
    duration: 5000,
  },
};

const resetConfig = {
  to: { width: MIN_WIDTH },
};
export function useBreathControl() {
  const [pause, setPause] = useState(false);
  const onToggleDisabled = useRef(false);
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

  const handleEnableTouch = useCallback(function handleEnableTouch() {
    onToggleDisabled.current = false;
  }, []);

  const onToggle = useCallback(function onToggle() {
    if (onToggleDisabled.current) {
      return;
    }
    if (pause) {
      breathRef.start(breathConfig);
    } else {
      onToggleDisabled.current = true;
      breathRef.stop();
      resetRef.start({
        ...resetConfig,
        from: { width: breath.width.get() },
        onResolve: handleEnableTouch,
      });
    }
    setPause(!pause);
  }, [pause, breath]);

  const style = pause ? reset : breath;

  return { onToggle, style };
}
