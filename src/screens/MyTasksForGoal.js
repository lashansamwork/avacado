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

  const onDatePress = (selectedDay) => {
    setSelectedDay(selectedDay);
    let tasks = myGoal.tasks;
    let dataList = [];
    tasks.filter((task) => {
      task.daysToRepeat.forEach((element) => {
        if (element.toLowerCase() === selectedDay.toLowerCase()) {
          dataList.push({
            id: task.id,
            name: task.name,
            epochTime: task.epochTime,
          });
        }
      });

      return true;
    });
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
            {myGoal.title}
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
            <TasksList rawData={tasks} />

            {/* tasks is an array */}
            {/* Task Items and hidden functions */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyTasksForGoal;
