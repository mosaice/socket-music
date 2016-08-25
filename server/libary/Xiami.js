const request = require('superagent');
const config = require('../config/musicConfig');

class Xiami {
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
    return `${this.url}?${temp}${this.keyName}=${encodeURI(key)}&page=${page}`
  }

  _search(key, p) {
    console.log('search in xiami Page' + p);
    return request(this.createUrl(key, p))
  }

  async search(key) {
    let p = this.startPage;
    let dataArr = [];
    let data = (await this._search(key, p)).res.text;
    while (data !== 'null') {
      dataArr = dataArr.concat(JSON.parse(data));
      data = (await this._search(key, ++p)).res.text;
    }
    return dataArr;
  }
}

module.exports = new Xiami(config.xiami);
