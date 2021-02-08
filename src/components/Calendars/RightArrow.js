import React from 'react';
import {View, Image} from 'react-native';
const RightArrowImage = require('../../assets/images/RightArrow.png');

const RightArrow = (props) => {
  const ASPECT_RATIO = 25 / 37;
  return (
    <View
      style={{
        ...props.style,
        aspectRatio: ASPECT_RATIO,
        top: 0,
        left: -props.arrowGap,
      }}>
      <Image
        source={RightArrowImage}
        style={{height: null, width: null, flex: 1}}
      />
    </View>
  );
};

export default RightArrow;
