import { action } from 'typesafe-actions'
import { ProfileActionTypes, Profile } from './types'

export const putRequest = (data: Profile) => action(ProfileActionTypes.PUT_REQUEST, data)

export const putSuccess = (data: Profile) => action(ProfileActionTypes.PUT_SUCCESS, data)
export const putError = (message: string) => action(ProfileActionTypes.PUT_ERROR, message)
