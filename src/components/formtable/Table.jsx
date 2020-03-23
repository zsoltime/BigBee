import React, { Component } from "react";

class Table extends Component {
    /* removeData=id=>{
        this.props.removeData(id)
    } */
  render() {
    return (
      <div className='container my-2'>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Country</th>
              <th>Zipcode</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
              {this.props.data.map(d=>{
                  return(
                      <tr key={d.id}>
                          <td>{d.username}</td>
                          <td>{d.age}</td>
                          <td>{d.city}</td>
                          <td>{d.country}</td>
                          <td>{d.zipcode}</td>
                          <button className="btn btn-danger mt-2" onClick={()=>{this.props.removeData(d.id)}}>Remove</button>
                      </tr>
                  )
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Table;
