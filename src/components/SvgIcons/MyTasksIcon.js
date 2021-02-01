import * as React from 'react';
import Svg, {Path, Circle, G} from 'react-native-svg';

const MyTasksIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 25 25"
      {...props}>
      <G data-name="Group 826" transform="translate(3 -653.027)">
        <Circle
          data-name="Ellipse 263"
          cx={12.5}
          cy={12.5}
          r={12.5}
          transform="translate(-3 653.027)"
          fill="#ebbdbd"
        />
        <Path
          data-name="Path 2086"
          d="M12.079 659.507l3.029 3.028-7.572 7.572H4.508v-3.029z"
          fill="none"
          stroke="#1e535a"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </G>
    </Svg>
  );
};

export default MyTasksIcon;
