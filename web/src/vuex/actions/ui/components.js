import * as types from 'actions/actionTypes';

export default ({ commit }, obj) => {
  commit(types.SAVE_COMPONENT, obj);
};
