import { action } from 'typesafe-actions'
import { RegisterActionTypes, Register } from './types'

export const fetchRequest = (data: Register) => action(RegisterActionTypes.FETCH_REQUEST, data)
export const clearSelected = () => action(RegisterActionTypes.CLEAR_SELECTED)

export const fetchSuccess = (data: Register) => action(RegisterActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(RegisterActionTypes.FETCH_ERROR, message)
