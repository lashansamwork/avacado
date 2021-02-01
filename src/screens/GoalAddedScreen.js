import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
} from 'react-native';
const yogaGirl = require('../assets/images/yogaGirl.png');
const readingGirl = require('../assets/images/readingGirl.png');
const thinkingGirl = require('../assets/images/thinkingGirl.png');
const moneyGirl = require('../assets/images/moneyGirl.png');
import layout from '../theme/layout';
import colors from '../theme/colors';
const CongratzHand = require('../assets/images/congratzHand.png');

const GoalAddedScreen = () => {
  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
        <View style={{flex: 2}} />
        <View style={{aspectRatio: 998 / 928, height: layout.heights.medium}}>
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
            Congrats Layan!
          </Text>
          <Text
            style={{
              flexShrink: 1,
              textAlign: 'center',
              fontFamily: 'Nunito-SemiBold',
              fontSize: layout.fontSizes.large,
              color: colors.themeColors.primary,
            }}>
            You added a new goal that will change your life journey!
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GoalAddedScreen;
