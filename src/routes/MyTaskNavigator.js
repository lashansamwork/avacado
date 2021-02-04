import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MyTasksHome from '../screens/MyTasksHome';
const Stack = createStackNavigator();
const MyTaskNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
      initialRouteName="MyGoalsHome">
      <Stack.Screen
        name="MyGoalsHome"
        component={MyTasksHome}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MyTaskNavigator;
