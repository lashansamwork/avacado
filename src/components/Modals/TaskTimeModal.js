import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import DatePicker from 'react-native-date-picker';
import WheelPicker from 'react-native-wheely';
import DayList from '../MultipleDaySelector/DayList';
import CheckCircle from '../../assets/images/CheckCircle';

const TaskTimeModal = ({
  onSubmit,
  initialTime = new Date(),
  initialDaysRepeat = [],
  initialTimes = 5,
}) => {
  const MODAL_RATIO = 302 / 384;
  const MODAL_WIDTH = '80.8%';
  const MODAL_RADIUS = 30;
  const MODAL_SHADOW_HEIGHT = 3;
  const DATE_PICKER_OFFSET = 30;
  const PICKER_CONTAINER_WIDTH = '85%';
  const DATEPICKER_MAGNIFICATION = 1.1;
  const WHEEL_ITEM_HEIGHT = 18;
  const WHEELPICKER_HEIGHT = '48%';
  const SEPERATOR_WIDTH = '95%';
  const [error, setError] = React.useState(false);
  const [date, setDate] = useState(initialTime);
  const [repeatDays, setRepeatDays] = useState(initialDaysRepeat);

  return (
    <View
      activeOpacity={1}
      style={{
        alignSelf: 'center',
        alignItems: 'center',
        aspectRatio: MODAL_RATIO,
        width: MODAL_WIDTH,
        backgroundColor: colors.themeColors.primary,
        borderRadius: MODAL_RADIUS,
        shadowColor: colors.themeColors.shadow,
        shadowOffset: {height: MODAL_SHADOW_HEIGHT},
      }}>
      <View style={{flex: 7, justifyContent: 'flex-end'}}>
        <Text
          style={{
            fontSize: layout.fontSizes.welcomeText,
            fontFamily: layout.fonts.nunito,
            color: colors.themeColors.pink,
          }}>
          Set a reminder
        </Text>
      </View>
      <View style={{flexBasis: DATE_PICKER_OFFSET}} />
      <View
        style={{
          flex: 11,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
          width: PICKER_CONTAINER_WIDTH,
        }}>
        <View
          style={{
            flex: 0.8,
            transform: [{scale: DATEPICKER_MAGNIFICATION}],
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <DatePicker
            date={date}
            onDateChange={setDate}
            mode={'time'}
            textColor={colors.themeColors.pink}
          />
        </View>
      </View>
      <View style={{flexBasis: DATE_PICKER_OFFSET}} />
      <View
        style={{
          flex: 10,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          overflow: 'hidden',
          width: PICKER_CONTAINER_WIDTH,
        }}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            width: SEPERATOR_WIDTH,
            height: layout.heights.seperatorHeight,
            backgroundColor: colors.themeColors.seperatorColor,
          }}
        />
        <Text
          style={{
            fontSize: layout.fontSizes.medium,
            color: colors.themeColors.pink,
            fontFamily: layout.fonts.nunito,
          }}>
          Repeat every
        </Text>
        <View style={{flex: 0.5}}>
          {/* list of days */}
          <DayList
            initialSelect={repeatDays}
            onDaysSubmit={(days) => {
              setRepeatDays(days);
            }}
          />
        </View>
        <Text
          style={{
            position: 'absolute',
            bottom: 0,
            width: SEPERATOR_WIDTH,
            height: layout.heights.seperatorHeight,
            backgroundColor: colors.themeColors.seperatorColor,
          }}
        />
      </View>
      <View
        style={{
          flex: 12,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      />
      <View
        style={{
          flex: 11,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
          width: PICKER_CONTAINER_WIDTH,
        }}>
        {/* dateTimeObject passed */}
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => {
            if (repeatDays !== null) {
              let daysStringArray = [];
              repeatDays.forEach((e) => {
                if (e.isSelected === true) {
                  daysStringArray.push(e.text);
                }
              });
              let epochTime = date.getTime();
              onSubmit({epochTime, daysStringArray});
            } else {
              setError(true);
            }
          }}>
          {!error && (
            <View
              style={{
                flexBasis: 30,
              }}
            />
          )}
          {error && (
            <Text
              style={{
                alignSelf: 'center',
                lineHeight: layout.defaultLineHeight,
                fontSize: layout.fontSizes.welcomeText,
                fontFamily: layout.fonts.nunito,
                color: colors.themeColors.error,
              }}>
              Select the days to repeat
            </Text>
          )}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <CheckCircle />
          </View>
          <View
            style={{
              flexBasis: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskTimeModal;
