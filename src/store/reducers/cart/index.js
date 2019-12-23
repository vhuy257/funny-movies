import {combineReducers} from 'redux';
import all from './all_cart.reducer';

const cart = combineReducers({
    all,
});

export default cart;