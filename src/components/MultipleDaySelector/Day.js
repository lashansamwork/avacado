import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import colors from '../../theme/colors';
import layout from '../../theme/layout';

const Day = (props) => {
  let FONT_COLOR = props.isSelected
    ? colors.themeColors.pink
    : colors.themeColors.lightGreen;
  let VISIBILITY = props.isSelected ? 1 : 0;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        flexShrink: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: layout.padding.xsmall,
      }}>
      <Text style={{color: FONT_COLOR}}>{props.text}</Text>
      <View
        style={{
          backgroundColor: colors.themeColors.pink,
          aspectRatio: 1,
          height: 4,
          borderRadius: 90,
          opacity: VISIBILITY,
        }}
      />
    </TouchableOpacity>
  );
};

export default Day;
