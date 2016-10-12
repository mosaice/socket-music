
export const saveAudioDom = (state, dom) => {
  const { audio } = state;
  audio.dom = dom;
};

const tryPlay = state => {
  const { components, playList } = state;
  if (!playList.list[playList.current]) {
    components.notify({
      title: '播放错误',
      message: '请确认播放列表无误',
      type: 'warning',
    });
    return false;
  }
  return true;
};

export const startPlayAudio = (state) => {
  const { audio } = state;
  if (!tryPlay(state)) return null;
  audio.playing = true;
  return audio.dom.play();
};

export const pauseAudio = (state) => {
  const { audio } = state;
  if (audio.playing) {
    audio.playing = false;
    return audio.dom.pause();
  }
  if (!tryPlay(state)) return null;
  audio.playing = true;
  return audio.dom.play();
};
