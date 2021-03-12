import React, {useState} from 'react';
import {Text, TouchableOpacity, View, FlatList, Alert} from 'react-native';
import Modal from 'react-native-modal';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import CheckCircle from '../../assets/images/CheckCircle';
import TaskItem from '../../components/TaskItem';
import TaskTimeModal from '../../components/Modals/TaskTimeModal';

const BORDER_RADIUS = 20;

//Task Item sent here
const Item = ({title}) => (
  <TaskItem
    backgroundColor={colors.themeColors.primary}
    label={title} // check flatlist, pulls from STATE : tasks
    fontColor={colors.themeColors.secondary}
  />
);

const HowToAchieveGoalScreen = (onPress, oldTasks) => {
  const renderItem = ({item, index}) => <Item title={item.name} />; // pulls task item
  const SAFEVIEW_OFFSET = 15;
  const HEADING_GAP = 44;
  const HEADING_OFFSET = 120;
  const MODAL_OFFSET = 200;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalIndex, setModalIndex] = React.useState(0);
  const [tasks, setTasks] = React.useState(oldTasks);
  const [task, setTask] = React.useState({name: null});
  const CustomModal = () => {
    return (
      <TaskTimeModal
        onSubmit={({name, epochTime, daysStringArray}) => {
          let repeatDays = daysStringArray;
          //todo conevert correct way;
          setTask({
            ...task,
            name: name,
            epochTime: epochTime,
            daysToRepeat: repeatDays,
          });
          setTasks([
            ...tasks,
            {
              ...task,
              name: name,
              epochTime: epochTime,
              daysToRepeat: repeatDays,
            },
          ]);
          setModalVisible(false);
        }}
      />
    );
  };

  return (
    <View style={{flexGrow: 1}}>
      <View
        style={{
          flexGrow: 1,
          height: '100%',
          marginTop: SAFEVIEW_OFFSET,
        }}>
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
              renderItem={renderItem} // fires render
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
        <View
          style={{
            flex: 13,
            paddingHorizontal: layout.padding.screenHorizontal,
          }}>
          <View style={{flex: 5}}>
            <TouchableOpacity
              onPress={() => {
                if (tasks !== undefined && tasks.length !== 0) {
                  onPress(tasks);
                } else {
                  Alert.alert(
                    'There are no tasks',
                    'You should provide at least one task helping to achieve your goal',
                    {cancelable: false},
                  );
                }
              }}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <CheckCircle />
              {/* submit button  */}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        isVisible={modalVisible}
        avoidKeyboard={true}
        onBackdropPress={() => setModalVisible(false)}>
        <CustomModal />
      </Modal>
    </View>
  );
};
export default HowToAchieveGoalScreen;
