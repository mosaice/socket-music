const xiami = require('./Xiami');
const netease = require('./Netease');
const qqMusic = require('./QQMusic');
const client = require('../redis/');
const songModel = require('./songModel');



// xiami.search('周杰伦').then(data => {
//   console.log(data);
// });
// qqMusic.search('五月天').then(data => console.log(data.length));
// netease.search('五月天').then(data => console.log(data.length));

const getSongs = async (key, isAuthor) => {
  const neteaseArr = await netease.search(key);
  const xiamiArr = await xiami.search(key);
  const QQArr = await qqMusic.search(key);

  const _keyObj = {};
  const songsArr = [];

  xiamiArr.forEach(item => {
    if (!_keyObj[item.title]) {
      const data = songModel(item, 'XM');
      if (data) {
      songsArr.push();
      _keyObj[item.title] = true;
      }
    }
  });

  QQArr.forEach(item => {
    if (!_keyObj[item.title]) {
      const data = songModel(item, 'QQ');
      if (data) {
      songsArr.push();
      _keyObj[item.songname] = true;
      }
    }
  });

  neteaseArr.forEach(item => {
    if (!_keyObj[item.title]) {
      const data = songModel(item, 'WY');
      if (data) {
      songsArr.push();
      _keyObj[item.name] = true;
      }
    }
  });

  if (!isAuthor) return songsArr;
  return songsArr.filter(item => item.author.includes(key));

}

module.exports = async (key, isAuthor = false) => {
  const songs = JSON.parse(await client.getRedis(`${isAuthor ? 'singer' : 'songs'}:${key}`));
  if (songs) return songs;
  return getSongs(key, isAuthor).then(songs => {
    client.saveRedis(`${isAuthor ? 'singer' : 'songs'}:${key}`, JSON.stringify(songs), 3600 * 24);
    console.log(`search complete ${songs.length} in all!`);
    return songs;
  })
};
