import {put, takeLatest, call} from 'redux-saga/effects';
import cartService from "../../../services/cartService";

import {
    GET_LIST_PRODUCT_IN_CART,
    GET_LIST_PRODUCT_IN_CART_SUCCESS,
    GET_LIST_PRODUCT_IN_CART_ERROR,
}
    from "../../actions/cart";

function* getListProductInCartSagas(action) {
    try {
        const data = yield call(cartService.getListProductInShoppingCart, action.payload);
        yield put ({
            type: GET_LIST_PRODUCT_IN_CART_SUCCESS,
            payload: data
        }); 
    } catch (error) {
        yield put({
            type: GET_LIST_PRODUCT_IN_CART_ERROR, payload: error
        });
    }
}

export function* getListProductInCartsWatcher() {
    yield takeLatest(GET_LIST_PRODUCT_IN_CART, getListProductInCartSagas);
}