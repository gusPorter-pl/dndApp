import {Player} from '../common/types';
import {ActionTypes} from './actions';

export interface State {
  players: Player[];
  spellNames: string[];
}

export const initialState: State = {
  players: [],
  spellNames: []
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
    case 'setAllEditFalse':
      return {
        ...state,
        players: state.players.map((player: Player) => {
          return player.edit === true ? {...player, edit: false} : player;
        })
      };
    case 'getMock':
      return {
        ...state,
        players: [
          {name: 'Bizzie', initiative: 20, reaction: true, edit: false},
          {name: 'Xaylor', initiative: 14, reaction: true, edit: false},
          {name: 'Salrakir', initiative: 2, reaction: true, edit: false},
          {name: 'Mrtlvnjr', initiative: 8, reaction: true, edit: false},
          {name: 'Pop Princess', initiative: 17, reaction: true, edit: false}
        ]
      };
    case 'changeSpellNames':
      return {
        ...state,
        spellNames: action.allSpellNames.filter((spellName) => {
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
