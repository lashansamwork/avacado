import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const PlusInsideCircle = () => {
  return (
    <Svg width="93" height="93" viewBox="0 0 93 93">
      <G id="Group_763" data-name="Group 763" transform="translate(-301 -710)">
        <G transform="matrix(1, 0, 0, 1, 301, 710)" filter="url(#bg)">
          <Path
            id="bg-2"
            data-name="bg"
            d="M43.5,0A43.5,43.5,0,1,1,0,43.5,43.5,43.5,0,0,1,43.5,0Z"
            transform="translate(3 2)"
            fill="#ebbdbd"
          />
        </G>
        <G id="plus" transform="translate(336.625 744.625)">
          <Path
            id="Shape"
            d="M7,0V21.75"
            transform="translate(3.875)"
            fill="none"
            stroke="#1e535a"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            fill-rule="evenodd"
          />
          <Path
            id="Shape-2"
            data-name="Shape"
            d="M0,7H21.75"
            transform="translate(0 3.875)"
            fill="none"
            stroke="#1e535a"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            fill-rule="evenodd"
          />
        </G>
      </G>
    </Svg>
  );
};

export default PlusInsideCircle;
