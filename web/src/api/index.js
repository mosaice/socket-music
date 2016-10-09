import { queryFormat } from './formatUrl';
import { ROOT } from 'actions/urls';

const handleList = json => {
  if (json.code === 1000) return json;
  throw new Error(`${json.code}:${json.message}`);
};

export const get = (path, query) =>
  fetch(queryFormat(`${ROOT}/search`, query))
  .then(res => res.json())
  .then(handleList)
  .catch(e => console.log(`API Get ${e}`));
