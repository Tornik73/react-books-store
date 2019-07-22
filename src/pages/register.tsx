import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'
import { fetchRequest } from '../store/register/actions'
import { ApplicationState, ConnectedReduxProps } from '../store'
import { Register } from '../store/register/types'
import { RegisterUser } from '../models/user'

type State = RegisterUser;

interface PropsFromState {
    loading: boolean
    data: Register[]
    errors?: string
}

interface PropsFromDispatch {
    fetchRequest: typeof fetchRequest
}

type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps & RegisterUser

class RegisterComponent extends React.Component<AllProps, State> {


    constructor(props: AllProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
            telephone: '',
            age: 0,
            img: 'Default:Image'
        };
    }

    handle = (event: any) =>
        this.setState({ [event.target.name]: event.target.value } as any);

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0 && this.state.telephone.length & this.state.age.toString().length;
    }

    register = () => {
        console.log(this.state);
        
        this.props.fetchRequest(this.state);
    };

    render() {
        return (
            <LoginContent>
            <div className="panel">
                <h2>Form Regestration</h2>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handle}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handle}
                    />
                </div>
                <div>
                    <input
                        type="telephone"
                        name="telephone"
                        placeholder="Telephone"
                        value={this.state.telephone}
                        onChange={this.handle}
                    />
                </div>
                <div>
                    <input
                        type="age"
                        name="age"
                        placeholder="Age"
                        value={this.state.age ? this.state.age : ''}
                        onChange={this.handle}
                    />
                </div>
                <div>
                        <button 
                            disabled={!this.validateForm()} 
                            onClick={() => this.register()}>
                                Register
                        </button>
                </div>
            </div>
            </LoginContent>
        );
    }
}
const mapStateToProps = ({ register }: ApplicationState) => ({
    loading: register.loading,
    errors: register.errors,
    data: register.data
})

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = {
    fetchRequest
}

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterComponent)


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
