import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { lineStatusActions } from '@store/actions';
import StatusSummary from '@pages/StatusSummary';
import { serviceCheckUtils } from '@utils';

const mapStateToProps = (state) => ({
  fetchStatus: state.lines.fetchStatus,
  lineCount: state.lines.data.length,
  abnormalLines: serviceCheckUtils.getAbnormalLines(state.lines.data),
  serviceNormal: serviceCheckUtils.isServiceNormal(state.lines.data),
  serviceEnded: serviceCheckUtils.isServiceEnded(state.lines.data)
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(lineStatusActions, dispatch)
});

const StatusSummaryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusSummary);

export default StatusSummaryContainer;
