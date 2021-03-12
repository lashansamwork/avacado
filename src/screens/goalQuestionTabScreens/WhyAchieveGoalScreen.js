import React, {useState} from 'react';
import {
  TextInput,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import CheckCircle from '../../assets/images/CheckCircle';

const WhyAchieveGoalScreen = (onPress) => {
  const [reason, setReason] = useState('');
  const CHECK_BUTTON_OFFSET = '44%';
  const HEADING_GAP = '29.5%';
  const HEADING_OFFSET = '25.9%';
  return (
    <SafeAreaView
      style={{
        alignSelf: 'center',
        width: layout.screenWidth.medium,
        flexGrow: 1,
        flexDirection: 'column',
      }}>
      <View
        style={{
          flex: 9.2,
        }}>
        <View
          style={{
            flex: 16,
            justifyContent: 'flex-start',
          }}>
          <View style={{flexBasis: HEADING_OFFSET}} />
          <Text
            style={{
              flexBasis: HEADING_GAP,
              fontFamily: layout.fonts.nunito,
              color: colors.themeColors.primary,
              fontSize: layout.fontSizes.xxxLarge,
            }}>
            Why?
          </Text>
          <Text
            style={{
              fontFamily: layout.fonts.nunito,
              color: colors.themeColors.pink,
              fontSize: layout.fontSizes.header,
            }}>
            Why do you want to achieve it?
          </Text>
        </View>
        <View style={{flex: 18, alignItems: 'center'}}>
          <TextInput
            placeholder="Why do you want to do this? why do you think it’s important for you? keep asking yourself why Until you hit a value."
            multiline={true}
            placeholderTextColor={colors.themeColors.grey}
            style={{
              flex: 0.5,
              width: '100%',
              lineHeight: 20,
              fontSize: layout.fontSizes.medium,
            }}
            value={reason}
            onChangeText={(text) => {
              setReason(text);
            }}
          />
        </View>
      </View>
      <View
        style={{flex: 9, paddingHorizontal: layout.padding.screenHorizontal}}>
        <View style={{flex: 5}}>
          <View style={{flexBasis: CHECK_BUTTON_OFFSET}} />
          <TouchableOpacity
            onPress={() => {
              if (reason !== '') {
                onPress(reason);
              } else {
                Alert.alert(
                  'Reason is empty',
                  'Please provide a reason to remember why this goal important to you',
                  {cancelable: false},
                );
              }
            }}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <CheckCircle />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WhyAchieveGoalScreen;
