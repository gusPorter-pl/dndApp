import React, { PureComponent } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import { Player } from './services/types';

export default class App extends PureComponent<{}, {players: Player[], colours: string[]}> {
  constructor(props) {
    super(props);
    this.state = {
      colours: ['#00cf00', '#cf0000'],
      players: [
        {key: 0, name: 'Bizzie', initiative: 20, colour: null},
        {key: 1, name: 'Xaylor', initiative: 14, colour: null},
        {key: 2, name: 'Salrakir', initiative: 2, colour: null},
        {key: 3, name: 'Mrtlvnjr', initiative: 8, colour: null},
        {key: 4, name: 'Pop Princess', initiative: 17, colour: null},
      ],
    };
    this.changeColour = this.changeColour.bind(this);
  }

  private changeColour = (player: Player) => {
    const updatedPlayers = this.state.players.map(otherPlayer => {
      if (player === otherPlayer) {
        // If the player passed is this player in for loop, change the colour
        if (player.colour === this.state.colours[0]) {
          player.colour = this.state.colours[1];
        } else if (player.colour === this.state.colours[1]) {
          player.colour = this.state.colours[0];
        }
        return player;
      } else {
        // Skip player
        return otherPlayer;
      }
    });
    this.setState({players: updatedPlayers});
  };

  public render() {
    this.state.players.sort((p, q) => q.initiative - p.initiative);
    // Sort by initiative in descending order
    return (
      <View style={{height: '100%'}}>
        <View style={[styles.centre, styles.header]}>
          <Text style={[styles.headerText]}>Initiative Tracker</Text>
        </View>
        <View style={[styles.body]}>
          {this.state.players.map((player: Player) => {
            if (player.colour === null) {
              player.colour = this.state.colours[0];
            }
            return (
              <View style={[styles.innerBody]}>
                <View
                  style={{flex: 3, paddingRight: 5, justifyContent: 'center'}}>
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
                    color={player.colour}
                    onPress={() => this.changeColour(player)}
                  />
                </View>
                <View style={{justifyContent: 'center', paddingLeft: 5}}>
                  <Text
                    style={[
                      styles.setSize,
                      {fontSize: 18, textAlign: 'center', alignItems: 'center'},
                    ]}>
                    {player.initiative}
                  </Text>
                </View>
              </View>
            );
          })}
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