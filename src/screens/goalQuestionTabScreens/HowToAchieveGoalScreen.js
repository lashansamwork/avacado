import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  Modal,
} from 'react-native';
// import Modal from 'react-native-modal';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import CheckCircle from '../../assets/images/CheckCircle';
import TaskItem from '../../components/TaskItem';
import TaskTimeModal from '../../components/Modals/TaskTimeModal';
import TaskNameModal from '../../components/Modals/TaskNameModal';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
];
const BORDER_RADIUS = 20;
const Item = ({title}) => (
  <TaskItem
    backgroundColor={colors.themeColors.primary}
    label={title}
    fontColor={colors.themeColors.secondary}
  />
);

const HowToAchieveGoalScreen = (onPress) => {
  const renderItem = ({item, index}) => <Item title={item.name} />;

  const SAFEVIEW_OFFSET = 15;
  const HEADING_GAP = 44;
  const HEADING_OFFSET = 120;
  const MODAL_OFFSET = 200;

  const [modalVisible, setModalVisible] = useState(false);
  const [modalIndex, setModalIndex] = React.useState(0);
  const [tasks, setTasks] = React.useState([]);
  const [task, setTask] = React.useState({name: null, dataTimes: []});
  const CustomModal = () => {
    if (modalIndex === 0) {
      return (
        <TaskNameModal
          onSubmit={(taskName) => {
            setTask({
              ...task,
              name: taskName,
            });
            setModalIndex(1);
          }}
        />
      );
    }
    return (
      <TaskTimeModal
        onSubmit={(dateTimeObject) => {
          //todo conevert correct way;
          setTask({
            ...task,
            dataTimes: dateTimeObject,
          });
          setTasks([
            ...tasks,
            {
              ...task,
              dataTimes: dateTimeObject,
            },
          ]);
          setModalIndex(0);
          setModalVisible(false);
          console.log(task);
          console.log(tasks);
        }}
      />
    );
  };

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
              style={{marginBottom: 6}}
              label="+Add Task/Habit"
              backgroundColor={colors.themeColors.pink}
              fontColor={colors.themeColors.primary}
              onPress={() => {
                setModalVisible(true);
              }}
            />

            <FlatList
              style={{width: '100%'}}
              data={tasks}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
        <View
          style={{
            flex: 13,
            paddingHorizontal: layout.padding.screenHorizontal,
          }}>
          <View style={{flex: 26}}>
            <TouchableOpacity
              onPress={() => {
                onPress(tasks);
              }}
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
          <View
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            transparent={true}>
            <View style={{flexBasis: MODAL_OFFSET}} />

            <View>
              <CustomModal />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default HowToAchieveGoalScreen;
