import { Reducer } from 'redux'
import { ProfileState, ProfileActionTypes } from './types'

export const initialState: ProfileState = {
  data: [],
  errors: undefined,
  loading: false,
}

const reducer: Reducer<ProfileState> = (state = initialState, action) => {
  switch (action.type) {
 
    case ProfileActionTypes.FETCH_REQUEST: {
      return { ...state, loading: false, data: action.payload }
    }
    case ProfileActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

export { reducer as profileReducer }
