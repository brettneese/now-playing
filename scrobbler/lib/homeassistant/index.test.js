const lib = require(".");

test("getLastFmSessionKey()", async () => {
  url = await lib.nowPlayingUrl();

  expect(typeof url).toBe("string");
});
