import React, {PureComponent} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';
import {connect} from 'react-redux';

import {Player} from '../common/types';
import {PlayerDispatch} from '../store/players';
import * as actions from '../actions/players';
import * as storage from '../services/storage';
import {PlayerState} from '../reducer/players';
import {changeColour} from '../common/players';

interface StateProps {
  players: Player[];
  colours: string[];
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
    return (
      <View style={{height: '100%'}}>
        <View style={[styles.centre, styles.header]}>
          <Text style={[styles.headerText]}>Initiative Tracker</Text>
        </View>
        <View style={[styles.body]}>
          {this.props.players.map((player: Player) => {
            return (
              <View style={[styles.innerBody]} key={player.name}>
                <View
                  style={{
                    flex: 3,
                    paddingRight: 5,
                    justifyContent: 'center',
                  }}>
                  <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={[styles.centre, {fontSize: 18}]}>
                    {player.name}
                  </Text>
                </View>
                <View style={{flex: 2}}>
                  <Button
                    title="REACTION"
                    color={this.props.colours[player.colour]}
                    onPress={() => this.props.changeColour(player)}
                  />
                </View>
                <View style={{justifyContent: 'center', paddingLeft: 5}}>
                  <Text
                    style={[
                      styles.setSize,
                      {
                        fontSize: 18,
                        textAlign: 'center',
                        alignItems: 'center',
                      },
                    ]}>
                    {player.initiative}
                  </Text>
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
              // This will become a remove option
              // Change to different screen?
              // Switch out buttons for remove?
              // Add a "Are you sure" button
              title={'Remove Bizzie'}
              onPress={() => {
                this.props.removePlayer('Bizzie');
              }}
            />
          </View>
          <View style={{padding: 3, paddingTop: 7}}>
            <Button
              // This will be an edit button, same comments as remove button
              title={"Edit Bizzie's Initiative"}
              onPress={() => {
                this.props.changeInitiative(
                  {name: 'Bizzie', initiative: 20, colour: 0},
                  15,
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
          <View style={{padding: 3, paddingTop: 7}}>
            <Button
              // Loads data from store
              title={'Try Load'}
              onPress={() => {
                this.props.getPlayers();
              }}
            />
          </View>
        </View>
      </View>
      // FLEYDIRE WATERS FREEZING OVER???
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    color: '#ffffff',
  },
  header: {
    padding: 13,
    backgroundColor: '#1155BB',
  },
  centre: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    padding: 30,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    flex: 1,
  },
  innerBody: {
    padding: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  setSize: {
    minWidth: 20,
    maxWidth: 20,
  },
});

const mapStateToProps = (state: PlayerState): StateProps => ({
  players: state.players,
  colours: state.colours,
});

const mapDispatchToProps = (dispatch: PlayerDispatch): DispatchProps => ({
  addPlayer: (player: Player) => {
    dispatch(actions.addPlayer(player));
  },
  removePlayer: (name: string) => {
    dispatch(actions.removePlayer(name));
  },
  changeColour: (player: Player) => {
    const colour = changeColour(player.colour);
    const updatedPlayer = {...player, colour};
    dispatch(actions.editPlayer(updatedPlayer));
  },
  changeInitiative: (player: Player, initiative: number) => {
    const updatedPlayer = {...player, initiative};
    dispatch(actions.editPlayer(updatedPlayer));
  },
  getPlayers: async () => {
    const promise = storage.getPlayers();
    promise.then(players => {
      dispatch(actions.loadPlayers(players));
    });
  },
  savePlayers: (players: Player[]) => {
    storage.savePlayers(players);
  },
  getMock: () => {
    dispatch(actions.getMock());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Initiative);
