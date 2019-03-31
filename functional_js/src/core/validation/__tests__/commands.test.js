import { Success, Failure } from "folktale/validation";
import { isValidCommandSequence } from "../commands";
import { commandSequence } from "../../commands";

test("returns success for a sequence of commands", () => {
  const validCommands = commandSequence(1, ["M", "M", "L", "R", "M"]);
  expect(isValidCommandSequence(validCommands)).toEqual(Success(validCommands));
});

test("returns failure if there are any invalid commands", () => {
  const invalidCommands = commandSequence(1, ["M", "M", "X", "L"]);
  expect(isValidCommandSequence(invalidCommands)).toEqual(Failure(["command sequence contains an invalid command"]));
});
