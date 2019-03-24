import "@babel/polyfill";
import { logger, run } from "..";

beforeEach(() => {
  jest.spyOn(console, "log").mockImplementation(() => {});
});

afterEach(() => {
  console.log.mockRestore();
});

test("returns the expected output for the sample input file", async () => {
  const output = await run("./fixtures/sample-input.txt");

  expect(output).toEqual("1 3 N\n5 1 E");
});

test("logger logs using console.log", () => {
  logger("test 1", "test 2");

  expect(console.log).toHaveBeenCalledWith("test 1", "test 2");
});
