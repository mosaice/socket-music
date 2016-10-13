import * as types from 'actions/actionTypes';

const actions = [types.LIST_GO_NEXT, types.LIST_GO_PREV, types.CASUAL_PALY];

export default store => {
  store.subscribe((mutation, { audio }) => {
    if (actions.includes(mutation.type)) {

    }
  });
};
