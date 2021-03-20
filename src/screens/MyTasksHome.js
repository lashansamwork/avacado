import React, {useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modal';
import layout from '../theme/layout';
import colors from '../theme/colors';
import DaysList from '../components/DayElements/DaysList';
import TasksList from '../components/TasksElemets/TasksList';
import {
  getGoals,
  updateTask,
  deleteTask,
  addNewTask,
  setAlarmsTasks,
} from '../database/GoalActions';
import {useEffect} from 'react';
import TaskNameModal from '../components/Modals/TaskNameModal';
import TaskTimeModalEdit from '../components/Modals/TaskTimeModalEdit';
const LeftArrow = require('../assets/images/ArrowLeft.png');
const MODAL_OFFSET = 200;

const MyTasksHome = ({navigation, route}) => {
  const [tasks, setTasks] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [isVisibleEditModal, setIsVisibleEditModal] = useState(false);
  const [modalIndex, setModalIndex] = React.useState(0);
  const [selectedDay, setSelectedDay] = React.useState({text: 'Sun'});
  const [selectedItem, setSelectedItem] = useState(null);
  const selectedGoal = route?.params?.goal;
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      updateGoalsState();
    });
    return unsubscribe;
  }, []);

  React.useLayoutEffect(() => {
    if (selectedGoal) {
      navigation.setOptions({
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}
            activeOpacity={0.8}>
            <View
              style={{
                aspectRatio: 1,
                height: layout.heights.xxxshort,
                marginLeft: 30,
              }}>
              <Image
                style={{flex: 1, width: null, height: null}}
                resizeMode="stretch"
                source={LeftArrow}
              />
            </View>
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: '#FFFFFF',
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
        },
        headerBackTitle: <></>,
        headerTitle: <></>,
      });
    }
  }, [navigation]);

  const updateGoalsState = () => {
    const selectedGoal = route?.params?.goal;

    getGoals(selectedGoal?.id).then((realmArr) => {
      const goals = realmArr.map((goal) => goal);
      const arraysOfTasks = goals.map((goal) => [
        ...goal.tasks.map((task) => {
          return {goalId: goal.id, goalCategory: goal.category, ...task};
        }),
      ]);

      const flatten = [].concat.apply([], arraysOfTasks);

      const tasksArray = flatten.map((task) => {
        return {
          id: task.id,
          name: task.name,
          goalId: task.goalId,
          goalCategory: task.goalCategory,
          epochTime: task.epochTime,
          daysToRepeat: task.daysToRepeat,
        };
      });
      setTasks(tasksArray);
    });
  };

  useEffect(() => {
    if (selectedDay) {
      onDatePress(selectedDay);
    }
  }, [tasks]);

  useEffect(() => {
    //selectedItem is updated
    if (selectedItem?.isUpdated) {
      const goalId = selectedItem.goalId;
      const task = {
        id: selectedItem.id,
        name: selectedItem.name,
        epochTime: selectedItem.epochTime,
        daysToRepeat: selectedItem.daysToRepeat,
      };

      if (selectedItem.isNew) {
        addNewTask(goalId, task).then((test) => {
          updateGoalsState();
        });
      } else {
        updateTask(goalId, task).then((test) => {
          updateGoalsState();
        });
      }
    }
  }, [selectedItem]);

  const CustomModal = () => {
    let {name, daysToRepeat, epochTime: currentTime} = selectedItem;
    if (daysToRepeat && daysToRepeat.length > 0) {
      daysToRepeat = daysToRepeat.map((item) => {
        return {text: item, isSelected: true};
      });
    }
    return (
      <TaskTimeModalEdit
        initialTime={new Date(currentTime)}
        initialDaysRepeat={daysToRepeat}
        initialName={name}
        onSubmit={({name, epochTime, daysStringArray}) => {
          setSelectedItem({
            ...selectedItem,
            name: name,
            epochTime: epochTime,
            daysToRepeat: daysStringArray,
            isUpdated: true,
          });
          setIsVisibleEditModal(false);
        }}
      />
    );
  };

  const onDatePress = (day) => {
    setSelectedDay(day);
    const renderTasks = [];
    tasks.filter((task) => {
      if (task?.daysToRepeat && task.daysToRepeat.length > 0) {
        task.daysToRepeat.forEach((element, index) => {
          if (element.toLowerCase() === day.text.toLowerCase()) {
            renderTasks.push(task);
          }
        });
      } else {
        console.log('no tasks');
      }
      return true;
    });
    setDataList(renderTasks);
  };
  return (
    <SafeAreaView
      edges={['top']}
      style={{
        flex: 1,
      }}>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingHorizontal: layout.padding.screenHorizontal,
          }}>
          <Text
            style={{
              paddingBottom: layout.padding.medium,
              fontFamily: layout.fonts.nunito,
              fontSize: layout.fontSizes.header,
              color: colors.themeColors.primary,
            }}>
            {selectedGoal ? selectedGoal.name : 'My Tasks'}
          </Text>
          {selectedGoal && (
            <Text style={{color: colors.themeColors.pink}}>
              {selectedGoal.category}
            </Text>
          )}
        </View>
        <View style={{flex: 6, justifyContent: 'center'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <View>
              <DaysList initialSelect="Sun" onPress={onDatePress} />
            </View>
          </View>
          <View
            style={{
              flex: 2.8,
            }}>
            <TasksList
              rawData={dataList}
              onDeletePress={(item) => {
                deleteTask(item.goalId, item.id).then((test) => {
                  updateGoalsState();
                });
              }}
              onAddTaskPress={
                selectedGoal
                  ? () => {
                      setSelectedItem({
                        isNew: true,
                        goalId: selectedGoal.id,
                        name: '',
                        daysToRepeat: [],
                        epochTime: new Date().getTime(),
                      });
                      setIsVisibleEditModal(true);
                    }
                  : null
              }
              onEditPress={(item) => {
                setIsVisibleEditModal(true);
                setSelectedItem(item);
              }}
            />
          </View>
        </View>
        <Modal
          isVisible={isVisibleEditModal}
          avoidKeyboard={true}
          onBackdropPress={() => setIsVisibleEditModal(false)}>
          <CustomModal />
        </Modal>
      </View>
    </SafeAreaView>
  );
};
export default MyTasksHome;
