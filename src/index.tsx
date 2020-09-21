import React, {PureComponent} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import StackScreen from './views';
import store from './redux/store';
import colours from './common/colours';

export default class App extends PureComponent {
  public constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <StatusBar
            barStyle="light-content"
            backgroundColor={colours.header}
          />
          <NavigationContainer>
            <StackScreen />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    );
  }
}
