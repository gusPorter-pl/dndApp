import {createStore} from 'redux';
import reducer from '../reducer/players';

const playerStore = createStore(reducer);

export default playerStore;