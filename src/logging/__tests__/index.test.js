import { logger } from "../../logging";

beforeEach(() => {
  jest.spyOn(console, "log").mockImplementation(() => {});
});

afterEach(() => {
  console.log.mockRestore();
});

test("logger logs using console.log", () => {
  logger("test 1", "test 2");

  expect(console.log).toHaveBeenCalledWith("test 1", "test 2");
});
