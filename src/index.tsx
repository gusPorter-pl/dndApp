import React, {PureComponent} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import playerStore from './store/players';
import {PageParamList} from './views/navigation';
import Players from './views/players';
import Initiative from './views/initiative';
import Spells from './views/spells';
import colours from './common/colours';

const Tabs = createBottomTabNavigator<PageParamList>();

export default class App extends PureComponent {
  public constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <Provider store={playerStore}>
        <StatusBar barStyle="light-content" backgroundColor={colours.header} />
        <NavigationContainer>
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
                tabBarIcon: ({color}) => (
                  <Icon name="list" size={20} color={color} />
                )
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
        </NavigationContainer>
      </Provider>
    );
  }
}
