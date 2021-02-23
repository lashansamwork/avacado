import React from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
const AvacadoLogo = require('../assets/images/AvocadoLogo.png');
import layout from '../theme/layout';
import colors from '../theme/colors';
import CloseIcon from '../components/SvgIcons/CloseIcon';

const AboutScreen = ({navigation}) => {
  const LOGO_ASPECT_RATIO = 658 / 506;
  const CLOSE_ICON_OPACITY = 0.8;
  const FOOTER_OFFSET = 15;
  const FONT_SIZE = layout.fontSizes.xheader;
  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: colors.themeColors.primary,
      }}>
      <StatusBar barStyle="light-content" />
      <View style={{flex: 1, width: layout.screenWidth.narrow}}>
        <TouchableOpacity
          onPress={() => navigation.goBack('Home')}
          activeOpacity={CLOSE_ICON_OPACITY}>
          <CloseIcon
            style={{flexShrink: 1, paddingTop: layout.padding.large}}
          />
        </TouchableOpacity>
        <View
          style={{
            alignSelf: 'center',
            height: layout.heights.mediumLow,
            aspectRatio: LOGO_ASPECT_RATIO,
          }}>
          <Image
            style={{flex: 1, height: null, width: null}}
            resizeMode="stretch"
            source={AvacadoLogo}
          />
        </View>
        <View style={{padding: layout.padding.xxxLarge}} />
        <Text
          style={{
            flex: 0.3,
            fontSize: FONT_SIZE,
            fontFamily: 'Nunito-SemiBold',
            color: colors.themeColors.pink,
            padding: layout.padding.medium,
          }}>
          Contact me
        </Text>
        <Text
          style={{
            flex: 0.3,
            fontSize: FONT_SIZE,
            fontFamily: 'Nunito-SemiBold',
            color: colors.themeColors.pink,
            padding: layout.padding.medium,
          }}>
          How it works?
        </Text>
        <Text
          style={{
            flex: 0.3,
            fontSize: FONT_SIZE,
            fontFamily: 'Nunito-SemiBold',
            color: colors.themeColors.pink,
            padding: layout.padding.medium,
          }}>
          Rate App
        </Text>
        <Text
          style={{
            flex: 0.3,
            fontSize: FONT_SIZE,
            fontFamily: 'Nunito-SemiBold',
            color: colors.themeColors.pink,
            padding: layout.padding.medium,
          }}>
          @AvocaDooApp on Instagram
        </Text>
        <Text
          style={{
            flex: 0.3,
            fontSize: FONT_SIZE,
            fontFamily: 'Nunito-SemiBold',
            color: colors.themeColors.pink,
            padding: layout.padding.medium,
          }}>
          @AvocaDooApp on Twitter
        </Text>
        <View
          style={{flex: 2, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: layout.fontSizes.xsmall,
              fontFamily: 'Nunito-SemiBold',
              color: colors.themeColors.pink,
            }}>
            Version 00
          </Text>
        </View>
        <View style={{flexBasis: FOOTER_OFFSET}} />
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;
