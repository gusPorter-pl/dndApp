import React, {PureComponent} from 'react';
import {View, Text, Button, ScrollView, StyleSheet} from 'react-native';
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
}

type Props = StateProps & DispatchProps & PageNavProps<'Initiative'>;

class Initiative extends PureComponent<Props> {
  public constructor(props: Props) {
    super(props);
  }

  public render() {
    if (this.props.players.length == 0) {
      this.props.getPlayers();
    } else {
      this.props.savePlayers(this.props.players);
    }
    if (this.props.players) {
      this.props.players.sort((p, q) => q.initiative - p.initiative);
      // Sort by initiative in descending order
    }
    let line = true;
    return (
      <>
        <Header title={this.props.route.name} />
        <View style={styles.body}>
          {this.props.players.map((player) => {
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
                        this.props.changeColour(player);
                      }}
                    />
                  </View>
                  <View style={{justifyContent: 'center', paddingLeft: 5}}>
                    <Text style={initiativeStyles.initiativeNumber}>
                      {player.initiative}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
          <View style={{padding: 3, paddingTop: 7}}>
            <Button
              // Saves data to store
              title={'Try Save'}
              onPress={() => {
                this.props.savePlayers(this.props.players);
              }}
            />
          </View>
        </View>
      </>
    );
  }
}

const initiativeStyles = StyleSheet.create({
  initiativeNumber: {
    width: 30,
    fontSize: 18,
    textAlign: 'center',
    alignItems: 'center'
  }
});

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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Initiative);
