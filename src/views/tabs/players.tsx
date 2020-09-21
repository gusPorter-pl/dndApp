import React, {useState} from 'react';
import {ScrollView, View, Button, TextInput} from 'react-native';
import {connect} from 'react-redux';

import PageNavProps from './navigation';
import * as actions from '../../redux/actions';
import {State} from '../../redux/reducer';
import {StoreDispatch} from '../../redux/store';
import * as storage from '../../services/storage';
import colours from '../../common/colours';
import styles from '../../common/styles';
import {Player} from '../../common/types';
import Box from '../../common/components/box';
import Header from '../../common/components/header';

interface StateProps {
  players: Player[];
}

interface DispatchProps {
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
  const [playerEdit, setPlayerEdit] = useState('');
  if (props.players.length == 0) {
    props.getPlayers();
  }

  if (props.players) {
    props.players.sort((p, q) => (q.name > p.name ? -1 : 1));
    // Sort in alphabetical order
  }
  return (
    <>
      <Header title={props.route.name} />
      <View style={styles.body}>
        {props.players.map((player: Player) => {
          return (
            <View key={player.name}>
              <Box
                text={player.name}
                function={() => {
                  setPlayerEdit(player.name === playerEdit ? '' : player.name);
                }}
                type={0}
              />
              {player.name === playerEdit && (
                <View style={{paddingHorizontal: 25, paddingVertical: 10}}>
                  <TextInput
                    defaultValue={player.name}
                    placeholder="Name"
                    style={styles.textInput}
                  ></TextInput>
                  <TextInput
                    defaultValue={player.initiative.toString()}
                    placeholder="Initiative"
                    style={styles.textInput}
                  ></TextInput>
                  <Button
                    title="Update Player"
                    color={colours.grey}
                    onPress={() => {
                      // update player
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

const mapStateToProps = (state: State): StateProps => ({
  players: state.players
});

const mapDispatchToProps = (dispatch: StoreDispatch): DispatchProps => ({
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
