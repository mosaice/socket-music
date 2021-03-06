const xiami = require('./Xiami2');
const netease = require('./Netease');
const qqMusic = require('./QQMusic');
const client = require('../redis/');
const songModel = require('../unit/songModel');
const qqToken = require('../redis/QQmusicToken');
const error = require('../unit/apiRestModel').error;



// xiami.search('梁博').then(data => {
//   console.log(data[0]);
// });
// qqMusic.search('五月天').then(data => console.log(data[0]));
// netease.search('五月天').then(data => console.log(data.length));
// baidu.search('五月天').then(data => {
//   console.log(data.lenght);
//   const song = await baidu.searchSong(item.song_id);
//   console.log(song);
// });

// kuwo.search('五月天').then(data => {
//   console.log(data.lenght);
//   const song = await baidu.searchSong(item.song_id);
//   console.log(song);
// });

const getSongs = async (song, author, album) => {

  const key = song || author || album;
  if (!key) throw error(1001);
  const token = await qqToken();
  const neteaseArr = await netease.search(key);
  const xiamiArr = await xiami.search(key);
  const QQArr = await qqMusic.search(key);

  const _keyObj = {};
  const songsArr = [];

  xiamiArr.forEach(item => {
    if (!_keyObj[item.song_name + item.album_name]) {
      const data = songModel(item, 'XM2');
      songsArr.push(data);
      _keyObj[item.song_name + item.album_name] = true;
    }
  });

  QQArr.forEach(item => {
    if (!_keyObj[item.songname + item.albumname]) {
      item.dataUrl = `http://cc.stream.qqmusic.qq.com/C200${item.songmid}.m4a?vkey=${token}&fromtag=0&guid=780782017`;
      item.imageUrl = `http://imgcache.qq.com/music/photo/mid_album_300/${item.albummid.slice(-2, -1)}/${item.albummid.slice(-1)}/${item.albummid}.jpg`;
      const data = songModel(item, 'QQ');
      songsArr.push(data);
      _keyObj[item.songname+item.albumname] = true;
    }
  });

  neteaseArr.forEach(item => {
    if (!_keyObj[item.name + item.album.alias.join()]) {
      const data = songModel(item, 'WY');
      songsArr.push(data);
      _keyObj[item.name + item.album.alias.join()] = true;
    }
  });
  client.saveRedis(`${encodeURI(key)}`, JSON.stringify(songsArr), 3600 * 24);
  return songsArr;
};

const filterSongs = (songsArr, song, author, album) => {
  let _arr = songsArr;
  if (song && author && album) _arr = songsArr.filter(item => item.author && item.album && (item.author.includes(author) || author.includes(item.author)) && (item.album.includes(album) || album.includes(item.album)));
  if (song && author) _arr = songsArr.filter(item => item.author && (item.author.includes(author) || author.includes(item.author)));
  if (song && album) _arr = songsArr.filter(item => item.album && (item.album.includes(album) || album.includes(item.album)));
  if (author && album) _arr = songsArr.filter(item => item.author && item.album && (item.author.includes(author) || author.includes(item.author)) && (item.album.includes(album) || album.includes(item.album)));
  if (author) _arr = songsArr.filter(item => item.author && (item.author.includes(author) || author.includes(item.author)));
  if (album) _arr = songsArr.filter(item => item.album && (item.album.includes(album) || album.includes(item.album)));
  client.saveRedis(`${encodeURI(song)}:${encodeURI(author)}:${encodeURI(album)}`, JSON.stringify(_arr), 3600 * 24);
  return _arr;
};

module.exports = async (song = false, author = false, album = false) => {
  const filters = JSON.parse(await client.getRedis(`${encodeURI(song)}:${encodeURI(author)}:${encodeURI(album)}`));
  const sources = JSON.parse(await client.getRedis(`${encodeURI(song || author || album)}`));
  if (filters) {
    console.log(`search complete ${filters.length} in all!`);
    return filters;
  }

  if (sources) {
    const songs = filterSongs(sources, song, author, album);
    console.log(`search complete ${songs.length} in all!`);
    return songs;
  }

  return getSongs(song, author, album).then(songs => {
    const result = filterSongs(songs, song, author, album);
    console.log(`search complete ${result.length} in all!`);
    return result;
  });
};
