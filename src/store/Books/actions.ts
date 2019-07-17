import { action } from 'typesafe-actions'
import { BooksActionTypes, Books } from './types'

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
export const fetchRequest = () => action(BooksActionTypes.FETCH_REQUEST)

// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.
export const fetchSuccess = (data: Books[]) => action(BooksActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(BooksActionTypes.FETCH_ERROR, message)
