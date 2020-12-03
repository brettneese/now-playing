const lib = require(".");

test("insert()", async () => {
  response = await lib.insert({ song: "Never Gonna Give You Up" });
});

test("existing() returns true for existent song", async () => {
  response = await lib.exists({ song: "Never Gonna Give You Up" });
  expect(response).toBe(true);
});

test("existing() returns false for nonexistent song", async () => {
  response = await lib.exists({ agagagt: "11333311!" });
  expect(response).toBe(false);
});

afterAll(() => {
  lib.db.close();
});
