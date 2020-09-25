import React, {PureComponent} from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import {connect} from 'react-redux';

import MainNavProps from './navigation';
import * as actions from '../redux/actions';
import {State} from '../redux/reducer';
import {StoreDispatch} from '../redux/store';
import * as stringFormat from '../common/functions';
import spells from '../common/spells';
import styles from '../common/styles';
import {Player} from '../common/types';
import Box from '../common/components/box';
import Header from '../common/components/header';
import players from './tabs/players';

interface LocalState {
  players: Player[];
  allFilled: boolean;
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & MainNavProps<'InitiativeOrder'>;

class InitiativeOrder extends PureComponent<Props, LocalState> {
  public constructor(props: Props) {
    super(props);
    const players = this.props.route.params.players;
    this.state = {
      players,
      allFilled: true
    };
  }

  public render() {
    return (
      <>
        <Header title="Initiative Order" />
        <View style={styles.body}>
          <ScrollView>
            {this.state.players.map((player) => {
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
                          players: this.state.players.map((otherPlayer) =>
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
                  // this.props.navigation.goBack();
                  for (const player of this.state.players) {
                    if (!player.initiative) {
                      await this.setState({allFilled: false});
                      break;
                    }
                  }
                  if (this.state.allFilled) {
                    console.log('To initiative!');
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
                  this.props.navigation.goBack();
                }}
              />
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

// const initiativeOrderStyles = StyleSheet.create({
// });

const mapStateToProps = (state: State): StateProps => ({});

const mapDispatchToProps = (dispatch: StoreDispatch): DispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(InitiativeOrder);
