import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class AddUser extends Component {
    state={
        redirect:false
    }
    handleClick=_=>{
        this.setState({redirect:true})
    }
    handleMain=_=>{
        this.props.history.push('/')
    }
    render() {
        if(this.state.redirect) return <Redirect to='/formtable/form' />;
        return (
            <div className='container my-5'>
                <button onClick={this.handleClick} type="button" className="btn btn-primary btn-lg btn-block">ADD USER</button>
                <button onClick={this.handleMain} className="btn btn-secondary  btn-block">Switch to BigBee</button>
            </div>
        )
    }
}
export default AddUser;
