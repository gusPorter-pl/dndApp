import React, {PureComponent} from 'react';
import {View, Button, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';

import MainNavProps from '../navigation';
import * as actions from '../../redux/actions';
import {State} from '../../redux/reducer';
import {StoreDispatch} from '../../redux/store';
import * as storage from '../../services/storage';
import colours from '../../common/colours';
import styles from '../../common/styles';
import {Player} from '../../common/types';
import Box from '../../common/components/box';
import Header from '../../common/components/header';

interface LocalState {
  playerEdit: string;
}

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

type Props = StateProps & DispatchProps & MainNavProps<'Tabs'>;

class Players extends PureComponent<Props, LocalState> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      playerEdit: ''
    };
  }

  public componentDidMount() {
    this.props.navigation.addListener('blur', () => {
      this.setState({playerEdit: ''});
    });
  }

  public render() {
    if (this.props.players.length == 0) {
      this.props.getPlayers();
    }

    if (this.props.players) {
      this.props.players.sort((p, q) => (q.name > p.name ? -1 : 1));
      // Sort in alphabetical order
    }
    return (
      <>
        <Header title={this.props.route.name} />
        <View style={styles.body}>
          <KeyboardAwareScrollView>
            {this.props.players.map((player: Player) => {
              return (
                <View key={player.name}>
                  <Box
                    text={player.name}
                    type={0}
                    function={() => {
                      this.setState({
                        playerEdit:
                          player.name === this.state.playerEdit
                            ? ''
                            : player.name
                      });
                    }}
                  />
                  {player.name === this.state.playerEdit && (
                    <View style={{paddingHorizontal: 25, paddingVertical: 10}}>
                      <TextInput
                        defaultValue={player.name}
                        placeholder="Name"
                        style={styles.textInput}
                      />
                      <TextInput
                        defaultValue={player.initiative.toString()}
                        placeholder="Initiative"
                        style={styles.textInput}
                      />
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
            <View style={{paddingTop: 10, paddingHorizontal: 10}}>
              <Box
                text="Add PC or NPC"
                type={0}
                function={() => {
                  this.props.navigation.navigate('PlayerAdd');
                }}
              />
            </View>
          </KeyboardAwareScrollView>
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
