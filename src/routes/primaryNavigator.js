import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
Stack = createStackNavigator();


import WelcomeScreen from '../screens/WelcomeScreen';

import signedInRoutes from '../routes/signedInRoutes';

const primaryNavigator = () => {
    let isSignOut = false; //add logic
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            {isSignOut ? <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} /> :
                <Stack.Screen name="signedInRoutes" component={signedInRoutes} />}

        </Stack.Navigator>
    );
}

export default primaryNavigator;
