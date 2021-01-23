import React from 'react';
import { View, Image, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Svg, { Defs, ClipPath, Rect, Path, G } from 'react-native-svg';
const avacadoLogo = require('../assets/images/avocado-logo.png');
import layout from '../theme/layout';
import colors from '../theme/colors';

const SvgCloseButton = ({ style }) => {
    return (
        <View style={style}>
            <Svg id="Component_109_1" data-name="Component 109 – 1" width="31.688" height="31.688" viewBox="0 0 31.688 31.688">
                <Defs>
                    <ClipPath id="clip-path">
                        <Rect width="24" height="24" fill="none" />
                    </ClipPath>
                </Defs>
                <G id="add-button">
                    <Path id="Oval-8" d="M15.844,31.688A15.844,15.844,0,1,0,0,15.844,15.844,15.844,0,0,0,15.844,31.688Z" fill="#ebbdbd" fill-rule="evenodd" />
                </G>
                <G id="Icon_Close_Rounded" data-name="Icon / Close / Rounded" transform="translate(4.344 4)" clip-path="url(#clip-path)">
                    <Rect id="Box" width="24" height="24" fill="none" />
                    <Path id="Path_2016" data-name="Path 2016" d="M111.8,3.3a.967.967,0,0,0-1.4,0l-4.9,4.9-4.9-4.9a.99.99,0,0,0-1.4,1.4l4.9,4.9-4.9,4.9a.99.99,0,0,0,1.4,1.4l4.9-4.9,4.9,4.9a.99.99,0,1,0,1.4-1.4l-4.9-4.9,4.9-4.9A.967.967,0,0,0,111.8,3.3Z" transform="translate(-94 2)" fill="#1e535a" />
                </G>
            </Svg>
        </View>
    );
}


const AboutScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flexGrow: 1, alignItems: 'center', backgroundColor: colors.themeColors.primary }}>
            <View style={{ flex: 1, width: layout.screenWidth.narrow }}>
                <TouchableOpacity>
                    <SvgCloseButton style={{ flexShrink: 1, paddingTop: layout.padding.large }} />
                </TouchableOpacity>

                <Image style={{ flex: 1, alignSelf: 'center', width: layout.imageSizes.large, height: layout.imageSizes.large }} resizeMode='contain' source={avacadoLogo} />

                <Text style={{ flex: 0.3, fontSize: layout.fontSizes.large, fontFamily: 'Nunito-SemiBold', color: colors.themeColors.pink }}>Contact me</Text>
                <Text style={{ flex: 0.3, fontSize: layout.fontSizes.large, fontFamily: 'Nunito-SemiBold', color: colors.themeColors.pink }}>How it works?</Text>
                <Text style={{ flex: 0.3, fontSize: layout.fontSizes.large, fontFamily: 'Nunito-SemiBold', color: colors.themeColors.pink }}>Rate App</Text>
                <Text style={{ flex: 0.3, fontSize: layout.fontSizes.large, fontFamily: 'Nunito-SemiBold', color: colors.themeColors.pink }}>@AvocaDooApp on Instagram</Text>
                <Text style={{ flex: 0.3, fontSize: layout.fontSizes.large, fontFamily: 'Nunito-SemiBold', color: colors.themeColors.pink }}>@AvocaDooApp on Twitter</Text>
                <View style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Text style={{ fontSize: layout.fontSizes.xsmall, fontFamily: 'Nunito-SemiBold', color: colors.themeColors.pink }}>Version 00</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default AboutScreen;