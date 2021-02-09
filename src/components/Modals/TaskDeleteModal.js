import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import CustomTextInput from '../CustomTextInput';
import CheckCircle from '../../assets/images/CheckCircle';

const TaskDeleteModal = (props) => {
  const MODAL_RATIO = 302 / 167;
  const MODAL_WIDTH = '80.8%';
  const MODAL_RADIUS = 30;
  const MODAL_SHADOW_HEIGHT = 3;
  const TEXT_INPUT_OFFSET = 0;
  const PICKER_CONTAINER_WIDTH = '85%';
  const TEXT_GAP = 2;

  const [name, setName] = React.useState('');

  return (
    <View
      activeOpacity={1}
      style={{
        alignItems: 'center',
        aspectRatio: MODAL_RATIO,
        width: MODAL_WIDTH,
        backgroundColor: colors.themeColors.primary,
        borderRadius: MODAL_RADIUS,
        shadowColor: colors.themeColors.shadow,
        shadowOffset: {height: MODAL_SHADOW_HEIGHT},
      }}>
      <View style={{flex: 17, justifyContent: 'flex-end'}}>
        <Text
          style={{
            fontSize: layout.fontSizes.header,
            fontFamily: layout.fonts.nunito,
            color: colors.themeColors.pink,
            padding: layout.padding.large,
          }}>
          Delete this goal?
        </Text>
      </View>
      <View style={{flexBasis: TEXT_INPUT_OFFSET}} />
      <View
        style={{
          width: '21%',
          flex: 6,
          backgroundColor: colors.themeColors.pink,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={props.onDeletePress}>
          <Text
            style={{
              fontFamily: layout.fonts.nunito,
              color: colors.themeColors.primary,
            }}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 6,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
          width: PICKER_CONTAINER_WIDTH,
        }}>
        <TouchableOpacity onPress={props.onCancelPress}>
          <Text
            style={{
              fontFamily: layout.fonts.nunito,
              color: colors.themeColors.pink,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexBasis: 40}} />
    </View>
  );
};

export default TaskDeleteModal;
