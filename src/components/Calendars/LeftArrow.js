import React from 'react';
import {View, Image} from 'react-native';
const LeftArrowImage = require('../../assets/images/LeftArrow.png');

const LeftArrow = (props) => {
  const ASPECT_RATIO = 25 / 36;
  return (
    <View
      style={{
        ...props.style,
        aspectRatio: ASPECT_RATIO,
        top: 0,
        left: props.arrowGap,
      }}>
      <Image
        source={LeftArrowImage}
        style={{width: null, height: null, flex: 1}}
      />
    </View>
  );
};

export default LeftArrow;
