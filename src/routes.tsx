import * as React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import Root from './components/layout/Root'
import IndexPage from './pages/index'
import LoginComponent from './pages/login'
import RegisterPage from './pages/register'
import Header from './components/layout/Header'
// import Header from './components/layout/Header'
// import IndexPage from './pages/index'
// import HeroesPage from './pages/heroes'
// import TeamsPage from './pages/teams'

const Routes: React.SFC = () => (
    
    <BrowserRouter>
        <Root>
            <Header title="Book Store" />
            <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route exact path="/login" component={LoginComponent} />
                <Route exact path="/register" component={RegisterPage} />
                <Route component={() => <div>Not Found</div>} />
            </Switch>
        </Root>
    </BrowserRouter>
)

export default Routes
