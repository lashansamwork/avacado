import {Dimensions} from 'react-native';
const MAGNIFIEDBY = 1.2;
const layout = {
  screenWidth: {
    full: '100%',
    narrow: '90%',
    medium: '85%',
    xxxSmall: '.41%',
  },
  padding: {
    xsmall: 3,
    small: 4,
    medium: 8,
    large: 12,
    xxxLarge: 20,
    xxxxLarge: 35,
    screenHorizontal: 37,
  },
  card: {
    width: 230,
    height: 386,
    taskHeight: 57,
  },
  radius: {
    image: 10,
  },
  imageAspectRatio: {
    avacadoLogo: 658 / 506,
    girlCouchImage: 519 / 441,
    tinyLine: 41 / 31,
    yogaGirl: 694 / 699,
    readingGirl: 694 / 699,
    readingGirlWithoutCircle: 270 / 265,
    yogaGirlWithoutCircle: 260 / 204,
    moneyGirlWithoutCirlce: 244 / 212,
    thinkingGirlWithoutCircle: 188 / 228,
    moneyGirl: 694 / 699,
    thinkingGirl: 694 / 699,
    progressBar: 945 / 15,
    svgHand: 13.724 / 15.855,
  },
  fontSizes: {
    xxsmall: 9 * MAGNIFIEDBY,
    xsmall: 10 * MAGNIFIEDBY,
    small: 11 * MAGNIFIEDBY,
    medium: 14 * MAGNIFIEDBY,
    xheader: 19.5 * MAGNIFIEDBY,
    header: 20 * MAGNIFIEDBY,
    mediumHigh: 14 * MAGNIFIEDBY,
    medium2: 16 * MAGNIFIEDBY,
    subText: 12 * MAGNIFIEDBY,
    large: 23 * MAGNIFIEDBY,
    xxxLarge: 39 * MAGNIFIEDBY,
    welcomeText: 20 * MAGNIFIEDBY,
  },
  imageSizes: {
    small: '10%',
    medium: 130,
    large: '2%',
    xLarge: 186,
    xxxLarge: 500,
  },
  dayCircle: {
    height: 68,
    width: 68,
    radius: 34,
  },
  autoImageSizes: {
    xsmall: Dimensions.get('screen').width / 10.7,
    small: Dimensions.get('screen').width / 3.13,
    medium: Dimensions.get('screen').height / 6.3,
    large: Dimensions.get('screen').height / 5,
    xxxxLarge: Dimensions.get('screen').width / 0.4443,
  },
  autoDisplacemets: {
    high: Dimensions.get('screen').width / 1,
    medium: Dimensions.get('screen').width / 2,
    xmedium: Dimensions.get('screen').width / 2.8,
    xxmedium: Dimensions.get('screen').width / 3.3,
    small: Dimensions.get('screen').width / 5,
  },
  heights: {
    seperatorHeight: 0.5,
    xxxshort: 16,
    xxshort: 30,
    short: 100,
    mediumLow: 120,
    medium: 200,
    tall: 300,
    xxtall: 440,
    backButton: 80,
  },
  fonts: {
    nunitoLight: 'Nunito-Light',
    nunito: 'Nunito-SemiBold',
    roboto: 'Roboto-Medium',
  },
  backgroundBorderRadius: 32,
  cardBoaderRadius: 50,
  defaultLineHeight: 30,
  buttonRadius: 17,
  taskCardRadius: 20,
  swipeButtonSize: 40,
};

export default layout;
