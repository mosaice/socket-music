import * as types from 'actions/actionTypes';

export default store => {
    // socket.on('data', data => {
    //   store.commit('receiveData', data)
    // })
  store.subscribe(mutation => {
    if (mutation.type === types.SAVE_AUDIO_DOM) {
      const dom = mutation.payload;
      dom.addEventListener('timeupdate', e => {
        console.log('aaa');
        console.log(e);
      }, false);
    }

        		// if (!isNaN(audio.duration)) {
        		// 	var progressValue = (audio.currentTime / audio.duration).toFixed(3);
            // var percentage = progressValue * 100 + '%';
        		//   $('.audio-bar').width(percentage);
        		// };
  });
};
