import React, { Component } from "react";
import DefectTable from "./DefectTable";
import { Link } from "react-router-dom";
import AddDefect from './AddDefect';

class DetailsPage extends Component {
  state={
    defectView:true,addDefect:false,data:[],link1:false,link2:false,defect:'defect' ,defectLocked:false
  }
  handleMain = () => {
    this.props.history.push("/");
  };
  defectHandler=()=>{
    this.setState({defectView:true,addDefect:false})
  }
  addDefectHandler=()=>{
    this.setState({addDefect:true,defectView:false})
  }
  logoutHandler=_=>{
    this.props.history.push('/deftracker');
  }
  onAddDefectData=data=>{
    console.log(data);
    const updatedDate=[...this.state.data,data];
    this.setState({data:updatedDate,addDefect:false,defectView:true})
  }
  removeData=id=>{
    const newData=this.state.data.filter(d=>d.id !== id);
    this.setState({data:newData})
  }
  linkHandler1=_=>{
    this.setState({link1:true})
  }
  linkHandler2=_=>{
    this.setState({link2:true})
  }
  defectHandlerr=id=>{
    const defect = this.state.data.find(d=>d.id === id);
   // defect=[]
    this.setState({defectLocked:true}) 
    //this.setState({defect:'Defect Locked'})
  }
  render() {
    const{defectView ,addDefect ,data ,link1 ,link2 ,defect ,defectLocked}=this.state;
    console.log(data,'DefectDAta');
    return (
      <div className="container my-5">
        <div className="shadow-lg p-3 mb-5 bg-white text-center rounded">
          <h2>Defect Tracker</h2>
          <Link onClick={this.logoutHandler}>Logout</Link>
          <br />
          <Link onClick={this.addDefectHandler}>Add Defect</Link> <Link onClick={this.defectHandler}>View Defects</Link>
          {defectView&&<DefectTable data={data} linkHandler1={this.linkHandler1} linkHandler2={this.linkHandler2}
          defectHandler={this.defectHandlerr} removeData={this.removeData} link1={link1} link2={link2} defect={defect} defectLocked={defectLocked}/>}
          {addDefect&&<AddDefect onAddDefect={this.onAddDefectData}/>}
          <button onClick={this.handleMain} className="btn btn-dark my-5">
            Switch to BigBee
          </button>
        </div>
      </div>
    );
  }
}

export default DetailsPage;