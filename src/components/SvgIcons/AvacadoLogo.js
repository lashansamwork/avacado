import * as React from 'react';
import {Image, View} from 'react-native';
const Avaca = require('../../assets/images/Avaca.png');
import Svg, {Circle, G, Path, Defs, Pattern} from 'react-native-svg';

const AvacadoLogo = (props) => {
  return (
    <View
      style={{
        height: 25,
        aspectRatio: 1,
      }}>
      <Image
        style={{flex: 1, height: null, width: null}}
        resizeMode="stretch"
        source={Avaca}
      />
    </View>
    // <Svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   xmlnsXlink="http://www.w3.org/1999/xlink"
    //   width={25}
    //   height={25}
    //   viewBox="0 0 25 25">
    //   <Defs>
    //     <Pattern
    //       id="prefix__a"
    //       width={1}
    //       height={1}
    //       viewBox="1.478 0.152 17 24">
    //       <Image
    //         preserveAspectRatio="none"
    //         width={17}
    //         height={24}
    //         xlinkHref="data:image/png;base64,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"
    //       />
    //     </Pattern>
    //   </Defs>
    //   <G data-name="Group 835">
    //     <G data-name="Group 828">
    //       <Circle
    //         data-name="Ellipse 263"
    //         cx={12.5}
    //         cy={12.5}
    //         r={12.5}
    //         fill="#ebbdbd"
    //       />
    //     </G>
    //     <Path
    //       transform="translate(6 1)"
    //       fill="url(#prefix__a)"
    //       d="M0 0h17v24H0z"
    //     />
    //   </G>
    // </Svg>
  );
};

export default AvacadoLogo;
