import React from 'react';
import Svg, {Rect} from 'react-native-svg';

const BLACK_KEY_OFFSETS = [1, 2, 4, 5, 6]
const BLACK_KEY_SHIFTS = {
    1: -10,
    2: 10,
    4: -10,
    5: 0,
    6: 10
}

const WhiteKey = ({ offset }) => (
    <Rect
      y={offset * 100}
      width="500"
      height="100"
      stroke="black"
      strokeWidth="1"
      fill="white"
    />
);

const BlackKey = ({ offset }) => (
    <Rect
      y={offset * 100 - 30 + BLACK_KEY_SHIFTS[offset%7]}
      width="300"
      height="60"
      stroke="black"
      strokeWidth="1"
      fill="black"
    />
)

export default () => (
  // TODO draw a piano
  <Svg height="100%" width="100%" viewBox="-270 0 760 1400">
    {Array(14).fill().map((_, i) => <WhiteKey offset={i} key={i} />)}
    {BLACK_KEY_OFFSETS.map(x => <BlackKey offset={x} key={x} />)}
    {BLACK_KEY_OFFSETS.map(x => <BlackKey offset={x+7} key={x+7} />)}
  </Svg>
);
