import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image, View, TextInput, Dimensions, StyleSheet } from 'react-native';
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
import Svg, { Path } from 'react-native-svg';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
const initialLayout = { width: Dimensions.get('screen').width };

const SecondRoute = () => {
    let goalPlaceholder = readingGirlPlaceholder;
    let girlImagePath = readingGirl;
    let goalDescription = readingGirlDescription;
    const [reason,onChangeReason] = useState('');
    setIndex = 1;
    return (
    <SafeAreaView style={{ alignSelf: 'center', width: layout.screenWidth.medium, flexGrow: 1, }}>
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', }}>
            <Image style={{ width: layout.autoImageSizes.large }} source={StepTwo} resizeMode='contain' />
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
