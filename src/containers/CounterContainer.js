import Counter from "../components/Counter";
import {connect} from "react-redux";
import {
  increaseCounter,
  decreaseCounter
} from "../actions";


function mapStatetoProps(state) {
  return {
    value: state.counter
  };

}

function mapDispatchToProps(dispatch) {
  return {
    onIncrease: () => {
      dispatch(increaseCounter());
    },
    onDecrease: () => {
      dispatch(decreaseCounter());
    }
  };
}

export default connect(mapStatetoProps,
   mapDispatchToProps
 )(Counter);
