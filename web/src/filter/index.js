import toTime from './transformTime';
import Vue from 'vue';

const filters = {
  toTime,
};

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
