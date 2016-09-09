const error = require('../libary/apiResModel').error;

const catchError = async (ctx, next) => {
  try {
    await next();
  } catch(e) {
    let status = e.status || 500;
    let message = e.message || '服务器错误';
    ctx.app.emit('error', e, ctx);
    ctx.body = error(status, message);
  }
}


module.exports = catchError;
