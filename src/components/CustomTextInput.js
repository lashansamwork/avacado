import React from 'react';
import {TextInput, View} from 'react-native';
import layout from '../theme/layout';
import colors from '../theme/colors';

const CustomTextInput = (props) => {
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
          color: colors.themeColors.primary,
          fontSize: layout.fontSizes.small,
          marginBottom: props.gap,
        }}
        textContentType="nickname"
      />
    </View>
  );
};

export default CustomTextInput;
