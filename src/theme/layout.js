
import { Dimensions } from 'react-native';
const layout = {
  screenWidth: {
    full: '100%',
    narrow: '90%',
    medium: '85%',
    xxxSmall: '.41%'
  },
  padding: {
    small: 4,
    medium: 8,
    large: 12,
    xxxLarge: 20,
    xxxxLarge: 35,
  },
  radius: {
    image: 10
  },
  imageAspectRatio: {
    avacadoLogo: 658/506,
    girlCouchImage: 519 / 441,
    tinyLine: 41/31
  },
  fontSizes: {
    xsmall: 10,
    small: 11,
    medium: 14,
    welcomeText: 20,
    mediumHigh:15,
    large: 23,
    xxxLarge: 40,
  },
  imageSizes: {
    small: '10%',
    medium: 130,
    large: '2%',
    xLarge: 186,
    xxxLarge:500, 
  },
  autoImageSizes:{
    xsmall:Dimensions.get('screen').width/10.7,
    small:Dimensions.get('screen').width/3.13,
    medium:Dimensions.get('screen').width/3,
    large:Dimensions.get('screen').width/2.7,
    xxxxLarge:Dimensions.get('screen').width/0.4443,
  },
  autoDisplacemets:{
    high:Dimensions.get('screen').width/1,
    medium:Dimensions.get('screen').width/2,
    xmedium:Dimensions.get('screen').width/2.8,
    xxmedium:Dimensions.get('screen').width/3.3,
    small:Dimensions.get('screen').width/5,
  },
  heights: {
    xxxshort: 16,
    xxshort:30,
    short: 100,
    mediumLow:120,
    medium: 200,
    tall: 300,
    xxtall:440,
  }
};

export default layout;
