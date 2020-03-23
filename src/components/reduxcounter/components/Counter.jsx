import React, { Component } from "react";
import Button from "./Button";
import './Counter';
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/index";
class Counter extends Component {
  render() {
    return (
      <div>
        <button type="button" class="btn btn-light btn-lg btn-block">
         <h2>Counter: {this.props.ctr}</h2>
        </button>
        <Button clicked={this.props.onIncrementCounter} label="INCREMENT" />
        <Button clicked={this.props.onDecrementCounter} label="DECREMENT" />
        <Button clicked={this.props.onAddCounter} label="ADD 20" />
        <Button clicked={this.props.onSubCounter} label="SUB 15" />
        <Button clicked={this.props.onMulCounter} label="MUL 2" />
        <br />
        <button
          onClick={() => this.props.onStoreResults(this.props.ctr)} className='btn btn-success mx-5 col-3'
        >
          Store 
        </button>
        <button
          onClick={() => this.props.onStoreDoubleResults(this.props.ctr)} className='btn btn-success ml-5 col-3'
        >
          Store 2X
        </button>
        <button
          onClick={() => this.props.onStoreTripleResults(this.props.ctr)} className='btn btn-success ml-5 col-3'
        >
          Store 3X
        </button>
        <ul className='list-group justify-content-center'>
          {this.props.storedResults.map(str => (
            <li className='list-group-item mt-2 y-2' key={str.id} >
              <button className='btn btn-danger btn-sm mt-2 col' onClick={() => this.props.onDeleteResults(str.id)}>{str.value} Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(20)),
    onSubCounter: () => dispatch(actionCreators.subtract(15)),
    onMulCounter:()=> dispatch(actionCreators.multiply(2)),
    onStoreResults: result => dispatch(actionCreators.storeResults(result)),
    onDeleteResults: id => dispatch(actionCreators.deleteResults(id)),
    onStoreDoubleResults:result=>dispatch(actionCreators.storeDoubleResults(result)),
    onStoreTripleResults:result=>dispatch(actionCreators.storeTripleResults(result))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
