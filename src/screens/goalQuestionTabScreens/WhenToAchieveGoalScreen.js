import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import CheckCircle from '../../assets/images/CheckCircle';
import StepFour from '../../assets/images/StepFour.png';
import Calendar from '../../components/Calendars/PrimaryCalendar';

const WhenToAchieveGoalScreen = ({navigation}) => {
  const HEADING_GAP = 44;
  const HEADING_OFFSET = 25;
  const CALENDAR_OFFSET = 85;
  const CALENDAR_HEIGHT = '103%';
  const CALENDAR_ASPECT_RATIO = 297 / 303;
  const CALENDAR_MAGNIFICATION = 0.9;
  const BUTTON_OFFSET = 35;
  const CALENDAR_RADIUS = 50;

  const DAY_FONT_SIZE = 17;
  const DAY_FONT_WEIGHT = '100';
  const MONTH_FONT_SIZE = 22;
  const MONTH_FONT_WEIGHT = '400';
  const HEADER_FONT_SIZE = 16;

  return (
    <View style={{flex: 1.2}}>
      <View
        style={{
          aspectRatio: layout.imageAspectRatio.progressBar,
          height: layout.screenWidth.xxxSmall,
          alignSelf: 'center',
        }}>
        <Image
          style={{flex: 1, width: null, height: null}}
          source={StepFour}
          resizeMode="stretch"
        />
      </View>
      <View
        style={{
          flex: 0.1,
          justifyContent: 'center',
          padding: layout.padding.screenHorizontal,
        }}>
        <View style={{flexBasis: HEADING_OFFSET}} />
        <Text
          style={{
            flexBasis: HEADING_GAP,
            fontFamily: layout.fonts.nunito,
            color: colors.themeColors.primary,
            fontSize: layout.fontSizes.xxxLarge,
          }}>
          When?
        </Text>
        <Text
          style={{
            fontFamily: layout.fonts.nunito,
            color: colors.themeColors.pink,
            fontSize: layout.fontSizes.header,
          }}>
          {'When do you think you will\nhave achieved it?'}
        </Text>
      </View>
      <View style={{flexBasis: CALENDAR_OFFSET}} />

      <View style={{alignItems: 'center'}}>
        <View
          style={{
            aspectRatio: CALENDAR_ASPECT_RATIO,
            overflow: 'hidden',
            height: '65%',

            borderRadius: 50,
            backgroundColor: colors.themeColors.primary,
          }}>
          <Calendar />
        </View>
      </View>

      <View
        style={{
          flex: 0.2,
          alignItems: 'center',
          paddingTop: layout.padding.xxxLarge,
        }}>
        <View style={{flexBasis: BUTTON_OFFSET}} />
        <TouchableOpacity
          onPress={() => navigation.navigate('GoalAddedScreen')}>
          <CheckCircle />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WhenToAchieveGoalScreen;
