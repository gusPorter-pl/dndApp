import {Player} from '../services/types';
import {PlayerActionTypes} from '../actions/players';

export interface PlayerState {
  players: Player[];
  colours: string[];
}

export const initialState: PlayerState = {
  players: [], // THis could be a retreiveData()?
  colours: ['#00cf00', '#cf0000'],
};

export default function reducer(
  state: PlayerState = initialState,
  action: PlayerActionTypes,
): PlayerState {
  switch (action.type) {
    case 'addPlayer':
      return {
        ...state,
        players: [...state.players, action.player],
      };
    case 'removePlayer':
      return {
        ...state,
        players: [
          ...state.players.filter(player => player.name !== action.name),
        ],
      };
    case 'editPlayer':
      return {
        ...state,
        players: [
          ...state.players.map(
            player =>
              player.name !== action.player.name ? player : action.player, // Won't work if we want to change the name
          ),
        ],
      };
    default:
      return state;
  }
}
