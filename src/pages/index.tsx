import * as React from 'react'
// import Page from '../components/layout/Page'
// import Container from '../components/layout/Container'

import styled from 'styled-components';

export default () => (
        <PageContent>
                <h1>Book Store</h1>
                <img src="http://langbookpublishing.com/wp-content/uploads/2013/11/img-books.jpg" alt=""/>
        </PageContent>
)

const PageContent = styled('article')`
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
