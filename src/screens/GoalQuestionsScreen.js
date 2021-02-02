import React from 'react';
import {Image, View, Dimensions} from 'react-native';
import layout from '../theme/layout';
import StepOne from '../assets/images/stepOne.png';
import StepTwo from '../assets/images/stepTwo.png';
import StepThree from '../assets/images/thirdStep.png';
import {TabView, SceneMap} from 'react-native-tab-view';
const initialLayout = {width: Dimensions.get('screen').width};
import FirstRoute from './goalQuestionTabScreens/FirstRoute';
import SecondRoute from './goalQuestionTabScreens/SecondRoute';
import ThirdRoute from './goalQuestionTabScreens/ThirdRoute';
import FourthRoute from './goalQuestionTabScreens/FourthRoute';

const GoalQuestionsScreen = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const PROGRESSBAR_HEIGHT = 3;
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
    {key: 'third', title: 'third'},
    {key: 'fourth', title: 'fourth'},
  ]);
  const renderScene = SceneMap({
    first: () => FirstRoute(() => incrementIndex()),
    second: () => SecondRoute(() => incrementIndex()),
    third: () => ThirdRoute(() => incrementIndex()),
    fourth: () => FourthRoute({navigation}),
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
