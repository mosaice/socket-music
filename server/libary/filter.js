const errorValue = [' ', 'undefined', 'null', 'none', undefined, null, ''];

const queryFilter = query => {
  const obj = {};
  Object.keys(query).filter(key => !errorValue.some(ev => ev === query[key])).forEach(sk => obj[sk] = query[sk]);
  return obj;
};


module.exports = {
  queryFilter
};
