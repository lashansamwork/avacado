import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  View,
  KeyboardAvoidingView,
  Alert,
  Platform,
} from 'react-native';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import CheckCircle from '../../assets/images/CheckCircle';
import Svg, {Path} from 'react-native-svg';
import CustomTextInput from '../../components/CustomTextInput';
import {getCategoryData} from '../../assets/CategoryData';

const SvgHand = (style) => {
  return (
    <View style={style}>
      <Svg width="14" height="25.855" viewBox="0 0 13.724 15.855">
        <Path
          id="Path_2088"
          data-name="Path 2088"
          d="M545.261,1577.731a1.46,1.46,0,0,1-2.193-.731,1.46,1.46,0,0,1-2.193-.731,1.455,1.455,0,0,0-.731.2v-.522a8.689,8.689,0,0,0,1.945.384,1.793,1.793,0,1,0,0-3.586,8.75,8.75,0,0,0-1.962.39,1.46,1.46,0,0,0-2.887-.025,8.7,8.7,0,0,0-1.947-.385,1.793,1.793,0,0,0,0,3.586,8.671,8.671,0,0,0,1.926-.378v3.263h-.332a2.563,2.563,0,0,0-2.592,2.523,5.611,5.611,0,0,0,1.51,4.086,4.916,4.916,0,0,0,3.4,1.434h4.231a3.294,3.294,0,0,0,3.29-3.29v-4.753A1.464,1.464,0,0,0,545.261,1577.731Zm-2.121-3.2a1.053,1.053,0,0,1-1.052,1.051,6.961,6.961,0,0,1-1.945-.426v-1.25a6.955,6.955,0,0,1,1.945-.426A1.053,1.053,0,0,1,543.14,1574.536Zm-3.728.311c-.2-.111-.335-.219-.35-.311.015-.091.148-.2.35-.311Zm-1.462-1.5a.731.731,0,1,1,1.462,0v.058a2.992,2.992,0,0,0-.71.432,2.949,2.949,0,0,0-.752-.462Zm.37,1.171c-.016.095-.156.207-.37.322v-.645C538.164,1574.308,538.3,1574.421,538.32,1574.516Zm-3.027,1.051a1.051,1.051,0,0,1,0-2.1,6.94,6.94,0,0,1,1.926.419v1.264A6.93,6.93,0,0,1,535.293,1575.567Zm10.7,8.379a2.562,2.562,0,0,1-2.559,2.559H539.2a4.227,4.227,0,0,1-2.88-1.22,4.842,4.842,0,0,1-1.3-3.568,1.832,1.832,0,0,1,1.861-1.793h.332v1.828a.366.366,0,0,0,.731,0v-6.094a3.017,3.017,0,0,0,.73-.441,2.925,2.925,0,0,0,.733.453v5.351a.366.366,0,1,0,.731,0v-3.29a.731.731,0,1,1,1.462,0v3.29a.366.366,0,1,0,.731,0v-2.559a.731.731,0,0,1,1.462,0v2.559a.366.366,0,1,0,.731,0v-1.828a.731.731,0,0,1,1.462,0Z"
          transform="translate(-533.25 -1571.632)"
          fill="#ebbdbd"
          stroke="#ebbdbd"
          stroke-width="0.5"
        />
      </Svg>
    </View>
  );
};

const WhatGoalToAchieveScreen = (onPress, categoryId) => {
  const categoryData = getCategoryData(categoryId);
  const [goalName, onChangeGoalName] = useState('');
  const SAFEVIEW_OFFSET = 15;
  const HEADING_GAP = 50;
  const IMAGE_OFFSET = 20;
  const IMAGE_HEIGHT = layout.imageSizes.medium;
  const CUSTOM_INPUT_TEXT_GAP = 6;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <SafeAreaView style={{flexGrow: 1, marginTop: SAFEVIEW_OFFSET}}>
        <View
          style={{
            paddingHorizontal: layout.padding.screenHorizontal,
            paddingVertical: layout.padding.xxxLarge,
            flex: 1,
          }}>
          {/* title */}
          <View
            style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
            <Text
              style={{
                fontFamily: layout.fonts.nunito,
                color: colors.themeColors.primary,
                fontSize: layout.fontSizes.xxxLarge,
              }}>
              What?
            </Text>
            <Text
              style={{
                fontFamily: layout.fonts.nunito,
                color: colors.themeColors.pink,
                fontSize: layout.fontSizes.header,
              }}>
              What do you want to achieve?
            </Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                height: layout.autoImageSizes.large,
                aspectRatio: categoryData.aspectRatio,
              }}>
              <Image
                source={categoryData.imagePath}
                style={{flex: 1, height: null, width: null}}
                resizeMode="stretch"
              />
            </View>
          </View>
          {/* input */}
          <View style={{flex: 1}}>
            <CustomTextInput
              style={{width: '100%', justifyContent: 'flex-start'}}
              gap={CUSTOM_INPUT_TEXT_GAP}
              placeholder={categoryData.placeholder}
              value={goalName}
              onChangeText={(text) => onChangeGoalName(text)}
            />
            <View style={{paddingTop: layout.padding.medium}} />
            <SvgHand style={{aspectRatio: layout.imageAspectRatio.svgHand}} />
            <Text
              style={{
                color: colors.themeColors.pink,
                fontSize: layout.fontSizes.small,
              }}>
              {
                'Goals must be Specific, Measurement, Achievable, \nRelevant and Time based.'
              }
            </Text>
            <TouchableOpacity
              onPress={() => {
                if (goalName !== '') {
                  onPress(goalName);
                } else {
                  Alert.alert('Error', 'Please fill out the field', {
                    cancelable: false,
                  });
                }
              }}
              style={{
                paddingTop: layout.padding.large,
                alignSelf: 'center',
              }}>
              <CheckCircle />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default WhatGoalToAchieveScreen;
