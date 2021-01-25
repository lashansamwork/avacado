
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
  fontSizes: {
    xsmall: 10,
    small: 11,
    medium: 14,
    large: 20,
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
    xsmall:Dimensions.get('window').width/10.7,
    small:Dimensions.get('window').width/3.13,
    medium:Dimensions.get('window').width/3,
    large:Dimensions.get('window').width/2.7,
    xxxxLarge:Dimensions.get('window').width/0.4443,
  },
  autoDisplacemets:{
    high:Dimensions.get('window').width/1,
    medium:Dimensions.get('screen').width/2,
    xmedium:Dimensions.get('screen').width/2.8,
    xxmedium:Dimensions.get('screen').width/3.3,
    small:Dimensions.get('screen').width/5,
  },
  heights: {
    xxshort:30,
    short: 100,
    mediumLow:130,
    medium: 200,
    tall: 300,
    xxtall:440,
  }
};

export default layout;
