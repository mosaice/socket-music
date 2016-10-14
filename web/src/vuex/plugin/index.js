import createLogger from 'vuex/dist/logger';
import audioProgress from './audioProgress';
import autoStop from './autoStop';


export default [createLogger(), audioProgress, autoStop];
