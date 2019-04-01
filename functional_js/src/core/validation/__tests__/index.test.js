import { Failure, Success } from "folktale/validation";
import { plateau } from "../../plateau";
import { coordinates } from "../../coordinates";
import { rover } from "../../rover";
import { commandSequence } from "../../commands";
import { validateMissionData } from "..";

const validPlateau = plateau(coordinates(5, 5));
const validRovers = [rover(1, "N", coordinates(1, 2)), rover(2, "E", coordinates(3, 4))];
const validCommands = [commandSequence(1, ["M", "L", "R", "M"])];

const missionData = {
  plateau: validPlateau,
  rovers: validRovers,
  commands: validCommands,
};

test("returns success with valid mission data", () => {
  expect(validateMissionData(missionData)).toEqual(Success(missionData));
});

test("returns all failures with invalid mission data", () => {
  const invalidData = {
    ...missionData,
    rovers: [rover(3, "X", coordinates(1, 2)), ...validRovers],
    commands: [commandSequence(1, ["M", "X"])],
  };

  expect(validateMissionData(invalidData)).toEqual(
    Failure(['invalid direction "X"', "command sequence contains an invalid command"])
  );
});
