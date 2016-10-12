
const state = {
  globalFetch: {
    display: true,
    message: '',
    isFething: false,
  },
  search: {
    data: [],
    query: {},
    meta: {},
  },
  audio: {
    dom: {},
    timeLength: null,
    currentTime: null,
    playing: false,
  },
  playList: {
    list: [],
    current: 0,
    casual: {},
    isCasual: false,
  },
  components: {
    notify: {},
  },
};


export default state;
