import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
Stack = createStackNavigator();

import addGoalScreen from '../screens/addGoalScreen';

const signedInRoutes = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            
            >
            <Stack.Screen name="addGoalScreen" component={addGoalScreen} />
        </Stack.Navigator>
    );
}

export default signedInRoutes;
