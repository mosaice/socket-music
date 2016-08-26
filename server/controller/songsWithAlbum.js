var searchSongs = require('../libary/');


const search = async (ctx, next) => {
  ctx.state = {
    title: 'Search songs'
  };
  if (ctx.params.song.includes('.map')) return next();
  if (ctx.params.album.includes('.map')) return next();
  const music = await searchSongs(ctx.params.song, false, ctx.params.album);

  await ctx.render('index', {
    music: music
  });
}

module.exports = search;
