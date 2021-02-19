import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import layout from '../theme/layout';
import colors from '../theme/colors';
import DaysList from '../components/DayElements/DaysList';
import TasksList from '../components/TasksElemets/TasksList';
import {getGoals} from '../database/GoalActions';
import {useEffect} from 'react';
const ReadingGirl = require('../assets/images/ReadingGirl.png');

const MyTasksForGoal = ({route, navigation}) => {
  const [tasks, setTasks] = useState([]);

  const {myGoal} = route.params;
  const [selectedDay, setSelectedDay] = useState('');

  // useEffect(() => {
  //   getGoals().then((realmArr) => {
  //     realmArr.forEach((element, index) => {
  //       setMyGoals([
  //         ...myGoals,
  //         {
  //           key: index,
  //           imageUrl: ReadingGirl,
  //           imageAspectRatio: layout.imageAspectRatio.readingGirl,
  //           title: element.name,
  //           description: element.description,
  //           buttonText: 'Remind me how?',
  //           subText: element.when,
  //           buttonOnPress: () => {
  //             navigation.navigate('MyTasksForGoal');
  //           },
  //         },
  //       ]);
  //     });
  //   });
  // }, []);
  // console.log(
  //   '🚀 ~ file: MyTasksForGoal.js ~ line 19 ~ MyTasksForGoal ~ myGoals',
  //   myGoal,
  // );
  // myGoal.tasks.forEach((e) =>
  //   console.log('foreach', {test: e.daysToRepeat[0], ...e}),
  // );
  // const getData = () => {
  //   getGoals().then((realmArr) => {
  //     console.log('MyTaskHome: Realm: ', realmArr);
  //     realmArr.forEach((e) => {
  //       console.log(e.tasks.date);
  //     });
  //   });
  // };

  // getData();

  const onDatePress = (selectedDay) => {
    setSelectedDay(selectedDay);
    console.log(selectedDay, ' is the selected day');
    let taskArray = myGoal.tasks;
    let neededDaysArray = [];
    taskArray.filter((task, index) => {
      task.daysToRepeat.forEach((element) => {
        if (element.toLowerCase() === selectedDay.toLowerCase()) {
          neededDaysArray.push(task);
        }
      });
    });
    setTasks(neededDaysArray);
    console.log('needed days tasks', tasks);
  };

  const ListCard = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{flexBasis: 50}} />
        <View
          style={{
            backgroundColor: colors.themeColors.primary,
            flex: 1,
            height: layout.card.taskHeight,
            justifyContent: 'center',
            paddingHorizontal: layout.padding.large,
            borderRadius: layout.taskCardRadius,
          }}>
          <Text style={{color: colors.themeColors.secondary}}>
            I am in a SwipeListView
          </Text>
        </View>
        <View style={{flexBasis: 50}} />
      </View>
    );
  };

  const HiddenListCard = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: layout.card.taskHeight,
          width: '100%',
        }}>
        <View style={{flexBasis: 50, backgroundColor: 'red'}}>
          <View>
            <Text>Save</Text>
          </View>
          <View>
            <Text>Edit</Text>
          </View>
          <View>
            <Text>Delete</Text>
          </View>
        </View>
      </View>
    );
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
            {/* {myGoals[0].title} */}
          </Text>
        </View>
        <View style={{flex: 6, justifyContent: 'center'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <View>
              <DaysList
                initialSelect="Sun"
                onPress={(day) => {
                  onDatePress(day.text);
                }}
              />
            </View>
          </View>
          <View
            style={{
              flex: 2.8,
            }}>
            <TasksList />
            {/* Task Items and hidden functions */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyTasksForGoal;
