const mongoist = require("mongoist");
const db = mongoist(process.env.MONGODB_CONNECTION_STRING);
const crypto = require("crypto");

module.exports.db = db;

module.exports.insert = async function (data) {
  let result = await db.nowplaying.insert(data);

  return result;
};

module.exports.exists = async function (data) {
  let result = await db.nowplaying.findOne(data);

  return Boolean(result);
};
