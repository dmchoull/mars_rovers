import { Failure, Success } from "folktale/validation";
import { areValidCoordinates } from "./coordinates";

function isValidPlateau(plateau) {
  return hasValidCoordinates(plateau);
}

function hasValidCoordinates(plateau) {
  return areValidCoordinates(plateau.bounds.upper)
    ? Success(plateau)
    : Failure(["plateau upper right boundary coordinates are invalid"]);
}

export { isValidPlateau };
