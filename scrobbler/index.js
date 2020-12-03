const adapters = require("./adapters");
const bent = require("bent");
const getJSON = bent("json");

const lastfm = require("./lib/lastfm");
const homeassistant = require("./lib/homeassistant");
const mongodb = require("./lib/mongodb");

function getAdapter(nowPlayingUrl) {
  if (nowPlayingUrl.includes("kcrw")) return adapters.kcrw;
  if (nowPlayingUrl.includes("iowapublicradio.org")) return adapters.ipr;
  if (nowPlayingUrl.includes("kexp")) return adapters.kexp;

  return null;
}

module.exports = async function (context, myTimer) {
  // make api call to HA
  let nowPlayingUrl = await homeassistant.nowPlayingUrl();

  console.log("now playing url", nowPlayingUrl);

  if (nowPlayingUrl) {
    let adapter = getAdapter(nowPlayingUrl);

    if (adapter) {
      let data = adapter.function(await getJSON(adapter.apiUrl));

      if (data) {
        if (!(await mongodb.exists(data))) {
          await mongodb.insert(data);
          await lastfm.scrobble(data.nowPlaying);
        }
      }
    }
  }
};
