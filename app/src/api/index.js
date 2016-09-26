import { queryFormat } from './formatUrl';

const handleList = json => {
  if (json.code === 1000) return json;
  throw new Error(`${json.code}:${json.message}`);
};

export function get(path, query, before = () => {}) {
  before();
  return this.$http.get(queryFormat('search', query))
  .then(res => res.json())
  .then(handleList)
  .catch(e => console.log(`API Get ${e}`));
}
