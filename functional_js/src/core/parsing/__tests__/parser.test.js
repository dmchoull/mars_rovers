import { parse } from "../parser";
import { plateau } from "../../plateau";
import { rover } from "../../rover";
import { coordinates } from "../../coordinates";
import { commandSequence } from "../../commands";

test("parses valid input", () => {
  const parsedData = parse("11 9\n10 2 N\nLMLMLMLMM\n3 4 E\n\nMMRMMRMRRM\n\n");

  const expectedData = {
    plateau: plateau(coordinates(11, 9)),
    rovers: [rover(1, "N", coordinates(10, 2)), rover(2, "E", coordinates(3, 4))],
    commands: [
      commandSequence(1, ["L", "M", "L", "M", "L", "M", "L", "M", "M"]),
      commandSequence(2, ["M", "M", "R", "M", "M", "R", "M", "R", "R", "M"]),
    ],
  };

  expect(parsedData).toEqual(expectedData);
});

test("returns validation errors when input is invalid", () => {
  const { errors } = parse("5\n1 2 X\nMMX\n");

  expect(errors).toMatchInlineSnapshot(`
Array [
  "plateau line must contain valid coordinates",
  "invalid direction",
  "invalid command sequence",
]
`);
});
