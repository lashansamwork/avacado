import React from 'react';
import {TextInput, View} from 'react-native';
import layout from '../theme/layout';
import colors from '../theme/colors';

const CustomTextInput = (props) => {
  const TEXT_COLOR =
    props.textColor === undefined
      ? colors.themeColors.primary
      : props.textColor;
  const FONT_SIZE =
    props.textColor === undefined ? layout.fontSizes.small : props.fontSize;
  const PLACEHOLDER_COLOR =
    props.textColor === undefined ? colors.themeColors.grey : props.textColor;
  return (
    <View
      style={{
        ...props.style,
        borderBottomWidth: 1,
        borderBottomColor: colors.themeColors.primary,
      }}>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={PLACEHOLDER_COLOR}
        onChangeText={props.onChangeText}
        value={props.value}
        style={{
          color: TEXT_COLOR,
          fontSize: FONT_SIZE,
          marginBottom: props.gap,
        }}
        textContentType="nickname"
      />
    </View>
  );
};

export default CustomTextInput;
