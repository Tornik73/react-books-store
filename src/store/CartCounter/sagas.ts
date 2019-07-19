import { all, fork, put, takeEvery } from 'redux-saga/effects'
import { AddToCart } from './actions'
import {CounterActionTypes} from './types'


function* handleCounter(data: any) {
    yield put(AddToCart())

}

function* watchCounter() {
    yield takeEvery(CounterActionTypes.COUNTER_INCREMENT, handleCounter)
}

function* rootSaga() {
    yield all([fork(watchCounter)])
}

export default rootSaga
