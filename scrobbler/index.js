const adapters = require("./adapters");
const bent = require("bent");
const getJSON = bent("json");

const lib = require("./lib");

function getAdapter(nowPlayingUrl) {
  if (nowPlayingUrl.includes("kcrw")) return adapters.kcrw;
  if (nowPlayingUrl.includes("ipr")) return adapters.ipr;
  if (nowPlayingUrl.includes("kexp")) return adapters.kexp;

  return null;
}

function scrobble(data) {
  lastfm.track.scrobble({});
  //scrobble to last.fm
}

module.exports = async function (context, myTimer) {
  // make api call to HA
  let nowPlayingUrl = "ipr";

  let adapter = getAdapter(nowPlayingUrl);
  let data = adapter.function(await getJSON(adapter.apiUrl));

  scrobble(data);
};
