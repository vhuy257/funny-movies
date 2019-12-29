import {put, takeLatest, call} from 'redux-saga/effects';
import cartService from "../../../services/cartService";
import {SHOW_TOAST} from "../../actions/alerts";

import {
    ADD_PRODUCT_TO_CART,
    ADD_PRODUCT_TO_CART_SUCCESS,
    ADD_PRODUCT_TO_CART_ERROR
}
    from "../../actions/cart";

function* addProductToCartSagas(action) {
    try {
        const data = yield call(cartService.addProductToCart, action.payload); 
        
        yield put ({
            type: ADD_PRODUCT_TO_CART_SUCCESS,
            payload: data
        });
         
        yield put({
            type: SHOW_TOAST,
            payload: {
                variant: 'success',
                message: 'Item added Successfully!'
            }
        });
    } catch (error) {
        yield put({
            type: ADD_PRODUCT_TO_CART_ERROR, payload: error
        });
    }
}

export function* addProductToCartsWatcher() {
    yield takeLatest(ADD_PRODUCT_TO_CART, addProductToCartSagas);
}