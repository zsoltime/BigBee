import React from "react";
import { Link } from "react-router-dom";
import shortid from "shortid";
import DropDown from "../common/Dropdown";
const DefectTable = props => {
  return (
    <>
      <div className="shadow-lg p-3 mb-5 my-3 bg-white text-center rounded">
        <h4>Filter Details</h4>
        <DropDown
          title="Priority   "
          dropDownItem1="One"
          dropDownItem2="Two"
          dropDownItem3="Three"
        />
        <DropDown
          title="Category"
          dropDownItem1="Functional"
          dropDownItem2="Sanitory"
          dropDownItem3="Regression"
        />
      </div>
      <h4 className="my-5 text-center">Defect Details</h4>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Defect Category</th>
            <th scope="col" className="text-center">
              Description
            </th>
            <th scope="col">Priority</th>
            <th scope="col">Status</th>
            <th scope="col">Status Changed</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(data => (
            <tr key={data.id}>
              <th scope="row">{data.title}</th>
              <td>{data.description}</td>
              <td>{data.priority}</td>
              <td>open</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => {
                    props.removeData(data.id);
                  }}
                >
                  close
                </button>{" "}
                <button className="btn btn-primary btn-sm">
                  {props.defect}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DefectTable;
