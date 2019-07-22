export interface Profile {
  email: string
  password: string
  img: string
}

export enum ProfileActionTypes {
  PUT_REQUEST = '@@profile/PUT_REQUEST',
  PUT_SUCCESS = '@@profile/PUT_SUCCESS',
  PUT_ERROR = '@@profile/PUT_ERROR',
}

export interface ProfileState {
  loading: boolean
  data: Profile[]
  errors?: string
}
