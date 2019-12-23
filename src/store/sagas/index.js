import {all} from 'redux-saga/effects';
import attributesSaga from './attributes';
import cartsSaga from './cart';

export default function* rootSaga() {
    yield all([
        attributesSaga(),   
        cartsSaga(),
    ]);
}
