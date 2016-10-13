import * as types from 'actions/actionTypes';

export default store => {
  store.subscribe(mutation => {
    if (mutation.type === types.SAVE_AUDIO_DOM) {
      const dom = mutation.payload;
      dom.addEventListener('timeupdate', () => {
        store.commit(types.SAVE_CURRENT_TIME, { current: dom.currentTime, duration: dom.duration });
      }, false);

      dom.addEventListener('ended', () => {
        store.commit(types.LIST_GO_NEXT);
      }, false);

      dom.addEventListener('canplay', () => {
        store.commit(types.START_PLAY_AUDIO);
      }, false);
    }
  });
};
