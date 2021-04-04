import React from 'react';
import {View, Text, Image, Alert} from 'react-native';
import layout from '../theme/layout';
import colors from '../theme/colors';
import LeftArrow from '../components/NavBar/LeftArrow';
import CustomTextInput from '../components/CustomTextInput';
import {TextInput} from 'react-native-gesture-handler';
import {useState} from 'react';
import {updateGoal} from '../database/GoalActions';

const GoalInfoScreen = ({navigation, route}) => {
  const title = route?.params?.title;
  const description = route?.params?.description;
  const goalId = route?.params?.goalId;
  const imageUrl = route?.params?.imageUrl;
  const imageAspectRatio = route?.params?.imageAspectRatio;
  const [currentTitle, setTitle] = useState(title);
  const [currentDescription, setDescription] = useState(description);
  const [hasUnsavedChanges, sethasUnsavedChanges] = useState(false);

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (!hasUnsavedChanges) {
          // If we don't have unsaved changes, then we don't need to do anything
          return;
        }

        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          'Save your changes?',
          'You have unsaved changes. Do you want to save those changes?',
          [
            {
              text: 'Yes',
              style: 'cancel',
              onPress: () => {
                const updatedGoal = {
                  name: currentTitle,
                  description: currentDescription,
                };
                updateGoal(goalId, updatedGoal).then((item) => {
                  console.log('testing.... ', item);
                  navigation.dispatch(e.data.action);
                });
              },
            },
            {
              text: 'Discard',
              style: 'destructive',
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: () => navigation.dispatch(e.data.action),
            },
          ],
        );
      }),
    [navigation, hasUnsavedChanges, currentTitle, currentDescription, goalId],
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <LeftArrow onNavigation={() => navigation.pop()} />,
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

  return (
    <View
      style={{
        paddingHorizontal: layout.padding.screenHorizontal,
        flex: 1,
        alignItems: 'flex-start',
      }}>
      <View
        style={{
          flex: 6,
          justifyContent: 'center',
          fontFamily: layout.fonts.nunito,
          color: colors.themeColors.primary,
        }}>
        <Text
          style={{
            fontFamily: layout.fonts.nunito,
            color: colors.themeColors.primary,
            fontSize: layout.fontSizes.xheader,
          }}>
          My Why
        </Text>
      </View>
      <View
        style={{
          flex: 11,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: layout.autoImageSizes.large,
            aspectRatio: imageAspectRatio,
          }}>
          <Image
            source={imageUrl}
            style={{width: null, height: null, flex: 1}}
            resizeMode="stretch"
          />
        </View>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
        }}>
        <TextInput
          style={{
            fontFamily: layout.fonts.nunito,
            color: colors.themeColors.primary,
            fontSize: layout.fontSizes.xheader,
          }}
          placeholder={'Title'}
          value={currentTitle}
          onChangeText={(text) => {
            sethasUnsavedChanges(true);
            setTitle(text);
          }}
        />
      </View>

      <View
        style={{
          flex: 17,
        }}>
        <TextInput
          style={{
            fontSize: layout.fontSizes.xsmall,
            fontFamily: layout.fonts.nunito,
            color: colors.themeColors.transparent,
          }}
          placeholder={'Description'}
          value={currentDescription}
          onChangeText={(text) => {
            sethasUnsavedChanges(true);
            setDescription(text);
          }}
        />
      </View>
    </View>
  );
};

export default GoalInfoScreen;
