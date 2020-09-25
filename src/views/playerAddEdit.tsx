import React, {PureComponent} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {connect} from 'react-redux';

import MainNavProps from './navigation';
import * as actions from '../redux/actions';
import * as storage from '../services/storage';
import {State} from '../redux/reducer';
import {StoreDispatch} from '../redux/store';
import colours from '../common/colours';
import {capitalise} from '../common/functions';
import styles from '../common/styles';
import {Player} from '../common/types';
import Box from '../common/components/box';
import Header from '../common/components/header';

interface LocalState {
  type: 'add' | 'edit';
  oldName: string;
  player?: Player;
  justOpened: boolean;
}

interface StateProps {
  players: Player[];
}

interface DispatchProps {
  addPlayer(player: Player): void;
  editPlayer(oldName: string, player: Player): void;
  savePlayers(players: Player[]): void;
}

type Props = StateProps & DispatchProps & MainNavProps<'PlayerAddEdit'>;

class PlayerAddEdit extends PureComponent<Props, LocalState> {
  public constructor(props: Props) {
    super(props);
    const type = this.props.route.params.type as LocalState['type'];
    const player = this.props.route.params.player;
    this.state = {
      type,
      oldName: type === 'edit' ? player.name : '',
      player:
        type === 'add'
          ? {
              name: '',
              initiativeModifier: 0,
              characterType: 'PC',
              reaction: true
            }
          : player,
      justOpened: true
    };
  }

  // public componentDidMount() {
  //   this.props.navigation.addListener('blur', () => {
  //   });
  // }

  public render() {
    // console.info(this.state.player);
    // console.info(this.state.oldName);
    return (
      <>
        <Header title={capitalise(this.state.type) + ' Player'} />
        <View style={styles.body}>
          <ScrollView>
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              defaultValue={this.state.player.name}
              onChangeText={(name) => {
                this.setState({player: {...this.state.player, name}});
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Initiative Modifier"
              defaultValue={
                this.state.type === 'edit' && this.state.justOpened
                  ? this.state.player.initiativeModifier.toString()
                  : ''
              }
              keyboardType="numeric"
              onChangeText={(modifierText) => {
                this.setState({
                  player: {
                    ...this.state.player,
                    initiativeModifier:
                      modifierText !== '' ? parseInt(modifierText) : 0
                  },
                  justOpened: false
                });
              }}
            />
            <View style={styles.horizontalItems}>
              <CheckBox
                value={this.state.player.characterType === 'PC'}
                onValueChange={(ticked) => {
                  this.setState({
                    player: {
                      ...this.state.player,
                      characterType: ticked ? 'PC' : 'NPC'
                    }
                  });
                }}
              />
              <Text>Player a PC?</Text>
            </View>
            <View style={{paddingTop: 10, paddingHorizontal: 10}}>
              <Box
                text="Save Player"
                type={0}
                function={async () => {
                  if (this.state.type === 'add') {
                    await this.props.addPlayer(this.state.player);
                  } else if (this.state.type === 'edit') {
                    await this.props.editPlayer(
                      this.state.oldName,
                      this.state.player
                    );
                  }
                  this.props.savePlayers(this.props.players);
                  this.props.navigation.goBack();
                }}
              />
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

// const playerAddEditStyles = StyleSheet.create({
// });

const mapStateToProps = (state: State): StateProps => ({
  players: state.players
});

const mapDispatchToProps = (dispatch: StoreDispatch): DispatchProps => ({
  addPlayer: (player: Player): void => {
    dispatch(actions.addPlayer(player));
  },
  editPlayer: (oldName: string, player: Player): void => {
    dispatch(actions.removePlayer(oldName));
    dispatch(actions.addPlayer(player));
    // dispatch(actions.editPlayer(player));
  },
  savePlayers: (players: Player[]): void => {
    storage.savePlayers(players);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerAddEdit);
