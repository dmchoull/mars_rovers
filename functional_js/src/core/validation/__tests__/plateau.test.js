import { Success, Failure } from "folktale/validation";
import { isValidPlateau } from "../plateau";

test("returns success for valid plateau line", () => {
  expect(isValidPlateau("5 42")).toEqual(Success("5 42"));
});

test("returns failure for an invalid plateau line", () => {
  expect(isValidPlateau("5")).toEqual(Failure(["plateau line must contain valid coordinates"]));
});
