import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import shortid from 'shortid';
class AddDefect extends Component {
  state = {
    title: "Select",
    priority: "Select",
    functional: false,
    sanitory: false,
    regression: false,
    one: false,
    two: false,
    three: false,
    description:''
  };
  functionalTesting = _ => {
    this.setState({
      functional: true,
      sanitory: false,
      regression: false,
      title: "Functional"
    });
  };
  sanitoryTesting = _ => {
    this.setState({
      functional: false,
      sanitory: true,
      regression: false,
      title: "Sanitory"
    });
  };
  regressionTesting = _ => {
    this.setState({
      functional: false,
      sanitory: false,
      regression: true,
      title: "Regression"
    });
  };
  oneHandler = _ => {
    this.setState({ one: true, two: false, three: false, priority: "One" });
  };
  twoHandler = _ => {
    this.setState({ one: false, two: true, three: false, priority: "Two" });
  };
  threeHandler = _ => {
    this.setState({ one: false, two: false, three: true, priority: "Three" });
  };
  textHandler=e=>{
    const {name,value}=e.target;
      this.setState({
        [name]:value
      })
  }
  addDefectHandler=_=>{
    const data=this.state;
    data.id=shortid.generate();
    this.props.onAddDefect(data);
  }
  render() {
    return (
      <div>
        <h3 className="my-3 text-center">Defect Details</h3>
        <h4 className="d-inline-block">Category :</h4>
        <DropdownButton
          className="d-inline-block ml-2"
          id="dropdown-basic-button"
          title={this.state.title}
        >
          <Dropdown.Item
            to="/deftracker/defdetails/dropDownItem1"
            onClick={this.functionalTesting}
          >
            Functional
          </Dropdown.Item>
          <Dropdown.Item
            to="/deftracker/defdetails/dropDownItem2"
            onClick={this.sanitoryTesting}
          >
            Sanitory
          </Dropdown.Item>
          <Dropdown.Item
            to="/deftracker/defdetails/dropDownItem3"
            onClick={this.regressionTesting}
          >
            Regression
          </Dropdown.Item>
        </DropdownButton>
        <br />
        <div className="form-group basic-textarea rounded-corners">
          <textarea
            width="40%"
            className="form-control z-depth-1 "
            id="exampleFormControlTextarea345"
            rows="3"
            placeholder="Write your comment..."
            name='description'
            value={this.state.description}
            onChange={this.textHandler}
          />
        </div>
        <br />
        <h4 className="d-inline-block">Priority :</h4>
        <DropdownButton
          className="d-inline-block ml-2"
          id="dropdown-basic-button"
          title={this.state.priority}
        >
          <Dropdown.Item
            to="/deftracker/defdetails/dropDownItem1"
            onClick={this.oneHandler}
          >
            One
          </Dropdown.Item>
          <Dropdown.Item
            to="/deftracker/defdetails/dropDownItem2"
            onClick={this.twoHandler}
          >
            Two
          </Dropdown.Item>
          <Dropdown.Item
            to="/deftracker/defdetails/dropDownItem3"
            onClick={this.threeHandler}
          >
            Three
          </Dropdown.Item>
        </DropdownButton>
        <br/>
        <button className="d-inline-block my-3 btn btn-success" onClick={this.addDefectHandler}>Add Defect</button>
      </div>
    );
  }
}
export default AddDefect;
