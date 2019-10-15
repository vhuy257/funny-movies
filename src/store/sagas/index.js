import {all} from 'redux-saga/effects';
import attributesSaga from './attributes';

export default function* rootSaga() {
    yield all([
        attributesSaga(),       
    ]);
}
