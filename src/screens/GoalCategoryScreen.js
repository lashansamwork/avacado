import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image, View, ScrollView } from 'react-native';
const yogaGirl = require('../assets/images/yogaGirl.png');
const readingGirl = require('../assets/images/readingGirl.png');
const thinkingGirl = require('../assets/images/thinkingGirl.png');
const moneyGirl = require('../assets/images/moneyGirl.png');
import layout from '../theme/layout';
import colors from '../theme/colors';

const GoalCategoryScreen = () => {
    return (

            <SafeAreaView style={{flexGrow: 1, justifyContent: 'space-evenly', alignItems:'center'}}>
                <Text style={{flexShrink:1,paddingBottom:layout.padding.xxxxLarge,fontFamily: "Nunito-SemiBold", fontSize: layout.fontSizes.large, color: colors.themeColors.primary }}>Goal Categories</Text>
                <TouchableOpacity style={{  flex:1, alignItems:'center',}} >
                    <View style={{height:layout.autoImageSizes.medium, aspectRatio:804/612}} >
                        <Image source={yogaGirl} style={{flex:1, height:null, width:null, left: -13}} resizeMode='stretch' />
                    </View>
                    <Text style={{fontFamily: "Nunito-SemiBold", fontSize: layout.fontSizes.medium, color: colors.themeColors.primary }}>Physical &amp; Health</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, alignItems:'center',}}>
                    <View style={{height:layout.autoImageSizes.medium, aspectRatio:696/631}} >
                        <Image source={readingGirl} style={{flex:1, height:null, width:null}} resizeMode='stretch' />
                    </View>
                    <Text style={{fontFamily: "Nunito-SemiBold", fontSize: layout.fontSizes.medium, color: colors.themeColors.primary }}>Career &amp; Educational</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{  flex:1, alignItems:'center',}}>
                    <View style={{height:layout.autoImageSizes.medium, aspectRatio:694/699}}>
                        <Image source={moneyGirl} style={{flex:1, height:null, width:null}} resizeMode='stretch' />
                    </View>
                    <Text style={{fontFamily: "Nunito-SemiBold", fontSize: layout.fontSizes.medium, color: colors.themeColors.primary }}>Finance</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex:1, alignItems:'center',}}>
                    <View style={{height:layout.autoImageSizes.large, aspectRatio:635/765}}>
                        <Image source={thinkingGirl} style={{flex:1, height:null, width:null}} resizeMode='stretch' />
                    </View>
                    <Text style={{fontFamily: "Nunito-SemiBold", fontSize: layout.fontSizes.medium, color: colors.themeColors.primary }}>Self Growth</Text>
                </TouchableOpacity>
    
    
            </SafeAreaView>

    );
}
export default GoalCategoryScreen;