module.exports.ipr = {
  function(data) {
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
  apiUrl:
    "https://api.composer.nprstations.org/v1/widget/51827818e1c8c2244542ab7b/tracks?format=json&limit=1&hide_amazon=false&hide_itunes=false&hide_arkiv=false&share_format=false",
};

module.exports.kcrw = {
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
  apiUrl: "https://tracklist-api.kcrw.com/Simulcast",
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
