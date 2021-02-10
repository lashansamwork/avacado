import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import layout from '../theme/layout';
import colors from '../theme/colors';
const CongratzHand = require('../assets/images/CongratzHand.png');

const GoalAddedScreen = () => {
  const ASPECT_RATIO = 998 / 928;

  let name = 'Layan';

  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
        <View style={{flexBasis: 202}} />
        <View style={{aspectRatio: ASPECT_RATIO, height: '25.1%'}}>
          <Image
            style={{flex: 1, width: null, height: null}}
            source={CongratzHand}
            resizeMode="stretch"
          />
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: 'center',
            alignItems: 'center',
            width: layout.screenWidth.medium,
          }}>
          <Text
            style={{
              flexShrink: 1,
              textAlign: 'center',
              fontFamily: 'Nunito-SemiBold',
              color: colors.themeColors.pink,
              fontSize: layout.fontSizes.xxxLarge,
            }}>
            Congrats {name}!
          </Text>
          <Text
            style={{
              flexShrink: 1,
              textAlign: 'center',
              fontFamily: layout.fonts.nunito,
              fontSize: layout.fontSizes.header,
              color: colors.themeColors.primary,
            }}>
            You added a new goal that will change your life journey!
          </Text>
        </View>
        <View style={{flexBasis: 128}} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GoalAddedScreen;
