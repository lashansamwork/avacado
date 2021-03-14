import React, {useState, useRef} from 'react';
import {
  Modal,
  Image,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Pressable,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import colors from '../../theme/colors';
import layout from '../../theme/layout';
import TaskItem from '../TaskItem';
import Tick from '../SvgIcons/TickIcon';
const TouchableHighlightAnimated = Animated.createAnimatedComponent(
  TouchableOpacity,
);
import TaskView from './TaskView';
import {useEffect} from 'react';

export default function TasksList({
  rawData,
  onDeletePress,
  onEditPress,
  onAddTaskPress,
}) {
  const [listData, setListData] = useState([]);
  const swipeAnimationArray = useRef([]).current;
  const TICK_HEIGHT = '40%';

  useEffect(() => {
    if (rawData && rawData.length > 0) {
      const dataList = rawData.map((element, index) => {
        return {
          id: element.id,
          key: index,
          text: element.name,
          time: element.epochTime,
          animation: new Animated.Value(0),
        };
      });
      setListData(dataList);
    } else {
      setListData([]);
    }
  }, [rawData, swipeAnimationArray]);

  const onRowDidOpen = (rowKey) => {};

  const renderItem = (data) => {
    let borderRadius = data.item.animation.interpolate({
      inputRange: [0, 83],
      outputRange: [layout.taskCardRadius, 1],
      extrapolate: 'clamp',
    });

    let translateX = data.item.animation.interpolate({
      inputRange: [0, 83],
      outputRange: [0, -(layout.swipeButtonSize + 14)],
      extrapolate: 'clamp',
    });

    return (
      <TouchableHighlightAnimated
        activeOpacity={0.8}
        onPress={() => console.log('You touched me')}
        style={{
          transform: [
            {
              translateX: translateX,
            },
          ],
          width: 300,
          alignSelf: 'center',
          alignItems: 'center',
          backgroundColor: colors.themeColors.primary,
          borderBottomColor: 'black',
          justifyContent: 'center',
          borderRadius: borderRadius,
          height: 57,
        }}
        underlayColor={'rgba(255,255,255, 0.8)'}>
        <View>
          <TaskView time={data.item.time} name={data.item.text} />
        </View>
      </TouchableHighlightAnimated>
    );
  };

  const Option = ({text, onPress, showImage}) => {
    if (showImage) {
      return (
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
          onPress={onPress}>
          <Tick />
        </TouchableOpacity>
      );
    } else {
      return (
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
          // action for hidden menu items
          onPress={() => {
            onPress();
          }}>
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
    }
  };

  const renderHiddenItem = (data, rowMap) => {
    let newOpacity = data.item.animation.interpolate({
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
        }}>
        <Option
          showImage={true}
          onPress={() => {
            console.log('checkmark pressed');
            rowMap[data.item.key].closeRow();
            data.item.animation.setValue(0);
          }}
        />
        <Option
          text="Edit"
          onPress={() => {
            onEditPress && onEditPress(rawData[data.index]);
          }}
        />
        <Option
          text="Delete"
          onPress={() => {
            onDeletePress && onDeletePress(rawData[data.index]);
          }}
        />
        <View style={{flex: 1}} />
      </Animated.View>
    );
  };

  return (
    // list check rederItem, listData
    <View style={{backgroundColor: colors.themeColors.secondary, flex: 1}}>
      <SwipeListView
        ListHeaderComponent={
          onAddTaskPress && (
            <View style={{alignSelf: 'center', width: 300}}>
              <TaskItem
                style={{height: 57, marginBottom: layout.padding.large}}
                label="+Add Task/Habit"
                backgroundColor={colors.themeColors.pink}
                fontColor={colors.themeColors.primary}
                onPress={onAddTaskPress}
              />
            </View>
          )
        }
        ListEmptyComponent={
          <View style={{width: '100%', alignItems: 'center'}}>
            <Text style={layout.fonts.nunito}>No Tasks Available</Text>
          </View>
        }
        keyExtractor={(item, index) => `${index}`}
        data={listData}
        renderItem={renderItem}
        ItemSeparatorComponent={() => (
          <View style={{padding: layout.padding.medium}} />
        )}
        onSwipeValueChange={({value, key}) => {
          const arrayIndex = parseInt(key);
          listData[arrayIndex]?.animation.setValue(value);
        }}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={layout.swipeButtonSize * 3}
        rightOpenValue={0}
        previewRowKey={'0'}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
      />
    </View>
  );
}
