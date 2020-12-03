const lib = require(".");

test("getLastFmSessionKey()", async () => {
  key = await lib.getLastFmSessionKey();

  expect(typeof key).toBe("string");
});

test("scrobble() scrobbles", async () => {
  response = await lib.scrobble({
    artist: "Rick Astley",
    song: "Never Gonna Give You Up",
    album: "Whenever You Need Somebody",
  });
});
