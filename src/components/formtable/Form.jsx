import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import shortid from "shortid";

class Form extends Component {
  state = {
    username: "",
    age: "",
    city: "",
    country: "",
    zipcode: "",
    redirect: false,
    main: false
  };
  handleMain = _ => {
    this.setState({ main: true });
  };
  loginRoute = _ => {
    this.setState({ redirect: true });
    //this.props.history.push('/formtable')
  };
  inputHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = _ => {
    this.props.hideForm();
    const data = this.state
    data.id = shortid.generate()
    this.props.handleButtonSubmit(data);
}
  addUserSubmit = _ => {
    this.setState({
      username: "",
      age: "",
      city: "",
      country: "",
      zipcode: ""
    });
    const data = this.state
    data.id = shortid.generate()
    this.props.handleButtonSubmit(data)
  };
  render() {
    const {
      username,
      age,
      city,
      country,
      zipcode,
      redirect,
      main
    } = this.state;
    if (main) return <Redirect to="/" />;
    if (redirect) return <Redirect to="/formtable" />;
    return (
      <div className="container my-5">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                onChange={this.inputHandler}
                name="username"
                value={username}
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Age</label>
            <div className="col-sm-10">
              <input
                onChange={this.inputHandler}
                name="age"
                value={age}
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">City</label>
            <div className="col-sm-10">
              <input
                onChange={this.inputHandler}
                name="city"
                value={city}
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Country</label>
            <div className="col-sm-10">
              <input
                onChange={this.inputHandler}
                name="country"
                value={country}
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Zipcode</label>
            <div className="col-sm-10">
              <input
                onChange={this.inputHandler}
                name="zipcode"
                value={zipcode}
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <button
            onClick={this.addUserSubmit}
            className="btn btn-outline-primary ml-5 mr-2 my-5 px-5"
          >
            ADD USER
          </button>
          <button
            onClick={this.handleSubmit}
            className="btn btn-outline-primary mx-2 my-5 px-5"
          >
            SUBMIT
          </button>
          <button
            onClick={this.loginRoute}
            className="btn btn-outline-info mx-2 my-5 px-5"
          >
            BACK TO LOGIN
          </button>
          <button
            onClick={this.handleMain}
            className="btn btn-outline-secondary mx-2 my-5 px-5"
          >
            SWITCH TO BIGBEE
          </button>
      </div>
    );
  }
}
export default Form;
