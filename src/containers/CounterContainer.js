import Counter from "../components/Counter";
import {connect} from "react-redux";
import {
  increaseCounter,
  decreaseCounter
} from "../actions";


function mapStateToProps(state) {
  console.log(state);
  return {
    value: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrease: () => {
      console.log("on increase");
      dispatch(increaseCounter());
    },
    onDecrese: () => {
      console.log("on decrease");
      dispatch(decreaseCounter());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
