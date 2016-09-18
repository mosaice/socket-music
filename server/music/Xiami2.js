const request = require('superagent');
const config = require('../config/musicConfig');

class Xiami {
  constructor(config) {
    this.query = config.query;
    this.url = config.url;
    this.startPage = config.startPage;
    this.keyName = config.name;
    this.header = config.header;
  }


  createUrl(key, page) {
    let temp = '';
    Object.keys(this.query).forEach(key => {
      temp += `${key}=${this.query[key]}&`;
    });
    return `${this.url}?${temp}${this.keyName}=${encodeURI(key)}&page=${page}`;
  }

  _search(key, p) {
    console.log('search in xiami2 Page' + p);
    return request(this.createUrl(key, p))
            .set('Referer', this.header.Referer);
  }

  async search(key) {
    let p = this.startPage;
    let dataArr = [];
    let data = JSON.parse((await this._search(key, p)).res.text).data.songs;
    while (data.length) {
      dataArr = dataArr.concat(data);
      data = JSON.parse((await this._search(key, ++p)).res.text).data.songs;
    }
    return dataArr;
  }
}

module.exports = new Xiami(config.xiami2);
