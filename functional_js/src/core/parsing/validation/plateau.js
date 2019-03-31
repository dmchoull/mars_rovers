import { Success, Failure } from "folktale/validation";

function isValidPlateau(plateauLine) {
  return hasValidCoordinates(plateauLine);
}

const validPlateauRegExp = /^\d+\s+\d+$/;

function hasValidCoordinates(plateauLine) {
  return validPlateauRegExp.test(plateauLine)
    ? Success(plateauLine)
    : Failure(["plateau line must contain valid coordinates"]);
}

export { isValidPlateau };
