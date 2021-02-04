import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const DotIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={12}
      viewBox="0 0 24 12"
      {...props}>
      <G data-name="Icon / More / Rounded">
        <Path fill="none" d="M0 12V0h24v12z" />
        <Path
          data-name="Path 2038"
          d="M16.382 6.746a1.732 1.732 0 101.73-1.645 1.694 1.694 0 00-1.73 1.645zm-5.191 0a1.732 1.732 0 101.73-1.645 1.694 1.694 0 00-1.73 1.645zm-1.73 0a1.694 1.694 0 00-1.73-1.645 1.647 1.647 0 100 3.291 1.694 1.694 0 001.73-1.646z"
          fill="#ebbdbd"
          fillRule="evenodd"
        />
      </G>
    </Svg>
  );
};

export default DotIcon;
