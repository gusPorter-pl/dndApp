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
import AsyncStorage from '@react-native-community/async-storage';

import {Player} from '../services/types';
import playerStore, {PlayerDispatch} from '../store/players';
import * as actions from '../actions/players';
import {PlayerState} from '../reducer/players';
import {changeButtonColour} from '../common/players';

interface StateProps {
  players: Player[];
  colours: string[];
}

interface DispatchProps {
  changeColour: (player: Player) => void;
  addPlayer: (player: Player) => void;
  retrieveFromStore: () => void;
}

type Props = StateProps & DispatchProps;

class Initiative extends React.PureComponent<Props> {
  public constructor(props: Props) {
    super(props);
    playerStore.subscribe(() => {
      this.props.players.sort((p, q) => q.initiative - p.initiative);
      // Sort by initiative in descending order
    });
    // this.props.addPlayer({name: 'Bizzie', initiative: 20, colour: 0});
    // this.props.addPlayer({name: 'Xaylor', initiative: 14, colour: 0});
    // this.props.addPlayer({name: 'Salrakir', initiative: 2, colour: 0});
    // this.props.addPlayer({name: 'Mrtlvnjr', initiative: 8, colour: 0});
    // this.props.addPlayer({name: 'Pop Princess', initiative: 17, colour: 0});
  }

  public render() {
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
  changeColour: (player: Player) => {
    const updatedPlayer = changeButtonColour(player);
    dispatch(actions.editPlayer(updatedPlayer));
  },
  addPlayer: (player: Player) => {
    dispatch(actions.addPlayer(player));
  },
  retrieveFromStore: () => {
    dispatch(actions.retrieveFromStore());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Initiative);
