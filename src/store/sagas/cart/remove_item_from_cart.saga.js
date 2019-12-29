import {put, takeLatest, call} from 'redux-saga/effects';
import cartService from "../../../services/cartService";

import {
    REMOVE_ITEM_FROM_CART,
    REMOVE_ITEM_FROM_CART_SUCCESS,
    REMOVE_ITEM_FROM_CART_ERROR,
    LOAD_TOTAL_AMOUNT_FROM_CART_SUCCESS,
}
    from "../../actions/cart";

function* removeProductFromCartSagas(action) {
    try {
        yield call(cartService.removeProductFromCart, action.payload)
        yield put ({
            type: REMOVE_ITEM_FROM_CART_SUCCESS,
            payload: action.payload
        }); 
        yield put ({
            type: LOAD_TOTAL_AMOUNT_FROM_CART_SUCCESS,
        }); 
    } catch (error) {
        yield put({
            type: REMOVE_ITEM_FROM_CART_ERROR, payload: error
        });
    }
}


export function* removeProductFromCartsWatcher() {
    yield takeLatest(REMOVE_ITEM_FROM_CART, removeProductFromCartSagas);
}