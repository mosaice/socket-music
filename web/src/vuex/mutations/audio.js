import { Notification } from 'element-ui';


export const saveAudioDom = (state, dom) => {
  const { audio } = state;
  audio.dom = dom;
};

const tryPlay = state => {
  const { playList } = state;
  if (!playList.list[playList.current]) {
    Notification({
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
  audio.duration = 0;
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

export const saveCurrentTime = (state, { current, duration }) => {
  const { audio } = state;
  audio.current = current;
  audio.duration = duration;
};

export const resetAudio = state => {
  const { audio } = state;
  audio.dom.src = '';
  audio.current = 0;
  audio.duration = 0;
  audio.playing = false;
};

export const changeCurrentTime = (state, time) => {
  const { audio } = state;
  audio.current = time;
  audio.dom.currentTime = time;
};
