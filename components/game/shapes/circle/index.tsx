import React from 'react'
import styled from "@emotion/styled";
import { palette } from "@styles/theme";

type CircleProps = {
  isCircleClicked: boolean;
  size: number;
};

const Circle = styled.div<CircleProps>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-color: ${palette.green};
  position: absolute;
  top: 10rem;
  left: 10rem;
  border-radius: 50%;
  opacity: ${({ isCircleClicked }) => (isCircleClicked ? 1 : 0.3)};
`;


export default Circle;
