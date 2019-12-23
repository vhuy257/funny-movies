import {put, takeLatest, call} from 'redux-saga/effects';
import cartService from "../../../services/cartService";

import {
    INIT_CART,
    INIT_CART_SUCCESS,
    INIT_CART_ERROR,
    INIT_CART_FROM_LOCALSTORAGE
}
    from "../../actions/cart";

function* cartInitSagas() {
    try {
        const cartInit = JSON.parse(localStorage.getItem('cart'));
        console.log(cartInit);
        
        if(!cartInit) {
            const data = yield call(cartService.initCart);
            var cartId = { 
                cart: {
                    all: { cartId: data.cart_id }
                }
            };
            localStorage.setItem('cart', JSON.stringify(cartId));
            yield put ({
                type: INIT_CART_SUCCESS,
                payload: data
            });
        } else {
            yield put ({
                type: INIT_CART_FROM_LOCALSTORAGE,
                payload: cartInit
            });
        }
    } catch (error) {
        yield put({
            type: INIT_CART_ERROR, payload: error
        });
    }
}

export function* cartsWatcher() {
    yield takeLatest(INIT_CART, cartInitSagas);
}