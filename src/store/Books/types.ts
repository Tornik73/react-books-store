export interface Books {
  id: number
  title: string
  author: string
  price: number
  description: string
  img: string
}

export enum BooksActionTypes {
  FETCH_REQUEST = '@@books/FETCH_REQUEST',
  FETCH_SUCCESS = '@@books/FETCH_SUCCESS',
  FETCH_ERROR = '@@books/FETCH_ERROR',
  SELECT_TEAM = '@@books/SELECT_TEAM',
  SELECTED = '@@books/SELECTED',
  CLEAR_SELECTED = '@@books/CLEAR_SELECTED'
}

export interface BooksState {
  readonly loading: boolean
  readonly data: Books[]
  readonly errors?: string
}
