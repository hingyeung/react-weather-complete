import { AppState } from "../../types";
import { connect } from "react-redux";
import LocationDisplay from "../ui/LocationDisplay";
import { Dispatch } from "redux";
import { toggleShowLocationSelector } from "../../actions/UIActions";

const mapStateToProps = (state: AppState) => ({
  name: state.location.display
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClick: () => dispatch(toggleShowLocationSelector())
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationDisplay);