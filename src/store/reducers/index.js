import {combineReducers} from 'redux';
import alerts from './alerts';
import cart from './cart';

const createReducer = (asyncReducers) =>
    combineReducers({
        alerts,
        cart,
        ...asyncReducers
    });

export default createReducer;
