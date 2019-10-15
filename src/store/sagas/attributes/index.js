import { all } from 'redux-saga/effects';
import { modalWatcher } from './modal.saga';

export default function* attributesSaga() {
    yield all([
        modalWatcher()
    ]);
}