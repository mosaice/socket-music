
module.exports = function (data, source) {
  if (!data) return null;
  switch (source) {
    case 'WY':
      return {
        title: data.name,
        author: data.artists.map(item => item.name).join(),
        cover: data.album.picUrl,
        src: data.mp3Url,
        album: data.album.alias.join(),
        source: 'Netease',
      };
    case 'XM':
      return {
        title: data.title,
        author: data.author,
        cover: data.cover,
        src: data.src,
        source: 'Xiami',
      };
    case 'QQ':
      return {
        title: data.songname,
        author: data.singer.map(item => item.name).join(),
        cover: data.imageUrl,
        src: data.dataUrl,
        album: data.albumname,
        source: 'QQMusic',
      };
    case 'BD':
      return {
        title: data.songinfo.title,
        author: data.songinfo.author,
        cover: data.songinfo.pic_premium,
        src: data.bitrate.file_link,
        source: 'Baidu',
      };
    case 'KW':
      return {
        title: data.SONGNAME,
        author: data.ARTIST,
        cover: 'http://img.lenovomm.com/crawler@cluster-1/ams/fileman/img/icon/2015-05-07025724-_1430981844806_7780.png',
        src: data.url,
        source: 'Kuwo',
      };
    case 'XM2':
      return {
        title: data.song_name,
        author: data.artist_name,
        cover: data.album_logo,
        src: data.listen_file,
        album: data.album_name,
        source: 'Xiami2',
      };
    default:
      return {
        title: '',
        author: '',
        cover: '',
        src: '',
        album: '',
        source: ''
      };
  }
};
