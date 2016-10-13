import * as types from 'actions/actionTypes';


export const listGoNext = ({ commit }) => {
  commit(types.LIST_GO_NEXT);
};

export const listGoPrev = async ({ commit }) => {
  commit(types.LIST_GO_PREV);
};

export const addToList = ({ commit }, song) => {
  commit(types.ADD_TO_LIST, song);
};

export const removeFromList = ({ commit }, index) => {
  commit(types.REMOVE_FROM_LIST, index);
};

export const casualPlay = async ({ commit, dispatch }, song) => {
  commit(types.CASUAL_PALY, song);
};
