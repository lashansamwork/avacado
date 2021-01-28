import React, { useEffect, useState } from 'react';
import { StatusBar, SafeAreaView, Text, TouchableOpacity, Image, View, TextInput, Dimensions } from 'react-native';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
const readingGirl = require('../../assets/images/readingGirl.png');
const yogaGirl = require('../../assets/images/yogaGirl.png');
const moneyGirl = require('../../assets/images/moneyGirl.png');
const thinkingGirl = require('../../assets/images/thinkingGirl.png');
const readingGirlPlaceholder = "Get my bachelors degree in three years";
const yogalPlaceholder = "Lose 2kg in a month";
const moneyPlaceholder = "Save 1,500$ in a month";
const thinkingGirlPlaceholder = "Build a reading habit in 21 days";
const readingGirlDescription = "Career & Education";
const yogaDescription = "Physical & Health";
const moneyGirlDescription = "Finance";
const thinkingGirlDescription = "Self growth";
import CheckCircle from '../../assets/images/CheckCircle';
import StepOne from '../../assets/images/stepOne.png';
import StepTwo from '../../assets/images/stepTwo.png';
import StepFour from '../../assets/images/stepFour.png';
import Svg, { Path } from 'react-native-svg';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
const initialLayout = { width: Dimensions.get('screen').width };

const FourthRoute = () => {
    let goalPlaceholder = readingGirlPlaceholder;
    let girlImagePath = readingGirl;
    let goalDescription = readingGirlDescription;
    const [reason, onChangeReason] = useState('');
    setIndex = 1;
    return (
        <SafeAreaView style={{ alignSelf: 'center', width: layout.screenWidth.medium, flexGrow: 1, flexDirection: 'column' }}>
            <View style={{ aspectRatio: 945 / 15, height: layout.screenWidth.xxxSmall, alignSelf: 'center' }}>
                <Image style={{ flex: 1, width: null, height: null }} source={StepFour} resizeMode='stretch' />
            </View>
            <View style={{ flexShrink: 1 }}>
                <Text style={{ color: colors.themeColors.primary, paddingTop: layout.padding.xxxxLarge, fontSize: layout.fontSizes.xxxLarge, fontFamily: 'Nunito-SemiBold' }}>When?</Text>
                <Text style={{ width:'85%', color: colors.themeColors.pink, fontSize: layout.fontSizes.large, fontFamily: "Nunito-SemiBold", }}>When do you think you will have achieved it?</Text>
            </View>
            {/* need logic */}
            <View style={{flex: 7, justifyContent: 'center'}}>
                <View style={{ padding: layout.padding.xxxLarge }}></View>
                <View style={{ backgroundColor:colors.themeColors.primary, flex:1, borderRadius:50}}>
                    <Text style={{ color:'white', alignSelf:'center'}}>Calendar View</Text>
                </View>
            </View>
            <View style={{ flex: 1, paddingTop: layout.padding.large }}>

            </View>
            <View style={{ flex: 5, alignItems: 'center', paddingTop: layout.padding.xxxLarge }}>
                <TouchableOpacity>
                    <CheckCircle />
                </TouchableOpacity>
            </View>
        </SafeAreaView>);
};

export default FourthRoute;