import * as React from 'react';
import Svg, {Path, Circle, G} from 'react-native-svg';

const TickIcon = (props) => {
  return (
    <Svg
      data-name="Icon / Check Circle / Rounded"
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      {...props}>
      <Path fill="none" d="M0 0h20v20H0z" />
      <Path
        data-name="Path 2034"
        d="M7.74 13.44l-2.88-2.88a.773.773 0 010-1.12.773.773 0 011.12 0l2.32 2.32 5.52-5.52a.792.792 0 111.12 1.12l-6.08 6.08a.773.773 0 01-1.12 0zM9.9 2a8 8 0 108 8 8.024 8.024 0 00-8-8z"
        fill="#fff"
      />
    </Svg>
  );
};

export default TickIcon;
