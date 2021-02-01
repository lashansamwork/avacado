import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import CheckCircle from '../../assets/images/CheckCircle';
import StepFour from '../../assets/images/stepFour.png';
import {CalendarList} from 'react-native-calendars';

const FourthRoute = ({navigation}) => {
  const HEADING_GAP = 44;
  const HEADING_OFFSET = 28;
  const CALENDAR_OFFSET = 40;
  const BUTTON_OFFSET = 35;

  return (
    <View style={{borderWidth: 1, borderColor: 'red', flex: 1}}>
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
      <View style={{flex: 0.2, justifyContent: 'center'}}>
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
            fontSize: layout.fontSizes.welcomeText,
          }}>
          {'When do you think you will\nhave achieved it?'}
        </Text>
      </View>
      <View style={{flexBasis: CALENDAR_OFFSET}} />
      <View
        style={{
          borderWidth: 2,
          borderColor: 'red',
          flex: 0.45,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        <CalendarList
          hideExtraDays={true}
          hideArrows={false}
          disableArrowRight={false}
          disableArrowLeft={false}
          enableSwipeMonths={true}
          scrollEnabled={false}
          calendarWidth={300}
          calendarHeight={500}
          pagingEnabled={true}
          horizontal={true}
          style={{height: '100%', width: 300, borderRadius: 50}}
          theme={{
            arrowColor: 'orange',
            selectedDayBackgroundColor: colors.themeColors.pink,
            selectedDayTextColor: colors.themeColors.secondary,
            monthTextColor: colors.themeColors.secondary,
            dayTextColor: colors.themeColors.secondary,
            textSectionTitleColor: colors.themeColors.pink,
            calendarBackground: colors.themeColors.primary,
            textDayFontSize: 15,
            textMonthFontSize: 22,
            textDayHeaderFontSize: 15,
            textDayFontFamily: layout.fonts.roboto,
            textDayHeaderFontFamily: layout.fonts.roboto,
          }}
        />
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

export default FourthRoute;
