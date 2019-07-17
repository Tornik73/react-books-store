import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { BooksActionTypes } from './types'
import { fetchError, fetchSuccess } from './actions'
import { callApi } from '../../utils/api'
import { url } from '../../constants/constants'

function* handleFetch() {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, 'get', url, 'books')

    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      yield put(fetchSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack!))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(BooksActionTypes.FETCH_REQUEST, handleFetch)
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* heroesSaga() {
  yield all([fork(watchFetchRequest)])
}

export default heroesSaga
