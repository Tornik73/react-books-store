import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import Root from './components/layout/Root'
import IndexPage from './pages/index'
import LoginComponent from './pages/login'
import RegisterPage from './pages/register'
import Header from './components/layout/Header'
// import Header from './components/layout/Header'
// import IndexPage from './pages/index'
// import TeamsPage from './pages/teams'

const Routes: React.SFC = () => (
        <Root>
            <Header title="Book Store"/>
            <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/register" component={RegisterPage} />
            </Switch>
        </Root>
)

export default Routes
