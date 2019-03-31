import { curry } from "folktale/core/lambda";
import { collect, Success } from "folktale/validation";
import { isValidPlateau } from "./plateau";
import { isValidRover } from "./rover";
import { isValidCommandSequence } from "./commands";

const MissionData = curry(3, (plateau, rovers, commands) => ({ plateau, rovers, commands }));

function validateMissionData({ plateau, rovers, commands }) {
  return Success(MissionData)
    .apply(isValidPlateau(plateau))
    .apply(collect(rovers.map(isValidRover)).map(_ => rovers))
    .apply(collect(commands.map(isValidCommandSequence)).map(_ => commands));
}

export { validateMissionData };
