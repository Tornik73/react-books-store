export interface Profile {
  email: string
  password: string
  img: string
}

export enum ProfileActionTypes {
  FETCH_REQUEST = '@@profile/PUT_REQUEST',
  FETCH_SUCCESS = '@@profile/PUT_SUCCESS',
  FETCH_ERROR = '@@profile/PUT_ERROR',
}

export interface ProfileState {
  loading: boolean
  data: Profile[]
  errors?: string
}
