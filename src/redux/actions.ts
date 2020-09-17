import {Player} from '../common/types';

export type ActionTypes =
  | {type: 'addPlayer'; player: Player}
  | {type: 'removePlayer'; name: string}
  | {type: 'editPlayer'; player: Player}
  | {type: 'loadPlayers'; players: Player[]}
  | {type: 'setAllEditFalse'; players: Player[]}
  | {type: 'changeSpellNames'; searchText: string; allSpellNames: string[]}
  | {type: 'getMock'};

export const addPlayer = (player: Player) => {
  const action: ActionTypes = {
    type: 'addPlayer',
    player
  };
  return action;
};

export const removePlayer = (name: string) => {
  const action: ActionTypes = {
    type: 'removePlayer',
    name
  };
  return action;
};

export const editPlayer = (player: Player) => {
  const action: ActionTypes = {
    type: 'editPlayer',
    player
  };
  return action;
};

export const loadPlayers = (players: Player[]) => {
  const action: ActionTypes = {
    type: 'loadPlayers',
    players
  };
  return action;
};

export const setAllEditFalse = (players: Player[]) => {
  const action: ActionTypes = {
    type: 'setAllEditFalse',
    players
  };
  return action;
};

export const changeSpellNames = (
  searchText: string,
  allSpellNames: string[]
) => {
  const action: ActionTypes = {
    type: 'changeSpellNames',
    searchText,
    allSpellNames
  };
  return action;
};

export const getMock = () => {
  const action: ActionTypes = {
    type: 'getMock'
  };
  return action;
};
