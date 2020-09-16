import React, {PureComponent} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import playerStore from './store/players';
import TabScreen from './views';
import colours from './common/colours';
import {MainParamList} from './navigation';
import SpellDisplay from './spellDisplay';

const Stack = createStackNavigator<MainParamList>();

export default class App extends PureComponent {
  public constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <Provider store={playerStore}>
        <StatusBar barStyle="light-content" backgroundColor={colours.header} />
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Tabs" component={TabScreen} />
            <Stack.Screen name="SpellDisplay" component={SpellDisplay} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
