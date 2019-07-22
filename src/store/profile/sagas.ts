import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { ProfileActionTypes } from './types'
import { putError, putSuccess } from './actions'
import { callApi } from '../../utils/api'
import { url } from '../../constants/constants'

function* handleFetch(data: any) {
  try {
    
    const res = yield call(callApi, 'put', url, `users/${data.payload.id}`, data.payload)
    if (res.error) {
      yield put(putError(res.error))
    } else {
      yield put(putSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(putError(err.stack!))
    } else {
      yield put(putError('An unknown error occured.'))
    }
  }
}
function* watchFetchRequest() {
  yield takeEvery(ProfileActionTypes.PUT_REQUEST, handleFetch)
}
  function* ProfileSaga() {
  yield all([fork(watchFetchRequest)])
}

export default ProfileSaga
