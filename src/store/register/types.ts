export interface Register {
  email: string
  password: string
}

export enum RegisterActionTypes {
  FETCH_REQUEST = '@@register/FETCH_REQUEST',
  FETCH_SUCCESS = '@@register/FETCH_SUCCESS',
  FETCH_ERROR = '@@register/FETCH_ERROR'
}

export interface RegisterState {
  readonly loading: boolean
  readonly data: Register[]
  readonly errors?: string
}


export interface RegisterRepsonse {
  payload: User
}
export interface User {
  id: number
  email: string
  password: string
  telephone: string
  age: number
  img: string
  token: string
}
