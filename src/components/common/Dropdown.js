import React from 'react';
import { Dropdown, DropdownButton } from "react-bootstrap";
const DropDown = props => {
  return (
    <>
    <DropdownButton
      className="d-inline-block ml-2"
      id="dropdown-basic-button"
      title={props.title}
    >
      <Dropdown.Item to='/deftracker/defdetails/dropDownItem1' onClick={props.onClick}>{props.dropDownItem1}</Dropdown.Item>
      <Dropdown.Item to='/deftracker/defdetails/dropDownItem2'onClick={props.onClick}>{props.dropDownItem2}</Dropdown.Item>
  <Dropdown.Item to='/deftracker/defdetails/dropDownItem3' onClick={props.onClick}>{props.dropDownItem3}</Dropdown.Item>
    </DropdownButton>
    </>
  );
};
export default DropDown;
