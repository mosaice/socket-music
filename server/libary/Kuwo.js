const request = require('superagent');
const config = require('../config/musicConfig');

class Kuwo {
  constructor(config) {
    this.query = config.query;
    this.url = config.url;
    this.keyName = config.name;
    this.limit = config.limit;
    this.imageUrl = config.imageUrl;
    this.songConfig = config.songConfig;
  }

  createUrl(key, limit) {
    let temp = '';
    Object.keys(this.query).forEach(key => {
      temp += `${key}=${this.query[key]}&`
    });
    return `${this.url}?${temp}${this.keyName}=${encodeURI(key)}&rn=${limit}`
  }

  _search(key, l) {
    console.log('search in Kuwo Page');
    return request(this.createUrl(key, l))
  }

  createPlayUrl(id) {
    let temp = '';
    Object.keys(this.songConfig.query).forEach(key => {
      temp += `${key}=${this.songConfig.query[key]}&`
    });
    return `${this.songConfig.url}?${temp}${this.songConfig.name}=${id}`
  }

  async searchSong(id) {
    console.log('search song in Kuwo id' + id);
    console.log(this.createPlayUrl(id));
    const data = (await request(this.createPlayUrl(id))).res.text;
    return data;
  }

  async search(key) {
    const data = (await this._search(key, this.limit)).res.text.replace(/\'/g, "\"");
    return JSON.parse(data).abslist;
  }
}

module.exports = new Kuwo(config.kuwo);

  // for (var i = 0; i < kuwoArr.length; i++) {
  //   if (kuwoArr[i].NAME.includes('铃声')) continue;
  //   if (!_keyObj[kuwoArr[i].NAME.replace(/\&nbsp;/g, '')]) {
  //     const url = await kuwo.searchSong(kuwoArr[i].MUSICRID);
  //     kuwoArr[i].url = url;
  //     const data = songModel(kuwoArr[i], 'KW');
  //     songsArr.push(data);
  //     _keyObj[kuwoArr[i].NAME] = true;
  //   }
  // }
