import { action } from 'typesafe-actions'
import { ProfileActionTypes, Profile } from './types'

export const PutRequest = (data: Profile) => action(ProfileActionTypes.FETCH_REQUEST, data)

export const fetchSuccess = (data: Profile) => action(ProfileActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(ProfileActionTypes.FETCH_ERROR, message)
