import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
const AvacadoLogo = require('../assets/images/AvocadoLogo.png');
const GirlCouchImage = require('../assets/images/GirlSittingCouch3.png');
import CheckCircle from '../assets/images/CheckCircle';
import CustomTextInput from '../components/CustomTextInput';
import layout from '../theme/layout';
import colors from '../theme/colors';
import {addUser} from '../database/UserActions';

const FirstPageScreen = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState(false);
  const COUCH_IMAGE_HEIGHT = '57%';
  const LOGO_OFFSET = 26;
  const TEXT_GAP = 1;
  return (
    <KeyboardAvoidingView
      style={{flex: 1, alignItems: 'center'}}
      behavior="padding">
      <View style={{flex: 1.1, width: '100%'}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.themeColors.primary,
              width: '100%',
            }}>
            <View style={{flexBasis: LOGO_OFFSET}} />
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
          </View>
          <View
            style={{
              flex: 1.15,
              alignItems: 'center',
              backgroundColor: colors.themeColors.primary,
              width: '100%',
              borderBottomRightRadius: layout.backgroundBorderRadius,
              borderBottomLeftRadius: layout.backgroundBorderRadius,
            }}
          />
          <View style={{flex: 0.27}} />
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              zIndex: 1,
              height: COUCH_IMAGE_HEIGHT,
              aspectRatio: layout.imageAspectRatio.girlCouchImage,
            }}>
            <Image
              style={{flex: 1, height: null, width: null}}
              resizeMode="stretch"
              source={GirlCouchImage}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          paddingHorizontal: layout.padding.screenHorizontal,
        }}>
        <View style={{flex: 0.17}} />
        <Text
          style={{
            lineHeight: layout.defaultLineHeight,
            fontSize: layout.fontSizes.welcomeText,
            fontFamily: layout.fonts.nunito,
            color: colors.themeColors.primary,
          }}>
          {"Hi there! I'm Jade.\nWhat do you want me to\ncall you?"}
        </Text>
        <View style={{flex: 0.18}} />
        <CustomTextInput
          gap={TEXT_GAP}
          placeholder="What do you want me to call you?"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        {error && (
          <Text
            style={{
              lineHeight: layout.defaultLineHeight,
              fontSize: layout.fontSizes.welcomeText,
              fontFamily: layout.fonts.nunito,
              color: colors.themeColors.error,
            }}>
            Name cannot be empty
          </Text>
        )}
        <View style={{flex: 0.22}} />
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => {
            if (name && name !== '') {
              addUser({name: name});
              navigation.navigate('AddGoalScreen');
            } else {
              setError(true);
            }
          }}>
          <CheckCircle />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default FirstPageScreen;
