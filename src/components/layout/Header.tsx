import * as React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { css } from 'emotion'
import { ApplicationState } from '../../store';
import { connect } from 'react-redux';

type Props = { count: number, headerImg: any}
type State = { headerImg: any}

class Header extends React.Component<Props, State> {

    constructor (props:any){
        super(props)
        this.state = {
            headerImg: localStorage.img
        };
    }
    render(){
        const { count, headerImg } = this.props
        console.log(this.props);
        
        return(
        <Wrapper>
            <HeaderNav>
                <HeaderNavLink exact to="/" activeClassName={HeaderLinkActive}>
                    Home
                </HeaderNavLink>
                <HeaderNavLink to="/login" activeClassName={HeaderLinkActive}>
                    Log in
                </HeaderNavLink>
                <HeaderNavLink to="/register" activeClassName={HeaderLinkActive}>
                    Register
                </HeaderNavLink>
                <HeaderNavLink to="/profile" activeClassName={HeaderLinkActive}>
                    Profile
                </HeaderNavLink>
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

const mapStateToProps = ({ counter, profile }: ApplicationState) => ({
    count: counter.count,
    headerImg: profile.data
})

export default connect(
    mapStateToProps
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

// const Title = styled('h2')`
//     margin: 0;
//     font-weight: 500;
// `

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