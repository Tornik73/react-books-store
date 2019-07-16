import * as React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { css } from 'emotion'

interface HeaderProps {
    title: string
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
    <Wrapper>
        <Title>{title}</Title>
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
        </HeaderNav>
    </Wrapper>
)
export default Header

const Wrapper = styled('header')`
    padding: 0.5rem 1.5rem;
    background-color: #000;
    color: #fff;
    font-family: Arial;
`

const Title = styled('h2')`
    margin: 0;
    font-weight: 500;
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