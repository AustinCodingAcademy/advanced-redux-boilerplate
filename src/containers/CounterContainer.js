import Counter from "../components/Counter";
import {connect} from "react-redux";

function mapStateToProps(state) {
  console.log(state);
  return {
    value: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
