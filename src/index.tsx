import React, {PureComponent} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import playerStore from './store/players';
import Initiative from './views/initiative';

export default class App extends PureComponent {
  public constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <Provider store={playerStore}>
        <Initiative />
      </Provider>
    );
  }
}
