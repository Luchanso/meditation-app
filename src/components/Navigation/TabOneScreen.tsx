import * as React from 'react';
import styled from 'styled-components/native';
import {MeditationIcon} from '../MeditationIcon/MeditationIcon';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export default function TabOneScreen() {
  return (
    <Container>
      <Title>Hello world</Title>
      <MeditationIcon />
    </Container>
  );
}
