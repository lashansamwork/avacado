import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
let Stack = createStackNavigator();

import GoalCategoryScreen from '../screens/GoalCategoryScreen';
import GoalQuestionsScreen from '../screens/GoalQuestionsScreen';

const GoalQuestionsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        gestureEnabled: false,
      }}
      initialRouteName="GoalCategoryScreen">
      <Stack.Screen
        name="GoalQuestionsScreen"
        component={GoalQuestionsScreen}
      />
      <Stack.Screen
        name="GoalCategoryScreen"
        component={GoalCategoryScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default GoalQuestionsNavigator;
