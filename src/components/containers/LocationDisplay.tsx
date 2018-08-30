import { AppState } from "../../types";
import { connect } from "react-redux";
import LocationDisplay from "../ui/LocationDisplay";

const mapStateToProps = (state: AppState) => ({
  name: state.location.display
});

export default connect(mapStateToProps)(LocationDisplay);