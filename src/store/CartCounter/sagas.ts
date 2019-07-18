import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { AddToCart } from './actions'
import { callApi } from '../../utils/api'
import { url } from '../../constants/constants'
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
