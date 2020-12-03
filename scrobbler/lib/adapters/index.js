const adapters = {
  ipr: {
    function(data) {
      if (!data.onNow.song) return false;
      return {
        nowPlaying: {
          artist: data.onNow.song.artistName,
          song: data.onNow.song.trackName,
          album: data.onNow.song.collectionName,
          image: data.onNow.song.imageUrl,
        },
        originalResponse: data,
      };
    },
    substring: "iowapublicradio.org",
    apiUrl:
      "https://api.composer.nprstations.org/v1/widget/51827818e1c8c2244542ab7b/tracks?format=json&limit=1&hide_amazon=false&hide_itunes=false&hide_arkiv=false&share_format=false",
  },

  kcrw: {
    function(data) {
      return {
        nowPlaying: {
          artist: data.artist,
          song: data.title,
          album: data.album,
          image: data.albumImageLarge,
        },
        originalResponse: data,
      };
    },
    substring: "kcrw",
    apiUrl: "https://tracklist-api.kcrw.com/Simulcast",
  },

  kexp: {
    function(data) {
      return {
        nowPlaying: {
          artist: data.results[0].artist,
          song: data.results[0].song,
          album: data.results[0].album,
          image: data.results[0].image_uri,
        },
        originalResponse: data,
      };
    },
    substring: "kexp",
    apiUrl: "https://api.kexp.org/v2/plays/?limit=1",
  },

  nightwaveplaza: {
    function(data) {
      return {
        nowPlaying: {
          artist: data.playback.artist,
          song: data.playback.title,
          album: data.playback.artist,
          image: data.playback.artwork_src,
        },
      };
    },
    substring: "plaza.one",
    apiUrl: "https://api.plaza.one/status",
    //originalResponse: data - some data sources are dynamic, ie, return different stuff every time you call them.
    // the dedupe won't work in these cases, so just don't include them
  },
};

module.exports = function (nowPlayingUrl) {
  for (const key of Object.keys(adapters)) {
    if (nowPlayingUrl.includes(adapters[key].substring)) return adapters[key];
  }
};

module.exports.adapters = adapters;
