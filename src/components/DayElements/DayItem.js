import React from 'react';
import {Text, View, FlatList} from 'react-native';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DayItem = ({text, isSelected, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View
        style={{
          borderRadius: layout.dayCircle.radius,
          height: layout.dayCircle.height,
          width: layout.dayCircle.width,
          backgroundColor: isSelected
            ? colors.themeColors.pink
            : colors.themeColors.primary,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: isSelected
              ? colors.themeColors.primary
              : colors.themeColors.pink,
            fontFamily: layout.fonts.nunito,
          }}>
          {text.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DayItem;
