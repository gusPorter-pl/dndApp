import React, {PureComponent} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';

import MainNavProps from './navigation';
import * as actions from '../redux/actions';
import {State} from '../redux/reducer';
import {StoreDispatch} from '../redux/store';
import * as stringFormat from '../common/functions';
import spells from '../common/spells';
import styles from '../common/styles';
import {Player} from '../common/types';
import Box from '../common/components/box';
import Header from '../common/components/header';

interface LocalState {
  players: Player[];
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & MainNavProps<'InitiativeOrder'>;

class InitiativeOrder extends PureComponent<Props, LocalState> {
  public constructor(props: Props) {
    super(props);
    const players = this.props.route.params.players;
    this.state = {
      players
    };
  }

  // public componentDidMount() {
  //   this.props.navigation.addListener('blur', () => {
  //   });
  // }

  public render() {
    return (
      <>
        <Header title="Initiative Order" />
        <View style={styles.body}>
          <Text>{JSON.stringify(this.state.players)}</Text>
        </View>
      </>
    );
  }
}

// const initiativeOrderStyles = StyleSheet.create({
// });

const mapStateToProps = (state: State): StateProps => ({});

const mapDispatchToProps = (dispatch: StoreDispatch): DispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(InitiativeOrder);
