import * as React from 'react';
import Svg, {Circle, G} from 'react-native-svg';

const MyGoalsIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 25 25"
      {...props}>
      <G data-name="Group 827" transform="translate(3 -653.027)">
        <Circle
          data-name="Ellipse 263"
          cx={12.5}
          cy={12.5}
          r={12.5}
          transform="translate(-3 653.027)"
          fill="#ebbdbd"
        />
        <G
          data-name="Ellipse 264"
          transform="translate(2 658.027)"
          fill="none"
          stroke="#1e535a"
          strokeWidth={2}>
          <Circle cx={7.5} cy={7.5} r={7.5} stroke="none" />
          <Circle cx={7.5} cy={7.5} r={6.5} />
        </G>
        <G
          data-name="Ellipse 265"
          transform="translate(7 663.027)"
          fill="#1e535a"
          stroke="#1e535a">
          <Circle cx={2.5} cy={2.5} r={2.5} stroke="none" />
          <Circle cx={2.5} cy={2.5} r={2} fill="none" />
        </G>
      </G>
    </Svg>
  );
};

export default MyGoalsIcon;
