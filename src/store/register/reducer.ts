import { Reducer } from 'redux'
import { RegisterState, RegisterActionTypes } from './types'

export const initialState: RegisterState = {
  data: [],
  errors: undefined,
  loading: false,
}

const reducer: Reducer<RegisterState> = (state = initialState, action) => {
  switch (action.type) {
    case RegisterActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case RegisterActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case RegisterActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

export { reducer as registerReducer }
