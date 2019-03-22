import { commandSequence } from "../index";
import { turnLeft, turnRight } from "../turning";

test("creates a command sequence", () => {
  const sequence = commandSequence(5, ["R", "L"]);

  expect(sequence).toEqual({
    targetRoverId: 5,
    commands: [turnRight, turnLeft],
  });
});
