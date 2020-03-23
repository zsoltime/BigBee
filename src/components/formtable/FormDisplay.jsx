import React, { Component } from "react";
import Form from "./Form";
import Table from "./Table";
import { Redirect } from "react-router-dom";
class FormDisplay extends Component {
  state = { data: [], showForm: true ,main:false};
  handleButtonSubmit = data => {
    this.setState({
      data: [...this.state.data, data]
    });
  };
  hideForm =_=> {
    this.setState({ showForm: false });
  };
  removeData = id => {
    const newData = this.state.data.filter(d => {
      if (d.id !== id) return true;
      return false;
    });
    this.setState({ data: newData });
  };
  handleMain = _ => {
    this.setState({ main: true });
  };
  render() {
    const { showForm, data } = this.state;
    if(this.state.main) return <Redirect to='/' />
    return (
      <>
        {showForm && <Form handleButtonSubmit={this.handleButtonSubmit} hideForm={this.hideForm} />}
        {data.length>0 && <Table data={data} removeData={this.removeData} />}
        {(data.length === 0 && !showForm) && <><p>There is no data to display</p>
        <button onClick={this.handleMain} className="btn btn-outline-secondary mx-2 px-5">SWITCH TO BigBee</button></>}
      </>
    );
  }
}
export default FormDisplay;
