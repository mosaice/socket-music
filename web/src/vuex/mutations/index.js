import * as types from 'actions/actionTypes';
import * as fetch from './globalFetch';
import { searchSuccess } from './search';
import * as Audio from './audio';
import * as List from './playList';
import saveComponent from './components';


export default {
  [types.FETCH_START]: fetch.fetchStart,
  [types.FETCH_SUCCESS]: fetch.fetchSuccess,
  [types.FETCH_FAIL]: fetch.fetchFail,
  [types.SEARCH_SUCCESS]: searchSuccess,
  [types.SAVE_COMPONENT]: saveComponent,
  [types.SAVE_AUDIO_DOM]: Audio.saveAudioDom,
  [types.START_PLAY_AUDIO]: Audio.startPlayAudio,
  [types.CASUAL_PALY]: List.casualPlay,
  [types.PAUSE_AUDIO]: Audio.pauseAudio,
  [types.LIST_GO_NEXT]: List.listGoNext,
  [types.LIST_GO_PREV]: List.listGoPrev,
  [types.ADD_TO_LIST]: List.addToList,
  [types.REMOVE_FROM_LIST]: List.removeFromList,
};
