import createLogger from 'vuex/dist/logger';
import audioProgress from './audioProgress';
import autoPlay from './autoPlay';

export default [createLogger(), audioProgress, autoPlay];
