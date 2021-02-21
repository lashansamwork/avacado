const YogaGirl = require('../assets/images/YogaGirl.png');
const ThinkingGirl = require('../assets/images/ThinkingGirl.png');
const MoneyGirl = require('../assets/images/MoneyGirl.png');
const ReadingGirl = require('../assets/images/ReadingGirl.png');

export const getImageFromCategory = (categoryName) => {
  //send back the aspect ratio
  let image = null;
  switch (categoryName) {
    case 'Physical & Health':
      image = YogaGirl;
      break;
    case 'Career & Educational':
      image = ReadingGirl;
      break;
    case 'Finance':
      image = MoneyGirl;
      break;
    case 'Self Growth':
      image = ThinkingGirl;
      break;
    default:
      image = null;
  }

  return image;
};
