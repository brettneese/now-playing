const func = require("./index");
const context = {
  log: jest.fn(),
};

test("Runs the function", async () => {
  response = await func(context);
});
