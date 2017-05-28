import React from "react";
import PropTypes from "prop-types";

function Counter(props) {
  return (
    <div>
      <button onClick={props.onIncrease} >Increase+</button>
      <h3>Current Value: {props.value}</h3>
      <button onClick={props.onDecrese} >Decrease-</button>
    </div>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrese: PropTypes.func.isRequired

};

export default Counter;
