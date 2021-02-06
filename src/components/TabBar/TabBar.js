import React from 'react';
import {Image, View} from 'react-native';
import colors from '../../theme/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import TabItem from './TabItem';
import MyTasksIcon from '../SvgIcons/MyTasksIcon';
import MyGoalsIcon from '../SvgIcons/MyGoalsIcon';
const AvacaIcon = require('../../assets/images/Avaca.png');
import layout from '../../theme/layout';
import {TouchableOpacity} from 'react-native-gesture-handler';
const TabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const myTasks = {
    name: 'My Tasks',
    icon: () => <MyTasksIcon />,
  };

  const myGoals = {
    name: 'My Goals',
    icon: () => <MyGoalsIcon />,
  };

  const avacado = {
    name: 'Avoca.do',
    icon: () => <Image source={AvacaIcon} />,
  };

  const TABS = [myTasks, myGoals, avacado];

  return (
    <View
      style={{
        width: '100%',
        backgroundColor: colors.themeColors.primary,
        borderTopLeftRadius: 31,
        borderTopRightRadius: 31,
        paddingTop: layout.padding.medium,
      }}>
      <SafeAreaView
        edges={['right', 'bottom', 'left']}
        style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const onTabPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <TouchableOpacity onPress={onTabPress} key={`${index}_tab`}>
              <TabItem {...TABS[index]} />
            </TouchableOpacity>
          );
        })}
      </SafeAreaView>
    </View>
  );
};

export default TabBar;
