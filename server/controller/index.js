
const index = async (ctx, next) => {
  await ctx.render('index', {
    music: null
  });
}

module.exports = {
  index,
  songs: require('./songs'),
  singer: require('./singer'),
};
