import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import CustomTextInput from '../CustomTextInput';
import CheckCircle from '../../assets/images/CheckCircle';

const TaskNameModal = ({onSubmit}) => {
  const MODAL_RATIO = 302 / 384;
  const MODAL_WIDTH = '80.8%';
  const MODAL_RADIUS = 30;
  const MODAL_SHADOW_HEIGHT = 3;
  const TEXT_INPUT_OFFSET = 30;
  const PICKER_CONTAINER_WIDTH = '85%';
  const TEXT_GAP = 2;
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState(false);

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
      <View style={{flex: 7, justifyContent: 'flex-end'}}>
        <Text
          style={{
            fontSize: layout.fontSizes.welcomeText,
            fontFamily: layout.fonts.nunito,
            color: colors.themeColors.pink,
          }}>
          What is the task name?
        </Text>
      </View>
      <View style={{flexBasis: TEXT_INPUT_OFFSET}} />
      <View
        style={{
          width: '60%',
          flexShrink: 1,
          borderBottomColor: colors.themeColors.pink,
          borderBottomWidth: 1,
          alignItems: 'center',
        }}>
        <CustomTextInput
          textColor={colors.themeColors.secondary}
          style={{
            color: colors.themeColors.secondary,
            borderBottomWidth: 10,
            borderBottomColor: 'red',
          }}
          gap={TEXT_GAP}
          placeholder="Enter the task name in here"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      {!error && (
        <View
          style={{
            flexBasis: 30,
            width: '100%',
          }}
        />
      )}
      {error && (
        <Text
          style={{
            lineHeight: layout.defaultLineHeight,
            fontSize: layout.fontSizes.welcomeText,
            fontFamily: layout.fonts.nunito,
            color: colors.themeColors.error,
          }}>
          Name cannot be empty
        </Text>
      )}
      <View
        style={{
          flex: 11,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
          width: PICKER_CONTAINER_WIDTH,
        }}>
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => {
            if (name && name !== '') {
              // name not empty do
              onSubmit(name);
            } else {
              setError(true);
            }
            console.log('state: error', error);
            console.log('state: name ', name);
          }}>
          <CheckCircle />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskNameModal;
