import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import layout from '../theme/layout';
import colors from '../theme/colors';
import DaysList from '../components/DayElements/DaysList';
import TasksList from '../components/TasksElemets/TasksList';

const MyTasksHome = ({navigation}) => {
  const [tasks, setTasks] = useState(
    Array(20)
      .fill('')
      .map((_, i) => ({key: `${i}`, text: `item #${i}`})),
  );

  const onDatePress = (item) => {
    console.log(
      '🚀 ~ file: MyTasksHome.js ~ line 10 ~ onDatePress ~ item',
      item,
    );
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
            <TasksList />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyTasksHome;
