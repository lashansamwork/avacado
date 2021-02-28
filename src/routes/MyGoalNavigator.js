import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MyGoalsHome from '../screens/MyGoalsHome';
import GoalQuestionsNavigator from '../routes/GoalQuestionsNavigator';
import MyTasksHome from '../screens/MyTasksHome';
import layout from '../theme/layout';
const LeftArrow = require('../assets/images/ArrowLeft.png');
import GoalInfoScreen from '../screens/GoalInfoScreen';
const Stack = createStackNavigator();

const MyGoalNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        gestureEnabled: false,
      }}
      initialRouteName="MyGoalsHome">
      <Stack.Screen
        name="MyGoalsHome"
        component={MyGoalsHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GoalQuestionsNavigator"
        component={GoalQuestionsNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GoalInfoScreen"
        component={GoalInfoScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="MyGoalTask"
        component={MyTasksHome}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default MyGoalNavigator;
