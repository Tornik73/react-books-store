import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { RegisterActionTypes } from './types'
import { fetchError, fetchSuccess} from './actions'
import { callApi } from '../../utils/api'
import { url } from '../../constants/constants'
// import { RegisterRepsonse } from '../register/types';

function* handleFetch(data: any) {
  try {
    const res = yield call(callApi, 'post', url, 'register', data.payload)

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

function* watchFetchRequest() {
  yield takeEvery(RegisterActionTypes.FETCH_REQUEST, handleFetch)
}

function* heroesSaga() {
  yield all([fork(watchFetchRequest)])
}

export default heroesSaga
