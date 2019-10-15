import {combineReducers} from 'redux';
import modals from './modal.reducer';

const alerts = combineReducers({
    modals,
});

export default alerts;