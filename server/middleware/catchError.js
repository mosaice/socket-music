const error = require('../unit/apiRestModel').error;

const catchError = async (ctx, next) => {
  try {
    await next();
  } catch(e) {
    let code = e.code || 1050;
    ctx.app.emit('error', e, ctx);
    ctx.body = error(code);
  }
};


module.exports = catchError;
