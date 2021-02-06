import React, {useState, useRef} from 'react';
import {Image, Text, TouchableOpacity, View, Animated} from 'react-native';

import {SwipeListView} from 'react-native-swipe-list-view';
import colors from '../../theme/colors';
import layout from '../../theme/layout';
const TouchableHighlightAnimated = Animated.createAnimatedComponent(
  TouchableOpacity,
);
import TaskView from './TaskView';

export default function TasksList() {
  const [listData, setListData] = useState([
    {
      key: '0',
      text: 'item #0',
    },
    {
      key: '1',
      text: 'item #1',
    },
  ]);

  const swipeAnimationArray = [
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
  ];

  const onRowDidOpen = (rowKey) => {
    console.log('This row opened', rowKey);
  };

  const renderItem = (data) => {
    let borderRadius = swipeAnimationArray[data.index].interpolate({
      inputRange: [0, 83],
      outputRange: [layout.taskCardRadius, 1],
      extrapolate: 'clamp',
    });

    return (
      <View
        style={{
          width: 300,
          alignSelf: 'center',
          height: 57,
        }}>
        <TouchableHighlightAnimated
          activeOpacity={0.8}
          onPress={() => console.log('You touched me')}
          style={{
            alignItems: 'center',
            backgroundColor: colors.themeColors.primary,
            borderBottomColor: 'black',
            justifyContent: 'center',
            borderRadius: borderRadius,
            height: 57,
          }}
          underlayColor={'rgba(255,255,255, 0.8)'}>
          <View>
            <TaskView />
          </View>
        </TouchableHighlightAnimated>
      </View>
    );
  };

  const Option = ({text}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width: layout.swipeButtonSize,
        backgroundColor: colors.themeColors.pink,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 1,
      }}
      onPress={() => {}}>
      <Text
        style={{
          color: colors.themeColors.secondary,
          fontSize: layout.fontSizes.xsmall,
          fontFamily: layout.fonts.nunito,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );

  const renderHiddenItem = (data, rowMap) => {
    let newOpacity = swipeAnimationArray[data.index].interpolate({
      inputRange: [0, 83],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        style={{
          alignItems: 'center',
          backgroundColor: colors.themeColors.secondary,
          height: 57,
          flex: 1,
          flexDirection: 'row',
          opacity: newOpacity,
          // paddingTop: layout.padding.large,
        }}>
        <Option text="Save" />
        <Option text="Edit" />
        <Option text="Delete" />
        <View style={{flex: 1}} />
      </Animated.View>
    );
  };

  return (
    <View style={{backgroundColor: colors.themeColors.secondary, flex: 1}}>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        ItemSeparatorComponent={() => (
          <View style={{padding: layout.padding.medium}} />
        )}
        onSwipeValueChange={({value, key}) => {
          swipeAnimationArray[key].setValue(value);
        }}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={
          layout.swipeButtonSize * 3 - layout.padding.screenHorizontal
        }
        rightOpenValue={0}
        previewRowKey={'0'}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
      />
    </View>
  );
}
