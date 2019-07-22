import * as React from 'react'
import Routes from './routes'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Store } from 'redux'
import { History } from 'history'

import { ApplicationState } from './store'

interface MainProps {
  store: Store<ApplicationState>
  history: History
}

const Main: React.FC<MainProps> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
              <Routes/>
      </ConnectedRouter>
    </Provider>
  )
}

export default Main
