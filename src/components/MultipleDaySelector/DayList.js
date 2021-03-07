import React, {useState} from 'react';
import {useEffect} from 'react';
import {FlatList} from 'react-native';
import Day from './Day';

const DayList = ({onDaysSubmit, initialSelect}) => {
  const DAYS = [
    {text: 'SUN', isSelected: false},
    {text: 'MON', isSelected: false},
    {text: 'TUE', isSelected: false},
    {text: 'WED', isSelected: false},
    {text: 'THU', isSelected: false},
    {text: 'FRI', isSelected: false},
    {text: 'SAT', isSelected: false},
  ];
  const [days, setDays] = useState(DAYS);

  useEffect(() => {
    if (initialSelect?.length > 0) {
      const updatedDays = DAYS.map((day) => {
        const found = initialSelect.find(
          (element) => element.text === day.text,
        );
        if (found) {
          return {
            ...day,
            isSelected: true,
          };
        } else {
          return day;
        }
      });
      setDays(updatedDays);
    }
  }, []);

  const onPress = (item) => {
    const newDaysArray = days.map((element) => {
      if (element.text === item.text) {
        return {text: element.text, isSelected: !item.isSelected};
      } else {
        return {...element};
      }
    });
    setDays(newDaysArray);
    onDaysSubmit(newDaysArray);
  };
  const renderItem = ({item}) => {
    return (
      <Day
        onPress={() => onPress(item)}
        isSelected={item.isSelected}
        text={item.text}
      />
    );
  };
  return (
    <FlatList
      contentStyle={{}}
      renderItem={renderItem}
      data={days}
      keyExtractor={(element, index) => `${index}`}
      horizontal
    />
  );
};

export default DayList;
