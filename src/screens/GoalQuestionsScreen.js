import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image, View, TextInput, Dimensions, StatusBar } from 'react-native';
import layout from '../theme/layout';
import colors from '../theme/colors';
const readingGirl = require('../assets/images/readingGirl.png');
const yogaGirl = require('../assets/images/yogaGirl.png');
const moneyGirl = require('../assets/images/moneyGirl.png');
const thinkingGirl = require('../assets/images/thinkingGirl.png');
const readingGirlPlaceholder = "Get my bachelors degree in three years";
const yogalPlaceholder = "Lose 2kg in a month";
const moneyPlaceholder = "Save 1,500$ i a mnonth";
const thinkingGirlPlaceholder = "Build a reading habit in 21 days";
const readingGirlDescription = "Career & Education";
const yogaDescription = "Physical & Health";
const moneyGirlDescription = "Finance";
const thinkingGirlDescription = "Self growth";
import CheckCircle from '../assets/images/CheckCircle';
import StepOne from '../assets/images/stepOne.png';
import StepTwo from '../assets/images/stepTwo.png';
import Svg, { Path } from 'react-native-svg';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
const initialLayout = { width: Dimensions.get('screen').width };
import FirstRoute from './goalQuestionTabScreens/FirstRoute';
import SecondRoute from './goalQuestionTabScreens/SecondRoute';
import ThirdRoute from './goalQuestionTabScreens/ThirdRoute';
import FourthRoute from './goalQuestionTabScreens/FourthRoute';

const GoalQuestionsScreen = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
        { key: 'third', title:'third'},
        { key: 'fourth', title:'fourth'},
    ]);
    const renderScene = SceneMap({
        first: () => FirstRoute(()=>incrementIndex()),
        second: () => SecondRoute(()=>incrementIndex()),
        third: () => ThirdRoute(()=>incrementIndex()),
        fourth: () => FourthRoute(()=>incrementIndex()),
    });

    const incrementIndex = () => {
        setIndex(index+1);
    }

    const renderTabBar = props => (<></>);
    // new state for description/image etc
    
    return ( 
        <TabView
            timingConfig={{ duration: 0.000000001 }}
            swipeVelocityImpact={0.0001}
            swipeEnabled={false}
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
        />
    );
}
 

export default GoalQuestionsScreen;