const api = require('./apiRestModel');

const getData = (data, size, page) => {
  const meta = {
    size,
    page,
    total: data.length,
    totalPage: Math.ceil(data.length / size)
  };
  const _data = data.slice(size * (page - 1), size * page);
  return {
    data: _data,
    meta
  };
};

const validate = (size, page) => {
  size = size || 20;
  page = page || 1;
  size = Math.abs(Number(size));
  page = Math.abs(Number(page));
  if (!Number.isInteger(size) || !Number.isInteger(page)) throw api.error(1002);

  size = size > 50 ? 50 : size;
  return {
    size,
    page
  };
};


module.exports = {
  getData,
  validate
};
