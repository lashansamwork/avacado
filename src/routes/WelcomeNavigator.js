import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
let Stack = createStackNavigator();

import FirstPageScreen from '../screens/FirstPageScreen';
import AddGoalScreen from '../screens/AddGoalScreen';
import GoalQuestionsNavigator from '../routes/GoalQuestionsNavigator';
import AboutScreen from '../screens/AboutScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import GoalAddedScreen from '../screens/GoalAddedScreen';
const WelcomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="WelcomeScreen">
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FirstPageScreen"
        component={FirstPageScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GoalQuestionsNavigator"
        component={GoalQuestionsNavigator}
      />
      <Stack.Screen
        name="AddGoalScreen"
        component={AddGoalScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GoalAddedScreen"
        component={GoalAddedScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default WelcomeNavigator;
