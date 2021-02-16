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
  let MY_GOALS = [];

  const getData = () => {
    getGoals().then((realmArr) => {
      console.log('realmArr lenght', realmArr.length);
      console.log('realmArr value', realmArr);
      realmArr.forEach((e) => {
        MY_GOALS.push({
          imageUrl: ReadingGirl,
          imageAspectRatio: layout.imageAspectRatio.readingGirl,
          title: e.name,
          description: e.why,
          buttonText: 'Remind me how?',
          subText: 'june 5th 2020',
          buttonOnPress: () => {},
        });
      });
    });
  };

  getData();

  console.log(MY_GOALS, 'my Goals');
  MY_GOALS.forEach((e) => {
    console.log(e);
  });
  const [myGoals, setMyGoals] = useState(MY_GOALS);

  useEffect(() => {
    getGoals().then((test) => {
      test.forEach((e) => console.log(e));
    });
  }, []);

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
