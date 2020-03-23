import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class Login extends Component {
  state = { email:'',password:'',mainPage: false,submit:false };

  inputHandler=e=>{
      const {name,value}=e.target;
      this.setState({
        [name]:value
      })}

  handleMain = () => {
    this.setState({
      mainPage: true
    });
  };
  handleSubmit=_=>{
    this.setState({submit:true})
  }
  render() {
      const{email,password,mainPage,submit}=this.state;
    if (mainPage) return <Redirect to="/" />;
    if (submit) return <Redirect to="/formtable/adduser" />;
    console.log(this.props)
    return (
      <div className='container my-5'>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              id="exampleInputEmail1" 
              className="form-control"
              name='email'
              autoFocus
              value={email}
              aria-describedby="emailHelp"
              onChange={this.inputHandler}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              id="exampleInputPassword1"
              className="form-control"
              name='password'
              value={password}
              onChange={this.inputHandler}
            />
          </div>
          <button onClick={this.handleSubmit} type="submit" className="btn btn-primary mx-2">
            Submit
          </button>
          <button onClick={this.handleMain} className="btn btn-secondary">
          Switch to BigBee
        </button>
        </form>
        
      </div>
    );
  }
}
export default Login;
