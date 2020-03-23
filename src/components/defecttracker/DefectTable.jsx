import React from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import DropDown from '../common/Dropdown';
const DefectTable = props => {
  return (
      <>
      <div className="shadow-lg p-3 mb-5 my-3 bg-white text-center rounded">
            <h4>Filter Details</h4>
            <DropDown title="Priority   " dropDownItem1='One' dropDownItem2='Two' dropDownItem3='Three'/>
            <DropDown title="Category" dropDownItem1='Functional' dropDownItem2='Sanitory' dropDownItem3='Regression'/>  
          </div>
      <h4 className="my-5 text-center">Defect Details</h4>
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Defect Category</th>
          <th scope="col" className='text-center'>Description</th>
          <th scope="col">Priority</th>
          <th scope="col">Status</th>
          <th scope="col">Status Changed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Sanitory</th>
          <td>Submit Button coming to the extreme left</td>
          <td>Two</td>
          <td>open</td>
  <td>{!(props.link1) ?<><Link onClick={props.linkHandler1}>close</Link> <Link onClick={props.linkHandler1}>Defect</Link></>:<p>Default data</p>}</td>
        </tr>
        <tr>
          <th scope="row" >Functional</th>
          <td>While Submitting the form data,popup should appear</td>
          <td>One</td>
          <td>open</td>
          <td>{!(props.link2) ?<><Link onClick={props.linkHandler2}>close</Link> <Link onClick={props.linkHandler2}>Defect</Link></>:<p>Default data</p>}</td>
        </tr>
        <tr>
          <th scope="row">Regression</th>
          <td>Add remove user functionality</td>
          <td>Three</td>
          <td>closed</td>
          <td>No action pending</td>
        </tr>
        {props.data.map(data=>(
        <tr key={data.id}>
          <th scope="row">{data.title}</th>
          <td>{data.description}</td>
          <td>{data.priority}</td>
          <td>open</td>
          <td><Link  onClick={()=>{props.removeData(data.id)}}>close</Link> {!(props.defectLocked) ? <Link onClick={()=>props.defectHandler(data.id)}>{props.defect}</Link>:<p>Defect Locked</p>}</td>
        </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default DefectTable;
