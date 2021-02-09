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

const GoalQuestionsScreen = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const PROGRESSBAR_HEIGHT = 3;
  const [routes] = React.useState([
    {key: 'what', title: 'WhenToAchieve'},
    {key: 'how', title: 'HowToAchieve'},
    {key: 'why', title: 'WhyAchieve'},
    {key: 'when', title: 'WhenToAchieve'},
  ]);
  const renderScene = SceneMap({
    what: () => WhatGaolToAchieveScreen(() => incrementIndex()),
    how: () =>
      HowToAchieveGoalScreen(
        () => incrementIndex(),
        () => decrementIndex,
        {navigation},
      ),
    why: () =>
      WhyAchieveGoalScreen(
        () => incrementIndex(),
        () => decrementIndex,
        {navigation},
      ),
    when: () => WhenToAchieveGoalScreen({navigation}, () => decrementIndex),
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

  const decrementIndex = () => {
    setIndex(index - 1);
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
