import {Player} from '../common/types';

export type PlayerActionTypes =
  | {type: 'addPlayer'; player: Player}
  | {type: 'removePlayer'; name: string}
  | {type: 'editPlayer'; player: Player}
  | {type: 'loadPlayers'; players: Player[]}
  | {type: 'setAllEditFalse'; players: Player[]}
  | {type: 'getMock'};

export const addPlayer = (player: Player) => {
  const action: PlayerActionTypes = {
    type: 'addPlayer',
    player
  };
  return action;
};

export const removePlayer = (name: string) => {
  const action: PlayerActionTypes = {
    type: 'removePlayer',
    name
  };
  return action;
};

export const editPlayer = (player: Player) => {
  const action: PlayerActionTypes = {
    type: 'editPlayer',
    player
  };
  return action;
};

export const loadPlayers = (players: Player[]) => {
  const action: PlayerActionTypes = {
    type: 'loadPlayers',
    players
  };
  return action;
};

export const setAllEditFalse = (players: Player[]) => {
  const action: PlayerActionTypes = {
    type: 'setAllEditFalse',
    players
  };
  return action;
};

export const getMock = () => {
  const action: PlayerActionTypes = {
    type: 'getMock'
  };
  return action;
};
