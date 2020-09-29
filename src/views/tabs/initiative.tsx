import React, {PureComponent} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';

import MainNavProps from '../navigation';
import * as actions from '../../redux/actions';
import {State} from '../../redux/reducer';
import {StoreDispatch} from '../../redux/store';
import styles from '../../common/styles';
import {Player} from '../../common/types';
import colours from '../../common/colours';
import Box from '../../common/components/box';
import Header from '../../common/components/header';

const box = require('../../resources/boxes/other-empty.jpg');

interface LocalState {
  currentSection: 'choosePlayers' | 'assignInitiatives' | 'startInitiative';
  addedPlayers: Player[];
  allFilled: boolean;
  end: boolean;
}

interface StateProps {
  players: Player[];
}

interface DispatchProps {}

type Props = StateProps & DispatchProps & MainNavProps<'Tabs'>;

class Initiative extends PureComponent<Props, LocalState> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      currentSection: 'choosePlayers',
      addedPlayers: [],
      allFilled: true,
      end: false
    };
  }

  public render() {
    if (
      this.state.addedPlayers &&
      this.state.currentSection === 'startInitiative'
    ) {
      this.state.addedPlayers.sort((a, b) => {
        // Sort by initiative in descending order
        if (a.initiative !== b.initiative) {
          return b.initiative - a.initiative;
        } else {
          return b.initiativeModifier - b.initiativeModifier;
        }
      });
    }

    const notAddedPlayers = this.props.players.filter((player) => {
      for (const addedPlayer of this.state.addedPlayers) {
        const addedPlayerName = addedPlayer.name;
        if (addedPlayerName === player.name) {
          return false;
        }
      }
      return true;
    });

    return (
      <>
        <Header title={this.props.route.name} />

        {/* Choose Players */}
        {this.state.currentSection === 'choosePlayers' && (
          <View style={styles.body}>
            {this.state.addedPlayers.length > 0 && (
              <View style={{paddingVertical: 5}}>
                <Text style={{textAlign: 'center', fontSize: 24}}>
                  Added Players
                </Text>
              </View>
            )}
            {this.state.addedPlayers.map((player) => {
              return (
                <View key={player.name}>
                  <Box
                    text={player.name}
                    type={0}
                    function={() => {
                      this.setState({
                        addedPlayers: this.state.addedPlayers.filter(
                          (otherPlayer) => player !== otherPlayer
                        )
                      });
                    }}
                  />
                </View>
              );
            })}
            {this.state.addedPlayers.length > 0 && (
              <View style={{paddingTop: 10, paddingHorizontal: 10}}>
                <Box
                  text="Set Up Initiative"
                  type={1}
                  function={() => {
                    this.setState({currentSection: 'assignInitiatives'});
                  }}
                />
              </View>
            )}
            {notAddedPlayers.length > 0 && (
              <View style={{paddingTop: 20, paddingBottom: 5}}>
                <Text style={{textAlign: 'center', fontSize: 24}}>
                  Not Added Players
                </Text>
              </View>
            )}
            {notAddedPlayers.map((player) => {
              return (
                <View key={player.name}>
                  <Box
                    text={player.name}
                    type={0}
                    function={() => {
                      this.setState({
                        addedPlayers: [...this.state.addedPlayers, player]
                      });
                    }}
                  />
                </View>
              );
            })}
          </View>
        )}

        {/* Assign Initiatives to Players */}
        {this.state.currentSection === 'assignInitiatives' && (
          <View style={styles.body}>
            <ScrollView>
              {this.state.addedPlayers.map((player) => {
                return (
                  <View>
                    <Box text={player.name} type={0} />
                    <View style={{alignItems: 'center'}}>
                      <TextInput
                        style={[styles.textInput, {width: '90%'}]}
                        placeholder="Initiative"
                        defaultValue=""
                        keyboardType="numeric"
                        onChangeText={(value) => {
                          this.setState({
                            addedPlayers: this.state.addedPlayers.map(
                              (otherPlayer) =>
                                otherPlayer.name !== player.name
                                  ? otherPlayer
                                  : {...player, initiative: parseInt(value)}
                            )
                          });
                        }}
                      />
                    </View>
                  </View>
                );
              })}
              <View style={{paddingTop: 10, paddingHorizontal: 10}}>
                <Box
                  text="Start Initiative"
                  type={0}
                  function={async () => {
                    await this.setState({allFilled: true});
                    for (const player of this.state.addedPlayers) {
                      if (!player.initiative) {
                        await this.setState({allFilled: false});
                        break;
                      }
                    }

                    if (this.state.allFilled) {
                      this.setState({currentSection: 'startInitiative'});
                    }
                  }}
                />
                {!this.state.allFilled && (
                  <View style={{paddingVertical: 3}}>
                    <Text style={{textAlign: 'center', fontSize: 16}}>
                      Fill in all of the boxes!
                    </Text>
                  </View>
                )}
                <Box
                  text="Cancel and Go Back"
                  type={0}
                  function={() => {
                    this.setState({currentSection: 'choosePlayers'});
                  }}
                />
              </View>
            </ScrollView>
          </View>
        )}

        {/* Start Initiatives */}
        {this.state.currentSection === 'startInitiative' && (
          <ScrollView>
            <View style={styles.body}>
              {this.state.addedPlayers.map((player) => {
                return (
                  <TouchableOpacity activeOpacity={1}>
                    <View style={[styles.centre]}>
                      <Image source={box} style={boxStyles.size} />
                      <View style={boxStyles.overlapView}>
                        <View
                          style={{
                            flex: 2,
                            paddingRight: 5,
                            justifyContent: 'center'
                          }}
                        >
                          <Text
                            adjustsFontSizeToFit
                            numberOfLines={1}
                            style={boxStyles.overlapText}
                          >
                            {player.name}
                          </Text>
                        </View>
                        <View style={{flex: 1}}>
                          <Button
                            title="REACTION"
                            color={
                              player.reaction ? colours.green : colours.red
                            }
                            onPress={() => {
                              player = {...player, reaction: !player.reaction};
                              this.setState({
                                addedPlayers: this.state.addedPlayers.map(
                                  (otherPlayer) =>
                                    otherPlayer.name === player.name
                                      ? player
                                      : otherPlayer
                                )
                              });
                            }}
                          />
                        </View>
                        <View
                          style={{
                            justifyContent: 'center',
                            paddingLeft: 10,
                            paddingRight: 22
                          }}
                        >
                          <Text style={[boxStyles.overlapText, {width: 30}]}>
                            {player.initiative}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
              <View style={{paddingTop: 10, paddingHorizontal: 10}}>
                <Box
                  text="Finish Initiative"
                  type={0}
                  function={() => {
                    this.setState({end: true});
                  }}
                />
                {this.state.end && (
                  <View>
                    <Text style={{textAlign: 'center'}}>
                      Are you sure you want to leave initiative?
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
                          // isRow={true}
                          function={async () => {
                            await this.setState({addedPlayers: []});
                            this.setState({
                              currentSection: 'choosePlayers',
                              end: false
                            });
                          }}
                        />
                      </View>
                      <View>
                        <Box
                          text="No"
                          type={2}
                          // isRow={true}
                          function={() => {
                            this.setState({end: false});
                          }}
                        />
                      </View>
                    </View>
                  </View>
                )}
              </View>
            </View>
          </ScrollView>
        )}
      </>
    );
  }
}

const boxStyles = StyleSheet.create({
  size: {
    width: '100%',
    height: 60,
    resizeMode: 'stretch'
  },
  overlapView: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  overlapText: {
    textAlign: 'center',
    paddingTop: 2,
    color: colours.black,
    fontSize: 20
  }
});

const mapStateToProps = (state: State): StateProps => ({
  players: state.players
});

const mapDispatchToProps = (dispatch: StoreDispatch): DispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Initiative);
