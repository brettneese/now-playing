const bent = require("bent");
const adapters = require(".");
const getJSON = bent("json");

test("given a known substring, returns an adapter object", async () => {
  adapter = await adapters("kexp");

  expect(typeof adapter).toBe("object");
});

test.each(Object.keys(adapters.adapters))(
  "each adapter returns the correct data (%s)",
  async (key) => {
    let adapter = adapters.adapters[key];
    let data = await adapter.function(await getJSON(adapter.apiUrl));

    // it's possible for an adapter to return null if there's nothing on live right now (ie, news break, commercial)
    if (data) {
      expect(data.nowPlaying).toEqual(
        expect.objectContaining({
          artist: expect.any(String),
          song: expect.any(String),
        })
      );
    }
  }
);
