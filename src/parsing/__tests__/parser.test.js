import { parse } from "../parser";
import { rover } from "../../rover";
import { coordinates } from "../../coordinates";

test("parses valid input", () => {
  const parsedData = parse("11 9\n10 2 N\nLMLMLMLMM\n3 4 E\n\nMMRMMRMRRM\n\n");

  const expectedData = {
    plateau: {
      width: 11,
      height: 9,
    },
    rovers: [rover(0, "N", coordinates(10, 2)), rover(1, "E", coordinates(3, 4))],
    commands: [
      {
        targetRover: 1,
        commands: ["L", "M", "L", "M", "L", "M", "L", "M", "M"],
      },
      {
        targetRover: 2,
        commands: ["M", "M", "R", "M", "M", "R", "M", "R", "R", "M"],
      },
    ],
  };

  expect(parsedData).toEqual(expectedData);
});
