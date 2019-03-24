import "@babel/polyfill";
import { run } from "..";

beforeEach(() => {
  jest.spyOn(console, "log").mockImplementation(() => {});
});

afterEach(() => {
  console.log.mockRestore();
});

test("returns the expected output for the sample input file", async () => {
  const output = await run("./fixtures/sample-input.txt");

  expect(output).toEqual("1 3 N\n5 1 E");
  expect(console.log).toHaveBeenCalledWith(output);
});
