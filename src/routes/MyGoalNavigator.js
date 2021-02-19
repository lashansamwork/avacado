import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyGoalsHome from '../screens/MyGoalsHome';
import GoalQuestionsNavigator from '../routes/GoalQuestionsNavigator';
import MyTasksForGoal from '../screens/MyTasksForGoal';
const Stack = createStackNavigator();

const MyGoalNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
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
        name="MyTasksForGoal"
        component={MyTasksForGoal}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MyGoalNavigator;
