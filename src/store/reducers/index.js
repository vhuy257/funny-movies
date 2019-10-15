import {combineReducers} from 'redux';
import alerts from './alerts';

const createReducer = (asyncReducers) =>
    combineReducers({
        alerts,
        ...asyncReducers
    });

export default createReducer;
