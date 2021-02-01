import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, Image, View} from 'react-native';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import CheckCircle from '../../assets/images/CheckCircle';
import StepFour from '../../assets/images/stepFour.png';

const FourthRoute = ({navigation}) => {
  const [reason, onChangeReason] = useState('');
  setIndex = 1;
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
          aspectRatio: 945 / 15,
          height: layout.screenWidth.xxxSmall,
          alignSelf: 'center',
        }}>
        <Image
          style={{flex: 1, width: null, height: null}}
          source={StepFour}
          resizeMode="stretch"
        />
      </View>
      <View style={{flexShrink: 1}}>
        <Text
          style={{
            color: colors.themeColors.primary,
            paddingTop: layout.padding.xxxxLarge,
            fontSize: layout.fontSizes.xxxLarge,
            fontFamily: 'Nunito-SemiBold',
          }}>
          When?
        </Text>
        <Text
          style={{
            width: '85%',
            color: colors.themeColors.pink,
            fontSize: layout.fontSizes.large,
            fontFamily: 'Nunito-SemiBold',
          }}>
          When do you think you will have achieved it?
        </Text>
      </View>
      {/* need logic */}
      <View style={{flex: 7, justifyContent: 'center'}}>
        <View style={{padding: layout.padding.xxxLarge}} />
        <View
          style={{
            backgroundColor: colors.themeColors.primary,
            flex: 1,
            borderRadius: 50,
          }}>
          <Text style={{color: 'white', alignSelf: 'center'}}>
            Calendar View
          </Text>
        </View>
      </View>
      <View style={{flex: 1, paddingTop: layout.padding.large}} />
      <View
        style={{
          flex: 5,
          alignItems: 'center',
          paddingTop: layout.padding.xxxLarge,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('GoalAddedScreen')}>
          <CheckCircle />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FourthRoute;
