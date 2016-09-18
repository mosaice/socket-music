const redis = require("redis");
const Promise = require("bluebird");

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

const client = redis.createClient();


client.on("error", function (err) {
  console.log("Error in redis" + err);
});


function saveRedis(key, value, expire = null) {
  client.set(key, value, redis.print);
  if (expire) client.expire(key, expire);
}

function getRedis(key) {
  return client.getAsync(key);
}

function arraySaveRedis(key, array, expire = null) {
  const hashArray = [];
  array.forEach((v, i) => {
    hashArray.push(i);
    hashArray.push(v);
  });
  client.hmset(key, hashArray, redis.print);
  if (expire) client.expire(key, expire);
}

function getArrayRedis(key, start, end) {
  const list = [];
  for (var i = start; i <= end; i++) {
    list.push(['hget', key, i]);
  }
  return client.multi(list).execAsync();
}


module.exports = {
  saveRedis,
  getRedis,
  arraySaveRedis,
  getArrayRedis
};
