import React from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import layout from '../theme/layout';
import colors from '../theme/colors';
import DotIcon from '../components/SvgIcons/DotIcon';
import PinkButton from '../components/Buttons/PinkButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useEffect} from 'react';
const LeftArrow = require('../assets/images/ArrowLeft.png');
const GoalInfoScreen = ({navigation, route}) => {
  const title = route?.params?.title;
  const description = route?.params?.description;
  const imageUrl = route?.params?.imageUrl;
  const imageAspectRatio = route?.params?.imageAspectRatio;
  console.log(imageAspectRatio);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}
          activeOpacity={0.8}>
          <View
            style={{
              aspectRatio: 1,
              height: layout.heights.xxxshort,
              marginLeft: 30,
            }}>
            <Image
              style={{flex: 1, width: null, height: null}}
              resizeMode="stretch"
              source={LeftArrow}
            />
          </View>
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#FFFFFF',
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
      },
      headerBackTitle: <></>,
      headerTitle: <></>,
    });
  }, [navigation]);

  return (
    <View
      style={{
        paddingHorizontal: layout.padding.screenHorizontal,
        flex: 1,
        alignItems: 'flex-start',
      }}>
      <View
        style={{
          flex: 6,
          justifyContent: 'center',
          fontFamily: layout.fonts.nunito,
          color: colors.themeColors.primary,
        }}>
        <Text
          style={{
            fontFamily: layout.fonts.nunito,
            color: colors.themeColors.primary,
            fontSize: 19.5,
          }}>
          My Why
        </Text>
      </View>

      <View
        style={{
          flex: 11,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <View style={{height: 130, aspectRatio: imageAspectRatio}}>
          <Image
            source={imageUrl}
            style={{width: null, height: null, flex: 1}}
            resizeMode="stretch"
          />
        </View>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: layout.fonts.nunito,
            color: colors.themeColors.primary,
            fontSize: 20,
          }}>
          {title}
        </Text>
      </View>

      <View
        style={{
          flex: 17,
        }}>
        <Text
          style={{
            fontSize: 10,
            fontFamily: layout.fonts.nunito,
            color: colors.themeColors.transparent,
          }}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default GoalInfoScreen;
