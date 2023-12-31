/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import colors from './src/theme/colors';
import WelcomeNavigator from './src/routes/WelcomeNavigator';
import TabNavigator from './src/routes/TabNavigator';
import AboutScreen from './src/screens/AboutScreen';
import {addToGoal, getGoals} from './src/database/GoalActions';
import Realm from 'realm';

console.log('realm new path', Realm.defaultPath);
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: 'transparent',
    background: colors.backgroundColor,
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
        initialRouteName="IntroRoutes">
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="IntroRoutes" component={WelcomeNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
