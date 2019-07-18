import React from 'react'
import styled from 'styled-components';
import requests from '../requests/loginRequests'
import jwt from 'jwt-decode';

type MyProps = { email: string, password: string };

type MyState = { email: string, password: string };

export interface User {
    email: string
    password: string
    telephone: string
    age: number
    img: string
}

export class LoginComponent extends React.Component<MyProps, MyState, History> {

    constructor(props:any) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    decodeToLocalStorage = (data:any) => {
        const decode: User = jwt(data.token);
        localStorage.token = data.token;
        localStorage.email = decode.email;
        localStorage.telephone = decode.telephone;
        localStorage.age = decode.age;
        localStorage.img = data.img;
    }

    onSubmit = (event:any) => {
        event.preventDefault();
        // window.location.href = '/';
        requests.auth(this.state).then(data => data.json())
        .then(res => this.decodeToLocalStorage(res));
        //history.push('register')
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
