import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyGoalsHome from '../screens/MyGoalsHome';
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
    </Stack.Navigator>
  );
};

export default MyGoalNavigator;
