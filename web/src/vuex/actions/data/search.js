import * as types from 'actions/actionTypes';
import { SEARCH } from 'actions/urls';
import { get } from 'api';

export default async ({ commit }, query) => {
  commit(types.FETCH_START);
  const json = await get(SEARCH, query);
  if (!json) return commit(types.FETCH_FAIL, '歌曲搜索失败');
  commit(types.SEARCH_SUCCESS, { json, query });
  commit(types.FETCH_SUCCESS);
  return null;
};
