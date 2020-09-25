import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';

import MainNavProps from '../navigation';
import * as actions from '../../redux/actions';
import {State} from '../../redux/reducer';
import {StoreDispatch} from '../../redux/store';
import * as storage from '../../services/storage';
import styles from '../../common/styles';
import {Player} from '../../common/types';
import Box from '../../common/components/box';
import Header from '../../common/components/header';

interface LocalState {
  playerOptions: string;
  visible: boolean;
}

interface StateProps {
  players: Player[];
}

interface DispatchProps {
  removePlayer: (name: string) => void; // Change this from string -> Player
  savePlayers: (players: Player[]) => void;
  getPlayers: () => void;
}

type Props = StateProps & DispatchProps & MainNavProps<'Tabs'>;

class Players extends PureComponent<Props, LocalState> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      playerOptions: '',
      visible: false
    };
    if (this.props.players.length == 0) {
      this.props.getPlayers();
    }

    if (this.props.players) {
      this.props.players.sort((p, q) => (q.name > p.name ? -1 : 1));
      // Sort in alphabetical order
    }
  }

  public componentDidMount() {
    this.props.navigation.addListener('blur', () => {
      this.setState({playerOptions: ''});
    });
  }

  public render() {
    return (
      <>
        <Header title={this.props.route.name} />
        <View style={styles.body}>
          <KeyboardAwareScrollView>
            {this.props.players.map((player: Player) => {
              return (
                <View key={player.name}>
                  <Box
                    text={
                      player.characterType === 'PC'
                        ? player.name
                        : player.name + ' (NPC)'
                    }
                    type={0}
                    function={() => {
                      this.setState({
                        playerOptions:
                          player.name === this.state.playerOptions
                            ? ''
                            : player.name,
                        visible: false
                      });
                    }}
                  />
                  {player.name === this.state.playerOptions && (
                    <View style={{paddingHorizontal: 30, paddingVertical: 10}}>
                      <Box
                        text="Edit Player"
                        type={1}
                        function={() => {
                          this.props.navigation.navigate('PlayerAddEdit', {
                            type: 'edit',
                            player
                          });
                        }}
                      />
                      <View style={{paddingTop: 5}} />
                      <Box
                        text="Delete Player"
                        type={1}
                        function={() => {
                          this.setState({visible: true});
                        }}
                      />
                      {this.state.visible && (
                        <View>
                          <Text style={{textAlign: 'center'}}>
                            Are you sure you want to delete this player?
                          </Text>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-evenly',
                              paddingTop: 7
                            }}
                          >
                            <View>
                              <Box
                                text="Yes"
                                type={2}
                                isRow={true}
                                function={async () => {
                                  await this.props.removePlayer(player.name);
                                  this.props.savePlayers(this.props.players);
                                }}
                              />
                            </View>
                            <View>
                              <Box
                                text="No"
                                type={2}
                                isRow={true}
                                function={() => {
                                  this.setState({visible: false});
                                }}
                              />
                            </View>
                          </View>
                        </View>
                      )}
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
                  this.props.navigation.navigate('PlayerAddEdit', {
                    type: 'add'
                  });
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
  removePlayer: (name: string): void => {
    dispatch(actions.removePlayer(name));
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
