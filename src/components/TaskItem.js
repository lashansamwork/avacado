import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import layout from '../theme/layout';
import ClockIcon from '../components/SvgIcons/ClockIcon';

const TaskItem = ({onPress, style, fontColor, label, backgroundColor}) => {
  const BORDER_RADIUS = 20;
  const CLOCK_HEIGHT = 16;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 70,
        width: '100%',
        backgroundColor: backgroundColor,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: BORDER_RADIUS,
        marginBottom: 5,
        ...style,
      }}>
      <Text
        style={{
          fontFamily: layout.fonts.nunito,
          fontSize: layout.fontSizes.medium,
          color: fontColor,
          paddingLeft: layout.padding.xxxLarge,
        }}>
        {label}
      </Text>
      <ClockIcon />
    </TouchableOpacity>
  );
};

export default TaskItem;
