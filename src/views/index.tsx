import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {PageParamList} from '../views/navigation';
import Players from './players';
import Initiative from './initiative';
import Spells from './spells';
import colours from '../common/colours';

const Tabs = createBottomTabNavigator<PageParamList>();

function TabsScreen() {
  return (
    <Tabs.Navigator
      initialRouteName="Players"
      tabBarOptions={{
        activeTintColor: colours.background,
        activeBackgroundColor: colours.header,
        inactiveTintColor: colours.header,
        inactiveBackgroundColor: colours.background
      }}
    >
      <Tabs.Screen
        name="Players"
        component={Players}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="user-friends" size={20} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="Initiative"
        component={Initiative}
        options={{
          tabBarIcon: ({color}) => <Icon name="list" size={20} color={color} />
        }}
      />
      <Tabs.Screen
        name="Spells"
        component={Spells}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="dice-d20" size={20} color={color} />
          )
        }}
      />
    </Tabs.Navigator>
  );
}

export default TabsScreen;
