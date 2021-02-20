import React from 'react';
import {StatusBar, Text, TouchableOpacity, Image, View} from 'react-native';
const YogaGirl = require('../assets/images/YogaGirl.png');
const ThinkingGirl = require('../assets/images/ThinkingGirl.png');
const MoneyGirl = require('../assets/images/MoneyGirl.png');
import layout from '../theme/layout';
import colors from '../theme/colors';

const categoryData = {
  readingGirl: {
    image: require('../assets/images/ReadingGirl.png'),
    title: 'Career & Education',
    placeholder: 'Save $1,500 i a month',
  },
};

const GoalCategoryScreen = ({navigation}) => {
  const YOGA_GIRL_SIDE_OFFSET = -13;
  const TEXT_OFFSET = 5;
  const READING_GIRL_OFFSET = 13;
  const FINANCE_GIRL_OFFSET = 10;
  return (
    <View style={{flexGrow: 1}}>
      <StatusBar barStyle="dark-content" />
      <View style={{flex: 3, alignItems: 'center'}}>
        <Text
          style={{
            position: 'absolute',
            bottom: 0,
            fontFamily: layout.fonts.nunito,
            fontSize: layout.fontSizes.welcomeText,
            color: colors.themeColors.primary,
          }}>
          Goal categories
        </Text>
      </View>
      <View style={{flex: 23}}>
        <View style={{flex: 1}} />
        <TouchableOpacity
          style={{flex: 7, alignItems: 'center'}}
          // <<<<<<< HEAD
          onPress={() =>
            navigation.navigate('GoalQuestionsScreen', {
              category: 'Physical & Health',
              categoryId: 0,
            })
          }>
          {/* =======
          onPress={() => {
            navigation.navigate('GoalQuestionsScreen', {
              itemId: 0,
            });
          }}>
>>>>>>> origin/code/category-dynamic */}
          <View
            style={{
              height: layout.autoImageSizes.medium,
              aspectRatio: layout.imageAspectRatio.yogaGirl,
            }}>
            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                left: YOGA_GIRL_SIDE_OFFSET,
              }}
              source={YogaGirl}
              resizeMode="stretch"
            />
          </View>
          <View style={{flexBasis: TEXT_OFFSET}} />
          <Text
            style={{
              fontFamily: layout.fonts.nunito,
              fontSize: layout.fontSizes.mediumHigh,
              color: colors.themeColors.primary,
            }}>
            Physical &amp; Health
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{flex: 7, alignItems: 'center'}}
          // <<<<<<< HEAD
          onPress={() =>
            navigation.navigate('GoalQuestionsScreen', {
              category: 'Career & Educational',
              categoryId: 1,
            })
          }>
          {/* =======
          onPress={() => {
            navigation.navigate('GoalQuestionsScreen', {
              itemId: 1,
            });
          }}>
>>>>>>> origin/code/category-dynamic */}
          <View style={{flexBasis: READING_GIRL_OFFSET}} />
          <View
            style={{
              height: layout.autoImageSizes.medium,
              aspectRatio: layout.imageAspectRatio.readingGirl,
            }}>
            <Image
              style={{flex: 1, height: null, width: null}}
              source={categoryData.readingGirl.image}
              resizeMode="stretch"
            />
          </View>
          <View style={{flexBasis: TEXT_OFFSET}} />
          <Text
            style={{
              fontFamily: layout.fonts.nunito,
              fontSize: layout.fontSizes.mediumHigh,
              color: colors.themeColors.primary,
            }}>
            Career &amp; Educational
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 7, alignItems: 'center'}}
          // <<<<<<< HEAD
          onPress={() =>
            navigation.navigate('GoalQuestionsScreen', {
              category: 'Finance',
              categoryId: 2,
            })
          }>
          {/* =======
          onPress={() => {
            navigation.navigate('GoalQuestionsScreen', {
              itemId: 2,
            });
          }}>
>>>>>>> origin/code/category-dynamic */}
          <View style={{flexBasis: FINANCE_GIRL_OFFSET}} />
          <View
            style={{
              height: layout.autoImageSizes.medium,
              aspectRatio: layout.imageAspectRatio.moneyGirl,
            }}>
            <Image
              source={MoneyGirl}
              style={{flex: 1, height: null, width: null}}
              resizeMode="stretch"
            />
          </View>
          <View style={{flexBasis: TEXT_OFFSET}} />
          <Text
            style={{
              fontFamily: layout.fonts.nunito,
              fontSize: layout.fontSizes.mediumHigh,
              color: colors.themeColors.primary,
            }}>
            Finance
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 7, alignItems: 'center'}}
          // <<<<<<< HEAD
          onPress={() =>
            navigation.navigate('GoalQuestionsScreen', {
              category: 'Self Growth',
              categoryId: 3,
            })
          }>
          {/* =======
          onPress={() => {
            navigation.navigate('GoalQuestionsScreen', {
              itemId: 3,
            });
          }}>
>>>>>>> origin/code/category-dynamic */}
          <View
            style={{
              height: layout.autoImageSizes.large,
              aspectRatio: layout.imageAspectRatio.thinkingGirl,
            }}>
            <Image
              source={ThinkingGirl}
              style={{flex: 1, height: null, width: null}}
              resizeMode="stretch"
            />
          </View>
          <Text
            style={{
              fontFamily: layout.fonts.nunito,
              fontSize: layout.fontSizes.mediumHigh,
              color: colors.themeColors.primary,
            }}>
            Self Growth
          </Text>
        </TouchableOpacity>
        <View style={{flex: 1.0}} />
      </View>
    </View>
  );
};
export default GoalCategoryScreen;
