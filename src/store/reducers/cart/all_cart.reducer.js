import * as Actions from '../../actions';

const initialState = {    
    cartList: [],
    totalAmount: 0,
};

function removeItemFromCartFnc (listCart, itemRemove) {
    return listCart.filter((item) => {
        return item.id !== itemRemove.id;
    });
}

const allCartReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.INIT_CART:
        {
            return {
                ...state
            }
        }
        case Actions.INIT_CART_FROM_LOCALSTORAGE:
        {
            return {
                ...state,
                cartList: action.payload
            }
        }
        case Actions.ADD_PRODUCT_TO_CART_SUCCESS:
        {
            return {
                ...state,
                cartList: action.payload.listProduct
            }
        }
        case Actions.GET_LIST_PRODUCT_IN_CART_SUCCESS:
        {
            return {
                ...state,
                cartList: action.payload || []
            }
        }
        case Actions.GET_LIST_PRODUCT_IN_CART_ERROR:
        {
            return {
                ...state,
                cartList: []
            }   
        }
        case Actions.LOAD_TOTAL_AMOUNT_FROM_CART_SUCCESS:
        {
            return {
                ...state,
                totalAmount: action.payload
            }
        }
        case Actions.REMOVE_ITEM_FROM_CART_SUCCESS:
        {
            return {
                ...state,
                cartList: removeItemFromCartFnc(state.cartList, action.payload)
            }
        }
        default:
        {
            return state;
        }
    }
}

export default allCartReducer;