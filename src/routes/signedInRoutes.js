import React from 'react';
import {Image, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
Stack = createStackNavigator();

import FirstPageScreen from '../screens/FirstPageScreen';
import AddGoalScreen from '../screens/AddGoalScreen';
import GoalCategoryScreen from '../screens/GoalCategoryScreen';
import GoalQuestionsScreen from '../screens/GoalQuestionsScreen';
import AboutScreen from '../screens/AboutScreen';
import WelcomeScreen from '../screens/WelcomeScreen'; 
import GoalAddedScreen from '../screens/GoalAddedScreen';
const leftArrow = require('../assets/images/arrow-left.png'); 
import layout from '../theme/layout';
const signedInRoutes = () => {



    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
            }}
            initialRouteName="WelcomeScreen"
        >
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="FirstPageScreen" component={FirstPageScreen} options={{ headerShown: false }} />
            <Stack.Screen name="GoalQuestionsScreen" component={GoalQuestionsScreen}
                options={{
                    headerShown: true, 
                    headerStyle: {
                        backgroundColor: '#FFFFFF',
                        shadowRadius: 0,
                        shadowOffset: {
                            height: 0,
                        },
                    },
                    title:'',
             
                    headerBackTitle: <></>,
                    headerBackImage: () => (<View style={{aspectRatio:1/1, height:layout.heights.xxxshort}}>
                        <Image style={{flex:1, width:null, height:null, left: 30}} resizeMode="stretch" source={leftArrow} />
                    </View>)
                }}

            />
            <Stack.Screen name="GoalCategoryScreen" component={GoalCategoryScreen} options={{ headerShown: false,   }} />
            <Stack.Screen name="AddGoalScreen" component={AddGoalScreen} options={{ headerShown: false,   }}/>
            <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ headerShown: false,   }}/>
            <Stack.Screen name="GoalAddedScreen" component={GoalAddedScreen} options={{ headerShown: false,   }} />
        </Stack.Navigator>
    );
}

export default signedInRoutes;
