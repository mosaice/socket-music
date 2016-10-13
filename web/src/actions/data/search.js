import * as ActionTypes from 'actions/actionTypes';
import { SEARCH } from 'actions/Urls';
import { get } from 'api';

export default async ({ commit }, query) => {
  commit(ActionTypes.FETCH_START);
  const json = await get(SEARCH, query);
  if (!json) return commit(ActionTypes.FETCH_FAIL, json);
  commit(ActionTypes.SEARCH_SUCCESS, { json, query });
  commit(ActionTypes.FETCH_SUCCESS);
  return null;
};
