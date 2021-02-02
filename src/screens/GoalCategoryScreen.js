import React from 'react';
import { StatusBar, SafeAreaView, Text, TouchableOpacity, Image, View, ScrollView } from 'react-native';
const yogaGirl = require('../assets/images/yogaGirl.png');
const readingGirl = require('../assets/images/readingGirl.png');
const thinkingGirl = require('../assets/images/thinkingGirl.png');
const moneyGirl = require('../assets/images/moneyGirl.png');
import layout from '../theme/layout';
import colors from '../theme/colors';

const categoryData = {
    readingGirl: {
        image: require('../assets/images/readingGirl.png'),
        title: "Career & Education",
        placeholder: "Save $1,500 i a month",
    }
}

const GoalCategoryScreen = ({ navigation }) => {
    const YOGA_GIRL_SIDE_OFFSET = -13;
    const TEXT_OFFSET = 5;
    const READING_GIRL_OFFSET =13;
    const FINANCE_GIRL_OFFSET =10;
    return (
        <View style={{ flexGrow: 1 }}>
            <StatusBar barStyle='dark-content' />
            <View style={{ flex: 3, alignItems: 'center' }}>
                <Text style={{ position: 'absolute', bottom: 0, fontFamily: layout.fonts.nunito, fontSize: layout.fontSizes.header, color: colors.themeColors.primary }}>Goal categories</Text>
            </View>
            <View style={{ flex: 23,  }}>
                <View style={{flex:1}}></View>
                <TouchableOpacity style={{ flex: 7, alignItems: 'center', }} onPress={() => navigation.navigate('GoalQuestionsScreen')}>
                    <View style={{ height: layout.autoImageSizes.medium, aspectRatio: layout.imageAspectRatio.yogaGirl }} >
                        <Image style={{ flex: 1, height: null, width: null, left: YOGA_GIRL_SIDE_OFFSET }} source={yogaGirl} resizeMode='stretch' />
                    </View>
                    <View style={{ flexBasis:TEXT_OFFSET }}></View>
                    <Text style={{fontFamily:layout.fonts.nunito, fontSize:layout.fontSizes.mediumHigh, color:colors.themeColors.primary}}>Physical &amp; Health</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 7, alignItems: 'center', }} onPress={() => navigation.navigate('GoalQuestionsScreen')}>
                    <View style={{ flexBasis:READING_GIRL_OFFSET }}></View>
                    <View style={{ height: layout.autoImageSizes.medium, aspectRatio: layout.imageAspectRatio.readingGirl }} >
                        <Image style={{ flex: 1, height: null, width: null }} source={categoryData.readingGirl.image} resizeMode='stretch' />
                    </View>
                    <View style={{ flexBasis:TEXT_OFFSET }}></View>
                    <Text style={{fontFamily:layout.fonts.nunito, fontSize:layout.fontSizes.mediumHigh, color:colors.themeColors.primary}}>Career &amp; Educational</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 7, alignItems: 'center', }} onPress={() => navigation.navigate('GoalQuestionsScreen')}>
                    <View style={{ flexBasis:FINANCE_GIRL_OFFSET }}></View>
                    <View style={{ height: layout.autoImageSizes.medium, aspectRatio: layout.imageAspectRatio.moneyGirl }}>
                        <Image source={moneyGirl} style={{ flex: 1, height: null, width: null }} resizeMode='stretch' />
                    </View>
                    <View style={{ flexBasis:TEXT_OFFSET }}></View>
                    <Text style={{fontFamily:layout.fonts.nunito, fontSize:layout.fontSizes.mediumHigh, color:colors.themeColors.primary}}>Finance</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 7, alignItems: 'center', }} onPress={() => navigation.navigate('GoalQuestionsScreen')}>
                    <View style={{ height: layout.autoImageSizes.large, aspectRatio: layout.imageAspectRatio.thinkingGirl }}>
                        <Image source={thinkingGirl} style={{ flex: 1, height: null, width: null }} resizeMode='stretch' />
                    </View>
                    <Text style={{fontFamily:layout.fonts.nunito, fontSize:layout.fontSizes.mediumHigh, color:colors.themeColors.primary}}>Self Growth</Text>
                </TouchableOpacity>
                <View style={{flex:1.0}}></View>
            </View>
        </View>
    );
}
export default GoalCategoryScreen;