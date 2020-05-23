import {Player} from '../services/types';
import {PlayerActionTypes} from '../actions/players';

export interface PlayerState {
  players: Player[];
  colours: string[];
}

export const initialState: PlayerState = {
  players: [],
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
    case 'loadPlayers':
      return {
        ...state,
        players: action.players
      }
    case 'getMock':
      return {
        ...state,
        players: [
          {name: 'Bizzie', initiative: 20, colour: 0},
          {name: 'Xaylor', initiative: 14, colour: 0},
          {name: 'Salrakir', initiative: 2, colour: 0},
          {name: 'Mrtlvnjr', initiative: 8, colour: 0},
          {name: 'Pop Princess', initiative: 17, colour: 0}
        ]
      }
    default:
      return state;
  }
}
