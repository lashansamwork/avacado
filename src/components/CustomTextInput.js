import React from 'react';
import {TextInput, View} from 'react-native';
import layout from '../theme/layout';
import colors from '../theme/colors';

const CustomTextInput = (props) => {
  const TEXT_COLOR =
    props.textColor === undefined
      ? colors.themeColors.primary
      : props.textColor;
  return (
    <View
      style={{
        ...props.style,
        borderBottomWidth: 1,
        borderBottomColor: colors.themeColors.primary,
      }}>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={colors.themeColors.grey}
        onChangeText={props.onChangeText}
        value={props.value}
        style={{
          color: TEXT_COLOR,
          fontSize: layout.fontSizes.small,
          marginBottom: props.gap,
        }}
        textContentType="nickname"
      />
    </View>
  );
};

export default CustomTextInput;
