import React from "react";
import PropTypes from "prop-types";


function Counter(props) {
  return (
    <div>
      <button onClick={props.onIncrease}>+</button>
      Current Value: {props.value}
      <button onClick={props.onDecrease}>-</button>
    </div>
  );
}



Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

export default Counter;
