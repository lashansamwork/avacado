/*eslint-disable */
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Dimensions, 
  Modal
} from 'react-native';
// import Modal from 'react-native-modal';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import CheckCircle from '../../assets/images/CheckCircle';
import TaskItem from '../../components/TaskItem';

const SecondRoute = (onPress) => {
  const SAFEVIEW_OFFSET = 15;
  const HEADING_GAP = 44;
  const HEADING_OFFSET = 120;
  const MODAL_RATIO = 302 / 384;
  const DEVICE_WIDTH = Dimensions.get('screen').width;
  const DEVICE_HEIGHT = Dimensions.get('screen').height; 
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flexGrow: 1, borderWidth:1 }}>
      <View style={{   flexGrow: 1, height: '100%', marginTop: SAFEVIEW_OFFSET, }}>
        <View style={{ flex: 23, paddingHorizontal: layout.padding.screenHorizontal, }}>
          <View style={{ flex: 14, justifyContent: 'center' }}>
            <Text style={{ flexBasis: HEADING_GAP, fontFamily: layout.fonts.nunito, color: colors.themeColors.primary, fontSize: layout.fontSizes.xxxLarge, }}> How? </Text>
            <Text style={{ fontFamily: layout.fonts.nunito, color: colors.themeColors.pink, fontSize: layout.fontSizes.welcomeText, }}> How will you achieve this goal? </Text>
            <View style={{ flexBasis: HEADING_OFFSET }} />
          </View>
          <View style={{ flex: 16, alignItems: 'center' }}>
            <TaskItem style={{ position: 'absolute', top: 0 }} label="+Add Task/Habit" backgroundColor={colors.themeColors.pink} fontColor={colors.themeColors.primary} onPress={() => { setModalVisible(true) }} />
            {/* <TaskItem label="Stop Eating Out" backgroundColor={colors.themeColors.primary} fontColor={colors.themeColors.secondary} /> */}
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
      <Modal  style={{   }} transparent={true} visible={modalVisible} onBackdropPress={() => setModalVisible(false)} >
        <View style={{ flex: 1, backgroundColor: colors.themeColors.transparent, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flexBasis: 193 }}></View>

          <View style={{ alignItems: 'center', aspectRatio: MODAL_RATIO, width: '80.8%', backgroundColor: colors.themeColors.primary, borderRadius: 30, shadowColor: '#000', shadowOffset: { height: 3, }, }} >
            <Text style={{ fontSize: 20, fontFamily: layout.fonts.nunito, color: colors.themeColors.pink }}>Set a reminder</Text>
            <TouchableOpacity>

            </TouchableOpacity>
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

