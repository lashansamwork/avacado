import React from 'react';
import {View, Text, Image} from 'react-native';
import readingGirl from '../../assets/images/ReadingGirlWithoutCircle.png';
import moneyGirl from '../../assets/images/MoneyGirlWithoutCircle.png';
import yogaGirl from '../../assets/images/YogaGirlWithoutCircle.png';
import thinkingGirl from '../../assets/images/ThinkingGirlWithoutCircle.png';
import colors from '../../theme/colors';
import layout from '../../theme/layout';
import moment from 'moment';
const TaskView = ({name, time, category}) => {
  let IMAGE = null;
  let ASPECT_RATIO = null;
  if (category === 'Finance') {
    IMAGE = moneyGirl;
    ASPECT_RATIO = layout.imageAspectRatio.moneyGirlWithoutCirlce;
  } else if (category === 'Self Growth') {
    IMAGE = thinkingGirl;
    ASPECT_RATIO = layout.imageAspectRatio.thinkingGirlWithoutCircle;
  } else if (category === 'Career & Educational') {
    IMAGE = readingGirl;
    ASPECT_RATIO = layout.imageAspectRatio.readingGirlWithoutCircle;
  } else if (category === 'Physical & Health') {
    IMAGE = yogaGirl;
    ASPECT_RATIO = layout.imageAspectRatio.yogaGirlWithoutCircle;
  }
  const TIME_OFFSET = 20;
  return (
    <View
      style={{
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <View
        style={{
          aspectRatio: ASPECT_RATIO,
          height: '90%',
        }}>
        <Image
          source={IMAGE}
          style={{height: null, width: null, flex: 1, marginLeft: 15}}
          resizeMode="stretch"
        />
      </View>
      <View style={{alignItems: 'flex-start', width: '60%'}}>
        <Text
          style={{
            color: colors.themeColors.secondary,
            fontFamily: layout.fonts.nunito,
            paddingLeft: layout.padding.large,
          }}>
          {name}
        </Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
        <Text
          style={{
            color: colors.themeColors.pink,
            fontSize: layout.fontSizes.xsmall,
            fontFamily: layout.fonts.nunito,
          }}>
          {moment(time).format('LT')}
        </Text>
        <View style={{flexBasis: TIME_OFFSET}} />
      </View>
    </View>
  );
};

export default TaskView;
