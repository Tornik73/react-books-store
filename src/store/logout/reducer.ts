import { Reducer } from 'redux'
import { AuthState, AuthActionTypes } from './types'

const initialState = {
    authStatus: true
};

const reducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.AUTH_LOGOUT: {
      return { ...state, authStatus: false }
    }
    case AuthActionTypes.AUTH_LOGIN: {
      return { ...state, authStatus: true }
    }
    default:
      return state;
  }
}

export { reducer as authReducer }
