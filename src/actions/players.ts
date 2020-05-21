import {Player} from '../services/types';

export type PlayerActionTypes =
  | {type: 'addPlayer'; player: Player}
  | {type: 'removePlayer'; name: string}
  | {type: 'editPlayer'; player: Player};

export function addPlayer(player: Player) {
  const action: PlayerActionTypes = {
    type: 'addPlayer',
    player,
  }
  return (action);
}

export function removePlayer(name: string) {
  const action: PlayerActionTypes = {
    type: 'removePlayer',
    name
  };
  return (action)
}

export function editPlayer(player: Player) {
  const action: PlayerActionTypes = {
    type: 'editPlayer',
    player,
  };
  return (action);
}
