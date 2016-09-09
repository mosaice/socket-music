const success = require('../../libary/apiResModel').success;

const search = async (ctx, next) => {
  ctx.body = success('its ok');
}

module.exports = search;
