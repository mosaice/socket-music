import * as ActionTypes from 'actions/actionTypes';

export const searchSuccess = (state, { json, query }) => {
  state.search = {
    query,
    data: json.data,
    meta: json.meta,
  };
};
