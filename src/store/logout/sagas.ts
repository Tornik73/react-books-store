import { all, fork, put, takeEvery } from 'redux-saga/effects'
import { LogOut } from './actions'
import { AuthActionTypes } from './types'

function handleAuth() {
    put(LogOut())
}

function* watchCounter() {
    yield takeEvery(AuthActionTypes.AUTH_LOGOUT, handleAuth)
}

function* authSaga() {
    yield all([fork(watchCounter)])
}

export default authSaga
