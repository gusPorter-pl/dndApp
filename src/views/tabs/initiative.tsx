import React, {PureComponent} from 'react';
import {View, Text, Button, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import MainNavProps from '../navigation';
import {State} from '../../redux/reducer';
import {StoreDispatch} from '../../redux/store';
import styles from '../../common/styles';
import {Player} from '../../common/types';
import Box from '../../common/components/box';
import Header from '../../common/components/header';

interface LocalState {
  addedPlayerNames: string[];
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
      addedPlayerNames: []
    };
  }

  // public componentDidMount() {
  //   this.props.navigation.addListener('blur', () => {
  //     this.setState({addedPlayerNames: []});
  //   });
  // }

  public render() {
    if (this.props.players) {
      this.props.players.sort((p, q) => q.initiative - p.initiative);
      // Sort by initiative in descending order
    }

    const addedPlayers = this.props.players.filter((player) => {
      for (const addedPlayerName of this.state.addedPlayerNames) {
        if (addedPlayerName === player.name) {
          return true;
        }
      }
      return false;
    });
    const notAddedPlayers = this.props.players.filter((player) => {
      for (const addedPlayerName of this.state.addedPlayerNames) {
        if (addedPlayerName === player.name) {
          return false;
        }
      }
      return true;
    });

    return (
      <>
        <Header title={this.props.route.name} />
        <View style={styles.body}>
          {addedPlayers.length > 0 && (
            <View style={{paddingVertical: 5}}>
              <Text style={{textAlign: 'center', fontSize: 24}}>
                Added Players
              </Text>
            </View>
          )}
          {addedPlayers.map((player) => {
            return (
              <View key={player.name}>
                <Box
                  text={player.name}
                  type={0}
                  function={() => {
                    this.setState({
                      addedPlayerNames: this.state.addedPlayerNames.filter(
                        (playerName) => playerName !== player.name
                      )
                    });
                  }}
                />
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
              </View>
            );
          })}
          {addedPlayers.length > 0 && (
            <View style={{paddingTop: 10, paddingHorizontal: 10}}>
              <Box
                text="Set Up Initiative"
                type={1}
                function={() => {
                  this.props.navigation.navigate('InitiativeOrder', {
                    players: addedPlayers
                  });
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
                      addedPlayerNames: [
                        ...this.state.addedPlayerNames,
                        player.name
                      ]
                    });
                  }}
                />
              </View>
            );
          })}
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

const mapDispatchToProps = (dispatch: StoreDispatch): DispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Initiative);
