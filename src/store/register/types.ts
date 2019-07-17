export interface Register {
  email: string
  password: string
}

export enum RegisterActionTypes {
  FETCH_REQUEST = '@@register/FETCH_REQUEST',
  FETCH_SUCCESS = '@@register/FETCH_SUCCESS',
  FETCH_ERROR = '@@register/FETCH_ERROR',
  SELECT_TEAM = '@@register/SELECT_TEAM',
  SELECTED = '@@register/SELECTED',
  CLEAR_SELECTED = '@@register/CLEAR_SELECTED'
}

export interface RegisterState {
  readonly loading: boolean
  readonly data: Register[]
  readonly errors?: string
}
