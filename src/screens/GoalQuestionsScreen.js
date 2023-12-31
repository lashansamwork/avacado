import React, {useState} from 'react';
import {Image, View, Dimensions, KeyboardAvoidingView} from 'react-native';
import layout from '../theme/layout';
import StepOne from '../assets/images/StepOne.png';
import StepTwo from '../assets/images/StepTwo.png';
import StepThree from '../assets/images/ThirdStep.png';
import {TabView, SceneMap} from 'react-native-tab-view';
import {getGoals} from '../database/GoalActions';
import WhatGoalToAchieveScreen from './goalQuestionTabScreens/WhatGoalToAchieveScreen';
import HowToAchieveGoalScreen from './goalQuestionTabScreens/HowToAchieveGoalScreen';
import WhyAchieveGoalScreen from './goalQuestionTabScreens/WhyAchieveGoalScreen';
import WhenToAchieveGoalScreen from './goalQuestionTabScreens/WhenToAchieveGoalScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useEffect} from 'react';
import {addToGoal} from '../database/GoalActions';
const LeftArrow = require('../assets/images/ArrowLeft.png');
const initialLayout = {width: Dimensions.get('screen').width};
const GoalQuestionsScreen = ({route, navigation}) => {
  const categoryId = route?.params?.categoryId;
  const [newTaskIndex, setNewTaskIndex] = useState([]);
  useEffect(() => {
    getGoals().then((realmArr) => {
      const indexArray = realmArr.map((element) => element.id);
      setNewTaskIndex(Math.max(...indexArray));
    });
  }, [route, navigation]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            setIndex((i) => {
              if (i - 1 < 0) {
                navigation.pop();
                return 0;
              } else {
                return i - 1;
              }
            });
          }}
          activeOpacity={0.8}>
          <View
            style={{
              aspectRatio: 1,
              height: layout.heights.xxxshort,
              marginLeft: 30,
            }}>
            <Image
              style={{flex: 1, width: null, height: null}}
              resizeMode="stretch"
              source={LeftArrow}
            />
          </View>
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#FFFFFF',
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
      },
      headerBackTitle: <></>,
      headerTitle: <></>,
    });
  }, [navigation]);

  const [index, setIndex] = React.useState(0);
  const PROGRESSBAR_HEIGHT = 3;
  const [routes] = React.useState([
    {key: 'what', title: 'WhenToAchieve'},
    {key: 'how', title: 'HowToAchieve'},
    {key: 'why', title: 'WhyAchieve'},
    {key: 'when', title: 'WhenToAchieve'},
  ]);
  const [goal, setGoal] = React.useState({
    name: null,
    category: route?.params?.category,
    when: null,
    tasks: [],
  });

  useEffect(() => {
    if (goal?.when) {
      addToGoal(goal);
      navigation.navigate('GoalAddedScreen');
      console.log('✅  Sent to Realm. New Goal : ', goal, '  ');
    }
  }, [goal, navigation]);

  const renderScene = SceneMap({
    what: () =>
      WhatGoalToAchieveScreen((goalName) => {
        setGoal({
          ...goal,
          name: goalName,
        });
        incrementIndex();
      }, categoryId),
    how: () =>
      HowToAchieveGoalScreen((tasks) => {
        setGoal({
          ...goal,
          tasks: [...tasks].map((item, i) => {
            return {id: i + newTaskIndex, ...item};
          }),
        });

        incrementIndex();
      }, goal.tasks),
    why: () =>
      WhyAchieveGoalScreen((why) => {
        setGoal({
          ...goal,
          description: why,
        });

        incrementIndex();
      }),
    when: () =>
      WhenToAchieveGoalScreen((when) => {
        setGoal({
          ...goal,
          when: when.timestamp,
        });
        console.log('goalQuestions : posted a new goal :', goal);
      }),
  });

  const PROGRESS_BARS = {
    0: StepOne,
    1: StepTwo,
    2: StepThree,
  };

  const getProgressBar = () => {
    return PROGRESS_BARS[index];
  };

  const incrementIndex = () => {
    setIndex(index + 1);
  };

  const renderTabBar = () => (
    <View
      style={{
        alignSelf: 'center',
        height: PROGRESSBAR_HEIGHT,
        aspectRatio: layout.imageAspectRatio.progressBar,
      }}>
      <Image
        source={getProgressBar(index)}
        style={{flex: 1, width: null, height: null}}
      />
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior="padding"
      keyboardVerticalOffset={10}>
      <TabView
        timingConfig={{duration: 0.000000001}}
        swipeVelocityImpact={0.0001}
        swipeEnabled={false}
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </KeyboardAvoidingView>
  );
};

export default GoalQuestionsScreen;
