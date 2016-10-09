import Vue from 'vue';
import Vuex from 'vuex';
import actions from 'actions';
import mutations from 'mutations';
import state from './state';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  plugins: [createLogger()],
});

export default store;
