import * as types from 'actions/actionTypes';
import * as fetch from './globalFetch';
import { searchSuccess } from './search';


export default {
  [types.FETCH_START]: fetch.fetchStart,
  [types.FETCH_SUCCESS]: fetch.fetchSuccess,
  [types.FETCH_FAIL]: fetch.fetchFail,
  [types.SEARCH_SUCCESS]: searchSuccess,
};
