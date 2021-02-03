import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TabBar from '../components/TabBar/TabBar';
import MyTaskNavigator from '../routes/MyTaskNavigator';
import MyGoalNavigator from '../routes/MyGoalNavigator';

function MyGoalScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>My goal!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <SafeAreaProvider>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name="MyTask" component={MyTaskNavigator} />
        <Tab.Screen name="Settings" component={MyGoalNavigator} />
        <Tab.Screen name="profile" component={ProfileScreen} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}
