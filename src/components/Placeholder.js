import React from 'react';
import Svg, {Circle} from 'react-native-svg';

export default () => (
  // TODO draw a piano
  <Svg height="100%" width="100%" viewBox="0 0 100 100">
    <Circle
      cx="50"
      cy="50"
      r="45"
      stroke="blue"
      strokeWidth="2.5"
      fill="green"
    />
  </Svg>
);
