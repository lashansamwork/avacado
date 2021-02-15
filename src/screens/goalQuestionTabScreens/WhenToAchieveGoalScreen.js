import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import CheckCircle from '../../assets/images/CheckCircle';
import StepFour from '../../assets/images/StepFour.png';
import Calendar from '../../components/Calendars/PrimaryCalendar';

const WhenToAchieveGoalScreen = (onPress) => {
  const HEADING_OFFSET = 18;
  const CALENDAR_ASPECT_RATIO = 297 / 303;
  const CALENDAR_BORDER_RADIUS = 50;
  const BUTTON_OFFSET = 35;
  const TEXT_GAP = -18;
  const [selectedDate, setSelectedDate] = React.useState(null);
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
          flex: 5,
          justifyContent: 'center',
          paddingHorizontal: layout.padding.screenHorizontal,
        }}>
        <View style={{flexBasis: HEADING_OFFSET}} />
        <Text
          style={{
            flex: 1,
            fontFamily: layout.fonts.nunito,
            color: colors.themeColors.primary,
            fontSize: layout.fontSizes.xxxLarge,
          }}>
          When?
        </Text>
        <Text
          style={{
            top: TEXT_GAP,
            flex: 1,
            fontFamily: layout.fonts.nunito,
            color: colors.themeColors.pink,
            fontSize: layout.fontSizes.header,
          }}>
          {'When do you think you will\nhave achieved it?'}
        </Text>
      </View>
      <View style={{flex: 10, alignItems: 'center'}}>
        <View
          style={{
            aspectRatio: CALENDAR_ASPECT_RATIO,
            overflow: 'hidden',
            height: '100%',
            borderRadius: CALENDAR_BORDER_RADIUS,
            backgroundColor: colors.themeColors.primary,
          }}>
          <Calendar
            onSelect={() => {
              setSelectedDate();
            }}
          />
        </View>
      </View>

      <View
        style={{
          flex: 8,
          alignItems: 'center',
          paddingTop: layout.padding.xxxLarge,
        }}>
        <View style={{flexBasis: BUTTON_OFFSET}} />
        <TouchableOpacity onPress={() => onPress(selectedDate)}>
          <CheckCircle />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WhenToAchieveGoalScreen;
