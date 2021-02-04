/*eslint-disable */
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Modal,
  FlatList
} from 'react-native';
// import Modal from 'react-native-modal';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import CheckCircle from '../../assets/images/CheckCircle';
import TaskItem from '../../components/TaskItem';
import DatePicker from 'react-native-date-picker';
import WheelPicker from 'react-native-wheely';



const Day = (props) => {
  let FONT_COLOR = props.isSelected ? colors.themeColors.pink : colors.themeColors.lightGreen;
  let VISIBILITY = props.isSelected ? 1 : 0;
  return (
    <TouchableOpacity onPress={props.onPress} style={{
      flexShrink: 1, alignItems: 'center', justifyContent: 'center',
      paddingHorizontal: layout.padding.medium,
    }} >
      <Text style={{ color: FONT_COLOR }}>{props.text}</Text>
      <View style={{
        backgroundColor: colors.themeColors.pink, aspectRatio: 1, height: 3, borderRadius: 90,
        opacity: VISIBILITY
      }} />
    </TouchableOpacity>
  );
}

const DayList = () => {
  const DAYS = [
    { text: 'SUN', isSelected: false },
    { text: 'MON', isSelected: false },
    { text: 'TUE', isSelected: false },
    { text: 'WED', isSelected: false },
    { text: 'THU', isSelected: false },
    { text: 'FRI', isSelected: false },
    { text: 'SAT', isSelected: false },
  ];
  const [days, setDays] = useState(DAYS);
  const onPress = (item) => {
    const newDaysArray = days.map((element) => {
      if (element.text === item.text) {
        return { text: element.text, isSelected: !item.isSelected }
      } else {
        return { ...element }
      }
    });
    console.log('newDaysArray', newDaysArray);
    setDays(newDaysArray);
  }
  const renderItem = ({ item }) => {
    console.log('item at renderitem', item);
    return (<Day onPress={() => onPress(item)} isSelected={item.isSelected} text={item.text} />);
  }
  return (
    <FlatList
      renderItem={renderItem}
      data={days}
      keyExtractor={(element, index) => `${index}`}
      horizontal
    />
  );
}

const SecondRoute = (onPress) => {
  const SAFEVIEW_OFFSET = 15;
  const HEADING_GAP = 44;
  const HEADING_OFFSET = 120;
  const MODAL_RATIO = 302 / 384;
  const DEVICE_WIDTH = Dimensions.get('screen').width;
  const DEVICE_HEIGHT = Dimensions.get('screen').height;
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date())

  let daysInWeekFlagArray = []
  for (let i = 0; i < 7; i++) daysInWeekFlagArray[i] = true;
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [sunday, setSunday] = useState(false);
  //const [daysInWeekFlagArray, setDaysInWeekFlagArray]
  const [selected, setSelected] = useState('Berlin');

  return (
    <View style={{ flexGrow: 1, borderWidth: 1 }}>
      <View style={{ flexGrow: 1, height: '100%', marginTop: SAFEVIEW_OFFSET, }}>
        <View style={{ flex: 23, paddingHorizontal: layout.padding.screenHorizontal, }}>
          <View style={{ flex: 14, justifyContent: 'center' }}>
            <Text style={{ flexBasis: HEADING_GAP, fontFamily: layout.fonts.nunito, color: colors.themeColors.primary, fontSize: layout.fontSizes.xxxLarge, }}> How? </Text>
            <Text style={{ fontFamily: layout.fonts.nunito, color: colors.themeColors.pink, fontSize: layout.fontSizes.welcomeText, }}> How will you achieve this goal? </Text>
            <View style={{ flexBasis: HEADING_OFFSET }} />
          </View>
          <View style={{ flex: 16, alignItems: 'center' }}>
            <TaskItem style={{ position: 'absolute', top: 0 }} label="+Add Task/Habit" backgroundColor={colors.themeColors.pink} fontColor={colors.themeColors.primary} onPress={() => { setModalVisible(true) }} />
            {/* <TaskItem label="Stop Eating Out" backgroundColor={ colors.themeColors.primary } fontColor={colors.themeColors.secondary} /> */}
          </View>
        </View>
        <View
          style={{ flex: 9, paddingHorizontal: layout.padding.screenHorizontal }}>
          <View style={{ flex: 26 }}>
            <TouchableOpacity onPress={onPress} style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', }}>
              <CheckCircle />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Modal style={{}} transparent={true} visible={modalVisible} onBackdropPress={() => setModalVisible(false)} >
        <View style={{ flex: 1, backgroundColor: colors.themeColors.transparent, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flexBasis: 193 }}></View>

          <View style={{ alignItems: 'center', aspectRatio: MODAL_RATIO, width: '80.8%', backgroundColor: colors.themeColors.primary, borderRadius: 30, shadowColor: '#000', shadowOffset: { height: 3, }, }} >

            <View style={{ flex: 1, justifyContent: 'center' }} >
              <Text style={{ fontSize: 20, fontFamily: layout.fonts.nunito, color: colors.themeColors.pink }}>Set a reminder</Text>
            </View>

            <View style={{ flex: 1, overflow: 'hidden', alignItems: 'center', justifyContent: 'center', width: '85%' }}>
              <View style={{ transform: [{ scale: 1.1 }], flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <DatePicker date={date} onDateChange={setDate} mode={'time'} textColor={colors.themeColors.pink} />
              </View>
            </View>

            <View style={{ marginVertical: layout.padding.small, width: '70%', height: layout.heights.seperatorHeight, backgroundColor: 'black' }} />

            <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'space-between', overflow: 'hidden', }}>
              <Text style={{ fontSize: layout.fontSizes.small, color: colors.themeColors.pink, fontFamily: layout.fonts.nunito }}>Repeat every</Text>
              <View style={{ flexBasis: 15 }}></View>
              <DayList />
            </View>

            <View style={{ marginVertical: layout.padding.small, width: '70%', height: layout.heights.seperatorHeight, backgroundColor: 'black' }} />

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
              <Text style={{ fontSize: layout.fontSizes.small, color: colors.themeColors.pink, fontFamily: layout.fonts.nunito }}>Times</Text>
              <View style={{ height: '40%', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <WheelPicker
                  selectedIndicatorStyle={{ backgroundColor: colors.themeColors.primary, color: 'red' }}
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                  selected={selected}
                  onChange={(city) => setSelected(city)}
                  itemHeight={15}
                  containerStyle={{ backgroundColor: colors.themeColors.primary, overflow: 'hidden' }}
                  itemTextStyle={{ fontFamily: layout.fonts.nunito, color: colors.themeColors.secondary, color: colors.themeColors.pink }}
                  itemStyle={{ backgroundColor: colors.themeColors.primary }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>




    </View>
  );
};
const styles = StyleSheet.create({
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default SecondRoute;