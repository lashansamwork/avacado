import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import layout from '../theme/layout';
import colors from '../theme/colors';
import {FlatList} from 'react-native-gesture-handler';
import DaysList from '../components/DayElements/DaysList';

const MyTasksHome = ({navigation}) => {
  const onDatePress = (item) => {
    console.log(
      '🚀 ~ file: MyTasksHome.js ~ line 10 ~ onDatePress ~ item',
      item,
    );
  };

  return (
    <SafeAreaView
      edges={['top']}
      style={{
        flex: 1,
      }}>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingHorizontal: layout.padding.screenHorizontal,
          }}>
          <Text
            style={{
              paddingBottom: layout.padding.medium,
              fontFamily: layout.fonts.nunito,
              fontSize: layout.fontSizes.header,
              color: colors.themeColors.primary,
            }}>
            My Tasks
          </Text>
        </View>
        <View style={{flex: 6, justifyContent: 'center'}}>
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
            }}>
            <View>
              <DaysList initialSelect="Sun" onPress={onDatePress} />
            </View>
          </View>
          <View style={{flex: 2.8, borderWidth: 1}}>
            <FlatList />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyTasksHome;
