import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { ProfileActionTypes } from './types'
import { fetchError, fetchSuccess } from './actions'
import { callApi } from '../../utils/api'
import { url } from '../../constants/constants'

function* handleFetch(data: any) {
  try {
    
    const res = yield call(callApi, 'put', url, `users/${data.payload.id}`, data.payload)
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
  yield takeEvery(ProfileActionTypes.FETCH_REQUEST, handleFetch)
}
  function* ProfileSaga() {
  yield all([fork(watchFetchRequest)])
}

export default ProfileSaga
