import {takeEvery, call, put} from "redux-saga/effects";
import {API_ERRORED, DATA_LOADED, DATA_REQUESTED} from "../constants/action-types";

export default function* watcherSage() {
    yield takeEvery(DATA_REQUESTED, workerSaga);
}

function* workerSaga() {
    try {
        const payload = yield call(getData);
        yield put({type: DATA_LOADED, payload});
    } catch (e) {
        yield put({type: API_ERRORED, payload: e});
    }
}

function getData() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
        response.json()
    );
}
