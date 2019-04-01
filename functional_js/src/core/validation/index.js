import { curry } from "folktale/core/lambda";
import { collect, Success } from "folktale/validation";
import { isValidPlateau } from "./plateau";
import { isValidRover } from "./rover";
import { isValidCommandSequence } from "./commands";

const MissionData = curry(3, (plateau, rovers, commands) => ({ plateau, rovers, commands }));

function validateMissionData(missionData) {
  const { plateau, rovers, commands } = missionData;
  return Success(MissionData)
    .apply(isValidPlateau(plateau))
    .apply(validateAll(rovers, isValidRover(plateau)))
    .apply(validateAll(commands, isValidCommandSequence));
}

function validateAll(list, validationFn) {
  return collect(list.map(validationFn)).map(_ => list);
}

export { validateMissionData };
