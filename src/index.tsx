import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import * as serviceWorker from './serviceWorker';
import { createHashHistory } from 'history'
import configureStore from './configureStore'


// We use hash history because this example is going to be hosted statically.
// Normally you would use browser history.

const history = createHashHistory()

const initialState = window.initialReduxState
const store = configureStore(history, initialState)

ReactDOM.render(<Main store={store} history={history} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
