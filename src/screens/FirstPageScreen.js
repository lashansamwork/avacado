import React from 'react';
import { StatusBar, SafeAreaView, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
const avacadoLogo = require('../assets/images/avocado-logo.png');
const girlCouchImage = require('../assets/images/girlSittingCouch3.png');
import CheckCircle from '../assets/images/CheckCircle';
import CustomTextInput from '../components/CustomTextInput';
import layout from '../theme/layout';
import colors from '../theme/colors';

const FirstPageScreen = ({ navigation }) => {
    const [name, setName] = React.useState('');
    // const GREEN_BACKGROUND_BOX_RATIO = {
    //     width: '100%', height: '51%',
    // }
    const COUCH_IMAGE_HEIGHT = '57%';
    const LOGO_OFFSET = 26;
    // const TEXT_OFFSET = 50;
    // const BTN_OFFSET = 50;
    const BACKGROUND_OFFSET = 50;

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
                    <View style={{  width: 200,  flex: 0.27, }}></View>
                    <View style={{ position: 'absolute', bottom: 0, zIndex: 1, height: COUCH_IMAGE_HEIGHT, aspectRatio: layout.imageAspectRatio.girlCouchImage }}>
                        <Image style={{ flex: 1, height: null, width: null }} resizeMode='stretch' source={girlCouchImage} />
                    </View>
                </View>

            </View>
            <View style={{ flex: 1, width: '100%', paddingHorizontal: layout.padding.screenHorizontal }}>
                <View style={{ flex: 0.17 }}></View>
                <Text style={{ lineHeight: 30, fontSize: layout.fontSizes.welcomeText, fontFamily: layout.fonts.nunito, color: colors.themeColors.primary }}>{`Hi there! I'm Jade.\nWhat do you want me to\ncall you?`}</Text>
                <View style={{ flex: 0.18 }}></View>
                <CustomTextInput placeholder="What do you want me to call you?" value={name} onChangeText={text => setName(text)} />
                <View style={{ flex: 0.22 }}></View>
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => navigation.navigate('GoalCategoryScreen')}>
                    <CheckCircle />
                </TouchableOpacity>
            </View>


            {/* <View style={{ position: 'absolute', top: 0, alignSelf: 'center', ...GREEN_BACKGROUND_BOX_RATIO, backgroundColor: colors.themeColors.primary, borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} />
            <StatusBar barStyle="light-content" />

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}  >
                <View style={{ height: layout.heights.mediumLow, aspectRatio: layout.imageAspectRatio.avacadoLogo }} >
                    <Image style={{ flex: 1, height: null, width: null }} resizeMode='stretch' source={avacadoLogo} />
                </View>
                <View style={{ height: COUCH_IMAGE_HEIGHT, aspectRatio: layout.imageAspectRatio.girlCouchImage }} >
                    <Image style={{ flex: 1, height: null, width: null }} resizeMode='stretch' source={girlCouchImage} />
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: 'space-evenly', width: '85%', }} >
                <View style={{flexBasis:30}}></View>
                <View style={{flex:0.25, justifyContent:'space-between' }}>
                    <Text style={{ fontSize: layout.fontSizes.welcomeText, fontFamily: 'Nunito-SemiBold', color: colors.themeColors.primary }}>Hi there! I'm Jade</Text>
                    <Text style={{ fontSize: layout.fontSizes.welcomeText, fontFamily: 'Nunito-SemiBold', color: colors.themeColors.primary }}>What do you want me to</Text>
                    <Text style={{ fontSize: layout.fontSizes.welcomeText, fontFamily: 'Nunito-SemiBold', color: colors.themeColors.primary }}>call you?</Text>
                </View>

                <View style={{flex:0.4, justifyContent:'center' }}>
                    <CustomTextInput
                        placeholder="test"
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                </View>

                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => navigation.navigate('GoalCategoryScreen')}>
                    <CheckCircle />
                </TouchableOpacity>
                <View style={{flexBasis:30}}></View>
            </View> */}
        </View>
    );
}

export default FirstPageScreen;