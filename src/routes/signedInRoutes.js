import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
Stack = createStackNavigator();

import FirstPageScreen from '../screens/FirstPageScreen';
import AddGoalScreen from '../screens/AddGoalScreen';
import GoalCategoryScreen from '../screens/GoalCategoryScreen';
import WhatScreen from '../screens/WhatScreen';
import AboutScreen from '../screens/AboutScreen';

const signedInRoutes = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }} 
        initialRouteName="WhatScreen"
        >
            <Stack.Screen name="WhatScreen" component={WhatScreen} />
            <Stack.Screen name="GoalCategoryScreen" component={GoalCategoryScreen} />
            <Stack.Screen name="FirstPageScreen" component={FirstPageScreen} />
            <Stack.Screen name="AddGoalScreen" component={AddGoalScreen} />
            <Stack.Screen name="AboutScreen" component={AboutScreen} />
        </Stack.Navigator>
    );
}

export default signedInRoutes;
