import React, {PureComponent} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {connect} from 'react-redux';

import MainNavProps from './navigation';
import * as actions from '../redux/actions';
import * as storage from '../services/storage';
import {State} from '../redux/reducer';
import {StoreDispatch} from '../redux/store';
import {capitalise} from '../common/functions';
import styles from '../common/styles';
import {Player} from '../common/types';
import Box from '../common/components/box';
import Header from '../common/components/header';

interface LocalState {
  type: 'add' | 'edit';
  oldName: string;
  newInitiativeModifier: number | '';
  player?: Player;
  justOpened: boolean;
  correctFormat: boolean;
}

interface StateProps {
  players: Player[];
}

interface DispatchProps {
  addPlayer(player: Player): void;
  editPlayer(oldName: string, player: Player): void;
  savePlayers(players: Player[]): void;
}

type Props = StateProps & DispatchProps & MainNavProps<'PlayerAddEdit'>;

class PlayerAddEdit extends PureComponent<Props, LocalState> {
  public constructor(props: Props) {
    super(props);
    const type = this.props.route.params.type as LocalState['type'];
    const player = this.props.route.params.player;
    this.state = {
      type,
      oldName: type === 'edit' ? player.name : '',
      newInitiativeModifier: '',
      player:
        type === 'add'
          ? {
              name: '',
              initiativeModifier: 0,
              characterType: 'PC',
              reaction: true
            }
          : player,
      justOpened: true,
      correctFormat: true
    };
  }

  public render() {
    return (
      <>
        <Header title={capitalise(this.state.type) + ' Player'} />
        <View style={styles.body}>
          <ScrollView>
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              defaultValue={this.state.player.name}
              onChangeText={(name) => {
                this.setState({player: {...this.state.player, name}});
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Initiative Modifier"
              defaultValue={
                this.state.type === 'edit' && this.state.justOpened
                  ? this.state.player.initiativeModifier.toString()
                  : ''
              }
              keyboardType="numeric"
              onChangeText={(modifierText) => {
                this.setState({
                  newInitiativeModifier:
                    modifierText !== '' ? parseInt(modifierText) : '',
                  justOpened: false
                });
              }}
            />
            <View style={styles.horizontalItems}>
              <CheckBox
                value={this.state.player.characterType === 'PC'}
                onValueChange={(ticked) => {
                  this.setState({
                    player: {
                      ...this.state.player,
                      characterType: ticked ? 'PC' : 'NPC'
                    }
                  });
                }}
              />
              <Text>Player a PC?</Text>
            </View>
            <View style={{paddingTop: 10, paddingHorizontal: 10}}>
              <Box
                text="Save Player"
                type={0}
                function={async () => {
                  const player = this.state.player;
                  if (
                    player.name === '' ||
                    this.state.newInitiativeModifier === ''
                  ) {
                    this.setState({correctFormat: false});
                  } else {
                    if (this.state.type === 'add') {
                      await this.props.addPlayer({
                        ...player,
                        initiativeModifier: this.state.newInitiativeModifier
                      });
                    } else if (this.state.type === 'edit') {
                      await this.props.editPlayer(this.state.oldName, {
                        ...player,
                        initiativeModifier: this.state.newInitiativeModifier
                      });
                    }
                    this.props.savePlayers(this.props.players);
                    this.props.navigation.goBack();
                  }
                }}
              />
              {!this.state.correctFormat && (
                <View style={{paddingVertical: 3}}>
                  <Text style={{textAlign: 'center', fontSize: 16}}>
                    Fill in all of the boxes!
                  </Text>
                </View>
              )}
              <Box
                text="Cancel and Go Back"
                type={0}
                function={() => {
                  this.props.navigation.goBack();
                }}
              />
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
  players: state.players
});

const mapDispatchToProps = (dispatch: StoreDispatch): DispatchProps => ({
  addPlayer: (player: Player): void => {
    dispatch(actions.addPlayer(player));
  },
  editPlayer: (oldName: string, player: Player): void => {
    dispatch(actions.removePlayer(oldName));
    dispatch(actions.addPlayer(player));
  },
  savePlayers: (players: Player[]): void => {
    storage.savePlayers(players);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerAddEdit);
