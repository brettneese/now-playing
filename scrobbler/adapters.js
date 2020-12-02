module.exports.ipr = {
  function(data) {
    return {
      nowPlaying: {
        artist: data.tracklist.results[0].song.artistName,
        song: data.tracklist.results[0].song.trackName,
        album: data.tracklist.results[0].collectionName,
        image: data.tracklist.results[0].imageUrl,
      },
      originalResponse: data,
    };
  },
  apiUrl:
    "https://api.composer.nprstations.org/v1/widget/51827818e1c8c2244542ab7b/tracks?format=json&limit=1&hide_amazon=false&hide_itunes=false&hide_arkiv=false&share_format=false",
};

module.exports.ipr.kcrw = {
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
  apiUrl:
    "https://api.composer.nprstations.org/v1/widget/51827818e1c8c2244542ab7b/tracks?format=json&limit=1&hide_amazon=false&hide_itunes=false&hide_arkiv=false&share_format=false",
};

module.exports.kexp = {
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
  apiUrl: "https://api.kexp.org/v2/plays/?limit=1",
};
