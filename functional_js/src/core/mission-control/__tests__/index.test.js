import { plateau } from "../../plateau";
import { coordinates } from "../../coordinates";
import { rover } from "../../rover";
import { commandSequence } from "../../commands";
import { executeMission } from "..";

const missionData = {
  plateau: plateau(coordinates(5, 5)),
  rovers: [rover(1, "N", coordinates(1, 2)), rover(2, "W", coordinates(0, 5))],
  commands: [
    commandSequence(1, ["L", "M", "L", "M", "L", "M", "L", "M", "M"]),
    commandSequence(2, ["M", "R", "M", "M", "R", "M", "M", "R", "M"]),
  ],
};

test("runs mission and returns final state of the rovers", () => {
  const { plateau, rovers } = executeMission(missionData);

  expect(plateau).toEqual(missionData.plateau);
  expect(rovers).toEqual([rover(1, "N", coordinates(1, 3)), rover(2, "S", coordinates(2, 4))]);
});
