import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image, View, TextInput, Dimensions, StyleSheet } from 'react-native';
import layout from '../theme/layout';
import colors from '../theme/colors';
const readingGirl = require('../assets/images/readingGirl.png');
const yogaGirl = require('../assets/images/yogaGirl.png');
const moneyGirl = require('../assets/images/moneyGirl.png');
const thinkingGirl = require('../assets/images/thinkingGirl.png');
const readingGirlPlaceholder = "Get my bachelors degree in three years";
const yogalPlaceholder = "Lose 2kg in a month";
const moneyPlaceholder = "Save 1,500$ in a month";
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


const SvgHand = ({ style }) => {
    return (
        <View style={style}>
            <Svg width="13.724" height="15.855" viewBox="0 0 13.724 15.855">
                <Path id="Path_2088" data-name="Path 2088" d="M545.261,1577.731a1.46,1.46,0,0,1-2.193-.731,1.46,1.46,0,0,1-2.193-.731,1.455,1.455,0,0,0-.731.2v-.522a8.689,8.689,0,0,0,1.945.384,1.793,1.793,0,1,0,0-3.586,8.75,8.75,0,0,0-1.962.39,1.46,1.46,0,0,0-2.887-.025,8.7,8.7,0,0,0-1.947-.385,1.793,1.793,0,0,0,0,3.586,8.671,8.671,0,0,0,1.926-.378v3.263h-.332a2.563,2.563,0,0,0-2.592,2.523,5.611,5.611,0,0,0,1.51,4.086,4.916,4.916,0,0,0,3.4,1.434h4.231a3.294,3.294,0,0,0,3.29-3.29v-4.753A1.464,1.464,0,0,0,545.261,1577.731Zm-2.121-3.2a1.053,1.053,0,0,1-1.052,1.051,6.961,6.961,0,0,1-1.945-.426v-1.25a6.955,6.955,0,0,1,1.945-.426A1.053,1.053,0,0,1,543.14,1574.536Zm-3.728.311c-.2-.111-.335-.219-.35-.311.015-.091.148-.2.35-.311Zm-1.462-1.5a.731.731,0,1,1,1.462,0v.058a2.992,2.992,0,0,0-.71.432,2.949,2.949,0,0,0-.752-.462Zm.37,1.171c-.016.095-.156.207-.37.322v-.645C538.164,1574.308,538.3,1574.421,538.32,1574.516Zm-3.027,1.051a1.051,1.051,0,0,1,0-2.1,6.94,6.94,0,0,1,1.926.419v1.264A6.93,6.93,0,0,1,535.293,1575.567Zm10.7,8.379a2.562,2.562,0,0,1-2.559,2.559H539.2a4.227,4.227,0,0,1-2.88-1.22,4.842,4.842,0,0,1-1.3-3.568,1.832,1.832,0,0,1,1.861-1.793h.332v1.828a.366.366,0,0,0,.731,0v-6.094a3.017,3.017,0,0,0,.73-.441,2.925,2.925,0,0,0,.733.453v5.351a.366.366,0,1,0,.731,0v-3.29a.731.731,0,1,1,1.462,0v3.29a.366.366,0,1,0,.731,0v-2.559a.731.731,0,0,1,1.462,0v2.559a.366.366,0,1,0,.731,0v-1.828a.731.731,0,0,1,1.462,0Z" transform="translate(-533.25 -1571.632)" fill="#ebbdbd" stroke="#ebbdbd" stroke-width="0.5" />
            </Svg>
        </View>
    );
}

const SecondRoute = () => {
    let goalPlaceholder = readingGirlPlaceholder;
    let girlImagePath = readingGirl;
    let goalDescription = readingGirlDescription;
    const [reason,onChangeReason] = useState('');
    setIndex = 1;
    return (
    <SafeAreaView style={{ alignSelf: 'center', width: layout.screenWidth.medium, flex: 1 }}>
        <View style={{paddingTop:layout.padding.xxxxLarge}}></View>
            <View style={{paddingTop:layout.padding.medium}}></View>
            <View style={{aspectRatio:945/15,height:layout.screenWidth.xxxSmall, alignSelf:'center'}}>
                <Image style={{flex: 1,width:null,height:null}} source={StepTwo} resizeMode='stretch' />
            </View>
        <Text style={{ flex: 1, color: colors.themeColors.primary, paddingBottom: layout.padding.large, fontSize: layout.fontSizes.xxxLarge, fontFamily: 'Nunito-SemiBold' }}>How?</Text>
        <Text style={{ flex: 1, color: colors.themeColors.pink, fontSize: layout.fontSizes.large }}>How will you achieve this goal?</Text>
        {/* need logic */}
        <View style={{ flex: 6 }}>
            <Image style={{ alignSelf: 'center', width: layout.imageSizes.large, height: layout.imageSizes.large }} resizeMode='contain' source={girlImagePath} />
            <Text style={{ alignSelf: 'center', color: colors.themeColors.primary, fontSize: layout.fontSizes.medium, fontFamily: 'Nunito-SemiBold' }}>{goalDescription}</Text>
        </View>
        <TextInput style={{ flex: 0.5, width: '100%', height: 40, borderBottomColor: colors.themeColors.primary, borderBottomWidth: 1, fontFamily: 'Nunito-SemiBold' }} placeholder={goalPlaceholder} fontSize={layout.fontSizes.small} textContentType='nickname' onChangeText={text => onChangeReason(text)} value={reason} />
        <View style={{ flex: 1, paddingTop: layout.padding.large }}>
            < SvgHand />
            <Text style={{ width: '80%', flexShrink: 1, flexWrap: 'wrap', color: colors.themeColors.pink, fontSize: layout.fontSizes.small }}>How will you achieve this goal?</Text>
        </View>
        <View style={{ flex: 5, alignItems: 'center', paddingTop: layout.padding.xxxLarge }}>
            <TouchableOpacity>
                <CheckCircle />
            </TouchableOpacity>
        </View>
    </SafeAreaView>);
};

const GoalQuestionsScreen = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);
    const renderScene = SceneMap({
        first: () => FirstRoute(()=>setIndex(1)),// move this to a named function , take currIndex +1
        second: SecondRoute,
    });
    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white' }}
            style={{ backgroundColor: 'white' }}
        />
    );
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