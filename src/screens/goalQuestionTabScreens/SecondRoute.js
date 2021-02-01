import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import CheckCircle from '../../assets/images/CheckCircle';
import TaskItem from '../../components/TaskItem';

const SecondRoute = (onPress) => {
  const SAFEVIEW_OFFSET = 15;
  const HEADING_GAP = 44;
  const HEADING_OFFSET = 120;

  return (
    <SafeAreaView style={{flexGrow: 1, marginTop: SAFEVIEW_OFFSET}}>
      <View
        style={{flex: 23, paddingHorizontal: layout.padding.screenHorizontal}}>
        <View style={{flex: 14, justifyContent: 'center'}}>
          <Text
            style={{
              flexBasis: HEADING_GAP,
              fontFamily: layout.fonts.nunito,
              color: colors.themeColors.primary,
              fontSize: layout.fontSizes.xxxLarge,
            }}>
            How?
          </Text>
          <Text
            style={{
              fontFamily: layout.fonts.nunito,
              color: colors.themeColors.pink,
              fontSize: layout.fontSizes.welcomeText,
            }}
          />
          How will you achieve this goal?
          <View style={{flexBasis: HEADING_OFFSET}} />
        </View>

        <View style={{flex: 16, alignItems: 'center'}}>
          <TaskItem
            style={{position: 'absolute', top: 0}}
            label="+Add Task/Habit"
            backgroundColor={colors.themeColors.pink}
            fontColor={colors.themeColors.primary}
          />

          <TaskItem
            label="Stop Eating Out"
            backgroundColor={colors.themeColors.primary}
            fontColor={colors.themeColors.secondary}
          />
        </View>
      </View>

      <View
        style={{flex: 9, paddingHorizontal: layout.padding.screenHorizontal}}>
        <View style={{flex: 26}}>
          <TouchableOpacity
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <CheckCircle />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SecondRoute;
