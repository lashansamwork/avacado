import React from 'react';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
const avacadoLogo = require('../assets/images/avocado-logo.png');
const girlCouchImage = require('../assets/images/girlSittingCouch3.png');
import CheckCircle from '../assets/images/CheckCircle';
import layout from '../theme/layout';
import colors from '../theme/colors';

const FirstPageScreen = ({ navigation }) => {
    const [name, onChangeName] = React.useState('');
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ position: 'absolute', top: 0, alignSelf: 'center', width: '100%', height: '51%', padding: 20, backgroundColor: "#1C4950", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} ></View>
            <View style={{alignSelf: 'center', height: layout.heights.mediumLow, aspectRatio: 658 / 506 }} >
                <Image style={{ flex: 1, height: null, width: null }} resizeMode='stretch' source={avacadoLogo} />
            </View>
            <View style={{alignSelf:'center', height: layout.heights.tall, aspectRatio: 519 / 441}} >
                <Image style={{ flex: 1, height: null, width: null}} resizeMode='stretch' source={girlCouchImage} />
            </View>
            <View style={{ flex: 3, width: '70%', alignSelf: 'center', paddingTop:layout.padding.xxxxLarge }}>
                <Text style={{ fontSize: 20, fontFamily: 'Nunito-SemiBold', color:colors.themeColors.primary }}>Hi there! I'm Jade</Text>
                <Text style={{ fontSize: 20, fontFamily: 'Nunito-SemiBold', color:colors.themeColors.primary }}>What do you want me to</Text>
                <Text style={{ fontSize: 20, fontFamily: 'Nunito-SemiBold', color:colors.themeColors.primary }}>call you?</Text>
            </View>
            <View style={{padding:layout.padding.large}}></View>
            <TextInput placeholder="What do you want me to call you?" textContentType='nickname' style={{paddingTop:layout.padding.xxxxLarge, flex: 0.5, alignSelf: 'center', width: '70%', height: 40, borderBottomColor: colors.themeColors.primary, borderBottomWidth: 1 }} onChangeName={text => onChangeName(text)} value={name} />
            <View style={{flex: 5, alignItems: 'center', paddingTop: layout.padding.xxxLarge }}>
            <View style={{padding:layout.padding.xxxLarge}}></View>
                <TouchableOpacity>
                    <CheckCircle />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default FirstPageScreen;