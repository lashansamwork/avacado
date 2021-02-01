import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import layout from '../theme/layout';

const TaskItem = (props) => {
  const BORDER_RADIUS = 20;
  return (
    <TouchableOpacity
      style={{
        ...props.style,
        height: '22.2%',
        width: '100%',
        backgroundColor: props.backgroundColor,
        justifyContent: 'center',
        borderRadius: BORDER_RADIUS,,
      }}>
      <Text
        style={{
          fontFamily: layout.fonts.nunito,
          fontSize: layout.fontSizes.medium,
          color: props.fontColor,
          paddingLeft: layout.padding.xxxLarge,
        }} >
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
