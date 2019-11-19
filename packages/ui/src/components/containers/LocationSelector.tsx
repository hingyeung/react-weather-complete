import { AppState } from "../../types";
import { connect } from "react-redux";
import LocationSelector from "../ui/LocationSelector";
import { setLocationWithThunk } from "../../actions/LocationActions";
import Location from "../../services/Location";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export const DEFAULT_POSITION = {lat: -37.888071599999996, lng: 145.1664597};

const mapStateToProps = (state: AppState) => ({
  // defaultPosition: {lat: state.location.lat, lng: state.location.lon}
  defaultPosition: state.location ? {lat: state.location.lat, lng: state.location.lon} : DEFAULT_POSITION
});

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, AnyAction>) => ({
  onLocationChange: (selectedLocation: any) => {
    console.log('location change event at LocationSelector');
    dispatch(
      setLocationWithThunk(new Location(selectedLocation.position.lat, selectedLocation.position.lng))
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationSelector);
