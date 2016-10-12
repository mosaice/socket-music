import * as types from 'actions/actionTypes';

export default ({ commit }, name, component) => {
  commit(types.SAVE_COMPONENT, name, component);
};
