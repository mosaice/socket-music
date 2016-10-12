

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

export const addToList = (state, song) => {
  const { playList } = state;
  playList.list.push(song);
};

export const removeFromList = (state, index) => {
  const { playList } = state;
  playList.list.splice(index, 1);
};

export const casual = (state, song) => {
  const { playList } = state;
  playList.casual = song;
  playList.isCasual = true;
};
