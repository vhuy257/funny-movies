import {put, takeLatest} from 'redux-saga/effects';
import {
    INIT_CART,
    INIT_CART_ERROR,
    INIT_CART_FROM_LOCALSTORAGE
} from "../../actions/cart";

function* cartInitSagas() {
    try {
        const cartInit = JSON.parse(localStorage.getItem('cart')) || [];
        console.log(cartInit);
        yield put ({
            type: INIT_CART_FROM_LOCALSTORAGE,
            payload: cartInit
        });
    } catch (error) {
        yield put({
            type: INIT_CART_ERROR, payload: error
        });
    }
}

export function* cartsWatcher() {
    yield takeLatest(INIT_CART, cartInitSagas);
}