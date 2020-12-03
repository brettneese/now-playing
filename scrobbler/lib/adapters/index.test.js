const adapters = require(".");

test("getLastFmSessionKey()", async () => {
  url = await adapters("kexp");

  expect(typeof url).toBe("object");
});
