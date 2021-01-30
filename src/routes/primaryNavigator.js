import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
Stack = createStackNavigator();

import WelcomeScreen from '../screens/WelcomeScreen';
import SignedInRoutes from './SignedInRoutes';

const primaryNavigator = () => {
    let isSignOut = false;
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            >
            {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} /> */}
            <Stack.Screen name="signedInRoutes" component={SignedInRoutes} />
        </Stack.Navigator>
    );
}

export default primaryNavigator;
