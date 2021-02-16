import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import layout from '../theme/layout';

const TaskItem = ({onPress, style, fontColor, label, backgroundColor}) => {
  const BORDER_RADIUS = 20;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...style,
        height: 70,
        width: '100%',
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        borderRadius: BORDER_RADIUS,
        marginBottom: 5,
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
    </TouchableOpacity>
  );
};

export default TaskItem;
