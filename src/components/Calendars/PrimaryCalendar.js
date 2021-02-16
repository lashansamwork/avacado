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

const PrimaryCalendar = ({onSelect}) => {
  const MONTH_OFFSET = -10;
  const WEEK_OFFSET = -10;
  const DAYS_CONTAINER_OFFSET = -15;

  const CALENDAR_WIDTH = 320;
  const ARROW_GAP = 8;
  const ARROW_HEIGHT = 10;

  const HEADER_HEIGHT = 50;
  const HEADER_WIDTH = '80%';
  const HEADER_FONT_SIZE = 16;
  const MONTH_FONT_SIZE = 20;
  const MONTH_FONT_WEIGHT = '100';
  const WEEK_CONTAINER_GAP = 10;
  const DAY_FONT_SIZE = 17;
  const DAY_FONT_WEIGHT = '400';
  const DAY_CONTAINER_WIDTH = 19;
  const DAY_CONTAINER_HEIGHT = 20;

  const MARKED_DAY_OFFSET = 3;
  const MARKED_DAY_HEIGHT = 24;

  const renderArrow = (direction) => {
    if (direction === 'left') {
      return <LeftArrow style={{height: ARROW_HEIGHT}} arrowGap={ARROW_GAP} />;
    } else {
      return <RightArrow style={{height: ARROW_HEIGHT}} arrowGap={ARROW_GAP} />;
    }
  };
  const [selectedDay, setSelectedDay] = React.useState(new Date());
  const [marked, setMarked] = React.useState({
    '2020-02-15': {
      customStyles: {
        container: {
          top: -MARKED_DAY_OFFSET,
          backgroundColor: colors.themeColors.pink,
          height: MARKED_DAY_HEIGHT,
          aspectRatio: 1,
          paddingTop: layout.padding.xsmall,
        },
        text: {
          color: colors.themeColors.secondary,
        },
      },
    },
  });

  return (
    <View
      style={{
        paddingHorizontal: layout.padding.xxxLarge,
        paddingVertical: layout.padding.large,
        overflow: 'hidden',
      }}>
      <Calendar
        hideExtraDays={true}
        calendarWidth={CALENDAR_WIDTH}
        // current={selectedDay}
        onDayPress={(day) => {
          setMarked({
            [day.dateString]: {
              customStyles: {
                container: {
                  top: -MARKED_DAY_OFFSET,
                  backgroundColor: colors.themeColors.pink,
                  height: MARKED_DAY_HEIGHT,
                  aspectRatio: 1,
                  paddingTop: layout.padding.xsmall,
                },
                text: {
                  color: colors.themeColors.secondary,
                },
              },
            },
          });
          onSelect(day);
          setSelectedDay(day);
        }}
        theme={{
          'stylesheet.day.basic': {
            text: {
              color: 'white',
              marginTop: 0,
              fontSize: layout.fontSizes.mediumHigh,
              fontFamily: layout.fonts.Roboto,
              fontWeight: DAY_FONT_WEIGHT,
            },

            container: {
              alignSelf: 'stretch',
              alignItems: 'center',
            },
            base: {
              width: DAY_CONTAINER_WIDTH,
              height: DAY_CONTAINER_HEIGHT,
              alignItems: 'center',
            },
          },

          'stylesheet.calendar.main': {
            container: {
              paddingLeft: layout.padding.small,
              paddingRight: layout.padding.small,
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
              marginTop: WEEK_CONTAINER_GAP,
              marginBottom: layout.padding.small,
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
          },
          'stylesheet.calendar.header': {
            monthText: {
              margin: layout.padding.medium,
              color: colors.themeColors.secondary,
              fontFamily: layout.fonts.roboto,
              fontSize: MONTH_FONT_SIZE,
              fontWeight: MONTH_FONT_WEIGHT,
            },
            header: {
              fontWeight: MONTH_FONT_WEIGHT,
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
              height: HEADER_HEIGHT,
              paddingHorizontal: layout.padding.small,
              width: HEADER_WIDTH,
              top: MONTH_OFFSET,
            },
            week: {
              top: WEEK_OFFSET,
              paddingHorizontal: layout.padding.large,
              marginTop: layout.padding.small,
              marginBottom: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
            monthView: {},
          },
          selectedDayTextColor: colors.themeColors.secondary,
          monthTextColor: colors.themeColors.secondary,
          dayTextColor: colors.themeColors.secondary,
          textSectionTitleColor: colors.themeColors.pink,
          calendarBackground: colors.themeColors.primary,
          textDayFontSize: DAY_FONT_SIZE,
          textMonthFontSize: MONTH_FONT_SIZE,
          textDayHeaderFontSize: HEADER_FONT_SIZE,
          textDayFontFamily: layout.fonts.roboto,
          textDayHeaderFontFamily: layout.fonts.roboto,
          textDayFontWeight: DAY_FONT_WEIGHT,
          selectedDayBackgroundColor: colors.themeColors.pink,
          todayTextColor: colors.themeColors.secondary,
        }}
        renderArrow={renderArrow}
        minDate={'2020-12-30'}
        markedDates={marked}
        markingType={'custom'}
        enableSwipeMonths={true}
      />
    </View>
  );
};

export default PrimaryCalendar;
