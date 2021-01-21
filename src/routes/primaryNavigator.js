import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
Stack = createStackNavigator();

import welcomeScreen from '../screens/welcomeScreen';
import signedInRoutes from '../routes/signedInRoutes';

const primaryNavigator = () => {
    isSignIn = false; //add logic
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            {isSignIn ? <Stack.Screen name="welcomeScreen" component={welcomeScreen} /> :
                <Stack.Screen name="signedInRoutes" component={signedInRoutes} />}

        </Stack.Navigator>
    );
}

export default primaryNavigator;
