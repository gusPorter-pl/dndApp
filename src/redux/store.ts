import {createStore, Dispatch} from 'redux';
import reducer from './reducer';
import {ActionTypes} from './actions';
import {initialState} from './reducer';

export type StoreDispatch = Dispatch<ActionTypes>;

const store = createStore(reducer, initialState);

export default store;
