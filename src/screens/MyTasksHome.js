import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import layout from '../theme/layout';
import colors from '../theme/colors';
import DaysList from '../components/DayElements/DaysList';
import TasksList from '../components/TasksElemets/TasksList';
import {getGoals} from '../database/GoalActions';
import {useEffect} from 'react';
const MyTasksHome = ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const [dataList, setDataList] = useState([]);

  const [pressedDay, setPressedDay] = useState('');
  useEffect(() => {
    getGoals().then((realmArr) => {
      const goals = realmArr.map((goal) => goal);
      const arraysOfTasks = goals.map((goal) => [...goal.tasks]);
      const flatten = [].concat.apply([], arraysOfTasks);
      const tasks = flatten.map((task) => {
        return {
          id: task.id,
          name: task.name,
          epochTime: task.epochTime,
          daysToRepeat: task.daysToRepeat,
        };
      });

      if (tasks && tasks.length > 0) {
        setTasks(tasks);
        console.log('data set ✅');
      } else {
        console.log('data not set ❌');
        setTasks([]);
      }
    });
  }, []);

  const onDatePress = (pressedDay) => {
    // function replaced
    setPressedDay(pressedDay);

    const renderTasks = [];

    tasks.filter((task) => {
      task.daysToRepeat.forEach((element, index) => {
        if (element.toLowerCase() === pressedDay.text.toLowerCase()) {
          renderTasks.push({
            id: task.id,
            name: task.name,
            epochTime: task.epochTime,
          });
        }
      });
      return true;
    });
    console.log(
      '🚀 ~ file: MyTasksHome.js ~ line 53 ~ onDatePress ~ renderTasks',
      renderTasks,
    );
    setDataList(renderTasks);
    // let taskArray = myGoal.tasks;
    // let neededDaysArray = [];
    // taskArray.filter((task, index) => {
    //   task.daysToRepeat.forEach((element) => {
    //     if (element.toLowerCase() === selectedDay.toLowerCase()) {
    //       neededDaysArray.push(task);
    //     }
    //   });
    //   return true;
    // });
    // setTasks(neededDaysArray);
    // console.log('needed days tasks', tasks);
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
            <TasksList rawData={dataList} />
            {/* Task Items and hidden functions */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyTasksHome;
