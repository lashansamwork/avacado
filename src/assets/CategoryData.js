const CategoryData = [
  {
    id: 0,
    imagePath: require('./images/YogaGirl.png'),
    description: 'Physical & Health',
    placeholder: 'Lose 2kg in a month',
    aspectRatio: 804 / 612,
  },
  {
    id: 1,
    imagePath: require('./images/ReadingGirl.png'),
    description: 'Career & Education',
    placeholder: "Get my bacholer's dagree in three years",
    aspectRatio: 696 / 631,
  },
  {
    id: 2,
    imagePath: require('./images/MoneyGirl.png'),
    description: 'Finance',
    placeholder: 'Save $1,500 in a month',
    aspectRatio: 694 / 699,
  },
  {
    id: 3,
    imagePath: require('./images/ThinkingGirl.png'),
    description: 'Self Growth',
    placeholder: 'Build a reading habit in 21 days',
    aspectRatio: 635 / 765,
  },
];

export const getCategoryData = (id) => {
  return CategoryData.filter((category) => category.id === id)[0];
};
