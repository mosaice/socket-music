const request = require('superagent');
const config = require('../config/musicConfig');
const qqToken = require('../redis/QQmusicToken')

class QQMusic {
  constructor(config) {
    this.query = config.query;
    this.url = config.url;
    this.startPage = config.startPage;
    this.keyName = config.name;
  }


  createUrl(key, page) {
    let temp = '';
    Object.keys(this.query).forEach(key => {
      temp += `${key}=${this.query[key]}&`
    });
    return `${this.url}?${temp}${this.keyName}=${encodeURI(key)}&p=${page}`
  }

  _search(key, p) {
    console.log('search in QQ Page' + p);
    return request(this.createUrl(key, p))
            .buffer(true)
  }

  async search(key) {
    const token = await qqToken();
    let p = this.startPage;
    let dataArr = [];
    let data = JSON.parse((await this._search(key, p)).res.text.slice(9, -1)).data.song.list;
    while (data.length) {
      dataArr = dataArr.concat(data);
      data = JSON.parse((await this._search(key, ++p)).res.text.slice(9, -1)).data.song.list;
    }

    return dataArr.map(item => {
        item.dataUrl = `http://cc.stream.qqmusic.qq.com/C200${item.songmid}.m4a?vkey=${token}&fromtag=0&guid=780782017`;
        item.imageUrl = `http://imgcache.qq.com/music/photo/mid_album_300/${item.albummid.slice(-2, -1)}/${item.albummid.slice(-1)}/${item.albummid}.jpg`
        return item;
      });
  }
}

module.exports = new QQMusic(config.qqMusic);
