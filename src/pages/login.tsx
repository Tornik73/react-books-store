import React from 'react'
// import { LoginState, LoginResult, LoginRequest } from "";

import styled from 'styled-components';
import requests from '../requests/loginRequests'

type MyProps = { email: string, password: string };

type MyState = { email: string, password: string};

export class LoginComponent extends React.Component<MyProps, MyState> {
    constructor(props:any) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onSubmit = (event:any) => {
        event.preventDefault();
        requests.auth(this.state);
    };
    
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = (event:any) => this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    });

    render(){
        return(
            <LoginContent>
                <div className="panel">
                    <h2>Log in</h2>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="password"
                                placeholder="Password"
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                        </div>
                        <div>
                            <button disabled={!this.validateForm()} type="submit">
                                Login
                        </button>
                        </div>
                    </form>
                </div>
            </LoginContent>
        )
    }
}
export default LoginComponent;

const LoginContent = styled('article')`
    max-width: 1000px;
    margin: 0 auto;
    line-height: 1.6;

    a {
        color: blue;
    }

    h1,
    h2,
    h3,
    h4 {
        margin-bottom: 0.5rem;
        font-family: Arial;
        line-height: 1.25;
    }
`
