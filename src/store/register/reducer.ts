import { Reducer } from 'redux'
import { RegisterState, RegisterActionTypes } from './types'

export const initialState: RegisterState = {
  data: [],
  errors: undefined,
  loading: false,
}

const reducer: Reducer<RegisterState> = (state = initialState, action) => {
  switch (action.type) {
    case RegisterActionTypes.FETCH_REQUEST:
    case RegisterActionTypes.SELECT_TEAM: {
      return { ...state, loading: true }
    }
    case RegisterActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case RegisterActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    case RegisterActionTypes.SELECTED: {
      return { ...state, loading: false, selected: action.payload }
    }
    case RegisterActionTypes.CLEAR_SELECTED: {
      return { ...state, selected: undefined }
    }
    default: {
      return state
    }
  }
}

export { reducer as registerReducer }
