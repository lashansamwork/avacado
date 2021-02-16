import React from 'react';
import {Image, View, Dimensions} from 'react-native';
import layout from '../theme/layout';
import StepOne from '../assets/images/StepOne.png';
import StepTwo from '../assets/images/StepTwo.png';
import StepThree from '../assets/images/ThirdStep.png';
import {TabView, SceneMap} from 'react-native-tab-view';
const initialLayout = {width: Dimensions.get('screen').width};
import WhatGoalToAchieveScreen from './goalQuestionTabScreens/WhatGoalToAchieveScreen';
import HowToAchieveGoalScreen from './goalQuestionTabScreens/HowToAchieveGoalScreen';
import WhyAchieveGoalScreen from './goalQuestionTabScreens/WhyAchieveGoalScreen';
import WhenToAchieveGoalScreen from './goalQuestionTabScreens/WhenToAchieveGoalScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useEffect} from 'react';
const LeftArrow = require('../assets/images/ArrowLeft.png');

const GoalQuestionsScreen = ({route, navigation}) => {
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
    why: null,
    when: null,
    tasks: [],
  });

  const renderScene = SceneMap({
    what: () =>
      WhatGoalToAchieveScreen((goalName) => {
        setGoal({
          ...goal,
          name: goalName,
        });
        incrementIndex();
      }),
    how: () =>
      HowToAchieveGoalScreen((tasks) => {
        console.log('tasks', tasks);
        setGoal({
          ...goal,
          tasks: [...goal.tasks, ...tasks],
        });
        incrementIndex();
      }),
    why: () =>
      WhyAchieveGoalScreen((why) => {
        console.log('why', why);
        setGoal({
          ...goal,
          why: why,
        });
        incrementIndex();
      }),
    when: () =>
      WhenToAchieveGoalScreen((when) => {
        console.log('when', when);
        setGoal({
          ...goal,
          when: when,
        });
        incrementIndex();
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
    if (index + 1 >= routes.length) {
      console.log('goal', goal);
      navigation.navigate('GoalAddedScreen');
    } else {
      setIndex(index + 1);
    }
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
  );
};

export default GoalQuestionsScreen;
