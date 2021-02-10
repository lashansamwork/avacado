import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Modal,
} from 'react-native';
// import Modal from 'react-native-modal';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import CheckCircle from '../../assets/images/CheckCircle';
import TaskItem from '../../components/TaskItem';
import TaskTimeModal from '../../components/Modals/TaskTimeModal';
import TaskNameModal from '../../components/Modals/TaskNameModal';

const HowToAchieveGoalScreen = (onPress, goBack, {navigation}) => {
  const SAFEVIEW_OFFSET = 15;
  const HEADING_GAP = 44;
  const HEADING_OFFSET = 120;
  const MODAL_OFFSET = 200;

  const [modalVisible, setModalVisible] = useState(false);
  const [modalIndex, setModalIndex] = React.useState(0);

  const CustomModal = () => {
    if (modalIndex === 0) {
      return <TaskNameModal onPress={() => setModalIndex(1)} />;
    }
    return <TaskTimeModal />;
  };

  const goingBack = true;
  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
        goBack()();
      }),
    [navigation, goingBack, goBack],
  );

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
              How?
            </Text>
            <Text
              style={{
                fontFamily: layout.fonts.nunito,
                color: colors.themeColors.pink,
                fontSize: layout.fontSizes.header,
              }}>
              How will you achieve this goal?
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
          <TouchableOpacity
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            transparent={true}
            onPressOut={() => {
              setModalIndex(0);
              setModalVisible(false);
            }}>
            <View style={{flexBasis: MODAL_OFFSET}} />
            <TouchableWithoutFeedback touchSoundDisabled>
              <View>
                <CustomModal />
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
export default HowToAchieveGoalScreen;
