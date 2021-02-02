import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import layout from '../theme/layout';
import colors from '../theme/colors';
import {FlatList} from 'react-native-gesture-handler';
import DaysList from '../components/DayElements/DaysList';

const MyTasksHome = ({navigation}) => {
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
          <View>
            <DaysList />
          </View>
          <View>
            <FlatList />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyTasksHome;
