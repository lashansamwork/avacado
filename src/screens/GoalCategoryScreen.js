import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
const yogaGirl = require('../assets/images/yogaGirl.png');
const readingGirl = require('../assets/images/readingGirl.png');
const thinkingGirl = require('../assets/images/thinkingGirl.png');
const moneyGirl = require('../assets/images/moneyGirl.png');
import layout from '../theme/layout';
import colors from '../theme/colors';

const GoalCategoryScreen = () => {
    return (
        <SafeAreaView style={{ flexGrow: 1, justifyContent: 'space-evenly', alignItems: 'center', borderColor: 'red', borderWidth: 3 }}>
            <Text style={{ fontFamily: "Nunito-SemiBold", fontSize: layout.fontSizes.large, color: colors.themeColors.primary }}>Goal Categories</Text>

            <TouchableOpacity style={{ borderWidth: 1, }} >
                <Image source={yogaGirl} style={{ width: layout.imageSizes.medium, height: layout.imageSizes.medium }} resizeMode='contain' />
                <Text style={{ alignSelf: 'center', fontFamily: "Nunito-SemiBold", fontSize: layout.fontSizes.medium, color: colors.themeColors.primary }}>Physical &amp; Health</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ borderWidth: 1, }}>
                <Image source={readingGirl} style={{ width: layout.imageSizes.medium, height: layout.imageSizes.medium }} resizeMode='contain' />
                <Text style={{ alignSelf: 'center', fontFamily: "Nunito-SemiBold", fontSize: layout.fontSizes.medium, color: colors.themeColors.primary }}>Career &amp; Educational</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ borderWidth: 1, }}>
                <Image source={moneyGirl} style={{ width: layout.imageSizes.medium, height: layout.imageSizes.medium }} resizeMode='contain' />
                <Text style={{ alignSelf: 'center', fontFamily: "Nunito-SemiBold", fontSize: layout.fontSizes.medium, color: colors.themeColors.primary }}>Finance</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{ borderWidth: 1, }}>
                <Image source={thinkingGirl} style={{ width: layout.imageSizes.medium, height: layout.imageSizes.medium }} resizeMode='center' />
                <Text style={{ alignSelf: 'center', fontFamily: "Nunito-SemiBold", fontSize: layout.fontSizes.medium, color: colors.themeColors.primary }}>Self Growth</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default GoalCategoryScreen;