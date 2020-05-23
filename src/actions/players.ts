import {Player} from '../common/types';

export type PlayerActionTypes =
  | {type: 'addPlayer'; player: Player}
  | {type: 'removePlayer'; name: string}
  | {type: 'editPlayer'; player: Player}
  | {type: 'loadPlayers', players: Player[]}
  | {type: 'getMock'};

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

export function loadPlayers(players: Player[]) {
  const action: PlayerActionTypes = {
    type: 'loadPlayers',
    players
  };
  return (action);
}

export function getMock() {
  const action: PlayerActionTypes = {
    type: 'getMock'
  };
  return (action);
}