import { Success, Failure } from "folktale/validation";
import { isValidRover } from "../rover";

test("returns success for a valid rover", () => {
  expect(isValidRover("10 2 N")).toEqual(Success("10 2 N"));
});

test("returns failure if rover has invalid coordinates", () => {
  expect(isValidRover("1 X N")).toEqual(Failure(["invalid coordinates"]));
});

test("returns failure if rover has an invalid direction", () => {
  expect(isValidRover("1 2 X")).toEqual(Failure(["invalid direction"]));
});

test("returns multiple failures", () => {
  expect(isValidRover("1 X")).toEqual(Failure(["invalid coordinates", "invalid direction"]));
});
