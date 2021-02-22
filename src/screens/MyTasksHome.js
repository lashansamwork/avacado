import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import layout from '../theme/layout';
import colors from '../theme/colors';
import DaysList from '../components/DayElements/DaysList';
import TasksList from '../components/TasksElemets/TasksList';
import {getGoals, updateTask, deleteTask} from '../database/GoalActions';
import {useEffect} from 'react';
import TaskNameModal from '../components/Modals/TaskNameModal';
import TaskTimeModal from '../components/Modals/TaskTimeModal';
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
    updateGoalsState();
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
    //not good code ( this code divides the relationship between goals and tasks )
    const selectedGoal = route?.params?.goal;

    getGoals(selectedGoal?.id).then((realmArr) => {
      const goals = realmArr.map((goal) => goal);
      const arraysOfTasks = goals.map((goal) => [
        ...goal.tasks.map((task) => {
          return {goalId: goal.id, ...task};
        }),
      ]);
      const flatten = [].concat.apply([], arraysOfTasks);
      const tasksArray = flatten.map((task) => {
        return {
          id: task.id,
          name: task.name,
          goalId: task.goalId,
          epochTime: task.epochTime,
          daysToRepeat: task.daysToRepeat,
          repeats: task.repeats,
        };
      });
      if (tasksArray && tasksArray.length > 0) {
        setTasks(tasksArray);
        console.log('data set ✅');
      } else {
        console.log('data not set ❌');
        setTasks([]);
      }
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
        repeats: selectedItem.repeats,
        daysToRepeat: selectedItem.daysToRepeat,
      };

      updateTask(goalId, task).then((test) => {
        updateGoalsState();
      });
    }
  }, [selectedItem]);

  const CustomModal = () => {
    const {name, daysToRepeat, epochTime: currentTime, repeats} = selectedItem;
    if (modalIndex === 0) {
      return (
        <TaskNameModal
          initialName={name}
          onSubmit={(taskName) => {
            setSelectedItem({...selectedItem, name: taskName});
            setModalIndex(1);
          }}
        />
      );
    }
    return (
      <TaskTimeModal
        initialTime={new Date(currentTime)}
        initialDaysRepeat={daysToRepeat}
        initialTimes={repeats}
        onSubmit={({epochTime, times, daysStringArray}) => {
          setSelectedItem({
            ...selectedItem,
            epochTime: epochTime,
            daysToRepeat: daysStringArray,
            repeats: times,
            isUpdated: true,
          });
          setIsVisibleEditModal(false);
          setModalIndex(0);
        }}
      />
    );
  };

  const onDatePress = (day) => {
    setSelectedDay(day);
    const renderTasks = [];
    tasks.filter((task) => {
      task.daysToRepeat.forEach((element, index) => {
        if (element.toLowerCase() === day.text.toLowerCase()) {
          renderTasks.push(task);
        }
      });
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
            My Tasks
          </Text>
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
              onEditPress={(item) => {
                setIsVisibleEditModal(true);
                setSelectedItem(item);
              }}
            />
            {/* Task Items and hidden functions */}
          </View>
        </View>
        <Modal
          transparent={true}
          visible={isVisibleEditModal}
          onBackdropPress={() => setIsVisibleEditModal(false)}>
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
    </SafeAreaView>
  );
};
export default MyTasksHome;
