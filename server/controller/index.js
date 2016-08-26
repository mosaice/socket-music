
const index = async (ctx, next) => {
  await ctx.render('index', {
    music: null
  });
}

module.exports = {
  index,
  songs: require('./songs'),
  singer: require('./singer'),
  album: require('./album'),
  songsWithAlbum: require('./songsWithAlbum'),
  songsWithSinger: require('./songsWithSinger'),
  songsWithSingerWithAlbum: require('./songsWithSingerWithAlbum'),
  singerWithAlbum: require('./singerWithAlbum'),
};
