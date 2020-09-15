import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import Header from '../common/components/header';

import PageNavProps from './navigation';
import {Player} from '../common/types';
import {PlayerDispatch} from '../store/players';
import * as actions from '../actions/players';
import * as storage from '../services/storage';
import {PlayerState} from '../reducer/players';
import styles from '../common/styles';
import colours from '../common/colours';

const emptyBox = require('../resources/assets/other-empty.jpg');

interface StateProps {
  players: Player[];
}

interface DispatchProps {
  changeEdit: (player: Player, edit: boolean) => void;
  addPlayer: (player: Player) => void;
  removePlayer: (name: string) => void; // Change this from string -> Player
  changeInitiative: (player: Player, initiative: number) => void; // Make this edit player
  changeColour: (player: Player) => void;
  savePlayers: (players: Player[]) => void;
  getPlayers: () => void;
  setAllEditFalse: (players: Player[]) => void;

  getMock: () => void;
}

type Props = StateProps & DispatchProps & PageNavProps<'Players'>;

function Players(props: Props) {
  if (props.players.length == 0) {
    props.getPlayers();
  }

  if (props.players) {
    props.players.sort((p, q) => (q.name > p.name ? -1 : 1));
    // Sort by alphabetical in descending order
  }
  return (
    <>
      <Header title={props.route.name} />
      <View style={styles.body}>
        {props.players.map((player: Player) => {
          return (
            <View key={player.name}>
              <TouchableOpacity
                onPress={() => {
                  props.changeEdit(player, true);
                }}
                activeOpacity={0.7}
              >
                <View style={styles.container}>
                  <Image
                    source={emptyBox}
                    style={{width: 350, height: 60, resizeMode: 'stretch'}}
                  />
                  <View style={styles.overlapView}>
                    <Text style={styles.overlapText}>{player.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              {player.edit === true && (
                <View style={{paddingHorizontal: 25, paddingVertical: 10}}>
                  <TextInput
                    defaultValue={player.name}
                    placeholder="Name"
                    style={{
                      marginVertical: 5,
                      height: 40,
                      paddingHorizontal: 10,
                      borderWidth: 1
                    }}
                  ></TextInput>
                  <TextInput
                    defaultValue={player.initiative.toString()}
                    placeholder="Initiative"
                    style={{
                      marginVertical: 5,
                      height: 40,
                      paddingHorizontal: 10,
                      borderWidth: 1
                    }}
                  ></TextInput>
                  <Button
                    title="Update Player"
                    color={colours.grey}
                    onPress={() => {
                      props.changeEdit(player, false);
                    }}
                  />
                </View>
              )}
            </View>
          );
        })}
      </View>
    </>
  );
}

const mapStateToProps = (state: PlayerState): StateProps => ({
  players: state.players
});

const mapDispatchToProps = (dispatch: PlayerDispatch): DispatchProps => ({
  changeEdit: (player: Player, edit: boolean): void => {
    const updatedPlayer = {...player, edit};
    dispatch(actions.editPlayer(updatedPlayer));
  },
  addPlayer: (player: Player): void => {
    dispatch(actions.addPlayer(player));
  },
  removePlayer: (name: string): void => {
    dispatch(actions.removePlayer(name));
  },
  changeColour: (player: Player): void => {
    const updatedPlayer = {...player, reaction: !player.reaction};
    dispatch(actions.editPlayer(updatedPlayer));
  },
  changeInitiative: (player: Player, initiative: number): void => {
    const updatedPlayer = {...player, initiative};
    dispatch(actions.editPlayer(updatedPlayer));
  },
  getPlayers: async (): Promise<void> => {
    const promise = storage.getPlayers();
    promise.then((players) => {
      dispatch(actions.loadPlayers(players));
    });
  },
  savePlayers: (players: Player[]): void => {
    storage.savePlayers(players);
  },
  setAllEditFalse: (players: Player[]): void => {
    dispatch(actions.setAllEditFalse(players));
  },
  getMock: (): void => {
    dispatch(actions.getMock());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
