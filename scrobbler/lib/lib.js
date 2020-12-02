const API = require("last.fm.api"),
  api = new API({
    apiKey: process.env.LAST_FM_KEY,
    apiSecret: process.env.LAST_FM_SECRET,
    username: process.env.LAST_FM_USERNAME,
    password: process.env.LAST_FM_PASSWORD,
    // debug: true,
  });

module.exports.getLastFmSessionKey = async function () {
  const response = await api.auth.getMobileSession({});
  return response.session.key;
};

module.exports.scrobble = async function (data) {
  if (!data.song) throw new Error("Song is required");
  if (!data.artist) throw new Error("Artist is required");

  let req = {
    artist: data.artist,
    track: data.song,
    timestamp: Math.floor(Date.now() / 1000), // @todo we can actually pull the correct timestamp the songs start from the apis, but I'm lazy
    sk: await this.getLastFmSessionKey(),
  };

  if (data.album) {
    req.album = data.album;
  }

  const response = api.track.scrobble(req);

  return response;
};
