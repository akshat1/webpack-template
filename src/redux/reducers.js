import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import * as Actions from './actions';

const sampleValue = (state = 'default-sample-value', { type, value }) =>
  type === Actions.SampleAction ? value : state;

export default history => {
  const router = connectRouter(history);
  return combineReducers({
    router,
    sampleValue,
  });
};

