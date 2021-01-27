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
        placeholder: "Save 1,500$ i a month", 
        ratio:696/631,
    }
}

const GoalCategoryScreen = ({navigation}) => {
    return (

            <SafeAreaView style={{flexGrow: 1, justifyContent: 'space-evenly', alignItems:'center'}}>
                <StatusBar barStyle='dark-content' />
                <Text style={{flexShrink:1,paddingBottom:layout.padding.xxxxLarge,fontFamily: "Nunito-SemiBold", fontSize: layout.fontSizes.large, color: colors.themeColors.primary }}>Goal Categories</Text>
                <TouchableOpacity style={{  flex:1, alignItems:'center',}}  onPress={()=>navigation.navigate('GoalQuestionsScreen')}>
                    <View style={{height:layout.autoImageSizes.medium, aspectRatio:804/612}} >
                        <Image source={yogaGirl} style={{flex:1, height:null, width:null, left: -13}} resizeMode='stretch' />
                    </View>
                    <Text style={{fontFamily: "Nunito-SemiBold", fontSize: layout.fontSizes.medium, color: colors.themeColors.primary, padding:layout.padding.medium }}>Physical &amp; Health</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, alignItems:'center',}} onPress={()=>navigation.navigate('GoalQuestionsScreen')}>
                    <View style={{height:layout.autoImageSizes.medium, aspectRatio:categoryData.readingGirl.ratio}} >
                        <Image source={categoryData.readingGirl.image} style={{flex:1, height:null, width:null}} resizeMode='stretch' />
                    </View>
                    <Text style={{fontFamily: "Nunito-SemiBold", fontSize: layout.fontSizes.medium, color: colors.themeColors.primary, padding:layout.padding.medium }}>Career &amp; Educational</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{  flex:1, alignItems:'center',}} onPress={()=>navigation.navigate('GoalQuestionsScreen')}>
                    <View style={{height:layout.autoImageSizes.medium, aspectRatio:694/699}}>
                        <Image source={moneyGirl} style={{flex:1, height:null, width:null}} resizeMode='stretch' />
                    </View>
                    <Text style={{fontFamily: "Nunito-SemiBold", fontSize: layout.fontSizes.medium, color: colors.themeColors.primary, padding:layout.padding.medium }}>Finance</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex:1, alignItems:'center',}} onPress={()=>navigation.navigate('GoalQuestionsScreen')}>
                    <View style={{height:layout.autoImageSizes.large, aspectRatio:635/765}}>
                        <Image source={thinkingGirl} style={{flex:1, height:null, width:null}} resizeMode='stretch' />
                    </View>
                    <Text style={{fontFamily: "Nunito-SemiBold", fontSize: layout.fontSizes.medium, color: colors.themeColors.primary, padding:layout.padding.medium }}>Self Growth</Text>
                </TouchableOpacity>
    
    
            </SafeAreaView>

    );
}
export default GoalCategoryScreen;