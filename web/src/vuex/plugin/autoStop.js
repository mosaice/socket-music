import * as types from 'actions/actionTypes';


export default store => {
  store.subscribe((mutation) => {
    if (mutation.type === types.REMOVE_FROM_LIST && !store.state.playList.list.length) {
      store.commit(types.RESET_AUDIO);
    }
  });
};
