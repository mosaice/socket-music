
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
    current: 0,
    duration: 0,
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
