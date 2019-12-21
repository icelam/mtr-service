import { combineReducers } from 'redux';
import lineStatusReducer from './lineStatus.reducer';

const rootReducer = combineReducers({
  lines: lineStatusReducer
});

export default rootReducer;
