import {Player} from '../services/types';

export const changeButtonColour = (player: Player) => {
  const colour = (player.colour + 1) % 2; // 0 becomes 1, and 1 becomes 0
  const updatedPlayer = {...player, colour}
  return updatedPlayer;
};
