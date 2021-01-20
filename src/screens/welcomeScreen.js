import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const avacadoLogo = require('../assets/images/avacodoScreenshot.png');
const girlCouchImage = require('../assets/images/girlSittingCouch3.png');

const welcomeScreen = ({navigation}) => {
    const [value, onChangeText] = React.useState('What do you want me to call you');
    return (
        <View style={{flex:1}}>
            <View style={{position: 'absolute', top: 0, alignSelf: 'center',width: '90%',height: '46%',padding:20, backgroundColor:"#1C4950", borderBottomRightRadius:20, borderBottomLeftRadius:20}} ></View>
         
            <View style={{ justifyContent:'flex-end', flex: 3.2, alignSelf: 'center',  }}>
                <Image 
                style={{height:'90%',   }} 
                source={avacadoLogo} 
                resizeMode='contain'/>
            </View>
       
            
            <View style={{flex:8, width:'90%',alignSelf: 'center', }}>
                <Image 
               
                source={girlCouchImage} 
             
                style={{flex:1,  width: null, height:null}}/>
            </View>
            
            <View style={{flex:3,   width:'70%', alignSelf: 'center'}}>
                <Text style={{fontSize: 20}}>Hi there! I'm Jade</Text>
                <Text style={{fontSize: 20}}>What do you want me to </Text>
                <Text style={{fontSize: 20}}>call you?</Text>
            </View>
            <TextInput
                style={{flex:1, alignSelf:'center',width:'70%',height: 40,borderBottomColor:"#1C4950", borderBottomWidth: 1}}
                onChangeText={text => onChangeText(text)}
                value={value} />
            <View style={{flex:5, alignItems:'center', }}>
                <Icon 
                    style={{paddingTop:20,}}
                    size={30}
                    color="pink"
                    name="check-circle"
                    // onPress={() => navigation.navigate("addGoalScreen")}
                />
            </View>
        </View>

    );
}

export default welcomeScreen;