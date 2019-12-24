import {put, takeLatest} from 'redux-saga/effects';
import {
    LOAD_TOTAL_AMOUNT_FROM_CART,
    LOAD_TOTAL_AMOUNT_FROM_CART_SUCCESS,
    LOAD_TOTAL_AMOUNT_FROM_CART_ERROR
}
    from "../../actions/cart";

function* loadTotalAmountSagas() {
    try {
        const data = JSON.parse(localStorage.getItem('cart')).totalAmount || 0;
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