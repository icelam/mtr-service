import { lineStatusType } from '@store/types';
import { initialLineStatusState } from '@store/states';

export default (state = initialLineStatusState, action) => {
  switch (action.type) {
    case lineStatusType.FETCH_LINE_STATUS_FINISH:
      return {
        ...state,
        fetchStatus: action.fetchStatus
      };
    case lineStatusType.FETCH_LINE_STATUS_ERROR:
      return {
        ...state,
        fetchStatus: action.fetchStatus,
        data: action.data
      };
    case lineStatusType.UPDATE_LINE_STATUS_DATA:
      return {
        ...state,
        data: action.data
      };
    case lineStatusType.CLEAR_LINE_STATUS_DATA:
      return {
        ...state,
        data: []
      };
    case lineStatusType.CLEAR_FETCH_STATUS:
      return {
        ...state,
        fetchStatus: undefined
      };
    default:
      return state;
  }
};
