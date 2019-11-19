import { connect } from 'react-redux';
import { AppState } from '../../types';
import Summary from '../ui/Summary';

const mapStateToProps = (state: AppState) => ({
  text: state.summary
});

export default connect(mapStateToProps)(Summary);