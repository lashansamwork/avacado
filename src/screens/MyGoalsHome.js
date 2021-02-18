import React, {useState} from 'react';
import {SafeAreaView, Image} from 'react-native';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import layout from '../theme/layout';
import ListCard from '../components/Cards/ListCard';
const YogaGirl = require('../assets/images/YogaGirl.png');
const ReadingGirl = require('../assets/images/ReadingGirl.png');
import ActionButton from 'react-native-action-button';
import colors from '../theme/colors';
import PlusIcon from '../components/SvgIcons/PlusIcon';
import {getGoals} from '../database/GoalActions';
import {useEffect} from 'react';

const MyGoalsHome = ({navigation}) => {
  const [myGoals, setMyGoals] = useState([]);

  useEffect(() => {
    getGoals().then((realmArr) => {
      realmArr.forEach((element, index) => {
        setMyGoals([
          ...myGoals,
          {
            key: index,
            imageUrl: ReadingGirl,
            imageAspectRatio: layout.imageAspectRatio.readingGirl,
            title: element.name,
            description: element.description,
            buttonText: 'Remind me how?',
            subText: element.when,
            buttonOnPress: () => {},
          },
        ]);
      });
    });
  }, []);

  console.log(
    '🚀 ~ file: MyGoalsHome.js ~ line 16 ~ MyGoalsHome ~ myGoals',
    myGoals,
  );

  useEffect(() => {
    getGoals().then((test) => {
      test.forEach((e) => console.log('testing....', e));
    });
  }, []);

  // const [myGoals, setMyGoals] = useState(MY_GOALS);
  // const MY_GOALS = [];

  // useEffect(() => {
  //   getGoals().then((realmArr) => {
  //     realmArr.forEach((element) => {
  //       console.log('MyGoalsHome: realm: getData: element = ', element);
  //       MY_GOALS.push({
  //         imageUrl: ReadingGirl,
  //         imageAspectRatio: layout.imageAspectRatio.readingGirl,
  //         title: element.name,
  //         description: element.description,
  //         buttonText: 'Remind me how?',
  //         subText: 'june 5th  ',
  //         buttonOnPress: () => {},
  //       });
  //       setMyGoals(MY_GOALS);
  //     });
  //   });
  // });

  // const getData = () => {
  //   getGoals().then((realmArr) => {
  //     realmArr.forEach((element) => {
  //       console.log('MyGoalsHome: realm: getData: element = ', element);
  //       MY_GOALS.push({
  //         imageUrl: ReadingGirl,
  //         imageAspectRatio: layout.imageAspectRatio.readingGirl,
  //         title: element.name,
  //         description: element.description,
  //         buttonText: 'Remind me how?',
  //         subText: 'june 5th 2020',
  //         buttonOnPress: () => {},
  //       });
  //     });
  //   });
  // };

  return (
    <SafeAreaView
      edges={['top']}
      style={{
        flex: 1,
      }}>
      <View style={{flex: 1}}>
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
              width: '100%',
            }}
            renderItem={({item, index}) => (
              <View style={{margin: layout.padding.large}}>
                {/* 👉  list card detail sent */}
                <ListCard
                  imageUrl={item.imageUrl}
                  imageAspectRatio={item.imageAspectRatio}
                  title={item.title}
                  description={item.description}
                  buttonText={item.buttonText}
                  buttonOnPress={item.buttonOnPress}
                  subText={item.subText}
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
