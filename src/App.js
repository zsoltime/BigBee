import React, { Component } from "react";
import "./App.css";
import Grid from "./utils/Grid";
class App extends Component {
  handleFormTable = _ => {
    this.props.history.push("/formtable");
  };
  handleMusicLyrics = _ => {
    this.props.history.push("/musiclyrics");
  };
  defectTracker = _ => {
    this.props.history.push("/deftracker");
  };
  reduxCounter=_=>{
    this.props.history.push('/counter')
  }
  handleProjects = _ => {
    this.props.history.push("/");
  };
  mernStack = _ => {
    this.props.history.push("/mern");
  };
  handleHooks=_=>{
    this.props.history.push("/hooks");
  }
  render() {
    console.log(this.props);
    return (
      <>
        {/* <Navb projects={this.handleProjects} mernStack={this.mernStack} /> */}
          <Grid
            handleFormTable={this.handleFormTable}
            handleMusicLyrics={this.handleMusicLyrics}
            defectTracker={this.defectTracker}
            reduxCounter={this.reduxCounter}
            hooks={this.handleHooks}
          />
      </>
    );
  }
}
export default App;
