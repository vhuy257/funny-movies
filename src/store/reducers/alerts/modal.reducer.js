import * as Actions from '../../actions/index';

const initialState = {
    open  : false,
};

const modals = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SHOW_MODAL:
        {
            return {
                ...state,
                open  : true,
            };
        }
        case Actions.HIDE_MODAL:
        {
            return {
                ...state,
                open: false
            };
        }
        default:
        {
            return state;
        }
    }
};

export default modals;
