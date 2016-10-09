export const queryFormat = (path, query) => {
  let queryString = `${path}?`;
  Object.keys(query).forEach(key => { queryString += `${key}=${query[key]}&`; });
  return queryString.slice(0, -1);
};
