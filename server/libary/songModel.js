
module.exports = function (data, souce) {
  if (!data) return null;
  switch (souce) {
    case 'WY':
      return {
        title: data.name,
        author: data.artists.map(item => item.name).join(),
        cover: data.album.picUrl,
        src: data.mp3Url,
        souce: 'Netease',
      };
    case 'XM':
      return {
        title: data.title,
        author: data.author,
        cover: data.cover,
        src: data.src,
        souce: 'Xiami',
      };
    case 'QQ':
      return {
        title: data.songname,
        author: data.singer.map(item => item.name).join(),
        cover: data.imageUrl,
        src: data.dataUrl,
        souce: 'QQMusic',
      };
    default:
      return {
        title: '',
        author: '',
        cover: '',
        src: '',
        souce: ''
      };
  }
};
