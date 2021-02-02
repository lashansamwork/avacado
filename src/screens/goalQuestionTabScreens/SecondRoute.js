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
import Svg, { Path } from 'react-native-svg';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
const initialLayout = { width: Dimensions.get('screen').width };
import TaskItem from '../../components/TaskItem';

const SecondRoute = (onPress) => {


    const SAFEVIEW_OFFSET = 15;
    const HEADING_GAP = 44;
    const HEADING_OFFSET  = 120;
    const LIST_OFFSET = 66;


    return (
        <SafeAreaView style={{ flexGrow: 1, marginTop: SAFEVIEW_OFFSET }}>
            <View style={{ flex: 23, paddingHorizontal: layout.padding.screenHorizontal }}>
                <View style={{ flex: 14, justifyContent: 'center' }}>
                    <Text style={{ flexBasis: HEADING_GAP, fontFamily: layout.fonts.nunito, color: colors.themeColors.primary, fontSize: layout.fontSizes.xxxLarge }}>How?</Text>
                    <Text style={{ fontFamily: layout.fonts.nunito, color: colors.themeColors.pink, fontSize: layout.fontSizes.header }}>How will you achieve this goal?</Text>
                    <View style={{ flexBasis:HEADING_OFFSET}}></View>
                </View>

                <View style={{flex: 16, alignItems: 'center' }}>
                    <TaskItem style={{position:'absolute', top:0}} label="+Add Task/Habit" backgroundColor={colors.themeColors.pink} fontColor={colors.themeColors.primary}/>
                    <View style={{ flexBasis:LIST_OFFSET,}}></View>
                    <TaskItem label="Stop Eating Out" backgroundColor={colors.themeColors.primary} fontColor={colors.themeColors.secondary} />
                    
                </View>
            </View>

            <View style={{ flex: 9, paddingHorizontal: layout.padding.screenHorizontal }}>
                <View style={{ flex: 26 }}>
                    <TouchableOpacity onPress={onPress} style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', }}>
                        <CheckCircle />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SecondRoute;