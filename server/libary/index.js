const xiami = require('./Xiami2');
const netease = require('./Netease');
const qqMusic = require('./QQMusic');
const client = require('../redis/');
const songModel = require('./songModel');
const qqToken = require('../redis/QQmusicToken');




// xiami.search('周杰伦').then(data => {
//   console.log(data.length);
// });
// qqMusic.search('五月天').then(data => console.log(data.length));
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
  const token = await qqToken();
  const neteaseArr = await netease.search(key);
  const xiamiArr = await xiami.search(key);
  const QQArr = await qqMusic.search(key);

  const _keyObj = {};
  const songsArr = [];

  xiamiArr.forEach(item => {
    if (!_keyObj[item.song_name]) {
      const data = songModel(item, 'XM2');
      songsArr.push(data);
      _keyObj[item.song_name] = true;
    }
  });

  QQArr.forEach(item => {
    if (!_keyObj[item.songname]) {
      item.dataUrl = `http://cc.stream.qqmusic.qq.com/C200${item.songmid}.m4a?vkey=${token}&fromtag=0&guid=780782017`;
      item.imageUrl = `http://imgcache.qq.com/music/photo/mid_album_300/${item.albummid.slice(-2, -1)}/${item.albummid.slice(-1)}/${item.albummid}.jpg`
      const data = songModel(item, 'QQ');
      if (data) {
      songsArr.push(data);
      _keyObj[item.songname] = true;
      }
    }
  });

  neteaseArr.forEach(item => {
    if (!_keyObj[item.name]) {
      const data = songModel(item, 'WY');
      songsArr.push(data);
      _keyObj[item.name] = true;
    }
  });
  if (song && author && album) return songsArr.filter(item => item.author && item.album && (item.author.includes(author) || author.includes(item.author)) && (item.album.includes(album) || album.includes(item.album)));
  if (song && author) return songsArr.filter(item => item.author && (item.author.includes(author) || author.includes(item.author)));
  if (song && album) return songsArr.filter(item => item.album && (item.album.includes(album) || album.includes(item.album)));
  if (author && album) return songsArr.filter(item => item.author && item.album && (item.author.includes(author) || author.includes(item.author)) && (item.album.includes(album) || album.includes(item.album)));
  if (author) return songsArr.filter(item => item.author && (item.author.includes(author) || author.includes(item.author)));
  if (album) return songsArr.filter(item => item.album && (item.album.includes(album) || album.includes(item.album)));
  return songsArr

}

module.exports = async (song = false, author = false, album = false) => {
  const songs = JSON.parse(await client.getRedis(`${encodeURI(song)}:${encodeURI(author)}:${encodeURI(album)}`));
  if (songs) {
    console.log(`search complete ${songs.length} in all!`);
    return songs;
  }
  return getSongs(song, author, album).then(songs => {
    client.saveRedis(`${encodeURI(song)}:${encodeURI(author)}:${encodeURI(album)}`, JSON.stringify(songs), 3600 * 24);
    console.log(`search complete ${songs.length} in all!`);
    return songs;
  })
};
