/**
* @Author: Li Bang <mosaice>
* @Date:   2016-11-01T00:25:26+08:00
* @Email:  libang@giga.build
* @Last modified by:   mosaice
* @Last modified time: 2016-11-17T14:18:36+08:00
*/


import { Notification as notify } from 'element-ui';
import { random, indexOf } from 'lodash';

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
  if (playList.list.length === 1) {
    playList.list = [];
    playList.current = 0;
    return null;
  }
  playList.list.splice(index, 1);
  if (playList.current > index) playList.current--;
};

export const casualPlay = (state, song) => {
  const { playList } = state;
  playList.casual = song;
  playList.isCasual = true;
};


export const randomPlay = (state) => {
  const { playList } = state;
  if (!playList.list.length) return null;
  playList.isCasual = false;
  const randomIndex = random(playList.list.length - 1);
  console.log(randomIndex);
  playList.current = randomIndex;
};

export const changePlayMode = (state) => {
  const mode = ['list', 'shuffle', 'loop'];
  const { playList } = state;
  let modeIndex = indexOf(mode, playList.playMode) + 1;
  if (modeIndex === mode.length) modeIndex = 0;
  playList.playMode = mode[modeIndex];
};
