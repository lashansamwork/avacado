import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
Stack = createStackNavigator();

import FirstPageScreen from '../screens/FirstPageScreen';
import AddGoalScreen from '../screens/AddGoalScreen';
import GoalCategoryScreen from '../screens/GoalCategoryScreen';
import GoalQuestionsScreen from '../screens/GoalQuestionsScreen';
import AboutScreen from '../screens/AboutScreen';

const signedInRoutes = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }} 
        initialRouteName="GoalQuestionsScreen"
        >
            <Stack.Screen name="GoalQuestionsScreen" component={GoalQuestionsScreen} />
            <Stack.Screen name="GoalCategoryScreen" component={GoalCategoryScreen} />
            <Stack.Screen name="FirstPageScreen" component={FirstPageScreen} />
            <Stack.Screen name="AddGoalScreen" component={AddGoalScreen} />
            <Stack.Screen name="AboutScreen" component={AboutScreen} />
        </Stack.Navigator>
    );
}

export default signedInRoutes;
