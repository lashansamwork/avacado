import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PlusInsideCircle from '../assets/images/PlusInsideCircle';
import layout from '../theme/layout';
import colors from '../theme/colors';

const addGoalScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.themeColors.primary, paddingTop: layout.padding.large }}>
            <View style={{ flex:  22}}></View>
            <TouchableOpacity style={{flex: 9, alignItems: 'center', justifyContent: 'center' }}>
                <PlusInsideCircle />
                <View style={{ flex: 11 }}></View>
                <Text style={{ flex: 20, color: colors.themeColors.pink, fontSize: layout.fontSizes.welcomeText, fontFamily: layout.fonts.nunito }}>Add a goal</Text>
            </TouchableOpacity>
            <View style={{ flex:  20}}></View>
        </View>
    );
}

export default addGoalScreen;