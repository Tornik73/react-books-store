import React from 'react'
import styled from 'styled-components';
import requests from '../requests/loginRequests'
import jwt from 'jwt-decode';
import  { User }  from '../store/register/types'
import { LoginUser } from '../models/login'

type UserProps = LoginUser;
type UserState = LoginUser;

export class LoginComponent extends React.Component<UserProps, UserState, History> {

    constructor(props: LoginUser) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    // componentDidMount(){
    //     const NewUser: User ={
    //         id: 1,
    //         email: "rio@gmail.com",
    //         password: "12345678",
    //         telephone: "1231234321",
    //         age: 18,
    //         img: "123432145fasdfgasv"
    //     }
    //     function getProperty<T, K extends keyof T>(obj: T, key: K): T[K]{
    //         return obj[key];
    //     }
    //     const age = getProperty(NewUser, 'age');
    // }

    decodeToLocalStorage = (loginUserData: User) : void => {
        const decode: User = jwt(loginUserData.token);
        localStorage.id = decode.id;
        localStorage.token = loginUserData.token;
        localStorage.email = decode.email;
        localStorage.telephone = decode.telephone;
        localStorage.age = decode.age;
        localStorage.img = loginUserData.img;
    }

    onSubmit = (event: any): void => {
        event.preventDefault();
        requests.auth(this.state)
            .then((loginUserData: Response) => loginUserData.json())
            .then((User: User) => this.decodeToLocalStorage(User))
                .then(() => window.location.href = '/');

    };
    
    validateForm() : boolean {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }


    handleChange = (event: any): void => this.setState({
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
