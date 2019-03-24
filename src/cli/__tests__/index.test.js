import "@babel/polyfill";
import { logger, run } from "..";

beforeEach(() => {
  jest.spyOn(console, "log").mockImplementation(() => {});
});

afterEach(() => {
  console.log.mockRestore();
});

test("returns rendered output using the given renderer", async () => {
  const output = await run("./fixtures/sample-input.txt", JSON.stringify);

  expect(output).toMatchInlineSnapshot(
    `"{\\"rovers\\":[{\\"id\\":1,\\"orientation\\":\\"N\\",\\"coordinates\\":{\\"x\\":1,\\"y\\":3}},{\\"id\\":2,\\"orientation\\":\\"E\\",\\"coordinates\\":{\\"x\\":5,\\"y\\":1}}]}"`
  );
});

test("logger logs using console.log", () => {
  logger("test 1", "test 2");

  expect(console.log).toHaveBeenCalledWith("test 1", "test 2");
});
