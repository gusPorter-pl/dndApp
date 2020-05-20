import {Player} from '../services/types';
import {PlayerDispatch} from '../store/players';
import * as actions from '../actions/players';

export const changeButtonColour = (player: Player) => {
  const colour = (player.colour + 1) % 2; // 0 becomes 1, and 1 becomes 0
  // dispatch(actions.editPlayer({...player, colour}));
  const updatedPlayer = {...player, colour}
  return updatedPlayer;
  // const updatedPlayers = this.state.players.map(otherPlayer => {
  //   if (player === otherPlayer) {
  //     // If the player passed is this player in for loop, change the colour
  //     player.colour = (player.colour + 1) % 2; // 0 becomes 1, and 1 becomes 0
  //     return player;
  //   } else {
  //     // Not the passed player, so skip
  //     return otherPlayer;
  //   }
  // });
  // this.setState({players: updatedPlayers});
};
