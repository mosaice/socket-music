const request = require('superagent');
const config = require('../config/musicConfig');


class Netease {
  constructor(config) {
    this.query = config.query;
    this.url = config.url;
    this.limit = config.limit;
    this.offset = config.offset;
    this.keyName = config.name;
    this.header = config.header;

  }

  createGetUrl(key, limit) {
    let temp = '';
    Object.keys(this.query).forEach(key => {
      temp += `${key}=${this.query[key]}&`
    });
    return `${this.url.GET}?${temp}${this.keyName}=${encodeURI(key)}&limit=${limit}`
  }


  _search(key, l, o, method) {
    if (method === 'GET') return request(this.createGetUrl(key, l));

    const body = Object.assign({}, this.query, {
      limit: l,
      [this.keyName]: key,
      offset: o
    });
    console.log('offset in Netease ' + o);
    return request
            .post(this.url.POST)
            .send(body)
            .set('Content-type', 'application/x-www-form-urlencoded')
            .set('Cookie', this.header.Cookie)
            .set('Referer', this.header.Referer)
  }

  async search(key, method = 'POST') {
      let dataArr = [];
      let offset = this.offset;
      let data = JSON.parse((await this._search(key, this.limit, offset, method)).res.text).result.songs;
      if (!data) return dataArr;
      dataArr = dataArr.concat(data);
      while (data.length === this.limit) {
        offset += this.limit;
        data = JSON.parse((await this._search(key, this.limit, offset, method)).res.text).result.songs;
        if (!data) break;
        dataArr = dataArr.concat(data);
      }
      return dataArr.filter(item => item.status !== -1 && ((item.bMusic && item.bMusic.name) || (item.hMusic && item.hMusic.name) ||(item.lMusic && item.lMusic.name) ||(item.mMusic && item.mMusic.name)));
  }
}

module.exports = new Netease(config.netease);
