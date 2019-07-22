import * as React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { css } from 'emotion'
import { ApplicationState } from '../../store';
import { connect } from 'react-redux';
import { LogOut } from '../../store/logout/actions';
// type Props = { count: number, headerImg: any}
// type State = { headerImg: any}

interface PropsFromDispatch {
    LogOut: typeof LogOut
}
interface PropsFromState {
    authStatus: boolean
    headerImg: any,
    count: number
}

type AllProps = PropsFromState & PropsFromDispatch 


class Header extends React.Component<AllProps> {

    constructor (props:any){
        super(props)
        this.state = {
            headerImg: localStorage.img
        };
    }

    logOut= () => {
        
        this.props.LogOut();
        localStorage.clear();
        this.setState({
            headerImg: ''
        })
        
    }
    render(){
        const { count, headerImg, authStatus } = this.props
        
        return(
        <Wrapper>
            <HeaderNav>
                <HeaderNavLink exact to="/" activeClassName={HeaderLinkActive}>
                    Home
                </HeaderNavLink>

                {authStatus && 
                <HeaderNavLink to="/login" activeClassName={HeaderLinkActive}>
                    Log in
                </HeaderNavLink>}

                {authStatus && 
                    <HeaderNavLink to="/register" activeClassName={HeaderLinkActive}>
                    Register
                </HeaderNavLink>}

                {!authStatus && 
                    <HeaderNavLink to="/" onClick={this.logOut}  >
                    Log out
                </HeaderNavLink>}
                
                {!authStatus && 
                <HeaderNavLink to="/profile" activeClassName={HeaderLinkActive}>
                    Profile
                </HeaderNavLink>}
            </HeaderNav>
                <Cart>Cart items: <CartCounter>{count}</CartCounter></Cart>
                <ProfileImage>
                    {headerImg.img && 
                        <img src={headerImg.img} alt="" />
                    }
                    {!headerImg.img &&
                        <img src={this.state.headerImg} alt="" />
                    }
                </ProfileImage>
        </Wrapper>
        )
    }
}

const mapStateToProps = ({ counter, profile, auth }: ApplicationState) => ({
    count: counter.count,
    headerImg: profile.data,
    authStatus: auth.authStatus
})

const mapDispatchToProps = {
    LogOut
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

const ProfileImage = styled('div')`
    img {
        width: 30px;
        height: 30px;
    }
    border: 0px;
`

const Cart = styled('div')`
    display: flex;
    margin-left: 10px; 
    align-items: center;
`

const CartCounter = styled('div')`
    padding: 5px 2px;
    border: 2px solid red;
    border-radius: 50px;
    background-color: red;
    margin-left: 10px;
`

const Wrapper = styled('header')`
    padding: 0.5rem 1.5rem;
    background-color: #000;
    color: #fff;
    font-family: Arial;
`

const HeaderNav = styled('nav')`
    flex: 1 1 auto;
    margin: 1rem 0;
`

const HeaderNavLink = styled(NavLink)`
    margin: 0 1rem;
    text-decoration: none;
    color: #fff;
`
const HeaderLinkActive = css`
    color: orange;
`