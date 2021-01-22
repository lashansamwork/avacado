import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
Stack = createStackNavigator();

import FirstPageScreen from '../screens/FirstPageScreen';
import AddGoalScreen from '../screens/AddGoalScreen';
import GoalCategoryScreen from '../screens/GoalCategoryScreen';

const signedInRoutes = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }} 
        initialRouteName="GoalCategoryScreen"
        >
            <Stack.Screen name="GoalCategoryScreen" component={GoalCategoryScreen} />
            <Stack.Screen name="FirstPageScreen" component={FirstPageScreen} />
            <Stack.Screen name="AddGoalScreen" component={AddGoalScreen} />
        </Stack.Navigator>
    );
}

export default signedInRoutes;
