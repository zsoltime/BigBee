import React from "react";
const Grid = props => {
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Form Tables</h5>
              <p className="card-text">Project with various Forms and Tables</p>
              <button onClick={props.handleFormTable} className="btn btn-info btn-sm">
                Go to Project
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Music Lyrics</h5>
              <p className="card-text">
                With Music Lyrics you can find lyrics for any music
              </p>
              <button onClick={props.handleMusicLyrics} className="btn btn-info btn-sm">
              Go to Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Defect Tracker</h5>
              <p className="card-text">
                An Application to track defect details for both developers and testers
              </p>
              <button onClick={props.defectTracker} className="btn btn-info btn-sm">
              Go to Project
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Project</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <button href="#" className="btn btn-info btn-sm">
              Go to Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Redux Counter</h5>
              <p className="card-text">
                A basic Counter using CRUD Operations with state managed in Redux
              </p>
              <button onClick={props.reduxCounter} className="btn btn-info btn-sm">
              Go to Project
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Project</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <button href="#" className="btn btn-info btn-sm">
              Go to Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Project</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <button href="#" className="btn btn-info btn-sm">
              Go to Project
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Hooks</h5>
              <p className="card-text">
                A Simple Employee Table with json Data with state managed in hooks
              </p>
              <button onClick={props.hooks} className="btn btn-info btn-sm">
              Hooks
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
