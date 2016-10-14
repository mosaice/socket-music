import { Notification as notify } from 'element-ui';

export const listGoNext = (state) => {
  const { playList } = state;
  if (!playList.list.length) return null;
  playList.isCasual = false;
  if (playList.list.length - 1 === playList.current) {
    playList.current = 0;
  } else {
    playList.current++;
  }
  return null;
};

export const listGoPrev = (state) => {
  const { playList } = state;
  if (!playList.list.length) return null;
  playList.isCasual = false;
  if (playList.current === 0) {
    playList.current = playList.list.length - 1;
  } else {
    playList.current--;
  }
  return null;
};

export const listGoSome = (state, index) => {
  const { playList } = state;
  if (!playList.list.length) return null;
  playList.isCasual = false;
  if (playList.list.current === index) return null;
  playList.current = index;
  return null;
};

export const addToList = (state, song) => {
  const { playList } = state;
  if (playList.list.includes(song)) {
    return notify({
      title: '歌曲已存在哦',
      message: '请不要重复添加',
      type: 'info',
    });
  }
  playList.list.push(song);
  return null;
};

export const removeFromList = (state, index) => {
  const { playList } = state;
  playList.list.splice(index, 1);
  if (playList.current > index) playList.current--;
};

export const casual = (state, song) => {
  const { playList } = state;
  playList.casual = song;
  playList.isCasual = true;
};
