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


module.exports = {
  saveRedis,
  getRedis
}
