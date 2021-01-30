/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import colors from './src/theme/colors';
import WelcomeNavigator from './src/routes/WelcomeNavigator';
import TabNavigator from './src/routes/TabNavigator';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card:'transparent',
    background: colors.backgroundColor,
    
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
          screenOptions={{
              headerShown: false,
          }}
          >
          <Stack.Screen name="Home" component={TabNavigator} />
          <Stack.Screen name="IntroRoutes" component={WelcomeNavigator} />
      </Stack.Navigator>
      {/* <TabNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
