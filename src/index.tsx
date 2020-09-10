import React, {PureComponent} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import playerStore from './store/players';
import Initiative from './views/initiative';
import colours from './resources/colours';

export default class App extends PureComponent {
  public constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <Provider store={playerStore}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colours.backgroundColour}
        />
        <Initiative />
      </Provider>
    );
  }
}
