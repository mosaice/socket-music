module.exports = {
  xiami: {
    url: 'http://www.xiami.com/web/search-songs',
    startPage: 1,
    name: 'key',
    query: {
      spm: '0.0.0.0.i8GTQt',
      _xiamitoken: 'abchdjah6264817'
    }
  },
  netease: {
    url: {
      GET: 'http://s.music.163.com/search/get/',
      POST: 'http://music.163.com/api/search/pc'
    },
    limit: 100,
    offset: 0,
    name: 's',
    query: {
      type: '1'
    },
    header: {
      Cookie: 'appver=1.5.0.75771;',
      Referer: 'http://music.163.com/'
    }
  },
  qqMusic: {
    url: 'http://i.y.qq.com/s.music/fcgi-bin/search_for_qq_cp',
    startPage: 1,
    name: 'w',
    tokenUrl: '',
    query: {
      n: '30'
    }
  }
};
