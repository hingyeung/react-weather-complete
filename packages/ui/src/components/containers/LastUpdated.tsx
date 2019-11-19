import {AppState} from "../../types";
import {connect} from "react-redux";
import LastUpdated from "../ui/LastUpdated";

const mapStateToProps = (state: AppState) => ({
  timestamp: state.lastUpdated
});

export default connect(mapStateToProps)(LastUpdated);