import { action } from 'typesafe-actions'
import { RegisterActionTypes, Register } from './types'
import { RegisterUser } from '../../models/user'

export const fetchRequest = (data: RegisterUser) => action(RegisterActionTypes.FETCH_REQUEST, data)

export const fetchSuccess = (data: Register) => action(RegisterActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(RegisterActionTypes.FETCH_ERROR, message)
