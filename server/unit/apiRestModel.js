const status = require('../config/statusList');
const error = (code) => ({code, message: status[code]});

const success = (data, meta) => {
  const obj = {code: 1000, message: status[1000], data};
  if (meta) obj.meta = meta;
  return obj;
};



module.exports = {
  error,
  success
};
