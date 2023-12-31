import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {
  View,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import layout from '../theme/layout';
import ListCard from '../components/Cards/ListCard';
import ActionButton from 'react-native-action-button';
import colors from '../theme/colors';
import PlusIcon from '../components/SvgIcons/PlusIcon';
import {getGoals, deleteGoal} from '../database/GoalActions';
import {useEffect} from 'react';
import {getImageFromCategory} from '../utility/GlobalFunctions';
import moment from 'moment';
import TaskDeleteModal from '../components/Modals/TaskDeleteModal';

const MyGoalsHome = ({navigation}) => {
  const [myGoals, setMyGoals] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const WINDOWWIDTH = Dimensions.get('window').width;

  useEffect(() => {
    updateGoals();
  }, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      updateGoals();
    });
    return unsubscribe;
  }, [navigation]);

  const updateGoals = () => {
    getGoals().then((realmArr) => {
      const goalArray = realmArr.map((element, index) => {
        const {image, aspectRatio} = getImageFromCategory(element.category);
        return {
          id: element.id,
          key: index,
          imageUrl: image,
          imageAspectRatio: aspectRatio,
          title: element.name,
          description: element.description,
          buttonText: 'Remind me how?',
          subText: element.when,
          buttonOnPress: () => {
            navigation.navigate('MyGoalTask', {goal: element});
          },
        };
      });
      setMyGoals(goalArray);
    });
  };

  const onDeleteGoalPressed = (item) => {
    const itemToDelete = item ? item : selectedItem;

    deleteGoal(itemToDelete.id).then(() => {
      updateGoals();
    });
    setDeleteModal(false);
  };

  const RenderDeleteModal = ({visible, onDeletePress, onCancelPress}) => {
    return (
      <Modal visible={visible} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.themeColors.transparentLight,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
            }}
            onPressOut={() => {
              setDeleteModal(false);
            }}>
            <TaskDeleteModal
              onDeletePress={onDeletePress}
              onCancelPress={onCancelPress}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  const onCardPress = (item) => {
    navigation.navigate('GoalInfoScreen', {
      title: item.title,
      goalId: item.id,
      imageUrl: item.imageUrl,
      imageAspectRatio: item.imageAspectRatio,
      description: item.description,
    });
  };

  return (
    <SafeAreaView
      edges={['top']}
      style={{
        flex: 1,
      }}>
      <View style={{flex: 1}}>
        <RenderDeleteModal
          visible={deleteModal}
          onDeletePress={() => onDeleteGoalPressed()}
          onCancelPress={() => setDeleteModal(false)}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingHorizontal: layout.padding.screenHorizontal,
          }}>
          <Text
            style={{
              paddingBottom: layout.padding.medium,
              fontFamily: layout.fonts.nunito,
              fontSize: layout.fontSizes.header,
              color: colors.themeColors.primary,
            }}>
            My Goals
          </Text>
        </View>
        <View style={{flex: 6, justifyContent: 'center'}}>
          <View style={{padding: layout.padding.xxxLarge}} />
          <FlatList
            data={myGoals}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={
              <View
                style={{
                  flex: 1,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    marginHorizontal: WINDOWWIDTH / 3.4,
                    fontFamily: layout.fonts.nunito,
                    fontSize: layout.fontSizes.medium,
                    color: colors.themeColors.primary,
                  }}>
                  You have no goal yet :(
                </Text>
              </View>
            }
            keyExtractor={(item, index) => `${index}`}
            contentContainerStyle={{
              paddingHorizontal: layout.padding.medium,
            }}
            renderItem={({item, index}) => (
              <View style={{margin: layout.padding.large}}>
                {/* 👉  list card detail sent */}
                <ListCard
                  onDeletePress={(directDelete) => {
                    console.log('tadaa....', directDelete);
                    if (directDelete) {
                      onDeleteGoalPressed(item);
                    } else {
                      setSelectedItem(item);
                      setDeleteModal(true);
                    }
                  }}
                  imageUrl={item.imageUrl}
                  imageAspectRatio={item.imageAspectRatio}
                  title={item.title}
                  description={item.description}
                  buttonText={item.buttonText}
                  buttonOnPress={item.buttonOnPress}
                  subText={moment(item.subText).format('llll')}
                  onCardPress={() => onCardPress(item)}
                />
              </View>
            )}
            horizontal
          />
        </View>
      </View>
      <ActionButton
        onPress={() => navigation.navigate('GoalQuestionsNavigator')}
        buttonColor={colors.themeColors.pink}
        hideShadow={true}
        size={68}
        renderIcon={() => <PlusIcon />}
      />
    </SafeAreaView>
  );
};

export default MyGoalsHome;
