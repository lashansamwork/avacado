import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Modal} from 'react-native';
// import Modal from 'react-native-modal';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import CheckCircle from '../../assets/images/CheckCircle';
import TaskItem from '../../components/TaskItem';
import DatePicker from 'react-native-date-picker';
import WheelPicker from 'react-native-wheely';

import DayList from '../../components/MultipleDaySelector/DayList';

const HowToAchieveGoalScreen = (onPress) => {
  const SAFEVIEW_OFFSET = 15;
  const HEADING_GAP = 44;
  const HEADING_OFFSET = 120;
  const MODAL_RATIO = 302 / 384;
  const MODAL_OFFSET = 200;
  const MODAL_WIDTH = '80.8%';
  const MODAL_RADIUS = 30;
  const MODAL_SHADOW_HEIGHT = 3;
  const DATE_PICKER_OFFSET = 30;
  const PICKER_CONTAINER_WIDTH = '85%';
  const DATEPICKER_MAGNIFICATION = 1.1;
  const WHEEL_ITEM_HEIGHT = 18;
  const WHEELPICKER_HEIGHT = '48%';
  const SEPERATOR_WIDTH = '95%';

  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [times, setTimes] = useState(5);

  return (
    <View style={{flexGrow: 1}}>
      <View style={{flexGrow: 1, height: '100%', marginTop: SAFEVIEW_OFFSET}}>
        <View
          style={{
            flex: 23,
            paddingHorizontal: layout.padding.screenHorizontal,
          }}>
          <View style={{flex: 14, justifyContent: 'center'}}>
            <Text
              style={{
                flexBasis: HEADING_GAP,
                fontFamily: layout.fonts.nunito,
                color: colors.themeColors.primary,
                fontSize: layout.fontSizes.xxxLarge,
              }}>
              {' '}
              How?{' '}
            </Text>
            <Text
              style={{
                fontFamily: layout.fonts.nunito,
                color: colors.themeColors.pink,
                fontSize: layout.fontSizes.welcomeText,
              }}>
              {' '}
              How will you achieve this goal?{' '}
            </Text>
            <View style={{flexBasis: HEADING_OFFSET}} />
          </View>
          <View style={{flex: 16, alignItems: 'center'}}>
            <TaskItem
              style={{position: 'absolute', top: 0}}
              label="+Add Task/Habit"
              backgroundColor={colors.themeColors.pink}
              fontColor={colors.themeColors.primary}
              onPress={() => {
                setModalVisible(true);
              }}
            />
          </View>
        </View>
        <View
          style={{flex: 9, paddingHorizontal: layout.padding.screenHorizontal}}>
          <View style={{flex: 26}}>
            <TouchableOpacity
              onPress={onPress}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <CheckCircle />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.themeColors.transparent,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{flexBasis: MODAL_OFFSET}} />

          <View
            style={{
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
                <DayList />
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
              }}>
              <Text
                style={{
                  paddingTop: layout.padding.small,
                  fontSize: layout.fontSizes.medium,
                  color: colors.themeColors.pink,
                  fontFamily: layout.fonts.nunito,
                }}>
                Times
              </Text>

              <View
                style={{
                  height: WHEELPICKER_HEIGHT,
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}>
                <WheelPicker
                  selectedIndicatorStyle={{
                    backgroundColor: colors.themeColors.primary,
                    color: 'red',
                  }}
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                  selected={times}
                  onChange={(times) => setTimes(times)}
                  itemHeight={WHEEL_ITEM_HEIGHT}
                  containerStyle={{
                    backgroundColor: colors.themeColors.primary,
                    overflow: 'hidden',
                  }}
                  itemTextStyle={{
                    fontFamily: layout.fonts.nunito,
                    color: colors.themeColors.pink,
                  }}
                  itemStyle={{backgroundColor: colors.themeColors.primary}}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HowToAchieveGoalScreen;
