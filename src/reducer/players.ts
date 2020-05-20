import {Player} from '../services/types';

interface State {
  players: Player[];
  colours: string[];
}

const initialState: State = {
  players: [],
  colours: ['#00cf00', '#cf0000'],
};

type PlayerActionTypes =
  | {type: 'addPlayer'; player: Player}
  | {type: 'removePlayer'; player: Player}
  | {type: 'editPlayer'; player: Player};

export default function reducer(
  state: State = initialState,
  action: PlayerActionTypes,
): State {
  switch (action.type) {
    case 'addPlayer':
      return {
        ...state,
        players: [...state.players, action.player],
      };
    case 'removePlayer':
      return {
        ...state,
        players: [...state.players.filter(player => player.name !== action.player.name)],
      };
    case 'editPlayer':
      return {
        ...state,
        players: [
          ...state.players.map(player =>
            player.name !== action.player.name ? player : action.player,
          ),
        ],
      };
    default:
      return state;
  }
}
