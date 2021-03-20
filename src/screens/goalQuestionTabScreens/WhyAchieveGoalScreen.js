import React, {useState} from 'react';
import {
  TextInput,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import CheckCircle from '../../assets/images/CheckCircle';

const WhyAchieveGoalScreen = (onPress) => {
  const [reason, setReason] = useState('');
  const SAFEVIEW_OFFSET = 15;
  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        marginTop: SAFEVIEW_OFFSET,
      }}>
      <View
        style={{
          paddingHorizontal: layout.padding.screenHorizontal,
          paddingVertical: layout.padding.xxxLarge,
          flex: 1,
        }}>
        {/* title */}
        <View style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
          <Text
            style={{
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
        <View style={{flex: 1}}>
          <View
            style={{
              paddingTop: layout.padding.xxxxLarge,
              paddingBottom: layout.padding.large,
              flex: 1,
            }}>
            <TextInput
              placeholder="Why do you want to do this? why do you think it’s important for you? keep asking yourself why Until you hit a value."
              multiline={true}
              placeholderTextColor={colors.themeColors.grey}
              style={{
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
          <TouchableOpacity
            onPress={() => {
              if (reason !== '') {
                onPress(reason);
              } else {
                Alert.alert('Error', 'Please fill out the field', {
                  cancelable: false,
                });
              }
            }}
            style={{
              flex: 1,
              alignSelf: 'center',
            }}>
            <CheckCircle />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WhyAchieveGoalScreen;
