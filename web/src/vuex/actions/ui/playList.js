import * as types from 'actions/actionTypes';


export const listGoNext = ({ commit, dispatch }) => {
  dispatch(types.LIST_GO_NEXT)
  .then(() => commit(types.START_PLAY_AUDIO));
};

export const listGoPrev = ({ commit, dispatch }) => {
  dispatch(types.LIST_GO_PREV)
  .then(() => commit(types.START_PLAY_AUDIO));
};

export const addToList = ({ commit }, song) => {
  commit(types.ADD_TO_LIST, song);
};

export const removeFromList = ({ commit }, index) => {
  commit(types.REMOVE_FROM_LIST, index);
};

export const casualPlay = ({ commit, dispatch }, song) => {
  dispatch(types.CASUAL_PALY, song)
  .then(() => commit(types.START_PLAY_AUDIO));
};
