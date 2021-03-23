import React, {useEffect} from 'react';
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
import {getUser} from '../database/UserActions';

const GoalAddedScreen = ({navigation}) => {
  const ASPECT_RATIO = 998 / 928;
  const IMAGE_OFFSET = 202;
  const LETTER_OFFSET = 128;
  const [username, setUsername] = React.useState('');

  useEffect(() => {
    getUser().then((userArray) => {
      if (userArray?.[0]) {
        const user = userArray[0];
        setUsername(user.name);
      }
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity
        style={{flex: 1, alignItems: 'center'}}
        onPress={() => navigation.navigate('Home')}>
        <View style={{flexBasis: IMAGE_OFFSET}} />
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
              fontSize: layout.fontSizes.xxLarge,
            }}>
            Congrats {username}!
          </Text>
          <Text
            style={{
              flexShrink: 1,
              textAlign: 'center',
              fontFamily: layout.fonts.nunito,
              fontSize: layout.fontSizes.medium1,
              color: colors.themeColors.primary,
            }}>
            You added a new goal that will change your life journey!
          </Text>
        </View>
        <View style={{flexBasis: LETTER_OFFSET}} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GoalAddedScreen;
