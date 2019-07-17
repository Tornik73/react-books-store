import * as React from 'react'
// import Page from '../components/layout/Page'
// import Container from '../components/layout/Container'

import styled from 'styled-components';
import { ApplicationState, ConnectedReduxProps } from '../store';
import { fetchRequest } from '../store/Books/actions';
import { Books } from '../store/Books/types'
import { connect } from 'react-redux';


type State = { email: string, password: string, telephone: string, age: string, img: string };

interface PropsFromState {
  loading: boolean
  data: Books[]
  errors?: string
}


interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
}
type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps & { email: string, password: string }

class MainComponent extends React.Component<AllProps, State> {

  public componentDidMount() {
    this.props.fetchRequest()
  }

  render(){
    return(
      <Wrapper>
        <h2>Our Books</h2>
        <PageContent>
          {this.renderData()}
        </PageContent >
      </Wrapper>
    )
  }

  private renderData() {

    const { data } = this.props;
    
    return (
      data.map(book => (
        <BookContent key={book.id}>
            <img src={book.img} alt="img" />
            <div>Title: {book.title}</div>
            <div>Author: {book.author}</div>
            <div>Description: {book.description}</div>
            <div>Price: {book.price}</div>
            <button>Add to cart</button>
        </BookContent>

      ))
    )
  }      
}

const Wrapper = styled('div')`
  text-align: center;
`

const BookContent = styled('div')`
  display: flex;
  border: 1px solid silver;
  border-radius: 10px;
  flex-direction: column;
  margin-right: 10px;
  text-align: center;
  padding: 20px;
  img {
    width: 100px;
    margin: 0 auto;
    height: 150px;
  }
`

const PageContent = styled('article')`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
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
const mapStateToProps = ({ books }: ApplicationState) => ({
  loading: books.loading,
  errors: books.errors,
  data: books.data
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
)(MainComponent)