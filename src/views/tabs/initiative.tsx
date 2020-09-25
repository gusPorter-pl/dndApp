import React, {PureComponent} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  TextInput
} from 'react-native';
import {connect} from 'react-redux';

import MainNavProps from '../navigation';
import {State} from '../../redux/reducer';
import {StoreDispatch} from '../../redux/store';
import styles from '../../common/styles';
import {Player} from '../../common/types';
import Box from '../../common/components/box';
import Header from '../../common/components/header';

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
    if (this.props.players) {
      this.props.players.sort((p, q) => q.initiative - p.initiative);
      // Sort by initiative in descending order
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

    console.info(this.state.addedPlayers);
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
          <View style={styles.body}>
            <Text>{JSON.stringify(this.state.addedPlayers)}</Text>
            {/* <View style={}>
              <View
                style={{
                  flex: 3,
                  paddingRight: 5,
                  justifyContent: 'center'
                }}
              >
                
              </View>
              <View style={{flex: 2}}>
                <Button
                  title="Reaction"
                  color={player.reaction ? colours.green : colours.red}
                  onPress={() => {}}
                />
              </View>
              <View style={{justifyContent: 'center', paddingLeft: 5}}>
                <Text style={initiativeStyles.initiativeNumber}>
                  {player.initiative}
                </Text>
              </View>
            </View> */}
            <View>
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
                        isRow={true}
                        function={async () => {
                          // this.props.navigation.navigate('Tabs');
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
                        isRow={true}
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
        )}
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

const mapDispatchToProps = (dispatch: StoreDispatch): DispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Initiative);
