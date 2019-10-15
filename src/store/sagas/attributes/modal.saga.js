import {put, takeLatest} from 'redux-saga/effects';
import {
    SHOW_MODAL_INIT,
    SHOW_MODAL,
} from "../../actions/alerts";

function* showModal() {
    try {
        yield put({
            type: SHOW_MODAL,
        });
    } catch (error) {
    }
}

export function* modalWatcher() {
    yield takeLatest(SHOW_MODAL_INIT, showModal);
}