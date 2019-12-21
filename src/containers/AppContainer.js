import { connect } from 'react-redux';
import { serviceCheckUtils } from '@utils';
import App from '@/App';

const mapStateToProps = (state) => ({
  fetchStatus: state.lines.fetchStatus,
  lineCount: state.lines.data.length,
  serviceNormal: serviceCheckUtils.isServiceNormal(state.lines.data),
  serviceEnded: serviceCheckUtils.isServiceEnded(state.lines.data)
});

const AppContainer = connect(
  mapStateToProps,
  null
)(App);

export default AppContainer;
