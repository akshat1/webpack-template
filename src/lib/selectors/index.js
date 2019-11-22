import _ from 'lodash';

export const sample = state => state.value;
export const pathname = state => _.get(state, 'router.pathname');
