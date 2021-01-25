import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
const avacadoLogo = require('../assets/images/avocado-logo.png');
const girlCouchImage = require('../assets/images/girlSittingCouch3.png');
import layout from '../theme/layout';
const TinyLine = require('../assets/images/tinyLine.png');

const WelcomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flexGrow: 1, alignItems: 'center', backgroundColor: "#1C4950" }}>
            <View style={{ flex: 1,alignItems:'center'}} >
                <View style={{height: layout.heights.mediumLow, aspectRatio:658/506}} >
                    <Image style={{ flex: 1, height: null, width: null, top:30}} resizeMode='stretch' source={avacadoLogo}/>
                </View>
            </View>


            <View style={{flex: 1}}>
                <Text style={{ left:160, top:-20, fontFamily: "Nunito-SemiBold", fontSize: 20, color: "#EBBDBD" }}>Welcome Back Layan!</Text>
                <View style={{height: layout.heights.xxshort, aspectRatio:41/31}}>
                    <Image style={{flex:1, height:null, width:null, left:165, top:-10}}  source={TinyLine} resizeMode='stretch'/>
                </View>
                <View style={{height: layout.heights.xxtall, aspectRatio: 519 / 441 }} >
                    <Image style={{flex: 1, height: null, width: null, left: -60, top: -80 }} resizeMode='stretch' source={girlCouchImage} />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default WelcomeScreen;