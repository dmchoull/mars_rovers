import { plateau } from "../../plateau";
import { coordinates } from "../../coordinates";
import { rover } from "../../rover";
import { commandSequence } from "../../commands";
import { executeMission } from "../index";

test("runs mission and returns final state of the rovers", () => {
  const missionData = {
    plateau: plateau(coordinates(5, 5)),
    rovers: [rover(1, "N", coordinates(1, 2)), rover(2, "E", coordinates(3, 3))],
    commands: [
      commandSequence(1, ["L", "M", "L", "M", "L", "M", "L", "M", "M"]),
      commandSequence(2, ["M", "M", "R", "M", "M", "R", "M", "R", "R", "M"]),
    ],
  };

  const { rovers } = executeMission(missionData);

  expect(rovers).toEqual([rover(1, "N", coordinates(1, 3)), rover(2, "E", coordinates(5, 1))]);
});
