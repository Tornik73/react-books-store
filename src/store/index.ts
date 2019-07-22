import { all, fork } from 'redux-saga/effects'
import { connectRouter, RouterState } from 'connected-react-router'
import { combineReducers, Dispatch, Action, AnyAction } from 'redux'
import { History } from 'history'

import heroesSaga from './Books/sagas'
import { booksReducer } from './Books/reducer'
import { BooksState } from './Books/types'
import registerSaga from './register/sagas'
import counterSaga from './CartCounter/sagas'
import profileSaga from './profile/sagas'
import authSaga from './logout/sagas'
import { RegisterState } from './register/types'
import { registerReducer } from './register/reducer'
import { counterReducer } from './CartCounter/reducer';
import { CounterState } from './CartCounter/types';
import { ProfileState } from './profile/types'
import { profileReducer } from './profile/reducer';
import { AuthState } from './logout/types';
import { authReducer } from './logout/reducer';

export interface ApplicationState {
    counter: CounterState;
    books: BooksState;
    register: RegisterState;
    profile: ProfileState;
    router: RouterState;
    auth: AuthState;
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>
}

export const createRootReducer = (history: History) =>
    combineReducers({
        counter: counterReducer,
        books: booksReducer,
        register: registerReducer,
        profile: profileReducer,
        auth: authReducer,
        router: connectRouter(history)
    })

export function* rootSaga() {
    yield all([fork(heroesSaga),
            fork(registerSaga), 
            fork(counterSaga), 
            fork(profileSaga),
            fork(authSaga)
        ])
}
