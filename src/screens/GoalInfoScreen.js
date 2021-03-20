import React from 'react';
import {View, Text, Image} from 'react-native';
import layout from '../theme/layout';
import colors from '../theme/colors';
import LeftArrow from '../components/NavBar/LeftArrow';
const GoalInfoScreen = ({navigation, route}) => {
  const title = route?.params?.title;
  const description = route?.params?.description;
  const imageUrl = route?.params?.imageUrl;
  const imageAspectRatio = route?.params?.imageAspectRatio;
  console.log(imageAspectRatio);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <LeftArrow onNavigation={() => navigation.pop()} />,
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
            fontSize: layout.fontSizes.xheader,
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
        <View
          style={{
            height: layout.autoImageSizes.large,
            aspectRatio: imageAspectRatio,
          }}>
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
            fontSize: layout.fontSizes.xheader,
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
            fontSize: layout.fontSizes.xsmall,
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
