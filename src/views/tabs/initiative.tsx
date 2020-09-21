import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import PageNavProps from './navigation';
import * as actions from '../../redux/actions';
import {State} from '../../redux/reducer';
import {StoreDispatch} from '../../redux/store';
import * as storage from '../../services/storage';
import colours from '../../common/colours';
import styles from '../../common/styles';
import {Player} from '../../common/types';
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

  getMock: () => void;
}

type Props = StateProps & DispatchProps & PageNavProps<'Initiative'>;

function Initiative(props: Props) {
  if (props.players.length == 0) {
    props.getPlayers();
  } else {
    props.savePlayers(props.players);
  }
  if (props.players) {
    props.players.sort((p, q) => q.initiative - p.initiative);
    // Sort by initiative in descending order
  }
  let line = true;
  return (
    <>
      <Header title={props.route.name} />
      <View style={styles.body}>
        {props.players.map((player) => {
          return (
            <View key={player.name}>
              {line && <View style={{borderTopWidth: 1, flex: 1}} />}
              {(line = false)}
              <View style={[styles.innerBody]}>
                <View
                  style={{
                    flex: 3,
                    paddingRight: 5,
                    justifyContent: 'center'
                  }}
                >
                  <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={[styles.centre, {fontSize: 18}]}
                  >
                    {player.name}
                  </Text>
                </View>
                <View style={{flex: 2}}>
                  <Button
                    title="Reaction"
                    color={player.reaction ? colours.green : colours.red}
                    onPress={() => {
                      props.changeColour(player);
                    }}
                  />
                </View>
                <View style={{justifyContent: 'center', paddingLeft: 5}}>
                  <Text
                    style={[
                      styles.setSize,
                      {
                        fontSize: 18,
                        textAlign: 'center',
                        alignItems: 'center'
                      }
                    ]}
                  >
                    {player.initiative}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
        <View style={{padding: 3, paddingTop: 7}}>
          <Button
            // I would like this button to change navigation to a different screen
            title={'Add player!'}
            onPress={() => {
              props.getMock();
            }}
          />
        </View>
        <View style={{padding: 3, paddingTop: 7}}>
          <Button
            // This will be an edit button, same comments as remove button
            title={"Edit Bizzie's Initiative"}
            onPress={() => {
              props.changeInitiative(
                {name: 'Bizzie', initiative: 20, reaction: true, edit: true},
                15
              );
            }}
          />
        </View>
        <View style={{padding: 3, paddingTop: 7}}>
          <Button
            // Saves data to store
            title={'Try Save'}
            onPress={() => {
              props.savePlayers(props.players);
            }}
          />
        </View>
      </View>
    </>
  );
}

const mapStateToProps = (state: State): StateProps => ({
  players: state.players
});

const mapDispatchToProps = (dispatch: StoreDispatch): DispatchProps => ({
  addPlayer: (player: Player) => {
    dispatch(actions.addPlayer(player));
  },
  removePlayer: (name: string) => {
    dispatch(actions.removePlayer(name));
  },
  changeColour: (player: Player) => {
    const updatedPlayer = {...player, reaction: !player.reaction};
    dispatch(actions.editPlayer(updatedPlayer));
  },
  changeInitiative: (player: Player, initiative: number) => {
    const updatedPlayer = {...player, initiative};
    dispatch(actions.editPlayer(updatedPlayer));
  },
  getPlayers: async () => {
    const promise = storage.getPlayers();
    promise.then((players) => {
      if (players.length == 0) {
        return;
      }
      dispatch(actions.loadPlayers(players));
    });
  },
  savePlayers: (players: Player[]) => {
    storage.savePlayers(players);
  },
  getMock: () => {
    dispatch(actions.getMock());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Initiative);
