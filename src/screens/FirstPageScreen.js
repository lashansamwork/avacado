import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
const avacadoLogo = require('../assets/images/avocado-logo.png');
const girlCouchImage = require('../assets/images/girlSittingCouch3.png');
import CheckCircle from '../assets/images/CheckCircle';
import CustomTextInput from '../components/CustomTextInput';
import layout from '../theme/layout';
import colors from '../theme/colors';

const FirstPageScreen = ({ navigation }) => {
    const [name, setName] = React.useState('');
    const COUCH_IMAGE_HEIGHT = '57%';
    const LOGO_OFFSET = 26;
    return (
        <View style={{ flex: 1, alignItems: 'center', }}>
            <View style={{  flex: 1.1, width: '100%', }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: colors.themeColors.primary,width:'100%' }}>
                    <View style={{ flexBasis: LOGO_OFFSET }}></View>
                        <View style={{ height: layout.heights.mediumLow, aspectRatio: layout.imageAspectRatio.avacadoLogo }} >
                            <Image style={{ flex: 1, height: null, width: null }} resizeMode='stretch' source={avacadoLogo} />
                        </View> 
                    </View>
                    <View style={{ flex: 1.15, alignItems: 'center', backgroundColor: colors.themeColors.primary, width: '100%', borderBottomRightRadius: layout.backgroundBorderRadius, borderBottomLeftRadius: layout.backgroundBorderRadius }}></View>
                    <View style={{ flex: 0.27, }}></View>
                    <View style={{ position: 'absolute', bottom: 0, zIndex: 1, height: COUCH_IMAGE_HEIGHT, aspectRatio: layout.imageAspectRatio.girlCouchImage }}>
                        <Image style={{ flex: 1, height: null, width: null }} resizeMode='stretch' source={girlCouchImage} />
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, width: '100%', paddingHorizontal: layout.padding.screenHorizontal }}>
                <View style={{ flex: 0.17 }}></View>
                <Text style={{ lineHeight: layout.defaultLineHeight, fontSize: layout.fontSizes.welcomeText, fontFamily: layout.fonts.nunito, color: colors.themeColors.primary }}>{`Hi there! I'm Jade.\nWhat do you want me to\ncall you?`}</Text>
                <View style={{ flex: 0.18 }}></View>
                <CustomTextInput placeholder="What do you want me to call you?" value={name} onChangeText={text => setName(text)} />
                <View style={{ flex: 0.22 }}></View>
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => navigation.navigate('AddGoalScreen')}>
                    <CheckCircle />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default FirstPageScreen;