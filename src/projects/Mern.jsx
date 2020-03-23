import React, { Component } from "react";

class Mern extends Component {
  handleMain = _ => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <p>Mern Projects are in progress</p>
        <button onClick={this.handleMain} className="btn btn-secondary btn-sm">
          Switch to BigBee
        </button>
      </div>
    );
  }
}
export default Mern;
