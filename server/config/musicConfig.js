module.exports = {
  xiami: {
    url: 'http://www.xiami.com/web/search-songs',
    startPage: 1,
    name: 'key',
    query: {
      spm: '0.0.0.0.i8GTQt',
      _xiamitoken: 'abchdjah6264817',
      limit: 50
    }
  },
  xiami2: {
    url: 'http://api.xiami.com/web',
    name: 'key',
    startPage: 1,
    query: {
      v: '2.0',
      app_key: '1',
      limit: 50,
      r: 'search/songs'
    },
    header: {
      Referer: 'http://h.xiami.com/index.html?f=&from='
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
    query: {
      n: '30'
    }
  },
  baidu: {
    url: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
    offset: 0,
    startPage: 1,
    name: 'query',
    method: {
      search: 'baidu.ting.search.common',
      play: 'baidu.ting.song.play'
    },
    query: {
      page_size: '10',
      format: 'json',
      from: 'webapp_music'
    }
  },
  kuwo: {
    url: 'http://search.kuwo.cn/r.s',
    imgUrl: 'http://img1.kwcdn.kuwo.cn/star/albumcover/',
    name: 'all',
    limit: 1000,
    query: {
      pn: 0,
      rformat: 'json',
      encoding: 'utf8'
    },
    songConfig: {
      url: 'http://antiserver.kuwo.cn/anti.s',
      name: 'rid',
      query: {
        type: 'convert_url',
        format: 'mp3',
        response: 'url'
      }
    }
  }
};
