import React, {useState} from 'react';
import {Dimensions, Text, View, TouchableOpacity, Alert} from 'react-native';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import DatePicker from 'react-native-date-picker';
import DayList from '../MultipleDaySelector/DayList';
import CheckCircle from '../../assets/images/CheckCircle';
import CustomTextInput from '../CustomTextInput';

const TaskTimeModal = ({
  onSubmit,
  initialTime = new Date(),
  initialDaysRepeat = [],
  initialTimes = 5,
}) => {
  const TOP_CLEARANCE_OFFSET = 90;

  const PINK_BAR_HEADING_GAP = 15;
  const PINK_BAR_WIDTH = 45;
  const PINK_BAR_RADIUS = 45;
  const PINK_BAR_HEIGHT = 4;

  const HEADER_CUSTOMTEXT_GAP = 50;
  const DATE_PICKER_OFFSET = 6;

  const MODAL_OFFSET = -40;
  const MODAL_RATIO = 320 / 400;
  const MODAL_WIDTH = '100%';
  const MODAL_RADIUS = 70;
  const MODAL_SHADOW_HEIGHT = 3;
  const WINDOWHEIGHT = Dimensions.get('window').height;
  const MODAL_HEIGHT = (WINDOWHEIGHT * 59) / 100;

  const PICKER_CONTAINER_WIDTH = '85%';
  const DATEPICKER_MAGNIFICATION = 1.1;
  const TEXT_GAP = 2;
  const SEPERATOR_WIDTH = '95%';
  const [error, setError] = React.useState(false);
  const [date, setDate] = useState(initialTime);
  const [repeatDays, setRepeatDays] = useState(initialDaysRepeat);
  const [name, setName] = React.useState('');
  const Separator = () => (
    <Text
      style={{
        position: 'absolute',
        bottom: 0,
        width: SEPERATOR_WIDTH,
        height: layout.heights.seperatorHeight,
        backgroundColor: colors.themeColors.seperatorColor,
      }}
    />
  );
  return (
    <View
      activeOpacity={1}
      style={{
        margin: -20,
        padding: 0,
        position: 'absolute',
        bottom: 0,
        height: MODAL_HEIGHT,
        right: 0,
        left: 0,
        alignItems: 'center',
        backgroundColor: colors.themeColors.primary,
        borderTopLeftRadius: MODAL_RADIUS,
        borderTopRightRadius: MODAL_RADIUS,
        shadowColor: colors.themeColors.shadow,
        shadowOffset: {height: MODAL_SHADOW_HEIGHT},
      }}>
      <View style={{flex: 7, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flexBasis: TOP_CLEARANCE_OFFSET}} />
        <View
          style={{
            width: PINK_BAR_WIDTH,
            borderRadius: PINK_BAR_RADIUS,
            margin: layout.padding.medium,
            backgroundColor: colors.themeColors.pink,
            height: PINK_BAR_HEIGHT,
            marginBottom: PINK_BAR_HEADING_GAP,
          }}
        />
        <Text
          style={{
            fontSize: layout.fontSizes.large,
            fontFamily: layout.fonts.nunito,
            color: colors.themeColors.pink,
          }}>
          Add task
        </Text>
        <View style={{flexBasis: HEADER_CUSTOMTEXT_GAP}} />
        <CustomTextInput
          textColor={colors.themeColors.pink}
          style={{
            color: colors.themeColors.pink,
            borderBottomWidth: 10,
          }}
          fontSize={layout.fontSizes.medium}
          gap={0}
          placeholder="Task Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View />
      <View style={{flex: DATE_PICKER_OFFSET}} />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          overflow: 'hidden',
          width: PICKER_CONTAINER_WIDTH,
          marginBottom: 20,
        }}>
        <Separator />
      </View>
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
        <Separator />
      </View>
      <View style={{flexBasis: DATE_PICKER_OFFSET}} />
      <View
        style={{
          flex: 9,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          overflow: 'hidden',
          width: PICKER_CONTAINER_WIDTH,
        }}>
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
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      />
      <View
        style={{
          flex: 6,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
          width: PICKER_CONTAINER_WIDTH,
        }}>
        {/* dateTimeObject passed */}
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => {
            if (repeatDays && repeatDays.length > 0 && name !== '') {
              let daysStringArray = [];
              repeatDays.forEach((e) => {
                if (e.isSelected === true) {
                  daysStringArray.push(e.text);
                }
              });
              let epochTime = date.getTime();
              onSubmit({name, epochTime, daysStringArray});
            } else {
              if (repeatDays.length <= 0) {
                Alert.alert(
                  'Days not selected',
                  'Please choose at least one day',
                );
              } else if (name === '') {
                Alert.alert(
                  'Task name is empty',
                  'Please provide a name for the task',
                );
              }
            }
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <CheckCircle />
          </View>
          <View
            style={{
              flexBasis: 10,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskTimeModal;
