import {createStore, Dispatch} from 'redux';
import reducer from '../reducer/players';
import {PlayerActionTypes} from '../actions/players';
import {initialState} from '../reducer/players';

export type PlayerDispatch = Dispatch<PlayerActionTypes>;

const playerStore = createStore(reducer, initialState);

export default playerStore;
