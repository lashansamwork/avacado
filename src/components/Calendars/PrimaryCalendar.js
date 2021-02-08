import React from 'react';
import {View} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import calendarConfiguration from '../../theme/calendarConfigurations';
LocaleConfig.locales.en = calendarConfiguration;
LocaleConfig.defaultLocale = 'en';
import colors from '../../theme/colors';
import layout from '../../theme/layout';
import LeftArrow from '../Calendars/LeftArrow';
import RightArrow from '../Calendars/RightArrow';
const PrimaryCalendar = (props) => {
  const MONTH_OFFSET = -15;
  const WEEK_OFFSET = -10;
  const DAYS_CONTAINER_OFFSET = -15;

  const ARROW_GAP = 8;
  const DAY_FONT_SIZE = 17;
  const DAY_FONT_WEIGHT = '100';
  const MONTH_FONT_SIZE = 20;
  const MONTH_FONT_WEIGHT = '100';
  const HEADER_FONT_SIZE = 16;

  const renderArrow = (direction) => {
    if (direction === 'left') {
      return <LeftArrow style={{height: 10}} arrowGap={ARROW_GAP} />;
    } else {
      return <RightArrow style={{height: 10}} arrowGap={ARROW_GAP} />;
    }
  };

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 12,
        paddingBottom: 10,
        overflow: 'hidden',
      }}>
      <Calendar
        hideExtraDays={true}
        calendarWidth={320}
        theme={{
          'stylesheet.day.basic': {
            text: {
              color: 'white',
              marginTop: 0,
              fontSize: 15,
              fontFamily: layout.fonts.Roboto,
              fontWeight: '600',
            },

            container: {
              alignSelf: 'stretch',
              alignItems: 'center',
            },
            base: {
              width: 19,
              height: 20,
              alignItems: 'center',
            },
          },

          'stylesheet.calendar.main': {
            container: {
              paddingLeft: 5,
              paddingRight: 5,
            },
            dayContainer: {
              top: DAYS_CONTAINER_OFFSET,
              flex: 1,
              alignItems: 'center',
            },
            emptyDayContainer: {
              flex: 1,
            },
            monthView: {},
            week: {
              top: 0,
              marginTop: 10,
              marginBottom: 5,
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
          },
          'stylesheet.calendar.header': {
            monthText: {
              margin: 5,
              color: 'white',
              fontFamily: layout.fonts.roboto,
              fontSize: MONTH_FONT_SIZE,
              fontWeight: MONTH_FONT_WEIGHT,
            },
            header: {
              alignSelf: 'center',
              backgroundColor: colors.themeColors.primary,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 0,
              marginBottom: 0,
              paddingBottom: 0,
              paddingTop: 0,
              padding: 0,
              margin: 0,
              flexDirection: 'row',
              height: 50,
              paddingHorizontal: 5,
              width: '80%',
              top: MONTH_OFFSET,
            },
            week: {
              top: WEEK_OFFSET,
              paddingHorizontal: 10,
              marginTop: 5,
              marginBottom: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
            monthView: {},
          },
          arrowColor: 'orange',
          selectedDayTextColor: colors.themeColors.secondary,
          monthTextColor: 'white',
          dayTextColor: 'white',
          textSectionTitleColor: colors.themeColors.pink,
          calendarBackground: colors.themeColors.primary,
          textDayFontSize: DAY_FONT_SIZE,
          textMonthFontSize: MONTH_FONT_SIZE,
          textDayHeaderFontSize: HEADER_FONT_SIZE,
          textDayFontFamily: layout.fonts.roboto,
          textDayHeaderFontFamily: layout.fonts.roboto,
          textDayFontWeight: DAY_FONT_WEIGHT,
          textMonthFontWeight: MONTH_FONT_WEIGHT,
          selectedDayBackgroundColor: colors.themeColors.pink,
        }}
        renderArrow={renderArrow}
        // Initially visible month. Default = Date()
        current={'2012-03-01'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2012-05-10'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2012-05-30'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
        // renderHeader={(test) => {
        //   console.log(
        //     '🚀 ~ file: WhenToAchieveGoalScreen.js ~ line 73 ~ WhenToAchieveGoalScreen ~ test',
        //     test,
        //   );
        // }}
      />
    </View>
    // <View>
    //   <Calendar
    //     hideExtraDays={true}
    //     hideArrows={false}
    //     disableArrowRight={false}
    //     disableArrowLeft={false}
    //     enableSwipeMonths={true}
    //     scrollEnabled={false}
    //     calendarWidth={300}
    //     calendarHeight={500}
    //     pagingEnabled={true}
    //     horizontal={true}
    //     style={{
    //       transform: [{scale: CALENDAR_MAGNIFICATION}],
    //       borderRadius: CALENDAR_RADIUS,
    //       height: CALENDAR_HEIGHT,
    //       aspectRatio: CALENDAR_ASPECT_RATIO,
    //       overflow: 'hidden',
    //     }}
    //     theme={{
    //       arrowColor: 'orange',
    //       selectedDayTextColor: colors.themeColors.secondary,
    //       monthTextColor: colors.themeColors.secondary,
    //       dayTextColor: colors.themeColors.secondary,
    //       textSectionTitleColor: colors.themeColors.pink,
    //       calendarBackground: colors.themeColors.primary,
    //       textDayFontSize: DAY_FONT_SIZE,
    //       textMonthFontSize: MONTH_FONT_SIZE,
    //       textDayHeaderFontSize: HEADER_FONT_SIZE,
    //       textDayFontFamily: layout.fonts.roboto,
    //       textDayHeaderFontFamily: layout.fonts.roboto,
    //       textDayFontWeight: DAY_FONT_WEIGHT,
    //       textMonthFontWeight: MONTH_FONT_WEIGHT,
    //       selectedDayBackgroundColor: colors.themeColors.pink,
    //       todayTextColor: colors.themeColors.secondary,
    //     }}
    //     markingType={'custom'}
    //     markedDates={{
    //       '2021-02-02': {
    //         customStyles: {
    //           container: {
    //             backgroundColor: colors.themeColors.pink,
    //           },
    //           text: {
    //             color: 'black',
    //             fontWeight: 'bold',
    //           },
    //         },
    //       },
    //     }}
    //   />
    // </View>
  );
};

export default PrimaryCalendar;
