import React, { Component } from "react";
import DefectTable from "./DefectTable";
import AddDefect from "./AddDefect";
import { defectdata } from "./defectData";
class DetailsPage extends Component {
  state = {
    defectView: true,
    addDefect: false,
    data: [],
    link1: false,
    link2: false,
    defect: "defect",
    status: false
  };
  componentDidMount = () => {
    this.setState({ data: defectdata() });
  };
  handleMain = () => {
    this.props.history.push("/");
  };
  defectHandler = () => {
    this.setState({ defectView: true, addDefect: false });
  };
  addDefectHandler = () => {
    this.setState({ addDefect: true, defectView: false });
  };
  logoutHandler = _ => {
    this.props.history.push("/deftracker");
  };
  onAddDefectData = data => {
    console.log(data);
    const updatedData = [...this.state.data, data];
    this.setState({ data: updatedData, addDefect: false, defectView: true });
  };
  removeData = id => {
    const newData = this.state.data.filter(d => d.id !== id);
    this.setState({ data: newData });
  };
  linkHandler1 = _ => {
    this.setState({ link1: true });
  };
  linkHandler2 = _ => {
    this.setState({ link2: true });
  };
  defectHandler = id => {
    this.setState((prevState)=>{data:prevState.data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          status: !item.status
        };
      }
      return item;
      
    })})
  };

  render() {
    const {
      defectView,
      addDefect,
      data,
      link1,
      link2,
      defect,
      status,
      defectLocked
    } = this.state;
    console.log(data, "DefectDAta");
    return (
      <div className="container my-5">
        <div className="shadow-lg p-3 mb-5 bg-white text-center rounded">
          <h2>Defect Tracker</h2>
          <button className="btn btn-primary mb-2" onClick={this.logoutHandler}>
            Logout
          </button>
          <br />
          <button
            className="btn btn-primary btn-sm"
            onClick={this.addDefectHandler}
          >
            Add Defect
          </button>{" "}
          <button
            className="btn btn-primary btn-sm"
            onClick={this.defectHandler}
          >
            View Defects
          </button>
          {defectView && (
            <DefectTable
              data={data}
              linkHandler1={this.linkHandler1}
              linkHandler2={this.linkHandler2}
              defectHandler={this.defectHandler}
              removeData={this.removeData}
              link1={link1}
              link2={link2}
              defect={defect}
              status={status}
            />
          )}
          {addDefect && <AddDefect onAddDefect={this.onAddDefectData} />}
          <button onClick={this.handleMain} className="btn btn-dark my-5">
            Switch to BigBee
          </button>
        </div>
      </div>
    );
  }
}

export default DetailsPage;
