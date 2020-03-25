import React, { useState, useEffect } from "react";
import axios from "axios";
const Index = props => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios.get("employees.json").then(result => setEmployees(result.data));
  }, []);
  const addEmployee=()=>{
      setEmployees([...employees,{ empId: 8761, name:'Dinesh',designation:'AC'}])
  }
  const routeToMain=()=>{
    props.history.push('/')
  }
  return (
    
    <>
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">EmpID</th>
            <th scope="col">Name</th>
            <th scope="col">Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.empId}>
              <td>{emp.empId}</td>
              <td>{emp.name}</td>
              <td>{emp.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
          <button className="btn btn-success btn-sm" onClick={addEmployee}>Add Employee</button>
        <button onClick={routeToMain} className="btn btn-danger btn-sm">
          Switch to Main
        </button>
      </div>
    </>
  );
};

export default Index;
