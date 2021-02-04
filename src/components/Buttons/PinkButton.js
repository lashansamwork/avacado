import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import layout from '../../theme/layout';
import colors from '../../theme/colors';

const PinkButton = ({onPress, text}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.themeColors.pink,
        paddingVertical: layout.padding.medium,
        paddingHorizontal: layout.padding.large,
        borderRadius: layout.buttonRadius,
      }}>
      <Text
        style={{
          fontSize: layout.fontSizes.xsmall,
          fontFamily: layout.fonts.nunito,
          color: colors.themeColors.primary,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default PinkButton;
