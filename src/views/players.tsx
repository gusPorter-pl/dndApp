import React, {PureComponent} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';

import {Player} from '../common/types';
import {PlayerDispatch} from '../store/players';
import * as actions from '../actions/players';
import * as storage from '../services/storage';
import {PlayerState} from '../reducer/players';
import styles from '../common/styles';
import {changeColour} from '../common/players';
import {TextInput} from 'react-native-gesture-handler';

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

type Props = StateProps & DispatchProps;

class Players extends React.PureComponent<Props> {
  removeEdits: () => void;
  public constructor(props: Props) {
    super(props);
    this.removeEdits = () => {
      this.props.setAllEditFalse(this.props.players);
    };
  }

  async componentDidMount() {
    await this.removeEdits();
  }

  public render() {
    if (this.props.players) {
      this.props.players.sort((p, q) => (q.name > p.name ? -1 : 1));
      // Sort by alphabetical in descending order
    }
    return (
      <View style={[styles.background, {backgroundColor: '#fff'}]}>
        {/* <View style={{padding: 3, paddingTop: 7}}>
          <Button
            // I would like this button to change navigation to a different screen
            title={'Add player!'}
            onPress={async () => {
              await this.props.getMock();
              this.props.savePlayers(this.props.players);
            }}
          />
        </View> */}
        {/* <View style={{padding: 3, paddingTop: 7}}>
          <Button
            // This will be an edit button, same comments as remove button
            title={"Edit Bizzie's Initiative"}
            onPress={() => {
              this.props.changeInitiative(
                {name: 'Bizzie', initiative: 20, colour: 0},
                15
              );
            }}
          />
        </View> */}
        {this.props.players.map((player) => {
          return (
            <View key={player.name}>
              <TouchableOpacity
                onPress={() => {
                  this.props.changeEdit(player, true);
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
                    color="#808080"
                    onPress={() => {
                      this.props.changeEdit(player, false);
                    }}
                  />
                </View>
              )}
            </View>
          );
        })}
        {/* <View style={{padding: 3, paddingTop: 7}}>
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
        </View> */}
      </View>
    );
  }
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
    const colour = changeColour(player.colour);
    const updatedPlayer = {...player, colour};
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
