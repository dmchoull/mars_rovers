import { parse } from "../parser";

test("parses valid input", () => {
  const parsedData = parse("11 9\n10 2 N\nLMLMLMLMM\n3 4 E\n\nMMRMMRMRRM\n\n");

  const expectedData = {
    plateau: {
      width: 11,
      height: 9,
    },
    rovers: [
      {
        id: 1,
        orientation: "N",
        coordinates: { x: 10, y: 2 },
      },
      {
        id: 2,
        orientation: "E",
        coordinates: { x: 3, y: 4 },
      },
    ],
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
