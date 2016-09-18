const request = require('superagent');
const config = require('../config/musicConfig');

class Baidu {
  constructor(config) {
    this.query = config.query;
    this.url = config.url;
    this.startPage = config.startPage;
    this.keyName = config.name;
    this.method = config.method;
  }

  createUrl(key, page) {
    let temp = '';
    Object.keys(this.query).forEach(key => {
      temp += `${key}=${this.query[key]}&`;
    });
    return `${this.url}?${temp}method=${this.method.search}&${this.keyName}=${encodeURI(key)}&page_no=${page}`;
  }

  createPlayUrl(id) {
    return `${this.url}?from=webapp_music&method=${this.method.play}&songid=${id}`;
  }

  _search(key, p) {
    console.log('search in Baidu Page' + p);
    return request(this.createUrl(key, p));
  }

  async searchSong(id) {
    console.log('search song in Baidu id' + id);
    const data = JSON.parse((await request(this.createPlayUrl(id))).res.text);
    return data;
  }

  async search(key) {
    let p = this.startPage;
    let dataArr = [];
    let data = JSON.parse((await this._search(key, p)).res.text).song_list;
    while (data.length) {
      dataArr = dataArr.concat(data);
      data = JSON.parse((await this._search(key, ++p)).res.text).song_list;
    }
    return dataArr;
  }
}

module.exports = new Baidu(config.baidu);

  // for (var i = 0; i < baiduArr.length; i++) {
  //   const title = baiduArr[i].title.replace(/<[^>]+>/g,"");
  //   if (!_keyObj[title]) {
  //     const song = await baidu.searchSong(baiduArr[i].song_id);
  //     const data = songModel(song, 'BD');
  //     console.log(data);
  //     songsArr.push(data);
  //     _keyObj[title] = true;
  //     break;
  //   }
  // }
