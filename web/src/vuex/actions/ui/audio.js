import * as types from 'actions/actionTypes';

export const saveAudioDom = ({ commit }, dom) => {
  commit(types.SAVE_AUDIO_DOM, dom);
};

export const playAudio = ({ commit }) => {
  commit(types.START_PLAY_AUDIO);
};

export const pauseAudio = ({ commit }) => {
  commit(types.PAUSE_AUDIO);
};

export const resetAudio = ({ commit }) => {
  commit(types.RESET_AUDIO);
};

export const changeCurrentTime = ({ commit }, time) => {
  commit(types.CHANGE_CURRENT_TIME, time);
};
