const request = require('superagent');
const client = require('./');

const tokenUrl = 'http://base.music.qq.com/fcgi-bin/fcg_musicexpress.fcg?json=3&guid=780782017';


const getToken = async () => JSON.parse((await request(tokenUrl)).res.text.slice(13, -2)).key;


module.exports = async () => {
  const token = await client.getRedis('QQMUSIC');
  if (token) return token;
  return getToken().then(token => {
    client.saveRedis('QQMUSIC', token, 3600);
    return token;
  });
}
