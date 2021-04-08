import React, {memo} from 'react';
import {animated} from 'react-spring/native';
import {BreathCircle} from '../BreathCircle/BreathCircle';
import {PlaceholderCircle} from '../PlaceholderCircle/PlaceholderCircle';
import {
  AlignBlock,
  BottomSide,
  BreathControl,
  Container,
  Placeholder,
} from './styled';
import {useBreathControl} from './useBreathControl';

export const MeditationScreen = memo(function MeditationScreen() {
  const {onToggle, style} = useBreathControl();

  return (
    <Container onTouchEnd={onToggle} testID="breath-container">
      <BreathControl>
        <AlignBlock>
          <Placeholder>
            <PlaceholderCircle />
          </Placeholder>
          <animated.View style={style}>
            <BreathCircle />
          </animated.View>
        </AlignBlock>
      </BreathControl>
      <BottomSide />
    </Container>
  );
});
