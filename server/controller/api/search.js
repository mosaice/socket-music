const api = require('../../unit/apiRestModel');
const paging = require('../../unit/pageModel');
const crawler = require('../../music/');

const search = async ctx => {
  const { song, singer, album} = ctx.query;
  const { size, page } = paging.validate(ctx.query.size, ctx.query.page);

  const music = await crawler(song, singer, album);
  const source = paging.getData(music, size, page);
  ctx.body = api.success(source.data, source.meta);
};

module.exports = search;
