import * as React from 'react'
import Routes from './routes'

// import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'connected-react-router'
// import { Store } from 'redux'
// import { History } from 'history'

// import { ApplicationState } from './store'

// Any additional component props go here.
// interface MainProps {
//   store: Store<ApplicationState>
//   history: History
// }

// Create an intersection type of the component props and our Redux props.
const Main: React.FC = () => {
  return (
    <Routes />
  )
}

// Normally you wouldn't need any generics here (since types infer from the passed functions).
// But since we pass some props from the `index.js` file, we have to include them.
// For an example of a `connect` function without generics, see `./containers/LayoutContainer`.
export default Main
