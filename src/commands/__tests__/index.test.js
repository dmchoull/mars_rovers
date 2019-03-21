import { commandSequence } from "../index";

test("creates a command sequence", () => {
  const sequence = commandSequence(5, ["M", "M", "R", "L"]);

  expect(sequence).toEqual({
    targetRoverId: 5,
    commands: ["M", "M", "R", "L"],
  })
})
