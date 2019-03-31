import { Success, Failure } from "folktale/validation";
import { isValidCommandSequence } from "../commands";

test("returns success for a sequence of commands", () => {
  expect(isValidCommandSequence("MMLRLMR")).toEqual(Success("MMLRLMR"));
});

test("returns failure if there are any invalid commands", () => {
  expect(isValidCommandSequence("MMXL")).toEqual(Failure(["invalid command sequence"]));
});
