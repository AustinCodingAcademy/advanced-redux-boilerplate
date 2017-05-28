import React from "react";
import PropTypes from "prop-types";

function Counter(props) {
  return (
    <span>
      Current Value: {props.value}
    </span>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired
};

export default Counter;
