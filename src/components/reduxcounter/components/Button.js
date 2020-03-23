import React from 'react';
const Button = props => {
  return (
    <button type="button" class="btn btn-warning col-2 btn-sm my-5 mx-3" onClick={props.clicked}>
      {props.label}
    </button>
  );
};

export default Button;
