var songsSearch = require('../libary/');


const search = async (ctx, next) => {
  ctx.state = {
    title: 'koa2 title'
  };
  if (ctx.params.song.includes('.map')) return next();
  const music = await songsSearch(ctx.params.song);

  await ctx.render('index', {
    music: music
  });
}

module.exports = search;
