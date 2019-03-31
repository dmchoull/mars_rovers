import { curry } from "folktale/core/lambda";
import { collect, Success } from "folktale/validation";
import { isValidPlateau } from "./plateau";
import { isValidRover } from "./rover";
import { isValidCommandSequence } from "./commands";

const InputLines = curry(3, (plateauLine, roverLines, commandLines) => ({ plateauLine, roverLines, commandLines }));

function validateInput({ plateauLine, roverLines, commandLines }) {
  return Success(InputLines)
    .apply(isValidPlateau(plateauLine))
    .apply(collect(roverLines.map(isValidRover)).map(_ => roverLines))
    .apply(collect(commandLines.map(isValidCommandSequence)).map(_ => commandLines));
}

export { validateInput };
