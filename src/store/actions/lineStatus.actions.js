import { lineStatusType } from '@store/types';
import lineStatusService from '@services/lineStatus';
import { xmlUtils } from '@utils';

const fetchLineStatusFinish = () => ({
  type: lineStatusType.FETCH_LINE_STATUS_FINISH,
  fetchStatus: 'success'
});

const fetchLineStatusError = () => ({
  type: lineStatusType.FETCH_LINE_STATUS_ERROR,
  fetchStatus: 'failed',
  data: []
});

const updateLineStatusData = (lines) => ({
  type: lineStatusType.UPDATE_LINE_STATUS_DATA,
  data: lines
});

const clearLineStatusData = () => ({
  type: lineStatusType.CLEAR_LINE_STATUS_DATA
});

const fetchLineStatus = () => (dispatch) => {
  lineStatusService.getLineStatus().then((response) => {
    const data = xmlUtils.xml2js(response.data);

    if (data && data.ryg_status && data.ryg_status.line && Array.isArray(data.ryg_status.line)) {
      const { ryg_status: { line } } = data;
      dispatch(updateLineStatusData(line));
      dispatch(fetchLineStatusFinish());
    } else {
      dispatch(clearLineStatusData());
      dispatch(fetchLineStatusError());
    }
  });
};

export default { fetchLineStatus, clearLineStatusData };
