var searchSongs = require('../libary/');


const search = async (ctx, next) => {
  ctx.state = {
    title: 'Search album'
  };
  if (!ctx.params.album || ctx.params.album.includes('.map')) return next();
  const music = await searchSongs(false, false, ctx.params.album);

  await ctx.render('index', {
    music: music
  });
}

module.exports = search;
