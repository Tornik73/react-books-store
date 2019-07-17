import { all, fork } from 'redux-saga/effects'
import { connectRouter, RouterState } from 'connected-react-router'
import { combineReducers, Dispatch, Action, AnyAction } from 'redux'
import { History } from 'history'

import { LayoutState, layoutReducer } from './layout'

import heroesSaga from './Books/sagas'
import { BooksReducer } from './Books/reducer'
import { BooksState } from './Books/types'
import registerSaga from './register/sagas'
import { RegisterState } from './register/types'
import { registerReducer } from './register/reducer'

export interface ApplicationState {
    layout: LayoutState
    books: BooksState
    register: RegisterState
    router: RouterState
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>
}

export const createRootReducer = (history: History) =>
    combineReducers({
        layout: layoutReducer,
        books: BooksReducer,
        register: registerReducer,
        router: connectRouter(history)
    })

export function* rootSaga() {
    yield all([fork(heroesSaga), fork(registerSaga)])
}
