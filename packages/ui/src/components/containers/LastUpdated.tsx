import {AppState} from "../../types";
import {connect} from "react-redux";
import LastUpdated from "../ui/LastUpdated";

const mapStateToProps = (state: AppState) => ({
  timestamp: state.currently.time
});

export default connect(mapStateToProps)(LastUpdated);