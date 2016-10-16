import createLogger from 'vuex/dist/logger';
import audioProgress from './audioProgress';
import autoStop from './autoStop';

const plugins = () => {
  const basePlugins = [audioProgress, autoStop];
  if (process.env.NODE_ENV !== 'production') return basePlugins.concat([createLogger()]);
  return basePlugins;
};

export default plugins();
