import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const BreathControl = styled.View`
  flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
`;

export const BottomSide = styled.View`
  margin-bottom: 8px;
`;

export const AlignBlock = styled.View`
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;
  height: 300px;
`;

export const Placeholder = styled.View`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
`;
