import { all } from 'redux-saga/effects';
import { cartsWatcher } from './init_cart.saga';
import { addProductToCartsWatcher } from './add_product_to_cart.saga';
import { getListProductInCartsWatcher } from './load_cart.saga';
import { loadTotalAmountWatcher } from './load_total_amount.saga';
import { removeProductFromCartsWatcher } from './remove_item_from_cart.saga';

export default function* cartsSaga() {
    yield all([
        cartsWatcher(),
        addProductToCartsWatcher(),
        getListProductInCartsWatcher(),
        loadTotalAmountWatcher(),
        removeProductFromCartsWatcher(),
    ]);
}