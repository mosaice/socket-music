var searchSongs = require('../music/');


const search = async (ctx, next) => {
  ctx.state = {
    title: 'Search Singer'
  };
  if (!ctx.params.singer || ctx.params.singer.includes('.map')) return next();
  const music = await searchSongs(false, ctx.params.singer);

  await ctx.render('index', {
    music: music
  });
};

module.exports = search;
