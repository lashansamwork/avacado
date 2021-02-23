import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import layout from '../../theme/layout';
const LeftArrowImage = require('../../assets/images/ArrowLeft.png');

const LeftArrow = ({onNavigation}) => {
  return (
    <TouchableOpacity onPress={onNavigation} activeOpacity={0.8}>
      <View
        style={{
          aspectRatio: 1,
          height: layout.heights.xxxshort,
          marginLeft: 30,
        }}>
        <Image
          style={{flex: 1, width: null, height: null}}
          resizeMode="stretch"
          source={LeftArrowImage}
        />
      </View>
    </TouchableOpacity>
  );
};

export default LeftArrow;
