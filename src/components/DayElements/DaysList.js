import React, {useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import layout from '../../theme/layout';
import DayItem from './DayItem';

const DaysList = ({onPress, initialSelect}) => {
  const DAYS = [
    {text: 'Sun', isSelected: false},
    {text: 'Mon', isSelected: false},
    {text: 'Tue', isSelected: false},
    {text: 'Wed', isSelected: false},
    {text: 'Thu', isSelected: false},
    {text: 'Fri', isSelected: false},
    {text: 'Sat', isSelected: false},
  ];

  const daysNewState = DAYS.map((item) => {
    return item.text === initialSelect ? {...item, isSelected: true} : item;
  });

  const [days, setDays] = useState(daysNewState);

  const onDayPress = (item) => {
    onPress && onPress(item);
    const newDaysState = days.map((day) => {
      if (item.text === day.text) {
        return {
          ...day,
          isSelected: true,
        };
      } else {
        return {
          ...day,
          isSelected: false,
        };
      }
    });
    setDays(newDaysState);
  };

  return (
    <FlatList
      data={days}
      horizontal
      keyExtractor={(item, index) => `${index}`}
      contentContainerStyle={{
        paddingHorizontal: layout.padding.screenHorizontal,
      }}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <View style={{padding: layout.padding.small}}>
          <DayItem {...item} onPress={() => onDayPress(item)} />
        </View>
      )}
    />
  );
};

export default DaysList;
