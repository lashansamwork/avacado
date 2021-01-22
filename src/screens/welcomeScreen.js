import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
const avacadoLogo = require('../assets/images/avocado-logo.png');
const girlCouchImage = require('../assets/images/girlSittingCouch3.png');
import layout from '../theme/layout';
const TinyLine = require('../assets/images/tinyLine.png');

const WelcomeScreen = ({navigation}) => {
    return (
        <View style={{flex:1, backgroundColor:"#1C4950"}}>
            <View style={{ justifyContent:'flex-end', flex: 3.2, paddingTop: layout.padding.xxxLarge, alignSelf: 'center',  }}>
                <Image style={{height:'90%', }} source={avacadoLogo} resizeMode='contain'/>
            </View>
            <Text style={{flex:1, fontFamily:"Nunito-SemiBold", fontSize: 20, color:"#EBBDBD"}}>Welcome Back Layan</Text>
            <View style={{flex:1}}>
                <Image style={{height: '100%'}} source={TinyLine} resizeMode='contain' />
            </View>
            <View style={{flex:8, width:'90%',alignSelf: 'center', }}>
                <Image style={{flex:1,  width: null, height:null}} source={girlCouchImage} />
            </View> 
        </View>
    );
}

export default WelcomeScreen;