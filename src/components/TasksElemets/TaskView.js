import React from 'react';
import {View, Text, Image} from 'react-native';
import readingGirl from '../../assets/images/ReadingGirlWithoutCircle.png';
import colors from '../../theme/colors';
import layout from '../../theme/layout';

const TaskView = () => {
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
          aspectRatio: layout.imageAspectRatio.readingGirlWithoutCircle,
          height: '90%',
        }}>
        <Image
          source={readingGirl}
          style={{height: null, width: null, flex: 1}}
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
          Task Name
        </Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
        <Text
          style={{
            color: colors.themeColors.pink,
            fontSize: layout.fontSizes.xsmall,
            fontFamily: layout.fonts.nunito,
          }}>
          2:00 pm
        </Text>
        <View style={{flexBasis: TIME_OFFSET}} />
      </View>
    </View>
  );
};

export default TaskView;
