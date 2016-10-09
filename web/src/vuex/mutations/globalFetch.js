import * as ActionTypes from 'actions/actionTypes';

export const fetchStart = state => {
  state.globalFetch = {
    display: true,
    message: '',
    isFething: true,
  };
};

export const fetchSuccess = state => {
  state.globalFetch.isFething = false;
};

export const fetchFail = (state, json) => {
  state.globalFetch = {
    display: true,
    message: json.message,
    isFething: false,
  };
};
