import React from 'react'
// import Page from '../components/layout/Page'
// import Container from '../components/layout/Container'

import styled from 'styled-components';

export default () => (
    <RegisterContent>
        Register page
    </RegisterContent>
)

const RegisterContent = styled('article')`
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
