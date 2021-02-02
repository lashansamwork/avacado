import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function PlusIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18.951}
      height={18.951}
      viewBox="0 0 18.951 18.951"
      {...props}>
      <G
        fill="none"
        stroke="#1e535a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}>
        <Path d="M9.475 1v16.951" />
        <Path data-name="Shape" d="M1 9.475h16.951" />
      </G>
    </Svg>
  );
}

export default PlusIcon;
