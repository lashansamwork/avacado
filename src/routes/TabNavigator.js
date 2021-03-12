import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TabBar from '../components/TabBar/TabBar';
import MyTaskNavigator from '../routes/MyTaskNavigator';
import MyGoalNavigator from '../routes/MyGoalNavigator';
import AboutScreen from '../screens/AboutScreen';

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <SafeAreaProvider>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name="Settings" component={MyGoalNavigator} />
        <Tab.Screen name="MyTask" component={MyTaskNavigator} />
        <Tab.Screen
          name="profile"
          component={AboutScreen}
          options={{tabBarVisible: false}}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}
