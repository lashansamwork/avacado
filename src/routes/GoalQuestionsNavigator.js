import React from 'react';
import {Image, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
let Stack = createStackNavigator();

import GoalCategoryScreen from '../screens/GoalCategoryScreen';
import GoalQuestionsScreen from '../screens/GoalQuestionsScreen';
const LeftArrow = require('../assets/images/ArrowLeft.png');
import layout from '../theme/layout';

const GoalQuestionsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
      initialRouteName="GoalCategoryScreen">
      <Stack.Screen
        name="GoalQuestionsScreen"
        component={GoalQuestionsScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#FFFFFF',
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
          },
          title: '',
          headerBackTitle: <></>,
          headerBackImage: () => (
            <View style={{aspectRatio: 1 / 1, height: layout.heights.xxxshort}}>
              <Image
                style={{flex: 1, width: null, height: null, left: 30}}
                resizeMode="stretch"
                source={LeftArrow}
              />
            </View>
          ),
        }}
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
