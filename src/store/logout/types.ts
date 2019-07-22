export interface Auth {
  LoginStatus: boolean
}

export enum AuthActionTypes {
  AUTH_LOGOUT = '@@auth/LOGOUT',
  AUTH_LOGIN = '@@auth/LOGIN'
}

export interface AuthState {
  authStatus : boolean
}
