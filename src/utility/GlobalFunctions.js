const YogaGirl = require('../assets/images/YogaGirl.png');
const ThinkingGirl = require('../assets/images/ThinkingGirl.png');
const MoneyGirl = require('../assets/images/MoneyGirl.png');
const ReadingGirl = require('../assets/images/ReadingGirl.png');
import layout from '../theme/layout';
export const getImageFromCategory = (categoryName) => {
  //send back the aspect ratio
  let image = null;
  let aspectRatio = null;
  switch (categoryName) {
    case 'Physical & Health':
      image = YogaGirl;
      aspectRatio = layout.imageAspectRatio.yogaGirl;
      break;
    case 'Career & Educational':
      image = ReadingGirl;
      aspectRatio = layout.imageAspectRatio.readingGirl;
      break;
    case 'Finance':
      image = MoneyGirl;
      aspectRatio = layout.imageAspectRatio.moneyGirl;
      break;
    case 'Self Growth':
      image = ThinkingGirl;
      aspectRatio = layout.imageAspectRatio.thinkingGirl;
      break;
    default:
      image = null;
  }

  return {image, aspectRatio};
};
