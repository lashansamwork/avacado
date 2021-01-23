import React from 'react';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
const avacadoLogo = require('../assets/images/avocado-logo.png');
const girlCouchImage = require('../assets/images/girlSittingCouch3.png');
import CheckCircle from '../assets/images/CheckCircle';
import layout from '../theme/layout';

const FirstPageScreen = ({navigation}) => {
    const [name, onChangeName] = React.useState('');
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{position: 'absolute', top: 0, alignSelf: 'center',width: '100%',height: '46%',padding:20, backgroundColor:"#1C4950", borderBottomRightRadius:20, borderBottomLeftRadius:20}} ></View>
         
            <View style={{ justifyContent:'center', flex: 3.2, paddingTop: layout.padding.xxxLarge, alignSelf: 'center',  }}>
                <Image style={{ alignSelf: 'center', width: layout.imageSizes.large, height: layout.imageSizes.large }} resizeMode='contain' source={avacadoLogo}  />
            </View>
            <View style={{flex:8, width:'90%',alignSelf: 'center', }}>
                <Image style={{flex:1,  width: null, height:null}} source={girlCouchImage} />
            </View> 
            <View style={{flex:3,   width:'70%', alignSelf: 'center'}}>
                <Text style={{fontSize: 20, fontFamily:'Nunito-SemiBold'}}>Hi there! I'm Jade</Text>
                <Text style={{fontSize: 20, fontFamily:'Nunito-SemiBold'}}>What do you want me to</Text>
                <Text style={{fontSize: 20, fontFamily:'Nunito-SemiBold'}}>call you?</Text>
            </View>
            <TextInput placeholder="What do you want me to call you?"  textContentType='nickname' style={{flex:0.5, alignSelf:'center',width:'70%',height: 40,borderBottomColor:"#1C4950", borderBottomWidth: 1}} onChangeName={text => onChangeName(text)} value={name} />
            <View style={{flex:5, alignItems:'center', paddingTop: layout.padding.xxxLarge}}>
                <TouchableOpacity>
                    <CheckCircle />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default FirstPageScreen;