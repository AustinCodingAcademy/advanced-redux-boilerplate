import Counter from "../components/Counter";
import {connect} from "react-redux";
import {
  increaseCounter,
  decreaseCounter
} from "../actions";

function mapStateToProps(state) {
  return {
    value: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrease: () => {
      console.log('increase');
      dispatch(increaseCounter());
    },
    onDecrease: () => {
      dispatch(decreaseCounter());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
