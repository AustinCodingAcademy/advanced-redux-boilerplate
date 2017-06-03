import React from "react";
import PropTypes from "prop-types";

function Counter(props) {
  return (
    <span>
      <button onClick={props.onIncrease}>+</button>
      Current Value: {props.value}
      <button onClick={props.onDecrease}>-</button>
    </span>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired
};

export default Counter;
