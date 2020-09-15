import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import {Player} from '../common/types';
import {PlayerDispatch} from '../store/players';
import * as actions from '../actions/players';
import * as storage from '../services/storage';
import {PlayerState} from '../reducer/players';
import styles from '../common/styles';
import colours from '../resources/colours';

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

type Props = StateProps & DispatchProps;

class Initiative extends React.PureComponent<Props> {
  public constructor(props: Props) {
    super(props);
    this.props.getPlayers();
  }

  public render() {
    if (this.props.players) {
      this.props.players.sort((p, q) => q.initiative - p.initiative);
      // Sort by initiative in descending order
    }
    let line = true;
    return (
      <View style={{height: '100%'}}>
        <View style={[styles.body]}>
          {this.props.players.map((player: Player) => {
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
                      onPress={async () => {
                        await this.props.changeColour(player);
                        this.props.savePlayers(this.props.players);
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
                this.props.getMock();
              }}
            />
          </View>
          <View style={{padding: 3, paddingTop: 7}}>
            <Button
              // This will be an edit button, same comments as remove button
              title={"Edit Bizzie's Initiative"}
              onPress={() => {
                this.props.changeInitiative(
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
                this.props.savePlayers(this.props.players);
              }}
            />
          </View>
          {/* <View style={{padding: 3, paddingTop: 7}}>
            <Button
              // Loads data from store
              title={'Try Load'}
              onPress={() => {
                this.props.getPlayers();
              }}
            />
          </View> */}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: PlayerState): StateProps => ({
  players: state.players
});

const mapDispatchToProps = (dispatch: PlayerDispatch): DispatchProps => ({
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
