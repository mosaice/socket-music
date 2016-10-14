import { Notification as notify } from 'element-ui';

export const fetchStart = state => {
  const { globalFetch } = state;
  globalFetch.display = true;
  globalFetch.message = '';
  globalFetch.isFething = true;
};

export const fetchSuccess = state => {
  const { globalFetch } = state;
  globalFetch.isFething = false;
};

export const fetchFail = (state, msg) => {
  const { globalFetch } = state;
  globalFetch.display = true;
  globalFetch.message = msg;
  globalFetch.isFething = false;
  notify({
    title: '搜索错误',
    message: '请确认搜索条件无误',
    type: 'error',
  });
};
