import React, {PureComponent} from 'react';
import {View, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';

import MainNavProps from './navigation';
import * as actions from '../redux/actions';
import * as storage from '../services/storage';
import {State} from '../redux/reducer';
import {StoreDispatch} from '../redux/store';
import styles from '../common/styles';
import Box from '../common/components/box';
import Header from '../common/components/header';
import {Player} from '../common/types';

interface LocalState {
  player: Player;
}

interface StateProps {
  players: Player[];
}

interface DispatchProps {
  addPlayer(player: Player): void;
  savePlayers(players: Player[]): void;
}

type Props = StateProps & DispatchProps & MainNavProps<'PlayerAdd'>;

class PlayerAdd extends PureComponent<Props, LocalState> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      player: {
        name: '',
        initiativeModifier: 0,
        characterType: 'PC',
        reaction: true,
        edit: true
      }
    };
  }

  // public componentDidMount() {
  //   this.props.navigation.addListener('blur', () => {
  //   });
  // }

  public render() {
    console.info(this.state.player);
    return (
      <>
        <Header title={'Add Player'} />
        <View style={styles.body}>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            onChangeText={(name) => {
              this.setState({player: {...this.state.player, name}});
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Initiative Modifier"
            keyboardType="numeric"
            onChangeText={(modifierText) => {
              this.setState({
                player: {
                  ...this.state.player,
                  initiativeModifier:
                    modifierText !== '' ? parseInt(modifierText) : 0
                }
              });
            }}
          />
          {/* PC or NPC */}
          <View style={{paddingTop: 10, paddingHorizontal: 10}}>
            <Box
              text="Add Player"
              type={0}
              function={async () => {
                await this.props.addPlayer(this.state.player);
                this.props.savePlayers(this.props.players);
                this.props.navigation.goBack();
              }}
            />
            <Box
              text="Cancel and Go Back"
              type={0}
              function={() => {
                this.props.navigation.goBack();
              }}
            />
          </View>
        </View>
      </>
    );
  }
}

// const playerAddStyles = StyleSheet.create({
// });

const mapStateToProps = (state: State): StateProps => ({
  players: state.players
});

const mapDispatchToProps = (dispatch: StoreDispatch): DispatchProps => ({
  addPlayer: (player: Player): void => {
    dispatch(actions.addPlayer(player));
  },
  savePlayers: (players: Player[]): void => {
    storage.savePlayers(players);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerAdd);
