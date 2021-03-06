import {Player} from '../common/types';
import {ActionTypes} from './actions';
import spells from '../common/spells';

export interface State {
  players: Player[];
  spellNames: string[];
  allSpellNames: string[];
}

export const initialState: State = {
  players: [],
  spellNames: [],
  allSpellNames: Object.keys(spells)
};

export default function reducer(
  state: State = initialState,
  action: ActionTypes
): State {
  switch (action.type) {
    case 'addPlayer':
      return {
        ...state,
        players: [...state.players, action.player]
      };
    case 'removePlayer':
      return {
        ...state,
        players: [
          ...state.players.filter((player) => player.name !== action.name)
        ]
      };
    case 'editPlayer':
      return {
        ...state,
        players: [
          ...state.players.map(
            (player) =>
              player.name !== action.player.name ? player : action.player // Won't work if we want to change the name
          )
        ]
      };
    case 'loadPlayers':
      return {
        ...state,
        players: action.players
      };
    case 'changeSpellNames':
      return {
        ...state,
        spellNames: state.allSpellNames.filter((spellName) => {
          if (action.searchText !== '') {
            return spellName.includes(action.searchText);
          }
          return false;
        })
      };
    default:
      return state;
  }
}
