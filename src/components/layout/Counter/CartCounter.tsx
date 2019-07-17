import React from 'react'
import { connect } from "react-redux";
import { increment, decrement, reset } from "./actions";
import { Header } from '../../layout/Header'

export default class Counter extends React.Component {

    state: any = {
        title: this.state.title,
        count: 0
    }

    render(){
        return(
            <Header title={this.state.title} count={this.state.count}/>
        )
    }
}

// const mapStateToProps = state => ({
//     count: state.count
// });

// const mapDispatchToProps = dispatch => ({
//     decrement: () => dispatch(decrement()),
//     increment: () => dispatch(increment()),
//     reset: () => dispatch(reset())
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Counter);