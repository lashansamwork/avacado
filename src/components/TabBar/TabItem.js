import React from 'react';
import {Text, View} from 'react-native';
import colors from '../../theme/colors';
import layout from '../../theme/layout';
const TabItem = ({name, icon}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View>{icon()}</View>
      <Text
        style={{
          color: colors.themeColors.secondary,
          fontFamily: layout.fonts.nunito,
          fontSize: layout.fontSizes.xsmall,
          paddingTop: layout.padding.small,
        }}>
        {name}
      </Text>
    </View>
  );
};

export default TabItem;
