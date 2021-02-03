import React from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
const AvacadoLogo = require('../assets/images/AvocadoLogo.png');
const GirlCouchImage = require('../assets/images/GirlSittingCouch3.png');
import layout from '../theme/layout';
const TinyLine = require('../assets/images/TinyLine.png');
import colors from '../theme/colors';

const WelcomeScreen = ({navigation}) => {
  const IMAGE_TOP_OFFSET = -20;
  const TINY_IMAGE_HEIGHT = 30;
  const LOGO_OFFSET = 175;
  const IMAGE_CUTOFF_VALUES = {
    left: -60,
    top: -20,
  };

  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: colors.themeColors.primary,
      }}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => navigation.navigate('FirstPageScreen')}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              height: layout.heights.mediumLow,
              aspectRatio: layout.imageAspectRatio.avacadoLogo,
            }}>
            <Image
              style={{flex: 1, height: null, width: null}}
              resizeMode="stretch"
              source={AvacadoLogo}
            />
          </View>
          <View style={{flexBasis: LOGO_OFFSET}} />
        </View>
        <View style={{flex: 1}}>
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
              top: IMAGE_TOP_OFFSET,
            }}>
            <Text
              style={{
                fontFamily: 'Nunito-SemiBold',
                fontSize: layout.fontSizes.welcomeText,
                color: '#EBBDBD',
              }}>
              Welcome Back Layan!
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                paddingTop: layout.padding.small,
              }}>
              <View style={{width: '34%'}} />
              <View
                style={{
                  aspectRatio: layout.imageAspectRatio.tinyLine,
                  height: TINY_IMAGE_HEIGHT,
                }}>
                <Image
                  style={{flex: 1, height: null, width: null}}
                  source={TinyLine}
                  resizeMode="stretch"
                />
              </View>
            </View>
          </View>
          <View
            style={{
              height: '120%',
              aspectRatio: layout.imageAspectRatio.girlCouchImage,
            }}>
            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                ...IMAGE_CUTOFF_VALUES,
              }}
              resizeMode="stretch"
              source={GirlCouchImage}
            />
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
