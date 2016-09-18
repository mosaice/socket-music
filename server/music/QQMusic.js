const request = require('superagent');
const config = require('../config/musicConfig');

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
      temp += `${key}=${this.query[key]}&`;
    });
    return `${this.url}?${temp}${this.keyName}=${encodeURI(key)}&p=${page}`;
  }

  _search(key, p) {
    console.log('search in QQ Page' + p);
    return request(this.createUrl(key, p))
            .buffer(true);
  }

  async search(key) {
    let p = this.startPage;
    let dataArr = [];
    let data = JSON.parse((await this._search(key, p)).res.text.slice(9, -1)).data.song.list;
    while (data.length) {
      dataArr = dataArr.concat(data);
      data = JSON.parse((await this._search(key, ++p)).res.text.slice(9, -1)).data.song.list;
    }

    return dataArr;
  }
}

module.exports = new QQMusic(config.qqMusic);
