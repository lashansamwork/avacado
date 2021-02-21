import React, {useState, useRef} from 'react';
import {
  Modal,
  Image,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import TaskTimeModal from '../Modals/TaskTimeModal';
import TaskNameModal from '../Modals/TaskNameModal';
import {SwipeListView} from 'react-native-swipe-list-view';
import colors from '../../theme/colors';
import layout from '../../theme/layout';
const Tick = require('../../assets/images/TickIcon.png');
const TouchableHighlightAnimated = Animated.createAnimatedComponent(
  TouchableOpacity,
);
import TaskView from './TaskView';
import {useEffect} from 'react';

export default function TasksList({rawData}) {
  const [reminder, setReminder] = React.useState('');
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
        };
      });
      swipeAnimationArray.current = new Array(dataList.length).fill(
        new Animated.Value(0),
      );
      setListData(dataList);
    } else {
      setListData([]);
    }
  }, [rawData, swipeAnimationArray]);

  const [tasks, setTasks] = React.useState([]);
  const [task, setTask] = React.useState({name: null, dataTimes: []});
  const MODAL_OFFSET = 200;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalIndex, setModalIndex] = React.useState(0);

  const CustomModal = () => {
    if (modalIndex === 0) {
      return (
        <TaskNameModal
          onSubmit={
            ((taskName) => {
              setTask({
                ...task,
                name: taskName,
              });
              setModalIndex(1);
            },
            reminder)
          }
        />
      );
    }
    return (
      <TaskTimeModal
        onSubmit={(dateTimeObject) => {
          //dateTimeObject with date obj/repeatDays []/times int
          //todo conevert correct way;
          setTask({
            ...task,
            dataTimes: dateTimeObject,
          });
          setTasks([
            ...tasks, // tasks sent to goal
            {
              ...task,
              dataTimes: dateTimeObject,
            },
          ]);
          setModalIndex(0);
          setModalVisible(false);
        }}
      />
    );
  };

  const onRowDidOpen = (rowKey) => {};

  const renderItem = (data) => {
    let borderRadius = swipeAnimationArray.current[data.index].interpolate({
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
            <TaskView time={data.item.time} name={data.item.text} />
          </View>
        </TouchableHighlightAnimated>
      </View>
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
          <View style={{aspectRatio: 1, height: TICK_HEIGHT}}>
            <Image
              source={Tick}
              resizeMode="stretch"
              style={{width: null, height: null, flex: 1}}
            />
          </View>
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
    let newOpacity = swipeAnimationArray.current[data.index].interpolate({
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
          // paddingTop: layout.padding.`large`,
        }}>
        <Option
          showImage={true}
          onPress={() => {
            rowMap[data.item.key].closeRow();
            swipeAnimationArray.current[data.index].setValue(0);
          }}
        />
        <Option
          text="Edit"
          onPress={() => {
            setReminder(data.item.text);
            setModalVisible(true);
          }}
        />
        <Option text="Delete" />
        <View style={{flex: 1}} />
      </Animated.View>
    );
  };

  return (
    // list check rederItem, listData
    <View style={{backgroundColor: colors.themeColors.secondary, flex: 1}}>
      <SwipeListView
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
          swipeAnimationArray.current[key].setValue(value);
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
      <Modal
        transparent={true}
        visible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.themeColors.transparent,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            transparent={true}>
            <View style={{flexBasis: MODAL_OFFSET}} />
            <View>
              <CustomModal />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
