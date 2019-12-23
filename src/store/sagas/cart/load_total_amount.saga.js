import {put, takeLatest, call} from 'redux-saga/effects';
import cartService from "../../../services/cartService";

import {
    LOAD_TOTAL_AMOUNT_FROM_CART,
    LOAD_TOTAL_AMOUNT_FROM_CART_SUCCESS,
    LOAD_TOTAL_AMOUNT_FROM_CART_ERROR
}
    from "../../actions/cart";

function* loadTotalAmountSagas(action) {
    try {
        const data = yield call(cartService.totalAmountFromCart, action.payload);
        yield put ({
            type: LOAD_TOTAL_AMOUNT_FROM_CART_SUCCESS,
            payload: data
        }); 
    } catch (error) {
        yield put({
            type: LOAD_TOTAL_AMOUNT_FROM_CART_ERROR, payload: error
        });
    }
}

export function* loadTotalAmountWatcher() {
    yield takeLatest(LOAD_TOTAL_AMOUNT_FROM_CART, loadTotalAmountSagas);
}