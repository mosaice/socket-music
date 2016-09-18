var searchSongs = require('../music/');


const search = async (ctx, next) => {
  ctx.state = {
    title: 'Search album'
  };
  if (!ctx.params.album || ctx.params.album.includes('.map')) return next();
  if (!ctx.params.singer || ctx.params.singer.includes('.map')) return next();
  const music = await searchSongs(false, ctx.params.singer, ctx.params.album);

  await ctx.render('index', {
    music: music
  });
};

module.exports = search;
