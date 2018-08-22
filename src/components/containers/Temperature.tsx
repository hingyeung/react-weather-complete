import {connect} from 'react-redux';
import Temperature from '../ui/Temperature';
import { AppState } from '../../types';
import { Dispatch } from 'redux';

const mapStateToProps = (state: AppState) => {
  console.log(state.temperature);
  return {temperature: state.temperature}
};

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Temperature);